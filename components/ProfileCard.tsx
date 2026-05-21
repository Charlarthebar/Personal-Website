"use client";

import Image from "next/image";
import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, GraduationCap, Zap } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";

const socials = [
  { href: "https://github.com/Charlarthebar",  icon: Github,   label: "GitHub" },
  { href: "https://linkedin.com/in/charlesjilai", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:charlielai3@gmail.com",      icon: Mail,     label: "Email" },
];

const badges = [
  { icon: MapPin,          text: "Cambridge, MA" },
  { icon: GraduationCap,   text: "MIT Class of 2029" },
  { icon: Zap,             text: "Open to opportunities" },
];

export default function ProfileCard() {
  const [imgError, setImgError] = useState(false);

  // Drop your photo at public/images/profile/avatar.jpg (or .png)
  const AVATAR_SRCS = ["/images/profile/avatar.jpg", "/images/profile/avatar.png", "/images/awards.jpg"];
  const [srcIdx, setSrcIdx] = useState(0);

  return (
    <section className="pt-[88px] pb-6 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          className="rounded-2xl border border-p-border bg-p-card p-6 sm:p-8"
          style={{ boxShadow: "0 2px 24px var(--shine)" }}
        >
          {/* Top row */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-7">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-p-border">
                {!imgError ? (
                  <Image
                    src={AVATAR_SRCS[srcIdx]}
                    alt="Charles Lai"
                    fill
                    className="object-cover object-top scale-[1.4] origin-top"
                    sizes="96px"
                    priority
                    onError={() => {
                      if (srcIdx + 1 < AVATAR_SRCS.length) setSrcIdx(srcIdx + 1);
                      else setImgError(true);
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, var(--accent), var(--teal))" }}>
                    <span className="text-2xl font-bold font-mono" style={{ color: "var(--accent-fg)" }}>
                      CL
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Name + title */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-p-text tracking-tight leading-tight">
                    Charles Lai
                  </h1>
                  <p className="text-p-muted text-sm sm:text-base mt-1">
                    MIT Computer Science &amp; Mathematics
                  </p>
                  <p className="font-mono text-xs text-p-sub mt-1 tracking-wide">
                    CSAIL Researcher · Mercor SWE · Men&apos;s Varsity Soccer
                  </p>
                </div>
                {/* Theme switcher — top right on desktop */}
                <div className="sm:flex-shrink-0">
                  <ThemeSwitcher />
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                {badges.map((b) => (
                  <span key={b.text} className="status-badge">
                    <b.icon size={11} style={{ color: "var(--accent)" }} />
                    {b.text}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-5 h-px bg-p-border" />

          {/* Bottom row: tagline + socials */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-p-muted text-sm leading-relaxed max-w-lg">
              Building AI/ML systems, backend infrastructure, and quantitative tools
              at the intersection of rigorous engineering and real-world impact.
            </p>
            <div className="flex items-center gap-2 flex-shrink-0">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2.5 rounded-xl border border-p-border bg-p-surface text-p-muted hover:text-p-accent hover:border-p-accent transition-colors"
                  style={{ "--p-accent": "var(--accent)" } as React.CSSProperties}
                >
                  <s.icon size={16} />
                </a>
              ))}
              <a
                href="/Charles_Lai_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-semibold font-mono border transition-colors"
                style={{
                  background: "var(--tag-bg)",
                  color: "var(--accent)",
                  borderColor: "var(--tag-border)",
                }}
              >
                Resume ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
