import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-[#E7E2DA] bg-[#FFFFFF] transition-all duration-200 hover:border-[#DDD7CD] hover:shadow-sm">
      {/* Project Visual / Logo Banner */}
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[#E7E2DA] bg-[#F5F2EB]">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-bold tracking-tight text-[#1A1815]">
              {project.title}
            </h3>
            <span className="rounded-md border border-[#E7E2DA] bg-[#F5F2EB] px-2 py-0.5 text-xs font-medium text-[#75726B]">
              {project.date}
            </span>
          </div>

          {/* Problem Statement */}
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#969289]">
              Problem Solved
            </p>
            <p className="text-sm leading-relaxed text-[#5A5751]">
              {project.problemSolved}
            </p>
          </div>
        </div>

        {/* Technologies - Names only, NO logos as required */}
        <div className="mt-5 pt-4 border-t border-[#F5F2EB]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#969289] mb-2">
            Technologies
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-[#F5F2EB] px-2.5 py-1 text-xs font-medium text-[#3F3D38]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
