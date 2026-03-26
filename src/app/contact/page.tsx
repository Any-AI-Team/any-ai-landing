import type { Metadata } from "next";
import { ContactPageJsonLd } from "@/components/seo/JsonLd";
import ContactClient from "./ContactClient";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.anyaith.com";

export const metadata: Metadata = {
    title: "ติดต่อเรา - เริ่มต้นใช้งาน AI Calling Agent",
    description:
        "ติดต่อทีมงาน ANYCALL เพื่อเริ่มต้นใช้งาน AI Calling Agent สำหรับธุรกิจของคุณ กรอกแบบฟอร์มแล้วเราจะติดต่อกลับภายใน 24 ชั่วโมง",
    alternates: {
        canonical: `${APP_URL}/contact`,
        languages: {
            "th-TH": `${APP_URL}/contact`,
            "en-US": `${APP_URL}/en/contact`,
        },
    },
    openGraph: {
        title: "ติดต่อ ANYCALL - เริ่มต้นใช้ AI Calling Agent",
        description:
            "ติดต่อทีมงาน ANYCALL เพื่อเริ่มต้นใช้งาน AI Calling Agent สำหรับธุรกิจของคุณ",
        url: `${APP_URL}/contact`,
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "ติดต่อ ANYCALL",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ติดต่อ ANYCALL - เริ่มต้นใช้ AI Calling Agent",
        description:
            "ติดต่อทีมงาน ANYCALL เพื่อเริ่มต้นใช้งาน AI Calling Agent สำหรับธุรกิจของคุณ",
    },
};

export default function Contact() {
    return (
        <>
            <ContactPageJsonLd />
            <ContactClient />
        </>
    );
}
