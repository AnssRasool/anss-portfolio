import Link from "next/link";
import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { ProjectCard } from "@/components/ProjectCard";
import { ArticleRow } from "@/components/ArticleRow";
import { FreeToolsConsole } from "@/components/FreeToolsConsole";
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
    <div className="space-y-20 pb-24">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Technologies Section (andrijaweb style) */}
      <TechStack />

      {/* 3. Projects Section */}
      <section className="py-4">
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
            className="group inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-[#E7E2DA] bg-[#FFFFFF] px-4 py-2 text-xs font-semibold text-[#1A1815] shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#DDD7CD] hover:bg-[#F5F2EB]"
          >
            <span>View All Projects</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 4. Recent Articles Section (Editorial List Layout, Hidden if articleCount == 0) */}
      {recentArticles.length > 0 && (
        <section className="py-4">
          {/* Same-line Header with View All Button */}
          <div className="flex items-center justify-between gap-4 border-b border-[#E7E2DA] pb-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#1A1815] sm:text-3xl">
                Recent Writing
              </h2>
              <p className="text-sm text-[#75726B] mt-1">
                Engineering deep dives, architectural notes, and system patterns.
              </p>
            </div>
            <Link
              href="/writing"
              className="group inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-[#E7E2DA] bg-[#FFFFFF] px-4 py-2 text-xs font-semibold text-[#1A1815] shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#DDD7CD] hover:bg-[#F5F2EB]"
            >
              <span>View All Articles</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Minimalist Editorial List (Breaks card grid monotony) */}
          <div className="rounded-2xl border border-[#E7E2DA] bg-[#FFFFFF] p-2 sm:p-4 shadow-xs">
            {recentArticles.map((article) => (
              <ArticleRow key={article.id} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* 5. Free Tools Section (Tactile Developer Workbench Dock, Hidden if toolCount == 0) */}
      {recentTools.length > 0 && (
        <section className="py-4">
          {/* Same-line Header with View All Button */}
          <div className="flex items-center justify-between gap-4 border-b border-[#E7E2DA] pb-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#1A1815] sm:text-3xl">
                Free Developer Tools
              </h2>
              <p className="text-sm text-[#75726B] mt-1">
                Open-access utilities and developer diagnostics you can test live.
              </p>
            </div>
            <Link
              href="/free-tools"
              className="group inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-[#E7E2DA] bg-[#FFFFFF] px-4 py-2 text-xs font-semibold text-[#1A1815] shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#DDD7CD] hover:bg-[#F5F2EB]"
            >
              <span>View All Tools</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Interactive Developer Workbench Console */}
          <FreeToolsConsole />
        </section>
      )}
    </div>
  );
}
