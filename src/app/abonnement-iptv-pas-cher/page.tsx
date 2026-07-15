import type { Metadata } from 'next';
import { generalFAQ } from '@/lib/faq';
import { generateFAQJsonLd } from '@/lib/jsonld';
import { offers } from '@/lib/offers';
import FAQSection from '@/components/FAQSection';
import OffersGrid from '@/components/OffersGrid';
import PaymentMethods from '@/components/PaymentMethods';
import ChannelShowcase from '@/components/ChannelShowcase';
import WhatsAppCTA from '@/components/WhatsAppCTA';

export const metadata: Metadata = {
  title:
    'Abonnement IPTV Premium Pas Cher au Sénégal — À partir de 3100 FCFA | IPTV Sénégal',
  description:
    'Abonnement IPTV Premium pas cher au Sénégal à partir de 3100 FCFA/mois. +22 000 chaînes TV, Football européen, Cinéma international. Test gratuit 24h. Paiement Wave.',
  alternates: {
    canonical: 'https://terangaiptv.com/abonnement-iptv-pas-cher',
  },
};

const advantages = [
  '+22 000 chaînes TV en direct (vs ~200 pour le câble)',
  'Chaînes sportives, films et séries Premium inclus dans un seul abonnement',
  'Qualité HD et 4K sur tous les appareils',
  'Pas de parabole, pas d\'installation technique',
  'Paiement simple par Wave ou Orange Money',
  'Activation en moins de 5 minutes via WhatsApp',
  'Support client 24/7 en français et wolof',
  'Test gratuit de 24h sans engagement',
  'Compatible Smart TV, téléphone, tablette, PC et TV Box',
  'Jusqu\'à 2 écrans simultanés',
];

const cableComparison = [
  {
    feature: 'Nombre de chaînes',
    iptv: '+22 000',
    cable: '~200',
  },
  {
    feature: 'Qualité vidéo',
    iptv: 'HD / 4K',
    cable: 'SD / HD',
  },
  {
    feature: 'Films et series internationales en francais',
    iptv: '✓ Inclus',
    cable: '✗ Non inclus',
  },
  {
    feature: 'Installation',
    iptv: '5 min (aucun matériel)',
    cable: 'Technicien + parabole',
  },
  {
    feature: 'Multi-écrans',
    iptv: '2 appareils simultanés',
    cable: '1 seul décodeur',
  },
  {
    feature: 'Engagement',
    iptv: 'Aucun',
    cable: '12 mois minimum',
  },
  {
    feature: 'Prix mensuel',
    iptv: 'Dès 3 100 FCFA',
    cable: '15 000 — 35 000 FCFA',
  },
];

export default function AbonnementIPTVPasCherPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQJsonLd(generalFAQ)),
        }}
      />

      <article>
        {/* Hero */}
        <section className="border-b border-border py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <span className="mb-4 inline-block rounded-full border border-jaune/30 bg-jaune/10 px-3 py-1 text-xs font-medium text-jaune">
              Dès 3 100 FCFA/mois • Test gratuit 24h
            </span>
            <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Abonnement IPTV{' '}
              <span className="text-jaune">pas cher</span> au Sénégal
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Accédez à plus de 22 000 chaînes TV en direct, du sport, du cinéma et des milliers de films et séries —
              le tout à partir de seulement 3 100 FCFA par mois. Le meilleur
              rapport qualité-prix IPTV au Sénégal.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <WhatsAppCTA
                offerName="Test Gratuit 24h"
                price="0"
                label="Essai Gratuit 24h"
                size="lg"
              />
              <a
                href="#comparatif"
                className="rounded-xl border border-border px-8 py-4 text-base font-semibold text-foreground transition-colors hover:border-muted hover:bg-surface"
              >
                Voir les prix
              </a>
            </div>
            <p className="mt-4 text-xs text-muted">
              Paiement par Wave ou Orange Money • Sans engagement
            </p>
          </div>
        </section>

        {/* Price comparison table */}
        <section id="comparatif" className="border-b border-border py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="mb-2 text-center text-2xl font-bold sm:text-3xl">
              Nos tarifs IPTV
            </h2>
            <p className="mb-10 text-center text-sm text-muted">
              Comparez nos 5 offres et choisissez celle qui vous convient.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="px-4 py-3 font-semibold text-foreground">
                      Offre
                    </th>
                    <th className="px-4 py-3 font-semibold text-foreground">
                      Durée
                    </th>
                    <th className="px-4 py-3 font-semibold text-jaune">
                      Prix
                    </th>
                    <th className="hidden px-4 py-3 font-semibold text-foreground sm:table-cell">
                      Économie
                    </th>
                    <th className="px-4 py-3 font-semibold text-foreground">
                      Chaînes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {offers.map((offer, index) => (
                    <tr
                      key={offer.id}
                      className={`border-b border-border transition-colors hover:bg-surface ${
                        offer.popular ? 'bg-vert/5' : ''
                      } ${index === offers.length - 1 ? 'border-b-0' : ''}`}
                    >
                      <td className="px-4 py-3 font-medium text-foreground">
                        <span className="flex items-center gap-2">
                          {offer.shortName}
                          {offer.badge && (
                            <span
                              className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                                offer.badgeColor === 'rouge'
                                  ? 'bg-rouge/15 text-rouge'
                                  : 'bg-jaune/15 text-jaune'
                              }`}
                            >
                              {offer.badge}
                            </span>
                          )}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted">
                        {offer.duration}
                      </td>
                      <td className="px-4 py-3 font-bold text-jaune">
                        {offer.priceLabel}
                      </td>
                      <td className="hidden px-4 py-3 text-vert sm:table-cell">
                        {offer.savingsNote ?? '—'}
                      </td>
                      <td className="px-4 py-3 text-muted">+22 000</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* IPTV vs Cable/Satellite */}
        <section className="border-b border-border py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="mb-2 text-center text-2xl font-bold sm:text-3xl">
              IPTV vs Câble / Satellite
            </h2>
            <p className="mb-10 text-center text-sm text-muted">
              Découvrez pourquoi l&apos;IPTV est le meilleur choix au Sénégal.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="px-4 py-3 font-semibold text-foreground">
                      Critère
                    </th>
                    <th className="px-4 py-3 font-semibold text-vert">
                      IPTV Sénégal
                    </th>
                    <th className="px-4 py-3 font-semibold text-muted">
                      Câble / Satellite
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cableComparison.map((row, index) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-border transition-colors hover:bg-surface ${
                        index === cableComparison.length - 1
                          ? 'border-b-0'
                          : ''
                      }`}
                    >
                      <td className="px-4 py-3 font-medium text-foreground">
                        {row.feature}
                      </td>
                      <td className="px-4 py-3 text-vert">{row.iptv}</td>
                      <td className="px-4 py-3 text-muted">{row.cable}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pourquoi choisir IPTV Sénégal */}
        <section className="border-b border-border py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="mb-2 text-center text-2xl font-bold sm:text-3xl">
              Pourquoi choisir IPTV Sénégal ?
            </h2>
            <p className="mb-10 text-center text-sm text-muted">
              Le service IPTV le plus complet et le moins cher du Sénégal.
            </p>
            <ul className="space-y-3">
              {advantages.map((advantage) => (
                <li
                  key={advantage}
                  className="flex items-start gap-3 rounded-lg border border-border bg-surface px-4 py-3"
                >
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-vert"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-foreground">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-surface py-16">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
            <h2 className="mb-3 text-xl font-bold sm:text-2xl">
              Commencez dès aujourd&apos;hui
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-muted">
              Testez gratuitement pendant 24h, sans engagement et sans paiement.
              Choisissez ensuite l&apos;abonnement qui vous convient.
            </p>
            <WhatsAppCTA
              offerName="Test Gratuit 24h"
              price="0"
              label="Essai Gratuit 24h — Sans Engagement"
              size="lg"
            />
          </div>
        </section>

        <OffersGrid />
        <ChannelShowcase />
        <PaymentMethods />
        <FAQSection faqs={generalFAQ} />
      </article>
    </>
  );
}
