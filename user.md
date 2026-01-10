# Project Specifications

## Technology Stack
- **Framework**: Next.js 16.1.1 (App Router)
- **Core**: React 18.3.1
- **Language**: TypeScript 5.x
- **Styling**: 
  - Tailwind CSS 3.4
  - Tailwind Merge
  - PostCSS
- **Animation**: 
  - Framer Motion
  - tailwindcss-animate
- **Icons**: Lucide React
- **UI Components**: 
  - Radix UI Primitives (Accordion, Label, Slot, Toast)
  - Likely using Shadcn UI patterns (based on Radix + CVA + tailwind-merge)
- **Linting**: ESLint 9.x, TypeScript ESLint

## Project Structure
The project follows the standard Next.js App Router structure:

- **`src/`**: Source code root
  - **`app/`**: Application routes, pages, and layouts (App Router)
  - **`components/`**: Reusable UI components
  - **`lib/`**: Utility functions and helper libraries (e.g., `utils.ts` for styling)
  - **`hooks/`**: Custom React hooks
  - **`contexts/`**: React Context providers and definitions
  - **`constants/`**: configurations and constant data
  - **`assets/`**: Local static assets imported in code
- **`public/`**: Static files served directly (images, fonts, etc.)
- **`dist/`**: Output directory for builds (if applicable, though .next is usually for Next.js)

## Key Dependencies
- `next`
- `react`, `react-dom`
- `framer-motion`: For animations
- `lucide-react`: For icons
- `class-variance-authority`: For managing component variants
- `clsx`, `tailwind-merge`: For dynamic class names
