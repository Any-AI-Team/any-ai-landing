"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const Pain = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 md:py-48 lg:py-56 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Two Column Layout: Phone Left, Content Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* LEFT: Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[400px] md:max-w-[500px] lg:max-w-[550px]">
                <img 
                  src="/missed-call-illustration.jpg" 
                  alt="Missed call illustration showing business owner overwhelmed while customer calls" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* RIGHT: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D1D1F] tracking-[-0.02em] leading-[1.05] mb-4">
                The cost of a<br />missed call.
              </h2>
              <p className="text-base md:text-xl lg:text-2xl text-[#86868B] font-light tracking-tight mb-8 lg:mb-10">
                Every unanswered call is a customer choosing your competitor.
              </p>

              {/* The Stat */}
              <div className="mb-6">
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-[67px] md:text-[94px] lg:text-[107px] xl:text-[120px] font-extralight text-[#86868B] tracking-[-0.04em] leading-none mb-4"
                >
                  62%
                </motion.p>
                <p className="text-base md:text-xl lg:text-2xl text-[#1D1D1F] font-medium mb-3">
                  of customers won't call back after a missed call.
                </p>
                <p className="text-sm md:text-base text-[#86868B] font-light max-w-xl">
                  {t.pain.statisticDetail}
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

