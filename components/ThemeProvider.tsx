"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Theme = "dark" | "terminal" | "paper" | "warm";

const THEMES: Theme[] = ["dark", "terminal", "paper", "warm"];
const STORAGE_KEY = "cl-theme";

interface ThemeCtx { theme: Theme; setTheme: (t: Theme) => void; }
const Ctx = createContext<ThemeCtx>({ theme: "dark", setTheme: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const initial: Theme = stored && THEMES.includes(stored) ? stored : "dark";
    setThemeState(initial);
    document.documentElement.setAttribute("data-theme", initial);
    setMounted(true);
  }, []);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem(STORAGE_KEY, t);
    document.documentElement.setAttribute("data-theme", t);
  };

  if (!mounted) return <>{children}</>;
  return <Ctx.Provider value={{ theme, setTheme }}>{children}</Ctx.Provider>;
}

export const useTheme = () => useContext(Ctx);
