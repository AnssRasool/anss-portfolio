import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { TechStack } from "@/components/TechStack";
import { ProjectCard } from "@/components/ProjectCard";
import { GitHubContributions } from "@/components/GitHubContributions";
import { LatestArticles } from "@/components/LatestArticles";
import { projects } from "@/data/projects";
import { getAllArticles } from "@/lib/markdown";

export default function Home() {
  const articles = getAllArticles();
  // Show max 4 projects on the home page (2 per row)
  const featuredProjects = projects.slice(0, 4);
  // Show up to 3 articles (newest to oldest)
  const recentArticles = articles.slice(0, 3);

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Experience Section (right below Hero, jzitnik style timeline) */}
      <Experience />

      {/* 3. Technologies Section (andrijaweb style with separator) */}
      <TechStack />

      {/* 4. Featured Projects Section (sahilverma style, 2 per row, max 4 items) */}
      <section className="py-6">
        {/* Same-line Header with View All Button */}
        <div className="flex items-center justify-between gap-4 border-b border-[#E7E2DA] dark:border-white/10 pb-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[#1A1815] dark:text-white sm:text-3xl">
              Featured Projects
            </h2>
            <p className="text-sm text-[#75726B] dark:text-stone-400 mt-1">
              Select technical solutions solving concrete engineering problems.
            </p>
          </div>
          <Link
            href="/projects"
            className="group inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-[#E7E2DA] bg-[#FFFFFF] px-4 py-2 text-xs font-semibold text-[#1A1815] shadow-xs transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#DDD7CD] dark:border-white/10 dark:bg-dark-200 dark:text-stone-200 dark:hover:border-dark-400 dark:hover:bg-dark-300"
          >
            <span>View All Projects</span>
          </Link>
        </div>

        {/* 2 per row Projects Grid (Max 4) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 5. Activity & Articles (2-Panel Section: GitHub Contributions & Latest Articles) */}
      <section className="py-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <GitHubContributions />
          <LatestArticles articles={recentArticles} />
        </div>
      </section>
    </div>
  );
}
