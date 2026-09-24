export interface Experience {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  isCurrent: boolean;
  highlights: {
    category: string;
    description: string;
  }[];
}

export const workExperiences: Experience[] = [
  {
    id: "ertiqah",
    company: "Ertiqah LLC",
    location: "USA (Remote)",
    role: "Junior Full-Stack Developer",
    period: "July 2025 – Present",
    isCurrent: true,
    highlights: [
      {
        category: "Real-Time Performance & Pipeline Optimization",
        description:
          "Optimized real-time transcription and AI inference pipelines, slashing multimodal audio transcription processing from 18s to 2.8s (80%+ reduction), cutting audio paste latency by ~3s, and reducing window focus restoration from 1,450ms to ~20ms.",
      },
      {
        category: "AI Agents & Model Context Protocol (MCP)",
        description:
          "Engineered autonomous multi-agent workflows and official MCP servers certified for Anthropic and OpenAI registries across LiGo Social, Locul, and Murkuz, implementing custom AI tools including a Reddit post scraper and an LLM-driven threaded comment generation engine.",
      },
      {
        category: "Backend, Security & Plugin Architecture",
        description:
          "Published and maintained the SEO WordPress plugin Hydori (v2.3.0–v2.14) on the official WordPress SVN repository, and hardened Meisa’s AWS SES email infrastructure by squashing critical authorization bugs preventing cross-tenant broadcast hijacking and eliminating a 2x metric inflation via idempotent webhook deduplication.",
      },
      {
        category: "Third-Party Integrations & API Ecosystem",
        description:
          "Architected and shipped third-party integrations across 8 platforms (Zapier, Make.com, Pabbly Connect, n8n, Webflow, Slack, Discord, and ClickUp), developing standardized REST API endpoints, query filters, and automated webhook triggers.",
      },
      {
        category: "Cross-Platform Applications (Mobile & Desktop)",
        description:
          "Built Contextli from the ground up, shipping the cross-platform mobile client to Google Play Store (v1.5.7) in Flutter with a custom IME keyboard extension, alongside an Electron desktop client utilizing multi-model AI routing and floating voice widgets.",
      },
    ],
  },
];
