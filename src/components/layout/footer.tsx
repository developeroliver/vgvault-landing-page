"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/language";

const content = {
  fr: {
    links: [
      { href: "/terms", label: "CGU" },
      { href: "/privacy", label: "Confidentialité" },
    ],
    contact: "Contact",
    rights: "Tous droits réservés.",
    by: "Conçu par",
  },
  en: {
    links: [
      { href: "/terms", label: "Terms" },
      { href: "/privacy", label: "Privacy" },
    ],
    contact: "Contact",
    rights: "All rights reserved.",
    by: "Designed by",
  },
};

export function Footer() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <footer className="border-t border-border-custom bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/icon.png" alt="VGVault" width={32} height={32} className="rounded-lg" />
            <span className="font-bold text-text-primary tracking-tight">
              VGVault
            </span>
          </div>

          <nav className="flex items-center gap-6">
            {t.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {t.contact}
            </a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 text-center text-sm text-text-muted">
          <p>&copy; {new Date().getFullYear()} VGVault. {t.rights}</p>
          <p>
            {t.by}{" "}
            <a
              href="https://www.instagram.com/codewitholiver/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light hover:text-white transition-colors"
            >
              codewitholiver
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
