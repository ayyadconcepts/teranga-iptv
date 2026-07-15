import Link from 'next/link';
import { offers } from '@/lib/offers';
import { getWhatsAppContactUrl } from '@/lib/whatsapp';
import PaymentMethods from './PaymentMethods';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2" aria-label="IPTV Sénégal">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="8" fill="#00853F" />
                <path d="M8 10h16v2H8zM8 15h16v2H8zM8 20h12v2H8z" fill="white" />
              </svg>
              <span className="text-base font-bold">
                IPTV<span className="text-vert"> Sénégal</span>
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Le meilleur service IPTV au Sénégal. +22 000 chaînes TV, sport en direct, films et séries en HD/4K.
            </p>
          </div>

          {/* Offres */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
              Nos Offres
            </h3>
            <ul className="space-y-2">
              {offers.map((offer) => (
                <li key={offer.id}>
                  <Link
                    href={`/${offer.slug}`}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {offer.name} — {offer.priceLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
              Informations
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-muted transition-colors hover:text-foreground">
                  Blog — Guides &amp; Tutos
                </Link>
              </li>
              <li>
                <Link href="/iptv-smarters-pro" className="text-sm text-muted transition-colors hover:text-foreground">
                  Guide IPTV Smarters Pro
                </Link>
              </li>
              <li>
                <Link href="/abonnement-iptv-pas-cher" className="text-sm text-muted transition-colors hover:text-foreground">
                  IPTV Pas Cher
                </Link>
              </li>
              <li>
                <Link href="/iptv-dakar" className="text-sm text-muted transition-colors hover:text-foreground">
                  IPTV Dakar
                </Link>
              </li>
              <li>
                <Link href="/iptv-thies" className="text-sm text-muted transition-colors hover:text-foreground">
                  IPTV Thiès
                </Link>
              </li>
              <li>
                <Link href="/iptv-saint-louis" className="text-sm text-muted transition-colors hover:text-foreground">
                  IPTV Saint-Louis
                </Link>
              </li>
              <li>
                <Link href="/iptv-ziguinchor" className="text-sm text-muted transition-colors hover:text-foreground">
                  IPTV Ziguinchor
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + Payment */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
              Contact & Paiement
            </h3>
            <a
              href={getWhatsAppContactUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 inline-flex items-center gap-2 rounded-lg bg-vert px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-vert-hover"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.317 0-4.47-.75-6.216-2.023l-.354-.27-3.281 1.1 1.1-3.281-.27-.354A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              WhatsApp
            </a>
            <div className="mt-4">
              <PaymentMethods compact />
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted">
          <p>© {new Date().getFullYear()} IPTV Sénégal. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
