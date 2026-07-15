import type { Metadata } from 'next';
import { getOfferBySlug } from '@/lib/offers';
import { productFAQ } from '@/lib/faq';
import { generateProductJsonLd, generateFAQJsonLd } from '@/lib/jsonld';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import FAQSection from '@/components/FAQSection';
import PaymentMethods from '@/components/PaymentMethods';
import ChannelShowcase from '@/components/ChannelShowcase';

const offer = getOfferBySlug('abonnement-iptv-24h-gratuit')!;

export const metadata: Metadata = {
  title: offer.metaTitle,
  description: offer.metaDescription,
  alternates: {
    canonical: `https://terangaiptv.com/${offer.slug}`,
  },
};

export default function TestGratuit24hPage() {
  const productJsonLd = generateProductJsonLd(offer);
  const faqJsonLd = generateFAQJsonLd(productFAQ);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted">
            <li>
              <a href="/" className="transition-colors hover:text-foreground">Accueil</a>
            </li>
            <li aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" className="text-muted/50">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </li>
            <li>
              <a href="/#offres" className="transition-colors hover:text-foreground">Offres</a>
            </li>
            <li aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" className="text-muted/50">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </li>
            <li>
              <span className="font-medium text-foreground">{offer.name}</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Offer Header */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {offer.name}
          </h1>
          <p className="mb-6 text-base text-muted sm:text-lg">{offer.description}</p>
          <div className="mb-8 flex flex-col items-center gap-3">
            <span className="text-4xl font-black text-jaune sm:text-5xl">
              {offer.priceLabel}
            </span>
            <span className="text-sm text-muted">
              Durée : {offer.duration}
            </span>
          </div>
          <WhatsAppCTA
            offerName={offer.name}
            price={offer.priceLabel}
            label="Essayer Gratuitement sur WhatsApp"
            size="lg"
          />
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
            Ce qui est inclus
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {offer.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 rounded-lg border border-border bg-surface px-4 py-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mt-0.5 shrink-0">
                  <path d="M6 10l3 3 5-6" stroke="#00853F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Channel Showcase */}
      <ChannelShowcase />

      {/* Payment Methods */}
      <PaymentMethods />

      {/* FAQ */}
      <FAQSection faqs={productFAQ} title="Questions fréquentes sur le test gratuit" />

      {/* Bottom CTA */}
      <section className="border-t border-border py-12">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">
            Prêt à tester gratuitement ?
          </h2>
          <p className="mb-6 text-sm text-muted">
            Aucun engagement. Activé en moins de 5 minutes via WhatsApp.
          </p>
          <WhatsAppCTA
            offerName={offer.name}
            price={offer.priceLabel}
            label="Demander mon test gratuit"
            size="lg"
          />
        </div>
      </section>
    </>
  );
}
