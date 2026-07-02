# ThemePage

A personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Requirements

- Node.js 20+
- npm or Bun

## Install

### npm

```bash
npm install
```

### Bun

```bash
bun install
```

## Run locally

### npm

```bash
npm run dev
```

### Bun

```bash
bun run dev
```

Open `http://localhost:3000` in your browser.

## Build for production

### npm

```bash
npm run build
npm run start
```

### Bun

```bash
bun run build
bun run start
```

## Deploy

### Vercel

1. Push this project to GitHub.
2. Import the repository into Vercel.
3. Use the default Next.js build settings.
4. Deploy.

### Other Node hosting

#### npm

```bash
npm install
npm run build
npm run start
```

#### Bun

```bash
bun install
bun run build
bun run start
```

## SEO setup

Update the production domain in these files before deploying:

- `src/app/layout.tsx`
- `src/app/robots.ts`
- `src/app/sitemap.ts`

Make sure the domain matches your live site.

## Notes

- Favicon is served from `public/favicon.ico`.
- Sitemap is available at `/sitemap.xml`.
- Robots file is available at `/robots.txt`.
