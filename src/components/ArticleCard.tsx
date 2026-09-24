import Link from "next/link";
import { Article } from "@/data/articles";
import { ArrowUpRight } from "lucide-react";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/writing/${article.slug}`}
      className="group flex flex-col justify-between rounded-2xl border border-[#E7E2DA] bg-[#FFFFFF] p-5 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:border-[#DDD7CD] hover:shadow-md"
    >
      <div className="space-y-3">
        {/* Top metadata */}
        <div className="flex items-center justify-between text-xs">
          <span className="font-mono text-[11px] font-semibold text-[#827D74]">
            [ART-{String(article.count).padStart(2, "0")}]
          </span>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#75726B]">
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* Title & Summary */}
        <div>
          <h3 className="text-base font-bold text-[#1A1815] transition-colors group-hover:text-[#1A1815]">
            {article.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#5A5751]">
            {article.summary}
          </p>
        </div>
      </div>

      {/* Footer trigger */}
      <div className="mt-5 flex items-center justify-between border-t border-[#F5F2EB] pt-3 text-xs font-semibold text-[#75726B] transition-colors group-hover:text-[#1A1815]">
        <span className="font-mono text-[11px]">Technical Note</span>
        <div className="flex items-center gap-1">
          <span>Read note</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
