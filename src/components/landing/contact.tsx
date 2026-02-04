"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, AlertCircle } from "lucide-react";
import bgCTA from "@/assets/BG_main.webp";
import { useLanguage } from "@/contexts/LanguageContext";
import { contactFormSchema, type ContactFormData } from "@/lib/validation";
import { z } from "zod";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [rateLimitReset, setRateLimitReset] = useState<string | null>(null);
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
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
    const { name, value } = e.target;
    
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear field error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Client-side validation first
      const validationResult = contactFormSchema.safeParse(formData);
      
      if (!validationResult.success) {
        const fieldErrors: Record<string, string> = {};
        validationResult.error.issues.forEach((issue) => {
          const field = issue.path[0] as string;
          fieldErrors[field] = issue.message;
        });
        setErrors(fieldErrors);
        setIsSubmitting(false);
        return;
      }

      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.status === 429) {
        // Rate limited
        setIsRateLimited(true);
        setRateLimitReset(result.resetTime);
        toast({
          title: "Too Many Requests",
          description: "Please wait before submitting again.",
          variant: "destructive",
        });
      } else if (!response.ok) {
        // Validation or server error
        if (result.details) {
          const fieldErrors: Record<string, string> = {};
          result.details.forEach((detail: { field: string; message: string }) => {
            fieldErrors[detail.field] = detail.message;
          });
          setErrors(fieldErrors);
        } else {
          toast({
            title: "Error",
            description: result.error || "Something went wrong. Please try again.",
            variant: "destructive",
          });
        }
      } else {
        // Success
        toast({
          title: t.contact.form.successTitle,
          description: t.contact.form.successDesc,
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          phone: "",
          details: "",
        });
        setIsRateLimited(false);
        setRateLimitReset(null);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Network error. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                    className={`mt-2 bg-background/50 border-2 transition-colors hover:border-[#6E6E73] focus:border-[#6E6E73] outline-none ring-0 focus:ring-0 focus:outline-none focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed ${
                      errors.firstName ? 'border-red-500 focus:border-red-500' : 'border-border/50'
                    }`}
                    placeholder={t.contact.form.firstNamePlaceholder}
                  />
                  {errors.firstName && (
                    <div className="flex items-center gap-1 mt-1">
                      <AlertCircle className="h-4 w-4 text-red-500" />
                      <span className="text-sm text-red-500">{errors.firstName}</span>
                    </div>
                  )}
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
                    className={`mt-2 bg-background/50 border-2 transition-colors hover:border-[#6E6E73] focus:border-[#6E6E73] outline-none ring-0 focus:ring-0 focus:outline-none focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed ${
                      errors.lastName ? 'border-red-500 focus:border-red-500' : 'border-border/50'
                    }`}
                    placeholder={t.contact.form.lastNamePlaceholder}
                  />
                  {errors.lastName && (
                    <div className="flex items-center gap-1 mt-1">
                      <AlertCircle className="h-4 w-4 text-red-500" />
                      <span className="text-sm text-red-500">{errors.lastName}</span>
                    </div>
                  )}
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
                    required
                    className={`mt-2 bg-background/50 border-2 transition-colors hover:border-[#6E6E73] focus:border-[#6E6E73] outline-none ring-0 focus:ring-0 focus:outline-none focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed ${
                      errors.company ? 'border-red-500 focus:border-red-500' : 'border-border/50'
                    }`}
                    placeholder={t.contact.form.companyPlaceholder}
                  />
                  {errors.company && (
                    <div className="flex items-center gap-1 mt-1">
                      <AlertCircle className="h-4 w-4 text-red-500" />
                      <span className="text-sm text-red-500">{errors.company}</span>
                    </div>
                  )}
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
                    className={`mt-2 bg-background/50 border-2 transition-colors hover:border-[#6E6E73] focus:border-[#6E6E73] outline-none ring-0 focus:ring-0 focus:outline-none focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-border/50'
                    }`}
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                  {errors.email && (
                    <div className="flex items-center gap-1 mt-1">
                      <AlertCircle className="h-4 w-4 text-red-500" />
                      <span className="text-sm text-red-500">{errors.email}</span>
                    </div>
                  )}
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
                    required
                    className={`mt-2 bg-background/50 border-2 transition-colors hover:border-[#6E6E73] focus:border-[#6E6E73] outline-none ring-0 focus:ring-0 focus:outline-none focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed ${
                      errors.phone ? 'border-red-500 focus:border-red-500' : 'border-border/50'
                    }`}
                    placeholder={t.contact.form.phonePlaceholder}
                  />
                  {errors.phone && (
                    <div className="flex items-center gap-1 mt-1">
                      <AlertCircle className="h-4 w-4 text-red-500" />
                      <span className="text-sm text-red-500">{errors.phone}</span>
                    </div>
                  )}
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
                    required
                    className={`mt-2 bg-background/50 border-2 transition-colors hover:border-[#6E6E73] focus:border-[#6E6E73] outline-none ring-0 focus:ring-0 focus:outline-none focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 resize-none ${
                      errors.details ? 'border-red-500 focus:border-red-500' : 'border-border/50'
                    }`}
                    placeholder={t.contact.form.detailsPlaceholder}
                  />
                  {errors.details && (
                    <div className="flex items-center gap-1 mt-1">
                      <AlertCircle className="h-4 w-4 text-red-500" />
                      <span className="text-sm text-red-500">{errors.details}</span>
                    </div>
                  )}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                {isRateLimited && (
                  <div className="mb-4 p-3 bg-orange-100 border border-orange-300 rounded-lg">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-orange-600" />
                      <span className="text-sm text-orange-800">
                        Rate limit exceeded. Please wait before submitting again.
                        {rateLimitReset && (
                          <> Reset at: {new Date(rateLimitReset).toLocaleTimeString()}</>
                        )}
                      </span>
                    </div>
                  </div>
                )}
                <Button
                  type="submit"
                  disabled={isSubmitting || isRateLimited}
                  className="w-full btn-pill bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base disabled:opacity-50"
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
