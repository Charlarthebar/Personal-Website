# charleslai.dev — Personal Portfolio

Modern portfolio website built with Next.js 14, Tailwind CSS, and TypeScript.

## Stack

- **Framework**: Next.js 14 (App Router, static export)
- **Styling**: Tailwind CSS v3 + custom design tokens
- **Icons**: lucide-react
- **Font**: Inter + JetBrains Mono (Google Fonts)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding Your Assets

Place these files before deploying:

| File | Location | Purpose |
|------|----------|---------|
| `awards.jpg` | `public/images/awards.jpg` | UAC awards photo for the About section |
| `Charles_Lai_Resume.pdf` | `public/Charles_Lai_Resume.pdf` | Resume linked from the navbar |

## Deploying

The site exports as fully static HTML. Connect this repo to [Vercel](https://vercel.com) for zero-config deployment:

1. Push to GitHub (already done)
2. Go to vercel.com → New Project → Import `Personal-Website`
3. Framework: Next.js (auto-detected)
4. Hit Deploy

Or build locally:

```bash
npm run build   # outputs to /out
```

## Sections

| Section | ID | Description |
|---------|-----|------------|
| Hero | — | Name, title, tagline, CTA |
| About | `#about` | Bio + awards photo + stat chips |
| Education | `#education` | MIT card with coursework |
| Experience | `#experience` | Timeline: Mercor, CSAIL, Link Studio |
| Projects | `#projects` | ShockTest, CogniScan, ShortList.ai |
| Skills | `#skills` | Languages, tools, domains, awards |
| Contact | `#contact` | Email CTA + social links |
