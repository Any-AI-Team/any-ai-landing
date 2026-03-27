"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const Pain = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 md:py-24 lg:py-32 xl:py-40 bg-white overflow-hidden" id="problem">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Two Column Layout: Phone Left, Content Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            
            {/* LEFT: Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center lg:justify-end order-2 lg:order-1"
            >
                <div className="relative w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[960px]">
                <img
                  src="/missed-call-illustration.png"
                  alt="ANYCALL แก้ปัญหาพลาดสาย — ภาพเจ้าของธุรกิจพลาดสายลูกค้าเพราะไม่มีคนรับ AI รับสายแทนได้ 24/7"
                  className="w-full h-auto"
                  loading="lazy"
                  width={960}
                  height={720}
                />
                </div>
            </motion.div>

            {/* RIGHT: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="flex flex-col justify-center order-1 lg:order-2 text-center lg:text-left px-4 lg:px-0"
            >
              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D1D1F] tracking-[-0.02em] leading-[1.05] mb-3 md:mb-4">
                {t.pain.title.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < t.pain.title.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#86868B] font-light tracking-tight mb-6 md:mb-8 lg:mb-10">
                {t.pain.subtitle}
              </p>

              {/* The Stat */}
              <div className="mb-6">
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] font-extralight text-[#86868B] tracking-[-0.04em] leading-none mb-3 md:mb-4"
                >
                  {t.pain.statPercent}
                </motion.p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#1D1D1F] font-medium mb-3">
                  {t.pain.statText}
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

