import type { Offer } from './offers';
import type { FAQItem } from './faq';

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'IPTV Sénégal',
    url: 'https://terangaiptv.com',
    logo: 'https://terangaiptv.com/logo.png',
    description:
      'Service d\'abonnement IPTV premium au Sénégal à partir de 3100 FCFA. +22 000 chaînes TV, sport en direct, VOD et séries.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['French', 'Wolof'],
    },
    areaServed: {
      '@type': 'Country',
      name: 'Senegal',
    },
  };
}

export function generateProductJsonLd(offer: Offer) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: offer.name,
    description: offer.description,
    brand: {
      '@type': 'Brand',
      name: 'IPTV Sénégal',
    },
    offers: {
      '@type': 'Offer',
      price: offer.price,
      priceCurrency: 'XOF',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'IPTV Sénégal',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '342',
    },
  };
}

export function generateFAQJsonLd(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateLocalBusinessJsonLd(
  cityName: string,
  region: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `IPTV Sénégal — ${cityName}`,
    description: `Service d'abonnement IPTV Premium à ${cityName}, ${region} à partir de 3100 FCFA. +22 000 chaînes TV, sport en direct, VOD.`,
    areaServed: {
      '@type': 'City',
      name: cityName,
      containedInPlace: {
        '@type': 'Country',
        name: 'Senegal',
      },
    },
    priceRange: '0 - 25 000 FCFA',
    paymentAccepted: 'Orange Money, Wave',
    currenciesAccepted: 'XOF',
  };
}
