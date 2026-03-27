import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useCasesData, useCaseSlugs } from "./useCasesData";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.anyaith.com";

// Static generation for all use case pages
export function generateStaticParams() {
    return useCaseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const data = useCasesData[slug];
    if (!data) return {};

    return {
        title: data.metaTitle,
        description: data.metaDescription,
        alternates: {
            canonical: `${APP_URL}/use-cases/${slug}`,
        },
        openGraph: {
            title: data.metaTitle,
            description: data.metaDescription,
            url: `${APP_URL}/use-cases/${slug}`,
            type: "article",
            images: [
                {
                    url: "/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: `ANYCALL — ${data.title}`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: data.metaTitle,
            description: data.metaDescription,
        },
    };
}

export default async function UseCasePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const data = useCasesData[slug];
    if (!data) notFound();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: data.metaTitle,
        description: data.metaDescription,
        url: `${APP_URL}/use-cases/${slug}`,
        author: { "@id": `${APP_URL}/#organization` },
        publisher: { "@id": `${APP_URL}/#organization` },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${APP_URL}/use-cases/${slug}`,
        },
        breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "หน้าหลัก", item: APP_URL },
                { "@type": "ListItem", position: 2, name: "Use Cases", item: `${APP_URL}/use-cases` },
                { "@type": "ListItem", position: 3, name: data.title, item: `${APP_URL}/use-cases/${slug}` },
            ],
        },
    };

    const otherUseCases = useCaseSlugs.filter((s) => s !== slug);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="min-h-screen bg-white pt-20 md:pt-24">
                {/* Hero */}
                <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 md:py-24 px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-sm font-medium text-blue-400 mb-4 uppercase tracking-wide">
                            ANYCALL สำหรับ{data.title}
                        </p>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 whitespace-pre-line">
                            {data.heroTitle}
                        </h1>
                        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                            {data.heroSubtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
                            >
                                เริ่มใช้งานฟรี
                            </Link>
                            <Link
                                href="/#features"
                                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
                            >
                                ดูฟีเจอร์ทั้งหมด
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-12 md:py-16 bg-gray-50 px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                        {data.stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pain Points */}
                <section className="py-12 md:py-20 px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                            ปัญหาที่{data.title}ต้องเจอทุกวัน
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {data.painPoints.map((point, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 p-4 bg-red-50 rounded-xl"
                                >
                                    <span className="text-red-500 text-xl mt-0.5">✕</span>
                                    <p className="text-gray-700">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Solutions */}
                <section className="py-12 md:py-20 bg-gray-50 px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                            ANYCALL แก้ปัญหาให้{data.title}อย่างไร
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {data.solutions.map((solution, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 p-4 bg-green-50 rounded-xl"
                                >
                                    <span className="text-green-500 text-xl mt-0.5">✓</span>
                                    <p className="text-gray-700">{solution}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="py-12 md:py-20 px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                            ผลลัพธ์ที่ได้
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {data.benefits.map((benefit, i) => (
                                <div
                                    key={i}
                                    className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm"
                                >
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 md:py-24 bg-gradient-to-b from-blue-600 to-blue-700 text-white px-4 sm:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-xl md:text-3xl font-bold mb-4">
                            พร้อมให้ AI รับสาย{data.title}ของคุณหรือยัง?
                        </h2>
                        <p className="text-blue-100 mb-8">
                            เริ่มใช้งานฟรี ไม่ต้องใช้บัตรเครดิต ตั้งค่าเสร็จใน 5 นาที
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                        >
                            เริ่มใช้งานฟรี
                        </Link>
                    </div>
                </section>

                {/* Other Use Cases — Internal Linking */}
                <section className="py-12 md:py-16 px-4 sm:px-6 bg-gray-50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 text-center">
                            ANYCALL สำหรับธุรกิจอื่น
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {otherUseCases.map((s) => {
                                const other = useCasesData[s];
                                return (
                                    <Link
                                        key={s}
                                        href={`/use-cases/${s}`}
                                        className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-center"
                                    >
                                        <h3 className="font-semibold text-gray-900">
                                            {other.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">
                                            ดูรายละเอียด →
                                        </p>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
