import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Anss Rasool",
  description: "All projects chronologically ordered, detailing technical problems solved and tech stacks.",
};

export default function ProjectsPage() {
  return (
    <div className="py-12 md:py-20 space-y-10">
      {/* Page Header */}
      <div className="space-y-3 border-b border-[#E7E2DA] pb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-[#1A1815] sm:text-4xl">
          Projects
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-[#75726B]">
          Distributed backends, real-time streaming event pipelines, and developer tooling ordered chronologically. Each project highlights the concrete engineering problem solved and the technologies utilized.
        </p>
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
