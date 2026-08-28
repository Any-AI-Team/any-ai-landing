"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export default function PdpaClient() {
    const { t } = useLanguage();
    return <LegalPageLayout content={t.pdpaPage} anchorPrefix="pdpa-section" />;
}
