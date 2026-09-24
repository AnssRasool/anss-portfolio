import Image from "next/image";
import { siteConfig } from "@/config/site";
import { MapPin, Download, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="py-12 md:py-20">
      <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row md:items-start md:gap-16">
        {/* Left: Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          {/* Status & Location Pill */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 md:justify-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50/80 px-3 py-1 text-xs font-medium text-emerald-800">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>Available for new projects</span>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#E7E2DA] bg-[#FAF8F5] px-3 py-1 text-xs font-medium text-[#5A5751]">
              <MapPin className="h-3.5 w-3.5 text-[#C27847]" />
              <span>{siteConfig.location}</span>
            </div>
          </div>

          {/* Heading without kickers */}
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1A1815] sm:text-5xl md:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="text-xl font-medium text-[#5A5751] sm:text-2xl">
              {siteConfig.role}
            </p>
          </div>

          {/* Authentic 3-Sentence Summary (Differentiated from CV) */}
          <p className="max-w-2xl text-base leading-relaxed text-[#5A5751] sm:text-lg">
            {siteConfig.summary}
          </p>

          {/* Technical Domain Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 md:justify-start">
            <span className="inline-flex items-center rounded-lg border border-[#E7E2DA] bg-[#FFFFFF] px-3 py-1 text-xs font-medium text-[#3F3D38] shadow-xs">
              Distributed Backends
            </span>
            <span className="inline-flex items-center rounded-lg border border-[#E7E2DA] bg-[#FFFFFF] px-3 py-1 text-xs font-medium text-[#3F3D38] shadow-xs">
              WebSockets & Event Streams
            </span>
            <span className="inline-flex items-center rounded-lg border border-[#E7E2DA] bg-[#FFFFFF] px-3 py-1 text-xs font-medium text-[#3F3D38] shadow-xs">
              Model Context Protocol (MCP)
            </span>
          </div>

          {/* Actions: Resume & Socials */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3 md:justify-start">
            <a
              href={siteConfig.resumeUrl}
              download="Anss_Rasool_Resume.pdf"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#1A1815] px-5 py-2.5 text-sm font-semibold text-[#FAF8F5] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#272522] hover:shadow-md"
            >
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              <span>Download CV / Resume</span>
            </a>

            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#E7E2DA] bg-[#FFFFFF] px-4 py-2.5 text-sm font-medium text-[#1A1815] shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#DDD7CD] hover:bg-[#F5F2EB]"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#E7E2DA] bg-[#FFFFFF] px-4 py-2.5 text-sm font-medium text-[#1A1815] shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#DDD7CD] hover:bg-[#F5F2EB]"
            >
              <svg className="h-4 w-4 fill-[#0A66C2]" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right: Picture */}
        <div className="relative shrink-0">
          <div className="relative h-44 w-44 overflow-hidden rounded-2xl border border-[#DDD7CD] bg-[#FFFFFF] p-1.5 shadow-md transition-transform duration-300 hover:scale-[1.02] sm:h-52 sm:w-52 md:h-60 md:w-60">
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#F5F2EB]">
              <Image
                src={siteConfig.avatarUrl}
                alt={siteConfig.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, 240px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
