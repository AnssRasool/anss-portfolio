"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Home,
  Briefcase,
  BookOpen,
  Mail,
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const navItems = siteConfig.navItems;

  // Icon mapping for compact mobile view (matching andrijaweb pattern)
  const getNavIcon = (href: string) => {
    switch (href) {
      case "/":
        return <Home className="h-4 w-4 shrink-0" />;
      case "/projects":
        return <Briefcase className="h-4 w-4 shrink-0" />;
      case "/writing":
        return <BookOpen className="h-4 w-4 shrink-0" />;
      case "/contact":
        return <Mail className="h-4 w-4 shrink-0" />;
      default:
        return <Home className="h-4 w-4 shrink-0" />;
    }
  };

  return (
    <header className="sticky top-4 z-50 flex w-full justify-center px-4 pointer-events-none mb-6">
      {/* Centered Floating Island Navbar (andrijaweb style with rounded-xl matching site buttons) */}
      <nav
        aria-label="Primary Navigation"
        className="pointer-events-auto flex items-center gap-1 sm:gap-1.5 rounded-xl border border-[#E7E2DA] bg-[#FAF8F5]/90 p-1.5 shadow-[0px_2px_8px_-2px_rgba(0,0,0,0.06),0px_1px_3px_0px_rgba(0,0,0,0.04)] backdrop-blur-md transition-all dark:border-white/10 dark:bg-dark-200/90 dark:shadow-[0px_2px_8px_-2px_rgba(0,0,0,0.5)]"
      >
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              title={item.label}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors ${
                isActive
                  ? "bg-[#EAE5DB] text-[#1A1815] shadow-xs dark:bg-dark-300 dark:text-white"
                  : "text-[#5A5751] hover:bg-[#F5F2EB]/80 hover:text-[#1A1815] dark:text-stone-400 dark:hover:bg-dark-300/80 dark:hover:text-white"
              }`}
            >
              {/* Mobile icon (compact bar) */}
              <span className="block sm:hidden p-0.5">
                {getNavIcon(item.href)}
              </span>
              {/* Desktop label */}
              <span className="hidden sm:inline font-medium">
                {item.label}
              </span>
            </Link>
          );
        })}

        {/* Subtle vertical separator */}
        <div className="h-4 w-px bg-[#E7E2DA] dark:bg-dark-400 mx-0.5" />

        {/* Theme Toggle Button */}
        <ThemeToggle />
      </nav>
    </header>
  );
}
