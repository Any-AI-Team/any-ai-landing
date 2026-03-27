import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.anyaith.com";

export const metadata: Metadata = {
    title: "AI Call Center — ระบบ AI รับสาย-โทรออกอัตโนมัติ 24/7 | ANYCALL",
    description:
        "AI Call Center คือระบบ AI รับสายและโทรออกอัตโนมัติที่ทำงาน 24 ชั่วโมง แทนที่ Call Center แบบเดิม ลดต้นทุน 80% ไม่พลาดทุกสาย รองรับภาษาไทย-อังกฤษ เหมาะสำหรับ SME คลินิก ร้านอาหาร โรงแรม",
    alternates: {
        canonical: `${APP_URL}/ai-call-center`,
    },
    openGraph: {
        title: "AI Call Center — ระบบ AI รับสาย-โทรออกอัตโนมัติ 24/7",
        description:
            "AI Call Center สำหรับธุรกิจไทย ระบบ AI รับสาย โทรออก จองนัดหมาย โอนสาย ทำงานอัตโนมัติ 24 ชั่วโมง ลดต้นทุน Call Center 80%",
        url: `${APP_URL}/ai-call-center`,
        type: "article",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "ANYCALL AI Call Center สำหรับธุรกิจไทย",
            },
        ],
    },
};

function AiCallCenterJsonLd() {
    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "AI Call Center — ระบบ AI รับสาย-โทรออกอัตโนมัติ 24/7 สำหรับธุรกิจไทย",
            description:
                "คู่มือฉบับสมบูรณ์เกี่ยวกับ AI Call Center ระบบ AI รับสายและโทรออกอัตโนมัติ เปรียบเทียบกับ Call Center แบบเดิม ข้อดี วิธีเลือก และการเริ่มต้นใช้งาน",
            author: { "@type": "Organization", name: "ANYCALL" },
            publisher: { "@type": "Organization", name: "ANYCALL", logo: { "@type": "ImageObject", url: `${APP_URL}/favicon.png` } },
            datePublished: "2026-03-27",
            dateModified: "2026-03-27",
            mainEntityOfPage: `${APP_URL}/ai-call-center`,
            image: `${APP_URL}/og-image.png`,
            inLanguage: "th-TH",
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "หน้าหลัก", item: APP_URL },
                { "@type": "ListItem", position: 2, name: "AI Call Center", item: `${APP_URL}/ai-call-center` },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "AI Call Center คืออะไร?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "AI Call Center คือระบบ Call Center ที่ใช้ปัญญาประดิษฐ์ (AI) ในการรับสายและโทรออกอัตโนมัติ แทนที่พนักงาน Call Center แบบเดิม AI สามารถสนทนาเป็นภาษาธรรมชาติ เข้าใจบริบท จองนัดหมาย ตอบคำถาม และโอนสายได้เอง ทำงาน 24 ชั่วโมง ไม่มีวันหยุด",
                    },
                },
                {
                    "@type": "Question",
                    name: "AI Call Center ต่างจาก Call Center แบบเดิมอย่างไร?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Call Center แบบเดิมใช้พนักงานจำนวนมากรับสาย มีค่าใช้จ่ายสูง และให้บริการได้เฉพาะเวลาทำงาน AI Call Center ใช้ AI ทำงานแทน ลดต้นทุนได้ 60-80% ทำงาน 24/7 ไม่มีคิวรอ ไม่มีวันลา รองรับหลายสายพร้อมกัน",
                    },
                },
                {
                    "@type": "Question",
                    name: "AI Call Center เหมาะกับธุรกิจประเภทไหน?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "AI Call Center เหมาะกับทุกธุรกิจที่รับสายโทรศัพท์จากลูกค้า โดยเฉพาะ คลินิกทันตกรรม คลินิกความงาม โรงพยาบาล สปา ร้านอาหาร โรงแรม บริษัทท่องเที่ยว สถาบันการศึกษา ร้านค้าปลีก ธุรกิจอสังหาริมทรัพย์ และ SME ทุกประเภท",
                    },
                },
                {
                    "@type": "Question",
                    name: "AI Call Center ราคาเท่าไหร่?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "ANYCALL AI Call Center เริ่มต้นฟรี 0 บาท ทดลองใช้ 100 สาย/สัปดาห์ แผน Pro 990 บาท/เดือน ไม่จำกัดการใช้งาน และแผน Enterprise สำหรับองค์กร ถูกกว่า Call Center แบบเดิม 60-80%",
                    },
                },
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

export default function AiCallCenterPage() {
    return (
        <>
            <AiCallCenterJsonLd />
            <article className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
                    <Link href="/" className="hover:text-primary">หน้าหลัก</Link>
                    <span className="mx-2">/</span>
                    <span className="text-foreground font-medium">AI Call Center</span>
                </nav>

                {/* H1 — Primary keyword */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                    AI Call Center — ระบบ AI รับสาย-โทรออกอัตโนมัติ 24/7 สำหรับธุรกิจไทย
                </h1>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    <strong>AI Call Center</strong> คือเทคโนโลยีที่กำลังเปลี่ยนแปลงวงการ Call Center ทั้งหมด ธุรกิจไทยสามารถใช้ AI แทนพนักงานรับสายได้ตลอด 24 ชั่วโมง ลดต้นทุนสูงสุด 80% โดยไม่พลาดแม้แต่สายเดียว ในบทความนี้คุณจะได้เรียนรู้ทุกอย่างเกี่ยวกับ AI Call Center ตั้งแต่คืออะไร ทำงานอย่างไร เหมาะกับธุรกิจไหน ไปจนถึงวิธีเริ่มต้นใช้งาน
                </p>

                <div className="bg-blue-50 dark:bg-blue-950/30 rounded-2xl p-6 mb-12 border border-blue-200 dark:border-blue-800">
                    <p className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">สารบัญ</p>
                    <ol className="text-sm space-y-1 text-blue-700 dark:text-blue-300 list-decimal list-inside">
                        <li><a href="#ai-call-center-คืออะไร" className="hover:underline">AI Call Center คืออะไร?</a></li>
                        <li><a href="#ทำงานอย่างไร" className="hover:underline">AI Call Center ทำงานอย่างไร?</a></li>
                        <li><a href="#เปรียบเทียบ" className="hover:underline">เปรียบเทียบ AI Call Center vs Call Center แบบเดิม</a></li>
                        <li><a href="#ข้อดี" className="hover:underline">ข้อดีของ AI Call Center สำหรับธุรกิจ</a></li>
                        <li><a href="#ธุรกิจที่เหมาะ" className="hover:underline">ธุรกิจที่เหมาะกับ AI Call Center</a></li>
                        <li><a href="#คุณสมบัติ" className="hover:underline">คุณสมบัติที่ต้องมีใน AI Call Center</a></li>
                        <li><a href="#วิธีเลือก" className="hover:underline">วิธีเลือก AI Call Center ที่ดี</a></li>
                        <li><a href="#เริ่มต้น" className="hover:underline">เริ่มต้นใช้งาน AI Call Center กับ ANYCALL</a></li>
                        <li><a href="#faq" className="hover:underline">คำถามที่พบบ่อย</a></li>
                    </ol>
                </div>

                {/* Section 1 */}
                <section id="ai-call-center-คืออะไร" className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">AI Call Center คืออะไร?</h2>
                    <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                        <strong>AI Call Center</strong> คือระบบ Call Center ที่ใช้เทคโนโลยีปัญญาประดิษฐ์ (Artificial Intelligence) ในการจัดการสายโทรศัพท์แทนพนักงาน แทนที่จะจ้างทีม Call Center หลายสิบคนนั่งรับสาย AI จะรับสายแทนทั้งหมด สนทนาเป็นภาษาธรรมชาติ เข้าใจสิ่งที่ลูกค้าพูด และดำเนินการตามคำขอได้ทันที
                    </p>
                    <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                        AI Call Center ใช้เทคโนโลยีหลัก 3 อย่างทำงานร่วมกัน:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                        <li><strong>Speech-to-Text (STT)</strong> — แปลงเสียงพูดของลูกค้าเป็นข้อความ</li>
                        <li><strong>Large Language Model (LLM)</strong> — ประมวลผลภาษาธรรมชาติ เข้าใจเจตนา และสร้างคำตอบ</li>
                        <li><strong>Text-to-Speech (TTS)</strong> — แปลงคำตอบเป็นเสียงพูดตอบกลับลูกค้า</li>
                    </ul>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        ต่างจากระบบ IVR (กด 1, กด 2) แบบเดิมที่แข็งทื่อ AI Call Center สนทนาได้เหมือนคนจริง เข้าใจบริบท จำเรื่องที่คุยก่อนหน้า และตัดสินใจดำเนินการได้เอง เช่น จองนัดหมาย ตรวจสอบสถานะ หรือโอนสายให้พนักงานเมื่อจำเป็น
                    </p>
                </section>

                {/* Section 2 */}
                <section id="ทำงานอย่างไร" className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">AI Call Center ทำงานอย่างไร?</h2>
                    <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                        เมื่อลูกค้าโทรเข้ามา AI Call Center จะทำงานตามขั้นตอนนี้:
                    </p>
                    <ol className="list-decimal list-inside space-y-3 text-muted-foreground mb-6">
                        <li><strong>รับสายทันที</strong> — ไม่มีคิวรอ AI พร้อมรับสายภายใน 1 วินาที</li>
                        <li><strong>ทักทายลูกค้า</strong> — AI กล่าวสวัสดีและถามว่าต้องการอะไร</li>
                        <li><strong>รับฟังและเข้าใจ</strong> — STT แปลงเสียงเป็นข้อความ LLM เข้าใจความต้องการ</li>
                        <li><strong>ดำเนินการ</strong> — จองนัดหมาย ตอบคำถาม ให้ข้อมูล หรือตรวจสอบระบบ</li>
                        <li><strong>ตอบกลับ</strong> — TTS สร้างเสียงพูดตอบลูกค้าเป็นภาษาธรรมชาติ</li>
                        <li><strong>โอนสาย (ถ้าจำเป็น)</strong> — เมื่อ AI ตัดสินใจว่าควรให้คนดูแล จะโอนสายพร้อมสรุปบทสนทนา</li>
                        <li><strong>บันทึกข้อมูล</strong> — ทุกสายถูกบันทึกเป็น transcript พร้อมสรุปผลใน Dashboard</li>
                    </ol>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        ทั้งหมดนี้เกิดขึ้นแบบ <strong>real-time</strong> ภายในเวลาไม่ถึง 1 วินาทีต่อรอบ ลูกค้าจะรู้สึกเหมือนคุยกับคนจริง ไม่ใช่เครื่องจักร
                    </p>
                </section>

                {/* Section 3 — Comparison */}
                <section id="เปรียบเทียบ" className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">เปรียบเทียบ AI Call Center vs Call Center แบบเดิม</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-border rounded-lg text-sm">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border border-border px-4 py-3 text-left font-semibold">เกณฑ์เปรียบเทียบ</th>
                                    <th className="border border-border px-4 py-3 text-left font-semibold">Call Center แบบเดิม</th>
                                    <th className="border border-border px-4 py-3 text-left font-semibold">AI Call Center (ANYCALL)</th>
                                </tr>
                            </thead>
                            <tbody className="text-muted-foreground">
                                <tr><td className="border border-border px-4 py-3">เวลาทำงาน</td><td className="border border-border px-4 py-3">เฉพาะเวลาทำการ</td><td className="border border-border px-4 py-3 font-medium text-green-600">24 ชั่วโมง 7 วัน</td></tr>
                                <tr><td className="border border-border px-4 py-3">ต้นทุน/เดือน</td><td className="border border-border px-4 py-3">50,000-200,000+ บาท</td><td className="border border-border px-4 py-3 font-medium text-green-600">0-990 บาท</td></tr>
                                <tr><td className="border border-border px-4 py-3">คิวรอสาย</td><td className="border border-border px-4 py-3">รอนาน 5-30 นาที</td><td className="border border-border px-4 py-3 font-medium text-green-600">ไม่มีคิว รับทันที</td></tr>
                                <tr><td className="border border-border px-4 py-3">รับหลายสายพร้อมกัน</td><td className="border border-border px-4 py-3">จำกัดตามจำนวนคน</td><td className="border border-border px-4 py-3 font-medium text-green-600">ไม่จำกัด</td></tr>
                                <tr><td className="border border-border px-4 py-3">ภาษา</td><td className="border border-border px-4 py-3">ตามทักษะพนักงาน</td><td className="border border-border px-4 py-3 font-medium text-green-600">ไทย + อังกฤษ เสมอ</td></tr>
                                <tr><td className="border border-border px-4 py-3">คุณภาพสม่ำเสมอ</td><td className="border border-border px-4 py-3">ขึ้นอยู่กับอารมณ์พนักงาน</td><td className="border border-border px-4 py-3 font-medium text-green-600">สม่ำเสมอทุกสาย</td></tr>
                                <tr><td className="border border-border px-4 py-3">เวลาตั้งค่า</td><td className="border border-border px-4 py-3">หลายสัปดาห์-เดือน</td><td className="border border-border px-4 py-3 font-medium text-green-600">5 นาที</td></tr>
                                <tr><td className="border border-border px-4 py-3">จองนัดอัตโนมัติ</td><td className="border border-border px-4 py-3">ทำมือ</td><td className="border border-border px-4 py-3 font-medium text-green-600">อัตโนมัติ 100%</td></tr>
                                <tr><td className="border border-border px-4 py-3">รายงาน & Analytics</td><td className="border border-border px-4 py-3">ต้องทำเอง</td><td className="border border-border px-4 py-3 font-medium text-green-600">Real-time Dashboard</td></tr>
                                <tr><td className="border border-border px-4 py-3">โอนสายให้คน</td><td className="border border-border px-4 py-3">ไม่ต้อง (คนรับอยู่แล้ว)</td><td className="border border-border px-4 py-3 font-medium text-green-600">โอนได้ทันทีเมื่อจำเป็น</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                        อ่านเพิ่มเติม: <Link href="/ai-call-center-vs-ivr" className="text-primary hover:underline">เปรียบเทียบ AI Call Center vs IVR แบบละเอียด</Link>
                    </p>
                </section>

                {/* Section 4 — Benefits */}
                <section id="ข้อดี" className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">ข้อดีของ AI Call Center สำหรับธุรกิจ</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: "ลดต้นทุน 60-80%", desc: "ไม่ต้องจ้างพนักงานรับสายหลายคน AI ทำงานแทนทั้งหมด ค่าใช้จ่ายเริ่มต้น 0 บาท" },
                            { title: "ไม่พลาดทุกสาย", desc: "AI รับสายทันทีทุกครั้ง ไม่มีคิวรอ ไม่มีสายหลุด จากสถิติ 62% ของลูกค้าจะไม่โทรกลับหากสายแรกไม่มีคนรับ" },
                            { title: "ทำงาน 24/7", desc: "ไม่มีวันหยุด ไม่มีวันลา ลูกค้าโทรมาตี 3 ก็รับสาย ไม่พลาดโอกาสทางธุรกิจ" },
                            { title: "จองนัดหมายอัตโนมัติ", desc: "AI เชื่อมต่อปฏิทินธุรกิจ จองนัดให้ลูกค้าโดยอัตโนมัติ ไม่ต้องมีคนจัดการ" },
                            { title: "รองรับหลายภาษา", desc: "พูดไทยและอังกฤษได้เป็นธรรมชาติ ไม่ต้องจ้างพนักงานแยกตามภาษา" },
                            { title: "คุณภาพสม่ำเสมอ", desc: "ทุกสายได้รับบริการเหมือนกัน ไม่มีวันที่ AI อารมณ์ไม่ดีหรือเหนื่อย" },
                            { title: "ข้อมูล Analytics แบบ Real-time", desc: "Dashboard แสดงสถิติสาย จำนวนนัดหมาย ระยะเวลาสนทนา ช่วยตัดสินใจทางธุรกิจ" },
                            { title: "ตั้งค่าง่ายใน 5 นาที", desc: "ไม่ต้องเขียนโค้ด ไม่ต้องติดตั้ง hardware เริ่มใช้งานได้ทันทีผ่านเว็บ" },
                        ].map((item) => (
                            <div key={item.title} className="bg-muted/30 rounded-xl p-5 border border-border/50">
                                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 5 — Suitable businesses */}
                <section id="ธุรกิจที่เหมาะ" className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">ธุรกิจที่เหมาะกับ AI Call Center</h2>
                    <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                        AI Call Center เหมาะกับทุกธุรกิจที่มีลูกค้าโทรเข้ามา โดยเฉพาะธุรกิจเหล่านี้ที่จะได้ประโยชน์สูงสุด:
                    </p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            { name: "คลินิกทันตกรรม", desc: "รับนัด ตอบคำถามเรื่องบริการ ยืนยันนัดหมาย", link: "/use-cases/dental-clinic" },
                            { name: "ร้านอาหาร", desc: "จองโต๊ะ ตอบเมนู รับออเดอร์ delivery", link: "/use-cases/restaurant" },
                            { name: "โรงแรม & รีสอร์ท", desc: "จองห้อง ตอบราคา อำนวยความสะดวกแขก", link: "/use-cases/hotel" },
                            { name: "สปา & ความงาม", desc: "จองคิว ให้ข้อมูลโปรโมชั่น ยืนยันนัด", link: "/use-cases/spa-beauty" },
                            { name: "คลินิกความงาม", desc: "ปรึกษาเบื้องต้น นัดหมอ ติดตามผลการรักษา" },
                            { name: "สถาบันการศึกษา", desc: "ตอบข้อมูลหลักสูตร รับสมัคร นัดเยี่ยมชม" },
                            { name: "บริษัทประกัน", desc: "ตอบสอบถาม เช็คสิทธิ์ นัดพบตัวแทน" },
                            { name: "อสังหาริมทรัพย์", desc: "ให้ข้อมูลโครงการ นัดดูห้อง ติดตามผล" },
                            { name: "SME ทุกประเภท", desc: "รับสายลูกค้า ตอบคำถาม ลดภาระพนักงาน" },
                        ].map((biz) => (
                            <div key={biz.name} className="bg-card rounded-xl p-4 border border-border/30 shadow-sm">
                                <h3 className="font-semibold text-foreground mb-1 text-sm">{biz.name}</h3>
                                <p className="text-xs text-muted-foreground mb-2">{biz.desc}</p>
                                {biz.link && (
                                    <Link href={biz.link} className="text-xs text-primary hover:underline">ดูรายละเอียด →</Link>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 6 — Features */}
                <section id="คุณสมบัติ" className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">คุณสมบัติที่ต้องมีใน AI Call Center ที่ดี</h2>
                    <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                        ไม่ใช่ทุก AI Call Center จะเหมือนกัน เมื่อเลือกระบบ AI Call Center สำหรับธุรกิจ ควรพิจารณาคุณสมบัติเหล่านี้:
                    </p>
                    <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                        <li><strong>รองรับภาษาไทย</strong> — AI ต้องเข้าใจสำเนียงไทยและพูดไทยได้เป็นธรรมชาติ ไม่ใช่แค่แปลจากอังกฤษ</li>
                        <li><strong>สนทนาเป็นธรรมชาติ (NLP)</strong> — ลูกค้าพูดอะไรก็เข้าใจ ไม่ใช่ให้กดปุ่มเลือกเมนู</li>
                        <li><strong>จองนัดหมายอัตโนมัติ</strong> — เชื่อมต่อปฏิทินธุรกิจ จองนัดได้เองโดยไม่ต้องมีคนช่วย</li>
                        <li><strong>โอนสายให้คนได้</strong> — เมื่อ AI จัดการไม่ได้ ต้องโอนสายให้พนักงานได้ทันทีพร้อมสรุปบทสนทนา</li>
                        <li><strong>เรียนรู้จากเอกสารธุรกิจ (RAG)</strong> — อัปโหลด PDF ข้อมูลธุรกิจให้ AI ตอบคำถามได้แม่นยำ</li>
                        <li><strong>Dashboard & Analytics</strong> — ดูสถิติสายทั้งหมด transcript บทสนทนา และ KPIs แบบ real-time</li>
                        <li><strong>เชื่อมต่อ CRM</strong> — ข้อมูลลูกค้าและนัดหมายซิงค์กับ CRM ที่ใช้อยู่</li>
                        <li><strong>ไม่ต้องเขียนโค้ด</strong> — ตั้งค่าผ่านเว็บ ไม่ต้องมีทีม IT</li>
                    </ol>
                </section>

                {/* Section 7 — How to choose */}
                <section id="วิธีเลือก" className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">วิธีเลือก AI Call Center ที่ดีสำหรับธุรกิจคุณ</h2>
                    <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                        ตลาด AI Call Center ในประเทศไทยเติบโตอย่างรวดเร็ว มีหลายผู้ให้บริการ วิธีเลือกที่ดีที่สุดคือพิจารณาจาก:
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
                        <li><strong>ทดลองใช้ฟรีได้หรือไม่?</strong> — ผู้ให้บริการที่มั่นใจในคุณภาพจะให้ทดลองใช้ฟรี ANYCALL ให้ทดลอง 100 สาย/สัปดาห์ ฟรี ไม่ต้องใส่บัตรเครดิต</li>
                        <li><strong>รองรับภาษาไทยจริงหรือไม่?</strong> — หลายระบบจากต่างประเทศไม่เข้าใจภาษาไทย ANYCALL สร้างมาเพื่อธุรกิจไทยโดยเฉพาะ</li>
                        <li><strong>ตั้งค่าง่ายแค่ไหน?</strong> — ควรตั้งค่าเสร็จภายในไม่กี่นาที ไม่ใช่หลายสัปดาห์</li>
                        <li><strong>มี support ภาษาไทยไหม?</strong> — เมื่อมีปัญหา ต้องมีทีม support ที่พูดไทยช่วยเหลือ</li>
                        <li><strong>ราคาโปร่งใสไหม?</strong> — ไม่มีค่าใช้จ่ายซ่อน ไม่มีค่า setup fee</li>
                    </ul>
                </section>

                {/* Section 8 — Getting started with ANYCALL */}
                <section id="เริ่มต้น" className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">เริ่มต้นใช้งาน AI Call Center กับ ANYCALL</h2>
                    <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                        <strong>ANYCALL</strong> คือ AI Call Center ที่สร้างมาเพื่อธุรกิจไทยโดยเฉพาะ ใช้เทคโนโลยี AI ล่าสุดรวมถึง Gemini 2.0, Google Chirp3-HD และ LiveKit ในการสร้างประสบการณ์ AI Call Center ที่ดีที่สุดสำหรับลูกค้าของคุณ
                    </p>
                    <div className="space-y-4 mb-8">
                        {[
                            { step: "1", title: "สมัครฟรี", desc: "สร้างบัญชี ANYCALL ที่ app.anyaith.com ใช้ Google Login หรืออีเมล ไม่ต้องใส่บัตรเครดิต" },
                            { step: "2", title: "ตั้งค่า AI Agent", desc: "กำหนดข้อมูลธุรกิจ เลือกเสียง ตั้งบริการที่รับจอง ใช้เวลาไม่ถึง 5 นาที" },
                            { step: "3", title: "เชื่อมต่อเบอร์โทร", desc: "เลือกเบอร์จากระบบหรือเชื่อมต่อ SIP Trunk ของคุณ AI เริ่มรับสายทันที" },
                            { step: "4", title: "ทดสอบ & ใช้งานจริง", desc: "โทรทดสอบ ปรับแต่งจนพอใจ แล้วเปิดใช้งาน AI Call Center ของคุณ" },
                        ].map((item) => (
                            <div key={item.step} className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <span className="font-bold text-primary">{item.step}</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
                        <h3 className="text-xl font-bold mb-2">พร้อมเปลี่ยนธุรกิจด้วย AI Call Center?</h3>
                        <p className="text-white/90 mb-6">เริ่มต้นฟรี ไม่ต้องใส่บัตรเครดิต ตั้งค่าเสร็จใน 5 นาที</p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link
                                href="/contact"
                                className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
                            >
                                ทดลองใช้ฟรี
                            </Link>
                            <Link
                                href="/#pricing"
                                className="border border-white/50 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
                            >
                                ดูราคา
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Section 9 — FAQ */}
                <section id="faq" className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">คำถามที่พบบ่อยเกี่ยวกับ AI Call Center</h2>
                    <div className="space-y-6">
                        {[
                            { q: "AI Call Center คืออะไร?", a: "AI Call Center คือระบบ Call Center ที่ใช้ AI รับสายและโทรออกอัตโนมัติแทนพนักงาน สนทนาเป็นภาษาธรรมชาติ เข้าใจบริบท และดำเนินการได้เอง เช่น จองนัดหมาย ตอบคำถาม โอนสาย ทำงาน 24 ชั่วโมง" },
                            { q: "AI Call Center ต่างจาก Call Center แบบเดิมอย่างไร?", a: "Call Center แบบเดิมใช้คนรับสาย ค่าใช้จ่ายสูง ทำงานเฉพาะเวลาทำการ AI Call Center ใช้ AI ทำงานแทน ลดต้นทุน 60-80% ทำงาน 24/7 ไม่มีคิวรอ รับหลายสายพร้อมกันได้" },
                            { q: "AI Call Center เหมาะกับธุรกิจขนาดเล็กไหม?", a: "เหมาะมาก AI Call Center ช่วยให้ SME มีระบบรับสายระดับมืออาชีพ โดยไม่ต้องจ้างพนักงาน Call Center ANYCALL เริ่มต้นฟรี เหมาะสำหรับธุรกิจทุกขนาด" },
                            { q: "ตั้งค่า AI Call Center ใช้เวลานานไหม?", a: "กับ ANYCALL ใช้เวลาเพียง 5 นาที ไม่ต้องเขียนโค้ด ไม่ต้องติดตั้ง hardware เริ่มใช้งานได้ทันทีผ่านเว็บ" },
                            { q: "AI Call Center รองรับภาษาไทยไหม?", a: "ANYCALL รองรับภาษาไทยและอังกฤษ AI เข้าใจสำเนียงไทยและพูดไทยได้เป็นธรรมชาติ สร้างมาเพื่อธุรกิจไทยโดยเฉพาะ" },
                            { q: "AI Call Center ราคาเท่าไหร่?", a: "ANYCALL AI Call Center เริ่มต้น 0 บาท ฟรี 100 สาย/สัปดาห์ แผน Pro 990 บาท/เดือน ไม่จำกัดการใช้งาน ถูกกว่าจ้าง Call Center แบบเดิมหลายเท่า" },
                        ].map((item) => (
                            <div key={item.q} className="border-b border-border/50 pb-4">
                                <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                                <p className="text-sm text-muted-foreground">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Internal links for SEO */}
                <section className="bg-muted/30 rounded-2xl p-6 border border-border/50">
                    <h2 className="text-lg font-semibold text-foreground mb-4">บทความที่เกี่ยวข้อง</h2>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/blog/ai-calling-agent-คืออะไร" className="text-primary hover:underline">AI Calling Agent คืออะไร? ทำไมธุรกิจ SME ต้องมี</Link></li>
                        <li><Link href="/blog/ai-vs-ivr-เปรียบเทียบ" className="text-primary hover:underline">เปรียบเทียบ AI Calling Agent vs IVR ระบบไหนดีกว่า?</Link></li>
                        <li><Link href="/ai-call-center-vs-ivr" className="text-primary hover:underline">เปรียบเทียบ AI Call Center vs ระบบ IVR แบบละเอียด</Link></li>
                        <li><Link href="/blog/ai-call-center-คืออะไร" className="text-primary hover:underline">AI Call Center คืออะไร? ทำไมธุรกิจไทยควรเปลี่ยนมาใช้</Link></li>
                        <li><Link href="/blog/ทำไมธุรกิจไทยต้องใช้-ai-call-center" className="text-primary hover:underline">ทำไมธุรกิจไทยต้องใช้ AI Call Center ใน 2026</Link></li>
                        <li><Link href="/use-cases/dental-clinic" className="text-primary hover:underline">AI Call Center สำหรับคลินิกทันตกรรม</Link></li>
                        <li><Link href="/use-cases/restaurant" className="text-primary hover:underline">AI Call Center สำหรับร้านอาหาร</Link></li>
                    </ul>
                </section>
            </article>
        </>
    );
}
