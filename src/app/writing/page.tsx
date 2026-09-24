import { articles } from "@/data/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { BookOpen, PenTool } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing | Anss Rasool",
  description: "Technical articles, post-mortems, and architectural reflections on backend engineering and cloud systems.",
};

export default function WritingPage() {
  return (
    <div className="py-12 md:py-16 space-y-10">
      {/* Page Header */}
      <div className="space-y-4 border-b border-[#E7E2DA] pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E7E2DA] bg-[#F5F2EB] px-3 py-1 font-mono text-xs font-medium text-[#5A5751]">
            <PenTool className="h-3.5 w-3.5 text-[#C27847]" />
            <span>Technical Notes</span>
          </span>
          <span className="rounded-full border border-[#E7E2DA] bg-[#FFFFFF] px-2.5 py-0.5 font-mono text-xs text-[#75726B]">
            {articles.length} Publications
          </span>
        </div>

        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-[#1A1815] sm:text-4xl">
            Writing & Engineering Notes
          </h1>
          <p className="mt-1 max-w-2xl text-base leading-relaxed text-[#75726B]">
            Technical write-ups, post-mortems, and system design patterns focused on low-latency backend architectures, distributed event buses, and developer tooling.
          </p>
        </div>
      </div>

      {/* 5 Dummy Articles Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
