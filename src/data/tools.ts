export interface Tool {
  id: string;
  slug: string;
  title: string;
  count: number;
  toolName: string;
  date: string;
  category: string;
  badge: string;
  description: string;
  previewType: "webhook" | "schema" | "seo" | "jwt" | "ping";
  tags: string[];
}

export const tools: Tool[] = [
  {
    id: "tool-5",
    slug: "dummy-tool-5",
    title: "Dummy Tool 5",
    toolName: "Webhook Event Simulator",
    count: 5,
    date: "Sep 2026",
    category: "Developer Utility",
    badge: "API & Webhooks",
    description: "Lightweight developer workbench for crafting, dispatching, and verifying HMAC-signed webhook payloads in real time.",
    previewType: "webhook",
    tags: ["HMAC-SHA256", "Event Streams", "Payload Inspector"],
  },
  {
    id: "tool-4",
    slug: "dummy-tool-4",
    title: "Dummy Tool 4",
    toolName: "JSON / YAML Schema Transformer",
    count: 4,
    date: "Aug 2026",
    category: "Data Converter",
    badge: "Zero-Latency",
    description: "Bidirectional schema transformer and formatting engine with real-time linting for JSON, YAML, and configuration schemas.",
    previewType: "schema",
    tags: ["AST Parser", "Format Normalizer", "Diff Viewer"],
  },
  {
    id: "tool-3",
    slug: "dummy-tool-3",
    title: "Dummy Tool 3",
    toolName: "SEO & Regex Metadata Scorer",
    count: 3,
    date: "Jul 2026",
    category: "Regex & Scoring",
    badge: "Audit Engine",
    description: "Real-time regex-based scoring analyzer auditing OpenGraph tags, title length, and canonical headers against web standards.",
    previewType: "seo",
    tags: ["OpenGraph", "Canonical Verification", "Score 0-100"],
  },
  {
    id: "tool-2",
    slug: "dummy-tool-2",
    title: "Dummy Tool 2",
    toolName: "JWT Claims & Token Inspector",
    count: 2,
    date: "May 2026",
    category: "Security & Auth",
    badge: "Cryptographic",
    description: "Client-side cryptographic token validator verifying signature headers, unix expiration timestamps, and issuer claims.",
    previewType: "jwt",
    tags: ["RS256 / HS256", "Expiry Timer", "Claims Parser"],
  },
  {
    id: "tool-1",
    slug: "dummy-tool-1",
    title: "Dummy Tool 1",
    toolName: "TTFB & Latency Probe",
    count: 1,
    date: "Mar 2026",
    category: "Network Diagnostics",
    badge: "Edge Probe",
    description: "Browser-side network ping and TTFB latency diagnostic utility measuring DNS resolution, TCP handshakes, and response times.",
    previewType: "ping",
    tags: ["TTFB", "DNS Timing", "HTTP Handshake"],
  },
];
