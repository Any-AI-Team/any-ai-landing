"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const ValueProposition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, valueFeatures } = useLanguage();
  const router = useRouter();

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background" id="platform">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Column: Title & CTA */}
          <div className="lg:w-5/12 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-8 text-foreground">
                {t.valueProp.title.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < t.valueProp.title.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h2>
              <Button
                onClick={() => router.push("/contact")}
                className="rounded-full bg-black text-white px-6 py-2 text-sm md:px-6 md:py-6 md:text-lg hover:bg-black/90 transition-all w-[130px]"
              >
                {t.valueProp.cta}
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Feature Cards */}
          <div className="lg:w-7/12 flex flex-col gap-6">
            {valueFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                <div className="bg-[#F5F5F7] rounded-[32px] p-8 md:p-10 hover:shadow-[0_4px_8px_rgba(0,0,0,0.12),0_2px_4px_rgba(0,0,0,0.08)] transition-shadow duration-300 max-w-2xl ml-auto flex flex-col gap-4">

                  <div className="flex items-center gap-4">
                    {/* Gradient Icon */}
                    <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                      <feature.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </div>

                    <h3>
                      <span className={`bg-clip-text text-transparent bg-gradient-to-r ${feature.gradient}`}>
                        {feature.title}
                      </span>
                    </h3>
                  </div>

                  <p className="text-description font-normal leading-relaxed">
                    {feature.description}
                  </p>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
