export interface Offer {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  price: number;
  priceLabel: string;
  duration: string;
  badge?: string;
  badgeColor?: 'jaune' | 'rouge';
  popular?: boolean;
  description: string;
  metaTitle: string;
  metaDescription: string;
  features: string[];
  savingsNote?: string;
}

export const offers: Offer[] = [
  {
    id: 'test-24h',
    slug: 'abonnement-iptv-24h-gratuit',
    name: 'Test Gratuit 24h',
    shortName: '24h',
    price: 0,
    priceLabel: 'Gratuit',
    duration: '24 heures',
    badge: '100% Gratuit',
    badgeColor: 'jaune',
    popular: true,
    description:
      'Testez notre service IPTV gratuitement pendant 24 heures. Accès complet à toutes les chaînes, VOD et séries sans aucun engagement.',
    metaTitle:
      'Test IPTV Gratuit 24h au Sénégal — Essai Sans Engagement | IPTV Sénégal',
    metaDescription:
      'Essayez notre abonnement IPTV gratuitement pendant 24h au Sénégal. +22 000 chaînes, Football européen, Cinéma international. Aucun engagement. Paiement par Wave ou Orange Money.',
    features: [
      '+22 000 chaînes HD/4K',
      'Chaînes Sénégalaises & Africaines',
      'Football européen & international',
      'Films et séries Premium VOD',
      'Support WhatsApp VIP',
      'Multi-écrans inclus',
      'Mises à jour gratuites',
    ],
  },
  {
    id: '1-mois',
    slug: 'abonnement-iptv-1-mois',
    name: 'Abonnement 1 Mois',
    shortName: '1 Mois',
    price: 3100,
    priceLabel: '3 100 FCFA',
    duration: '1 mois',
    description:
      'Abonnement IPTV de 1 mois avec accès illimité à toutes les chaînes TV en direct, le sport, les films et séries en HD et 4K.',
    metaTitle:
      'Abonnement IPTV Premium 1 Mois au Sénégal — À partir de 3100 FCFA | IPTV Sénégal',
    metaDescription:
      'Le meilleur abonnement IPTV Premium au Sénégal à partir de 3100 FCFA pour 1 mois. Accès à +22 000 chaînes, sport en direct et VOD. Activation immédiate.',
    features: [
      '+22 000 chaînes HD/4K',
      'Chaînes Sénégalaises & Africaines',
      'Football européen & international',
      'Films et séries Premium VOD',
      'Support WhatsApp VIP',
      'Multi-écrans inclus',
      'Mises à jour gratuites',
    ],
  },
  {
    id: '3-mois',
    slug: 'abonnement-iptv-3-mois',
    name: 'Abonnement 3 Mois',
    shortName: '3 Mois',
    price: 8000,
    priceLabel: '8 000 FCFA',
    duration: '3 mois',
    savingsNote: 'Économisez 1 300 FCFA',
    description:
      'Abonnement IPTV de 3 mois au meilleur rapport qualité-prix. Profitez de toutes les chaînes, du sport en direct et de la VOD pendant 3 mois complets.',
    metaTitle:
      'Abonnement IPTV 3 Mois au Sénégal — 8 000 FCFA | IPTV Sénégal',
    metaDescription:
      'Abonnement IPTV 3 mois à 8 000 FCFA au Sénégal. Économisez 1 300 FCFA. +22 000 chaînes, sport en direct, VOD complète. Paiement Wave ou Orange Money.',
    features: [
      '+22 000 chaînes HD/4K',
      'Chaînes Sénégalaises & Africaines',
      'Football européen & international',
      'Films et séries Premium VOD',
      'Support WhatsApp VIP',
      'Multi-écrans inclus',
      'Mises à jour gratuites',
    ],
  },
  {
    id: '6-mois',
    slug: 'abonnement-iptv-6-mois',
    name: 'Abonnement 6 Mois',
    shortName: '6 Mois',
    price: 14000,
    priceLabel: '14 000 FCFA',
    duration: '6 mois',
    savingsNote: 'Économisez 4 600 FCFA',
    description:
      'Notre offre la plus populaire. 6 mois d\'accès illimité à toutes les chaînes TV, sport en direct, films et séries. Le meilleur rapport qualité-prix pour votre divertissement.',
    metaTitle:
      'Abonnement IPTV 6 Mois au Sénégal — 14 000 FCFA ⭐ Populaire | IPTV Sénégal',
    metaDescription:
      'Abonnement IPTV 6 mois à 14 000 FCFA au Sénégal. Offre la plus populaire. Économisez 4 600 FCFA. Toutes les chaînes et la VOD. Paiement Wave ou Orange Money.',
    features: [
      '+22 000 chaînes HD/4K',
      'Chaînes Sénégalaises & Africaines',
      'Football européen & international',
      'Films et séries Premium VOD',
      'Support WhatsApp VIP',
      'Multi-écrans inclus',
      'Mises à jour gratuites',
    ],
  },
  {
    id: '1-an',
    slug: 'abonnement-iptv-1-an',
    name: 'Abonnement 1 An',
    shortName: '1 An',
    price: 25000,
    priceLabel: '25 000 FCFA',
    duration: '12 mois',
    badge: 'Meilleur prix',
    badgeColor: 'rouge',
    savingsNote: 'Économisez 12 200 FCFA',
    description:
      'L\'offre annuelle au prix le plus bas par mois. 12 mois d\'accès complet à tout le catalogue IPTV avec les plus grosses économies.',
    metaTitle:
      'Abonnement IPTV 1 An au Sénégal — 25 000 FCFA 🔥 Meilleur Prix | IPTV Sénégal',
    metaDescription:
      'Abonnement IPTV 1 an à 25 000 FCFA au Sénégal. Meilleur prix garanti. Économisez 12 200 FCFA. Toutes les chaînes, sport, VOD. Paiement Wave ou Orange Money.',
    features: [
      '+22 000 chaînes HD/4K',
      'Chaînes Sénégalaises & Africaines',
      'Football européen & international',
      'Films et séries Premium VOD',
      'Support WhatsApp VIP',
      'Multi-écrans inclus',
      'Mises à jour gratuites',
    ],
  },
];

export function getOfferBySlug(slug: string): Offer | undefined {
  return offers.find((o) => o.slug === slug);
}
