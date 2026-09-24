import { getAllArticles } from "@/lib/markdown";
import { WritingList } from "@/components/WritingList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing | Anss Rasool",
  description: "Articles and notes on backend development, system architecture, and cloud infrastructure.",
};

export default function WritingPage() {
  const articles = getAllArticles();

  return (
    <div className="py-12 md:py-16 space-y-10">
      {/* Page Header */}
      <div className="space-y-3 border-b border-[#E7E2DA] dark:border-white/10 pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-[#1A1815] dark:text-white sm:text-4xl">
          Writing
        </h1>
        <p className="max-w-2xl text-base text-[#75726B] dark:text-stone-400">
          Technical write-ups, post-mortems, and architectural reflections on backend development and cloud systems.
        </p>
      </div>

      {/* Interactive Writing Search & List */}
      <WritingList articles={articles} />
    </div>
  );
}
