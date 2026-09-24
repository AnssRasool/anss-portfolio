import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E7E2DA] bg-[#FFFFFF] p-4 sm:p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#DDD7CD] hover:shadow-md">
      <div className="space-y-4">
        {/* Project Visual Schematic Banner (sahilverma style with inner rounded container, minus badge) */}
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[#E7E2DA]/60 bg-[#F5F2EB]">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Title, Category & Date */}
        <div className="space-y-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#1A1815] transition-colors">
              {project.title}
            </h3>
            <span className="font-mono text-xs font-medium text-[#75726B]">
              {project.date}
            </span>
          </div>
          <p className="text-xs font-medium text-[#75726B]">
            {project.category}
          </p>
        </div>

        {/* Problem Solved Description */}
        <p className="text-xs sm:text-sm leading-relaxed text-[#5A5751] line-clamp-3">
          {project.problemSolved}
        </p>
      </div>

      {/* Technologies - Names only pills */}
      <div className="mt-5 border-t border-[#F5F2EB] pt-3.5">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[#E7E2DA] bg-[#FAF8F5] px-2 py-0.5 font-mono text-[11px] font-medium text-[#3F3D38]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
