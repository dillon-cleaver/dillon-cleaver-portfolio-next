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
├── app/                    # Next.js App Router
│   ├── api/contact/        # Contact form API endpoint
│   ├── maintenance/        # Maintenance mode page
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ContactForm.tsx    # Form with validation
│   ├── Navbar.tsx         # Navigation header
│   └── Projects.tsx       # Project showcase
├── __tests__/             # Unit & integration tests
├── cypress/e2e/           # End-to-end tests
├── config/                # Site configuration
└── docs/                  # Documentation
```

## 💡 Technical Highlights

- **Performance**: Next.js 15 with App Router for optimal loading speeds
- **Architecture**: Component-based TypeScript codebase for maintainability
- **Testing**: 57 comprehensive tests (unit, integration, E2E) with CI/CD pipeline
- **Infrastructure**: Serverless deployment with integrated email functionality
- **Quality**: ESLint, Prettier, and automated testing ensure code reliability

## 🧪 Testing

Comprehensive test coverage with **57 total tests** across three tiers:

- **Unit Tests**: Jest for individual functions and utilities
- **Integration Tests**: Jest + React Testing Library for component interactions
- **End-to-End Tests**: Cypress for complete user workflows in real browsers

```bash
# Run all tests
pnpm test:all

# Development testing
pnpm test              # Unit + integration tests
pnpm cypress:open      # Interactive E2E testing
```

**Key Features**: Accessibility-first testing, API integration validation, responsive design verification, and automated CI/CD pipeline with GitHub Actions.

See [`docs/TESTING.md`](docs/TESTING.md) for complete testing documentation.

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
