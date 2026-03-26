"use client";

import { ContactSection } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";

export default function ContactClient() {
    return (
        <main className="min-h-screen bg-background overflow-x-hidden">
            <div className="pt-8 md:pt-14">
                <ContactSection />
            </div>
            <Footer />
        </main>
    );
}
