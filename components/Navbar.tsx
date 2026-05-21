"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = links.map((l) => l.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine which section is in view
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/90 backdrop-blur-md border-b border-bg-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-sm font-semibold text-accent-blue hover:text-indigo-300 transition-colors tracking-wide"
        >
          cl<span className="text-text-muted">.</span>dev
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`nav-link ${isActive ? "!text-text-primary" : ""}`}
                  style={isActive ? { "--nav-link-width": "100%" } as React.CSSProperties : {}}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="/Charles_Lai_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded border border-accent-blue text-accent-blue text-sm font-medium hover:bg-accent-blue/10 transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-bg-secondary border-b border-bg-border px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block text-text-secondary hover:text-text-primary transition-colors font-medium"
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
                className="inline-block px-4 py-1.5 rounded border border-accent-blue text-accent-blue text-sm font-medium hover:bg-accent-blue/10 transition-colors"
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
