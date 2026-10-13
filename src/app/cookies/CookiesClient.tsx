"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export default function CookiesClient() {
    const { t } = useLanguage();
    return <LegalPageLayout content={t.cookiePage} anchorPrefix="cookies-section" />;
}
