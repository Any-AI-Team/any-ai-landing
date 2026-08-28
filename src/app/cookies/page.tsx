import type { Metadata } from "next";
import CookiesClient from "./CookiesClient";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.anyaith.com";
const OG_IMAGE_PATH = "/missed-call-illustration.png";

export const metadata: Metadata = {
    title: "Cookie Policy",
    description:
        "How ANYCALL uses cookies and similar technologies on our website, the types of cookies we use, and how to manage your preferences.",
    alternates: {
        canonical: `${APP_URL}/cookies`,
        languages: {
            "th-TH": `${APP_URL}/cookies`,
        },
    },
    openGraph: {
        title: "Cookie Policy | ANYCALL",
        description:
            "How ANYCALL uses cookies and similar technologies on our website, and how to manage your preferences.",
        url: `${APP_URL}/cookies`,
        type: "website",
        images: [
            {
                url: OG_IMAGE_PATH,
                width: 1200,
                height: 630,
                alt: "ANYCALL Cookie Policy",
            },
        ],
    },
};

export default function Cookies() {
    return <CookiesClient />;
}
