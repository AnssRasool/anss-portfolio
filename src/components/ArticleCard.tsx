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
      className="group flex flex-col justify-between rounded-xl border border-[#E7E2DA] bg-[#FFFFFF] p-5 transition-all duration-200 hover:border-[#DDD7CD] hover:bg-[#F5F2EB]/50"
    >
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-[#969289]">
          <span>{article.date}</span>
          <span>{article.readTime}</span>
        </div>
        <h3 className="text-base font-semibold text-[#1A1815] transition-colors group-hover:text-[#C27847]">
          {article.title}
        </h3>
        <p className="line-clamp-2 text-xs leading-relaxed text-[#5A5751]">
          {article.summary}
        </p>
      </div>

      <div className="mt-4 flex items-center gap-1 text-xs font-medium text-[#75726B] group-hover:text-[#1A1815]">
        <span>Read article</span>
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
