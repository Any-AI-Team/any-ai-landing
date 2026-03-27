import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "404 — หน้านี้ไม่พบ",
    description: "ไม่พบหน้าที่คุณต้องการ กรุณากลับไปหน้าหลักหรือดูหน้าอื่นๆ ของ ANYCALL",
    robots: { index: false, follow: true },
};

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-white px-4">
            <div className="text-center max-w-md">
                <h1 className="text-6xl md:text-8xl font-bold text-gray-200 mb-4">
                    404
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                    ไม่พบหน้าที่คุณต้องการ
                </h2>
                <p className="text-gray-600 mb-8">
                    หน้านี้อาจถูกย้ายหรือลบออกแล้ว ลองดูหน้าอื่นๆ ของเราแทน
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
                    <Link
                        href="/"
                        className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
                    >
                        กลับหน้าหลัก
                    </Link>
                    <Link
                        href="/contact"
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-medium hover:border-gray-400 transition-colors"
                    >
                        ติดต่อเรา
                    </Link>
                </div>

                {/* Internal links for SEO link equity */}
                <nav aria-label="Useful pages">
                    <p className="text-sm text-gray-500 mb-3">หน้าที่น่าสนใจ</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        <Link href="/use-cases" className="text-sm text-blue-600 hover:underline">
                            Use Cases
                        </Link>
                        <span className="text-gray-300">|</span>
                        <Link href="/blog" className="text-sm text-blue-600 hover:underline">
                            Blog
                        </Link>
                        <span className="text-gray-300">|</span>
                        <Link href="/#pricing" className="text-sm text-blue-600 hover:underline">
                            Pricing
                        </Link>
                        <span className="text-gray-300">|</span>
                        <Link href="/#faq" className="text-sm text-blue-600 hover:underline">
                            FAQ
                        </Link>
                    </div>
                </nav>
            </div>
        </main>
    );
}
