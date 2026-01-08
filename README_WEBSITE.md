# German Werks Website

A world-class website for German Werks - South India's premier destination for German and European automotive care.

## Tech Stack

- **Next.js 14** (App Router) - Latest React framework with server components
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Modern utility-first styling
- **Framer Motion** - Premium animations and transitions
- **React Hook Form** - Form handling with validation
- **shadcn/ui** - Premium UI components
- **Lucide React** - Modern icon library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/          # About page
│   ├── contact/        # Contact page with booking form
│   ├── gallery/        # Facility gallery
│   ├── services/       # Services detail page
│   ├── layout.tsx      # Root layout with header/footer
│   └── page.tsx        # Home page
├── components/
│   ├── home/           # Home page sections
│   ├── layout/         # Header, Footer components
│   └── ui/             # Reusable UI components
└── lib/
    └── utils.ts        # Utility functions
```

## Features

- ✅ Responsive design for all devices
- ✅ Premium animations with Framer Motion
- ✅ SEO optimized with Next.js metadata
- ✅ Contact form with validation
- ✅ Service booking functionality
- ✅ Modern, professional UI
- ✅ Fast page loads with Next.js optimization
- ✅ Type-safe codebase with TypeScript

## Customization

### Colors

Edit the color scheme in `tailwind.config.ts` and `src/app/globals.css`

### Content

Update content in individual page files under `src/app/`

### Images

Add images to `public/` folder and reference them in components

## Deployment

This site is ready to deploy on Vercel, Netlify, or any platform that supports Next.js.

### Deploy on Vercel

```bash
npm install -g vercel
vercel
```

## License

© 2024 German Werks. All rights reserved.

## Contact

- Phone: Gopal +91 90 92 92 0924 | Dhilip +91 90 92 92 0927 (Primary) | Gokul +91 90 92 92 0928 (Secondary)
- Email: service@germanweks.in
- Instagram: @german_werks_
- Location: Coimbatore, Tamil Nadu, India

---

Built with ❤️ using the latest web technologies
