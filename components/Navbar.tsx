"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Contact",    href: "#contact" },
];

const sectionIds = links.map((l) => l.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let cur = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 110) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-p-bg/90 backdrop-blur-md border-b border-p-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-[64px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-sm font-semibold tracking-wide transition-colors"
          style={{ color: "var(--accent)" }}
        >
          cl<span className="text-p-sub">.</span>dev
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`nav-link ${active === l.href.slice(1) ? "active" : ""}`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Charles_Lai_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold font-mono border transition-colors"
              style={{
                background: "var(--tag-bg)",
                color: "var(--accent)",
                borderColor: "var(--tag-border)",
              }}
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-p-muted hover:text-p-text transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-p-surface border-b border-p-border px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block text-p-muted hover:text-p-text transition-colors font-medium text-sm"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Charles_Lai_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-1.5 rounded-lg border text-xs font-semibold font-mono transition-colors"
                style={{ background: "var(--tag-bg)", color: "var(--accent)", borderColor: "var(--tag-border)" }}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
