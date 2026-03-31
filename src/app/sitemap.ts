import { MetadataRoute } from "next";
import { useCaseSlugs } from "./use-cases/[slug]/useCasesData";
import { blogSlugs } from "./blog/[slug]/blogData";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.anyaith.com";

const SITE_LAST_MODIFIED = new Date("2026-03-27");

export default function sitemap(): MetadataRoute.Sitemap {
    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: APP_URL,
            lastModified: SITE_LAST_MODIFIED,
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${APP_URL}/contact`,
            lastModified: SITE_LAST_MODIFIED,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${APP_URL}/use-cases`,
            lastModified: SITE_LAST_MODIFIED,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${APP_URL}/blog`,
            lastModified: SITE_LAST_MODIFIED,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${APP_URL}/ai-call-center`,
            lastModified: SITE_LAST_MODIFIED,
            changeFrequency: "weekly",
            priority: 0.95,
        },
        {
            url: `${APP_URL}/ai-call-center-vs-ivr`,
            lastModified: SITE_LAST_MODIFIED,
            changeFrequency: "monthly",
            priority: 0.85,
        },
    ];

    // Use case pages
    const useCasePages: MetadataRoute.Sitemap = useCaseSlugs.map((slug) => ({
        url: `${APP_URL}/use-cases/${slug}`,
        lastModified: SITE_LAST_MODIFIED,
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    // Blog posts
    const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
        url: `${APP_URL}/blog/${slug}`,
        lastModified: SITE_LAST_MODIFIED,
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    // Section anchors on homepage
    const sectionAnchors: MetadataRoute.Sitemap = [
        { url: `${APP_URL}/#features`, lastModified: SITE_LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
        { url: `${APP_URL}/#use-cases`, lastModified: SITE_LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
        { url: `${APP_URL}/#faq`, lastModified: SITE_LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
        { url: `${APP_URL}/#security`, lastModified: SITE_LAST_MODIFIED, changeFrequency: "monthly", priority: 0.5 },
    ];

    return [...staticPages, ...useCasePages, ...blogPages, ...sectionAnchors];
}
