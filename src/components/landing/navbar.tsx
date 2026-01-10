"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import logoColor from "@/assets/logo_color.png";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Menu, X, Globe, ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LANGUAGES } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";


export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const { language, setLanguage, navLinks, t } = useLanguage();

  const langRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close language dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToContact = () => {
    router.push("/contact");
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass shadow-sm" : "bg-white"
        }`}
    >
      <nav className="section-container relative flex items-center justify-between h-11 md:h-14">
        {/* Logo */}
        <Link
          href="/"
          className="cursor-pointer"
          onClick={() => {
            if (pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <Image
            src={logoColor}
            alt="ANY Logo"
            className="h-5 md:h-6 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setHoveredLink(link.label)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <Link
                href={link.href}
                onClick={(e) => {
                  if (link.children) e.preventDefault();
                  if (link.href === "/contact") {
                    e.preventDefault();
                    router.push("/contact");
                  }
                }}
                className={`text-foreground/80 hover:text-foreground transition-colors text-sm font-medium flex items-center gap-1 ${hoveredLink === link.label ? "text-foreground" : ""
                  }`}
              >
                {link.label}
                {link.children && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${hoveredLink === link.label ? "rotate-180" : ""
                      }`}
                  />
                )}
              </Link>

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {link.children && hoveredLink === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full pt-8 w-[400px]"
                  >
                    <div className={`${isScrolled ? "bg-background/95 backdrop-blur-xl" : "bg-white"} rounded-xl shadow-xl border border-border/50 p-2 overflow-hidden`}>
                      <div className="grid grid-cols-1 gap-2">
                        {link.children.map((child, childIndex) => (
                          <Link
                            key={child.label}
                            href={child.href}
                          // Note: Framer Motion interactions with Nextjs Link can be tricky directly if using specific props, but standard onClick works.
                          // We can use motion.a or wrap Link. Since Next.js Link passes props to children mostly or handles connection, 
                          // for simple cases `motion.create(Link)` is possible or just use a div wrapper.
                          // However, let's keep it simple: Use motion.div roughly or just standard styling if animation is complex.
                          // For this specific existing code, it puts animation on `motion.a`. 
                          // We can replace `motion.a` with `Link` wrapped in `motion.div` or `motion(Link)` if configured.
                          // Simplest: `motion.div` wrapping `Link`.
                          >
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: childIndex * 0.05,
                                duration: 0.3,
                                ease: "easeOut"
                              }}
                              onClick={(e: React.MouseEvent) => {
                                if (child.href === "/") {
                                  e.preventDefault();
                                  router.push("/");
                                  window.scrollTo({ top: 0, behavior: "smooth" });
                                }
                                setHoveredLink(null);
                              }}
                              className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors text-primary">
                                <child.icon className="w-5 h-5" />
                              </div>
                              <div>
                                <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                  {child.label}
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">
                                  {child.description}
                                </p>
                              </div>
                            </motion.div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Right Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <div
            className="relative"
            ref={langRef}
            onMouseEnter={() => setIsLangOpen(true)}
            onMouseLeave={() => setIsLangOpen(false)}
          >
            <div
              className="flex items-center gap-1 text-primary cursor-pointer hover:text-primary/80 transition-colors py-2"
            >
              <Globe className="w-5 h-5" />
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
            </div>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-0 pt-6 w-40 z-[60]"
                >
                  <div className={`${isScrolled ? "bg-background/95 backdrop-blur-xl" : "bg-white"} rounded-xl shadow-xl border border-border/50 p-1`}>
                    {LANGUAGES.map((lang, index) => (
                      <motion.button
                        key={lang.code}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.05,
                          duration: 0.3,
                          ease: "easeOut"
                        }}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className="w-full px-3 py-2.5 flex items-center justify-between text-sm text-foreground hover:bg-gray-50 transition-colors rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full overflow-hidden border border-gray-100 flex-shrink-0">
                            {/* Flags are usually strings (urls) in data.ts, need standard img or Image if imported */}
                            <img src={lang.flag} alt={lang.label} className="w-full h-full object-cover" />
                          </div>
                          <span>{lang.label}</span>
                        </div>
                        {language === lang.code && <Check className="w-4 h-4 text-primary" />}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-primary text-primary hover:bg-primary/5 hover:text-[#6E6E73] px-6 transition-colors w-[100px]"
          >
            {t.nav.login}
          </Button>

          <Button
            onClick={scrollToContact}
            size="sm"
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 w-[100px]"
          >
            {t.nav.signup}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden glass border-t border-border/50 overflow-hidden"
          >
            <div className="section-container py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      if (link.children) {
                        e.preventDefault();
                        return;
                      }
                      if (link.href === "/contact") {
                        e.preventDefault();
                        router.push("/contact");
                      }
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (index * 0.1), duration: 0.4 }}
                      className="text-foreground/80 hover:text-foreground transition-colors text-lg font-medium py-2 flex items-center justify-between"
                    >
                      {link.label}
                    </motion.div>
                  </Link>

                  {/* Mobile Submenu for Platform */}
                  {link.children && (
                    <div className="pl-4 flex flex-col gap-2 mt-2">
                      {link.children.map((child, childIndex) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + (childIndex * 0.1), duration: 0.3 }}
                            className="text-foreground/70 hover:text-primary py-2 text-base flex items-center gap-2"
                          >
                            <child.icon className="w-4 h-4" />
                            {child.label}
                          </motion.div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="flex flex-col gap-3 mt-2"
              >
                {/* Mobile Language Switcher */}
                <div className="flex flex-col gap-1 border-b border-border/50 pb-4 mb-2">
                  <div className="flex items-center gap-2 text-foreground/80 py-2">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="flex gap-4 pl-7">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`flex items-center gap-2 text-sm ${language === lang.code ? 'text-primary font-bold' : 'text-foreground/60'}`}
                      >
                        <div className="w-5 h-5 rounded-full overflow-hidden border border-gray-100 flex-shrink-0">
                          <img src={lang.flag} alt={lang.label} className="w-full h-full object-cover" />
                        </div>
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full w-full border-primary text-primary hover:bg-primary/5 hover:text-[#6E6E73] transition-colors"
                >
                  {t.nav.login}
                </Button>

                <Button
                  onClick={scrollToContact}
                  size="sm"
                  className="rounded-full bg-primary text-primary-foreground w-full"
                >
                  {t.nav.signup}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
