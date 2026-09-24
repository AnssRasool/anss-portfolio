import Link from "next/link";
import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { ProjectCard } from "@/components/ProjectCard";
import { ArticleCard } from "@/components/ArticleCard";
import { ToolCard } from "@/components/ToolCard";
import { projects } from "@/data/projects";
import { articles } from "@/data/articles";
import { tools } from "@/data/tools";
import { ArrowRight } from "lucide-react";

export default function Home() {
  // Show 3 projects on the home page
  const featuredProjects = projects.slice(0, 3);
  // Show up to 3 articles (newest to oldest)
  const recentArticles = articles.slice(0, 3);
  // Show up to 3 tools (newest to oldest)
  const recentTools = tools.slice(0, 3);

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Technologies Section (andrijaweb style) */}
      <TechStack />

      {/* 3. Projects Section */}
      <section className="py-8">
        {/* Same-line Header with View All Button */}
        <div className="flex items-center justify-between gap-4 border-b border-[#E7E2DA] pb-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[#1A1815] sm:text-3xl">
              Featured Projects
            </h2>
            <p className="text-sm text-[#75726B] mt-1">
              Select technical solutions solving concrete engineering problems.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-[#E7E2DA] bg-[#FFFFFF] px-4 py-2 text-xs font-semibold text-[#1A1815] transition-colors hover:border-[#DDD7CD] hover:bg-[#F5F2EB]"
          >
            <span>View All Projects</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 4. Recent Articles Section (Hidden if articleCount == 0) */}
      {recentArticles.length > 0 && (
        <section className="py-8">
          {/* Same-line Header with View All Button */}
          <div className="flex items-center justify-between gap-4 border-b border-[#E7E2DA] pb-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#1A1815] sm:text-3xl">
                Recent Articles
              </h2>
              <p className="text-sm text-[#75726B] mt-1">
                Engineering deep dives, architectural notes, and system patterns.
              </p>
            </div>
            <Link
              href="/writing"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-[#E7E2DA] bg-[#FFFFFF] px-4 py-2 text-xs font-semibold text-[#1A1815] transition-colors hover:border-[#DDD7CD] hover:bg-[#F5F2EB]"
            >
              <span>View All Articles</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Articles Grid (Max 3) */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recentArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* 5. Free Tools Section (Hidden if toolCount == 0) */}
      {recentTools.length > 0 && (
        <section className="py-8">
          {/* Same-line Header with View All Button */}
          <div className="flex items-center justify-between gap-4 border-b border-[#E7E2DA] pb-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#1A1815] sm:text-3xl">
                Free Tools
              </h2>
              <p className="text-sm text-[#75726B] mt-1">
                Open-access utilities and developer diagnostics.
              </p>
            </div>
            <Link
              href="/free-tools"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-[#E7E2DA] bg-[#FFFFFF] px-4 py-2 text-xs font-semibold text-[#1A1815] transition-colors hover:border-[#DDD7CD] hover:bg-[#F5F2EB]"
            >
              <span>View All Tools</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Tools Grid (Max 3) */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recentTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
