"use client";

import Image from "next/image";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <SectionLabel>About</SectionLabel>
        </ScrollReveal>

        <div className="mt-12 grid md:grid-cols-2 gap-14 items-start">
          {/* Text column */}
          <ScrollReveal delay={100}>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6 leading-snug">
              Builder, researcher,{" "}
              <span className="accent-gradient">and athlete.</span>
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I&apos;m a first-year at MIT studying Computer Science,
                Engineering, and Mathematics. I&apos;m drawn to problems at the
                intersection of systems engineering, machine learning, and
                quantitative reasoning — places where rigorous thinking meets
                real-world impact.
              </p>
              <p>
                At CSAIL, I research LLM-based methods for automatic software
                performance engineering — turning correct but slow code into
                optimized implementations through multi-agent frameworks. At
                Mercor, I build MCP server integrations and backend tooling
                powering async AI-agent workflows.
              </p>
              <p>
                Outside the lab I play Men&apos;s Varsity Soccer at MIT, which
                keeps me grounded, competitive, and obsessed with incremental
                improvement — the same mindset I bring to engineering.
              </p>
            </div>

            {/* Mini stat row */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: "2+", label: "Research Projects" },
                { value: "3+", label: "Internships / Roles" },
                { value: "MIT", label: "Class of 2029" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg bg-bg-card border border-bg-border p-3 text-center"
                >
                  <p className="text-xl font-bold text-accent-blue">{s.value}</p>
                  <p className="text-xs text-text-muted mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Photo column */}
          <ScrollReveal delay={200} className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Decorative glow frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent-blue via-transparent to-accent-teal opacity-30 blur-sm" />
              <div className="relative rounded-2xl overflow-hidden border border-bg-border bg-bg-card aspect-[4/5]">
                {!imgError ? (
                  <Image
                    src="/images/awards.jpg"
                    alt="Charles Lai receiving the UAC Outstanding First-Year Student Award"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 420px"
                    priority
                    onError={() => setImgError(true)}
                  />
                ) : (
                  /* Fallback when photo not yet added */
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-bg-card to-[#0f1829]">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-blue to-accent-teal flex items-center justify-center mb-4 shadow-lg">
                      <span className="text-3xl font-bold text-white font-mono">CL</span>
                    </div>
                    <p className="text-text-muted text-xs text-center px-4">
                      Add{" "}
                      <code className="text-accent-blue">public/images/awards.jpg</code>
                      {" "}to display your photo
                    </p>
                  </div>
                )}
                {/* Bottom overlay */}
                {!imgError && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-xs font-medium text-slate-300 bg-bg-primary/80 backdrop-blur-sm rounded-lg px-3 py-2">
                        UAC Outstanding First-Year Student Award &mdash; MIT 2025
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-accent-blue text-sm font-semibold tracking-widest uppercase">
        {children}
      </span>
      <div className="flex-1 h-px bg-bg-border max-w-xs" />
    </div>
  );
}
