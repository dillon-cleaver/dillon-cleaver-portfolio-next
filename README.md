# Dillon Cleaver Portfolio

A modern, responsive portfolio website built with Next.js 15, showcasing professional projects and technical expertise.

## 🚀 Features

- **Modern Design**: Clean, professional layout with responsive design
- **Project Showcase**: Detailed project descriptions with technical insights
- **Contact Form**: Integrated email functionality using Resend API
- **Maintenance Mode**: Built-in maintenance page for updates
- **TypeScript**: Fully typed codebase for better development experience
- **Mobile-First**: Responsive design optimized for all device sizes
- **Test Coverage**: Comprehensive testing with Jest + React Testing Library (unit tests) and Cypress (E2E tests)

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: CSS Modules for component-scoped styling
- **Email Service**: [Resend](https://resend.com/) for contact form functionality
- **Form Handling**: React Hook Form with Zod validation
- **Testing**: [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/) + [Cypress](https://www.cypress.io/)
- **Deployment**: Optimized for Vercel deployment

## 📦 Project Structure

```
├── __tests__/             # Unit test files with Jest + RTL
│   ├── ContactForm.test.tsx  # Form validation & submission tests
│   ├── Navbar.test.tsx       # Navigation component tests
│   ├── projects.test.ts      # Data validation tests
│   ├── validation.test.ts    # Utility function tests
│   └── api-contact.test.ts   # API route tests
├── cypress/               # E2E test files with Cypress
│   ├── e2e/               # End-to-end test specifications
│   │   ├── homepage.cy.ts       # Main page navigation tests
│   │   ├── contact-form.cy.ts   # Contact form E2E tests
│   │   ├── projects.cy.ts       # Projects section tests
│   │   ├── accessibility.cy.ts  # Accessibility & SEO tests
│   │   └── maintenance.cy.ts    # Maintenance mode tests
│   ├── support/           # Cypress support files
│   └── tsconfig.json      # TypeScript config for Cypress
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API endpoint
│   ├── assets/            # Static assets and images
│   ├── maintenance/       # Maintenance mode page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── AboutMe.tsx        # About section component
│   ├── ContactForm.tsx    # Contact form with validation
│   ├── Footer.tsx         # Site footer
│   ├── Navbar.tsx         # Navigation header
│   └── Projects.tsx       # Projects showcase
├── config/                # Configuration files
│   └── site.ts            # Site-wide configuration
├── docs/                  # Documentation
│   └── testing.md         # Testing setup and guidelines
├── hooks/                 # Custom React hooks
│   └── use-mobile.tsx     # Mobile device detection
├── jest.config.ts         # Jest configuration
├── jest.setup.ts          # Test environment setup
└── public/                # Static files
```

## 💡 Technical Implementation

This portfolio demonstrates modern web development practices and architecture decisions:

- **Performance**: Optimized build with Next.js 15 and App Router for fast loading
- **Scalability**: Component-based architecture with TypeScript for maintainability
- **User Experience**: Responsive design with CSS Modules for scoped styling
- **Infrastructure**: Serverless deployment with integrated email functionality
- **Quality Assurance**: Comprehensive testing with 27+ unit tests + E2E test suite covering all user workflows
- **Developer Experience**: ESLint configuration, testing framework, and development tooling

## 🧪 Testing

This project implements a comprehensive three-tier testing strategy following the testing pyramid:

### Unit Tests (Jest)

**What:** Individual functions and utilities in isolation
**Examples:** Email validation, data transformations, utility functions

### Integration Tests (Jest + React Testing Library)

**What:** Components working together with user interactions and state management
**Examples:** Form validation flows, component interactions, API route behavior

### End-to-End Tests (Cypress)

**What:** Complete user workflows in a real browser environment
**Examples:** Full form submission, navigation flows, cross-component interactions

```bash
# Run unit + integration tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Generate coverage report
pnpm test:coverage
```

### End-to-End Tests (Cypress)

```bash
# Open Cypress Test Runner (interactive)
pnpm cypress:open

# Run E2E tests headlessly
pnpm cypress:run

# Run dev server and E2E tests together
pnpm test:e2e:dev

# Run all tests (unit + E2E)
pnpm test:all
```

### Test Coverage

**Unit Tests (Jest)**:

- **Utilities**: Email validation, data transformations, utility functions
- **Data Structures**: Project data validation and type safety

**Integration Tests (Jest + RTL)**:

- **Components**: Form validation flows, navigation behavior, user interactions
- **API Routes**: Contact form submission, error handling, request/response cycles
- **State Management**: Component state changes and side effects

**End-to-End Tests (Cypress)**:

- **Homepage**: Navigation, responsive behavior, section scrolling
- **Contact Form**: Complete user workflows, validation, API integration
- **Projects**: Content display, external links, responsive design
- **Accessibility**: ARIA labels, keyboard navigation, semantic HTML
- **Maintenance Mode**: Feature flag behavior, styling consistency

**Coverage**: 27 unit/integration tests + 30 E2E test cases  
**Approach**: Testing pyramid with unit → integration → E2E layers  
**Quality**: Accessibility-first testing with realistic user interactions  
**CI/CD**: Automated testing in GitHub Actions with parallel execution

See [`docs/testing.md`](docs/testing.md) for detailed testing documentation.

## License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Dillon Cleaver**

- Email: me@dilloncleaver.com
- Portfolio: [dilloncleaver.com](https://www.dilloncleaver.com/)
- LinkedIn: [Dillon Cleaver](https://www.linkedin.com/in/dillon-cleaver/)
- GitHub: [dillon-cleaver](https://github.com/dillon-cleaver)

---

Built with ❤️ using Next.js and TypeScript
