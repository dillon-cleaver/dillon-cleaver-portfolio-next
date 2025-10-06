# Testing Setup

This project includes a comprehensive two-tier testing strategy with Jest for unit testing and Cypress for end-to-end testing, configured according to [Next.js 15 testing documentation](https://nextjs.org/docs/app/guides/testing/jest) and [Cypress best practices](https://nextjs.org/docs/app/guides/testing/cypress).

## Test Files

### Unit Tests (Jest + React Testing Library)

- `__tests__/ContactForm.test.tsx` - Tests for the contact form component
- `__tests__/Navbar.test.tsx` - Tests for the navigation component
- `__tests__/projects.test.ts` - Tests for the projects data structure
- `__tests__/validation.test.ts` - Tests for validation utility functions
- `__tests__/api-contact.test.ts` - Basic API route testing (complex mocking deferred to integration tests)

### End-to-End Tests (Cypress)

- `cypress/e2e/homepage.cy.ts` - Main page navigation and responsiveness
- `cypress/e2e/contact-form.cy.ts` - Complete contact form user workflows
- `cypress/e2e/projects.cy.ts` - Projects section display and functionality
- `cypress/e2e/accessibility.cy.ts` - Accessibility compliance and SEO
- `cypress/e2e/maintenance.cy.ts` - Maintenance mode behavior

## Running Tests

### Unit Tests (Jest)

```bash
# Run all unit tests once
pnpm test

# Run tests in watch mode (re-runs on file changes)
pnpm test:watch

# Run tests with coverage report
pnpm test:coverage
```

### End-to-End Tests (Cypress)

```bash
# Open Cypress Test Runner (interactive, recommended for development)
pnpm cypress:open

# Run E2E tests headlessly (CI/CD)
pnpm cypress:run

# Run dev server and open Cypress together
pnpm test:e2e:dev

# Run E2E tests headlessly with output
pnpm cypress:run:headless
```

### All Tests

```bash
# Run unit tests followed by E2E tests
pnpm test:all
```

## Test Configuration

### Jest Configuration

- **Jest Config**: `jest.config.ts` - Next.js-optimized Jest configuration with full TypeScript support
- **Setup**: `jest.setup.ts` - Global test setup and mocks (Next.js router, fetch API)
- **Types**: `types/jest.d.ts` - TypeScript definitions for Jest DOM matchers
- **Dependencies**: Complete React Testing Library ecosystem:
  - `jest` + `jest-environment-jsdom` - Core testing framework
  - `@testing-library/react` - React component testing utilities
  - `@testing-library/dom` - DOM testing utilities
  - `@testing-library/jest-dom` - Custom Jest matchers (toBeInTheDocument, etc.)
  - `@testing-library/user-event` - Realistic user interaction simulation
  - `ts-node` + `@types/jest` - TypeScript support

### Cypress Configuration

- **Cypress Config**: `cypress.config.ts` - E2E and component testing configuration
- **Support Files**: `cypress/support/` - Custom commands and global test setup
- **TypeScript**: `cypress/tsconfig.json` - Cypress-specific TypeScript configuration
- **Dependencies**:
  - `cypress` - End-to-end testing framework
  - `start-server-and-test` - Utility to run dev server with tests
- **Base URL**: Configured for `http://localhost:3000` (Next.js dev server)

## What's Tested

### Unit Tests (Jest + RTL)

**Components**:

- **ContactForm**: Form validation, submission states, error handling
- **Navbar**: Navigation links, mobile menu toggle, scroll behavior

**Data & Utils**:

- **Projects Data**: Data structure validation, required fields
- **Validation Utils**: Email validation, required field checks, string formatting

**API Routes**:

- **Contact API**: Email sending, error handling, environment validation

### End-to-End Tests (Cypress)

**User Workflows**:

- **Homepage Navigation**: Section scrolling, mobile menu, responsive behavior
- **Contact Form**: Complete submission flow, validation errors, API integration
- **Projects Display**: Content rendering, external links, responsive design

**Cross-cutting Concerns**:

- **Accessibility**: ARIA labels, keyboard navigation, focus management
- **SEO**: Meta tags, heading hierarchy, semantic HTML
- **Maintenance Mode**: Feature flag behavior, page rendering

**Browser Testing**:

- **Responsive Design**: Mobile, tablet, desktop viewports
- **Form Interactions**: Real user input, validation, submission
- **Network Requests**: API calls, error states, loading states

## React Testing Library Features

This project uses the complete React Testing Library ecosystem for component testing:

### Currently Implemented

- ✅ **Rendering**: `render()` for component mounting
- ✅ **Querying**: `screen.getByRole()`, `getByLabelText()`, `getByText()`
- ✅ **User Interactions**: `fireEvent` for form submissions and clicks
- ✅ **Async Testing**: `waitFor()` for async operations and state changes
- ✅ **Custom Matchers**: `toBeInTheDocument()`, `toBeDisabled()`, `toHaveValue()`
- ✅ **Accessibility-First**: Role-based queries prioritized for better test quality

### Available for Enhancement

- 🔄 **User Event**: `@testing-library/user-event` installed - upgrade from `fireEvent` to `userEvent` for more realistic interactions
- 🔄 **Scoped Queries**: `within()` for testing within specific containers
- 🔄 **Advanced Queries**: `getAllByRole()`, `queryBy*()`, `findBy*()` patterns

## Test Environment

- **Browser Tests**: Components use `jsdom` environment (default)
- **API Tests**: Use Node.js environment for server-side code (via `@jest-environment node` comment)
- **Mocks**: Next.js router, fetch API are mocked globally
- **External Services**: Complex external service mocking (like Resend) deferred to integration tests
- **Auto-mocking**: Next.js automatically mocks stylesheets, images, and fonts via `next/jest`

## Coverage

Tests cover the core functionality including:

- Form validation and submission
- Component rendering and interactions
- Data structure validation
- API error handling
- Environment configuration checks

## Alignment with Next.js 15 Documentation

This setup follows the [official Next.js testing guide](https://nextjs.org/docs/app/guides/testing/jest) exactly:

✅ **Manual Setup**: All recommended dependencies installed  
✅ **TypeScript Configuration**: `jest.config.ts` with proper typing  
✅ **Module Path Aliases**: `@/` imports configured via `moduleNameMapper`  
✅ **Custom Matchers**: `@testing-library/jest-dom` setup in `jest.setup.ts`  
✅ **Test Scripts**: Standard npm scripts for running tests  
✅ **Auto-mocking**: Next.js automatically handles stylesheets, images, fonts  
✅ **Environment Loading**: `.env` files loaded automatically via `next/jest`

## Next.js Built-in Features

The `next/jest` transformer automatically provides:

- Next.js Compiler transforms
- Stylesheet and image mocking
- `next/font` mocking
- Environment variable loading
- `.next` directory ignoring
- `next.config.js` flag loading

## Cypress End-to-End Testing Strategy

### Testing Philosophy

Cypress tests focus on complete user workflows and integration points that unit tests cannot cover:

**What Cypress Tests**:

- Complete user journeys (navigation → form fill → submission)
- Cross-component interactions (navbar navigation affecting page scroll)
- API integration with real network requests (intercepted for consistency)
- Browser-specific behavior (responsive design, accessibility features)
- Production-like scenarios (maintenance mode, error states)

**What Cypress Doesn't Duplicate**:

- Individual component logic (covered by Jest unit tests)
- Utility function behavior (covered by Jest unit tests)
- Isolated component state (covered by React Testing Library)

### Key Features

**Realistic Browser Testing**:

- Tests run in real Chromium browser
- True CSS rendering and responsive behavior
- Actual form submissions with network interception
- Real accessibility testing (focus, ARIA, keyboard navigation)

**Development Experience**:

- Interactive Test Runner for debugging
- Time-travel debugging with DOM snapshots
- Automatic screenshots and videos on failure
- Hot reloading during test development

**CI/CD Integration**:

- Headless execution for automated testing
- Artifact uploads (videos, screenshots) on failure
- Parallel execution support for faster CI builds
- GitHub Actions integration with caching

### Testing Patterns

**Page Object Model**: Tests are organized by feature/page for maintainability
**API Interception**: `cy.intercept()` for consistent API responses during testing
**Accessibility First**: Uses semantic selectors and ARIA labels
**Mobile Testing**: Responsive design validation across viewport sizes
**Error Scenarios**: Tests both success and failure paths comprehensively

This dual-testing approach provides confidence in both individual component behavior (Jest) and complete user experiences (Cypress).
