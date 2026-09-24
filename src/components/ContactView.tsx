"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Mail, Send, ExternalLink, FileText, CheckCircle2 } from "lucide-react";

export function ContactView() {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Generates mailto link with prefilled subject and body
  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(title.trim() || "Portfolio Inquiry");
    const bodyContent = `${description.trim() ? `${description.trim()}\n\n` : ""}From: ${email.trim() || "Visitor"}\nSent via portfolio contact form.`;
    const body = encodeURIComponent(bodyContent);
    return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  // Generates web Gmail compose link with prefilled subject and body
  const generateGmailUrl = () => {
    const subject = encodeURIComponent(title.trim() || "Portfolio Inquiry");
    const bodyContent = `${description.trim() ? `${description.trim()}\n\n` : ""}From: ${email.trim() || "Visitor"}\nSent via portfolio contact form.`;
    const body = encodeURIComponent(bodyContent);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}&su=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !title || !description) return;

    setSubmitted(true);
    // Launch default email client with pre-filled fields
    window.location.href = generateMailtoUrl();
  };

  const handleViewInEmail = () => {
    window.location.href = generateMailtoUrl();
  };

  return (
    <div className="py-6 sm:py-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8 lg:gap-12 items-start">
        {/* Left Column: Avatar, Contact Me, Bio, Socials (sahilverma.dev inspired) */}
        <div className="space-y-6 md:col-span-5 text-center md:text-left">
          {/* Avatar Picture with UI-matching frame */}
          <div className="inline-block mx-auto md:mx-0">
            <div className="relative h-36 w-36 sm:h-44 sm:w-44 overflow-hidden rounded-2xl border border-[#DDD7CD] bg-[#FFFFFF] p-1.5 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#F5F2EB]">
                <Image
                  src={siteConfig.avatarUrl}
                  alt={siteConfig.name}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 144px, 176px"
                />
              </div>
            </div>
            {/* Location Text matching UI */}
            <p className="mt-2.5 text-xs font-medium text-[#1A1815] text-center">
              {siteConfig.location}
            </p>
          </div>

          {/* Heading & Intro Text */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1815]">
              Contact Me
            </h1>
            <p className="text-sm text-[#5A5751] leading-relaxed max-w-md mx-auto md:mx-0">
              Feel free to{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-[#1A1815] underline decoration-[#DDD7CD] underline-offset-4 transition-colors hover:decoration-[#1A1815]"
              >
                mail me
              </a>{" "}
              or reach out on my social media. I&apos;m always open to discussing new projects, distributed systems architecture, or engineering opportunities.
            </p>
          </div>

          {/* Social Profiles Row */}
          <div className="space-y-2 pt-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#969289]">
              Connect Directly
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              {/* Direct Mail */}
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Send direct email"
                className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#E7E2DA] bg-[#FFFFFF] text-[#1A1815] shadow-xs transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#DDD7CD] hover:bg-[#FAF8F5] hover:shadow-sm"
              >
                <Mail className="h-4 w-4 text-[#5A5751] transition-colors group-hover:text-[#1A1815]" />
              </a>

              {/* GitHub */}
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#E7E2DA] bg-[#FFFFFF] text-[#1A1815] shadow-xs transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#DDD7CD] hover:bg-[#FAF8F5] hover:shadow-sm"
              >
                <svg
                  className="h-4 w-4 fill-current text-[#5A5751] transition-colors group-hover:text-[#1A1815]"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#E7E2DA] bg-[#FFFFFF] text-[#1A1815] shadow-xs transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#DDD7CD] hover:bg-[#FAF8F5] hover:shadow-sm"
              >
                <svg className="h-4 w-4 fill-[#0A66C2]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* Resume Download */}
              <a
                href={siteConfig.resumeUrl}
                download="Anss_Rasool_Resume.pdf"
                aria-label="Download Resume"
                className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#E7E2DA] bg-[#FFFFFF] text-[#1A1815] shadow-xs transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#DDD7CD] hover:bg-[#FAF8F5] hover:shadow-sm"
              >
                <FileText className="h-4 w-4 text-[#5A5751] transition-colors group-hover:text-[#1A1815]" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Get in Touch Form Card */}
        <div className="md:col-span-7">
          <div className="rounded-2xl border border-[#E7E2DA] bg-[#FFFFFF] p-6 sm:p-8 shadow-xs">
            <div className="border-b border-[#F0ECE4] pb-4 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1A1815]">
                Get in Touch
              </h2>
              <p className="text-xs text-[#75726B] mt-1">
                Fill in the details below to start a conversation.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 flex items-start gap-3 rounded-xl border border-[#86EFAC] bg-[#F0FDF4] p-4 text-xs text-[#166534]">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#16A34A] mt-0.5" />
                <div>
                  <p className="font-semibold">Email client launched!</p>
                  <p className="mt-0.5 text-[#15803D]">
                    If your email client didn&apos;t open automatically, use the{" "}
                    <button
                      type="button"
                      onClick={handleViewInEmail}
                      className="font-bold underline"
                    >
                      View in Email
                    </button>{" "}
                    button or mail directly to{" "}
                    <span className="font-mono font-semibold">{siteConfig.email}</span>.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Field 1: Your Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#75726B]"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  required
                  className="w-full rounded-xl border border-[#E7E2DA] bg-[#FAF8F5]/60 px-4 py-2.5 text-sm text-[#1A1815] placeholder:text-[#969289] transition-colors focus:border-[#1A1815] focus:bg-[#FFFFFF] focus:outline-none"
                />
              </div>

              {/* Field 2: Title */}
              <div className="space-y-1.5">
                <label
                  htmlFor="title"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#75726B]"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                  required
                  className="w-full rounded-xl border border-[#E7E2DA] bg-[#FAF8F5]/60 px-4 py-2.5 text-sm text-[#1A1815] placeholder:text-[#969289] transition-colors focus:border-[#1A1815] focus:bg-[#FFFFFF] focus:outline-none"
                />
              </div>

              {/* Field 3: Description */}
              <div className="space-y-1.5">
                <label
                  htmlFor="description"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#75726B]"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                  required
                  className="w-full rounded-xl border border-[#E7E2DA] bg-[#FAF8F5]/60 px-4 py-2.5 text-sm text-[#1A1815] placeholder:text-[#969289] transition-colors focus:border-[#1A1815] focus:bg-[#FFFFFF] focus:outline-none resize-none"
                />
              </div>

              {/* Action Buttons: Send Message + View in Email */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                {/* Primary: Send Message */}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1A1815] px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#FAF8F5] shadow-xs transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#272522] hover:shadow-sm"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </button>

                {/* Secondary: View in Email (opens mail composer without requiring modal/form submit) */}
                <button
                  type="button"
                  onClick={handleViewInEmail}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E7E2DA] bg-[#FFFFFF] px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#1A1815] shadow-xs transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#DDD7CD] hover:bg-[#FAF8F5] hover:shadow-sm"
                >
                  <ExternalLink className="h-4 w-4 text-[#5A5751]" />
                  <span>View in Email</span>
                </button>
              </div>

              {/* Fallback / Webmail Option */}
              <div className="border-t border-[#F5F2EB] pt-4 mt-4 text-[11px] text-[#75726B] font-mono flex flex-wrap items-center justify-between gap-2">
                <span>Direct: {siteConfig.email}</span>
                <a
                  href={generateGmailUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A1815] underline decoration-[#DDD7CD] underline-offset-2 hover:decoration-[#1A1815] transition-colors"
                >
                  Open in Gmail Web ↗
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
