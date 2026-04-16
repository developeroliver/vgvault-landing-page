"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/language";

const collectionIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="7" height="9" rx="1" />
    <rect x="9" y="3" width="7" height="9" rx="1" />
    <rect x="16" y="3" width="6" height="9" rx="1" />
    <path d="M2 17h20M2 21h20" />
  </svg>
);

const statsIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="M7 16l4-5 4 3 5-7" />
  </svg>
);

const lendingIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const filterIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

const syncIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const trophyIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
  </svg>
);

const content = {
  fr: {
    heading: "Pensé pour les gamers, conçu pour la simplicité",
    sub: "Chaque fonctionnalité est là pour vous aider à mieux gérer et profiter de votre collection.",
    features: [
      {
        key: "collection",
        icon: collectionIcon,
        title: "Collection complète",
        text: "Jeux PS5, Xbox, Switch, PC, Rétro — cataloguez toute votre bibliothèque avec pochette, synopsis, plateforme, statut et note personnelle.",
      },
      {
        key: "stats",
        icon: statsIcon,
        title: "Statistiques détaillées",
        text: "Heures jouées, taux de complétion, genres favoris, répartition par plateforme — visualisez votre bibliothèque sous tous les angles.",
      },
      {
        key: "lending",
        icon: lendingIcon,
        title: "Suivi des prêts",
        text: "Prêtez et empruntez en toute sérénité. Notifications de retour, liste des jeux en cours de prêt, alertes de retard — ne perdez plus un seul jeu.",
      },
      {
        key: "filter",
        icon: filterIcon,
        title: "Filtres & recherche",
        text: "Filtrez par genre, plateforme, statut, difficulté ou favoris. Trouvez instantanément le jeu que vous cherchez dans votre collection.",
      },
      {
        key: "sync",
        icon: syncIcon,
        title: "Sync iCloud privée",
        text: "iPhone, iPad, Mac — votre collection synchronisée via CloudKit dans votre iCloud personnel. Nous n'y avons jamais accès.",
      },
      {
        key: "trophy",
        icon: trophyIcon,
        title: "Trophées & progression",
        text: "Suivez vos trophées Bronze, Argent, Or et Platine. Enregistrez votre progression et vos heures de jeu pour chaque titre.",
      },
    ],
  },
  en: {
    heading: "Built for gamers, designed for simplicity",
    sub: "Every feature is designed to help you better manage and enjoy your collection.",
    features: [
      {
        key: "collection",
        icon: collectionIcon,
        title: "Complete collection",
        text: "PS5, Xbox, Switch, PC, Retro — catalog your entire library with cover art, synopsis, platform, status, and personal rating.",
      },
      {
        key: "stats",
        icon: statsIcon,
        title: "Detailed statistics",
        text: "Hours played, completion rate, favorite genres, platform breakdown — visualize your library from every angle.",
      },
      {
        key: "lending",
        icon: lendingIcon,
        title: "Loan tracker",
        text: "Lend and borrow with confidence. Return reminders, ongoing loan list, overdue alerts — never lose a game again.",
      },
      {
        key: "filter",
        icon: filterIcon,
        title: "Filters & search",
        text: "Filter by genre, platform, status, difficulty, or favorites. Instantly find any game in your collection.",
      },
      {
        key: "sync",
        icon: syncIcon,
        title: "Private iCloud sync",
        text: "iPhone, iPad, Mac — your collection synced via CloudKit in your personal iCloud. We never have access.",
      },
      {
        key: "trophy",
        icon: trophyIcon,
        title: "Trophies & progress",
        text: "Track your Bronze, Silver, Gold, and Platinum trophies. Log your progress and playtime for every title.",
      },
    ],
  },
};

export function Features() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="features" className="relative scroll-mt-20">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent z-[1]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent z-[1]" />

      <div className="relative z-[2] mx-auto max-w-4xl px-6 py-32">
        <motion.h2
          className="text-center font-bold text-text-primary mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          {t.heading}
        </motion.h2>
        <motion.p
          className="text-center text-text-secondary mb-14 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t.sub}
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {t.features.map(({ key, title, text, icon }, index) => (
            <motion.div
              key={key}
              className="group cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.02 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
              }}
            >
              <div className="relative rounded-2xl h-full">
                <div
                  className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(250px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(124,58,237,0.12), rgba(99,102,241,0.06) 40%, transparent 70%)`,
                  }}
                />
                <div
                  className="relative rounded-2xl p-5 h-full text-center border transition-all duration-300"
                  style={{
                    background: "var(--surface-hover)",
                    borderColor: "rgba(124, 58, 237, 0.12)",
                  }}
                >
                  <div
                    className="w-10 h-10 mb-3 mx-auto transition-transform duration-300 group-hover:scale-110"
                    style={{ color: "#818cf8" }}
                  >
                    {icon}
                  </div>
                  <h3 className="font-semibold text-text-primary text-sm mb-1">{title}</h3>
                  <p className="text-text-secondary text-xs">{text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
