"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export default function PrivacyClient() {
    const { t } = useLanguage();
    return <LegalPageLayout content={t.privacyPage} anchorPrefix="privacy-section" />;
}
