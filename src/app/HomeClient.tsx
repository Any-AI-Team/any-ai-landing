"use client";

import { Hero } from "@/components/landing/hero";
import { Pain } from "@/components/landing/pain";
import { UseCases } from "@/components/landing/use-cases";
import { Showcase } from "@/components/landing/showcase";
import { Integration } from "@/components/landing/integration";
import { DataPrivacy } from "@/components/landing/data-privacy";
import { FAQ } from "@/components/landing/faq";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function HomeClient() {
    return (
        <main className="min-h-screen bg-background overflow-x-hidden">
            <div className="pt-11 md:pt-14">
                <Hero />
                <Pain />
                <Showcase />
                <Integration />
                <UseCases />
                <DataPrivacy />
                <FAQ />
                <CTA />
                <Footer />
            </div>
        </main>
    );
}
