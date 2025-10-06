# Testing Setup

This project implements a comprehensive three-tier testing strategy following the testing pyramid:

1. **Unit Tests** - Individual functions and utilities (Jest)
2. **Integration Tests** - Components with user interactions (Jest + React Testing Library)
3. **End-to-End Tests** - Complete user workflows (Cypress)

Configured according to [Next.js 15 testing documentation](https://nextjs.org/docs/app/guides/testing/jest) and [Cypress best practices](https://nextjs.org/docs/app/guides/testing/cypress).

## Test Files

### Unit Tests (Jest)

- `__tests__/validation.test.ts` - Individual utility functions (email validation, string formatting)
- `__tests__/projects.test.ts` - Data structure validation and type checking

### Integration Tests (Jest + React Testing Library)

- `__tests__/ContactForm.test.tsx` - Form component + validation + user interaction flows
- `__tests__/Navbar.test.tsx` - Navigation component + user interactions + state management
- `__tests__/api-contact.test.ts` - API routes + request/response handling + environment validation

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

### Unit Tests (Jest)

**Individual Functions & Utilities**:

- **Validation Utils**: Email validation, required field checks, string formatting
- **Projects Data**: Data structure validation, required fields, type checking

### Integration Tests (Jest + RTL)

**Component Integration**:

- **ContactForm**: Form component + validation + state management + user interactions
- **Navbar**: Navigation component + mobile menu + user interactions

**API Integration**:

- **Contact API**: API routes + email sending + error handling + environment validation

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

### Test Coverage Summary

**27 Unit/Integration Tests (Jest + RTL)**:

- Individual utility functions and data validation
- Component behavior with user interactions
- API routes with request/response cycles
- Form validation and submission workflows
- Environment configuration checks

**30 End-to-End Tests (Cypress)**:

- Complete user workflows across all features
- Cross-component integration scenarios
- Real browser behavior and responsive design
- Accessibility compliance and keyboard navigation
- API integration with realistic network conditions

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

## Cypress Implementation Details

### Core Cypress Setup

- **Cypress**: v15.3.0 with full TypeScript support
- **Configuration**: `cypress.config.ts` with E2E testing configured
- **Support Files**: Custom commands and global setup in `cypress/support/`
- **TypeScript**: Dedicated `cypress/tsconfig.json` for Cypress-specific configuration

### Test Suites (5 files, 30+ test cases)

1. **Homepage Tests** (`cypress/e2e/homepage.cy.ts`)
   - Navigation functionality and mobile responsiveness
   - Section scrolling and URL hash updates
   - Mobile menu toggle behavior

2. **Contact Form Tests** (`cypress/e2e/contact-form.cy.ts`)
   - Complete form validation workflow
   - API integration with request/response intercepting
   - Loading states and error handling
   - Form field clearing after successful submission

3. **Projects Tests** (`cypress/e2e/projects.cy.ts`)
   - Content display and structure validation
   - External link behavior (target="\_blank", rel attributes)
   - Responsive design across viewports
   - Proper heading hierarchy

4. **Accessibility Tests** (`cypress/e2e/accessibility.cy.ts`)
   - ARIA labels and semantic HTML structure
   - Keyboard navigation and focus management
   - Form label associations
   - Console error monitoring

5. **Maintenance Mode Tests** (`cypress/e2e/maintenance.cy.ts`)
   - Maintenance page display and styling
   - Responsive behavior validation

### CI/CD Integration

- **GitHub Actions**: `.github/workflows/test.yml` with both unit and E2E testing
- **Artifact Upload**: Videos and screenshots on test failures
- **Parallel Jobs**: Unit tests and E2E tests run in separate CI jobs

### Development Workflow

```bash
# Development workflow
pnpm test:e2e:dev  # Starts dev server + opens Cypress

# CI/Production
pnpm test:all      # Runs all tests (unit + E2E)
```

### Key Features Implemented

- ✅ TypeScript support throughout
- ✅ API request interception for consistent testing
- ✅ Mobile/responsive testing across viewports
- ✅ Accessibility-first test patterns
- ✅ Real form submission workflows
- ✅ Error state and loading state validation
- ✅ Cross-browser compatibility (Chrome/Electron)

### Test Coverage Summary

- **27 unit/integration tests** covering individual functions, components, and API routes
- **30 E2E test cases** covering complete user workflows and cross-component integration
- **Full CI pipeline** with automated testing and artifact collection

This implementation provides comprehensive coverage of both unit-level functionality and end-to-end user experience, ensuring high confidence in the application's reliability.
