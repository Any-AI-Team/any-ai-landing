import type { Metadata } from "next";
import TermsClient from "./TermsClient";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.anyaith.com";
const OG_IMAGE_PATH = "/missed-call-illustration.png";

export const metadata: Metadata = {
    title: "Terms of Service",
    description:
        "The terms that govern your access to and use of ANYCALL's AI calling agent platform, including acceptable use, billing, and liability.",
    alternates: {
        canonical: `${APP_URL}/terms`,
        languages: {
            "th-TH": `${APP_URL}/terms`,
        },
    },
    openGraph: {
        title: "Terms of Service | ANYCALL",
        description:
            "The terms that govern your access to and use of ANYCALL's AI calling agent platform.",
        url: `${APP_URL}/terms`,
        type: "website",
        images: [
            {
                url: OG_IMAGE_PATH,
                width: 1200,
                height: 630,
                alt: "ANYCALL Terms of Service",
            },
        ],
    },
};

export default function Terms() {
    return <TermsClient />;
}
