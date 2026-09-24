export interface Tool {
  id: string;
  slug: string;
  title: string;
  count: number;
  date: string;
  category: string;
  badge: string;
  description: string;
}

export const tools: Tool[] = [
  {
    id: "tool-5",
    slug: "dummy-tool-5",
    title: "Dummy Tool 5",
    count: 5,
    date: "Sep 2026",
    category: "Developer Utility",
    badge: "API Tester",
    description: "Lightweight developer utility for validating and inspecting payload structures in real time.",
  },
  {
    id: "tool-4",
    slug: "dummy-tool-4",
    title: "Dummy Tool 4",
    count: 4,
    date: "Aug 2026",
    category: "Data Converter",
    badge: "Transformer",
    description: "Zero-latency schema transformer and formatting engine for JSON, YAML, and SQL schemas.",
  },
  {
    id: "tool-3",
    slug: "dummy-tool-3",
    title: "Dummy Tool 3",
    count: 3,
    date: "Jul 2026",
    category: "Regex & Scoring",
    badge: "Analyzer",
    description: "Real-time regex-based scoring analyzer checking content structure against SEO standards.",
  },
  {
    id: "tool-2",
    slug: "dummy-tool-2",
    title: "Dummy Tool 2",
    count: 2,
    date: "May 2026",
    category: "Security",
    badge: "Token Validator",
    description: "Cryptographic token sanity checker verifying expiration, signature headers, and claims.",
  },
  {
    id: "tool-1",
    slug: "dummy-tool-1",
    title: "Dummy Tool 1",
    count: 1,
    date: "Mar 2026",
    category: "Network",
    badge: "Latency Probe",
    description: "Browser-side network ping and TTFB latency diagnostic utility for public APIs.",
  },
];
