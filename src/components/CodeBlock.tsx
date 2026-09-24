"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  filename: string;
  code: string;
}

export function CodeBlock({ filename, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  return (
    <div className="rounded-xl border border-[#1A1815] bg-[#1A1815] p-5 font-mono text-xs text-[#FAF8F5] overflow-x-auto space-y-2">
      {/* Code Header with Filename & Functional Copy Button */}
      <div className="flex items-center justify-between text-[#969289] border-b border-white/10 pb-2">
        <span className="font-semibold text-neutral-300">{filename}</span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy code to clipboard"
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-medium transition-colors hover:bg-white/10 hover:text-white"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      <pre className="text-[#38BDF8] overflow-x-auto pt-1 leading-relaxed">
        {code}
      </pre>
    </div>
  );
}
