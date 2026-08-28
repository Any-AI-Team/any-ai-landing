import type { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.anyaith.com";
const OG_IMAGE_PATH = "/missed-call-illustration.png";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Learn how ANYCALL collects, uses, and protects your data. Encryption, role-based access control, and compliance with Thailand's PDPA are built into everything we do.",
    alternates: {
        canonical: `${APP_URL}/privacy`,
        languages: {
            "th-TH": `${APP_URL}/privacy`,
        },
    },
    openGraph: {
        title: "Privacy Policy | ANYCALL",
        description:
            "Learn how ANYCALL collects, uses, and protects your data. Encryption, role-based access control, and compliance with Thailand's PDPA are built into everything we do.",
        url: `${APP_URL}/privacy`,
        type: "website",
        images: [
            {
                url: OG_IMAGE_PATH,
                width: 1200,
                height: 630,
                alt: "ANYCALL Privacy Policy",
            },
        ],
    },
};

export default function Privacy() {
    return <PrivacyClient />;
}
