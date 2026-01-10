import {
    Phone,
    MessageSquare,
    Clock,
    Sparkles,
    Wallet,
    BarChart3,
    Utensils,
    Heart,
    GraduationCap,
    ShoppingBag,
    Briefcase,
    Palette,
    Database,
    Shield,
} from "lucide-react";

export const EN = {
    nav: {
        login: "Log in",
        signup: "Sign Up",
        language: "Language",
    },
    hero: {
        title: "Transforming Business\nwith AI Calling Agents.",
        subtitle: "ANYCALL",
        cta: "Join now",
    },
    valueProp: {
        title: "Build your AI Agent.\nno code, no hassle",
        cta: "Early adopter",
    },
    useCases: {
        title: "Effortlessly empowering\nyour business."
    },
    featuresSection: {
        title: "Why ANY is the best platform\nto build your AI Calling Agents.",
    },
    faqSection: {
        title: "Everything you need to\nknow about ANYCALL",
    },
    ctaSection: {
        title: "Ready To Transform Your Business Communication?",
        subtitle: "Everything your business needs for effortless, intelligent communication",
        cta: "Get Started",
    },
    footer: {
        rights: "All rights reserved",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
    },
    contact: {
        title: "Let's Connect",
        subtitle: "Share your details to get started. Our team will reach out to help you transform your business with AI calling agents.",
        form: {
            firstName: "First Name",
            lastName: "Last Name",
            company: "Company",
            email: "Email",
            phone: "Phone Number",
            details: "Details",
            detailsPlaceholder: "Tell us about your business and how we can help...",
            firstNamePlaceholder: "John",
            lastNamePlaceholder: "Smith",
            companyPlaceholder: "Acme Inc.",
            emailPlaceholder: "john@example.com",
            phonePlaceholder: "0612345678",
            submit: "Submit",
            sending: "Sending...",
            successTitle: "Message sent!",
            successDesc: "We'll get back to you as soon as possible."
        }
    },
    navLinks: [
        {
            label: "Platform",
            href: "#",
            children: [
                {
                    label: "ANYCALL",
                    href: "/",
                    description: "Transforming SMEs with AI Calling Agents.",
                    icon: Phone,
                },
                {
                    label: "ANYCHAT",
                    href: "#anychat",
                    description: "Intelligent conversational AI for support.",
                    icon: MessageSquare,
                },
            ],
        },
        { label: "FAQ", href: "/#faq" },
        { label: "Contact Us", href: "/contact" },
    ],
    valuePropositionFeatures: [
        {
            icon: Sparkles,
            title: "AI Handles Everything",
            description:
                "Deliver human-like conversations in multiple languages. ANY AI can answer or place calls, understand intent, and manage the entire flow automatically",
            gradient: "from-brand-cyan to-brand-blue",
        },
        {
            icon: Clock,
            title: "Always On, 24/7",
            description:
                "Midnight, weekend, or peak hour ANY AI answers instantly. Capture every opportunity, serve customers anytime, and ensure no call or sale slips away",
            gradient: "from-brand-blue to-brand-purple",
        },
        {
            icon: BarChart3,
            title: "Seamless Integration",
            description:
                "Sync with your CRM or use ANY as your all-in-one platform. High-performance data management at your fingertips—with or without your own backend.",
            gradient: "from-brand-purple to-brand-pink",
        },
        {
            icon: Wallet,
            title: "Scale Smart, Spend Less",
            description:
                "Pay as you go, elastic capacity. Enterprise quality with lean, predictable costs and clear",
            gradient: "from-brand-pink to-brand-orange",
        },
    ],
    useCasesList: [
        {
            icon: Utensils,
            title: "Service & Tourism",
            description: "Every table, every guest, every trip handled with Professional.",
            details:
                "From busy restaurants and boutique hotels to local tour operators, ANY answers instantly, manages bookings in any language, and follows up automatically delivering effortless hospitality around the clock.",
            gradient: "from-brand-blue to-brand-purple",
        },
        {
            icon: Heart,
            title: "Health & Wellness",
            description: "Care that remembers, reminds, and reassures.",
            details:
                "ANY gently reminds, confirms, and checks in with clients for clinics, spas, and gyms combining professionalism with empathy to reduce missed appointments and deepen long-term relationships.",
            gradient: "from-brand-purple to-brand-pink",
        },
        {
            icon: GraduationCap,
            title: "Education & Training",
            description: "Learning stays clear, connected, and on time.",
            details:
                "ANY keeps students and parents informed important announcing changes, confirming , and gathering real-time feedback so every class runs smoothly.",
            gradient: "from-brand-pink to-brand-orange",
        },
        {
            icon: ShoppingBag,
            title: "Retail & Customer Care",
            description: "Every order, every update handled flawlessly.",
            details:
                "From delivery notifications to post-purchase follow-ups, ANY automates communication with the right tone and timing — turning routine calls into lasting customer loyalty.",
            gradient: "from-brand-orange to-brand-blue",
        },
        {
            icon: Briefcase,
            title: "Finance & Office Services",
            description: "Precision, compliance in every call.",
            details:
                "ANY manages renewals, payment reminders, and identity verification automatically — saving hours of manual work while keeping every interaction accurate and on brand.",
            gradient: "from-brand-blue to-brand-pink",
        },
    ],
    features: [
        {
            icon: Palette,
            title: "Full control of brand identity",
            description:
                "Define persona, tone of voice, language, and conversation style to match your brand naturally.",
            bullets: [
                "Real-time tone/script adjustments",
                "Select voices and creativity levels per use case",
            ],
            gradient: "from-brand-cyan to-brand-blue",
        },
        {
            icon: Database,
            title: "Business context from your data",
            description:
                "Upload knowledge, workflows, and goals; the system learns the context and executes accordingly.",
            bullets: [
                "Direct integration with Knowledge Base/FAQ/documents",
                "Continuous updates without starting from scratch",
            ],
            gradient: "from-brand-blue to-brand-purple",
        },
        {
            icon: BarChart3,
            title: "Outcome-driven and measurable",
            description:
                "See summaries such as closed sales, appointment confirmations, and key KPIs, with voice/text records for deep analysis.",
            bullets: [
                "Clear dashboards with ready-to-use reports",
                "Executive KPIs—confirmation rate, close rate, AHT, CSAT",
            ],
            gradient: "from-brand-purple to-brand-pink",
        },
        {
            icon: Shield,
            title: "Enterprise-grade security and privacy",
            description: "Designed with Security & Privacy by Design from day one.",
            bullets: [
                "Role-based access control (RBAC), data retention policies",
                "Aligned with PDPA and Thailand AI Ethics Guidelines",
            ],
            gradient: "from-brand-pink to-brand-orange",
        },
    ],
    faqs: [
        {
            question: "What is ANYCALL?",
            answer:
                "ANYCALL is an AI-powered Call Center platform that operates 24/7. It handles incoming and outgoing calls with natural language understanding, helping SMEs automate their phone communications without missing any opportunity.",
        },
        {
            question: "Do I need programming skills?",
            answer:
                "No, not at all. ANYCALL is built for simplicity. You can set up your AI calling agent through an intuitive interface—no coding required. Just define your business context and let the AI handle the rest.",
        },
        {
            question: "What types of businesses can use ANYCALL?",
            answer:
                "ANYCALL is perfect for service & tourism, health & wellness, education, retail, finance, and many more industries. Any business that receives or makes phone calls can benefit from AI-powered call handling.",
        },
        {
            question: "How is ANYCALL different from a voice menu or robocall?",
            answer:
                "Unlike rigid voice menus or pre-recorded robocalls, ANY CALL uses natural language processing to have real conversations. It understands context, responds in real-time, and adapts to each caller's needs—just like a human agent.",
        },
        {
            question: "Do I need to train it before using it?",
            answer:
                "Minimal setup is needed. Simply provide your business information, FAQs, and any specific workflows. ANY CALL learns from this context and starts handling calls effectively right away.",
        },
    ],
};
