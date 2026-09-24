import { tools } from "@/data/tools";
import { ToolCard } from "@/components/ToolCard";
import { Wrench, Terminal, Cpu } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Tools | Anss Rasool",
  description: "Curated developer utilities, performance probes, and free diagnostic tools built for engineers.",
};

export default function FreeToolsPage() {
  return (
    <div className="py-12 md:py-16 space-y-10">
      {/* Page Header */}
      <div className="space-y-4 border-b border-[#E7E2DA] pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E7E2DA] bg-[#F5F2EB] px-3 py-1 font-mono text-xs font-medium text-[#5A5751]">
            <Terminal className="h-3.5 w-3.5 text-[#C27847]" />
            <span>Developer Workbench</span>
          </span>
          <span className="rounded-full border border-emerald-600/20 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
            5 Live Utilities
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#1A1815] sm:text-4xl">
            Free Developer Tools
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-[#75726B]">
            A suite of zero-friction, client-side diagnostics and utility workbenches. Engineered for testing network latency, inspecting JWT claims, scoring SEO metadata, and simulating webhook events.
          </p>
        </div>

        {/* Quick Capabilities Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs text-[#75726B]">
          <span className="rounded-md bg-[#F5F2EB] px-2.5 py-1 text-[#5A5751]">
            ✓ 100% Client-Side Privacy
          </span>
          <span className="rounded-md bg-[#F5F2EB] px-2.5 py-1 text-[#5A5751]">
            ✓ Zero Sign-Up Required
          </span>
          <span className="rounded-md bg-[#F5F2EB] px-2.5 py-1 text-[#5A5751]">
            ✓ Sub-Millisecond Diagnostics
          </span>
        </div>
      </div>

      {/* 5 Dummy Tools Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
