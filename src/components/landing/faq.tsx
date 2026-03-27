"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

export const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { faqs, t } = useLanguage();



  return (
    <section ref={ref} className="py-12 md:py-16 lg:py-20 bg-background" id="faq" aria-label="คำถามที่พบบ่อยเกี่ยวกับ ANYCALL AI Calling Agent">
      <div className="section-container px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-h2 text-foreground text-left">
            {t.faqSection.title.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < t.faqSection.title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full"
        >
          <div className="bg-[#F5F5F7] rounded-2xl sm:rounded-3xl md:rounded-[32px] p-6 sm:p-8 md:p-10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-gray-300 last:border-0 px-0"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg lg:text-[21px] font-normal text-foreground hover:no-underline py-4 sm:py-5 md:py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm md:text-base text-details pb-4 sm:pb-5 md:pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
