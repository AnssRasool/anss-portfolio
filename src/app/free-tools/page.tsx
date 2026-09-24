import { tools } from "@/data/tools";
import { ToolCard } from "@/components/ToolCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Tools | Anss Rasool",
  description: "Curated developer utilities, performance probes, and free diagnostic tools.",
};

export default function FreeToolsPage() {
  return (
    <div className="py-12 md:py-16 space-y-10">
      {/* Page Header with distinctive tool flair */}
      <div className="space-y-3 border-b border-[#E7E2DA] pb-6">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-[#1A1815] px-2.5 py-0.5 text-[11px] font-semibold text-[#FAF8F5]">
            Utility Suite
          </span>
          <span className="text-xs text-[#75726B]">Open Source & Free Access</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-[#1A1815] sm:text-4xl">
          Free Tools
        </h1>
        <p className="max-w-2xl text-base text-[#75726B]">
          A collection of developer tools and utilities engineered to streamline backend testing, latency tracking, and schema transformations.
        </p>
      </div>

      {/* 5 Dummy Tools Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
