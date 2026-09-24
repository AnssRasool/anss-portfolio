import Link from "next/link";
import { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/writing/${article.slug}`}
      className="group flex flex-col justify-between rounded-2xl border border-[#E7E2DA] bg-[#FFFFFF] p-5 shadow-xs transition-transform duration-200 hover:-translate-y-1 hover:border-[#DDD7CD] hover:shadow-md dark:border-white/10 dark:bg-dark-200 dark:hover:border-dark-400 dark:hover:shadow-none"
    >
      <div className="space-y-3">
        {/* Top metadata (date & read time, without ART-0X codes) */}
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#75726B] dark:text-stone-400">
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>

        {/* Title & Summary */}
        <div>
          <h3 className="text-base font-bold text-[#1A1815] dark:text-white transition-colors group-hover:text-[#1A1815] dark:group-hover:text-white">
            {article.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#5A5751] dark:text-stone-300">
            {article.summary}
          </p>
        </div>
      </div>

      {/* Footer tags below divider (Tech • AI • MCP format) */}
      <div className="mt-5 border-t border-[#F5F2EB] dark:border-white/10 pt-3 text-xs font-medium text-[#75726B] dark:text-stone-400">
        <span>{article.tags.join(" • ")}</span>
      </div>
    </Link>
  );
}
