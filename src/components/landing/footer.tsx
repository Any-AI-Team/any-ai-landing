import logoColor from "@/assets/logo_color.png";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  const { language, t } = useLanguage();

  const footerLinks = language === 'TH' ? [
    { label: "แพลตฟอร์ม", href: "/#platform" },
    { label: "กรณีการใช้งาน", href: "/#use-cases" },
    { label: "ติดต่อเรา", href: "/contact" },
  ] : [
    { label: "Platform", href: "/#platform" },
    { label: "Use case", href: "/#use-cases" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="md:h-[150px] bg-background border-t border-border/50 flex flex-col justify-center py-8 md:py-0">
      <div className="section-container w-full h-full flex flex-col justify-between py-8">
        <div className="relative flex flex-col md:flex-row items-center justify-center w-full">
          {/* Logo */}
          <Link
            href="/"
            className="mb-8 md:mb-0 md:absolute md:left-0 md:top-2"
          >
            <Image src={logoColor} alt="ANYCALL" className="h-6 w-auto" />
          </Link>

          {/* Links - Centered */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-24">
            {footerLinks.map((link) => (
              <div key={link.label} className="flex flex-col items-center md:items-start">
                <Link
                  href={link.href}
                  className="text-foreground transition-colors text-base font-medium hover:text-primary"
                >
                  {link.label}
                </Link>
                {(link.label === "Platform" || link.label === "แพลตฟอร์ม") && <span className="text-xs text-muted-foreground mt-1">ANYCALL</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p className="text-sm text-center text-foreground font-medium mt-8 md:mt-auto">
          © 2026 ANY. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};
