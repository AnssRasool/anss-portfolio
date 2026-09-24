import Image from "next/image";
import { technologies, Technology } from "@/data/technologies";

export function TechStack() {
  return (
    <section className="py-6">
      {/* Section Header with Separator matching other sections */}
      <div className="flex items-center justify-between gap-4 border-b border-[#E7E2DA] dark:border-white/10 pb-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#1A1815] dark:text-white sm:text-3xl">
            Technologies
          </h2>
          <p className="text-sm text-[#75726B] dark:text-stone-400 mt-1">
            Languages, frameworks, databases, and tools I use.
          </p>
        </div>
      </div>

      {/* Grid modeled directly after andrijaweb with jump hover effect and downloaded official logos */}
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {technologies.map((tech: Technology) => (
          <div
            key={tech.name}
            className="flex items-center gap-4 rounded-xl border border-[#E7E2DA] bg-[#FFFFFF] p-3 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#DDD7CD] hover:bg-[#F5F2EB]/80 dark:border-white/10 dark:bg-dark-200 dark:hover:border-dark-400 dark:hover:bg-dark-300"
          >
            {/* Tinted icon container */}
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg p-2.5"
              style={{ backgroundColor: `${tech.accentColor}18` }}
            >
              <Image
                src={`/technologies/${tech.iconSlug}.svg`}
                alt={`${tech.name} logo`}
                width={28}
                height={28}
                className={`h-7 w-7 object-contain ${
                  tech.iconSlug === "nextjs" ? "dark:invert" : ""
                }`}
              />
            </div>

            {/* Label and description */}
            <div className="min-w-0 flex-1">
              <h4 className="truncate text-sm font-semibold text-[#1A1815] dark:text-white">
                {tech.name}
              </h4>
              <p className="truncate text-xs text-[#75726B] dark:text-stone-400">
                {tech.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
