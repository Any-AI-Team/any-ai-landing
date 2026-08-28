"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Cookie } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const CONSENT_KEY = "cookie-consent";

type ConsentValue = "accepted" | "declined";

export const CookieConsent = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // Start the entrance after hydration, keeping the initial markup identical.
    const frame = requestAnimationFrame(() => {
      // Keep the banner previewable locally, even after a previous choice.
      const isLocalPreview = process.env.NODE_ENV === "development" &&
        ["localhost", "127.0.0.1", "[::1]"].includes(window.location.hostname);
      if (isLocalPreview) {
        setVisible(true);
        return;
      }

      try {
        const stored = localStorage.getItem(CONSENT_KEY);
        setVisible(stored !== "accepted" && stored !== "declined");
      } catch {
        // Keep the choices available when browser storage is disabled.
        setVisible(true);
      }
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleChoice = (value: ConsentValue) => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      // The banner can still be dismissed for this visit.
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
          className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6 sm:pb-[max(1.5rem,env(safe-area-inset-bottom))]"
          role="region"
          aria-live="polite"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-description"
        >
          <div className="pointer-events-auto mx-auto flex max-h-[calc(100dvh-3rem)] max-w-5xl flex-col gap-5 overflow-y-auto rounded-3xl border border-border/70 bg-card/95 p-5 shadow-[0_8px_40px_rgba(29,29,31,0.12)] backdrop-blur-xl md:flex-row md:items-center md:gap-8 md:p-6">
            <div className="flex min-w-0 items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-brand-blue/10 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 sm:h-12 sm:w-12">
                <Cookie aria-hidden="true" strokeWidth={1.5} className="h-5 w-5 text-brand-blue sm:h-6 sm:w-6" />
              </div>
              <div>
                <p id="cookie-consent-title" className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                  {t.cookieConsent.title}
                </p>
                <p id="cookie-consent-description" className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {t.cookieConsent.description}{" "}
                  <Link
                    href="/cookies"
                    className="rounded-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {t.cookieConsent.learnMore}
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex shrink-0 gap-3 border-t border-border/60 pt-4 md:border-0 md:pt-0">
              <Button
                type="button"
                variant="outline"
                onClick={() => handleChoice("declined")}
                className="h-11 flex-1 rounded-full border-border bg-transparent px-6 text-primary hover:bg-secondary hover:text-primary md:min-w-28 md:flex-none"
              >
                {t.cookieConsent.decline}
              </Button>
              <Button
                type="button"
                onClick={() => handleChoice("accepted")}
                className="h-11 flex-1 rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90 md:min-w-28 md:flex-none"
              >
                {t.cookieConsent.accept}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
