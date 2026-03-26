const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.anyaith.com";

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${APP_URL}/#organization`,
    name: "ANYCALL",
    url: APP_URL,
    logo: {
        "@type": "ImageObject",
        url: `${APP_URL}/favicon.png`,
        width: 512,
        height: 512,
    },
    sameAs: [
        "https://www.facebook.com/anycall.ai",
        "https://www.linkedin.com/company/anycall-ai",
    ],
    contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: ["Thai", "English"],
        url: `${APP_URL}/contact`,
    },
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${APP_URL}/#website`,
    url: APP_URL,
    name: "ANYCALL",
    description: "AI Calling Agent แพลตฟอร์มสำหรับธุรกิจ SME ไทย",
    publisher: { "@id": `${APP_URL}/#organization` },
    potentialAction: {
        "@type": "SearchAction",
        target: {
            "@type": "EntryPoint",
            urlTemplate: `${APP_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
    },
    inLanguage: ["th-TH", "en-US"],
};

const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${APP_URL}/#software`,
    name: "ANYCALL - AI Calling Agent",
    url: APP_URL,
    description:
        "แพลตฟอร์ม AI Calling Agent รับสาย-โทรออกอัตโนมัติ 24 ชั่วโมง สำหรับธุรกิจ SME ไม่ต้องเขียนโค้ด",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "THB",
        description: "ทดลองใช้ฟรี",
    },
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "120",
        bestRating: "5",
        worstRating: "1",
    },
    featureList: [
        "รับสายอัตโนมัติ 24/7",
        "รองรับภาษาไทยและอังกฤษ",
        "ไม่ต้องเขียนโค้ด",
        "เชื่อมต่อ CRM ได้ทันที",
        "AI จองนัดหมายอัตโนมัติ",
    ],
    publisher: { "@id": `${APP_URL}/#organization` },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "ANYCALL คืออะไร?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "ANYCALL คือแพลตฟอร์ม AI AGENT CALL CENTER ที่ทำงานตลอด 24 ชั่วโมง ช่วยจัดการสายเข้าและโทรออกด้วยความเข้าใจภาษาธรรมชาติ ช่วยให้ธุรกิจของคุณทำงานอัตโนมัติโดยไม่พลาดทุกโอกาสทางธุรกิจ",
            },
        },
        {
            "@type": "Question",
            name: "ต้องมีทักษะการเขียนโปรแกรมไหม?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "ไม่จำเป็นเลย ANYCALL ถูกสร้างมาให้ใช้งานง่าย คุณสามารถตั้งค่า AI Agent ผ่านอินเทอร์เฟซที่เข้าใจง่าย โดยไม่ต้องเขียนโค้ด เพียงกำหนดบริบททางธุรกิจของคุณแล้วให้ AI จัดการส่วนที่เหลือ",
            },
        },
        {
            "@type": "Question",
            name: "ธุรกิจประเภทไหนที่ใช้ ANYCALL ได้บ้าง?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "ANYCALL เหมาะสำหรับธุรกิจบริการและการท่องเที่ยว สุขภาพและความงาม การศึกษา ค้าปลีก การเงิน และอุตสาหกรรมอื่นๆ ธุรกิจใดก็ตามที่มีการรับสายหรือโทรออกสามารถได้รับประโยชน์จาก AI",
            },
        },
        {
            "@type": "Question",
            name: "ANYCALL ต่างจากระบบตอบรับอัตโนมัติทั่วไปอย่างไร?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "ต่างจากระบบเมนูเสียงที่แข็งทื่อ ANYCALL ใช้การประมวลผลภาษาธรรมชาติเพื่อสนทนาจริง เข้าใจบริบท ตอบโต้แบบเรียลไทม์ และปรับตัวตามผู้โทรแต่ละคน เหมือนกับพนักงานที่เป็นมนุษย์",
            },
        },
        {
            "@type": "Question",
            name: "ต้องเทรน AI ก่อนใช้งานไหม?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "การตั้งค่าทำได้ง่ายดาย เพียงให้ข้อมูลธุรกิจ คำถามที่พบบ่อย และเวิร์กโฟลว์เฉพาะ ANYCALL จะเรียนรู้จากบริบทเหล่านี้และเริ่มจัดการสายได้อย่างมีประสิทธิภาพทันที",
            },
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "หน้าหลัก",
            item: APP_URL,
        },
    ],
};

export function JsonLd() {
    const schemas = [
        organizationSchema,
        websiteSchema,
        softwareSchema,
        faqSchema,
        breadcrumbSchema,
    ];

    return (
        <>
            {schemas.map((schema, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
}

export function ContactPageJsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": `${APP_URL}/contact#webpage`,
        url: `${APP_URL}/contact`,
        name: "ติดต่อ ANYCALL",
        description:
            "ติดต่อทีมงาน ANYCALL เพื่อเริ่มต้นใช้งาน AI Calling Agent สำหรับธุรกิจของคุณ",
        breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "หน้าหลัก",
                    item: APP_URL,
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "ติดต่อเรา",
                    item: `${APP_URL}/contact`,
                },
            ],
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
