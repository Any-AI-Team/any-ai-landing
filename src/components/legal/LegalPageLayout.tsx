"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/footer";
import type { ComponentType } from "react";

type LegalIcon = ComponentType<{ className?: string; strokeWidth?: number }>;

type LegalSection = {
    icon: LegalIcon;
    title: string;
    body: string;
    bullets?: string[];
    note?: string;
};

export type LegalPageContent = {
    badge: string;
    title: string;
    subtitle: string;
    lastUpdated: string;
    intro: string;
    tocTitle: string;
    sections: LegalSection[];
    contact: {
        icon: LegalIcon;
        title: string;
        body: string;
        cta: string;
    };
};

// Same rotating gradient set used across features / use-cases / value-proposition cards.
const GRADIENTS = [
    "from-brand-cyan to-brand-blue",
    "from-brand-blue to-brand-purple",
    "from-brand-purple to-brand-pink",
    "from-brand-pink to-brand-orange",
    "from-brand-orange to-brand-blue",
    "from-brand-blue to-brand-pink",
];

export function LegalPageLayout({
    content,
    anchorPrefix,
}: {
    content: LegalPageContent;
    anchorPrefix: string;
}) {
    const contactGradient = GRADIENTS[content.sections.length % GRADIENTS.length];

    return (
        <main className="min-h-screen bg-background overflow-x-hidden">
            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-1/3 -left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-1/3 -right-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl" />
                </div>
                <div className="section-container relative pt-28 pb-16 md:pt-36 md:pb-24 text-center px-4 sm:px-6 md:px-8">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-white/90 mb-6">
                        <ShieldCheck className="w-4 h-4" strokeWidth={1.75} />
                        {content.badge}
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-h1 font-bold text-white mb-5 max-w-3xl mx-auto leading-tight">
                        {content.title}
                    </h1>
                    <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-4">
                        {content.subtitle}
                    </p>
                    <p className="text-sm text-gray-500">{content.lastUpdated}</p>
                </div>
            </section>

            {/* Intro + TOC */}
            <section className="py-12 md:py-16 lg:py-24 bg-background">
                <div className="section-container px-4 sm:px-6 md:px-8">
                    <div className="grid md:grid-cols-3 gap-6 md:gap-10">
                        <p className="md:col-span-2 text-description leading-relaxed">
                            {content.intro}
                        </p>
                        <nav aria-label={content.tocTitle} className="bg-[#F5F5F7] rounded-3xl p-6 h-fit">
                            <p className="text-sm font-semibold text-foreground mb-3">{content.tocTitle}</p>
                            <ol className="space-y-2 text-sm">
                                {content.sections.map((section, i) => (
                                    <li key={section.title}>
                                        <a
                                            href={`#${anchorPrefix}-${i}`}
                                            className="text-details hover:text-foreground transition-colors"
                                        >
                                            {i + 1}. {section.title}
                                        </a>
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>

            {/* Sections */}
            <section className="pb-16 md:pb-24 bg-background">
                <div className="section-container px-4 sm:px-6 md:px-8">
                    <div className="space-y-6">
                        {content.sections.map((section, i) => {
                            const Icon = section.icon;
                            const gradient = GRADIENTS[i % GRADIENTS.length];
                            return (
                                <div
                                    key={section.title}
                                    id={`${anchorPrefix}-${i}`}
                                    className="scroll-mt-24 bg-[#F5F5F7] rounded-[32px] p-6 md:p-10 hover:shadow-[0_4px_8px_rgba(0,0,0,0.12),0_2px_4px_rgba(0,0,0,0.08)] transition-shadow duration-300"
                                >
                                    <div className="flex items-center gap-4 mb-5">
                                        <div className={`shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                                            <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={1.75} />
                                        </div>
                                        <h2>
                                            <span className={`text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}>
                                                {section.title}
                                            </span>
                                        </h2>
                                    </div>
                                    <p className="text-description leading-relaxed mb-4">
                                        {section.body}
                                    </p>
                                    {section.bullets && (
                                        <ul className="space-y-2.5">
                                            {section.bullets.map((bullet) => (
                                                <li key={bullet} className="flex items-start gap-3 text-details">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-2 shrink-0" />
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {section.note && (
                                        <p className="mt-4 text-sm font-medium text-foreground bg-white rounded-xl px-4 py-3">
                                            {section.note}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Contact CTA */}
                    <div className="mt-10 bg-[#F5F5F7] rounded-[32px] p-8 md:p-12 text-center">
                        <div className={`mx-auto mb-5 w-14 h-14 rounded-2xl bg-gradient-to-br ${contactGradient} flex items-center justify-center`}>
                            <content.contact.icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                        </div>
                        <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">{content.contact.title}</h2>
                        <p className="text-description max-w-xl mx-auto mb-6">{content.contact.body}</p>
                        <Button asChild size="lg" className="px-8">
                            <Link href="/contact">{content.contact.cta}</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
