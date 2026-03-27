"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Lock } from "lucide-react";
import Link from "next/link";

export const DataPrivacy = () => {
  const { t } = useLanguage();

  return (
    <section className="section-container section-spacing" id="security">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-900 px-8 py-16 md:px-16 md:py-24">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl" />
        </div>

        <div className="relative grid md:grid-cols-2 gap-12 items-center">
          {/* Icon Side */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              {/* Glow effect circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-brand-blue/20 rounded-full blur-2xl animate-pulse" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-brand-purple/20 rounded-full blur-xl" />
              </div>
              
              {/* Lock icon */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-full p-12 border border-white/10 shadow-2xl">
                <Lock className="w-24 h-24 text-white" strokeWidth={1.5} />
                
                {/* Decorative dots */}
                <div className="absolute top-8 right-4 w-2 h-2 bg-brand-cyan rounded-full animate-pulse" />
                <div className="absolute bottom-12 left-8 w-2 h-2 bg-brand-blue rounded-full animate-pulse delay-75" />
                <div className="absolute top-16 left-12 w-1.5 h-1.5 bg-brand-purple rounded-full animate-pulse delay-150" />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {t.dataPrivacy.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              {t.dataPrivacy.subtitle}
            </p>
            <Link
              href="/privacy"
              className="inline-block text-white text-lg font-medium border-b-2 border-white pb-1 hover:border-brand-cyan hover:text-brand-cyan transition-colors"
            >
              {t.dataPrivacy.learnMore}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
