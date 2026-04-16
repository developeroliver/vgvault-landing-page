"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/language";

const APP_STORE_URL = "https://apps.apple.com/app/id6746959960";

const content = {
  fr: {
    heading: "Simple et transparent",
    sub: "Commencez gratuitement. Passez à Pro quand vous êtes prêt.",
    free: {
      title: "Gratuit",
      tagline: "Parfait pour commencer",
      price: "0 €",
      forever: "pour toujours",
    },
    pro: {
      tagline: "Collection sans limite",
      included: "Tout inclus dans",
    },
    freeFeatures: [
      "Jusqu'à 10 jeux dans la collection",
      "Gestion complète (statut, note, plateforme)",
      "Suivi des prêts et emprunts",
      "Synchronisation iCloud",
      "Vue liste et grille",
    ],
    proFeatures: [
      "Jeux illimités dans la collection",
      "Statistiques complètes (heures, genres, plateformes)",
      "Graphiques et analyses avancées",
      "Suivi des trophées détaillé",
      "Toutes les futures fonctionnalités",
    ],
    plans: [
      { id: "monthly", label: "Mensuel", price: "1,99 €", period: "/ mois", badge: null },
      { id: "annual", label: "Annuel", price: "8,99 €", period: "/ an", badge: "MEILLEUR PRIX" },
      { id: "lifetime", label: "À vie", price: "14,99 €", period: "paiement unique", badge: "UNE SEULE FOIS" },
    ],
    footer: "Gérez et annulez vos abonnements depuis les réglages de l'App Store. Sans engagement.",
  },
  en: {
    heading: "Simple and transparent",
    sub: "Start for free. Go Pro when you're ready.",
    free: {
      title: "Free",
      tagline: "Perfect to get started",
      price: "$0",
      forever: "forever",
    },
    pro: {
      tagline: "Unlimited collection",
      included: "Everything included in",
    },
    freeFeatures: [
      "Up to 10 games in your collection",
      "Full management (status, rating, platform)",
      "Loan & borrow tracking",
      "iCloud sync",
      "List and grid view",
    ],
    proFeatures: [
      "Unlimited games in your collection",
      "Full statistics (hours, genres, platforms)",
      "Advanced charts and analytics",
      "Detailed trophy tracking",
      "All future features",
    ],
    plans: [
      { id: "monthly", label: "Monthly", price: "$1.99", period: "/ month", badge: null },
      { id: "annual", label: "Annual", price: "$11.99", period: "/ year", badge: "BEST VALUE" },
      { id: "lifetime", label: "Lifetime", price: "$24.99", period: "one-time payment", badge: "ONE TIME" },
    ],
    footer: "Manage and cancel subscriptions anytime from your App Store settings. No commitment.",
  },
};

function CheckIcon({ dim = false }: { dim?: boolean }) {
  return (
    <svg
      className={`mt-0.5 h-5 w-5 flex-shrink-0`}
      style={{ color: dim ? "rgba(244, 243, 247, 0.3)" : "#818cf8" }}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export function Pricing() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="pricing" className="relative py-16 lg:py-24 scroll-mt-20">
      <div className="mx-auto max-w-[960px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em]">
            {t.heading}
            <span className="text-text-muted font-normal text-[0.55em] block mt-1">
              {t.sub}
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 items-stretch mb-8">
          {/* Free plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="rounded-2xl border border-text-primary/10 p-6 md:p-8"
          >
            <h3 className="font-bold text-xl mb-1">{t.free.title}</h3>
            <p className="text-text-muted text-sm">{t.free.tagline}</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="font-black text-4xl">{t.free.price}</span>
              <span className="text-text-muted text-sm">{t.free.forever}</span>
            </div>
            <ul className="mt-6 space-y-3">
              {t.freeFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon dim />
                  <span className="text-text-secondary font-medium text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pro plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative rounded-2xl p-6 md:p-8"
            style={{
              border: "2px solid rgba(124, 58, 237, 0.35)",
              background: "linear-gradient(135deg, rgba(99,102,241,0.07), rgba(168,85,247,0.12))",
            }}
          >
            <span
              className="absolute top-0 right-6 -translate-y-1/2 text-xs font-bold px-3 py-1.5 rounded-full text-white shadow-sm"
              style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)" }}
            >
              Pro
            </span>
            <h3 className="font-bold text-xl mb-1">VGVault Pro</h3>
            <p className="text-text-muted text-sm">{t.pro.tagline}</p>

            <p className="mt-6 text-text-muted text-xs font-medium uppercase tracking-wide mb-3">
              {t.pro.included}
            </p>
            <ul className="space-y-3">
              {t.proFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-text-secondary font-medium text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Pricing tiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3"
        >
          {t.plans.map(({ id, label, price, period, badge }) => (
            <a
              key={id}
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl border p-5 text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                borderColor: id === "annual" ? "rgba(124, 58, 237, 0.45)" : "var(--border-color)",
                background: id === "annual" ? "rgba(124, 58, 237, 0.09)" : "transparent",
              }}
            >
              {badge && (
                <span
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-bold px-2.5 py-1 rounded-full"
                  style={
                    id === "annual"
                      ? { background: "linear-gradient(135deg, #6366f1, #a855f7)", color: "white" }
                      : { background: "var(--surface-hover)", color: "var(--text-muted)" }
                  }
                >
                  {badge}
                </span>
              )}
              <p className="text-text-secondary text-xs font-medium mb-2">{label}</p>
              <p className="text-2xl font-bold text-text-primary">{price}</p>
              <p className="text-text-muted text-xs mt-1">{period}</p>
            </a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-xs text-text-muted mt-6"
        >
          {t.footer}
        </motion.p>
      </div>
    </section>
  );
}
