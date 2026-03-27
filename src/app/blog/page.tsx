import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, blogSlugs } from "./[slug]/blogData";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.anyaith.com";

export const metadata: Metadata = {
    title: "Blog — บทความเกี่ยวกับ AI Calling Agent",
    description:
        "บทความเกี่ยวกับ AI Calling Agent, เทคนิคการใช้ AI รับสายอัตโนมัติ, เปรียบเทียบ AI vs IVR, คู่มือตั้งค่า AI Agent สำหรับธุรกิจ SME ไทย",
    alternates: {
        canonical: `${APP_URL}/blog`,
    },
    openGraph: {
        title: "Blog — ANYCALL AI Calling Agent",
        description:
            "บทความเกี่ยวกับ AI Calling Agent เทคนิคการใช้ AI รับสายอัตโนมัติสำหรับธุรกิจ SME ไทย",
        url: `${APP_URL}/blog`,
        type: "website",
    },
};

export default function BlogIndex() {
    const posts = blogSlugs.map((slug) => blogPosts[slug]);
    // Sort by date descending
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <main className="min-h-screen bg-white pt-20 md:pt-24">
            <section className="py-16 md:py-24 px-4 sm:px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                        Blog
                    </h1>
                    <p className="text-base md:text-lg text-gray-600">
                        บทความเกี่ยวกับ AI Calling Agent, เทคนิคการใช้ AI รับสายอัตโนมัติ,
                        และเรื่องราวจาก ANYCALL
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-6">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="block p-6 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all group"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-full">
                                    {post.category}
                                </span>
                                <span className="text-xs text-gray-400">
                                    {post.readTime}
                                </span>
                            </div>
                            <h2 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                                {post.title}
                            </h2>
                            <p className="text-gray-600 text-sm">{post.excerpt}</p>
                            <div className="mt-3 flex items-center justify-between">
                                <time
                                    dateTime={post.date}
                                    className="text-xs text-gray-400"
                                >
                                    {new Date(post.date).toLocaleDateString("th-TH", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </time>
                                <span className="text-blue-600 text-sm font-medium">
                                    อ่านต่อ →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
