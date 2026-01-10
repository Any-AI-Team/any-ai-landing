# 🛠️ ANYCALL - Developer Handoff Guide

> **Project**: ANYCALL Landing Page
> **Framework**: Next.js 16.1 (App Router)
> **Styling**: TailwindCSS 3.4 + Radix UI
> **Language**: TypeScript 5.8
> **State Management**: React Context + Hooks

เอกสารนี้รวบรวมรายละเอียดทางเทคนิคทั้งหมด (Deep Dive) เพื่อให้ Developer สามารถเข้าใจโครงสร้างที่ซับซ้อนและพัฒนาต่อได้อย่างรวดเร็ว

---

## 📋 Table of Contents
1. [Architecture Overview](#-architecture-overview)
2. [Deep Dive: Design System](#-deep-dive-design-system)
3. [Deep Dive: Components](#-deep-dive-components)
4. [State Management & I18n](#-state-management--i18n)
5. [SEO & Metadata](#-seo--metadata)
6. [Development Workflow](#-development-workflow)
7. [Deployment](#-deployment)

---

## 🏗️ Architecture Overview

### Project Structure (Next.js App Router)

โครงสร้างไฟล์ยึดตาม Next.js Standard โดยแยก Logic และ UI ออกจากกันชัดเจน สะท้อนถึงการออกแบบที่เน้น Scalability:

```
src/
├── app/                      # Routing & Layouts
│   ├── layout.tsx            # Root Layout (Fonts, Metadata, Providers)
│   ├── page.tsx              # Homepage Composition
│   ├── globals.css           # Global Styles & CSS Variables
│   ├── contact/              # '/contact' route
│   ├── robots.ts             # SEO: Robots.txt generation
│   └── sitemap.ts            # SEO: Sitemap generation
│
├── components/
│   ├── landing/              # Components เฉพาะ Landing Page (Business Logic)
│   │   ├── navbar.tsx        # Complex Navigation with Glassmorphism
│   │   ├── hero.tsx          # Hero Section with animations
│   │   ├── use-cases.tsx     # Card-based layout with shadows
│   │   └── ...
│   │
│   └── ui/                   # Reusable "Dumb" Components (Shadcn/Radix)
│       ├── button.tsx
│       ├── toast.tsx
│       └── ...
│
├── contexts/                 # Global Client Side State
│   └── LanguageContext.tsx   # I18n State Management (Context API)
│
└── lib/
    ├── data.ts               # 🗃️ Centralized Data Entry Point
    ├── i18n/                 # 🌐 Split Content Files
    │   ├── th.ts             # Thai Content
    │   └── en.ts             # English Content
    └── utils.ts              # Helper Functions (cn, formatters)
```

---

## 🎨 Deep Dive: Design System

Design System ถูกควบคุมผ่าน `tailwind.config.ts` และ CSS Variables ใน `globals.css` โดยเน้นความ Modern และ Premium

### 1. Color System (HSL)
เราใช้ HSL Format เพื่อให้สามารถทำ Opacity Modifier ใน Tailwind ได้ (เช่น `bg-brand-blue/20`)

| Variable Name | Tailwind Class | Hex (Approx) | Usage |
|---------------|----------------|--------------|-------|
| `--brand-blue` | `text-brand-blue` | `#3B82F6` | Primary Actions, Links |
| `--brand-purple` | `text-brand-purple` | `#A855F7` | Gradient Accents |
| `--brand-pink` | `text-brand-pink` | `#EC4899` | Gradient Accents |
| `--brand-orange` | `text-brand-orange` | `#F97316` | Warm Accents |
| `--background` | `bg-background` | `#FFFFFF` | Page Background |
| `--foreground` | `text-foreground` | `#0F172A` | Main Body Text |

### 2. Custom Shadows
มีการปรับแต่ง Shadow ให้ดูนุ่มนวลและมีความลึก (Elevation) ที่สมจริง โดยเฉพาะในส่วนของ Cards
- **Config**: `0 4px 8px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)`
- **Usage**: ใช้ใน `use-cases.tsx`, `value-proposition.tsx` เพื่อให้ Card ลอยเด่นขึ้นจากพื้นหลัง

### 3. Custom Animations
Animations ทั้งหมดถูก define ไว้ใน `tailwind.config.ts` (section `extend.keyframes`) และใช้ `framer-motion` ในบางส่วนที่ซับซ้อน

- **`animate-fade-up`**: Fade in + Translate Y (ใช้บ่อยสุดสำหรับ Section contents)
- **`animate-slide-in-right` / `left`**: สำหรับ Mobile Menu หรือ Drawer
- **`animate-float`**: สำหรับ Floating Elements (Infinite loop)
- **Glassmorphism**: ใช้ `backdrop-blur` ร่วมกับ `bg-white/xx` ใน Navbar และ Dropdowns

### 4. Typography (Kanit)
Font ทั้งหมดโหลดผ่าน `next/font/google` ใน `src/app/layout.tsx` และ assign variable `--font-kanit` ซึ่ง Tailwind จะ map เข้ากับ `font-sans` โดยอัตโนมัติ

---

## 🧩 Deep Dive: Components

### 1. Navbar (`src/components/landing/navbar.tsx`)
**Complexity: High**
Navbar เป็นส่วนที่ซับซ้อนที่สุดในหน้าเว็บ ประกอบด้วย logic:
- **Scroll Detection**: เปลี่ยน background จาก transparent เป็น glassmorphism (`bg-background/95 backdrop-blur-xl`) เมื่อ scroll เกิน 20px
- **Mega Menu Animation**: ใช้ `AnimatePresence` + `motion.div` สำหรับ Dropdown ที่ Smooth
- **Glassmorphism Dropdowns**: Dropdown menus (Language, Mega Menu) ใช้ style เดียวกับ Navbar คือมีความโปร่งแสงและเบลอพื้นหลัง
- **Mobile Menu**: แยก render logic และ animation การ slide เข้า-ออก

### 2. Toast System (`src/hooks/use-toast.ts`)
**Complexity: Medium**
เราไม่ได้ใช้ library นอกสำหรับ Toast แต่ใช้ Custom Hook ที่ implement Reducer Pattern เอง:
- `toasts`: Array ของ active toasts (Limit ไว้ที่ 1 เพื่อไม่ให้รกหน้าจอ)
- `dispatch`: Function สำหรับส่ง Action (`ADD_TOAST`, `DISMISS_TOAST`)

---

## 🔄 State Management & I18n

### Internationalization Strategy
เนื่องจากเป็น Static Site ที่ต้องการความเร็วสูง และ SEO ในเบื้องต้นเน้น Single Page เราจึงเลือกใช้ **Client-side Context** เพื่อ switch ภาษาได้ทันทีโดยไม่ต้อง reload

1.  **Data Source**:
    *   `src/lib/data.ts`: เป็น Entry point หลักที่ export `UI_TEXT` โดยเลือกจาก `TH` หรือ `EN`
    *   `src/lib/i18n/th.ts`: เก็บ text ภาษาไทยทั้งหมด แยกตาม section (navLinks, hero, features...)
    *   `src/lib/i18n/en.ts`: เก็บ text ภาษาอังกฤษทั้งหมด (Structure เดียวกับ th.ts)

2.  **Context (`LanguageContext.tsx`)**:
    *   ใช้ `createContext` เก็บ state `language` ('TH' | 'EN')
    *   **Persistence**: เก็บค่าลง `localStorage` เพื่อจำภาษาที่ user เลือก
    *   **Hydration Fix**: ใช้ `useEffect` เพื่อรอให้ component mount ก่อน render ส่วนที่ depend กับ `window/localStorage` ป้องกัน Hydration Error

3.  **Usage Pattern**:
    ```tsx
    const { t, language, setLanguage } = useLanguage();
    // t จะเปลี่ยนไปตาม language state อัตโนมัติ
    return <h1>{t.hero.title}</h1>
    ```

---

## 🔍 SEO & Metadata

โปรเจกต์รองรับ SEO Best Practices ผ่าน Next.js Metadata API:

1.  **Metadata Base**: กำหนดใน `src/app/layout.tsx`
2.  **Open Graph**: รองรับการแชร์ลง Facebook/Twitter (Title, Description, Images)
3.  **Sitemap**: `src/app/sitemap.ts` generate sitemap.xml อัตโนมัติ ช่วยให้ Google Bot index หน้าเว็บได้ครบถ้วน
4.  **Robots**: `src/app/robots.ts` ควบคุมการเข้าถึงของ Search Engine Crawlers

---

## 💻 Development Workflow

### การเพิ่ม Section ใหม่
1.  สร้าง Component ใน `src/components/landing/MyNewSection.tsx`
2.  เพิ่ม data strings (TH/EN) ใน `src/lib/i18n/th.ts` และ `en.ts`
3.  Update type definition ใน `src/lib/data.ts` (ถ้าจำเป็น)
4.  Import และใช้งานใน `src/app/page.tsx`
5.  เช็ค Responsive design ใน Mobile breakpoints

### การอัปเดตสี/Theming
1.  แก้ไขค่า HSL ใน `src/app/globals.css` (Root variables)
2.  Tailwind จะ pick up ค่าใหม่ทันทีโดยไม่ต้องแก้ config

---

## 🚀 Deployment

### Vercel (Recommended)
Project นี้ optimized สำหรับ Vercel:
1.  Push code ขึ้น GitHub
2.  Connect Repo ใน Vercel Dashboard
3.  Build Command: `next build`
4.  Output Directory: `.next` (Default)

### Docker
สามารถใช้ Dockerfile มาตรฐานสำหรับ Next.js Standalone mode ได้ หากต้องการ deploy บน Own Infrastructure

---

*Last Updated: Jan 2026*
