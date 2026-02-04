"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "next/navigation";

export const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, language } = useLanguage();
  const router = useRouter();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const pricingPlans = language === 'TH' ? [
    {
      name: "ฟรี",
      price: "฿0",
      period: "/ตลอดกาล",
      description: "ไม่ต้องใช้บัตรเครดิต",
      tagline: "เหมาะสำหรับการทดลองใช้งาน",
      usage: "100 สาย / สัปดาห์",
      features: [
        "โหมด Dictation",
        "โหมด Instruct",
        "Custom vocabulary",
        "ใช้งานได้ทุกแอป"
      ],
      buttonText: "เริ่มใช้งานฟรี",
      highlighted: false
    },
    {
      name: "Pro",
      price: billingCycle === "monthly" ? "฿990" : "฿790",
      period: billingCycle === "monthly" ? "/เดือน" : "/เดือน",
      description: billingCycle === "annual" ? "เรียกเก็บรายปี" : "เรียกเก็บรายเดือน",
      tagline: "สำหรับผู้ใช้งานมืออาชีพ",
      usage: "ไม่จำกัดการใช้งาน",
      features: [
        "ทุกฟีเจอร์ใน Free",
        "ไม่จำกัดการใช้งาน",
        "การสนับสนุนแบบพิเศษ",
        "ฟีเจอร์ทีม"
      ],
      buttonText: "เลือกแพ็คเกจ Pro",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "ราคาพิเศษ",
      period: "",
      description: "เรียกเก็บรายปี",
      tagline: "สำหรับทีมและองค์กร",
      usage: "ปรับแต่งตามความต้องการ",
      features: [
        "ทุกฟีเจอร์ใน Pro",
        "SOC 2 Type II & ISO 27001",
        "HIPAA compliance",
        "SSO / SAML"
      ],
      buttonText: "ติดต่อฝ่ายขาย",
      highlighted: false
    }
  ] : [
    {
      name: "Free",
      price: "$0",
      period: "/forever",
      description: "no credit card required",
      tagline: "Perfect for trying out VoiceOS",
      usage: "100 usage / week",
      features: [
        "Dictation Mode",
        "Instruct Mode",
        "Custom vocabulary",
        "Works in every app"
      ],
      buttonText: "Start Free",
      highlighted: false
    },
    {
      name: "Pro",
      price: billingCycle === "monthly" ? "$10" : "$8",
      period: "/per month",
      description: billingCycle === "annual" ? "billed annually" : "billed monthly",
      tagline: "For power users and professionals",
      usage: "Unlimited usage",
      features: [
        "Everything in Free",
        "Unlimited usage",
        "Priority support",
        "Team features"
      ],
      buttonText: "Choose Pro",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "billed annually",
      tagline: "For teams and organizations",
      usage: "Tailored to your needs",
      features: [
        "Everything in Pro",
        "SOC 2 Type II & ISO 27001",
        "HIPAA compliance",
        "SSO / SAML"
      ],
      buttonText: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-section-bg" id="pricing">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-h2 text-foreground mb-4">
            {language === 'TH' ? 'แพ็คเกจราคา' : 'Pricing'}
          </h2>
          <p className="text-description mb-8">
            {language === 'TH' ? 'ทดลองใช้ฟรี ไม่ต้องใช้บัตรเครดิต' : 'Try for free, no credit card required'}
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-sm border border-border/50">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-foreground text-white"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {language === 'TH' ? 'รายเดือน' : 'Monthly'}
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "annual"
                  ? "bg-foreground text-white"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {language === 'TH' ? 'รายปี' : 'Annual'}
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              <div
                className={`bg-white rounded-[32px] p-8 md:p-10 h-full hover:shadow-[0_8px_16px_rgba(0,0,0,0.12),0_4px_8px_rgba(0,0,0,0.08)] transition-all duration-300 border-2 ${
                  plan.highlighted
                    ? "border-primary shadow-[0_8px_16px_rgba(0,0,0,0.12),0_4px_8px_rgba(0,0,0,0.08)] relative"
                    : "border-border/30"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    {language === 'TH' ? 'แนะนำ' : 'Recommended'}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl md:text-5xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {plan.description}
                  </p>
                  <p className="text-details mb-4">{plan.tagline}</p>
                  
                  <div className="inline-block bg-section-bg px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-foreground">
                      {plan.usage}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-details">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => router.push("/contact")}
                  className={`w-full rounded-full py-6 text-base font-medium transition-all ${
                    plan.highlighted
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
