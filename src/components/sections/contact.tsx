"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/language";

const CONTACT_EMAIL = "olivier.codes@gmail.com";

const content = {
  fr: {
    heading: "Parlons-en",
    sub: "Bug, idée de fonctionnalité, ou juste envie de dire bonjour ? Je lis chaque message.",
    cta: "Envoyer un message",
  },
  en: {
    heading: "Let's talk",
    sub: "Bug, feature idea, or just want to say hi? I read every message.",
    cta: "Send a message",
  },
};

export function Contact() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="contact" className="relative py-32 scroll-mt-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em]"
        >
          {t.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-lg text-text-secondary"
        >
          {t.sub}
        </motion.p>

        <motion.a
          href={`mailto:${CONTACT_EMAIL}`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg"
          style={{
            background: "linear-gradient(135deg, #6366f1, #a855f7)",
            boxShadow: "0 4px 20px rgba(124, 58, 237, 0.25)",
          }}
          whileHover={{
            boxShadow: "0 8px 30px rgba(124, 58, 237, 0.40)",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          {t.cta}
        </motion.a>

      </div>
    </section>
  );
}
