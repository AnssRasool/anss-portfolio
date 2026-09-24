import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Layers } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Anss Rasool",
  description: "All projects chronologically ordered, detailing technical problems solved and tech stacks.",
};

export default function ProjectsPage() {
  return (
    <div className="py-12 md:py-16 space-y-10">
      {/* Page Header */}
      <div className="space-y-4 border-b border-[#E7E2DA] pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E7E2DA] bg-[#F5F2EB] px-3 py-1 font-mono text-xs font-medium text-[#5A5751]">
            <Layers className="h-3.5 w-3.5 text-[#C27847]" />
            <span>Engineering Showcase</span>
          </span>
          <span className="rounded-full border border-[#E7E2DA] bg-[#FFFFFF] px-2.5 py-0.5 font-mono text-xs text-[#75726B]">
            {projects.length} Total Projects
          </span>
        </div>

        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-[#1A1815] sm:text-4xl">
            Featured Projects
          </h1>
          <p className="mt-1 max-w-2xl text-base leading-relaxed text-[#75726B]">
            A showcase of distributed backends, streaming event pipelines, and developer tooling ordered chronologically. Each project highlights the concrete engineering problem solved and the technologies utilized.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
