import { technologies, Technology } from "@/data/technologies";

// Inline clean SVGs for technologies matching the official icons
function TechIcon({ slug, color }: { slug: string; color: string }) {
  switch (slug) {
    case "csharp":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm-1.2 13.5c-1.9 0-3.3-1.4-3.3-3.5s1.4-3.5 3.3-3.5c1.2 0 2.2.6 2.7 1.6l-1.3.8c-.3-.6-.8-.9-1.4-.9-1 0-1.8.8-1.8 2s.8 2 1.8 2c.6 0 1.1-.3 1.4-.9l1.3.8c-.5 1-1.5 1.6-2.7 1.6zm5.8-2h-.6v.8h-.8v-.8h-.6v-.8h.6v-.8h.8v.8h.6v.8zm1.8 0h-.6v.8h-.8v-.8h-.6v-.8h.6v-.8h.8v.8h.6v.8z" />
        </svg>
      );
    case "typescript":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={color}>
          <path d="M3 3h18v18H3V3zm10.5 10.3h1.8v-1.7h-1.8v-2.8h2.3V7.2h-4.1v7.9h4.1v-1.6h-2.3v-.2zm-7-4.7h1.9V15H6.5V8.6z" />
        </svg>
      );
    case "python":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={color}>
          <path d="M11.9 2C8.2 2 8.4 3.6 8.4 3.6l.01 1.7h3.6v.5H5.4S2 5.4 2 9.2s3 3.6 3 3.6h1.8v-1.7s-.1-2 2-2h4.9s1.9.1 1.9-1.9V3.8S15.6 2 11.9 2zm-1.8 1.4c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm1.9 18.6c3.7 0 3.5-1.6 3.5-1.6l-.01-1.7h-3.6v-.5h6.6s3.4.4 3.4-3.4-3-3.6-3-3.6h-1.8v1.7s.1 2-2 2H10s-1.9-.1-1.9 1.9v3.4s.01 1.8 3.8 1.8zm1.8-1.4c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z" />
        </svg>
      );
    case "nextjs":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.8 14.5l-4.5-6.2v6.2H9.7V7.5h1.7l4.6 6.3V7.5h1.6v9z" />
        </svg>
      );
    case "nodejs":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm0 2.2l6.5 3.8v7.6L12 19.4 5.5 15.6V8L12 4.2zM10.8 9v6h2.4V9h-2.4z" />
        </svg>
      );
    case "api":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
        </svg>
      );
    case "mcp":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2L4 6v12l8 4 8-4V6l-8-4zm0 2.3l6 3v3.4l-6 3.6-6-3.6V7.3l6-3zm-6 8.2l5 3v5.2l-5-2.5v-5.7zm12 5.7l-5 2.5v-5.2l5-3v5.7z" />
        </svg>
      );
    case "sql":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2C6.48 2 2 3.79 2 6v12c0 2.21 4.48 4 10 4s10-1.79 10-4V6c0-2.21-4.48-4-10-4zm0 2c4.42 0 8 1.34 8 2s-3.58 2-8 2-8-1.34-8-2 3.58-2 8-2zm8 6c0 .66-3.58 2-8 2s-8-1.34-8-2V8.2c1.79 1.11 4.7 1.8 8 1.8s6.21-.69 8-1.8V10zm0 6c0 .66-3.58 2-8 2s-8-1.34-8-2v-1.8c1.79 1.11 4.7 1.8 8 1.8s6.21-.69 8-1.8V16z" />
        </svg>
      );
    case "mongodb":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2s-5 4.5-5 9.8c0 4.2 3.2 7.7 5 9.2 1.8-1.5 5-5 5-9.2C17 6.5 12 2 12 2zm0 17.5v-8.2c0-1.2.5-2.3 1-3.3 0 0 2.5 3 2.5 6.2 0 3.1-2 5.3-3.5 5.3z" />
        </svg>
      );
    case "aws":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={color}>
          <path d="M18.8 14.7c-2.6 1.8-6.3 2.8-9.6 2.8-4.5 0-8.6-1.6-11.7-4.3-.2-.2 0-.5.3-.4 3.3 1.9 7.4 3 11.6 3 3 0 6.3-.7 9.1-2.2.4-.3.7.1.3.1zm1.2-1.2c-.3-.4-2-.2-3.1-.1-.3 0-.4-.3-.1-.5 1.7-1.1 4.4-.8 4.7-.4.3.4-.1 3.1-1.7 4.5-.2.2-.5.1-.4-.2.4-.9.9-2.9.6-3.3zm-6.7-7.4h-2.1l-3 8.9h2l.7-2.1h3l.7 2.1h2.1l-3.4-8.9zm-2 5.3l1-3 1 3h-2z" />
        </svg>
      );
    case "electron":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 2c3.9 0 7.2 2.7 8.1 6.5-1.9-.8-4.4-1.3-7.1-1.4 1.1-1.7 2.3-3.3 3.5-4.5-.8-.4-1.7-.6-2.6-.6-.7 0-1.3.1-1.9.3 1.1 1.6 2.1 3.4 2.8 5.4-2.8.2-5.4.8-7.5 1.7C8.1 7.2 9.8 4 12 4zm0 16c-3.9 0-7.2-2.7-8.1-6.5 1.9.8 4.4 1.3 7.1 1.4-1.1 1.7-2.3 3.3-3.5 4.5.8.4 1.7.6 2.6.6.7 0 1.3-.1 1.9-.3-1.1-1.6-2.1-3.4-2.8-5.4 2.8-.2 5.4-.8 7.5-1.7-.8 4.2-2.5 7.4-4.7 7.4z" />
        </svg>
      );
    case "git":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={color}>
          <path d="M13.2 2.2a1.8 1.8 0 00-2.5 0L8.2 4.7l2.8 2.8c.6-.2 1.3-.1 1.8.4.5.5.6 1.2.4 1.8l2.7 2.7c.6-.2 1.3-.1 1.8.4.7.7.7 1.9 0 2.6s-1.9.7-2.6 0c-.5-.5-.6-1.3-.4-1.8l-2.6-2.6v4.6c.3.2.5.5.6.8.5.9.1 2-1 2.3-.9.4-2-.1-2.4-1-.4-.9.1-2 1-2.4.4-.2.8-.2 1.2 0V9.8c-.4-.2-.8-.2-1.2 0-.9.4-2-.1-2.4-1-.4-.9.1-2 1-2.4.5-.2 1.1-.1 1.5.2l-2.7-2.7L2.2 10.7a1.8 1.8 0 000 2.5l9.1 9.1a1.8 1.8 0 002.5 0l9.1-9.1a1.8 1.8 0 000-2.5l-9.7-8.5z" />
        </svg>
      );
    default:
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={color}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

export function TechStack() {
  return (
    <section className="py-6">
      {/* Section Header with Separator matching other sections */}
      <div className="flex items-center justify-between gap-4 border-b border-[#E7E2DA] pb-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#1A1815] sm:text-3xl">
            Technologies
          </h2>
          <p className="text-sm text-[#75726B] mt-1">
            Languages, frameworks, databases, and tools I use.
          </p>
        </div>
      </div>

      {/* Grid modeled directly after andrijaweb */}
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {technologies.map((tech: Technology) => (
          <div
            key={tech.name}
            className="flex items-center gap-4 rounded-xl border border-[#E7E2DA] bg-[#FFFFFF] p-3 transition-colors duration-200 hover:border-[#DDD7CD] hover:bg-[#F5F2EB]/80"
          >
            {/* Tinted icon container */}
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
              style={{ backgroundColor: `${tech.accentColor}15` }}
            >
              <TechIcon slug={tech.iconSlug} color={tech.accentColor} />
            </div>

            {/* Label and description */}
            <div className="min-w-0 flex-1">
              <h4 className="truncate text-sm font-semibold text-[#1A1815]">
                {tech.name}
              </h4>
              <p className="truncate text-xs text-[#75726B]">
                {tech.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
