import { Providers } from "./providers";
import "./globals.css";
import { Navbar } from "@/components/landing/navbar";
import { Kanit } from "next/font/google";
import type { Metadata, Viewport } from "next";

const kanit = Kanit({
    subsets: ["latin", "thai"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-kanit",
    display: "swap",
    preload: true,
    fallback: ["system-ui", "arial"],
});

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.anyaith.com";

export const metadata: Metadata = {
    metadataBase: new URL(APP_URL),
    title: {
        default: "ANYCALL - AI Call Center | ระบบ AI รับสาย-โทรออกอัตโนมัติ 24/7",
        template: "%s | ANYCALL",
    },
    description:
        "ANYCALL คือ AI Call Center สำหรับธุรกิจไทย รับสาย-โทรออกอัตโนมัติ 24 ชั่วโมง ลดต้นทุน Call Center 80% ไม่พลาดทุกโอกาส สร้าง AI Agent ได้ใน 5 นาที ไม่ต้องเขียนโค้ด รองรับภาษาไทย-อังกฤษ",
    keywords: [
        // Primary keywords
        "AI Call Center",
        "AI call center ไทย",
        "ระบบ AI Call Center",
        "AI Calling Agent",
        "AI รับสาย",
        "ระบบตอบรับอัตโนมัติ",
        "ANYCALL",
        "anyaith",
        // Secondary keywords
        "AI โทรศัพท์",
        "สร้าง AI Agent",
        "รับสายอัตโนมัติ",
        "AI ธุรกิจ SME",
        "ระบบ AI สำหรับธุรกิจ",
        "AI 24 ชั่วโมง",
        // Long-tail Thai keywords
        "ระบบ AI รับสายโทรศัพท์",
        "AI จองนัดหมายอัตโนมัติ",
        "ระบบโทรอัตโนมัติไทย",
        "AI receptionist ภาษาไทย",
        "ระบบตอบรับโทรศัพท์อัตโนมัติ",
        "AI คลินิกทันตกรรม",
        "AI agent สำหรับธุรกิจ",
        "voice bot ภาษาไทย",
        // English/international
        "call automation Thailand",
        "voice AI Thailand",
        "AI receptionist",
        "Thai AI calling",
        "automated phone system Thailand",
        "AI phone agent",
        "no-code AI calling",
        // AI Call Center cluster
        "AI call center สำหรับ SME",
        "ระบบ call center อัตโนมัติ",
        "call center AI ไทย",
        "ระบบรับสายอัตโนมัติ AI",
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
    manifest: "/manifest.json",
    openGraph: {
        title: "ANYCALL - AI Call Center | ระบบ AI รับสาย-โทรออกอัตโนมัติ 24/7",
        description:
            "ANYCALL คือ AI Call Center สำหรับธุรกิจไทย รับสาย-โทรออกอัตโนมัติ 24 ชั่วโมง ลดต้นทุน Call Center 80% สร้าง AI Agent ได้ใน 5 นาที ไม่ต้องเขียนโค้ด",
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
        title: "ANYCALL - AI Call Center | ระบบ AI รับสาย-โทรออกอัตโนมัติ 24/7",
        description:
            "ANYCALL คือ AI Call Center สำหรับธุรกิจไทย รับสาย-โทรออกอัตโนมัติ 24 ชั่วโมง ลดต้นทุน 80% ไม่ต้องเขียนโค้ด",
        images: ["/og-image.png"],
        creator: "@anycall_ai",
        site: "@anycall_ai",
    },
    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
        yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "",
        other: {
            "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
        },
    },
    appLinks: {
        web: {
            url: APP_URL,
            should_fallback: true,
        },
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#000000" },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="th" dir="ltr">
            <head>
                {/* DNS Prefetch & Preconnect for performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="//www.google-analytics.com" />
                <link rel="dns-prefetch" href="//www.googletagmanager.com" />
                {/* Canonical handled by Next.js metadata, but add preload for LCP image */}
                <link rel="preload" as="image" href="/og-image.png" type="image/png" />
            </head>
            <body className={`${kanit.className} ${kanit.variable}`}>
                <noscript>
                    <div style={{ padding: "2rem", textAlign: "center", fontFamily: "system-ui" }}>
                        <h1>ANYCALL — AI Call Center สำหรับธุรกิจไทย</h1>
                        <p>AI Call Center รับสาย-โทรออกอัตโนมัติ 24 ชั่วโมง ลดต้นทุน Call Center 80% สร้าง AI Agent ได้ภายใน 5 นาที ไม่ต้องเขียนโค้ด</p>
                        <p>กรุณาเปิดใช้งาน JavaScript เพื่อประสบการณ์การใช้งานที่ดีที่สุด</p>
                        <nav>
                            <a href="/">หน้าหลัก</a> | <a href="/contact">ติดต่อเรา</a> | <a href="/use-cases">Use Cases</a> | <a href="/blog">Blog</a>
                        </nav>
                    </div>
                </noscript>
                <Providers>
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
