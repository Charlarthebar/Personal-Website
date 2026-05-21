"use client";

import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="rounded-2xl border border-p-border bg-p-card p-6 sm:p-8"
            style={{ boxShadow: "0 2px 16px var(--shine)" }}>

            <SectionLabel>About</SectionLabel>

            <div className="mt-5 grid md:grid-cols-3 gap-6 items-start">
              {/* Main text */}
              <div className="md:col-span-2 space-y-3 text-p-muted text-sm leading-relaxed">
                <p>
                  I&apos;m a first-year at MIT studying Computer Science, Engineering, and Mathematics.
                  I&apos;m drawn to problems at the intersection of systems engineering, machine
                  learning, and quantitative reasoning — places where rigorous thinking meets
                  real-world impact.
                </p>
                <p>
                  At CSAIL, I research LLM-based methods for automatic software performance
                  engineering — turning correct but slow code into optimized implementations
                  through multi-agent frameworks. At Mercor, I build MCP server integrations
                  and backend tooling powering async AI-agent workflows.
                </p>
                <p>
                  Outside the lab I play Men&apos;s Varsity Soccer at MIT, which keeps me
                  grounded, competitive, and obsessed with incremental improvement —
                  the same mindset I bring to engineering.
                </p>
              </div>

              {/* Stats sidebar */}
              <div className="flex flex-col gap-3">
                {[
                  { value: "CSAIL",  sub: "Undergraduate Researcher" },
                  { value: "Mercor", sub: "Software Engineer" },
                  { value: "⚽",     sub: "Men's Varsity Soccer" },
                  { value: "'29",    sub: "MIT Class of 2029" },
                ].map((s) => (
                  <div
                    key={s.sub}
                    className="rounded-xl border border-p-border bg-p-surface px-4 py-3"
                  >
                    <p className="font-bold text-p-text font-mono text-sm">{s.value}</p>
                    <p className="text-p-sub text-xs mt-0.5">{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-1">
      <span className="section-label">{children}</span>
      <div className="flex-1 h-px bg-p-border max-w-[120px]" />
    </div>
  );
}
