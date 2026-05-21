import { SectionLabel } from "./About";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  date: string;
  github?: string;
  link?: string;
  highlight?: string;
  accent: string;
}

const projects: Project[] = [
  {
    title: "ShockTest",
    subtitle: "Live Polymarket Trading Signal System",
    description:
      "Built a live Polymarket trading-signal system detecting probability shocks across ~1,069 markets and evaluating mean reversion at 1h, 6h, and 24h horizons. Backtested a fade strategy with a 59.9% win rate across 1,337 detected shocks.",
    tags: ["Python", "TypeScript", "Next.js", "MongoDB", "FastAPI"],
    date: "Mar 2026",
    highlight: "59.9% win rate across 1,337 shocks",
    accent: "#6366f1",
    github: "https://github.com/Charlarthebar",
  },
  {
    title: "CogniScan",
    subtitle: "Cognitive Assessment App",
    description:
      "Developed a Python/Kivy cognitive-assessment app with standardized neuropsychological tasks to help physicians screen for dementia-related impairment. Collaborated with an MD–PhD student on task design and scoring; piloted in medical practices.",
    tags: ["Python", "Kivy", "Data Analysis", "Clinical"],
    date: "Dec 2022 – Nov 2024",
    highlight: "Published in NHSJS · Piloted in medical practices",
    accent: "#14b8a6",
    github: "https://github.com/Charlarthebar",
  },
  {
    title: "ShortList.ai",
    subtitle: "Hiring Market Intelligence MVP",
    description:
      "Modeled job search as a continuous matching problem using open and filled job data. Engineered ETL pipelines combining BLS OEWS, IRS 990, MA payroll data into a Boston-Cambridge employment database for TAM/SAM analysis.",
    tags: ["Python", "PostgreSQL", "ETL", "BLS OEWS", "Market Analysis"],
    date: "Jan 2026",
    highlight: "Built at Link Studio · Boston-Cambridge employment DB",
    accent: "#f59e0b",
    github: "https://github.com/Charlarthebar",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-bg-secondary/40">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Projects</SectionLabel>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <div
              key={p.title}
              className="card-hover rounded-2xl bg-bg-card border border-bg-border flex flex-col overflow-hidden"
            >
              {/* Top accent bar */}
              <div
                className="h-1 w-full flex-shrink-0"
                style={{
                  background: `linear-gradient(90deg, ${p.accent}, transparent)`,
                }}
              />

              <div className="flex flex-col flex-1 p-6">
                {/* Header */}
                <div className="mb-3">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3
                      className="text-lg font-bold leading-tight"
                      style={{ color: p.accent }}
                    >
                      {p.title}
                    </h3>
                    <div className="flex gap-2 flex-shrink-0">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-text-secondary transition-colors"
                          aria-label="GitHub"
                        >
                          <Github size={15} />
                        </a>
                      )}
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-text-secondary transition-colors"
                          aria-label="Live"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-text-muted font-mono">{p.date}</p>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-4">
                  {p.description}
                </p>

                {p.highlight && (
                  <div
                    className="mb-4 px-3 py-1.5 rounded-lg text-xs font-medium"
                    style={{
                      background: `${p.accent}14`,
                      color: p.accent,
                      border: `1px solid ${p.accent}30`,
                    }}
                  >
                    ✦ {p.highlight}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {p.tags.map((t) => (
                    <span key={t} className="tag text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
