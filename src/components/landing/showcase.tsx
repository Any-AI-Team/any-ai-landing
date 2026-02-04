"use client";

import { motion } from "framer-motion";
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
  const { t } = useLanguage();

  return (
    <section className="relative bg-white py-32 md:py-48 lg:py-56">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20 md:mb-28 lg:mb-32"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1D1D1F] tracking-[-0.02em] leading-[1.05] mb-4">
              Build your AI Agent.
            </h2>
            <p className="text-base md:text-xl lg:text-2xl text-[#86868B] font-light tracking-tight">
              no code, no hassle
            </p>
          </motion.div>
          
          {/* Section 1: Natural Communication */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 md:mb-48 lg:mb-64">
            {/* Phone Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative bg-[#1D1D1F] rounded-[3.5rem] p-3.5 shadow-2xl w-[240px] md:w-[280px] lg:w-[320px]">
                <div className="bg-gradient-to-b from-gray-900 to-black rounded-[3rem] overflow-hidden aspect-[9/19.5] relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#1D1D1F] rounded-b-3xl w-32 h-7 z-10" />
                  <CallScreen />
                </div>
              </div>
            </motion.div>

            {/* Content Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1D1D1F] tracking-[-0.02em] leading-[1.05] mb-3">
                Natural<br />Communication
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-[#86868B] font-light mb-5 max-w-xl">
                {t.showcaseSections[0]?.body || "Speaks like a human, understands context, and handles conversations in Thai and English seamlessly."}
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full w-fit border border-green-200 mb-5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium text-xs">{t.showcaseSections[0]?.metric || "Natural conversations"}</span>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1D1D1F] text-white rounded-full text-sm font-medium hover:bg-[#2D2D2F] transition-colors w-fit"
              >
                Try it now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Section 2: Always On, 24/7 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 md:mb-48 lg:mb-64">
            {/* Phone Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative bg-[#1D1D1F] rounded-[3.5rem] p-3.5 shadow-2xl w-[240px] md:w-[280px] lg:w-[320px]">
                <div className="bg-black rounded-[3rem] overflow-hidden aspect-[9/19.5] relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#1D1D1F] rounded-b-3xl w-32 h-7 z-10" />
                  <LockScreen />
                </div>
              </div>
            </motion.div>

            {/* Content Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1D1D1F] tracking-[-0.02em] leading-[1.05] mb-3">
                Always On,<br />24/7
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-[#86868B] font-light mb-5 max-w-xl">
                {t.showcaseSections[1]?.body || "Never miss a call again. ANY AI answers instantly, even at 2 AM, capturing every opportunity while you sleep."}
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full w-fit border border-green-200 mb-5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium text-xs">{t.showcaseSections[1]?.metric || "24/7 availability"}</span>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1D1D1F] text-white rounded-full text-sm font-medium hover:bg-[#2D2D2F] transition-colors w-fit"
              >
                Get started
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Section 3: Seamless Integration */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Phone Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative bg-[#1D1D1F] rounded-[3.5rem] p-3.5 shadow-2xl w-[240px] md:w-[280px] lg:w-[320px]">
                <div className="bg-white rounded-[3rem] overflow-hidden aspect-[9/19.5] relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#1D1D1F] rounded-b-3xl w-32 h-7 z-10" />
                  <DashboardScreen />
                </div>
              </div>
            </motion.div>

            {/* Content Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1D1D1F] tracking-[-0.02em] leading-[1.05] mb-3">
                Seamless<br />Integration
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-[#86868B] font-light mb-5 max-w-xl">
                {t.showcaseSections[2]?.body || "Syncs with your CRM, POS, and LINE automatically. Every call becomes actionable data in your existing workflow."}
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full w-fit border border-green-200 mb-5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium text-xs">{t.showcaseSections[2]?.metric || "Setup in 5 minutes"}</span>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1D1D1F] text-white rounded-full text-sm font-medium hover:bg-[#2D2D2F] transition-colors w-fit"
              >
                Start free trial
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
