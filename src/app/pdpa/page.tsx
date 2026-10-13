import type { Metadata } from "next";
import PdpaClient from "./PdpaClient";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.anyaith.com";
const OG_IMAGE_PATH = "/missed-call-illustration.png";

export const metadata: Metadata = {
    title: "PDPA Compliance",
    description:
        "How ANYCALL complies with Thailand's Personal Data Protection Act (PDPA), the legal basis for processing data, and the rights you have as a data subject.",
    alternates: {
        canonical: `${APP_URL}/pdpa`,
        languages: {
            "th-TH": `${APP_URL}/pdpa`,
        },
    },
    openGraph: {
        title: "PDPA Compliance | ANYCALL",
        description:
            "How ANYCALL complies with Thailand's Personal Data Protection Act (PDPA) and the rights you have as a data subject.",
        url: `${APP_URL}/pdpa`,
        type: "website",
        images: [
            {
                url: OG_IMAGE_PATH,
                width: 1200,
                height: 630,
                alt: "ANYCALL PDPA Compliance",
            },
        ],
    },
};

export default function Pdpa() {
    return <PdpaClient />;
}
