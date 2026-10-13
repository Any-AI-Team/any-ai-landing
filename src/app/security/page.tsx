import type { Metadata } from "next";
import SecurityClient from "./SecurityClient";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.anyaith.com";
const OG_IMAGE_PATH = "/missed-call-illustration.png";

export const metadata: Metadata = {
    title: "Data Security",
    description:
        "How ANYCALL protects your business data with encryption, role-based access control, secure infrastructure, and incident response — security engineered into every layer of the platform.",
    alternates: {
        canonical: `${APP_URL}/security`,
        languages: {
            "th-TH": `${APP_URL}/security`,
        },
    },
    openGraph: {
        title: "Data Security | ANYCALL",
        description:
            "How ANYCALL protects your business data with encryption, role-based access control, secure infrastructure, and incident response.",
        url: `${APP_URL}/security`,
        type: "website",
        images: [
            {
                url: OG_IMAGE_PATH,
                width: 1200,
                height: 630,
                alt: "ANYCALL Data Security",
            },
        ],
    },
};

export default function Security() {
    return <SecurityClient />;
}
