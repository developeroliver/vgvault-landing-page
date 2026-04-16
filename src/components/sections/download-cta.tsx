"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLang } from "@/context/language";

const APP_STORE_URL = "https://apps.apple.com/app/id6746959960";

const content = {
  fr: {
    downloadOn: "Télécharger sur",
    heading: "Prêt à maîtriser votre collection ?",
    sub: "Téléchargez VGVault gratuitement. Votre bibliothèque gaming, enfin organisée.",
    footer: "Gratuit sur iOS. Aucun compte requis.",
  },
  en: {
    downloadOn: "Download on the",
    heading: "Ready to master your collection?",
    sub: "Download VGVault for free. Your gaming library, finally organized.",
    footer: "Free on iOS. No account required.",
  },
};

function DarkAppStoreButton({ href, downloadOn }: { href: string; downloadOn: string }) {
  const [hovered, setHovered] = useState(false);
  const smooth = { duration: 0.35, ease: [0.4, 0, 0.2, 1] as const };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative inline-flex transform-gpu items-center overflow-hidden rounded-xl sm:rounded-2xl px-4 py-2 sm:px-5 sm:py-2.5 cursor-pointer select-none no-underline transition-shadow duration-200"
      style={{
        background: "var(--surface)",
        border: "1px solid rgba(124, 58, 237, 0.25)",
        boxShadow: "rgba(8,8,15,0.4) 0px 4px 20px",
        willChange: "transform, box-shadow",
      }}
      whileHover={{
        boxShadow: "0 8px 32px rgba(124,58,237,0.25), 0 0 24px rgba(99,102,241,0.18)",
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
            <svg className="h-8 sm:h-10 w-auto" style={{ color: "#c4b5fd" }} viewBox="4 0 21 24" fill="currentColor">
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
              className="h-7 w-7 sm:h-8 sm:w-8"
              style={{ color: "#c4b5fd" }}
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
          <span
            className="text-[10px] sm:text-[12px] font-medium tracking-[0.01em]"
            style={{ color: "rgba(196, 181, 253, 0.60)" }}
          >
            {downloadOn}
          </span>
          <span
            className="text-[19px] sm:text-[24px] font-semibold tracking-[-0.01em] -mt-[3px] sm:-mt-[4px]"
            style={{ color: "#c4b5fd" }}
          >
            App Store
          </span>
        </div>
      </span>
    </motion.a>
  );
}

export function DownloadCta() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="download" className="py-20 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] leading-[1.1] font-bold mb-3"
        >
          {t.heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl font-medium text-text-secondary max-w-lg mx-auto mb-10"
        >
          {t.sub}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <DarkAppStoreButton href={APP_STORE_URL} downloadOn={t.downloadOn} />
          <p className="text-sm text-text-muted">{t.footer}</p>
        </motion.div>
      </div>
    </section>
  );
}
