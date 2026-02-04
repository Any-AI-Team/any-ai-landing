# 🚀 ANYCALL - Landing Page V2

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000?style=flat&logo=vercel)](https://vercel.com/)

## 📋 Overview

Professional landing page for ANYCALL AI phone service. Built with modern web technologies and optimized for performance, SEO, and developer experience. Integrates seamlessly with the main dashboard application.

**Tech Stack**: Next.js App Router • TypeScript • TailwindCSS • Framer Motion • Radix UI • React Context

## ⚡ Quick Start

```bash
# Install dependencies
npm install

# Setup environment
cp .env.example .env.local

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Environment Variables

```env
NEXT_PUBLIC_MAIN_APP_URL=http://localhost:3001  # Main app URL
RESEND_API_KEY=your_resend_api_key              # Contact form emails
```

## 🔗 Integration

Connects with main `anycaller-frontend` application:
- Authentication redirects to main app (`/login`, `/register`)  
- Post-login redirect to dashboard
- Shared user session management

## 🏗️ Architecture

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Homepage composition
│   ├── globals.css        # Global styles & CSS variables
│   ├── contact/           # Contact route
│   ├── robots.ts          # SEO robots.txt
│   └── sitemap.ts         # SEO sitemap
├── components/
│   ├── landing/           # Business-specific components
│   │   ├── navbar.tsx     # Navigation with scroll effects
│   │   ├── hero.tsx       # Hero section with animations
│   │   ├── pricing.tsx    # Pricing with bilingual support
│   │   └── ...
│   └── ui/                # Reusable UI components (Radix)
├── contexts/
│   └── LanguageContext.tsx # I18n state management
└── lib/
    ├── data.ts            # Centralized data exports
    ├── i18n/              # Internationalization
    │   ├── th.ts          # Thai content
    │   └── en.ts          # English content
    └── utils.ts           # Utility functions
```

## ✨ Key Features

### 🎨 Design System
- **Modern Color System**: HSL-based with CSS variables for consistency
- **Custom Animations**: Tailwind + Framer Motion for smooth interactions
- **Responsive Design**: Mobile-first with adaptive layouts
- **Glassmorphism**: Backdrop blur effects for modern aesthetics

### 🌐 Internationalization
- **Client-side Context**: Real-time language switching without reload
- **Persistent Preferences**: localStorage for user language settings
- **Structured Content**: Organized Thai/English content files

### ⚡ Performance Optimizations
- **Next.js App Router**: Server-side rendering with client hydration
- **Font Optimization**: Google Fonts with `next/font` optimization
- **Image Optimization**: `next/image` with lazy loading
- **Code Splitting**: Automatic bundling optimization

## 🧩 Components Overview

### Core Components
- **Navbar**: Complex navigation with scroll detection and glassmorphism
- **Hero**: Animated landing section with call-to-action
- **Pricing**: Bilingual pricing tables with hover effects
- **Contact**: Form integration with validation and email API

### Technical Details
- **Toast System**: Custom implementation with reducer pattern
- **Scroll Detection**: Dynamic navbar styling based on scroll position
- **Animation System**: Framer Motion for complex transitions
- **Form Validation**: Built-in validation with error handling

## 💻 Development

### Adding New Sections
1. Create component in `src/components/landing/`
2. Add content to `src/lib/i18n/th.ts` and `en.ts`
3. Update type definitions in `src/lib/data.ts`
4. Import in `src/app/page.tsx`
5. Test responsive design

### 🎨 Styling Guidelines
- Use CSS variables for theme consistency
- Implement mobile-first responsive design
- Follow Tailwind utility-first approach
- Use Framer Motion for complex animations

### 🔍 SEO Configuration
- **Metadata API**: Next.js built-in metadata handling
- **Open Graph**: Social media sharing optimization
- **Sitemap Generation**: Automated XML sitemap creation
- **Robots.txt**: Search engine crawler configuration

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Build and deploy
vercel --prod
```

### Manual Build
```bash
# Build for production
npm run build

# Start production server
npm start
```

### Docker
Standard Next.js Dockerfile compatible for containerized deployment.

## 🚀 Future Roadmap

### Phase 1: Enhanced User Experience
- [ ] **A/B Testing Framework** - Implement analytics for conversion optimization
- [ ] **Advanced Animations** - Lottie animations for hero section
- [ ] **Interactive Demos** - Live phone call simulation widget
- [ ] **Progressive Web App** - Offline capability and app-like experience

### Phase 2: Technical Improvements
- [ ] **Performance Optimization** - Bundle size reduction and lazy loading
- [ ] **SEO Enhancement** - Schema markup and advanced meta tags
- [ ] **Accessibility** - WCAG 2.1 AA compliance
- [ ] **Testing Suite** - E2E tests with Playwright

### Phase 3: Localization & Analytics
- [ ] **Multi-language Support** - Extend beyond Thai/English
- [ ] **Advanced Analytics** - Heatmaps and user behavior tracking
- [ ] **CMS Integration** - Headless CMS for content management
- [ ] **API Documentation** - Interactive API docs for integrations

### Phase 4: Advanced Features
- [ ] **Real-time Chat** - Customer support integration
- [ ] **Video Testimonials** - Dynamic customer success stories
- [ ] **Pricing Calculator** - Interactive ROI calculator
- [ ] **Integration Marketplace** - Showcase available integrations

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Open Pull Request

## 📄 License

Proprietary - ANYCALL Team

---

**Last Updated**: February 2026
