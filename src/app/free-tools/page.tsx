import { tools } from "@/data/tools";
import { ToolCard } from "@/components/ToolCard";
import { FreeToolsConsole } from "@/components/FreeToolsConsole";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Tools | Anss Rasool",
  description: "Curated developer utilities, performance probes, and free diagnostic tools built for engineers.",
};

export default function FreeToolsPage() {
  return (
    <div className="py-12 md:py-20 space-y-12">
      {/* Page Header */}
      <div className="space-y-3 border-b border-[#E7E2DA] pb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-[#1A1815] sm:text-4xl">
          Free Developer Tools
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-[#75726B]">
          A suite of zero-friction, client-side diagnostics and utility workbenches. Test network latency, inspect cryptographic JWT claims, score SEO metadata, and simulate webhook events live.
        </p>
      </div>

      {/* Featured Interactive Workbench Dock */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight text-[#1A1815]">
          Interactive Console
        </h2>
        <FreeToolsConsole />
      </section>

      {/* Complete Tools Directory */}
      <section className="space-y-6 pt-4">
        <h2 className="text-xl font-bold tracking-tight text-[#1A1815]">
          All Utilities
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>
    </div>
  );
}
