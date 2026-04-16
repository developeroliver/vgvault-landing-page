import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation — VGVault",
  description: "Conditions générales d'utilisation de VGVault.",
};

export default function TermsPage() {
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

        <h1 className="text-4xl font-bold mb-2">Conditions Générales d'Utilisation</h1>
        <p className="text-text-muted text-sm mb-12">Dernière mise à jour : avril 2025</p>

        <div className="space-y-10 text-text-secondary leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">Acceptation des conditions</h2>
            <p>
              En téléchargeant ou en utilisant VGVault, vous acceptez les présentes conditions générales d'utilisation.
              Si vous n'acceptez pas ces conditions, n'utilisez pas l'application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">Description du service</h2>
            <p>
              VGVault est une application iOS permettant de gérer votre collection de jeux vidéo,
              de suivre vos prêts et emprunts, et de consulter des statistiques sur votre bibliothèque gaming.
              L'application est disponible en version gratuite (jusqu'à 10 jeux) et en version Pro (jeux illimités,
              statistiques complètes).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">Abonnements et achats</h2>
            <p>VGVault Pro est disponible selon les formules suivantes :</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Mensuel : 1,99 € / mois</li>
              <li>Annuel : 8,99 € / an</li>
              <li>À vie : 14,99 € (achat unique)</li>
            </ul>
            <p className="mt-3">
              Les abonnements se renouvellent automatiquement sauf résiliation au moins 24 heures avant
              la fin de la période en cours. Vous pouvez gérer et annuler vos abonnements depuis les
              réglages de votre compte App Store. Aucun remboursement n'est accordé pour la période
              d'abonnement en cours, sauf exigence légale.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">Utilisation acceptable</h2>
            <p>Vous vous engagez à utiliser VGVault uniquement à des fins personnelles et légales. Il est interdit de :</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Tenter de décompiler ou d'effectuer de la rétro-ingénierie sur l'application</li>
              <li>Utiliser l'application à des fins commerciales sans autorisation</li>
              <li>Contourner les restrictions techniques de l'application</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">Limitation de responsabilité</h2>
            <p>
              VGVault est fourni "tel quel". Nous ne garantissons pas que l'application sera exempte
              d'erreurs ou disponible en permanence. Nous ne sommes pas responsables de la perte
              de données résultant d'une mauvaise utilisation, d'une défaillance matérielle ou d'une
              suppression intentionnelle.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">Propriété intellectuelle</h2>
            <p>
              VGVault et tous ses contenus (code, design, icônes) sont la propriété d'Olivier Geiger.
              Tous droits réservés. L'utilisation de l'application ne vous confère aucun droit de
              propriété intellectuelle sur ses éléments.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier ces conditions à tout moment. En continuant
              d'utiliser VGVault après modification, vous acceptez les nouvelles conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">Droit applicable</h2>
            <p>
              Ces conditions sont régies par le droit français. Tout litige sera soumis à la
              compétence exclusive des tribunaux français.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">Contact</h2>
            <p>
              Pour toute question :{" "}
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
