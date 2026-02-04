"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { features, t } = useLanguage();

  return (
    <section ref={ref} className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="section-container px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-h2 text-foreground text-left">
            {t.featuresSection.title.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < t.featuresSection.title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: "easeOut",
              }}
            >
              <div className="bg-[#F5F5F7] rounded-[32px] p-8 md:p-10 h-full hover:shadow-[0_4px_8px_rgba(0,0,0,0.12),0_2px_4px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shrink-0`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>

                    <h3>
                      <span className={`bg-clip-text text-transparent bg-gradient-to-r ${feature.gradient}`}>
                        {feature.title}
                      </span>
                    </h3>
                  </div>

                  <p className="text-description mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <ul className="space-y-3 mt-auto">
                    {feature.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-details">
                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-2 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div >
    </section >
  );
};
