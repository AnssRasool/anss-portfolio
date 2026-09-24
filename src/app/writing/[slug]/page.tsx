import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { getAllArticles, getArticleBySlug } from "@/lib/markdown";
import { ArticleContent } from "@/components/ArticleContent";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getArticleBySlug(slug);
  if (!data) return { title: "Article Not Found" };

  return {
    title: `${data.title} | Writing | Anss Rasool`,
    description: data.summary,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const data = await getArticleBySlug(slug);

  if (!data) {
    notFound();
  }

  return (
    <article className="py-12 md:py-20 space-y-10">
      {/* Back button */}
      <div>
        <Link
          href="/writing"
          className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#75726B] hover:text-[#1A1815] dark:text-stone-400 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to All Writing</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="space-y-4 border-b border-[#E7E2DA] dark:border-white/10 pb-8">
        {/* Datetime row */}
        <div className="flex items-center gap-2 text-xs text-[#75726B] dark:text-stone-400 font-mono">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            <span>{data.date}</span>
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{data.readTime}</span>
          </span>
        </div>

        {/* Tags row right below datetime row */}
        {data.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <Tag className="h-3.5 w-3.5 text-[#75726B] dark:text-stone-400 shrink-0" aria-hidden="true" />
            <div className="flex flex-wrap items-center gap-1.5">
              {data.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-[#E7E2DA] bg-[#FAF8F5] px-2 py-0.5 font-mono text-xs font-medium text-[#3F3D38] dark:border-white/10 dark:bg-dark-300 dark:text-stone-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        <h1 className="text-3xl font-extrabold tracking-tight text-[#1A1815] dark:text-white sm:text-4xl md:text-5xl pt-2">
          {data.title}
        </h1>

        <p className="max-w-2xl text-lg text-[#5A5751] dark:text-stone-300 leading-relaxed">
          {data.summary}
        </p>
      </header>

      {/* Editorial Content rendered from Markdown with automatic CodeBlock copy button */}
      <ArticleContent contentHtml={data.contentHtml} />
    </article>
  );
}
