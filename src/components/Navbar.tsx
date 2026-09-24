"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { articles } from "@/data/articles";
import { tools } from "@/data/tools";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // If articleCount == 0 don't show in navbar. Same for freetoolCount == 0
  const filteredNavItems = siteConfig.navItems.filter((item) => {
    if (item.href === "/writing" && articles.length === 0) return false;
    if (item.href === "/free-tools" && tools.length === 0) return false;
    return true;
  });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E7E2DA] bg-[#FAF8F5]/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation (No AR / Anss Rasool logo per requirement 2) */}
        <nav className="hidden items-center gap-1 md:flex">
          {filteredNavItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#EAE5DB] text-[#1A1815]"
                    : "text-[#5A5751] hover:bg-[#F5F2EB]/40 hover:text-[#1A1815]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA / Resume Quick Link (Reduced hover darkening by 60%) */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-[#E7E2DA] bg-[#FFFFFF] px-3.5 py-1.5 text-xs font-semibold text-[#1A1815] transition-colors hover:border-[#DDD7CD] hover:bg-[#F5F2EB]/40"
          >
            <span>My Resume</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="ml-auto inline-flex items-center justify-center rounded-lg border border-[#E7E2DA] bg-[#FFFFFF] p-2 text-[#5A5751] hover:bg-[#F5F2EB]/40 hover:text-[#1A1815] md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-[#E7E2DA] bg-[#FAF8F5] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {filteredNavItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#EAE5DB] text-[#1A1815]"
                      : "text-[#5A5751] hover:bg-[#F5F2EB]/40 hover:text-[#1A1815]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-lg border border-[#E7E2DA] bg-[#FFFFFF] px-3.5 py-2.5 text-sm font-semibold text-[#1A1815] hover:bg-[#F5F2EB]/40"
              >
                <span>My Resume</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
