"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import bgCTA from "@/assets/BG_main.webp";
import { useLanguage } from "@/contexts/LanguageContext";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: t.contact.form.successTitle,
      description: t.contact.form.successDesc,
    });

    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      details: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative pt-16 pb-24 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${bgCTA.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/0 via-background/0 to-background/0" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="text-4xl md:text-h2 text-white mb-4">
              {t.contact.title}</h2>
            <p className="text-lg text-white/90">
              {t.contact.subtitle}
            </p>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card/95 backdrop-blur-lg rounded-3xl p-8 md:p-10 shadow-2xl border border-border/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  <Label htmlFor="firstName" className="text-foreground">
                    {t.contact.form.firstName}
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-background/50 border-2 border-border/50 transition-colors hover:border-[#6E6E73] focus:border-[#6E6E73] outline-none ring-0 focus:ring-0 focus:outline-none focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder={t.contact.form.firstNamePlaceholder}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.35 }}
                >
                  <Label htmlFor="lastName" className="text-foreground">
                    {t.contact.form.lastName}
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-background/50 border-2 border-border/50 transition-colors hover:border-[#6E6E73] focus:border-[#6E6E73] outline-none ring-0 focus:ring-0 focus:outline-none focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder={t.contact.form.lastNamePlaceholder}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <Label htmlFor="company" className="text-foreground">
                    {t.contact.form.company}
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-2 bg-background/50 border-2 border-border/50 transition-colors hover:border-[#6E6E73] focus:border-[#6E6E73] outline-none ring-0 focus:ring-0 focus:outline-none focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder={t.contact.form.companyPlaceholder}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.45 }}
                >
                  <Label htmlFor="email" className="text-foreground">
                    {t.contact.form.email}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-background/50 border-2 border-border/50 transition-colors hover:border-[#6E6E73] focus:border-[#6E6E73] outline-none ring-0 focus:ring-0 focus:outline-none focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="md:col-span-2"
                >
                  <Label htmlFor="phone" className="text-foreground">
                    {t.contact.form.phone}
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 bg-background/50 border-2 border-border/50 transition-colors hover:border-[#6E6E73] focus:border-[#6E6E73] outline-none ring-0 focus:ring-0 focus:outline-none focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder={t.contact.form.phonePlaceholder}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.55 }}
                  className="md:col-span-2"
                >
                  <Label htmlFor="details" className="text-foreground">
                    {t.contact.form.details}
                  </Label>
                  <Textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={4}
                    className="mt-2 bg-background/50 border-2 border-border/50 transition-colors hover:border-[#6E6E73] focus:border-[#6E6E73] outline-none ring-0 focus:ring-0 focus:outline-none focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
                    placeholder={t.contact.form.detailsPlaceholder}
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-pill bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t.contact.form.sending}
                    </>
                  ) : (
                    t.contact.form.submit
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
