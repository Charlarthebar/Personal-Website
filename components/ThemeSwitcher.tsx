"use client";

import { useTheme, type Theme } from "./ThemeProvider";

const themes: { id: Theme; label: string; symbol: string }[] = [
  { id: "dark",     label: "Dark",     symbol: "◼" },
  { id: "terminal", label: "Terminal", symbol: ">_" },
  { id: "paper",    label: "Paper",    symbol: "◻" },
  { id: "warm",     label: "Warm",     symbol: "◐" },
  { id: "soccer",   label: "Soccer",   symbol: "⚽" },
];

export default function ThemeSwitcher({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1">
      {!compact && (
        <span className="font-mono text-[10px] text-p-sub mr-1 uppercase tracking-widest hidden sm:inline">
          theme
        </span>
      )}
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className={`theme-btn ${theme === t.id ? "active" : ""}`}
          title={t.label}
          aria-label={`Switch to ${t.label} theme`}
        >
          <span className="hidden sm:inline">{t.label}</span>
          <span className="sm:hidden font-mono">{t.symbol}</span>
        </button>
      ))}
    </div>
  );
}
