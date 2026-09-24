import { tools } from "@/data/tools";
import { ToolCard } from "@/components/ToolCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Tools | Anss Rasool",
  description: "Curated developer utilities, performance probes, and free diagnostic tools built for developers.",
};

export default function FreeToolsPage() {
  return (
    <div className="py-12 md:py-16 space-y-10">
      {/* Page Header */}
      <div className="space-y-3 border-b border-[#E7E2DA] pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-[#1A1815] sm:text-4xl">
          Free Tools
        </h1>
        <p className="max-w-2xl text-base text-[#75726B]">
          A suite of zero-friction, client-side diagnostics and utility workbenches. Test network latency, inspect cryptographic JWT claims, score SEO metadata, and simulate webhook events live.
        </p>
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
