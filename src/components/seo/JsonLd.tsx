const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.anyaith.com";

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${APP_URL}/#organization`,
    name: "ANYCALL",
    alternateName: "AnyaiTH",
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
    contactPoint: [
        {
            "@type": "ContactPoint",
            contactType: "customer support",
            availableLanguage: ["Thai", "English"],
            url: `${APP_URL}/contact`,
        },
        {
            "@type": "ContactPoint",
            contactType: "sales",
            availableLanguage: ["Thai", "English"],
            url: `${APP_URL}/contact`,
        },
    ],
    foundingDate: "2024",
    areaServed: {
        "@type": "Country",
        name: "Thailand",
    },
    description: "แพลตฟอร์ม AI Calling Agent สำหรับธุรกิจ SME ไทย รับสาย-โทรออกอัตโนมัติ 24 ชั่วโมง",
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

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${APP_URL}/#webpage`,
    url: APP_URL,
    name: "ANYCALL - AI Calling Agent | รับสายอัตโนมัติ 24/7",
    description: "ANYCALL แพลตฟอร์ม AI Calling Agent รับสาย-โทรออกอัตโนมัติ 24 ชั่วโมง ไม่พลาดทุกโอกาส สร้าง AI Agent ของธุรกิจคุณได้ภายใน 5 นาที ไม่ต้องเขียนโค้ด",
    isPartOf: { "@id": `${APP_URL}/#website` },
    about: { "@id": `${APP_URL}/#organization` },
    primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${APP_URL}/og-image.png`,
        width: 1200,
        height: 630,
    },
    inLanguage: "th-TH",
    speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", ".hero-description"],
    },
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
    applicationSubCategory: "CommunicationApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    softwareVersion: "2.0",
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    offers: [
        {
            "@type": "Offer",
            name: "ฟรี",
            price: "0",
            priceCurrency: "THB",
            description: "ทดลองใช้ฟรี 100 สาย/สัปดาห์",
            availability: "https://schema.org/InStock",
            url: `${APP_URL}/contact`,
        },
        {
            "@type": "Offer",
            name: "Pro",
            price: "990",
            priceCurrency: "THB",
            description: "ไม่จำกัดการใช้งาน สำหรับมืออาชีพ",
            billingIncrement: "P1M",
            availability: "https://schema.org/InStock",
            url: `${APP_URL}/contact`,
        },
        {
            "@type": "Offer",
            name: "Enterprise",
            description: "ราคาพิเศษสำหรับองค์กร",
            priceCurrency: "THB",
            availability: "https://schema.org/InStock",
            url: `${APP_URL}/contact`,
        },
    ],
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
        "โอนสายให้พนักงานได้",
        "รายงานและวิเคราะห์สาย",
        "รองรับธุรกิจหลายประเภท",
    ],
    screenshot: {
        "@type": "ImageObject",
        url: `${APP_URL}/og-image.png`,
        width: 1200,
        height: 630,
    },
    publisher: { "@id": `${APP_URL}/#organization` },
};

const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${APP_URL}/#product`,
    name: "ANYCALL AI Calling Agent",
    description: "ระบบ AI รับสาย-โทรออกอัตโนมัติ 24 ชั่วโมง สำหรับธุรกิจ SME ไทย ไม่ต้องเขียนโค้ด สร้าง AI Agent ได้ภายใน 5 นาที",
    image: `${APP_URL}/og-image.png`,
    brand: {
        "@type": "Brand",
        name: "ANYCALL",
    },
    manufacturer: { "@id": `${APP_URL}/#organization` },
    offers: {
        "@type": "AggregateOffer",
        lowPrice: "0",
        highPrice: "990",
        priceCurrency: "THB",
        offerCount: "3",
        offers: [
            {
                "@type": "Offer",
                name: "Free Plan",
                price: "0",
                priceCurrency: "THB",
                availability: "https://schema.org/InStock",
            },
            {
                "@type": "Offer",
                name: "Pro Plan",
                price: "990",
                priceCurrency: "THB",
                availability: "https://schema.org/InStock",
            },
        ],
    },
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "120",
        bestRating: "5",
    },
    category: "AI Business Software",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${APP_URL}/#service`,
    name: "AI Calling Agent Service",
    serviceType: "AI Voice Automation",
    provider: { "@id": `${APP_URL}/#organization` },
    description: "บริการ AI Calling Agent รับสาย-โทรออกอัตโนมัติสำหรับธุรกิจ SME ไทย",
    areaServed: {
        "@type": "Country",
        name: "Thailand",
        "@id": "https://www.wikidata.org/wiki/Q869",
    },
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Calling Plans",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Free AI Calling",
                    description: "ทดลองใช้ฟรี 100 สาย/สัปดาห์",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Pro AI Calling",
                    description: "ไม่จำกัดการใช้งาน AI รับสาย-โทรออก",
                },
            },
        ],
    },
    audience: {
        "@type": "BusinessAudience",
        audienceType: "SME, Small Business, Dental Clinic, Healthcare",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${APP_URL}/#faqpage`,
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
                text: "ANYCALL เหมาะสำหรับธุรกิจบริการและการท่องเที่ยว สุขภาพและความงาม คลินิกทันตกรรม การศึกษา ค้าปลีก การเงิน และอุตสาหกรรมอื่นๆ ธุรกิจใดก็ตามที่มีการรับสายหรือโทรออกสามารถได้รับประโยชน์จาก AI",
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
        {
            "@type": "Question",
            name: "ANYCALL ราคาเท่าไหร่?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "ANYCALL มีแผนฟรีสำหรับทดลองใช้ 100 สาย/สัปดาห์ แผน Pro ราคา 990 บาท/เดือน สำหรับการใช้งานไม่จำกัด และแผน Enterprise สำหรับองค์กรขนาดใหญ่พร้อม SOC 2 compliance",
            },
        },
        {
            "@type": "Question",
            name: "AI รองรับภาษาอะไรบ้าง?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "ANYCALL รองรับภาษาไทยและภาษาอังกฤษ โดย AI เข้าใจสำเนียงและบริบทไทยได้อย่างดีเยี่ยม เหมาะสำหรับธุรกิจไทยที่ต้องการระบบ AI Calling Agent ที่สื่อสารเป็นภาษาไทยได้เป็นธรรมชาติ",
            },
        },
        {
            "@type": "Question",
            name: "สามารถโอนสายให้พนักงานได้ไหม?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "ได้ ANYCALL สามารถโอนสายให้พนักงานได้ทันทีเมื่อลูกค้าต้องการ หรือเมื่อ AI ตัดสินใจว่าควรให้คนดูแล รองรับ 3-way bridge call เพื่อความราบรื่น",
            },
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${APP_URL}/#breadcrumb`,
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
        webPageSchema,
        softwareSchema,
        productSchema,
        serviceSchema,
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
        name: "ติดต่อ ANYCALL - เริ่มต้นใช้งาน AI Calling Agent",
        description:
            "ติดต่อทีมงาน ANYCALL เพื่อเริ่มต้นใช้งาน AI Calling Agent สำหรับธุรกิจของคุณ กรอกแบบฟอร์มแล้วเราจะติดต่อกลับภายใน 24 ชั่วโมง",
        isPartOf: { "@id": `${APP_URL}/#website` },
        inLanguage: "th-TH",
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
        mainEntity: {
            "@type": "Organization",
            "@id": `${APP_URL}/#organization`,
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
