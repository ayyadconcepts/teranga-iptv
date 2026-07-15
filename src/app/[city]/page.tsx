import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cities, getCityBySlug } from '@/lib/cities';
import { cityFAQ } from '@/lib/faq';
import { generateFAQJsonLd, generateLocalBusinessJsonLd } from '@/lib/jsonld';
import OffersGrid from '@/components/OffersGrid';
import ChannelShowcase from '@/components/ChannelShowcase';
import PaymentMethods from '@/components/PaymentMethods';
import FAQSection from '@/components/FAQSection';
import WhatsAppCTA from '@/components/WhatsAppCTA';

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: `https://terangaiptv.com/${city.slug}` },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) {
    notFound();
  }

  return (
    <>
      {/* JSON-LD: LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateLocalBusinessJsonLd(city.name, city.region)
          ),
        }}
      />

      {/* JSON-LD: FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQJsonLd(cityFAQ)),
        }}
      />

      {/* Hero */}
      <section className="border-b border-border py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="mb-4 inline-block rounded-full border border-vert/30 bg-vert/10 px-3 py-1 text-xs font-medium text-vert">
            📍 {city.region} • +22 000 chaînes • Activation en 5 min
          </span>
          <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            IPTV {city.name} —{' '}
            <span className="text-vert">
              Abonnement IPTV à {city.name}
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {city.intro}
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <WhatsAppCTA
              offerName="Test Gratuit 24h"
              price="0"
              label="Essai Gratuit 24h"
              size="lg"
            />
            <a
              href="#offres"
              className="rounded-xl border border-border px-8 py-4 text-base font-semibold text-foreground transition-colors hover:border-muted hover:bg-surface"
            >
              Voir les offres
            </a>
          </div>
          <p className="mt-6 text-xs text-muted">
            Paiement par Wave ou Orange Money • Sans engagement
          </p>
        </div>
      </section>

      {/* Local context */}
      <section className="border-b border-border bg-surface py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="mb-4 text-xl font-bold sm:text-2xl">
            Pourquoi choisir IPTV Sénégal à {city.name} ?
          </h2>
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            {city.localContext}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: '22 000+', label: 'Chaînes TV' },
              { value: '4K', label: 'Qualité max' },
              { value: '5 min', label: 'Activation' },
              { value: '24/7', label: 'Support' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-jaune">{stat.value}</p>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers */}
      <OffersGrid />

      {/* Channels */}
      <ChannelShowcase />

      {/* Payment */}
      <PaymentMethods />

      {/* FAQ */}
      <FAQSection
        faqs={cityFAQ}
        title={`Questions fréquentes — IPTV ${city.name}`}
      />

      {/* Bottom CTA */}
      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
            Prêt à profiter de l&apos;IPTV à {city.name} ?
          </h2>
          <p className="mb-8 text-sm text-muted sm:text-base">
            Testez gratuitement pendant 24h, sans engagement. Activation
            instantanée via WhatsApp.
          </p>
          <WhatsAppCTA
            offerName={`Test Gratuit 24h — ${city.name}`}
            price="0"
            label="Essai Gratuit 24h"
            size="lg"
          />
        </div>
      </section>
    </>
  );
}
