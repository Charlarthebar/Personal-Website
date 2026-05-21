import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Charles Lai — Software Engineer & Researcher",
  description:
    "MIT CS + Math student, CSAIL researcher, and varsity soccer player. Building AI/ML systems and backend infrastructure.",
  keywords: ["Charles Lai", "MIT", "software engineer", "machine learning", "AI", "CSAIL"],
  authors: [{ name: "Charles Lai" }],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Charles Lai — Software Engineer & Researcher",
    description: "MIT CS + Math student, CSAIL researcher, and varsity soccer player.",
    type: "website",
  },
};

/* Prevent flash of wrong theme by reading localStorage before React hydrates */
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('cl-theme');
    var valid = ['dark','terminal','paper','warm'];
    if (t && valid.includes(t)) {
      document.documentElement.setAttribute('data-theme', t);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  } catch(e){}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
