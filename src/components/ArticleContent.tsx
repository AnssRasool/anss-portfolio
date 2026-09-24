"use client";

import { useEffect, useRef } from "react";

interface ArticleContentProps {
  contentHtml: string;
}

export function ArticleContent({ contentHtml }: ArticleContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Enhance all <pre> elements with a dark header bar, language label, and functional copy button
    const preBlocks = containerRef.current.querySelectorAll("pre");

    preBlocks.forEach((pre) => {
      // Avoid double-wrapping if already processed
      if (pre.parentElement?.classList.contains("code-block-wrapper")) return;

      const codeText = pre.innerText || pre.textContent || "";
      const codeElement = pre.querySelector("code");
      const langClass = Array.from(codeElement?.classList || []).find((c) =>
        c.startsWith("language-")
      );
      const language = langClass ? langClass.replace("language-", "") : "code";

      // Wrapper container matching the user's favored code block aesthetic
      const wrapper = document.createElement("div");
      wrapper.className =
        "code-block-wrapper my-6 overflow-hidden rounded-xl border border-[#1A1815] bg-[#1A1815] text-xs font-mono text-[#FAF8F5] shadow-xs";

      // Header bar
      const header = document.createElement("div");
      header.className =
        "flex items-center justify-between border-b border-white/10 px-4 py-2.5 text-[#969289]";

      const filenameSpan = document.createElement("span");
      filenameSpan.className = "font-semibold text-neutral-300";
      filenameSpan.textContent = `snippet.${language}`;

      // Functional Copy Button
      const copyBtn = document.createElement("button");
      copyBtn.type = "button";
      copyBtn.setAttribute("aria-label", "Copy code to clipboard");
      copyBtn.className =
        "inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-medium transition-colors hover:bg-white/10 hover:text-white";
      copyBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        <span>Copy</span>
      `;

      copyBtn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(codeText);
          copyBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            <span class="text-emerald-400 font-medium">Copied!</span>
          `;
          setTimeout(() => {
            copyBtn.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
              <span>Copy</span>
            `;
          }, 2000);
        } catch (err) {
          console.error("Failed to copy code: ", err);
        }
      });

      header.appendChild(filenameSpan);
      header.appendChild(copyBtn);

      // Pre element styling inside wrapper
      pre.className = "p-5 text-[#38BDF8] overflow-x-auto leading-relaxed";

      // Replace pre with wrapper containing header and pre
      pre.parentNode?.insertBefore(wrapper, pre);
      wrapper.appendChild(header);
      wrapper.appendChild(pre);
    });
  }, [contentHtml]);

  return (
    <div
      ref={containerRef}
      className="article-prose space-y-6 text-base leading-relaxed text-[#3F3D38]"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
}
