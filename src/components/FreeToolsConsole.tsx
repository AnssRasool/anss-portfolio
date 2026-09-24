"use client";

import { useState } from "react";
import Link from "next/link";
import { tools } from "@/data/tools";
import { ToolWorkbench } from "@/components/ToolWorkbench";
import { ArrowRight, Terminal, Activity, ShieldCheck, FileCode, Radio } from "lucide-react";

export function FreeToolsConsole() {
  const [activeSlug, setActiveSlug] = useState(tools[0].slug);
  const activeTool = tools.find((t) => t.slug === activeSlug) || tools[0];

  function getToolIcon(type: string) {
    switch (type) {
      case "ping":
        return <Activity className="h-3.5 w-3.5" />;
      case "jwt":
        return <ShieldCheck className="h-3.5 w-3.5" />;
      case "seo":
        return <Terminal className="h-3.5 w-3.5" />;
      case "schema":
        return <FileCode className="h-3.5 w-3.5" />;
      case "webhook":
        return <Radio className="h-3.5 w-3.5" />;
      default:
        return <Terminal className="h-3.5 w-3.5" />;
    }
  }

  return (
    <div className="space-y-4">
      {/* Interactive Tool Switcher Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {tools.map((tool) => {
          const isActive = tool.slug === activeSlug;
          return (
            <button
              key={tool.id}
              type="button"
              onClick={() => setActiveSlug(tool.slug)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-medium transition-all ${
                isActive
                  ? "bg-[#1A1815] text-[#FAF8F5] shadow-xs"
                  : "border border-[#E7E2DA] bg-[#FFFFFF] text-[#5A5751] hover:border-[#DDD7CD] hover:bg-[#F5F2EB]"
              }`}
            >
              <span className={isActive ? "text-[#FAF8F5]" : "text-[#75726B]"}>
                {getToolIcon(tool.previewType)}
              </span>
              <span>{tool.title}</span>
              <span className="text-[10px] opacity-70">
                ({tool.toolName})
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Tool Interactive Sandbox Console */}
      <div className="rounded-2xl border border-[#E7E2DA] bg-[#FFFFFF] p-1 shadow-xs">
        <ToolWorkbench tool={activeTool} />

        {/* Console Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#F5F2EB] px-6 py-4 bg-[#FAF8F5]/80 rounded-b-2xl">
          <div className="space-y-0.5">
            <p className="text-xs font-semibold text-[#1A1815]">
              {activeTool.title}: {activeTool.toolName}
            </p>
            <p className="text-xs text-[#75726B]">
              {activeTool.description}
            </p>
          </div>

          <Link
            href={`/free-tools/${activeTool.slug}`}
            className="group inline-flex items-center gap-1.5 rounded-xl border border-[#E7E2DA] bg-[#FFFFFF] px-4 py-2 text-xs font-semibold text-[#1A1815] transition-all hover:bg-[#F5F2EB]"
          >
            <span>Open Standalone Workbench</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
