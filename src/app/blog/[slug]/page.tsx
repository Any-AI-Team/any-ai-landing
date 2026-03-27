import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, blogSlugs } from "./blogData";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.anyaith.com";

export function generateStaticParams() {
    return blogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts[slug];
    if (!post) return {};

    return {
        title: post.metaTitle,
        description: post.metaDescription,
        alternates: {
            canonical: `${APP_URL}/blog/${slug}`,
        },
        openGraph: {
            title: post.metaTitle,
            description: post.metaDescription,
            url: `${APP_URL}/blog/${slug}`,
            type: "article",
            publishedTime: post.date,
            authors: ["ANYCALL"],
            images: [
                {
                    url: "/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.metaTitle,
            description: post.metaDescription,
        },
    };
}

export default async function BlogPost({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = blogPosts[slug];
    if (!post) notFound();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.metaDescription,
        url: `${APP_URL}/blog/${slug}`,
        datePublished: post.date,
        dateModified: post.date,
        author: {
            "@type": "Organization",
            name: "ANYCALL",
            url: APP_URL,
        },
        publisher: { "@id": `${APP_URL}/#organization` },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${APP_URL}/blog/${slug}`,
        },
        inLanguage: "th-TH",
        breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "หน้าหลัก", item: APP_URL },
                { "@type": "ListItem", position: 2, name: "Blog", item: `${APP_URL}/blog` },
                { "@type": "ListItem", position: 3, name: post.title, item: `${APP_URL}/blog/${slug}` },
            ],
        },
    };

    const otherPosts = blogSlugs.filter((s) => s !== slug);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="min-h-screen bg-white pt-20 md:pt-24">
                <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
                    {/* Header */}
                    <header className="mb-8 md:mb-12">
                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                            <Link href="/blog" className="hover:text-blue-600 transition-colors">
                                Blog
                            </Link>
                            <span>/</span>
                            <span>{post.category}</span>
                        </div>
                        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <time dateTime={post.date}>
                                {new Date(post.date).toLocaleDateString("th-TH", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </time>
                            <span>อ่าน {post.readTime}</span>
                        </div>
                    </header>

                    {/* Content */}
                    <div
                        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-a:text-blue-600 prose-table:text-sm"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* CTA */}
                    <div className="mt-12 p-6 md:p-8 bg-blue-50 rounded-2xl text-center">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                            พร้อมลองใช้ AI Calling Agent แล้วหรือยัง?
                        </h2>
                        <p className="text-gray-600 mb-6">
                            เริ่มใช้งานฟรี ตั้งค่าเสร็จใน 5 นาที ไม่ต้องใช้บัตรเครดิต
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
                        >
                            เริ่มใช้งานฟรี
                        </Link>
                    </div>
                </article>

                {/* Related Posts */}
                {otherPosts.length > 0 && (
                    <section className="bg-gray-50 py-12 md:py-16 px-4 sm:px-6">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6">
                                บทความอื่นๆ
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {otherPosts.map((s) => {
                                    const other = blogPosts[s];
                                    return (
                                        <Link
                                            key={s}
                                            href={`/blog/${s}`}
                                            className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
                                        >
                                            <span className="text-xs text-blue-600 font-medium">
                                                {other.category}
                                            </span>
                                            <h3 className="font-semibold text-gray-900 mt-1 line-clamp-2">
                                                {other.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                                                {other.excerpt}
                                            </p>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </>
    );
}
