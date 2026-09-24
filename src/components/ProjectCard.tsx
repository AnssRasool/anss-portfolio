import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-[#E7E2DA] bg-[#FFFFFF] shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#DDD7CD] hover:shadow-md">
      {/* Project Visual Schematic Banner */}
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[#E7E2DA] bg-[#F5F2EB]">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 right-3 rounded-md border border-[#E7E2DA] bg-[#FAF8F5]/90 px-2 py-0.5 font-mono text-[11px] font-medium text-[#5A5751] backdrop-blur-sm">
          {project.date}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="space-y-3">
          <div className="space-y-1">
            <span className="font-mono text-[11px] font-semibold tracking-wider text-[#827D74] uppercase">
              {project.category}
            </span>
            <h3 className="text-xl font-bold tracking-tight text-[#1A1815] transition-colors group-hover:text-[#1A1815]">
              {project.title}
            </h3>
          </div>

          {/* Problem Solved Callout */}
          <div className="rounded-xl border border-[#E7E2DA] bg-[#FAF8F5] p-3.5 space-y-1">
            <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#827D74]">
              Problem Solved
            </p>
            <p className="text-xs leading-relaxed text-[#5A5751]">
              {project.problemSolved}
            </p>
          </div>
        </div>

        {/* Technologies - Names only, strictly NO logos */}
        <div className="mt-5 border-t border-[#F5F2EB] pt-4">
          <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-wider text-[#827D74]">
            Technologies Used
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-[#E7E2DA] bg-[#F5F2EB] px-2 py-0.5 font-mono text-xs font-medium text-[#3F3D38]"
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
