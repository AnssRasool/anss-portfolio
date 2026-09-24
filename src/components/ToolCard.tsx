import Link from "next/link";
import { Tool } from "@/data/tools";
import { Wrench, ArrowRight } from "lucide-react";

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={`/free-tools/${tool.slug}`}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E7E2DA] bg-[#F5F2EB]/40 p-5 transition-all duration-200 hover:border-[#DDD7CD] hover:bg-[#FFFFFF]"
    >
      {/* Top subtle badge and tool accent */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EAE5DB] text-[#5A5751] transition-colors group-hover:bg-[#1A1815] group-hover:text-[#FAF8F5]">
              <Wrench className="h-3.5 w-3.5" />
            </span>
            <span className="rounded-md border border-[#E7E2DA] bg-[#FFFFFF] px-2 py-0.5 font-mono text-[11px] font-medium text-[#75726B]">
              {tool.category}
            </span>
          </div>
          <span className="rounded-full bg-[#EAE5DB]/60 px-2.5 py-0.5 text-[10px] font-semibold text-[#5A5751]">
            {tool.badge}
          </span>
        </div>

        <div>
          <h3 className="text-base font-bold text-[#1A1815] transition-colors group-hover:text-[#1A1815]">
            {tool.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[#5A5751]">
            {tool.description}
          </p>
        </div>
      </div>

      {/* Bottom utility trigger */}
      <div className="mt-5 flex items-center justify-between border-t border-[#E7E2DA]/60 pt-3 text-xs font-semibold text-[#5A5751] group-hover:text-[#1A1815]">
        <span>Open Utility</span>
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
