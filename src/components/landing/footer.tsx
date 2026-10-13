import logoColor from "@/assets/logo_color.png";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";

export const Footer = () => {
  const { language, t } = useLanguage();

  const footerSections = language === 'TH' ? [
    {
      title: "ผลิตภัณฑ์",
      links: [
        { label: "ANYCALL", href: "/" },
        { label: "AI Call Center", href: "/ai-call-center" },
        { label: "ฟีเจอร์", href: "/#features" },
        { label: "กรณีการใช้งาน", href: "/use-cases" },
      ]
    },
    {
      title: "บริษัท",
      links: [
        { label: "เกี่ยวกับ AI Call Center", href: "/ai-call-center" },
        { label: "เปรียบเทียบกับ IVR", href: "/ai-call-center-vs-ivr" },
        { label: "บล็อก", href: "/blog" },
        { label: "ติดต่อเรา", href: "/contact" },
      ]
    },
    {
      title: "ทรัพยากร",
      links: [
        { label: "คำถามที่พบบ่อย", href: "/#faq" },
        { label: "บทความ AI Call Center", href: "/ai-call-center" },
        { label: "บล็อก", href: "/blog" },
        { label: "ศูนย์ติดต่อ", href: "/contact" },
      ]
    },
    {
      title: "กฎหมาย",
      links: [
        { label: "ความปลอดภัยของข้อมูล", href: "/security" },
        { label: "เงื่อนไขการให้บริการ", href: "/terms" },
        { label: "นโยบายคุกกี้", href: "/cookies" },
        { label: "PDPA", href: "/pdpa" },
      ]
    },
  ] : [
    {
      title: "Product",
      links: [
        { label: "ANYCALL", href: "/" },
        { label: "AI Call Center", href: "/ai-call-center" },
        { label: "Features", href: "/#features" },
        { label: "Use Cases", href: "/use-cases" },
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About AI Call Center", href: "/ai-call-center" },
        { label: "AI Call Center vs IVR", href: "/ai-call-center-vs-ivr" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "FAQ", href: "/#faq" },
        { label: "AI Call Center Guide", href: "/ai-call-center" },
        { label: "Blog", href: "/blog" },
        { label: "Contact Center", href: "/contact" },
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Data Security", href: "/security" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "PDPA Compliance", href: "/pdpa" },
      ]
    },
  ];

  const contactInfo = language === 'TH' ? [
    { icon: Mail, label: "any.ai.team@gmail.com" },
    { icon: Phone, label: "+66 63 248 4909" },
    { icon: MapPin, label: "กรุงเทพมหานคร, ประเทศไทย" },
  ] : [
    { icon: Mail, label: "any.ai.team@gmail.com" },
    { icon: Phone, label: "+66 63 248 4909" },
    { icon: MapPin, label: "Bangkok, Thailand" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/any-ai-thailand/", label: "LinkedIn" },
    { icon: Twitter, href: "https://www.instagram.com/any.ai.thailand/", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/any", label: "Facebook" },
    { icon: Youtube, href: "https://youtube.com/@any", label: "YouTube" },
  ];

  return (
    <footer className="bg-background border-t border-border/50" role="contentinfo" aria-label="ANYCALL footer navigation">
      <div className="section-container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12">
          {/* Brand & Contact Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image src={logoColor} alt="ANYCALL" className="h-8 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              {language === 'TH' 
                ? 'แพลตฟอร์ม AI Calling Agent ที่ช่วยให้ธุรกิจของคุณสื่อสารได้อย่างมีประสิทธิภาพตลอด 24/7'
                : 'AI-powered calling platform that helps your business communicate efficiently 24/7'}
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-border/50" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} ANY. {t.footer.rights}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
