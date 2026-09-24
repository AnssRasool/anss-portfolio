import { workExperiences } from "@/data/experience";

export function Experience() {
  return (
    <section className="py-6">
      {/* Same-line Header with Separator */}
      <div className="flex items-center justify-between gap-4 border-b border-[#E7E2DA] dark:border-white/10 pb-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#1A1815] dark:text-white sm:text-3xl">
            Work Experience
          </h2>
          <p className="text-sm text-[#75726B] dark:text-stone-400 mt-1">
            Commercial engineering roles, production systems, and software delivered under scale.
          </p>
        </div>
      </div>

      {/* Timeline Container (inspired by jzitnik.dev, styled to match portfolio aesthetic) */}
      <div className="relative pl-6 sm:pl-8 space-y-10 before:absolute before:left-2 sm:before:left-2.5 before:top-2.5 before:bottom-2.5 before:w-px before:bg-[#E7E2DA] dark:before:bg-dark-400">
        {workExperiences.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Dot Node */}
            <div className="absolute -left-[23px] sm:-left-[27px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#FAF8F5] dark:border-dark-100 bg-[#1A1815] dark:bg-stone-200 shadow-xs" />

            {/* Content Container with jump hover (no shadow) and dark mode */}
            <div className="rounded-2xl border border-[#E7E2DA] bg-[#FFFFFF] p-5 sm:p-7 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#DDD7CD] dark:border-white/10 dark:bg-dark-200 dark:hover:border-dark-400">
              {/* Role, Company & Date Header */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between border-b border-[#F5F2EB] dark:border-white/10 pb-4">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-[#1A1815] dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-sm">
                    <span className="font-semibold text-[#1A1815] dark:text-white">{exp.company}</span>
                    <span className="text-[#DDD7CD] dark:text-dark-400">•</span>
                    <span className="text-[#75726B] dark:text-stone-400">{exp.location}</span>
                  </div>
                </div>

                <div className="self-start sm:self-auto">
                  <span className="font-mono text-xs sm:text-sm font-semibold text-[#1A1815] dark:text-stone-300">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Achievements & Responsibilities */}
              <ul className="mt-5 space-y-3.5 text-xs sm:text-sm text-[#5A5751] dark:text-stone-300 leading-relaxed">
                {exp.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3F3D38] dark:bg-stone-400" />
                    <span>
                      <strong className="font-semibold text-[#1A1815] dark:text-white">
                        {highlight.category}:
                      </strong>{" "}
                      {highlight.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
