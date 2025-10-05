# Copilot Instructions for Dillon Cleaver Portfolio

## Project Overview

Modern Next.js 15 portfolio site with App Router, TypeScript, CSS Modules, and integrated email functionality. Single-page application with component-based architecture and maintenance mode capability.

## Architecture Patterns

### Component Structure

- **Single-page layout**: All components (`Navbar`, `AboutMe`, `Projects`, `ContactForm`, `Footer`) render in sequence on main page
- **CSS Modules pattern**: Each component has a co-located `.module.css` file (e.g., `ContactForm.tsx` + `ContactForm.module.css`)
- **Import alias**: Use `@/` for root-relative imports (configured in `tsconfig.json`)

### Data Management

- **Static content**: Project data lives in `data/projects.ts` with strict TypeScript interfaces (`Project`, `Section`, `ContentItem`)
- **Site configuration**: Environment-aware settings in `config/site.ts`
- **No external data fetching**: All content is compile-time static

### Maintenance Mode System

- **Environment flag**: `NEXT_PUBLIC_MAINTENANCE_MODE=true` activates maintenance mode
- **Middleware redirect**: `middleware.ts` intercepts requests and redirects to `/maintenance` (excludes API routes, static assets)
- **Dedicated page**: `app/maintenance/page.tsx` with custom styling

## Key Implementation Details

### Contact Form Pattern

```typescript
// Zod validation schema + type inference
const formSchema = z.object({...});
type FormValues = z.infer<typeof formSchema>;

// Client-side state management with error handling
const [formStatus, setFormStatus] = useState<"success" | "error" | "submitting" | "idle">("idle");
```

### API Route Structure

- **Single endpoint**: `app/api/contact/route.ts` handles POST requests
- **Resend integration**: Uses `RESEND_API_KEY` environment variable
- **Error handling**: Returns appropriate HTTP status codes and JSON responses

### Font Loading

- **Google Fonts**: Bitter font loaded via `next/font` with CSS custom properties
- **Pattern**: Font variable (`--font-bitter`) set on `<html>` element, applied via className

## Development Workflows

### Scripts

- `pnpm dev` - Development server
- `pnpm build` - Production build
- `pnpm lint` - ESLint checks
- `pnpm start` - Production server

### Next.js Configuration

- **Build optimizations**: ESLint/TypeScript errors ignored during builds (configured for deployment flexibility)
- **Images**: Unoptimized for static hosting compatibility
- **Experimental features**: Webpack build workers and parallel compilation enabled

### Environment Variables

- `RESEND_API_KEY` - Required for contact form functionality
- `NEXT_PUBLIC_MAINTENANCE_MODE` - Controls maintenance mode activation

## Styling Conventions

- **CSS Modules**: Scoped styles with camelCase class names
- **Global styles**: `app/globals.css` for reset and base styles
- **Component styles**: Each component has dedicated `.module.css` file
- **Responsive**: Mobile-first approach with CSS Grid for project layouts

## Content Updates

- **Projects**: Modify `data/projects.ts` - structured as nested sections with typed content
- **Site metadata**: Update `app/layout.tsx` for SEO title/description
- **Contact email**: Recipient configured in `app/api/contact/route.ts`

## Common Patterns

- TypeScript interfaces for all data structures
- Component-scoped CSS with modules
- Environment-driven feature flags
- Zod for runtime validation
- Single-page app with smooth scrolling navigation
