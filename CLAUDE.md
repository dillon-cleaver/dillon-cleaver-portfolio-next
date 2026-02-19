# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
pnpm dev              # Start dev server (http://localhost:3000)
pnpm build            # Production build
pnpm lint             # ESLint

# Testing
pnpm test             # Jest unit + integration tests (watch-less)
pnpm test:watch       # Jest in watch mode
pnpm test:coverage    # Jest with coverage report
pnpm cypress:open     # Interactive Cypress E2E (requires dev server running)
pnpm test:e2e:dev     # Start dev server + open Cypress together
pnpm cypress:run      # Headless Cypress E2E
pnpm test:all         # Jest + Cypress (used by pre-commit hook)
```

To run a single Jest test file:

```bash
pnpm test -- __tests__/ContactForm.test.tsx
```

## Architecture

**Next.js 15 App Router** single-page portfolio with sections rendered as components on `app/page.tsx`: `Navbar → AboutMe → Projects → ContactForm → Footer`.

**Key architectural decisions:**

- **CSS Modules** for all component styles (each component has a `.module.css` sibling)
- **Maintenance mode** controlled by `NEXT_PUBLIC_MAINTENANCE_MODE=true` env var; `middleware.ts` redirects all non-API routes to `/maintenance`
- **Contact form** submits to `app/api/contact/route.ts`, which uses the Resend SDK (`RESEND_API_KEY` env var required)
- **Site config** (`config/site.ts`) centralizes maintenance flag; project data lives in `data/projects.ts` with typed structures
- **Validation utilities** (`utils/validation.ts`) are shared between the ContactForm component and unit tests
- **`@/`** path alias maps to the project root (configured in `jest.config.ts` and `tsconfig.json`)

**Testing structure:**

- `__tests__/` — Jest unit/integration tests (jsdom environment for components, `@jest-environment node` annotation for API tests)
- `cypress/e2e/` — 5 E2E test files covering homepage, contact form, projects, accessibility, and maintenance mode
- `cypress/support/e2e.ts` — global Cypress setup including hydration error handling

**Pre-commit hook** (`.husky/pre-commit`) runs `tsc --noEmit`, `lint-staged` (ESLint + Prettier on staged files), and `test:all` (Jest + Cypress). Cypress requires the dev server to be running or uses `start-server-and-test`.

## Environment Variables

- `RESEND_API_KEY` — required for contact form email sending
- `NEXT_PUBLIC_MAINTENANCE_MODE` — set to `"true"` to enable maintenance redirect
