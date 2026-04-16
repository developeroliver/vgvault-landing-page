"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useSplashDone } from "@/components/ui/splash-screen";
import { useLang } from "@/context/language";

const ease = [0.21, 0.47, 0.32, 0.98] as const;
const APP_STORE_URL = "https://apps.apple.com/app/id6746959960";

const content = {
  fr: {
    downloadOn: "Télécharger sur",
    titleStart: "Votre collection de jeux.",
    titleItalic: "Maîtrisée.",
    subtitle:
      "Organisez votre bibliothèque gaming, suivez vos prêts, consultez vos statistiques — tout en un. Synchronisé sur tous vos appareils Apple via iCloud.",
    scroll: "Découvrir",
  },
  en: {
    downloadOn: "Download on the",
    titleStart: "Your game collection.",
    titleItalic: "Mastered.",
    subtitle:
      "Organize your gaming library, track your loans, browse your stats — all in one place. Synced across all your Apple devices via iCloud.",
    scroll: "Explore",
  },
};

function AppStoreButton({ href, downloadOn }: { href: string; downloadOn: string }) {
  const [hovered, setHovered] = useState(false);
  const smooth = { duration: 0.35, ease: [0.4, 0, 0.2, 1] as const };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative inline-flex transform-gpu items-center overflow-hidden rounded-xl sm:rounded-2xl bg-[#f4f3f7] px-4 py-2 sm:px-5 sm:py-2.5 cursor-pointer select-none no-underline transition-shadow duration-200"
      style={{
        boxShadow: "rgba(8,8,15,0.3) 0px 4px 20px",
        willChange: "transform, box-shadow",
      }}
      whileHover={{
        boxShadow: "0 8px 32px rgba(124,58,237,0.30), 0 0 24px rgba(99,102,241,0.20)",
      }}
    >
      <span className="flex items-center">
        <span className="relative flex h-8 w-8 shrink-0 items-center justify-center sm:h-10 sm:w-10">
          <motion.span
            initial={{ opacity: 1, scale: 1 }}
            animate={hovered ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
            transition={smooth}
            className="absolute inset-0 flex items-center justify-center"
          >
            <svg className="h-8 sm:h-10 w-auto text-[#08080f]" viewBox="4 0 21 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={hovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={smooth}
            className="absolute inset-0 flex items-center justify-center"
          >
            <svg
              className="h-7 w-7 sm:h-8 sm:w-8 text-[#08080f]"
              viewBox="-4 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7" />
              <path d="M8 7h9v9" />
            </svg>
          </motion.span>
        </span>
        <div className="ml-1.5 sm:ml-2 flex flex-col leading-tight">
          <span className="text-[10px] sm:text-[12px] font-medium text-[#08080f]/60 tracking-[0.01em]">
            {downloadOn}
          </span>
          <span className="text-[19px] sm:text-[24px] font-semibold text-[#08080f] tracking-[-0.01em] -mt-[3px] sm:-mt-[4px]">
            App Store
          </span>
        </div>
      </span>
    </motion.a>
  );
}

export function Hero() {
  const ready = useSplashDone();
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full blur-[160px]"
          style={{ background: "rgba(99, 102, 241, 0.10)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[130px]"
          style={{ background: "rgba(168, 85, 247, 0.07)" }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
        {/* App icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={ready ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="mb-10"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={ready ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 rounded-3xl blur-xl scale-125"
              style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.35), rgba(168,85,247,0.35))" }}
            />
            <Image
              src="/icon.png"
              alt="VGVault"
              width={96}
              height={96}
              className="relative rounded-3xl shadow-2xl"
              priority
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="mx-auto max-w-5xl text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.08] tracking-tight"
        >
          {t.titleStart}{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
            className="italic"
            style={{
              backgroundImage: "linear-gradient(135deg, #818cf8, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t.titleItalic}
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="mx-auto mt-10 max-w-xl text-lg text-text-secondary leading-relaxed md:text-xl"
        >
          {t.subtitle}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.7, ease }}
          className="mt-12"
        >
          <AppStoreButton href={APP_STORE_URL} downloadOn={t.downloadOn} />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease }}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-text-secondary/60">
            {t.scroll}
          </span>
          <motion.svg
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-accent/50"
          >
            <path d="M6 9l6 6 6-6" />
          </motion.svg>
        </motion.div>
      </div>

      {/* Preview screenshot */}
      <div className="relative z-10 mx-auto px-6 pb-32 flex justify-center min-h-[600px]">
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={ready ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.95 }}
          transition={{ duration: 1, delay: 0.9, ease }}
          className="relative"
          style={{ width: "min(95vw, 1100px)" }}
        >
          <Image
            src="/image.png"
            alt="VGVault app preview"
            width={1100}
            height={1300}
            className="relative mx-auto w-full object-contain"
            priority
            unoptimized
          />
        </motion.div>
      </div>
    </section>
  );
}
