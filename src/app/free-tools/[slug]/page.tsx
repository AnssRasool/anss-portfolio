import Link from "next/link";
import { tools } from "@/data/tools";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export default async function DummyToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);

  if (!tool) {
    notFound();
  }

  return (
    <div className="py-12 md:py-20 space-y-8">
      {/* Back button */}
      <div>
        <Link
          href="/free-tools"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#75726B] hover:text-[#1A1815] transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Free Tools</span>
        </Link>
      </div>

      {/* Clean blank content that reads "Dummy Tool {count}" */}
      <div className="rounded-2xl border border-[#E7E2DA] bg-[#FFFFFF] p-8 sm:p-12 text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-[#1A1815]">
          Dummy Tool {tool.count}
        </h1>
        <p className="text-sm text-[#75726B]">
          Slug: <span className="font-mono text-[#5A5751]">{tool.slug}</span>
        </p>
      </div>
    </div>
  );
}
