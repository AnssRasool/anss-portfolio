export interface SiteConfig {
  name: string;
  role: string;
  focus: string;
  location: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
  };
  resumeUrl: string;
  avatarUrl: string;
  summary: string;
  navItems: { label: string; href: string }[];
}

export const siteConfig: SiteConfig = {
  name: "Anss Rasool",
  role: "Full-Stack Developer",
  focus: "Backend, Cloud & Real-Time Systems",
  location: "Lahore, Pakistan",
  email: "rasoolanss441@gmail.com",
  socials: {
    github: "https://github.com/AnssRasool",
    linkedin: "https://www.linkedin.com/in/anss-rasool", // Editable placeholder
  },
  resumeUrl: "/my-resume.pdf",
  avatarUrl: "/my-pic.png",
  summary:
    "Junior Full-Stack Developer with a deep focus on resilient backend architectures, real-time streaming pipelines, and AI systems. Experienced in shipping cross-platform clients, engineering standardized RESTful APIs, and optimizing system latency for high-throughput production environments. Passionate about clean code, robust system design, and developer-first tooling.",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Writing", href: "/writing" },
    { label: "Free Tools", href: "/free-tools" },
    { label: "Contact", href: "/contact" },
  ],
};
