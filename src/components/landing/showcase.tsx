"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import logoC1 from "@/assets/LOGO_C1.png";

// Phone Screen Components
const CallScreen = () => (
  <div className="h-full bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center p-6">
    {/* Call UI */}
    <div className="flex-1 flex flex-col items-center justify-center">
      {/* Animated calling avatar with glow effect */}
      <div className="relative mb-10">
        {/* Outer glow rings */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-30"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ width: '120px', height: '120px', marginLeft: '-12px', marginTop: '-12px' }}
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-20"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 1, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
          style={{ width: '108px', height: '108px', marginLeft: '-6px', marginTop: '-6px' }}
        />
        
        {/* Main avatar circle */}
        <motion.div
          className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 relative z-10 shadow-xl"
          animate={{ 
            scale: [1, 0.95, 1],
            boxShadow: [
              '0 0 20px rgba(59, 130, 246, 0.5)',
              '0 0 40px rgba(139, 92, 246, 0.8)',
              '0 0 20px rgba(59, 130, 246, 0.5)'
            ]
          }}
          transition={{ 
            duration: 1.8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <p className="text-white text-xl font-medium mb-2">Incoming Call</p>
      <p className="text-gray-400 text-sm mb-8">+66 81 234 5678</p>
      


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
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <p className="text-white text-sm font-medium">Missed Call</p>
          <p className="text-gray-500 text-xs ml-auto">02:13 AM</p>
        </div>
        <p className="text-gray-400 text-sm">John Doe</p>
      </motion.div>

      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="bg-gray-900/90 backdrop-blur-xl rounded-2xl p-4"
      >
        <div className="flex items-center gap-3 mb-1">
          <Image
            src={logoC1}
            alt="ANY AI"
            className="w-8 h-8 rounded-full"
          />
          <p className="text-white text-sm font-medium">ANY AI</p>
          <p className="text-gray-500 text-xs ml-auto">02:14 AM</p>
        </div>
        <p className="text-gray-300 text-sm">I handled this lead. Appointment booked for tomorrow 10 AM.</p>
      </motion.div>
    </div>
  </div>
);

const DashboardScreen = () => {
  // Chart data points for animation
  const chartData = [
    { x: 0, y: 30 },
    { x: 20, y: 45 },
    { x: 40, y: 35 },
    { x: 60, y: 52 },
    { x: 80, y: 60 },
    { x: 100, y: 68 },
  ];

  return (
    <div className="h-full bg-gray-50 flex flex-col justify-center items-center p-4">
      {/* Main Content - Centered */}
      <div className="w-full max-w-sm">
        {/* Main Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-4 shadow-sm text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="text-3xl font-bold text-blue-600 mb-1"
            >
              47
            </motion.div>
            <div className="text-sm text-gray-600">Calls Handled</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-4 shadow-sm text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="text-3xl font-bold text-green-600 mb-1"
            >
              32
            </motion.div>
            <div className="text-sm text-gray-600">Leads Created</div>
          </motion.div>
        </div>

        {/* Line Chart - Bigger */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl p-5 mb-6 shadow-sm"
        >
          <div className="text-base font-semibold text-gray-700 mb-4 text-center">Performance Trend</div>
          <div className="relative h-32 w-full">
            <svg className="w-full h-full" viewBox="0 0 120 120">
              {/* Grid lines */}
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f3f4f6" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* Animated line */}
              <motion.polyline
                points={chartData.map(point => `${point.x + 10},${100 - point.y}`).join(' ')}
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
              />
              
              {/* Gradient fill under line */}
              <motion.polygon
                points={`10,100 ${chartData.map(point => `${point.x + 10},${100 - point.y}`).join(' ')} 110,100`}
                fill="url(#gradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              />
              
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#3B82F6', stopOpacity:0.3}} />
                  <stop offset="100%" style={{stopColor:'#3B82F6', stopOpacity:0}} />
                </linearGradient>
              </defs>

              {/* Animated data points */}
              {chartData.map((point, index) => (
                <motion.circle
                  key={index}
                  cx={point.x + 10}
                  cy={100 - point.y}
                  r="3"
                  fill="#3B82F6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + (index * 0.1), type: "spring" }}
                />
              ))}
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Live Status */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.4 }}
        className="flex items-center justify-center gap-2 mt-3 bg-green-50 rounded-lg py-2"
      >
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-green-500"
        />
        <span className="text-green-700 text-xs font-medium">Live Updates</span>
      </motion.div>
    </div>
  );
};

export const Showcase = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-white py-16 md:py-24 lg:py-32 xl:py-40" id="features">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12 md:mb-16 lg:mb-20 px-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D1D1F] tracking-[-0.02em] leading-[1.05] mb-3 md:mb-4">
              {t.showcase.headerTitle}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#86868B] font-light tracking-tight">
              {t.showcase.headerSubtitle}
            </p>
          </motion.div>
          
          {/* Section 1: Natural Communication */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center mb-20 md:mb-32 lg:mb-48">
            {/* Phone Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center lg:justify-end order-1 lg:order-1"
            >
              <div className="relative bg-[#1D1D1F] rounded-[2.5rem] sm:rounded-[3rem] md:rounded-[3.5rem] p-2.5 sm:p-3 md:p-3.5 shadow-2xl w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[340px]">
                <div className="bg-gradient-to-b from-gray-900 to-black rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden aspect-[9/19.5] relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#1D1D1F] rounded-b-2xl sm:rounded-b-3xl w-24 sm:w-28 md:w-32 h-5 sm:h-6 md:h-7 z-10" />
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
              className="flex flex-col justify-center order-2 lg:order-2 text-center lg:text-left px-4 lg:px-0"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D1D1F] tracking-[-0.02em] leading-[1.05] mb-3 md:mb-4">
                Natural<br />Communication
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-[#86868B] font-light mb-5 md:mb-6 max-w-xl mx-auto lg:mx-0">
                {t.showcaseSections[0]?.body || "Speaks like a human, understands context, and handles conversations in Thai and English seamlessly."}
              </p>
              <div className="mt-4 md:mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-[#007AFF] text-white rounded-full text-sm md:text-base font-semibold hover:bg-[#0056CC] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-fit"
                >
                  Try it now
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Section 2: Always On, 24/7 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center mb-20 md:mb-32 lg:mb-48">
            {/* Phone Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center lg:justify-end order-1 lg:order-1"
            >
              <div className="relative bg-[#1D1D1F] rounded-[2.5rem] sm:rounded-[3rem] md:rounded-[3.5rem] p-2.5 sm:p-3 md:p-3.5 shadow-2xl w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[340px]">
                <div className="bg-black rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden aspect-[9/19.5] relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#1D1D1F] rounded-b-2xl sm:rounded-b-3xl w-24 sm:w-28 md:w-32 h-5 sm:h-6 md:h-7 z-10" />
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
              className="flex flex-col justify-center order-2 lg:order-2 text-center lg:text-left px-4 lg:px-0"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D1D1F] tracking-[-0.02em] leading-[1.05] mb-3 md:mb-4">
                Always On,<br />24/7
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-[#86868B] font-light mb-5 md:mb-6 max-w-xl mx-auto lg:mx-0">
                {t.showcaseSections[1]?.body || "Never miss a call again. ANY AI answers instantly, even at 2 AM, capturing every opportunity while you sleep."}
              </p>
              <div className="mt-4 md:mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-[#007AFF] text-white rounded-full text-sm md:text-base font-semibold hover:bg-[#0056CC] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-fit"
                >
                  Get started
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Section 3: Seamless Integration */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            {/* Phone Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center lg:justify-end order-1 lg:order-1"
            >
              <div className="relative bg-[#1D1D1F] rounded-[2.5rem] sm:rounded-[3rem] md:rounded-[3.5rem] p-2.5 sm:p-3 md:p-3.5 shadow-2xl w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[340px]">
                <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden aspect-[9/19.5] relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#1D1D1F] rounded-b-2xl sm:rounded-b-3xl w-24 sm:w-28 md:w-32 h-5 sm:h-6 md:h-7 z-10" />
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
              className="flex flex-col justify-center order-2 lg:order-2 text-center lg:text-left px-4 lg:px-0"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D1D1F] tracking-[-0.02em] leading-[1.05] mb-3 md:mb-4">
                Seamless<br />Integration
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-[#86868B] font-light mb-5 md:mb-6 max-w-xl mx-auto lg:mx-0">
                {t.showcaseSections[2]?.body || "Syncs with your CRM, POS, and LINE automatically. Every call becomes actionable data in your existing workflow."}
              </p>
              <div className="mt-4 md:mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-[#FF3B30] text-white rounded-full text-sm md:text-base font-semibold hover:bg-[#D70015] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-fit"
                >
                  Start free trial
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
