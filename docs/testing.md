# Testing Setup

This project includes Jest tests for components, utilities, and API routes, configured according to [Next.js 15 testing documentation](https://nextjs.org/docs/app/guides/testing/jest).

## Test Files

- `__tests__/ContactForm.test.tsx` - Tests for the contact form component
- `__tests__/Navbar.test.tsx` - Tests for the navigation component
- `__tests__/projects.test.ts` - Tests for the projects data structure
- `__tests__/validation.test.ts` - Tests for validation utility functions
- `__tests__/api-contact.test.ts` - Basic API route testing (complex mocking deferred to integration tests)

## Running Tests

```bash
# Run all tests once
pnpm test

# Run tests in watch mode (re-runs on file changes)
pnpm test:watch

# Run tests with coverage report
pnpm test:coverage
```

## Test Configuration

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

## What's Tested

### Components

- **ContactForm**: Form validation, submission states, error handling
- **Navbar**: Navigation links, mobile menu toggle, scroll behavior

### Data & Utils

- **Projects Data**: Data structure validation, required fields
- **Validation Utils**: Email validation, required field checks, string formatting

### API Routes

- **Contact API**: Email sending, error handling, environment validation

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
