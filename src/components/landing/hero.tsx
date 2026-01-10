"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import bgMain from "@/assets/BG_main.webp";
import heroPhones from "@/assets/hero_phones.webp";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export const Hero = () => {
  const router = useRouter();
  const { t } = useLanguage();

  const scrollToContact = () => {
    router.push("/contact");
  };

  return (
    <section
      className="relative min-h-[600px] md:min-h-[950px] flex items-start justify-center overflow-hidden pt-10 md:pt-12"
      style={{
        backgroundImage: `url(${bgMain.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-2xl md:text-[32px] text-white font-medium block mb-2">{t.hero.subtitle}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-h1 font-bold text-white max-w-4xl mx-auto leading-tight"
        >
          {t.hero.title.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < t.hero.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <Button
            onClick={scrollToContact}
            size="lg"
            className="btn-pill bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-4 py-2 md:text-lg md:px-8 md:py-6 w-[140px]"
          >
            {t.hero.cta}
          </Button>
        </motion.div>

        {/* Mobile UI Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 md:mt-16 w-full max-w-4xl mx-auto"
        >
          <Image
            src={heroPhones}
            alt="App Interface Preview"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};
