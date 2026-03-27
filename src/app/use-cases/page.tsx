import type { Metadata } from "next";
import Link from "next/link";
import { useCasesData, useCaseSlugs } from "./[slug]/useCasesData";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.anyaith.com";

export const metadata: Metadata = {
    title: "Use Cases — AI Calling Agent สำหรับทุกธุรกิจ",
    description:
        "ดูว่า ANYCALL AI Calling Agent ช่วยธุรกิจประเภทต่างๆ อย่างไร — คลินิกทันตกรรม ร้านอาหาร โรงแรม สปา คลินิกความงาม รับสายอัตโนมัติ จองนัดหมาย 24/7",
    alternates: {
        canonical: `${APP_URL}/use-cases`,
    },
    openGraph: {
        title: "Use Cases — ANYCALL AI Calling Agent สำหรับทุกธุรกิจ",
        description:
            "ดูว่า ANYCALL ช่วยธุรกิจประเภทต่างๆ รับสายอัตโนมัติ จองนัดหมาย 24/7 อย่างไร",
        url: `${APP_URL}/use-cases`,
        type: "website",
    },
};

export default function UseCasesIndex() {
    return (
        <main className="min-h-screen bg-white pt-20 md:pt-24">
            <section className="py-16 md:py-24 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                        AI Calling Agent สำหรับทุกธุรกิจ
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                        ไม่ว่าธุรกิจของคุณจะเป็นประเภทไหน ANYCALL ช่วยรับสายและจองนัดหมายอัตโนมัติได้ตลอด 24 ชั่วโมง
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {useCaseSlugs.map((slug) => {
                        const data = useCasesData[slug];
                        return (
                            <Link
                                key={slug}
                                href={`/use-cases/${slug}`}
                                className="p-6 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all group"
                            >
                                <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {data.title}
                                </h2>
                                <p className="text-gray-600 text-sm mb-4">
                                    {data.heroSubtitle}
                                </p>
                                <div className="flex gap-3 flex-wrap">
                                    {data.stats.slice(0, 3).map((stat) => (
                                        <span
                                            key={stat.label}
                                            className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                                        >
                                            {stat.value} {stat.label}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-blue-600 text-sm font-medium mt-4">
                                    ดูรายละเอียด →
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
