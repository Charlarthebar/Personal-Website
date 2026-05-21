import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  keywords: [
    "Charles Lai",
    "MIT",
    "software engineer",
    "machine learning",
    "AI",
    "quantitative finance",
    "CSAIL",
    "portfolio",
  ],
  authors: [{ name: "Charles Lai" }],
  openGraph: {
    title: "Charles Lai — Software Engineer & Researcher",
    description:
      "MIT CS + Math student, CSAIL researcher, and varsity soccer player.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
