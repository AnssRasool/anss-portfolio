export interface SiteConfig {
  name: string;
  role: string;
  focus: string;
  location: string;
  status: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
  };
  resumeUrl: string;
  avatarUrl: string;
  summary: string;
  highlights: { label: string; value: string }[];
  navItems: { label: string; href: string }[];
}

export const siteConfig: SiteConfig = {
  name: "Anss Rasool",
  role: "Full-Stack Developer",
  focus: "Backend, Cloud & Real-Time AI Systems",
  location: "Lahore, Pakistan",
  status: "Available for new projects & opportunities",
  email: "rasoolanss441@gmail.com",
  socials: {
    github: "https://github.com/AnssRasool",
    linkedin: "https://www.linkedin.com/in/anssrasool",
  },
  resumeUrl: "/my-resume.pdf",
  // Optimized 28KB WebP image for instant 0-delay load
  avatarUrl: "/my-pic.webp",
  // Authentic 3-sentence summary, distinct from CV text
  summary:
    "I am a Full-Stack Software Developer focused on backend architecture, resilient event-driven systems, and real-time streaming pipelines. I design high-throughput distributed services and autonomous AI tooling with C#, TypeScript, and Python, prioritizing sub-millisecond latencies and system correctness. Driven by developer ergonomics, clear operational telemetry, and building software that performs predictably under scale.",
  highlights: [
    { label: "Architecture", value: "Real-Time & Distributed" },
    { label: "AI Integration", value: "Model Context Protocol (MCP)" },
    { label: "Cloud Systems", value: "AWS SES, Webhooks & APIs" },
  ],
  navItems: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Writing", href: "/writing" },
    { label: "Free Tools", href: "/free-tools" },
    { label: "Contact", href: "/contact" },
  ],
};
