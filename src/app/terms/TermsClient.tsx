"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export default function TermsClient() {
    const { t } = useLanguage();
    return <LegalPageLayout content={t.termsPage} anchorPrefix="terms-section" />;
}
