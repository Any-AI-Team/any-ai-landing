import { Providers } from "./providers";
import "./globals.css";
import { Navbar } from "@/components/landing/navbar";
import { Kanit } from "next/font/google";

const kanit = Kanit({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-kanit",
});

export const metadata = {
    title: {
        default: "ANYCALL - AI Calling Agent",
        template: "%s | ANYCALL",
    },
    description: "พลิกโฉมธุรกิจ SME ด้วย AI Calling Agent ที่ทำงานตลอด 24 ชั่วโมง",
    icons: {
        icon: "/favicon.png",
    },
    openGraph: {
        title: "ANYCALL - AI Calling Agent",
        description: "พลิกโฉมธุรกิจ SME ด้วย AI Calling Agent. สร้าง AI Agent ของคุณ โดยไม่ต้องเขียนโค้ด",
        url: "https://anycall.co",
        siteName: "ANYCALL",
        locale: "th_TH",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "ANYCALL - AI Calling Agent",
        description: "Transforming SMEs with AI Calling Agents",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={kanit.className}>
                <Providers>
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
