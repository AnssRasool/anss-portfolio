export interface Technology {
  name: string;
  category: string;
  description: string;
  accentColor: string; // Used for icon background tint
  iconSlug: string;
}

export const technologies: Technology[] = [
  {
    name: "C# / .NET",
    category: "Backend",
    description: "Enterprise backend & APIs",
    accentColor: "#512BD4",
    iconSlug: "csharp",
  },
  {
    name: "TypeScript",
    category: "Languages",
    description: "Strictly typed JavaScript",
    accentColor: "#3178C6",
    iconSlug: "typescript",
  },
  {
    name: "Python / Flask",
    category: "Backend & AI",
    description: "Backend services & automation",
    accentColor: "#3776AB",
    iconSlug: "python",
  },
  {
    name: "Next.js & React",
    category: "Full Stack",
    description: "App router & SSR ecosystem",
    accentColor: "#000000",
    iconSlug: "nextjs",
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "High-throughput runtimes",
    accentColor: "#339933",
    iconSlug: "nodejs",
  },
  {
    name: "REST APIs & Webhooks",
    category: "Architecture",
    description: "Idempotent event pipelines",
    accentColor: "#E44D26",
    iconSlug: "api",
  },
  {
    name: "Model Context Protocol",
    category: "Artificial Intelligence",
    description: "Official MCP servers & tools",
    accentColor: "#D97706",
    iconSlug: "mcp",
  },
  {
    name: "MySQL & PostgreSQL",
    category: "Databases",
    description: "Relational DB design & indexing",
    accentColor: "#4479A1",
    iconSlug: "sql",
  },
  {
    name: "MongoDB",
    category: "Databases",
    description: "Document storage & aggregations",
    accentColor: "#47A248",
    iconSlug: "mongodb",
  },
  {
    name: "AWS & Cloud Infra",
    category: "Cloud / DevOps",
    description: "SES, compute & cloud services",
    accentColor: "#FF9900",
    iconSlug: "aws",
  },
  {
    name: "Electron",
    category: "Desktop",
    description: "Cross-platform desktop clients",
    accentColor: "#47848F",
    iconSlug: "electron",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    description: "Version control & CI/CD",
    accentColor: "#F05032",
    iconSlug: "git",
  },
];
