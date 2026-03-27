import { MetadataRoute } from 'next';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.anyaith.com";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // Search engines
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/api/'],
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                disallow: ['/api/'],
            },
            // AI Search crawlers — GEO (Generative Engine Optimization)
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
                disallow: ['/api/'],
            },
            {
                userAgent: 'GPTBot',
                allow: '/',
                disallow: ['/api/'],
            },
            {
                userAgent: 'Google-Extended',
                allow: '/',
                disallow: ['/api/'],
            },
            {
                userAgent: 'PerplexityBot',
                allow: '/',
                disallow: ['/api/'],
            },
            {
                userAgent: 'ClaudeBot',
                allow: '/',
                disallow: ['/api/'],
            },
            {
                userAgent: 'Applebot-Extended',
                allow: '/',
                disallow: ['/api/'],
            },
            // Social media crawlers
            {
                userAgent: 'Twitterbot',
                allow: '/',
            },
            {
                userAgent: 'facebookexternalhit',
                allow: '/',
            },
            {
                userAgent: 'LinkedInBot',
                allow: '/',
            },
            // Default — all others
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/'],
            },
        ],
        sitemap: `${APP_URL}/sitemap.xml`,
        host: APP_URL,
    };
}
