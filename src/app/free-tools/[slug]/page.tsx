import Link from "next/link";
import { tools } from "@/data/tools";
import { notFound } from "next/navigation";
import { ArrowLeft, Sparkles, Terminal } from "lucide-react";
import { ToolWorkbench } from "@/components/ToolWorkbench";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return { title: "Tool Not Found" };

  return {
    title: `Dummy Tool ${tool.count} | Free Tools | Anss Rasool`,
    description: tool.description,
  };
}

export default async function DummyToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);

  if (!tool) {
    notFound();
  }

  return (
    <div className="py-12 md:py-16 space-y-8">
      {/* Back button */}
      <div>
        <Link
          href="/free-tools"
          className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#75726B] hover:text-[#1A1815] transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to All Free Tools</span>
        </Link>
      </div>

      {/* Dynamic subpage header displaying "Dummy Tool {count}" */}
      <div className="space-y-4 border-b border-[#E7E2DA] pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[#1A1815] px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#FAF8F5]">
            Dummy Tool {tool.count}
          </span>
          <span className="rounded-md border border-[#E7E2DA] bg-[#F5F2EB] px-2.5 py-0.5 font-mono text-xs text-[#5A5751]">
            {tool.category}
          </span>
          <span className="text-xs text-[#75726B]">
            Slug: <span className="font-mono text-[#5A5751]">{tool.slug}</span>
          </span>
        </div>

        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-[#1A1815] sm:text-4xl">
            Dummy Tool {tool.count}
          </h1>
          <p className="mt-1 text-lg font-semibold text-[#5A5751]">
            {tool.toolName}
          </p>
        </div>

        <p className="max-w-2xl text-base leading-relaxed text-[#75726B]">
          {tool.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {tool.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-[#E7E2DA] bg-[#FAF8F5] px-2 py-0.5 font-mono text-xs text-[#5A5751]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Real Interactive Developer Tool Workbench */}
      <ToolWorkbench tool={tool} />
    </div>
  );
}
