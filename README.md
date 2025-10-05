# Dillon Cleaver Portfolio

A modern, responsive portfolio website built with Next.js 15, showcasing professional projects and technical expertise.

## 🚀 Features

- **Modern Design**: Clean, professional layout with responsive design
- **Project Showcase**: Detailed project descriptions with technical insights
- **Contact Form**: Integrated email functionality using Resend API
- **Maintenance Mode**: Built-in maintenance page for updates
- **TypeScript**: Fully typed codebase for better development experience
- **Mobile-First**: Responsive design optimized for all device sizes
- **Test Coverage**: Comprehensive Jest + React Testing Library test suite with 27+ tests

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: CSS Modules for component-scoped styling
- **Email Service**: [Resend](https://resend.com/) for contact form functionality
- **Form Handling**: React Hook Form with Zod validation
- **Testing**: [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/)
- **Deployment**: Optimized for Vercel deployment

## 📦 Project Structure

```
├── __tests__/             # Test files with Jest + RTL
│   ├── ContactForm.test.tsx  # Form validation & submission tests
│   ├── Navbar.test.tsx       # Navigation component tests
│   ├── projects.test.ts      # Data validation tests
│   ├── validation.test.ts    # Utility function tests
│   └── api-contact.test.ts   # API route tests
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
- **Quality Assurance**: Comprehensive test suite with 27+ tests covering components, utilities, and API routes
- **Developer Experience**: ESLint configuration, testing framework, and development tooling

## 🧪 Testing

This project includes a comprehensive test suite to ensure code quality and reliability:

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Generate coverage report
pnpm test:coverage
```

### Test Coverage

- **Components**: Form validation, navigation behavior, user interactions
- **Utilities**: Email validation, form helpers, data processing
- **API Routes**: Contact form submission, error handling
- **Data Structures**: Project data validation and type safety

**Framework**: Jest + React Testing Library following Next.js 15 best practices  
**Coverage**: 27+ tests across 5 test suites  
**Approach**: Accessibility-first testing with realistic user interactions

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
