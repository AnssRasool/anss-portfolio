import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="mt-auto border-t border-[#E7E2DA] bg-[#FAF8F5] py-12 text-[#1A1815]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Card modeled after rafaelamaral */}
        <div className="flex flex-col justify-between gap-10 rounded-2xl border border-[#E7E2DA] bg-[#F5F2EB]/60 p-8 sm:p-10 md:flex-row md:items-end">
          {/* Logo / Big Name */}
          <div className="space-y-3">
            <p className="text-4xl font-bold tracking-tight text-[#1A1815] sm:text-5xl">
              Anss
              <br />
              Rasool.
            </p>
            <p className="text-sm text-[#75726B]">
              Full-Stack Developer · Backend & Cloud Systems
            </p>
          </div>

          {/* Nav links columns */}
          <div className="flex flex-wrap gap-12 sm:gap-16">
            {/* Explore column */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#75726B]">
                Explore
              </h4>
              <ul className="space-y-2 text-sm text-[#5A5751]">
                {siteConfig.navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-[#1A1815] hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Let's Connect column */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#75726B]">
                Let&#39;s Connect
              </h4>
              <ul className="space-y-2 text-sm text-[#5A5751]">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="transition-colors hover:text-[#1A1815] hover:underline"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#1A1815] hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#1A1815] hover:underline"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#1A1815] hover:underline"
                  >
                    Resume (PDF)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sub-footer copyright */}
        <div className="mt-6 flex flex-col items-center justify-between gap-2 px-2 text-xs text-[#969289] sm:flex-row">
          <p>© {currentYear} Anss Rasool. All rights reserved.</p>
          <p>Built with React & Next.js</p>
        </div>
      </div>
    </footer>
  );
}
