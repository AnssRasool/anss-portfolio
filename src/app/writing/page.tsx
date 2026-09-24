import { articles } from "@/data/articles";
import { ArticleRow } from "@/components/ArticleRow";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing | Anss Rasool",
  description: "Technical articles, post-mortems, and architectural reflections on backend engineering and cloud systems.",
};

export default function WritingPage() {
  return (
    <div className="py-12 md:py-20 space-y-10">
      {/* Page Header */}
      <div className="space-y-3 border-b border-[#E7E2DA] pb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-[#1A1815] sm:text-4xl">
          Writing & Notes
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-[#75726B]">
          Technical deep-dives, post-mortems, and system design patterns focused on low-latency backend architectures, distributed event buses, and developer tooling.
        </p>
      </div>

      {/* Editorial List Archive */}
      <div className="rounded-2xl border border-[#E7E2DA] bg-[#FFFFFF] p-2 sm:p-6 shadow-xs divide-y divide-[#E7E2DA]">
        {articles.map((article) => (
          <ArticleRow key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
