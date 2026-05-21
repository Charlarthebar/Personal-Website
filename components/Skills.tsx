import { SectionLabel } from "./About";
import ScrollReveal from "./ScrollReveal";

const groups = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "C++", "Java", "HTML / CSS"],
    variant: "accent",
  },
  {
    label: "Frameworks & Tools",
    items: ["Next.js", "FastMCP", "SQLAlchemy", "Pydantic", "MongoDB", "PostgreSQL", "Linux", "Git", "CI/CD"],
    variant: "teal",
  },
  {
    label: "Domains",
    items: ["LLM Systems", "Multi-agent AI", "Backend Engineering", "Data Pipelines", "Statistical Analysis", "Quantitative Finance"],
    variant: "sub",
  },
];

const awards = [
  "UAC Outstanding First-Year Student Award",
  "Excellence in Math",
  "Cum Laude",
  "3× VEX Robotics #1 in State",
  "RI Science Olympiad — 1st (Codebusters)",
  "USACO Silver",
  "AP Scholar with Distinction",
];

function TagGroup({ label, items, variant }: { label: string; items: string[]; variant: string }) {
  const tagClass =
    variant === "teal"
      ? "tag tag-teal"
      : variant === "sub"
      ? "tag"
      : "tag";

  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-p-sub mb-3">
        {label}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span key={item} className={tagClass}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-4 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="rounded-2xl border border-p-border bg-p-card p-6 sm:p-8"
            style={{ boxShadow: "0 2px 16px var(--shine)" }}>

            <SectionLabel>Skills</SectionLabel>

            <div className="mt-5 grid sm:grid-cols-3 gap-6">
              {groups.map((g, i) => (
                <ScrollReveal key={g.label} delay={i * 60}>
                  <TagGroup {...g} />
                </ScrollReveal>
              ))}
            </div>

            {/* Awards */}
            <ScrollReveal delay={200}>
              <div className="mt-6 pt-5 border-t border-p-border">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-p-sub mb-3">
                  Awards & Recognition
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {awards.map((a) => (
                    <span key={a} className="tag tag-amber">{a}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
