export interface Article {
  id: string;
  slug: string;
  title: string;
  count: number;
  date: string;
  readTime: string;
  summary: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "art-5",
    slug: "dummy-article-5",
    title: "Dummy Article 5",
    count: 5,
    date: "Sep 2026",
    readTime: "4 min read",
    summary: "A technical walkthrough of backend design principles and distributed event handling.",
    tags: ["Backend", "Distributed Systems", "Architecture"],
  },
  {
    id: "art-4",
    slug: "dummy-article-4",
    title: "Dummy Article 4",
    count: 4,
    date: "Aug 2026",
    readTime: "5 min read",
    summary: "Architecting idempotent webhooks and mitigating cross-tenant security vulnerabilities.",
    tags: ["Security", "Webhooks", "AWS"],
  },
  {
    id: "art-3",
    slug: "dummy-article-3",
    title: "Dummy Article 3",
    count: 3,
    date: "Jul 2026",
    readTime: "6 min read",
    summary: "Optimizing real-time WebSocket pipelines for low-latency AI audio transcription.",
    tags: ["AI", "WebSockets", "Streaming"],
  },
  {
    id: "art-2",
    slug: "dummy-article-2",
    title: "Dummy Article 2",
    count: 2,
    date: "May 2026",
    readTime: "3 min read",
    summary: "Building Model Context Protocol (MCP) servers for Claude and next-generation developer tooling.",
    tags: ["AI", "MCP", "Developer Tools"],
  },
  {
    id: "art-1",
    slug: "dummy-article-1",
    title: "Dummy Article 1",
    count: 1,
    date: "Mar 2026",
    readTime: "5 min read",
    summary: "A practical guide to database indexing, query optimization, and connection pooling in production.",
    tags: ["Databases", "Performance", "SQL"],
  },
];
