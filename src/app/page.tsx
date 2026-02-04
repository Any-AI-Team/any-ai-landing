"use client";

import { Hero } from "@/components/landing/hero";
import { ValueProposition } from "@/components/landing/value-proposition";
import { UseCases } from "@/components/landing/use-cases";
import { Features } from "@/components/landing/features";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";
import { Integration } from "@/components/landing/integration";
import { Showcase } from "@/components/landing/showcase";

export default function Index() {
    return (
        <main className="min-h-screen bg-background overflow-x-hidden">
            <div className="pt-11 md:pt-14">
                <Hero />
                <ValueProposition />
                <Showcase />
                <Integration />
                <UseCases />
                <Features />
                <Pricing />
                <FAQ />
                <CTA />
                <Footer />
            </div>
        </main>
    );
}
