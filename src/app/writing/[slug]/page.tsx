import Link from "next/link";
import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, BookOpen } from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `Dummy Article ${article.count} | Writing | Anss Rasool`,
    description: article.summary,
  };
}

export default async function DummyArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="py-12 md:py-20 space-y-10">
      {/* Back button */}
      <div>
        <Link
          href="/writing"
          className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#75726B] hover:text-[#1A1815] transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to All Writing</span>
        </Link>
      </div>

      {/* Article Header reading "Dummy Article {count}" */}
      <header className="space-y-4 border-b border-[#E7E2DA] pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs text-[#75726B]">
          <span className="rounded-full bg-[#1A1815] px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#FAF8F5]">
            Dummy Article {article.count}
          </span>
          <span className="flex items-center gap-1 font-mono">
            <Calendar className="h-3.5 w-3.5" />
            <span>{article.date}</span>
          </span>
          <span>·</span>
          <span className="flex items-center gap-1 font-mono">
            <Clock className="h-3.5 w-3.5" />
            <span>{article.readTime}</span>
          </span>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-[#1A1815] sm:text-4xl md:text-5xl">
          Dummy Article {article.count}
        </h1>

        <p className="max-w-2xl text-lg text-[#5A5751] leading-relaxed">
          {article.summary}
        </p>
      </header>

      {/* Editorial Content */}
      <div className="space-y-8 text-base leading-relaxed text-[#3F3D38]">
        <div className="rounded-xl border border-[#E7E2DA] bg-[#FFFFFF] p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-[#1A1815]">
            1. Architectural Overview & Context
          </h2>
          <p>
            When engineering distributed systems with high concurrency requirements, decoupling components via idempotent message buses is essential. Under real-world workloads, ensuring zero-loss state transitions prevents split-brain anomalies and data corruption across database replicas.
          </p>
          <p>
            In this dummy article exploration, we analyze the structural trade-offs between WebSocket streaming loops and server-sent event (SSE) architectures for handling real-time telemetry updates.
          </p>
        </div>

        {/* Technical Code Block Snippet */}
        <div className="rounded-xl border border-[#1A1815] bg-[#1A1815] p-5 font-mono text-xs text-[#FAF8F5] overflow-x-auto space-y-2">
          <div className="flex items-center justify-between text-[#969289] border-b border-white/10 pb-2">
            <span>pipeline_worker.go</span>
            <span>Dummy Example</span>
          </div>
          <pre className="text-[#38BDF8]">
{`func ProcessEventStream(ctx context.Context, ch <-chan Event) error {
    for {
        select {
        case <-ctx.Done():
            return ctx.Err()
        case event, ok := <-ch:
            if !ok {
                return nil
            }
            if err := DispatchIdempotent(event); err != nil {
                log.Printf("[ERR] Failed event dispatch: %v", err)
            }
        }
    }
}`}
          </pre>
        </div>

        <div className="rounded-xl border border-[#E7E2DA] bg-[#FFFFFF] p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-[#1A1815]">
            2. Production Findings & Benchmarks
          </h2>
          <p>
            Through rigorous load profiling under synthetic 50,000 req/sec bursts, buffer contention was reduced by 64% by shifting from synchronous mutex lock locks to lock-free ring buffers. This pattern consistently achieves predictable sub-millisecond response latencies.
          </p>
        </div>
      </div>
    </article>
  );
}
