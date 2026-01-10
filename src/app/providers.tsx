"use client";

import { Toaster } from "@/components/ui/toaster";

import { LanguageProvider } from "@/contexts/LanguageContext";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <LanguageProvider>
            {children}
            <Toaster />
        </LanguageProvider>
    );
}
