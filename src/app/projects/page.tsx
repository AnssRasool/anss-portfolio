import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Anss Rasool",
  description: "All projects chronologically ordered, detailing technical problems solved and tech stacks.",
};

export default function ProjectsPage() {
  return (
    <div className="py-12 md:py-16 space-y-10">
      {/* Page Header */}
      <div className="space-y-3 border-b border-[#E7E2DA] pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-[#1A1815] sm:text-4xl">
          Projects
        </h1>
        <p className="max-w-2xl text-base text-[#75726B]">
          A comprehensive showcase of technical systems, backend pipelines, and software projects ordered newest to oldest.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
