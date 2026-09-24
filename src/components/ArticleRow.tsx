import Link from "next/link";
import { Article } from "@/data/articles";
import { ArrowRight } from "lucide-react";

interface ArticleRowProps {
  article: Article;
}

export function ArticleRow({ article }: ArticleRowProps) {
  return (
    <Link
      href={`/writing/${article.slug}`}
      className="group flex flex-col justify-between gap-2 border-b border-[#E7E2DA] py-4 px-2 transition-all duration-200 hover:bg-[#FFFFFF]/70 hover:pl-4 rounded-xl sm:flex-row sm:items-center"
    >
      {/* Date & Title */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 min-w-0">
        <span className="shrink-0 font-mono text-xs text-[#827D74]">
          {article.date}
        </span>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-[#1A1815] transition-colors group-hover:text-[#1A1815]">
            {article.title}
          </h3>
          <p className="line-clamp-1 text-xs text-[#75726B] mt-0.5">
            {article.summary}
          </p>
        </div>
      </div>

      {/* Read Time & Animated Arrow */}
      <div className="flex items-center gap-3 shrink-0 text-xs text-[#827D74] group-hover:text-[#1A1815] transition-colors self-end sm:self-auto">
        <span className="font-mono">{article.readTime}</span>
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
