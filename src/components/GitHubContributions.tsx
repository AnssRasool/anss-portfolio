"use client";

import { useEffect, useState, useMemo } from "react";
import { useTheme } from "next-themes";

export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export interface LanguageStat {
  name: string;
  percentage: number;
  color: string;
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  CSS: "#563D7C",
  HTML: "#E34C26",
  Python: "#3572A5",
  Rust: "#DEA584",
  Go: "#00ADD8",
  "C++": "#F34B7D",
  C: "#555555",
  Shell: "#89E051",
  Java: "#B07219",
  Swift: "#F05138",
  PHP: "#4F5D95",
  Kotlin: "#A97BFF",
  Ruby: "#701516",
  Dart: "#00B4AB",
  Svelte: "#FF3E00",
  Vue: "#41B883",
};

const FALLBACK_LANGUAGES: LanguageStat[] = [
  { name: "TypeScript", percentage: 98.2, color: "#3178C6" },
  { name: "CSS", percentage: 1.4, color: "#563D7C" },
  { name: "JavaScript", percentage: 0.4, color: "#F7DF1E" },
];

const LEVEL_COLORS_LIGHT = [
  "#F0EDE6", // Level 0: soft neutral cream
  "#86EFAC", // Level 1: light green
  "#4ADE80", // Level 2: medium green
  "#16A34A", // Level 3: deep green
  "#15803D", // Level 4: forest green
];

const LEVEL_COLORS_DARK = [
  "#262626", // Level 0: dark neutral matching andrijaweb
  "#0E4429", // Level 1
  "#006D32", // Level 2
  "#26A641", // Level 3
  "#39D353", // Level 4
];

function formatDate(dateStr: string): string {
  try {
    const [year, month, day] = dateStr.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export function GitHubContributions() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [totalCount, setTotalCount] = useState<number>(12);
  const [languages, setLanguages] = useState<LanguageStat[]>(FALLBACK_LANGUAGES);
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const levelColors = isDark ? LEVEL_COLORS_DARK : LEVEL_COLORS_LIGHT;

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      // 1. Fetch GitHub contributions from API
      try {
        const res = await fetch(
          "https://github-contributions-api.jogruber.de/v4/AnssRasool?y=last"
        );
        if (res.ok) {
          const data = await res.json();
          if (isMounted && Array.isArray(data.contributions) && data.contributions.length > 0) {
            setContributions(data.contributions);
            if (data.total && typeof data.total.lastYear === "number") {
              setTotalCount(data.total.lastYear);
            }
          }
        }
      } catch (err) {
        console.error("Error fetching contributions:", err);
      }

      // 2. Fetch language breakdown from public repositories
      try {
        const reposRes = await fetch("https://api.github.com/users/AnssRasool/repos");
        if (reposRes.ok) {
          const repos = await reposRes.json();
          if (Array.isArray(repos) && repos.length > 0) {
            const langTotals: Record<string, number> = {};
            await Promise.all(
              repos
                .filter((r) => !r.fork)
                .map(async (r) => {
                  try {
                    const lRes = await fetch(r.languages_url);
                    if (lRes.ok) {
                      const lData = await lRes.json();
                      for (const [lang, bytes] of Object.entries(lData)) {
                        if (typeof bytes === "number") {
                          langTotals[lang] = (langTotals[lang] || 0) + bytes;
                        }
                      }
                    }
                  } catch {
                    if (r.language) {
                      langTotals[r.language] = (langTotals[r.language] || 0) + (r.size || 100);
                    }
                  }
                })
            );

            const totalBytes = Object.values(langTotals).reduce((a, b) => a + b, 0);
            if (totalBytes > 0) {
              const sorted = Object.entries(langTotals)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 5)
                .map(([name, bytes]) => ({
                  name,
                  percentage: Number(((bytes / totalBytes) * 100).toFixed(1)),
                  color: LANGUAGE_COLORS[name] || "#75726B",
                }));

              if (isMounted && sorted.length > 0) {
                setLanguages(sorted);
              }
            }
          }
        }
      } catch (err) {
        console.error("Error fetching repository languages:", err);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  // Group days into weeks of 7 days (Sunday to Saturday)
  const weeks = useMemo(() => {
    if (contributions.length === 0) {
      // Fallback empty placeholder weeks (53 weeks of 7 days)
      const placeholder: Array<Array<{ date: string; count: number; level: number; dayOfWeek: number; month: string }>> = [];
      const today = new Date();
      for (let w = 52; w >= 0; w--) {
        const week = [];
        for (let d = 0; d < 7; d++) {
          const dt = new Date(today);
          dt.setDate(dt.getDate() - (w * 7 + (6 - d)));
          const dateStr = dt.toISOString().split("T")[0];
          week.push({
            date: dateStr,
            count: 0,
            level: 0,
            dayOfWeek: d,
            month: dt.toLocaleString("en-US", { month: "short" }),
          });
        }
        placeholder.push(week);
      }
      return placeholder;
    }

    const result: Array<Array<{ date: string; count: number; level: number; dayOfWeek: number; month: string }>> = [];
    let currentWeek: Array<{ date: string; count: number; level: number; dayOfWeek: number; month: string }> = [];

    contributions.forEach((day) => {
      const [year, month, d] = day.date.split("-").map(Number);
      const dateObj = new Date(year, month - 1, d);
      const dayOfWeek = dateObj.getDay();
      const monthShort = dateObj.toLocaleString("en-US", { month: "short" });

      if (dayOfWeek === 0 && currentWeek.length > 0) {
        result.push(currentWeek);
        currentWeek = [];
      }
      currentWeek.push({
        ...day,
        dayOfWeek,
        month: monthShort,
      });
    });

    if (currentWeek.length > 0) {
      result.push(currentWeek);
    }
    return result;
  }, [contributions]);

  // Determine month labels aligned with week columns
  const monthLabels = useMemo(() => {
    const labels: Array<{ weekIndex: number; label: string }> = [];
    let lastMonth = "";

    weeks.forEach((week, index) => {
      const firstInMonth = week.find((day) => {
        const dayNum = parseInt(day.date.split("-")[2], 10);
        return dayNum <= 7;
      });

      if (firstInMonth && firstInMonth.month !== lastMonth) {
        labels.push({ weekIndex: index, label: firstInMonth.month });
        lastMonth = firstInMonth.month;
      }
    });

    return labels;
  }, [weeks]);

  const leftMargin = 26;
  const topMargin = 16;
  const colStep = 13;
  const rowStep = 13;
  const cellSize = 10;
  const totalSvgWidth = leftMargin + weeks.length * colStep + 6;
  const totalSvgHeight = topMargin + 7 * rowStep + 4;

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-[#E7E2DA] bg-[#FFFFFF] p-6 shadow-xs dark:border-white/10 dark:bg-dark-200">
      {/* 1. Header with Visit GitHub button (NO ARROWS) */}
      <div>
        <div className="flex items-center justify-between gap-4 border-b border-[#F0ECE4] dark:border-white/10 pb-4 mb-5">
          <div className="min-w-0">
            <h3 className="text-xl font-bold tracking-tight text-[#1A1815] dark:text-white">
              GitHub Contributions
            </h3>
            <p className="text-xs text-[#75726B] dark:text-stone-400 mt-0.5">
              Live activity & language distribution
            </p>
          </div>
          <a
            href="https://github.com/AnssRasool"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-xl border border-[#E7E2DA] bg-[#FAF8F5] px-3.5 py-1.5 text-xs font-semibold text-[#1A1815] shadow-xs transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#DDD7CD] hover:bg-[#FFFFFF] dark:border-white/10 dark:bg-dark-300 dark:text-stone-200 dark:hover:bg-dark-200 dark:hover:border-dark-400"
          >
            Visit GitHub
          </a>
        </div>

        {/* 2. Languages Percentage Bar (jasoncameron.dev style) */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-[#1A1815] dark:text-white">Languages</span>
            <span className="text-[11px] font-mono text-[#75726B] dark:text-stone-400">
              Public Repositories
            </span>
          </div>

          {/* Segmented Bar */}
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#EFEBE4] dark:bg-dark-300 flex">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="group relative h-full transition-all duration-300 first:rounded-l-full last:rounded-r-full"
                style={{
                  width: `${Math.max(lang.percentage, 1)}%`,
                  backgroundColor: lang.color,
                }}
              >
                {/* Hover Tooltip */}
                <div className="pointer-events-none absolute -top-8 left-1/2 z-20 -translate-x-1/2 rounded-md border border-[#E7E2DA] dark:border-white/10 bg-[#1A1815] dark:bg-dark-100 px-2 py-0.5 text-[11px] text-white whitespace-nowrap opacity-0 shadow-md transition-opacity duration-150 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5">
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span className="font-medium">{lang.name}</span>
                    <span>•</span>
                    <span>{lang.percentage}%</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Language Legend */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1 text-xs">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-1.5">
                <span
                  className="h-2 w-2 rounded-full shrink-0"
                  style={{ backgroundColor: lang.color }}
                />
                <span className="font-medium text-[#1A1815] dark:text-stone-200">{lang.name}</span>
                <span className="font-mono text-[#75726B] dark:text-stone-400 text-[11px]">
                  {lang.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle Section Divider */}
        <div className="border-t border-[#F0ECE4] dark:border-white/10 my-5" />

        {/* 3. GitHub Contributions Heatmap Calendar (prasoon-mahawar.dev style) */}
        <div>
          <div className="flex items-center justify-between text-xs mb-3">
            <span className="font-semibold text-[#1A1815] dark:text-white">Activity Graph</span>
            <span className="font-mono text-[11px] text-[#75726B] dark:text-stone-400">
              Past Year
            </span>
          </div>

          {/* Calendar SVG in scrollable container */}
          <div className="overflow-x-auto pb-2 scrollbar-none">
            <svg
              viewBox={`0 0 ${totalSvgWidth} ${totalSvgHeight}`}
              className="w-full select-none overflow-visible"
              style={{ minWidth: "640px" }}
            >
              {/* Day Labels on the Left */}
              <text
                x="0"
                y={topMargin + 1 * rowStep + 8}
                fill={isDark ? "#A8A29E" : "#8C887E"}
                fontSize="9"
                fontFamily="inherit"
              >
                Mon
              </text>
              <text
                x="0"
                y={topMargin + 3 * rowStep + 8}
                fill={isDark ? "#A8A29E" : "#8C887E"}
                fontSize="9"
                fontFamily="inherit"
              >
                Wed
              </text>
              <text
                x="0"
                y={topMargin + 5 * rowStep + 8}
                fill={isDark ? "#A8A29E" : "#8C887E"}
                fontSize="9"
                fontFamily="inherit"
              >
                Fri
              </text>

              {/* Month Labels across the top */}
              {monthLabels.map((m) => (
                <text
                  key={`${m.label}-${m.weekIndex}`}
                  x={leftMargin + m.weekIndex * colStep}
                  y="10"
                  fill={isDark ? "#A8A29E" : "#8C887E"}
                  fontSize="9"
                  fontFamily="inherit"
                >
                  {m.label}
                </text>
              ))}

              {/* Day Squares Grid */}
              {weeks.map((week, colIdx) => (
                <g key={`col-${colIdx}`}>
                  {week.map((day) => {
                    const x = leftMargin + colIdx * colStep;
                    const y = topMargin + day.dayOfWeek * rowStep;
                    return (
                      <rect
                        key={day.date}
                        x={x}
                        y={y}
                        width={cellSize}
                        height={cellSize}
                        rx={2}
                        fill={levelColors[day.level] || levelColors[0]}
                        className="cursor-pointer transition-all duration-150 hover:stroke-[#1A1815] dark:hover:stroke-white hover:stroke-[1.5]"
                        onMouseEnter={() => setHoveredDay(day)}
                        onMouseLeave={() => setHoveredDay(null)}
                      >
                        <title>
                          {day.count === 0
                            ? `No contributions on ${formatDate(day.date)}`
                            : `${day.count} contribution${day.count === 1 ? "" : "s"} on ${formatDate(day.date)}`}
                        </title>
                      </rect>
                    );
                  })}
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>

      {/* 4. Calendar Footer: Status bar and Less/More scale */}
      <div className="mt-3 flex items-center justify-between border-t border-[#F5F2EB] dark:border-white/10 pt-3 text-xs font-mono text-[#75726B] dark:text-stone-400">
        <div className="min-h-[18px]">
          {hoveredDay ? (
            <span className="text-[#1A1815] dark:text-white font-semibold">
              {hoveredDay.count === 0 ? "No" : hoveredDay.count}{" "}
              contribution{hoveredDay.count === 1 ? "" : "s"} on{" "}
              {formatDate(hoveredDay.date)}
            </span>
          ) : (
            <span>{totalCount} contributions in the last year</span>
          )}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-1.5 text-[11px]">
          <span>Less</span>
          {levelColors.map((color, idx) => (
            <span
              key={idx}
              className="inline-block h-2.5 w-2.5 rounded-[2px]"
              style={{ backgroundColor: color }}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
