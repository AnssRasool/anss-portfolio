import Image from "next/image";
import { Project } from "@/data/projects";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E7E2DA] bg-[#FFFFFF] p-4 sm:p-5 shadow-xs transition-colors duration-200 hover:border-[#DDD7CD] hover:shadow-sm dark:border-white/10 dark:bg-dark-200 dark:hover:border-dark-400">
      <div className="space-y-4">
        {/* Project Visual Schematic Banner (No zoom on hover, Top-Left GitHub & Link icons on hover) */}
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[#E7E2DA]/60 bg-[#F5F2EB] dark:border-white/10 dark:bg-dark-300">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Top-Left Action Icons: GitHub & Link (revealed on hover) */}
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100 z-10">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source code on GitHub"
                title="View source code on GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E7E2DA] bg-[#FAF8F5]/90 text-[#1A1815] shadow-xs backdrop-blur-md transition-colors hover:border-[#DDD7CD] hover:bg-[#FFFFFF] dark:border-white/10 dark:bg-dark-300/90 dark:text-stone-200 dark:hover:border-dark-400 dark:hover:bg-dark-200"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit project website"
                title="Visit project website"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E7E2DA] bg-[#FAF8F5]/90 text-[#1A1815] shadow-xs backdrop-blur-md transition-colors hover:border-[#DDD7CD] hover:bg-[#FFFFFF] dark:border-white/10 dark:bg-dark-300/90 dark:text-stone-200 dark:hover:border-dark-400 dark:hover:bg-dark-200"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        {/* Title & Date (No subtitles, No pills - just text) */}
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#1A1815] dark:text-white">
            {project.title}
          </h3>
          <span className="shrink-0 font-mono text-xs font-medium text-[#75726B] dark:text-stone-400">
            {project.date}
          </span>
        </div>

        {/* Problem Solved Description */}
        <p className="text-xs sm:text-sm leading-relaxed text-[#5A5751] dark:text-stone-300 line-clamp-3">
          {project.problemSolved}
        </p>
      </div>

      {/* Technologies - Names only pills */}
      <div className="mt-5 border-t border-[#F5F2EB] dark:border-white/10 pt-3.5">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[#E7E2DA] bg-[#FAF8F5] px-2 py-0.5 font-mono text-[11px] font-medium text-[#3F3D38] dark:border-white/10 dark:bg-dark-300 dark:text-stone-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
