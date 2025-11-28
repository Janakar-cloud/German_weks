# German Werks Website - Setup & Deployment Guide

## 🚀 Quick Start Guide

Follow these steps to get your world-class German Werks website running locally and deploy it to production.

## Prerequisites

Before you begin, ensure you have:
- **Node.js** version 18.0 or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js) or **yarn**
- A code editor (VS Code recommended)
- Git installed on your system

## Step 1: Install Dependencies

Open your terminal in the project directory and run:

```powershell
npm install
```

This will install all required packages including:
- Next.js 14 (latest React framework)
- TypeScript (for type safety)
- Tailwind CSS (for styling)
- Framer Motion (for animations)
- React Hook Form (for forms)
- And more...

## Step 2: Run Development Server

Start the development server:

```powershell
npm run dev
```

Open your browser and visit:
```
http://localhost:3000
```

You should see your German Werks website running! 🎉

## Step 3: Explore the Website

Navigate through all pages:
- **Home** (`/`) - Hero, services overview, about preview
- **Services** (`/services`) - Detailed service offerings
- **About** (`/about`) - Company story and team
- **Gallery** (`/gallery`) - Facility showcase
- **Contact** (`/contact`) - Booking form

## Step 4: Customize Content

### Update Contact Information
Edit `src/components/layout/Footer.tsx` and `src/app/contact/page.tsx` to update:
- Phone numbers
- Email addresses
- Social media links
- Business hours

### Add Images
1. Create a `public` folder in the root directory if it doesn't exist
2. Add your images (logo, facility photos, team photos, etc.)
3. Reference them in components using `/image-name.jpg`

Example:
```tsx
<Image src="/logo.png" alt="German Werks Logo" width={200} height={100} />
```

### Modify Colors
Edit `src/app/globals.css` to change the color scheme.

### Update Services
Edit `src/app/services/page.tsx` to modify service descriptions and features.

## Step 5: Build for Production

When ready to deploy, create a production build:

```powershell
npm run build
```

Test the production build locally:

```powershell
npm start
```

## Step 6: Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js apps:

### Option A: Deploy via Vercel Website
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

### Option B: Deploy via CLI
```powershell
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

Your site will be live at: `https://your-project-name.vercel.app`

## Alternative Deployment Options

### Netlify
1. Build your project: `npm run build`
2. Upload the `.next` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

### Traditional Hosting (cPanel, VPS)
1. Build your project: `npm run build`
2. Start the server: `npm start`
3. Use PM2 or similar to keep the server running:
```bash
npm install -g pm2
pm2 start npm --name "german-werks" -- start
pm2 save
pm2 startup
```

## Step 7: Configure Domain

### For Vercel:
1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain (e.g., `germanwerks.com`)
4. Follow DNS configuration instructions

### DNS Configuration (General):
Add these records to your domain provider:
```
Type: A
Host: @
Value: [Your server IP or Vercel IP]

Type: CNAME
Host: www
Value: [Your domain or Vercel domain]
```

## Step 8: Set Up Forms

The contact form currently logs to console. To make it functional:

### Option 1: Use Vercel Forms
Add to `src/app/contact/page.tsx`:
```typescript
const onSubmit = async (data: FormData) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  // Handle response
};
```

Create `src/app/api/contact/route.ts`:
```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  // Send email or save to database
  return NextResponse.json({ success: true });
}
```

### Option 2: Use Formspree
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update form action in `contact/page.tsx`

### Option 3: Use EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Install: `npm install @emailjs/browser`
3. Configure email templates
4. Integrate in contact form

## Step 9: SEO Optimization

### Add Google Analytics
1. Get your GA tracking ID
2. Add to `src/app/layout.tsx`:
```tsx
import Script from 'next/script';

// In the layout component:
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID`}
  strategy="afterInteractive"
/>
```

### Add Sitemap
Create `src/app/sitemap.ts`:
```typescript
export default function sitemap() {
  return [
    { url: 'https://germanwerks.com', lastModified: new Date() },
    { url: 'https://germanwerks.com/services', lastModified: new Date() },
    { url: 'https://germanwerks.com/about', lastModified: new Date() },
    { url: 'https://germanwerks.com/gallery', lastModified: new Date() },
    { url: 'https://germanwerks.com/contact', lastModified: new Date() },
  ];
}
```

### Add robots.txt
Create `src/app/robots.ts`:
```typescript
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://germanwerks.com/sitemap.xml',
  };
}
```

## Step 10: Performance Optimization

### Image Optimization
Use Next.js Image component for all images:
```tsx
import Image from 'next/image';

<Image
  src="/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // for above-the-fold images
/>
```

### Font Optimization
Fonts are already optimized using next/font/google in `layout.tsx`

## Troubleshooting

### Build Errors
```powershell
# Clear cache and rebuild
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Port Already in Use
```powershell
# Run on different port
npm run dev -- -p 3001
```

### TypeScript Errors
The errors you see are normal during development. They'll resolve once dependencies are installed.

## Maintenance

### Regular Updates
```powershell
# Check for updates
npm outdated

# Update all packages
npm update

# Update Next.js specifically
npm install next@latest react@latest react-dom@latest
```

### Security
```powershell
# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

## Support & Resources

- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion
- Vercel Support: https://vercel.com/support

## Checklist Before Launch

- [ ] Install all dependencies
- [ ] Test on mobile devices
- [ ] Update all contact information
- [ ] Add real images
- [ ] Test contact form
- [ ] Set up email notifications
- [ ] Add Google Analytics
- [ ] Configure custom domain
- [ ] Test all page links
- [ ] Add favicon
- [ ] Test performance (Lighthouse)
- [ ] Set up SSL certificate
- [ ] Create backup system
- [ ] Test on different browsers

## Need Help?

If you encounter any issues:
1. Check the console for error messages
2. Review the Next.js documentation
3. Search for the error on Stack Overflow
4. Contact your development team

---

**Congratulations!** 🎉 You now have a world-class, modern website for German Werks!

Launching January 2026 | German Experts. Precision Meets Passion.
