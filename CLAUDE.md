# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website built with Next.js 15.5.4, React 19.1.0, TypeScript, and Tailwind CSS 4. The project uses the Next.js App Router architecture with Turbopack for fast builds.

## Development Commands

This project uses **pnpm** as the package manager.

```bash
# Start development server with Turbopack
pnpm dev

# Build production bundle
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Install dependencies
pnpm install
```

Development server runs on http://localhost:3000 by default.

## Architecture

### App Router Structure
- Uses Next.js App Router (not Pages Router)
- Root layout: `app/layout.tsx` - defines global metadata and font configuration (Geist Sans and Geist Mono)
- Homepage: `app/page.tsx`
- Global styles: `app/globals.css`

### Path Aliases
- `@/*` maps to the project root (configured in `tsconfig.json:21`)

### Styling
- Tailwind CSS 4 with PostCSS configuration
- Custom CSS variables defined in globals.css
- Uses Geist font family from next/font/google

### TypeScript
- Strict mode enabled
- Target: ES2017
- Module resolution: bundler
