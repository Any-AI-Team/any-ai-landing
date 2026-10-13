# Agent Notes

## Recoverable Errors

### Next.js Hydration Mismatch (React Hydration Error)

**Symptom:**

```
Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:
- A server/client branch `if (typeof window !== 'undefined')`.
- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

See more info here: https://nextjs.org/docs/messages/react-hydration-error
```

Example stack trace observed in this repo, pointing at a `framer-motion` `animate` prop with array keyframes inside an SSR'd client component:

```
src/components/landing/showcase.tsx (49:24) @ CallScreen

  47 |           animate={{
  48 |             scale: [1, 0.95, 1],
> 49 |             boxShadow: [
     |                        ^
  50 |               '0 0 20px rgba(59, 130, 246, 0.5)',
  51 |               '0 0 40px rgba(139,
```

**Why it happens:** This is a recoverable/non-fatal error — Next.js discards the server-rendered subtree and regenerates it on the client, so the page still works, but it flashes/re-renders and pollutes the console. The most common triggers in this codebase:
- `framer-motion` components (`motion.div`, etc.) whose `animate`/`style` values differ between the server-rendered markup and the first client render (e.g. keyframe arrays for `boxShadow`, `scale`, `opacity` that Framer Motion mutates on mount).
- Any component reading `window`, `document`, `localStorage`, viewport size, or language/locale preference during render instead of in `useEffect`.
- `Date.now()`, `Math.random()`, or other non-deterministic values used directly in JSX.
- Locale-dependent date/number formatting where server locale != browser locale.

**How to apply / check before `npm run dev`:**
1. Before starting the dev server, grep for risky patterns in files you're about to touch or that touch animation/SSR:
   - `typeof window !==`
   - `Date.now()` / `Math.random()`
   - `motion.` components with `animate={{ ... }}` containing array keyframes
2. If a component only needs its animation/dynamic value on the client, either:
   - Add a mount guard (`const [mounted, setMounted] = useState(false); useEffect(() => setMounted(true), [])`) and skip/short-circuit the dynamic bit until `mounted` is true, or
   - Move the component to render only inside `useEffect`/client-only boundary (e.g. `next/dynamic` with `ssr: false`) if it's purely decorative and doesn't need to appear in the initial HTML.
3. Treat this class of error as recoverable, not blocking: the app still functions after the client re-render, so it's fine to note it and continue, but fix it before shipping since it causes a visible flash and console noise.
4. `src/components/landing/showcase.tsx`'s `CallScreen` (and sibling phone-screen mock components in the same file) is a known offender for this pattern — double-check any edits there for array-based `animate` keyframes.
