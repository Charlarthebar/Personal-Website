import { SectionLabel } from "./About";
import ScrollReveal from "./ScrollReveal";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-bg-secondary/40">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal><SectionLabel>Contact</SectionLabel></ScrollReveal>

        <ScrollReveal delay={100}>
        <div className="mt-12 max-w-xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4 leading-snug">
            Let&apos;s build something{" "}
            <span className="accent-gradient">together.</span>
          </h2>
          <p className="text-text-secondary leading-relaxed mb-10">
            I&apos;m open to research collaborations, internship opportunities,
            and interesting conversations about AI systems, infrastructure, or
            quantitative problems. My inbox is always open.
          </p>

          <a
            href="mailto:charlielai3@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent-blue text-white font-semibold hover:bg-indigo-500 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 text-base"
          >
            <Mail size={18} />
            Say Hello
          </a>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <SocialLink
              href="mailto:charlielai3@gmail.com"
              label="Email"
              icon={<Mail size={18} />}
            />
            <SocialLink
              href="https://github.com/Charlarthebar"
              label="GitHub"
              icon={<Github size={18} />}
              external
            />
            <SocialLink
              href="https://linkedin.com/in/charlesjilai"
              label="LinkedIn"
              icon={<Linkedin size={18} />}
              external
            />
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  icon,
  external,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="flex flex-col items-center gap-1.5 text-text-muted hover:text-accent-blue transition-colors group"
    >
      <span className="p-3 rounded-xl bg-bg-card border border-bg-border group-hover:border-accent-blue/40 transition-colors">
        {icon}
      </span>
      <span className="text-xs font-medium">{label}</span>
    </a>
  );
}
