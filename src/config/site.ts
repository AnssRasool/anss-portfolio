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
    linkedin: "https://www.linkedin.com/in/anss-rasool", // Editable placeholder
  },
  resumeUrl: "/my-resume.pdf",
  // Optimized 28KB WebP image for instant 0-delay load
  avatarUrl: "/my-pic.webp",
  // Completely rewritten, personalized summary distinct from CV
  summary:
    "I am a Full-Stack Developer based in Lahore, Pakistan, specializing in high-throughput backend systems, real-time streaming audio pipelines, and autonomous AI integrations. Over the past year, I have engineered certified Model Context Protocol (MCP) servers, hardened cloud email infrastructure against multi-tenant vulnerabilities, and slashed real-time transcription latencies by over 80%. I thrive at the intersection of robust backend design, distributed event pipelines, and developer-first platform tooling.",
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
