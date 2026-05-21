import { SectionLabel } from "./About";
import ScrollReveal from "./ScrollReveal";

interface Job {
  company: string;
  role: string;
  date: string;
  location: string;
  bullets: string[];
  tags: string[];
  color: string;
}

const jobs: Job[] = [
  {
    company: "Mercor",
    role: "Software Engineer, Contract",
    date: "Mar 2026 – Present",
    location: "Remote",
    bullets: [
      "Designed MCP server integrations using Python, FastMCP, and SQLAlchemy, exposing platform functionality through async AI-agent workflows.",
      "Built backend tooling, Pydantic data models, and automated test suites across a multi-package monorepo.",
      "Maintained CI/CD pipelines and resolved platform tooling issues, streamlining development and deployment.",
    ],
    tags: ["Python", "FastMCP", "SQLAlchemy", "Pydantic", "CI/CD"],
    color: "#6366f1",
  },
  {
    company: "MIT CSAIL",
    role: "Undergraduate Researcher — LLM Systems & Performance Engineering",
    date: "Jan 2026 – Present",
    location: "Cambridge, MA",
    bullets: [
      "Research LLM-based methods for automatic software performance engineering, transforming correct but slow code into optimized implementations.",
      "Develop multi-agent code-optimization frameworks using performance feedback, lesson sharing, and iterative refinement.",
      "Study systems-level strategies including parallelization, cache-aware transformations, and algorithmic complexity reduction.",
    ],
    tags: ["LLM Systems", "Multi-agent", "Python", "Perf Engineering"],
    color: "#A31F34",
  },
  {
    company: "Link Studio",
    role: "AI Intern",
    date: "Jan 2026 – Feb 2026",
    location: "Cambridge, MA",
    bullets: [
      "Built ShortList.ai, a hiring-market intelligence MVP modeling job search as a continuous matching problem.",
      "Engineered ETL pipelines combining BLS OEWS, IRS 990, MA payroll, and job API data into a Boston-Cambridge employment database.",
      "Designed relational schemas and lifecycle-tracking logic to estimate job fill rates and TAM/SAM.",
    ],
    tags: ["Python", "ETL", "PostgreSQL", "Data Pipelines"],
    color: "#14b8a6",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-4 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="rounded-2xl border border-p-border bg-p-card p-6 sm:p-8"
            style={{ boxShadow: "0 2px 16px var(--shine)" }}>

            <SectionLabel>Experience</SectionLabel>

            <div className="mt-5 space-y-0 relative">
              {/* Vertical line */}
              <div className="absolute left-[5px] top-2 bottom-2 w-[2px] hidden sm:block rounded-full opacity-30 timeline-line" />

              {jobs.map((job, i) => (
                <ScrollReveal key={job.company} delay={i * 80}>
                  <div className="sm:pl-8 relative py-4 first:pt-0 last:pb-0">
                    {/* Dot */}
                    <div
                      className="absolute left-0 top-[18px] w-[12px] h-[12px] rounded-full border-2 hidden sm:block"
                      style={{ background: job.color, borderColor: "var(--card)" }}
                    />
                    {/* Border between items */}
                    {i < jobs.length - 1 && (
                      <div className="absolute bottom-0 left-8 right-0 h-px bg-p-border sm:block hidden" />
                    )}

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                      <div>
                        <p className="font-bold text-sm" style={{ color: job.color }}>
                          {job.company}
                        </p>
                        <p className="text-p-text text-sm font-medium leading-snug">{job.role}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="font-mono text-[11px] text-p-sub">{job.date}</p>
                        <p className="text-[11px] text-p-sub">{job.location}</p>
                      </div>
                    </div>

                    <ul className="space-y-1.5 mb-3">
                      {job.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-xs text-p-muted leading-relaxed">
                          <span className="w-1 h-1 rounded-full flex-shrink-0 mt-[5px]"
                            style={{ background: job.color }} />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {job.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
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
