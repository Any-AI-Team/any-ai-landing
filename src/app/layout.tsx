import { Providers } from "./providers";
import "./globals.css";
import { Navbar } from "@/components/landing/navbar";
import { Kanit } from "next/font/google";
import type { Metadata } from "next";

const kanit = Kanit({
    subsets: ["latin", "thai"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-kanit",
    display: "swap",
});

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.anyaith.com";

export const metadata: Metadata = {
    metadataBase: new URL(APP_URL),
    title: {
        default: "ANYCALL - AI Calling Agent | รับสายอัตโนมัติ 24/7",
        template: "%s | ANYCALL",
    },
    description:
        "ANYCALL แพลตฟอร์ม AI Calling Agent รับสาย-โทรออกอัตโนมัติ 24 ชั่วโมง ไม่พลาดทุกโอกาส สร้าง AI Agent ของธุรกิจคุณได้ภายใน 5 นาที ไม่ต้องเขียนโค้ด รองรับภาษาไทย-อังกฤษ",
    keywords: [
        "AI Calling Agent",
        "AI รับสาย",
        "ระบบตอบรับอัตโนมัติ",
        "AI call center",
        "ANYCALL",
        "anyaith",
        "AI โทรศัพท์",
        "สร้าง AI Agent",
        "รับสายอัตโนมัติ",
        "AI ธุรกิจ SME",
        "ระบบ AI สำหรับธุรกิจ",
        "AI 24 ชั่วโมง",
        "call automation Thailand",
        "voice AI Thailand",
        "AI receptionist",
    ],
    authors: [{ name: "ANYCALL", url: APP_URL }],
    creator: "ANYCALL",
    publisher: "ANYCALL",
    category: "technology",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: APP_URL,
        languages: {
            "th-TH": APP_URL,
            "en-US": `${APP_URL}/en`,
        },
    },
    icons: {
        icon: "/favicon.png",
        apple: "/favicon.png",
    },
    openGraph: {
        title: "ANYCALL - AI Calling Agent | รับสายอัตโนมัติ 24/7",
        description:
            "พลิกโฉมธุรกิจ SME ด้วย AI Calling Agent ที่รับสาย-โทรออกอัตโนมัติ 24 ชั่วโมง สร้าง AI Agent ของคุณได้ภายใน 5 นาที ไม่ต้องเขียนโค้ด",
        url: APP_URL,
        siteName: "ANYCALL",
        locale: "th_TH",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "ANYCALL - AI Calling Agent สำหรับธุรกิจไทย",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ANYCALL - AI Calling Agent | รับสายอัตโนมัติ 24/7",
        description:
            "พลิกโฉมธุรกิจ SME ด้วย AI Calling Agent ที่รับสาย-โทรออกอัตโนมัติ 24 ชั่วโมง ไม่ต้องเขียนโค้ด",
        images: ["/og-image.png"],
        creator: "@anycall_ai",
        site: "@anycall_ai",
    },
    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="th">
            <body className={kanit.className}>
                <Providers>
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
