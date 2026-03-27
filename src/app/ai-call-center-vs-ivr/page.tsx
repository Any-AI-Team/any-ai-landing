import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.anyaith.com";

export const metadata: Metadata = {
    title: "AI Call Center vs IVR — เปรียบเทียบระบบรับสายอัตโนมัติ | ANYCALL",
    description:
        "เปรียบเทียบ AI Call Center กับ IVR (ระบบกดปุ่มเลือกเมนู) แบบละเอียด ข้อดี-ข้อเสีย ราคา ประสิทธิภาพ ความเหมาะสม ช่วยตัดสินใจเลือกระบบรับสายอัตโนมัติที่ดีที่สุดสำหรับธุรกิจไทย",
    alternates: {
        canonical: `${APP_URL}/ai-call-center-vs-ivr`,
    },
    openGraph: {
        title: "AI Call Center vs IVR — เปรียบเทียบระบบรับสายอัตโนมัติ",
        description: "เปรียบเทียบ AI Call Center กับ IVR ระบบไหนดีกว่าสำหรับธุรกิจไทย",
        url: `${APP_URL}/ai-call-center-vs-ivr`,
        type: "article",
    },
};

function ComparisonJsonLd() {
    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "AI Call Center vs IVR — เปรียบเทียบระบบรับสายอัตโนมัติสำหรับธุรกิจไทย",
            author: { "@type": "Organization", name: "ANYCALL" },
            publisher: { "@type": "Organization", name: "ANYCALL", logo: { "@type": "ImageObject", url: `${APP_URL}/favicon.png` } },
            datePublished: "2026-03-27",
            dateModified: "2026-03-27",
            mainEntityOfPage: `${APP_URL}/ai-call-center-vs-ivr`,
            inLanguage: "th-TH",
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "หน้าหลัก", item: APP_URL },
                { "@type": "ListItem", position: 2, name: "AI Call Center", item: `${APP_URL}/ai-call-center` },
                { "@type": "ListItem", position: 3, name: "AI Call Center vs IVR", item: `${APP_URL}/ai-call-center-vs-ivr` },
            ],
        },
    ];

    return (
        <>
            {schema.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
        </>
    );
}

export default function AiCallCenterVsIvrPage() {
    return (
        <>
            <ComparisonJsonLd />
            <article className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24">
                <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
                    <Link href="/" className="hover:text-primary">หน้าหลัก</Link>
                    <span className="mx-2">/</span>
                    <Link href="/ai-call-center" className="hover:text-primary">AI Call Center</Link>
                    <span className="mx-2">/</span>
                    <span className="text-foreground font-medium">AI Call Center vs IVR</span>
                </nav>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                    AI Call Center vs IVR — เปรียบเทียบระบบรับสายอัตโนมัติสำหรับธุรกิจไทย
                </h1>

                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                    ธุรกิจไทยหลายแห่งกำลังตัดสินใจระหว่าง <strong>AI Call Center</strong> กับ <strong>IVR (Interactive Voice Response)</strong> บทความนี้เปรียบเทียบทั้งสองระบบอย่างละเอียด ช่วยให้คุณเลือกได้ถูกต้อง
                </p>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-4">IVR คืออะไร?</h2>
                    <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                        <strong>IVR (Interactive Voice Response)</strong> คือระบบตอบรับอัตโนมัติแบบเมนูเสียงที่ใช้กันมานานหลายสิบปี ลูกค้าต้องฟังเมนูและกดปุ่มเลือก เช่น &quot;กด 1 สำหรับภาษาไทย กด 2 สำหรับภาษาอังกฤษ&quot; ระบบ IVR ไม่เข้าใจคำพูดและไม่สามารถดำเนินการใดๆ ได้นอกจากโอนสาย
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-4">AI Call Center คืออะไร?</h2>
                    <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                        <strong>AI Call Center</strong> คือระบบ Call Center ยุคใหม่ที่ใช้ AI สนทนาเป็นภาษาธรรมชาติ เข้าใจสิ่งที่ลูกค้าพูด และดำเนินการได้เอง เช่น จองนัดหมาย ตอบคำถาม ให้ข้อมูล และโอนสายเมื่อจำเป็น ทำงาน 24 ชั่วโมง ไม่มีคิวรอ
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-4">ตารางเปรียบเทียบ AI Call Center vs IVR</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-border rounded-lg text-sm">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border border-border px-4 py-3 text-left font-semibold">เกณฑ์</th>
                                    <th className="border border-border px-4 py-3 text-left font-semibold">IVR (ระบบเดิม)</th>
                                    <th className="border border-border px-4 py-3 text-left font-semibold">AI Call Center</th>
                                </tr>
                            </thead>
                            <tbody className="text-muted-foreground">
                                <tr><td className="border border-border px-4 py-3 font-medium">การสื่อสาร</td><td className="border border-border px-4 py-3">กดปุ่มเลือกเมนู</td><td className="border border-border px-4 py-3 text-green-600 font-medium">สนทนาภาษาธรรมชาติ</td></tr>
                                <tr><td className="border border-border px-4 py-3 font-medium">ความเข้าใจภาษา</td><td className="border border-border px-4 py-3">ไม่เข้าใจคำพูด</td><td className="border border-border px-4 py-3 text-green-600 font-medium">เข้าใจบริบท + เจตนา</td></tr>
                                <tr><td className="border border-border px-4 py-3 font-medium">การดำเนินการ</td><td className="border border-border px-4 py-3">โอนสายอย่างเดียว</td><td className="border border-border px-4 py-3 text-green-600 font-medium">จองนัด ตอบคำถาม โอนสาย</td></tr>
                                <tr><td className="border border-border px-4 py-3 font-medium">ภาษาไทย</td><td className="border border-border px-4 py-3">เมนูเสียงตายตัว</td><td className="border border-border px-4 py-3 text-green-600 font-medium">สนทนาไทยเป็นธรรมชาติ</td></tr>
                                <tr><td className="border border-border px-4 py-3 font-medium">เวลาตั้งค่า</td><td className="border border-border px-4 py-3">หลายสัปดาห์-เดือน</td><td className="border border-border px-4 py-3 text-green-600 font-medium">5 นาที</td></tr>
                                <tr><td className="border border-border px-4 py-3 font-medium">ค่าใช้จ่าย</td><td className="border border-border px-4 py-3">สูง (hardware + license)</td><td className="border border-border px-4 py-3 text-green-600 font-medium">เริ่มต้น 0 บาท</td></tr>
                                <tr><td className="border border-border px-4 py-3 font-medium">ประสบการณ์ลูกค้า</td><td className="border border-border px-4 py-3">น่าหงุดหงิด</td><td className="border border-border px-4 py-3 text-green-600 font-medium">เป็นธรรมชาติ สะดวก</td></tr>
                                <tr><td className="border border-border px-4 py-3 font-medium">ทำงาน 24/7</td><td className="border border-border px-4 py-3">ได้ (แต่แค่โอนสาย)</td><td className="border border-border px-4 py-3 text-green-600 font-medium">ได้ + ดำเนินการครบ</td></tr>
                                <tr><td className="border border-border px-4 py-3 font-medium">เรียนรู้จากข้อมูลธุรกิจ</td><td className="border border-border px-4 py-3">ไม่ได้</td><td className="border border-border px-4 py-3 text-green-600 font-medium">RAG อัปโหลด PDF</td></tr>
                                <tr><td className="border border-border px-4 py-3 font-medium">Analytics</td><td className="border border-border px-4 py-3">พื้นฐาน</td><td className="border border-border px-4 py-3 text-green-600 font-medium">Real-time Dashboard</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-4">เมื่อไหร่ควรเลือก AI Call Center?</h2>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>ธุรกิจที่ต้องรับสายจากลูกค้าหลายประเภท</li>
                        <li>ต้องการ<strong>จองนัดหมายอัตโนมัติ</strong>ผ่านโทรศัพท์</li>
                        <li>ต้องการ <strong>AI Call Center</strong> ที่พูดไทยได้เป็นธรรมชาติ</li>
                        <li>ไม่มี budget สำหรับ Call Center ขนาดใหญ่</li>
                        <li>ต้องการเริ่มใช้งานเร็ว (5 นาที ไม่ใช่ 5 สัปดาห์)</li>
                        <li>ต้องการรับสาย 24 ชั่วโมงแม้ไม่มีพนักงาน</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-4">เมื่อไหร่ IVR ยังเหมาะ?</h2>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>องค์กรขนาดใหญ่ที่มีระบบ IVR เดิมอยู่แล้วและลงทุนไปมาก</li>
                        <li>ต้องการเมนูเลือกง่ายๆ แค่ 2-3 ตัวเลือก (เลือกแผนก)</li>
                        <li>ไม่ต้องการให้ AI ดำเนินการอะไร แค่โอนสาย</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-4">สรุป: AI Call Center ดีกว่า IVR สำหรับ SME ไทย</h2>
                    <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                        สำหรับธุรกิจ SME ไทยที่ต้องการระบบรับสายที่ฉลาด ราคาประหยัด ตั้งค่าเร็ว และให้ประสบการณ์ลูกค้าที่ดี <strong>AI Call Center เป็นตัวเลือกที่ดีกว่า IVR</strong> อย่างชัดเจน โดยเฉพาะเมื่อมีโซลูชันอย่าง ANYCALL ที่ให้เริ่มต้นฟรีและตั้งค่าเสร็จภายใน 5 นาที
                    </p>
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
                        <h3 className="text-xl font-bold mb-2">ลองใช้ AI Call Center ฟรี</h3>
                        <p className="text-white/90 mb-6">ทดลองใช้ ANYCALL ฟรี 100 สาย/สัปดาห์ ไม่ต้องใส่บัตรเครดิต</p>
                        <Link
                            href="/contact"
                            className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors inline-block"
                        >
                            เริ่มต้นฟรี
                        </Link>
                    </div>
                </section>

                <section className="bg-muted/30 rounded-2xl p-6 border border-border/50">
                    <h2 className="text-lg font-semibold text-foreground mb-4">อ่านเพิ่มเติม</h2>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/ai-call-center" className="text-primary hover:underline">AI Call Center — คู่มือฉบับสมบูรณ์</Link></li>
                        <li><Link href="/blog/ai-call-center-คืออะไร" className="text-primary hover:underline">AI Call Center คืออะไร? ทำไมธุรกิจไทยควรเปลี่ยนมาใช้</Link></li>
                        <li><Link href="/blog/ai-vs-ivr-เปรียบเทียบ" className="text-primary hover:underline">AI Calling Agent vs IVR เปรียบเทียบ</Link></li>
                    </ul>
                </section>
            </article>
        </>
    );
}
