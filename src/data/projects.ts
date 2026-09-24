export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  problemSolved: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "proj-1",
    slug: "dummy-project-1",
    title: "Dummy Project 1",
    category: "Data Pipeline Engine",
    date: "March 2026",
    problemSolved:
      "Engineered an automated data pipeline to eliminate manual synchronization bottlenecks, cutting round-trip processing latency across multiple distributed endpoints.",
    technologies: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "REST APIs"],
    imageUrl: "/projects/project-1.svg",
    githubUrl: "https://github.com/AnssRasool",
    liveUrl: "https://anssrasool.me",
  },
  {
    id: "proj-2",
    slug: "dummy-project-2",
    title: "Dummy Project 2",
    category: "Event Notification Gateway",
    date: "January 2026",
    problemSolved:
      "Built a resilient event-driven notification gateway that resolved webhook duplication anomalies and guaranteed idempotent delivery under burst loads.",
    technologies: ["C#", ".NET", "AWS SES", "Webhooks", "Redis"],
    imageUrl: "/projects/project-2.svg",
    githubUrl: "https://github.com/AnssRasool",
  },
  {
    id: "proj-3",
    slug: "dummy-project-3",
    title: "Dummy Project 3",
    category: "AI Streaming Parser & MCP",
    date: "In-Progress",
    problemSolved:
      "Developed a real-time streaming parser and context adapter for AI tool invocation, reducing audio transcription latency and memory overhead.",
    technologies: ["Python", "Flask", "Model Context Protocol", "WebSockets", "MongoDB"],
    imageUrl: "/projects/project-3.svg",
    githubUrl: "https://github.com/AnssRasool",
    liveUrl: "https://anssrasool.me",
  },
  {
    id: "proj-4",
    slug: "dummy-project-4",
    title: "Dummy Project 4",
    category: "Desktop System Daemon",
    date: "November 2025",
    problemSolved:
      "Created a cross-platform desktop background daemon managing local configuration sync with secure token encryption and zero cursor focus disruption.",
    technologies: ["Electron", "TypeScript", "Node.js", "SQLite"],
    imageUrl: "/projects/project-4.svg",
    githubUrl: "https://github.com/AnssRasool",
  },
  {
    id: "proj-5",
    slug: "dummy-project-5",
    title: "Dummy Project 5",
    category: "API Integration Connector",
    date: "August 2025",
    problemSolved:
      "Designed a standardized third-party integration connector suite enabling multi-platform data exchange with uniform error normalization.",
    technologies: ["Node.js", "REST APIs", "Zapier", "Webhooks"],
    imageUrl: "/projects/project-5.svg",
    githubUrl: "https://github.com/AnssRasool",
    liveUrl: "https://anssrasool.me",
  },
];
