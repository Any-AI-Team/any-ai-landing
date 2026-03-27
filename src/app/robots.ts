import { MetadataRoute } from 'next';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.anyaith.com";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/'],
            },
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
        ],
        sitemap: `${APP_URL}/sitemap.xml`,
        host: APP_URL,
    };
}
