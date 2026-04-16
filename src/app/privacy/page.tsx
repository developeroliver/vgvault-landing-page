import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — VGVault",
  description: "Politique de confidentialité de VGVault. Vos données restent sur votre appareil.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors mb-12"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Retour
        </Link>

        <h1 className="text-4xl font-bold mb-2">Politique de confidentialité</h1>
        <p className="text-text-muted text-sm mb-12">Dernière mise à jour : avril 2025</p>

        <div className="space-y-10 text-text-secondary leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">Résumé</h2>
            <p>
              VGVault ne collecte, ne stocke et ne transmet aucune donnée personnelle sur ses propres serveurs.
              Toutes vos données (collection de jeux, prêts, notes, statistiques) restent sur votre appareil.
              La synchronisation iCloud est optionnelle et passe exclusivement par votre compte Apple.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">Données stockées localement</h2>
            <p>VGVault stocke les données suivantes uniquement sur votre appareil :</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Votre collection de jeux (titres, plateformes, statuts, notes, pochettes)</li>
              <li>Données de prêts et d'emprunts (noms, dates)</li>
              <li>Notes personnelles sur chaque jeu</li>
              <li>Statistiques de jeu (heures jouées, progression, trophées)</li>
              <li>Préférences d'affichage et de thème</li>
            </ul>
            <p className="mt-3">
              Ces données ne quittent jamais votre appareil sauf via iCloud (si activé par vous).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">Synchronisation iCloud</h2>
            <p>
              Si vous activez la synchronisation, VGVault utilise CloudKit d'Apple pour synchroniser votre
              collection entre vos appareils Apple. Ces données sont stockées dans votre iCloud privé —
              nous n'y avons aucun accès. La synchronisation peut être désactivée à tout moment
              depuis les réglages iCloud de votre appareil.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">Services tiers</h2>
            <p>VGVault intègre les services tiers suivants :</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>
                <strong className="text-text-primary">TelemetryDeck</strong> — Analytics d'utilisation anonymes
                et agrégées (aucune donnée personnelle identifiable). Voir{" "}
                <a href="https://telemetrydeck.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-accent-light hover:underline">
                  leur politique de confidentialité
                </a>.
              </li>
              <li>
                <strong className="text-text-primary">Sentry</strong> — Rapports de crash anonymes pour
                améliorer la stabilité. Voir{" "}
                <a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer" className="text-accent-light hover:underline">
                  leur politique de confidentialité
                </a>.
              </li>
              <li>
                <strong className="text-text-primary">RevenueCat</strong> — Gestion des abonnements In-App.
                Voir{" "}
                <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-light hover:underline">
                  leur politique de confidentialité
                </a>.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">Notifications</h2>
            <p>
              VGVault peut envoyer des notifications locales pour vous rappeler les retours de prêts
              et d'emprunts. Ces notifications sont générées et affichées entièrement sur votre appareil,
              sans passer par des serveurs externes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">Vos droits (RGPD)</h2>
            <p>
              Puisque nous ne collectons pas de données personnelles identifiables sur nos serveurs,
              la plupart des droits RGPD s'exercent directement sur votre appareil. Pour toute question,
              contactez-nous à{" "}
              <a href="mailto:olivier.codes@gmail.com" className="text-accent-light hover:underline">
                olivier.codes@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">Contact</h2>
            <p>
              Pour toute question relative à la confidentialité :{" "}
              <a href="mailto:olivier.codes@gmail.com" className="text-accent-light hover:underline">
                olivier.codes@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
