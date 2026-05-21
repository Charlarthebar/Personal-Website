import { SectionLabel } from "./About";
import ScrollReveal from "./ScrollReveal";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-4 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="rounded-2xl border border-p-border bg-p-card p-6 sm:p-8"
            style={{ boxShadow: "0 2px 16px var(--shine)" }}>

            <SectionLabel>Contact</SectionLabel>

            <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <h2 className="text-xl font-bold text-p-text leading-snug">
                  Let&apos;s build something{" "}
                  <span className="accent-gradient">together.</span>
                </h2>
                <p className="text-p-muted text-sm leading-relaxed mt-2 max-w-md">
                  Open to research collaborations, internship opportunities, and
                  interesting conversations about AI systems, infrastructure, or
                  quantitative problems.
                </p>
              </div>

              <div className="flex flex-col gap-3 flex-shrink-0">
                <a
                  href="mailto:charlielai3@gmail.com"
                  className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors"
                  style={{
                    background: "var(--accent)",
                    color: "var(--accent-fg)",
                  }}
                >
                  <Mail size={15} />
                  Say Hello
                </a>

                <div className="flex items-center gap-2 justify-center">
                  {[
                    { href: "https://github.com/Charlarthebar",      Icon: Github,   label: "GitHub" },
                    { href: "https://linkedin.com/in/charlesjilai",   Icon: Linkedin, label: "LinkedIn" },
                    { href: "mailto:charlielai3@gmail.com",           Icon: Mail,     label: "Email" },
                  ].map(({ href, Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-2.5 rounded-lg border border-p-border bg-p-surface text-p-sub hover:text-p-text hover:border-p-accent/40 transition-colors"
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
