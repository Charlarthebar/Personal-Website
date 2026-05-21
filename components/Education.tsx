import { SectionLabel } from "./About";
import { BookOpen, Calendar } from "lucide-react";

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
    <section id="education" className="py-24 px-6 bg-bg-secondary/40">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Education</SectionLabel>

        <div className="mt-12">
          <div className="card-hover rounded-2xl bg-bg-card border border-bg-border p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              {/* Left: school info */}
              <div className="flex gap-5 items-start">
                {/* MIT emblem */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#A31F34] to-[#8B1A2B] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold text-lg tracking-tight font-mono">
                    MIT
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary">
                    Massachusetts Institute of Technology
                  </h3>
                  <p className="text-text-secondary text-sm mt-1">
                    B.S. in Computer Science and Engineering &amp; Mathematics
                  </p>
                </div>
              </div>

              {/* Right: date */}
              <div className="flex items-center gap-2 text-text-muted text-sm font-mono whitespace-nowrap">
                <Calendar size={13} />
                Sep 2025 — Present
              </div>
            </div>

            {/* Divider */}
            <div className="my-7 h-px bg-bg-border" />

            {/* Coursework + Involvements */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <p className="flex items-center gap-2 text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">
                  <BookOpen size={12} />
                  Relevant Coursework
                </p>
                <ul className="space-y-2">
                  {courses.map((c) => (
                    <li key={c} className="flex items-center gap-2.5 text-sm text-text-secondary">
                      <span className="w-1 h-1 rounded-full bg-accent-blue flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="flex items-center gap-2 text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">
                  <span className="text-base leading-none">⚽</span>
                  Involvements
                </p>
                <ul className="space-y-2">
                  {involvements.map((i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-text-secondary">
                      <span className="w-1 h-1 rounded-full bg-accent-teal flex-shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
