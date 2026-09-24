import Link from "next/link";
import { Tool } from "@/data/tools";
import { ArrowRight, Activity, Terminal, ShieldCheck, FileCode, Radio } from "lucide-react";

interface ToolCardProps {
  tool: Tool;
}

function MiniGadgetPreview({ type }: { type: Tool["previewType"] }) {
  switch (type) {
    case "ping":
      return (
        <div className="rounded-lg border border-[#E7E2DA] bg-[#FAF8F5] p-2.5 font-mono text-[11px] text-[#5A5751]">
          <div className="flex items-center justify-between text-[#75726B]">
            <span>TTFB: 24ms</span>
            <span className="text-emerald-600 font-semibold">200 OK</span>
          </div>
          <div className="mt-1.5 flex h-1.5 w-full overflow-hidden rounded-full bg-[#EAE5DB]">
            <div className="w-1/4 bg-[#3178C6]" title="DNS 4ms"></div>
            <div className="w-1/3 bg-[#F59E0B]" title="TLS 12ms"></div>
            <div className="w-1/3 bg-[#10B981]" title="TTFB 24ms"></div>
          </div>
        </div>
      );
    case "jwt":
      return (
        <div className="rounded-lg border border-[#E7E2DA] bg-[#FAF8F5] p-2.5 font-mono text-[11px] text-[#5A5751]">
          <div className="flex items-center justify-between">
            <span className="text-[#8B5CF6] font-semibold">RS256</span>
            <span className="text-xs text-emerald-600 font-medium">Valid Token</span>
          </div>
          <p className="mt-1 truncate text-[#75726B]">
            {`{"sub":"usr_99","exp":1789200}`}
          </p>
        </div>
      );
    case "seo":
      return (
        <div className="rounded-lg border border-[#E7E2DA] bg-[#FAF8F5] p-2.5 font-mono text-[11px] text-[#5A5751]">
          <div className="flex items-center justify-between">
            <span className="text-[#1A1815] font-semibold">Audit Score</span>
            <span className="font-bold text-emerald-700">96 / 100</span>
          </div>
          <div className="mt-1 flex items-center gap-1.5 text-[10px] text-[#75726B]">
            <span className="text-emerald-600">✓ Title</span>
            <span>·</span>
            <span className="text-emerald-600">✓ OG Tags</span>
            <span>·</span>
            <span className="text-emerald-600">✓ Canonical</span>
          </div>
        </div>
      );
    case "schema":
      return (
        <div className="rounded-lg border border-[#E7E2DA] bg-[#FAF8F5] p-2.5 font-mono text-[11px] text-[#5A5751]">
          <div className="flex items-center justify-between">
            <span className="text-[#3178C6]">JSON</span>
            <span className="text-[#969289]">⇄</span>
            <span className="text-[#C27847]">YAML</span>
          </div>
          <p className="mt-1 truncate text-[#75726B]">
            schema.v2.json → config.prod.yaml
          </p>
        </div>
      );
    case "webhook":
      return (
        <div className="rounded-lg border border-[#E7E2DA] bg-[#FAF8F5] p-2.5 font-mono text-[11px] text-[#5A5751]">
          <div className="flex items-center justify-between">
            <span className="rounded bg-emerald-100 px-1 py-0.2 text-[10px] font-bold text-emerald-800">
              POST
            </span>
            <span className="text-[#75726B]">HMAC-SHA256</span>
          </div>
          <p className="mt-1 truncate text-[#75726B]">
            /v1/events/payment.succeeded
          </p>
        </div>
      );
    default:
      return null;
  }
}

function getToolIcon(type: Tool["previewType"]) {
  switch (type) {
    case "ping":
      return <Activity className="h-4 w-4 text-[#3178C6]" />;
    case "jwt":
      return <ShieldCheck className="h-4 w-4 text-[#8B5CF6]" />;
    case "seo":
      return <Terminal className="h-4 w-4 text-[#10B981]" />;
    case "schema":
      return <FileCode className="h-4 w-4 text-[#C27847]" />;
    case "webhook":
      return <Radio className="h-4 w-4 text-emerald-600" />;
  }
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={`/free-tools/${tool.slug}`}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E7E2DA] bg-[#FFFFFF] p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#DDD7CD] hover:shadow-md"
    >
      <div className="space-y-4">
        {/* Header row: Icon, Category & Tool Number */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E7E2DA] bg-[#FAF8F5] transition-colors group-hover:bg-[#1A1815] group-hover:text-[#FAF8F5]">
              {getToolIcon(tool.previewType)}
            </span>
            <span className="rounded-md border border-[#E7E2DA] bg-[#F5F2EB] px-2 py-0.5 font-mono text-[11px] font-medium text-[#5A5751]">
              {tool.category}
            </span>
          </div>
          <span className="font-mono text-[11px] font-semibold text-[#827D74]">
            [T-{String(tool.count).padStart(2, "0")}]
          </span>
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="text-base font-bold text-[#1A1815] transition-colors group-hover:text-[#1A1815]">
            {tool.title}
          </h3>
          <p className="text-xs font-medium text-[#75726B]">
            {tool.toolName}
          </p>
          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#5A5751]">
            {tool.description}
          </p>
        </div>

        {/* Interactive Gadget Miniature */}
        <MiniGadgetPreview type={tool.previewType} />
      </div>

      {/* Footer trigger */}
      <div className="mt-5 flex items-center justify-between border-t border-[#F5F2EB] pt-3 text-xs font-semibold text-[#5A5751] transition-colors group-hover:text-[#1A1815]">
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span className="text-[11px] font-medium text-[#75726B]">Live Utility</span>
        </div>
        <div className="flex items-center gap-1 text-xs font-semibold text-[#1A1815]">
          <span>Launch Tool</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
