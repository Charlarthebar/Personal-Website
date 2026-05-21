"use client";

import { Github, Linkedin, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center hero-grid overflow-hidden">
      {/* Radial glow backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(99,102,241,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <p
          className="font-mono text-accent-blue text-sm font-medium tracking-widest uppercase mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          Hi, I&apos;m
        </p>

        {/* Name */}
        <h1
          className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-gradient leading-none mb-5 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          Charles Lai
        </h1>

        {/* Title */}
        <p
          className="text-xl sm:text-2xl font-semibold text-slate-300 mb-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          MIT Computer Science &amp; Mathematics
        </p>

        {/* Tagline */}
        <p
          className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl mx-auto mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          Building AI/ML systems, backend infrastructure, and quantitative
          tools. Researcher at MIT CSAIL. Varsity soccer player.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}
        >
          <a
            href="https://github.com/Charlarthebar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-blue text-white text-sm font-semibold hover:bg-indigo-500 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/charlesjilai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-bg-card border border-bg-border text-text-primary text-sm font-semibold hover:border-accent-blue/50 hover:bg-bg-card/80 transition-all duration-200"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href="#about"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-bg-card border border-bg-border text-text-secondary text-sm font-semibold hover:border-accent-blue/30 hover:text-text-primary transition-all duration-200"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-muted hover:text-accent-blue transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
