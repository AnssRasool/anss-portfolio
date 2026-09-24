"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg p-1.5 opacity-0" aria-hidden="true" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg text-[#5A5751] transition-colors hover:bg-[#F5F2EB]/80 hover:text-[#1A1815] dark:text-stone-300 dark:hover:bg-dark-300 dark:hover:text-white"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        <Sun className="h-4 w-4 shrink-0 transition-transform duration-200 hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 shrink-0 transition-transform duration-200 hover:-rotate-12" />
      )}
    </button>
  );
}
