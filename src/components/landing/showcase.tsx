"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

// Phone Screen Components
const CallScreen = () => (
  <div className="h-full bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center p-6">
    {/* Call UI */}
    <div className="flex-1 flex flex-col items-center justify-center">
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mb-4" />
      <p className="text-white text-xl font-medium mb-2">Incoming Call</p>
      <p className="text-gray-400 text-sm mb-8">+66 81 234 5678</p>
      
      {/* Waveform */}
      <div className="flex items-center gap-1 mb-8">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 bg-green-500 rounded-full"
            animate={{
              height: [20, 40, 20, 50, 20],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Language Flags */}
      <div className="flex gap-3 mb-4">
        <motion.div
          className="text-2xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
        >
          🇹🇭
        </motion.div>
        <motion.div
          className="text-2xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          🇺🇸
        </motion.div>
        <motion.div
          className="text-2xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          🇨🇳
        </motion.div>
      </div>

      <p className="text-green-500 text-sm">Translating... (English ⇄ Thai)</p>
    </div>
  </div>
);

const LockScreen = () => (
  <div className="h-full bg-black flex flex-col p-6">
    {/* Time */}
    <div className="flex-1 flex flex-col items-center justify-center">
      <p className="text-white text-7xl font-light tracking-tight">02:14</p>
      <p className="text-gray-500 text-lg mt-2">Tuesday, February 4</p>
    </div>

    {/* Notifications */}
    <div className="space-y-3 mb-8">
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="bg-gray-900/90 backdrop-blur-xl rounded-2xl p-4"
      >
        <div className="flex items-center gap-3 mb-1">
          <div className="w-8 h-8 rounded-full bg-red-500" />
          <p className="text-white text-sm font-medium">Missed Call</p>
          <p className="text-gray-500 text-xs ml-auto">02:13 AM</p>
        </div>
        <p className="text-gray-400 text-sm">Customer</p>
      </motion.div>

      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="bg-green-900/30 backdrop-blur-xl rounded-2xl p-4 border border-green-500/30"
      >
        <div className="flex items-center gap-3 mb-1">
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">
            AI
          </div>
          <p className="text-white text-sm font-medium">ANY AI</p>
          <p className="text-gray-500 text-xs ml-auto">02:14 AM</p>
        </div>
        <p className="text-gray-300 text-sm">I handled this lead. Appointment booked for tomorrow 10 AM.</p>
      </motion.div>
    </div>
  </div>
);

const DashboardScreen = () => (
  <div className="h-full bg-white flex flex-col p-6">
    {/* Header */}
    <div className="mb-6">
      <h3 className="text-gray-900 text-xl font-semibold">Sync Complete</h3>
      <p className="text-gray-500 text-sm">All systems updated</p>
    </div>

    {/* Success Items */}
    <div className="space-y-4 flex-1">
      {[
        { label: "Lead saved to CRM", delay: 0.2 },
        { label: "Order synced to POS", delay: 0.4 },
        { label: "Summary sent to LINE Group", delay: 0.6 },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: item.delay, duration: 0.5 }}
          className="flex items-center gap-3 bg-gray-50 rounded-xl p-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: item.delay + 0.3, type: "spring" }}
            className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center"
          >
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          <p className="text-gray-700 text-sm font-medium">{item.label}</p>
        </motion.div>
      ))}
    </div>

    {/* Success Badge */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="bg-green-50 border border-green-200 rounded-xl p-4 text-center"
    >
      <p className="text-green-700 font-semibold">Setup Complete</p>
      <p className="text-green-600 text-sm">Ready in under 5 minutes</p>
    </motion.div>
  </div>
);

export const Showcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Determine which screen to show based on scroll
  const screenIndex = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 1, 2, 2]);

  return (
    <section ref={containerRef} className="relative bg-white">
      <div className="section-container py-16 md:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.showcase.title.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < t.showcase.title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t.showcase.subtitle}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Sticky Phone */}
          <div className="lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto max-w-[300px]"
            >
              {/* Phone Frame */}
              <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10" />
                
                {/* Screen */}
                <div className="relative bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                  <motion.div
                    style={{
                      opacity: useTransform(scrollYProgress, [0, 0.2, 0.3, 0.33], [1, 1, 0, 0]),
                    }}
                    className="absolute inset-0"
                  >
                    <CallScreen />
                  </motion.div>
                  
                  <motion.div
                    style={{
                      opacity: useTransform(scrollYProgress, [0.3, 0.33, 0.63, 0.66], [0, 1, 1, 0]),
                    }}
                    className="absolute inset-0"
                  >
                    <LockScreen />
                  </motion.div>
                  
                  <motion.div
                    style={{
                      opacity: useTransform(scrollYProgress, [0.63, 0.66, 1], [0, 1, 1]),
                    }}
                    className="absolute inset-0"
                  >
                    <DashboardScreen />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Scrollable Content */}
          <div className="space-y-32 lg:space-y-96">
            {t.showcaseSections.map((section: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 0.6 }}
                className="min-h-[400px] flex flex-col justify-center"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {section.body}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full w-fit">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">{section.metric}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
