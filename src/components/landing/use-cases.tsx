"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const UseCases = () => {
  const ref = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { useCases, t } = useLanguage();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Adjust as needed
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={ref} className="py-12 md:py-16 lg:py-24 bg-section-bg overflow-hidden" id="use-cases">
      <div className="section-container mb-8 md:mb-12 px-4 sm:px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-h2 font-semibold text-foreground text-left">
        
          {t.useCases.title.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < t.useCases.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </motion.h2>
      </div>

      {/* Horizontal Scrolling Container */}
      <div className="relative w-full">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 snap-x snap-mandatory responsive-slider-padding"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="flex-shrink-0 snap-center"
            >
              <motion.div
                className="w-[334px] md:w-[434px] bg-card rounded-3xl p-8 shadow-[0_4px_8px_rgba(0,0,0,0.12),0_2px_4px_rgba(0,0,0,0.08)] border border-border/30 h-[450px] md:h-[450px] flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br ${useCase.gradient} flex items-center justify-center shrink-0`}
                  >
                    <useCase.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3>
                    <span className={`bg-clip-text text-transparent bg-gradient-to-r ${useCase.gradient}`}>
                      {useCase.title}
                    </span>
                  </h3>
                </div>

                <div className="flex-grow flex flex-col gap-4">
                  <p className="text-description text-left">
                    {useCase.description}
                  </p>
                  <p className="text-details text-justify">
                    {useCase.details}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-border/50">
                  <span className="text-sm text-muted-foreground">Learn more →</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-3 mt-6 responsive-slider-padding">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 bg-background/50 backdrop-blur border-border/50 hover:bg-background/80 transition-colors"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 bg-background/50 backdrop-blur border-border/50 hover:bg-background/80 transition-colors"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </Button>
        </div>
      </div>
    </section>
  );
};
