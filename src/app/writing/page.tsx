import { articles } from "@/data/articles";
import { ArticleCard } from "@/components/ArticleCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing | Anss Rasool",
  description: "Articles and notes on backend engineering, system architecture, and cloud infrastructure.",
};

export default function WritingPage() {
  return (
    <div className="py-12 md:py-16 space-y-10">
      {/* Page Header */}
      <div className="space-y-3 border-b border-[#E7E2DA] pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-[#1A1815] sm:text-4xl">
          Writing
        </h1>
        <p className="max-w-2xl text-base text-[#75726B]">
          Technical articles, post-mortems, and architectural reflections on building robust software.
        </p>
      </div>

      {/* 5 Dummy Articles Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
