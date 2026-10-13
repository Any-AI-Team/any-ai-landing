"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export default function SecurityClient() {
    const { t } = useLanguage();
    return <LegalPageLayout content={t.securityPage} anchorPrefix="security-section" />;
}
