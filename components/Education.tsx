import { SectionLabel } from "./About";
import ScrollReveal from "./ScrollReveal";

const courses = [
  "Data Structures and Algorithms",
  "Fundamentals of Programming",
  "Introduction to Machine Learning",
  "Linear Algebra",
  "Probability and Random Variables",
];

const involvements = [
  "AppDev@MIT",
  "AI@MIT Labs",
  "Undergraduate Mathematics Association",
  "Sloan Business Club",
  "Men's Varsity Soccer",
];

export default function Education() {
  return (
    <section id="education" className="py-4 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="rounded-2xl border border-p-border bg-p-card p-6 sm:p-8"
            style={{ boxShadow: "0 2px 16px var(--shine)" }}>

            <SectionLabel>Education</SectionLabel>

            <div className="mt-5 flex flex-col sm:flex-row sm:items-start gap-5">
              {/* MIT logo */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
                style={{ background: "linear-gradient(135deg, #A31F34, #7a1827)" }}>
                <span className="text-white font-bold text-sm tracking-tight font-mono">MIT</span>
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 className="font-bold text-p-text text-base leading-snug">
                      Massachusetts Institute of Technology
                    </h3>
                    <p className="text-p-muted text-sm mt-0.5">
                      B.S. in Computer Science and Engineering &amp; Mathematics
                    </p>
                  </div>
                  <span className="font-mono text-xs text-p-sub whitespace-nowrap">
                    Sep 2025 — Present
                  </span>
                </div>

                <div className="mt-5 grid sm:grid-cols-2 gap-5">
                  <div>
                    <p className="text-xs font-semibold text-p-sub uppercase tracking-widest mb-3">
                      Coursework
                    </p>
                    <ul className="space-y-1.5">
                      {courses.map((c) => (
                        <li key={c} className="flex items-center gap-2.5 text-xs text-p-muted">
                          <span className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: "var(--accent)" }} />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-p-sub uppercase tracking-widest mb-3">
                      Involvements
                    </p>
                    <ul className="space-y-1.5">
                      {involvements.map((i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs text-p-muted">
                          <span className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: "var(--teal)" }} />
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
