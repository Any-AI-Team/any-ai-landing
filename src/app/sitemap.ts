import { MetadataRoute } from "next";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.anyaith.com";

// Use a fixed date for static pages to avoid regenerating sitemap on every request
const SITE_LAST_MODIFIED = new Date("2026-03-01");

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        // Home page — highest priority
        {
            url: APP_URL,
            lastModified: SITE_LAST_MODIFIED,
            changeFrequency: "weekly",
            priority: 1.0,
            alternates: {
                languages: {
                    "th": APP_URL,
                    "en": `${APP_URL}/en`,
                },
            },
        },
        // Contact page
        {
            url: `${APP_URL}/contact`,
            lastModified: SITE_LAST_MODIFIED,
            changeFrequency: "monthly",
            priority: 0.9,
            alternates: {
                languages: {
                    "th": `${APP_URL}/contact`,
                    "en": `${APP_URL}/en/contact`,
                },
            },
        },
        // Section anchors — important for Google to index specific sections
        {
            url: `${APP_URL}/#features`,
            lastModified: SITE_LAST_MODIFIED,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${APP_URL}/#pricing`,
            lastModified: SITE_LAST_MODIFIED,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${APP_URL}/#use-cases`,
            lastModified: SITE_LAST_MODIFIED,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${APP_URL}/#faq`,
            lastModified: SITE_LAST_MODIFIED,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${APP_URL}/#integration`,
            lastModified: SITE_LAST_MODIFIED,
            changeFrequency: "monthly",
            priority: 0.6,
        },
    ];
}
