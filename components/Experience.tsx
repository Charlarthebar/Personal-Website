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
      "Built backend tooling, Pydantic data models, and automated test suites across a multi-package monorepo to improve reliability and developer velocity.",
      "Maintained CI/CD pipelines and resolved platform tooling issues, streamlining development and deployment workflows.",
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
      "Develop and evaluate multi-agent code-optimization frameworks using performance feedback, lesson sharing, and iterative refinement.",
      "Study systems-level optimization strategies including parallelization, cache-aware transformations, and algorithmic complexity reduction.",
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
      "Built ShortList.ai, a hiring-market intelligence MVP modeling job search as a continuous matching problem using open and filled job data.",
      "Engineered ETL pipelines combining BLS OEWS, IRS 990, MA payroll, and job API data into a Boston-Cambridge employment database.",
      "Designed relational schemas and lifecycle-tracking logic to estimate job fill rates, market dynamics, and TAM/SAM opportunity sizing.",
    ],
    tags: ["Python", "ETL", "PostgreSQL", "Data Pipelines"],
    color: "#14b8a6",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal><SectionLabel>Experience</SectionLabel></ScrollReveal>

        <div className="mt-12 relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] timeline-line hidden sm:block rounded-full opacity-40" />

          <div className="space-y-10">
            {jobs.map((job, i) => (
              <ScrollReveal key={job.company} delay={i * 80}>
              <div className="sm:pl-10 relative">
                {/* Dot */}
                <div
                  className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-bg-primary hidden sm:block"
                  style={{ background: job.color }}
                />

                <div className="card-hover rounded-2xl bg-bg-card border border-bg-border p-7">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: job.color }}
                        />
                        <h3
                          className="text-lg font-bold"
                          style={{ color: job.color }}
                        >
                          {job.company}
                        </h3>
                      </div>
                      <p className="text-text-primary font-semibold text-base leading-snug">
                        {job.role}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-mono text-xs text-text-muted">{job.date}</p>
                      <p className="text-xs text-text-muted mt-0.5">{job.location}</p>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-5">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0 mt-[7px]"
                          style={{ background: job.color }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
