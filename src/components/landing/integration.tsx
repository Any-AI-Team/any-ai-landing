"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

// App logos for arc display - popular productivity apps using worldvectorlogo
const appIntegrations = [
  { name: "GitHub", image: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
  { name: "Slack", image: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" },
  { name: "Gmail", image: "https://images.icon-icons.com/2631/PNG/512/gmail_new_logo_icon_159149.png" },
  { name: "Notion", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/960px-Notion-logo.svg.png" },
  { name: "VS Code", image: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" },
  { name: "Wongnai", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAlMnMmv-3ZFTm0Eya4I_U_t6835X7q8GLig&s" },
  { name: "Messenger", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Facebook_Messenger_logo_2025.svg/960px-Facebook_Messenger_logo_2025.svg.png" },
  { name: "Whatapps", image: "https://png.pngtree.com/png-vector/20221018/ourlarge/pngtree-whatsapp-icon-png-image_6315990.png" },
  { name: "Line", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/500px-LINE_logo.svg.png" },
  { name: "Zoom", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz1gPSRWMMM1ecDUUOMOoqkXbHo6fq8nUuiA&s" },
  { name: "Teams", image: "https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg" },
  { name: "Asana", image: "https://cdn.worldvectorlogo.com/logos/asana-logo.svg" },
  { name: "Jira", image: "https://cdn.worldvectorlogo.com/logos/jira-3.svg" },
  { name: "gg-drive", image: "https://mailmeteor.com/logos/assets/PNG/Google_Sheets_Logo_512px.png" },
  { name: "gg-docs", image: "https://mailmeteor.com/logos/assets/PNG/Google_Docs_Logo_512px.png" },
  { name: "chococrm", image: "https://chococrm.com/wp-content/uploads/2023/10/Logo.png" },
  { name: "Airtable", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSELyDtdPOkKFXHvvZuW5tFMVJeyOACW-dn4A&s" },
  { name: "Loyverse", image: "https://leadsbridge.com/wp-content/themes/leadsbridge/img/integration-lg-logos/logo1022.png" },
];

export const Integration = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="pt-20 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-background to-muted/20 overflow-hidden" id="integration" aria-label="ANYCALL เชื่อมต่อกับ CRM และแอปธุรกิจ">
      <div className="section-container">
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
          
          {/* Main Visual Section with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-5xl h-[500px] md:h-[600px] mb-8"
          >
            {/* Glassmorphism container */}
            <div className="absolute inset-0 bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl rounded-[3rem] shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden">
              
              {/* Ferris Wheel Container - The rotating "wheel" - Fixed in center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <motion.div
                  className="relative flex items-center justify-center"
                  style={{
                  width: '700px',
                  height: '700px',
                  }}
                  animate={{
                  rotate: 360,
                  }}
                  transition={{
                  duration: 200,
                  repeat: Infinity,
                  ease: "linear",
                  }}
                >
                  {/* Individual Icons - Orbit around center point */}
                  {appIntegrations.map((app, index) => {
                  const totalIcons = appIntegrations.length;
                  const angle = (index * 360) / totalIcons;
                  const radius = 400; // Distance from center

                  return (
                    <motion.div
                    key={app.name}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                      transformOrigin: '0 0',
                      transform: `rotate(${angle}deg) translateX(${radius}px)`,
                    }}
                    initial={{ 
                      transform: `rotate(${angle}deg) translateX(0px)`,
                      opacity: 0,
                    }}
                    animate={isInView ? {
                      transform: `rotate(${angle}deg) translateX(${radius}px)`,
                      opacity: 1,
                    } : {}}
                    transition={{
                      transform: { 
                      duration: 1.2, 
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 100,
                      },
                      opacity: { duration: 0.8, delay: index * 0.05 }
                    }}
                    >
                    {/* Icon container - centered on orbit point */}
                    <div className="relative -translate-x-1/2 -translate-y-1/2">
                      <div className="relative w-16 h-16 md:w-18 md:h-18 lg:w-24 lg:h-24 rounded-2xl shadow-xl backdrop-blur-sm border-2 border-white/40 dark:border-gray-700/40 overflow-hidden bg-white dark:bg-gray-800">
                      <Image
                        src={app.image}
                        alt={`ANYCALL เชื่อมต่อ ${app.name} — AI Calling Agent integration`}
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                      </div>
                    </div>
                    </motion.div>
                  );
                  })}
                </motion.div>
                </div>

              {/* Center Text Content - Blur-in Animation */}
              <div className="absolute top-[52%] left-1/2 -translate-x-1/2 z-20 w-full max-w-2xl px-8">
                {/* Main Headline with Staggered Blur-In */}
                <motion.div
                  initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                  animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-2">
                    <span className="block text-5xl">{t.integration.headline}</span>
                  </h2>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                  animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8">
                    <span className="text-foreground">{t.integration.with} </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink">
                      CRM
                    </span>
                  </h2>
                </motion.div>

                {/* Voice Wave Pill Button with Expand on Hover */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1, type: "spring", stiffness: 200 }}
                  className="flex justify-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.08, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
                    className="relative bg-black dark:bg-white rounded-full px-6 py-3.5 flex items-center gap-3 shadow-2xl cursor-pointer overflow-hidden border border-white/10"
                  >
                    {/* Blue Chat/Message Icon */}
                    <div className="w-5 h-5 bg-blue-500 rounded-md flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3 1h10v7H5V6z"/>
                      </svg>
                    </div>
                    
                    {/* Animated Voice Waveform Dots */}
                    <div className="flex items-center gap-1">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1 bg-white dark:bg-black rounded-full"
                          animate={{
                            height: [8, 20, 8],
                          }}
                          transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            delay: i * 0.15,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Subtitle Below */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl px-4"
          >
            {t.integration.subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
};
