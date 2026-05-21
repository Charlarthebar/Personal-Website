import { SectionLabel } from "./About";
import ScrollReveal from "./ScrollReveal";
import { Github } from "lucide-react";

interface Project {
  num: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  highlight?: string;
  github?: string;
  accentColor: string;
}

const projects: Project[] = [
  {
    num: "#001",
    title: "ShockTest",
    description:
      "Live Polymarket trading-signal system detecting probability shocks across ~1,069 markets. Backtested a fade strategy with a 59.9% win rate across 1,337 detected shocks using interval-based shock detection.",
    tags: ["Python", "TypeScript", "Next.js", "MongoDB"],
    date: "Mar 2026",
    highlight: "59.9% win rate · 1,337 shocks",
    github: "https://github.com/Charlarthebar",
    accentColor: "#6366f1",
  },
  {
    num: "#002",
    title: "CogniScan",
    description:
      "Python/Kivy cognitive-assessment app with standardized neuropsychological tasks to help physicians screen for dementia-related impairment. Piloted in medical practices with an MD–PhD collaborator.",
    tags: ["Python", "Kivy", "Data Analysis"],
    date: "Dec 2022 – Nov 2024",
    highlight: "Published · Piloted clinically",
    github: "https://github.com/Charlarthebar",
    accentColor: "#14b8a6",
  },
  {
    num: "#003",
    title: "ShortList.ai",
    description:
      "Hiring-market intelligence MVP modeling job search as a continuous matching problem. ETL pipelines combining BLS OEWS, IRS 990, and MA payroll data into a Boston-Cambridge employment database.",
    tags: ["Python", "PostgreSQL", "ETL"],
    date: "Jan 2026",
    highlight: "Built at Link Studio",
    github: "https://github.com/Charlarthebar",
    accentColor: "#f59e0b",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-4 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="rounded-2xl border border-p-border bg-p-card p-6 sm:p-8"
            style={{ boxShadow: "0 2px 16px var(--shine)" }}>

            <SectionLabel>Projects</SectionLabel>

            <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((p, i) => (
                <ScrollReveal key={p.num} delay={i * 70}>
                  <div
                    className="card-hover rounded-xl border border-p-border bg-p-surface flex flex-col overflow-hidden h-full"
                  >
                    {/* Accent top bar */}
                    <div className="h-[3px]"
                      style={{ background: `linear-gradient(90deg, ${p.accentColor}, transparent)` }} />

                    <div className="flex flex-col flex-1 p-5">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <span className="font-mono text-[10px] text-p-sub tracking-widest">{p.num}</span>
                          <h3 className="font-bold text-sm leading-tight mt-0.5" style={{ color: p.accentColor }}>
                            {p.title}
                          </h3>
                        </div>
                        {p.github && (
                          <a href={p.github} target="_blank" rel="noopener noreferrer"
                            className="text-p-sub hover:text-p-muted transition-colors flex-shrink-0 mt-1">
                            <Github size={13} />
                          </a>
                        )}
                      </div>

                      <p className="text-xs text-p-muted leading-relaxed flex-1 mb-3">
                        {p.description}
                      </p>

                      {p.highlight && (
                        <div className="mb-3 px-2.5 py-1 rounded-lg text-[11px] font-medium font-mono"
                          style={{
                            background: `${p.accentColor}12`,
                            color: p.accentColor,
                            border: `1px solid ${p.accentColor}28`,
                          }}>
                          ✦ {p.highlight}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-1">
                        {p.tags.map((t) => (
                          <span key={t} className="tag text-[10px]">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
