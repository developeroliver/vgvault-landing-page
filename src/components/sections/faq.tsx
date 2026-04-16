"use client";

import { motion } from "framer-motion";
import { FaqItem } from "@/components/ui/faq-item";
import { useLang } from "@/context/language";

const content = {
  fr: {
    heading: "Questions fréquentes",
    items: [
      {
        question: "Mes données sont-elles stockées sur vos serveurs ?",
        answer: "Non. VGVault fonctionne entièrement en local sur votre appareil. Vos données ne transitent jamais par nos serveurs. La synchronisation iCloud est optionnelle et passe directement par votre compte Apple, auquel nous n'avons aucun accès.",
      },
      {
        question: "Comment fonctionne la synchronisation iCloud ?",
        answer: "VGVault utilise CloudKit d'Apple. Votre collection se synchronise entre tous vos appareils Apple (iPhone, iPad, Mac) via votre iCloud personnel. La synchronisation est transparente et automatique — nous ne voyons jamais vos données.",
      },
      {
        question: "Que se passe-t-il si je dépasse la limite de 10 jeux en version gratuite ?",
        answer: "Vous pouvez toujours consulter et gérer vos jeux existants. L'ajout de nouveaux jeux au-delà de 10 nécessite VGVault Pro. Vos données ne sont jamais supprimées automatiquement.",
      },
      {
        question: "Le suivi des prêts envoie-t-il des notifications ?",
        answer: "Oui. VGVault peut vous envoyer des rappels locaux lorsqu'un jeu prêté approche de sa date de retour, ou lorsqu'un jeu emprunté doit être rendu. Tout se fait localement, sans serveur.",
      },
      {
        question: "Puis-je annuler mon abonnement Pro à tout moment ?",
        answer: "Oui, à tout moment depuis les réglages d'abonnement de l'App Store. Sans frais ni pénalité. Pro reste actif jusqu'à la fin de la période en cours. Le plan À vie est un achat unique sans abonnement.",
      },
      {
        question: "Quels appareils et plateformes de jeux sont supportés ?",
        answer: "VGVault tourne sur iPhone et iPad sous iOS 17+. Pour les jeux, il supporte PS5, PS4, PS3, PS2, Xbox Series, Xbox One, Xbox 360, Nintendo Switch, Wii U, 3DS, PC (Steam & Epic), Mobile, Rétro et plus.",
      },
    ],
  },
  en: {
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "Is my data stored on your servers?",
        answer: "No. VGVault runs entirely locally on your device. Your data never passes through our servers. iCloud sync is optional and goes directly through your Apple account, which we have no access to.",
      },
      {
        question: "How does iCloud sync work?",
        answer: "VGVault uses Apple's CloudKit. Your collection syncs between all your Apple devices (iPhone, iPad, Mac) via your personal iCloud. Sync is transparent and automatic — we never see your data.",
      },
      {
        question: "What happens if I exceed the 10-game limit in the free version?",
        answer: "You can still view and manage your existing games. Adding new games beyond 10 requires VGVault Pro. Your data is never automatically deleted.",
      },
      {
        question: "Does loan tracking send notifications?",
        answer: "Yes. VGVault can send you local reminders when a loaned game is approaching its return date, or when a borrowed game needs to be returned. Everything is done locally, no server needed.",
      },
      {
        question: "Can I cancel my Pro subscription at any time?",
        answer: "Yes, at any time from your App Store subscription settings. No fees or penalties. Pro remains active until the end of the current billing period. The Lifetime plan is a one-time purchase with no subscription.",
      },
      {
        question: "Which devices and gaming platforms are supported?",
        answer: "VGVault runs on iPhone and iPad with iOS 17+. For games, it supports PS5, PS4, PS3, PS2, Xbox Series, Xbox One, Xbox 360, Nintendo Switch, Wii U, 3DS, PC (Steam & Epic), Mobile, Retro, and more.",
      },
    ],
  },
};

export function Faq() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="faq" className="relative pt-2 pb-6 lg:pt-14 scroll-mt-20">
      <div className="mx-auto max-w-[720px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em]">
            {t.heading}
          </h2>
        </motion.div>

        <div className="space-y-0">
          {t.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <FaqItem question={item.question} answer={item.answer} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
