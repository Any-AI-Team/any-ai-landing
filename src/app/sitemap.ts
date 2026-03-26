import { MetadataRoute } from "next";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.anyaith.com";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: APP_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
            alternates: {
                languages: {
                    "th-TH": APP_URL,
                    "en-US": `${APP_URL}/en`,
                },
            },
        },
        {
            url: `${APP_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
            alternates: {
                languages: {
                    "th-TH": `${APP_URL}/contact`,
                    "en-US": `${APP_URL}/en/contact`,
                },
            },
        },
    ];
}
