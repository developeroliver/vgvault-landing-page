"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useSplashDone } from "@/components/ui/splash-screen";
import { useLang } from "@/context/language";

const APP_STORE_URL = "https://apps.apple.com/app/id6746959960";

const content = {
  fr: {
    links: [
      { href: "#features", label: "Fonctionnalités" },
      { href: "#pricing", label: "Tarifs" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Contact" },
    ],
    cta: "Obtenir l'app",
  },
  en: {
    links: [
      { href: "#features", label: "Features" },
      { href: "#pricing", label: "Pricing" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Contact" },
    ],
    cta: "Get the app",
  },
};

export function Navbar() {
  const ready = useSplashDone();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const { lang, setLang } = useLang();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const { links, cta } = content[lang];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={ready ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "bg-background/80 border-b border-border-custom shadow-lg shadow-black/10"
          : "bg-background/60"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <Image src="/icon.png" alt="VGVault" width={36} height={36} className="rounded-xl" />
            <span className="text-xl font-bold text-text-primary tracking-tight">
              VGVault
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Language toggle */}
            <div className="flex items-center gap-1 rounded-full border border-border-custom p-0.5">
              <button
                onClick={() => setLang("fr")}
                className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all cursor-pointer ${
                  lang === "fr"
                    ? "bg-accent text-white"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all cursor-pointer ${
                  lang === "en"
                    ? "bg-accent text-white"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-5 py-2 text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg hover:shadow-accent/30"
              style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)" }}
            >
              {cta}
            </a>
          </div>

          {/* Mobile right side */}
          <div className="md:hidden flex items-center gap-3">
            <div className="flex items-center gap-0.5 rounded-full border border-border-custom p-0.5">
              <button
                onClick={() => setLang("fr")}
                className={`rounded-full px-2 py-0.5 text-xs font-medium transition-all cursor-pointer ${
                  lang === "fr" ? "bg-accent text-white" : "text-text-secondary"
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-2 py-0.5 text-xs font-medium transition-all cursor-pointer ${
                  lang === "en" ? "bg-accent text-white" : "text-text-secondary"
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex flex-col gap-1.5 p-2 cursor-pointer"
              aria-label="Menu"
            >
              <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block h-0.5 w-6 bg-text-primary" />
              <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-0.5 w-6 bg-text-primary" />
              <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block h-0.5 w-6 bg-text-primary" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden md:hidden"
        >
          <div className="flex flex-col gap-4 pt-6 pb-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-5 py-2 text-sm font-semibold text-white w-fit"
              style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)" }}
            >
              {cta}
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
