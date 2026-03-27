import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { AISummary } from "@/components/seo/AISummary";
import HomeClient from "./HomeClient";

// Force static generation — Googlebot gets pre-rendered HTML instantly
export const dynamic = "force-static";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.anyaith.com";

export const metadata: Metadata = {
    title: "ANYCALL - AI Calling Agent | รับสายอัตโนมัติ 24/7 สำหรับธุรกิจไทย",
    description:
        "ANYCALL แพลตฟอร์ม AI Calling Agent รับสาย-โทรออกอัตโนมัติ 24 ชั่วโมง ไม่พลาดทุกโอกาส สร้าง AI Agent ของธุรกิจคุณได้ภายใน 5 นาที ไม่ต้องเขียนโค้ด รองรับภาษาไทย-อังกฤษ เหมาะสำหรับ SME คลินิก ร้านค้า",
    alternates: {
        canonical: APP_URL,
        languages: {
            "th": APP_URL,
            "en": `${APP_URL}/en`,
        },
    },
    openGraph: {
        title: "ANYCALL - AI Calling Agent | รับสายอัตโนมัติ 24/7",
        description:
            "พลิกโฉมธุรกิจ SME ด้วย AI Calling Agent ที่รับสาย-โทรออกอัตโนมัติ 24 ชั่วโมง สร้าง AI Agent ของคุณได้ภายใน 5 นาที ไม่ต้องเขียนโค้ด",
        url: APP_URL,
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "ANYCALL - AI Calling Agent สำหรับธุรกิจไทย",
                type: "image/png",
            },
        ],
    },
};

export default function Index() {
    return (
        <>
            <JsonLd />
            <AISummary />
            <HomeClient />
        </>
    );
}
