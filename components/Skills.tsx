import { SectionLabel } from "./About";
import ScrollReveal from "./ScrollReveal";

interface SkillGroup {
  category: string;
  items: string[];
  variant: "blue" | "teal" | "default";
}

const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    variant: "blue",
    items: ["Python", "TypeScript", "JavaScript", "C++", "Java", "HTML / CSS"],
  },
  {
    category: "Frameworks & Tools",
    variant: "teal",
    items: [
      "Next.js",
      "FastMCP",
      "SQLAlchemy",
      "Pydantic",
      "MongoDB",
      "PostgreSQL",
      "Linux",
      "Git",
      "CI/CD",
      "Node.js",
    ],
  },
  {
    category: "Domains",
    variant: "default",
    items: [
      "LLM Systems",
      "Multi-agent AI",
      "Backend Engineering",
      "Data Pipelines",
      "Statistical Analysis",
      "Performance Engineering",
      "Quantitative Finance",
    ],
  },
];

const variantClass: Record<string, string> = {
  blue: "tag",
  teal: "tag tag-teal",
  default:
    "tag bg-slate-800/50 text-slate-300 border-slate-700 hover:bg-slate-700/50 hover:border-slate-600",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal><SectionLabel>Skills</SectionLabel></ScrollReveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 60}>
            <div
              className="rounded-2xl bg-bg-card border border-bg-border p-6 h-full"
            >
              <p className="skill-category mb-5">{group.category}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={variantClass[group.variant]}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Awards row */}
        <ScrollReveal delay={180}>
        <div className="mt-8 rounded-2xl bg-bg-card border border-bg-border p-6">
          <p className="skill-category mb-5">Awards & Recognition</p>
          <div className="flex flex-wrap gap-2">
            {[
              "UAC Outstanding First-Year Student Award",
              "Excellence in Math",
              "Cum Laude",
              "3× VEX Robotics #1 in State",
              "RI Science Olympiad — 1st Place (Codebusters)",
              "USACO Silver",
              "AP Scholar with Distinction",
            ].map((a) => (
              <span
                key={a}
                className="tag bg-amber-950/30 text-amber-300 border-amber-800/40 hover:bg-amber-950/50"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
