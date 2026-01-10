# 🛠️ ANYCALL - Developer Handoff Guide

> **Project**: ANYCALL Landing Page  
> **Framework**: Next.js 16 (App Router)  
> **Styling**: TailwindCSS + Radix UI  
> **Language**: TypeScript

เอกสารนี้รวบรวมรายละเอียดทางเทคนิคทั้งหมด (Deep Dive) เพื่อให้ Developer สามารถเข้าใจโครงสร้างที่ซับซ้อนและพัฒนาต่อได้อย่างรวดเร็ว

---

## 📋 Table of Contents
1. [Architecture Overview](#-architecture-overview)
2. [Deep Dive: Design System](#-deep-dive-design-system)
3. [Deep Dive: Components](#-deep-dive-components)
4. [State Management](#-state-management)
5. [Development Workflow](#-development-workflow)
6. [Deployment](#-deployment)

---

## 🏗️ Architecture Overview

### Project Structure (Next.js App Router)

โครงสร้างไฟล์ยึดตาม Next.js Standard โดยแยก Logic และ UI ออกจากกันชัดเจน:

```
src/
├── app/                      # Routing & Layouts
│   ├── layout.tsx            # Root Layout (Fonts, Metadata, Providers)
│   ├── page.tsx              # Homepage Composition
│   ├── globals.css           # Global Styles & CSS Variables
│   └── contact/              # '/contact' route
│
├── components/
│   ├── landing/              # Components เฉพาะ Landing Page (Business Logic)
│   │   ├── navbar.tsx        # Complex Navigation
│   │   ├── hero.tsx          # Hero Section
│   │   └── ...
│   │
│   └── ui/                   # Reusable "Dumb" Components (Shadcn/Radix)
│       ├── button.tsx
│       ├── toast.tsx
│       └── ...
│
├── contexts/                 # Global Client Side State
│   └── LanguageContext.tsx   # I18n State Management
│
└── lib/
    ├── data.ts               # � Centralized Content (TH/EN Strings)
    └── utils.ts              # Helper Functions (cn, formatters)
```

---

## 🎨 Deep Dive: Design System

Design System ถูกควบคุมผ่าน `tailwind.config.ts` และ CSS Variables ใน `globals.css`

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
| `--muted-foreground` | `text-muted-foreground` | `#64748B` | Secondary Text |

### 2. Custom Animations
Animations ทั้งหมดถูก define ไว้ใน `tailwind.config.ts` (section `extend.keyframes`)

- **`animate-fade-up`**: Fade in + Translate Y (ใช้บ่อยสุดสำหรับ Section contents)
  - Duration: `0.6s`
  - Usage: `<div className="animate-fade-up">`
- **`animate-slide-in-right` / `left`**: สำหรับ Mobile Menu หรือ Drawer
- **`animate-float`**: สำหรับ Floating Elements (Infinite loop)
- **`animate-accordion-down` / `up`**: สำหรับ FAQ Accordion

### 3. Typography (Kanit)
Font ทั้งหมดโหลดผ่าน `next/font/google` ใน `src/app/layout.tsx` และ assign variable `--font-kanit` ซึ่ง Tailwind จะ map เข้ากับ `font-sans` โดยอัตโนมัติ

---

## 🧩 Deep Dive: Components

### 1. Navbar (`src/components/landing/navbar.tsx`)
**Complexity: High**
Navbar เป็นส่วนที่ซับซ้อนที่สุดในหน้าเว็บ ประกอบด้วย logic:
- **Scroll Detection**: เปลี่ยน background จาก transparent เป็น glassmorphism (`bg-background/95 backdrop-blur-xl`) เมื่อ scroll เกิน 20px.
- **Mega Menu Animation**: ใช้ `AnimatePresence` + `motion.div` สำหรับ Dropdown.
- **Mobile Menu**: แยก render logic ออกมาต่างหาก และใช้ `AnimatePresence` เพื่อ smooth transition.
- **Hover Logic**: ใช้ state `hoveredLink` เพื่อ track ว่า cursor อยู่บนเมนูไหน เพื่อ prevent dropdown ปิดทันทีที่เมาส์ออกจาก text.

### 2. Toast System (`src/hooks/use-toast.ts`)
**Complexity: Medium**
เราไม่ได้ใช้ library นอกสำหรับ Toast แต่ใช้ Custom Hook ที่ implement Reducer Pattern เอง:
- `toasts`: Array ของ active toasts (Limit ไว้ที่ 1 เพื่อไม่ให้รกหน้าจอ)
- `dispatch`: Function สำหรับส่ง Action (`ADD_TOAST`, `DISMISS_TOAST`)
- `useToast()`: Hook สำหรับเรียกใช้ใน component -> `toast({ title: "Success" })`

### 3. Reusable UI (Shadcn Pattern)
Components ใน `src/components/ui` สร้างบน Radix UI Primitives:
- **Accessibility (A11y)**: รองรับ Keyboard navigation และ Screen readers เต็มรูปแบบ
- **Composition**: เราใช้ pattern `Root`, `Trigger`, `Content` (เช่น Accordion, Dialog)

---

## 🔄 State Management

### 1. Internationalization (i18n)
เนื่องจากเป็น Static Site ที่ต้องการความเร็วสูง เราจึงเลือกใช้ **Client-side Context** แทน Next.js Routing i18n (`/en`, `/th`) เพื่อให้ switch ภาษาได้ทันทีโดยไม่ต้อง reload หน้า.

- **State**: `LanguageContext.tsx` เก็บ state ลง `localStorage`.
- **Content**: ทุก text string อยู่ใน `src/lib/data.ts`.
- **Usage**:
  ```tsx
  const { t, language, setLanguage } = useLanguage();
  return <p>{t.hero.description}</p>
  ```

---

## � Development Workflow

### การเพิ่ม Section ใหม่
1. สร้าง Component ใน `src/components/landing/MyNewSection.tsx`.
2. เพิ่ม data strings (TH/EN) ใน `src/lib/data.ts`.
3. Import ไปใส่ใน `src/app/page.tsx` (Homepage).
4. Update `navbar` หรือ Link ถ้าจำเป็น.

### การอัปเดตสี/Theming
1. แก้ไขค่า HSL ใน `src/app/globals.css` (Root variables).
2. Tailwind จะ pick up ค่าใหม่ทันทีโดยไม่ต้องแก้ config.

---

## � Deployment

### Vercel (Recommended)
Project นี้ optimized สำหรับ Vercel:
1. Push code ขึ้น GitHub.
2. Connect Repo ใน Vercel Dashboard.
3. Build Command: `next build`.
4. Output Directory: `.next` (Default).

### Docker / Custom Server
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "start"]
```

---

## ❓ Troubleshooting

### 1. Font ไม่ขึ้น / เป็น Times New Roman
- **สาเหตุ**: `next/font` โหลดไม่ติด หรือ variable name ไม่ตรง
- **วิธีแก้**: เช็ค `layout.tsx` ว่า `className={kanit.className}` ถูกใส่ใน `<body>` หรือไม่

### 2. Hydration Error
- **สาเหตุ**: HTML ที่ Server render ไม่ตรงกับ Client (มักเกิดจาก `localStorage` หรือ `window` check)
- **วิธีแก้**: ใช้ `useEffect` เพื่อรอให้ component mount ก่อน render ส่วนที่ depend กับ browser api (ดูตัวอย่างใน `LanguageContext.tsx`)

---

*Last Updated for Next.js 16.1 - Jan 2026*
