# Dillon Cleaver Portfolio

A modern, responsive portfolio website built with Next.js 15, showcasing professional projects and technical expertise.

## 🚀 Features

- **Modern Design**: Clean, professional layout with responsive design
- **Project Showcase**: Detailed project descriptions with technical insights
- **Contact Form**: Integrated email functionality using Resend API
- **Maintenance Mode**: Built-in maintenance page for updates
- **TypeScript**: Fully typed codebase for better development experience
- **Mobile-First**: Responsive design optimized for all device sizes

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: CSS Modules for component-scoped styling
- **Email Service**: [Resend](https://resend.com/) for contact form functionality
- **Form Handling**: React Hook Form with Zod validation
- **Deployment**: Optimized for Vercel deployment

## 📦 Project Structure

```
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
├── hooks/                 # Custom React hooks
│   └── use-mobile.tsx     # Mobile device detection
└── public/                # Static files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/dillon-cleaver/dillon-cleaver-portfolio-next.git
   cd dillon-cleaver-portfolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Resend API Key for contact form functionality
   RESEND_API_KEY=your_resend_api_key_here

   # Optional: Enable maintenance mode
   NEXT_PUBLIC_MAINTENANCE_MODE=false
   ```

4. **Run the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📧 Contact Form Setup

The contact form uses [Resend](https://resend.com/) for email delivery:

1. **Sign up for a Resend account** at [resend.com](https://resend.com/)
2. **Generate an API key** in your Resend dashboard
3. **Add the API key** to your `.env.local` file as `RESEND_API_KEY`
4. **Update email addresses** in `app/api/contact/route.ts`:
   - Change the `from` field to your verified domain
   - Update the `to` field to your email address

## 🔧 Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Adding New Projects

To add new projects to the portfolio:

1. Open `components/Projects.tsx`
2. Add your project data to the `projects` array following the existing structure:
   ```typescript
   {
     title: "Your Project Name",
     sections: [
       {
         heading: "Section Name",
         content: [
           {
             subheading: "Subsection",
             content: "Description...",
             list: ["Feature 1", "Feature 2"],
             links: [{ text: "Demo", url: "https://..." }]
           }
         ]
       }
     ]
   }
   ```

### Customizing Styles

Each component has its own CSS module file:

- `components/ComponentName.module.css` - Component-specific styles
- `app/globals.css` - Global styles and CSS variables

### Maintenance Mode

Toggle maintenance mode by setting `NEXT_PUBLIC_MAINTENANCE_MODE=true` in your environment variables. This will redirect all traffic to a maintenance page.

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to [Vercel](https://vercel.com/)
2. **Set environment variables** in the Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy your site

### Other Platforms

The project is compatible with any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Dillon Cleaver**

- Email: dillon.cleaver@gmail.com
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]
- GitHub: [dillon-cleaver](https://github.com/dillon-cleaver)

---

Built with ❤️ using Next.js and TypeScript
