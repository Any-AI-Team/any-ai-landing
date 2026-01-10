"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import bgCTA from "@/assets/BG_CTA.webp";

export const CTA = () => {
    const router = useRouter();
    const { t } = useLanguage();

    const scrollToContact = () => {
        router.push("/contact");
    };

    return (
        <section
            className="relative w-full min-h-[850px] md:min-h-0 md:aspect-[1440/750] bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
            style={{ backgroundImage: `url(${bgCTA.src})` }}
        >
            <div className="absolute top-0 left-0 w-full h-32 md:h-24 bg-gradient-to-b from-background to-transparent z-0" />
            <div className="section-container relative z-10 flex flex-col items-center text-center px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="text-3xl md:text-h2 font-semibold text-white mb-6 max-w-4xl"
                >
                    {t.ctaSection.title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="text-white/90 text-sm md:text-base font-medium mb-10 max-w-2xl"
                >
                    {t.ctaSection.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Button
                        onClick={scrollToContact}
                        className="bg-black text-white hover:bg-black/80 rounded-full px-4 py-2 text-sm md:px-4 md:py-6 md:text-lg font-medium w-auto min-w-[140px]"
                    >
                        {t.ctaSection.cta}
                    </Button>
                </motion.div>
            </div>

            {/* Overlay for better text readability if needed, though the image seems clean */}
            {/* <div className="absolute inset-0 bg-black/10 z-0"></div> */}
        </section>
    );
};
