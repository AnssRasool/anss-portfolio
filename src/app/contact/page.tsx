import { siteConfig } from "@/config/site";
import { Mail, Download, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Anss Rasool",
  description: "Get in touch with Anss Rasool - Junior Full-Stack Developer.",
};

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20 space-y-12">
      {/* Page Header */}
      <div className="space-y-3 border-b border-[#E7E2DA] pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-[#1A1815] sm:text-4xl">
          My Contact
        </h1>
        <p className="max-w-2xl text-base text-[#75726B]">
          Have a project in mind, an opportunity to discuss, or just want to chat? Reach out :D
        </p>
      </div>

      {/* Main Contact Card */}
      <div className="rounded-2xl border border-[#E7E2DA] bg-[#FFFFFF] p-8 sm:p-12 shadow-sm space-y-10">
        {/* Name & Role */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-[#1A1815] sm:text-4xl">
            {siteConfig.name}
          </h2>
          <p className="text-lg text-[#75726B]">
            {siteConfig.role} · {siteConfig.focus}
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {/* Direct Email Action Button */}
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2.5 rounded-xl bg-[#1A1815] px-6 py-3.5 text-sm font-semibold text-[#FAF8F5] shadow-sm transition-colors hover:bg-[#272522]"
          >
            <Mail className="h-4 w-4" />
            <span>Send Email</span>
          </a>

          {/* Download Resume Button (Reduced hover darkening by 60%) */}
          <a
            href={siteConfig.resumeUrl}
            download="Anss_Rasool_Resume.pdf"
            className="inline-flex items-center gap-2.5 rounded-xl border border-[#E7E2DA] bg-[#F5F2EB] px-6 py-3.5 text-sm font-semibold text-[#1A1815] transition-colors hover:border-[#DDD7CD] hover:bg-[#F5F2EB]/50"
          >
            <Download className="h-4 w-4" />
            <span>My Resume</span>
          </a>
        </div>

        {/* Socials Section */}
        <div className="border-t border-[#E7E2DA] pt-8 space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[#969289]">
            Social Profiles & Code
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {/* GitHub Card */}
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-[#E7E2DA] bg-[#FAF8F5] p-4 transition-colors hover:border-[#DDD7CD] hover:bg-[#F5F2EB]/40"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFFFFF] border border-[#E7E2DA]">
                  <svg className="h-5 w-5 fill-current text-[#1A1815]" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1A1815]">GitHub</h4>
                  <p className="text-xs text-[#75726B]">@AnssRasool</p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-[#969289]" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-[#E7E2DA] bg-[#FAF8F5] p-4 transition-colors hover:border-[#DDD7CD] hover:bg-[#F5F2EB]/40"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFFFFF] border border-[#E7E2DA]">
                  <svg className="h-5 w-5 fill-[#0A66C2]" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1A1815]">LinkedIn</h4>
                  <p className="text-xs text-[#75726B]">Anss Rasool</p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-[#969289]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
