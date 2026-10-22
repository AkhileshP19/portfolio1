# Akhilesh Patil — Engineering portfolio

An editorial portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, Lucide and next-themes. The homepage introduces selected work; two case studies carry the engineering detail; `/projects` contains all five projects.

## Develop and validate

Use Node.js 22 or newer.

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm run test:browser
```

The browser suite uses installed Microsoft Edge and starts a production server automatically. It checks all four pages at 320, 375, 430, 768, 1024 and 1440 pixels, keyboard navigation, preview selection, light/dark persistence, weather preferences, clipboard behavior, reduced motion and axe accessibility rules. On a machine without Edge, install Playwright Chromium and remove `channel: 'msedge'` from `playwright.config.ts`.

GitHub Actions runs clean installation, lint, generated route types + TypeScript, unit/component tests and a production build. Vercel remains responsible for deployment.

## Maintain content

- `src/data/portfolio.ts`: profile, links, featured projects, case studies, skills, principles and education.
- `src/data/project-directory.ts`: the complete five-project collection, including Satej Sports Club and Quizzy Quest.
- `src/lib/experience.ts`: professional tenure from February 2025, using India calendar months. The joining day is not inferred.
- `src/components/sections`: server-rendered homepage sections and the isolated contact form.
- `src/components/project`: semantic workflow diagrams, case-study presentation and a small client preview selector receiving server-rendered content.
- `src/app/work/[slug]/page.tsx`: generates only `/work/xseed-ai` and `/work/creator-os`. Unknown projects return 404.
- `src/app/globals.css`: base editorial design and responsive composition.
- `src/app/enhancements.css`: icon controls, contact form, project directory and optional atmosphere.
- `src/app/layout.tsx`, `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`: metadata, structured data and sharing.

No live iframe embeds or invented product screenshots are used. HTML diagrams remain readable and lightweight. Future approved screenshots belong in the corresponding `public/work/` directory, rendered with `next/image`, accurate alt text and responsive sizes.

## Resume — manual action

Add the current approved PDF at `public/Akhilesh-Patil-Resume.pdf` and rebuild. Navigation checks for that exact file at build time and exposes a Resume link only when it exists.

## Contact

The contact section includes direct links, copy email and a React Hook Form / Zod form. The existing EmailJS service receives structured template parameters. User input is never interpolated into HTML. The SDK loads only on submission, with accessible validation, submission feedback, a honeypot and a client-side cooldown.

The original public EmailJS browser identifiers are retained. Override them if needed through `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` and `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`. These are public browser configuration, never private API credentials. Configure allowed origins/rate limits in the EmailJS dashboard. Tests mock the service; actual inbox delivery requires a manual submission.

## Optional atmosphere

Icon controls open a native keyboard-accessible dialog. Summer adds a subtle sunlight tint; winter and rain use a pointer-transparent canvas with adjustable intensity. Morning, afternoon, evening and night presets change the palette. Effects are off by default, pause while the tab is hidden, and become static under reduced motion. Preferences stay on the device.

## Migration and performance notes

The original audit found broad client rendering, scaled iframe previews, duplicated content, stale metrics and MERN metadata, a 691 KB favicon, oversized certification cards and HTML interpolation in the email form.

The redesign preserves Next.js, existing contact destinations and theme support. Xseed.AI and CreatorOS have the greatest visual weight; Doctor Appointment System is supporting work; earlier projects remain available in the project directory. Claims retain the supplied approximate and workflow-specific qualifiers.

Server Components are the default. Client boundaries cover navigation, theme/atmosphere, contact form, preview selection, clipboard and a small tenure label. Tenure reserves width and refreshes every minute and on window focus. Fonts are self-hosted by `next/font` after build; a fresh build needs network access to fetch Google Fonts.

Local Lighthouse scores are lab measurements, not deployed Core Web Vitals. INP needs real interactions/field data. Recheck the Vercel deployment after publishing.
