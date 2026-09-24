import Link from "next/link";
import { ArticleMetadata } from "@/lib/markdown";

interface LatestArticlesProps {
  articles: ArticleMetadata[];
}

export function LatestArticles({ articles }: LatestArticlesProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-[#E7E2DA] bg-[#FFFFFF] p-6 shadow-xs dark:border-white/10 dark:bg-dark-200">
      <div>
        {/* 1. Header with View All button (NO ARROWS, jump hover effect without shadow) */}
        <div className="flex items-center justify-between gap-4 border-b border-[#F0ECE4] dark:border-white/10 pb-4 mb-5">
          <div className="min-w-0">
            <h3 className="text-xl font-bold tracking-tight text-[#1A1815] dark:text-white">
              Latest Articles
            </h3>
            <p className="text-xs text-[#75726B] dark:text-stone-400 mt-0.5">
              Engineering deep dives & architectural notes
            </p>
          </div>
          <Link
            href="/writing"
            className="shrink-0 rounded-xl border border-[#E7E2DA] bg-[#FAF8F5] px-3.5 py-1.5 text-xs font-semibold text-[#1A1815] shadow-xs transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#DDD7CD] hover:bg-[#FFFFFF] dark:border-white/10 dark:bg-dark-300 dark:text-stone-200 dark:hover:bg-dark-200 dark:hover:border-dark-400"
          >
            View All
          </Link>
        </div>

        {/* 2. Articles List */}
        {articles.length === 0 ? (
          <div className="flex flex-1 items-center justify-center rounded-xl border border-dashed border-[#E7E2DA] dark:border-white/10 p-8 text-center text-xs text-[#75726B] dark:text-stone-400">
            No articles published yet.
          </div>
        ) : (
          <div className="space-y-3">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/writing/${article.slug}`}
                className="group flex flex-col justify-between rounded-xl border border-[#E7E2DA]/90 bg-[#FAF8F5]/60 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#DDD7CD] hover:bg-[#FAF8F5] dark:border-white/10 dark:bg-dark-300/60 dark:hover:border-dark-400 dark:hover:bg-dark-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-sm font-semibold text-[#1A1815] dark:text-white transition-colors group-hover:text-[#000000] dark:group-hover:text-white line-clamp-1">
                      {article.title}
                    </h4>
                    <span className="shrink-0 font-mono text-[11px] text-[#75726B] dark:text-stone-400">
                      {article.date}
                    </span>
                  </div>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[#5A5751] dark:text-stone-300">
                    {article.summary}
                  </p>
                </div>

                {article.tags && article.tags.length > 0 && (
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-medium text-[#8C887E] dark:text-stone-400">
                    <span>{article.tags.join(" • ")}</span>
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* 3. Panel Footer Status Note */}
      <div className="mt-4 flex items-center justify-between border-t border-[#F5F2EB] dark:border-white/10 pt-3 text-xs font-mono text-[#75726B] dark:text-stone-400">
        <span>Markdown driven</span>
        <span>{articles.length} recent {articles.length === 1 ? "article" : "articles"}</span>
      </div>
    </div>
  );
}
