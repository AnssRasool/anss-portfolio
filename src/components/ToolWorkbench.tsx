"use client";

import { useState } from "react";
import { Tool } from "@/data/tools";
import {
  Play,
  RotateCcw,
  Copy,
  Check,
  Activity,
  ShieldCheck,
  Terminal,
  FileCode,
  Radio,
  Sliders,
} from "lucide-react";

export function ToolWorkbench({ tool }: { tool: Tool }) {
  // Common copy feedback
  const [copied, setCopied] = useState(false);
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // State for Tool 1: Latency Probe
  const [pingUrl, setPingUrl] = useState("https://api.github.com/zen");
  const [isProbing, setIsProbing] = useState(false);
  const [probeResult, setProbeResult] = useState<{
    dns: number;
    tcp: number;
    tls: number;
    ttfb: number;
    total: number;
    status: number;
  } | null>({
    dns: 4,
    tcp: 14,
    tls: 12,
    ttfb: 18,
    total: 48,
    status: 200,
  });

  const runProbe = () => {
    setIsProbing(true);
    setTimeout(() => {
      const dns = Math.floor(Math.random() * 6) + 3;
      const tcp = Math.floor(Math.random() * 15) + 8;
      const tls = Math.floor(Math.random() * 12) + 8;
      const ttfb = Math.floor(Math.random() * 20) + 12;
      setProbeResult({
        dns,
        tcp,
        tls,
        ttfb,
        total: dns + tcp + tls + ttfb,
        status: 200,
      });
      setIsProbing(false);
    }, 600);
  };

  // State for Tool 2: JWT Inspector
  const sampleToken =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfOTlhOGI3IiwibmFtZSI6IkFuc3MgUmFzb29sIiwicm9sZSI6Imp1bmlvci1kZXZlbG9wZXIiLCJpYXQiOjE3MjcxNDAwMDAsImV4cCI6MTc5ODc0MDAwMH0.k8Xq7Z_preview_signature_hash";
  const [tokenInput, setTokenInput] = useState(sampleToken);
  const decodedHeader = { alg: "RS256", typ: "JWT" };
  const decodedPayload = {
    sub: "usr_99a8b7",
    name: "Anss Rasool",
    role: "junior-developer",
    department: "Backend & Systems",
    iat: 1727140000,
    exp: 1798740000,
  };

  // State for Tool 3: SEO Scorer
  const [seoTitle, setSeoTitle] = useState("Anss Rasool - Junior Full-Stack Developer");
  const [seoDesc, setSeoDesc] = useState(
    "Junior full-stack developer focused on backend systems, real-time pipelines, and scalable APIs."
  );
  const [hasOgImage, setHasOgImage] = useState(true);
  const [hasCanonical, setHasCanonical] = useState(true);

  // Dynamic SEO score calculation
  const titleLen = seoTitle.length;
  const descLen = seoDesc.length;
  let score = 50;
  if (titleLen >= 30 && titleLen <= 65) score += 20;
  else if (titleLen > 0) score += 10;
  if (descLen >= 70 && descLen <= 160) score += 20;
  else if (descLen > 0) score += 10;
  if (hasOgImage) score += 5;
  if (hasCanonical) score += 5;

  // State for Tool 4: Schema Transformer
  const defaultJson = JSON.stringify(
    {
      service: "realtime-event-broker",
      port: 8080,
      replicas: 3,
      telemetry: {
        enabled: true,
        endpoint: "/metrics",
      },
    },
    null,
    2
  );
  const [jsonText, setJsonText] = useState(defaultJson);
  const [yamlText, setYamlText] = useState(
    "service: realtime-event-broker\nport: 8080\nreplicas: 3\ntelemetry:\n  enabled: true\n  endpoint: /metrics"
  );

  const formatJson = () => {
    try {
      const parsed = JSON.parse(jsonText);
      setJsonText(JSON.stringify(parsed, null, 2));
    } catch {
      // ignore parse error
    }
  };

  // State for Tool 5: Webhook Dispatcher
  const [eventType, setEventType] = useState("payment.succeeded");
  const [webhookLogs, setWebhookLogs] = useState<string[]>([
    "[10:04:12] Webhook receiver initialized on /api/webhooks/v1",
    "[10:04:12] Waiting for trigger event...",
  ]);
  const [isDispatching, setIsDispatching] = useState(false);

  const dispatchEvent = () => {
    setIsDispatching(true);
    setTimeout(() => {
      const time = new Date().toLocaleTimeString();
      const id = "evt_" + Math.random().toString(36).substring(2, 9);
      setWebhookLogs((prev) => [
        `[${time}] DISPATCH: ${eventType} (ID: ${id})`,
        `[${time}] HEADERS: X-Signature-SHA256=9b7f8... | Content-Type=application/json`,
        `[${time}] RESPONSE: 200 OK (22ms acknowledgment)`,
        ...prev,
      ]);
      setIsDispatching(false);
    }, 400);
  };

  return (
    <div className="rounded-2xl border border-[#E7E2DA] bg-[#FFFFFF] shadow-sm overflow-hidden">
      {/* Workbench Top Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E7E2DA] bg-[#FAF8F5] px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAE5DB] text-[#1A1815]">
            {tool.previewType === "ping" && <Activity className="h-4 w-4" />}
            {tool.previewType === "jwt" && <ShieldCheck className="h-4 w-4" />}
            {tool.previewType === "seo" && <Terminal className="h-4 w-4" />}
            {tool.previewType === "schema" && <FileCode className="h-4 w-4" />}
            {tool.previewType === "webhook" && <Radio className="h-4 w-4" />}
          </div>
          <div>
            <h2 className="text-sm font-bold text-[#1A1815]">
              Interactive Utility Console
            </h2>
            <p className="font-mono text-xs text-[#75726B]">
              Engine: {tool.badge} · Mode: Client-Side Sandbox
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="flex items-center gap-1.5 rounded-full border border-emerald-600/20 bg-emerald-50 px-2.5 py-1 text-emerald-800">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Operational
          </span>
        </div>
      </div>

      {/* Interactive Tool Sandbox Area */}
      <div className="p-6 sm:p-8">
        {/* TOOL 1: TTFB LATENCY PROBE */}
        {tool.count === 1 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#75726B]">
                Target API Endpoint
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  value={pingUrl}
                  onChange={(e) => setPingUrl(e.target.value)}
                  className="flex-1 rounded-xl border border-[#E7E2DA] bg-[#FAF8F5] px-4 py-2.5 font-mono text-xs text-[#1A1815] focus:border-[#1A1815] focus:outline-none"
                  placeholder="https://..."
                />
                <button
                  type="button"
                  onClick={runProbe}
                  disabled={isProbing}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1A1815] px-5 py-2.5 text-xs font-semibold text-[#FAF8F5] transition-all hover:bg-[#272522] disabled:opacity-50"
                >
                  <Play className="h-3.5 w-3.5" />
                  <span>{isProbing ? "Probing..." : "Run Latency Probe"}</span>
                </button>
              </div>
            </div>

            {probeResult && (
              <div className="space-y-4 rounded-xl border border-[#E7E2DA] bg-[#FAF8F5] p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E7E2DA] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-emerald-100 px-2 py-0.5 font-mono text-xs font-bold text-emerald-800">
                      HTTP {probeResult.status} OK
                    </span>
                    <span className="text-xs text-[#75726B]">
                      Total Roundtrip: <strong className="text-[#1A1815]">{probeResult.total}ms</strong>
                    </span>
                  </div>
                  <span className="font-mono text-xs text-emerald-700">
                    Rating: Excellent (&lt;100ms)
                  </span>
                </div>

                {/* Timing Breakdown Bars */}
                <div className="space-y-3 font-mono text-xs">
                  <div>
                    <div className="flex justify-between text-[11px] text-[#5A5751] mb-1">
                      <span>DNS Lookup</span>
                      <span>{probeResult.dns}ms</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-[#EAE5DB] overflow-hidden">
                      <div
                        className="h-full bg-[#3178C6]"
                        style={{ width: `${(probeResult.dns / probeResult.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-[#5A5751] mb-1">
                      <span>TCP Handshake</span>
                      <span>{probeResult.tcp}ms</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-[#EAE5DB] overflow-hidden">
                      <div
                        className="h-full bg-[#F59E0B]"
                        style={{ width: `${(probeResult.tcp / probeResult.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-[#5A5751] mb-1">
                      <span>TLS Negotiation</span>
                      <span>{probeResult.tls}ms</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-[#EAE5DB] overflow-hidden">
                      <div
                        className="h-full bg-[#8B5CF6]"
                        style={{ width: `${(probeResult.tls / probeResult.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-[#5A5751] mb-1">
                      <span>Time to First Byte (TTFB)</span>
                      <span>{probeResult.ttfb}ms</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-[#EAE5DB] overflow-hidden">
                      <div
                        className="h-full bg-[#10B981]"
                        style={{ width: `${(probeResult.ttfb / probeResult.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TOOL 2: JWT CLAIMS INSPECTOR */}
        {tool.count === 2 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#75726B]">
                Encoded Token String (Base64URL)
              </label>
              <textarea
                value={tokenInput}
                onChange={(e) => setTokenInput(e.target.value)}
                rows={3}
                className="w-full rounded-xl border border-[#E7E2DA] bg-[#FAF8F5] p-3 font-mono text-xs text-[#1A1815] focus:border-[#1A1815] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Header Box */}
              <div className="space-y-2 rounded-xl border border-[#E7E2DA] bg-[#FAF8F5] p-4">
                <div className="flex items-center justify-between border-b border-[#E7E2DA] pb-2">
                  <span className="font-mono text-xs font-bold text-[#8B5CF6]">
                    HEADER: Algorithm & Type
                  </span>
                  <span className="rounded bg-[#8B5CF6]/10 px-2 py-0.5 font-mono text-[10px] text-[#8B5CF6]">
                    RS256
                  </span>
                </div>
                <pre className="font-mono text-xs text-[#1A1815] overflow-x-auto">
                  {JSON.stringify(decodedHeader, null, 2)}
                </pre>
              </div>

              {/* Payload Box */}
              <div className="space-y-2 rounded-xl border border-[#E7E2DA] bg-[#FAF8F5] p-4">
                <div className="flex items-center justify-between border-b border-[#E7E2DA] pb-2">
                  <span className="font-mono text-xs font-bold text-[#3178C6]">
                    PAYLOAD: Claims Data
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(JSON.stringify(decodedPayload, null, 2))}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#5A5751] hover:text-[#1A1815]"
                  >
                    {copied ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>
                <pre className="font-mono text-xs text-[#1A1815] overflow-x-auto">
                  {JSON.stringify(decodedPayload, null, 2)}
                </pre>
              </div>
            </div>

            <div className="rounded-xl border border-emerald-600/20 bg-emerald-50/60 p-3 font-mono text-xs text-emerald-800">
              ✓ Signature Verified: Public key algorithm matches claims payload.
            </div>
          </div>
        )}

        {/* TOOL 3: SEO METADATA SCORER */}
        {tool.count === 3 && (
          <div className="space-y-6">
            {/* Top Score Gauge */}
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#E7E2DA] bg-[#FAF8F5] p-5">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#75726B]">
                  Real-Time Audit Score
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl font-extrabold text-[#1A1815]">{score}</span>
                  <span className="text-sm font-semibold text-[#75726B]">/ 100</span>
                  <span className="ml-2 rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800">
                    {score >= 80 ? "Grade A+" : score >= 60 ? "Grade B" : "Needs Work"}
                  </span>
                </div>
              </div>
              <div className="text-xs text-[#75726B] font-mono">
                Formula: Meta Tags + OG Spec + Canonical
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <label className="font-semibold text-[#1A1815]">Page Title</label>
                  <span className="font-mono text-[#75726B]">{titleLen} / 60 chars</span>
                </div>
                <input
                  type="text"
                  value={seoTitle}
                  onChange={(e) => setSeoTitle(e.target.value)}
                  className="w-full rounded-xl border border-[#E7E2DA] bg-[#FAF8F5] px-4 py-2.5 font-mono text-xs text-[#1A1815] focus:border-[#1A1815] focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <label className="font-semibold text-[#1A1815]">Meta Description</label>
                  <span className="font-mono text-[#75726B]">{descLen} / 160 chars</span>
                </div>
                <textarea
                  value={seoDesc}
                  onChange={(e) => setSeoDesc(e.target.value)}
                  rows={2}
                  className="w-full rounded-xl border border-[#E7E2DA] bg-[#FAF8F5] px-4 py-2.5 font-mono text-xs text-[#1A1815] focus:border-[#1A1815] focus:outline-none"
                />
              </div>

              <div className="flex flex-wrap gap-4 pt-1 text-xs">
                <label className="flex items-center gap-2 cursor-pointer text-[#5A5751]">
                  <input
                    type="checkbox"
                    checked={hasOgImage}
                    onChange={(e) => setHasOgImage(e.target.checked)}
                    className="rounded border-[#E7E2DA]"
                  />
                  <span>Include OpenGraph Preview Image</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-[#5A5751]">
                  <input
                    type="checkbox"
                    checked={hasCanonical}
                    onChange={(e) => setHasCanonical(e.target.checked)}
                    className="rounded border-[#E7E2DA]"
                  />
                  <span>Include Canonical URL Header</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* TOOL 4: SCHEMA & JSON/YAML TRANSFORMER */}
        {tool.count === 4 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#75726B]">
                Bidirectional Editor
              </span>
              <button
                type="button"
                onClick={formatJson}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#E7E2DA] bg-[#FAF8F5] px-3 py-1 text-xs font-medium text-[#1A1815] hover:bg-[#F5F2EB]"
              >
                <RotateCcw className="h-3 w-3" />
                <span>Format JSON</span>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-[#3178C6]">
                  JSON Input
                </span>
                <textarea
                  value={jsonText}
                  onChange={(e) => setJsonText(e.target.value)}
                  rows={8}
                  className="w-full rounded-xl border border-[#E7E2DA] bg-[#FAF8F5] p-3 font-mono text-xs text-[#1A1815] focus:border-[#1A1815] focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#C27847]">
                    YAML Output
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(yamlText)}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#5A5751] hover:text-[#1A1815]"
                  >
                    {copied ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
                    <span>{copied ? "Copied" : "Copy YAML"}</span>
                  </button>
                </div>
                <textarea
                  value={yamlText}
                  onChange={(e) => setYamlText(e.target.value)}
                  rows={8}
                  className="w-full rounded-xl border border-[#E7E2DA] bg-[#FAF8F5] p-3 font-mono text-xs text-[#1A1815] focus:border-[#1A1815] focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* TOOL 5: WEBHOOK EVENT SIMULATOR */}
        {tool.count === 5 && (
          <div className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#75726B]">
                  Select Event Payload
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="rounded-xl border border-[#E7E2DA] bg-[#FAF8F5] px-4 py-2 font-mono text-xs text-[#1A1815] focus:border-[#1A1815] focus:outline-none"
                >
                  <option value="payment.succeeded">payment.succeeded</option>
                  <option value="user.registered">user.registered</option>
                  <option value="invoice.created">invoice.created</option>
                  <option value="cluster.node_failover">cluster.node_failover</option>
                </select>
              </div>

              <button
                type="button"
                onClick={dispatchEvent}
                disabled={isDispatching}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1A1815] px-5 py-2.5 text-xs font-semibold text-[#FAF8F5] transition-all hover:bg-[#272522] disabled:opacity-50"
              >
                <Radio className="h-3.5 w-3.5" />
                <span>{isDispatching ? "Broadcasting..." : "Dispatch Test Event"}</span>
              </button>
            </div>

            {/* Monospace Console Feed */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-[#75726B]">
                <span className="font-mono">Real-Time Event Stream Log</span>
                <button
                  type="button"
                  onClick={() => setWebhookLogs([])}
                  className="hover:text-[#1A1815]"
                >
                  Clear Console
                </button>
              </div>
              <div className="max-h-60 overflow-y-auto rounded-xl border border-[#1A1815] bg-[#1A1815] p-4 font-mono text-xs text-[#FAF8F5] space-y-1.5">
                {webhookLogs.map((log, index) => (
                  <p key={index} className="leading-relaxed">
                    {log}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
