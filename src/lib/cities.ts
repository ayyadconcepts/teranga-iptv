export interface City {
  slug: string;
  name: string;
  region: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  localContext: string;
}

export const cities: City[] = [
  {
    slug: 'iptv-dakar',
    name: 'Dakar',
    region: 'Région de Dakar',
    intro:
      'Accédez au meilleur service IPTV à Dakar. Que vous soyez à Plateau, Almadies, Parcelles Assainies ou Guédiawaye, profitez de +22 000 chaînes TV en direct avec une connexion 4G ou fibre optique.',
    metaTitle: 'IPTV Dakar — Abonnement IPTV pas cher à Dakar | IPTV Sénégal',
    metaDescription:
      'Service IPTV à Dakar. +22 000 chaînes, Football européen, Cinéma international, Séries Premium. Livraison instantanée par WhatsApp. Paiement Wave ou Orange Money. Dès 3 100 FCFA.',
    localContext:
      'Avec la fibre optique de Sonatel et la couverture 4G étendue dans toute la région de Dakar, vous bénéficiez d\'une qualité de streaming optimale. Nos clients à Dakar profitent du meilleur débit pour regarder le football international en direct, les grandes compétitions européennes et les films d\'action.',
  },
  {
    slug: 'iptv-thies',
    name: 'Thiès',
    region: 'Région de Thiès',
    intro:
      'Service IPTV disponible à Thiès et dans toute la région. Regardez vos chaînes préférées, le football et les séries en HD depuis Thiès, Mbour ou Saly.',
    metaTitle:
      'IPTV Thiès — Abonnement IPTV à Thiès et Mbour | IPTV Sénégal',
    metaDescription:
      'Abonnement IPTV à Thiès. +22 000 chaînes TV, sport en direct, VOD. Compatible 4G et ADSL. Paiement Wave ou Orange Money. Activation en 5 min.',
    localContext:
      'La couverture 4G à Thiès et sur la Petite Côte (Mbour, Saly, Somone) permet de profiter pleinement de notre service IPTV. Idéal pour suivre les matchs du week-end en famille ou les télénovelas en soirée.',
  },
  {
    slug: 'iptv-saint-louis',
    name: 'Saint-Louis',
    region: 'Région de Saint-Louis',
    intro:
      'IPTV Saint-Louis : profitez du meilleur divertissement TV dans la ville historique du Sénégal. Toutes les chaînes d\'information, le sport automobile et le cinéma africain accessibles depuis Saint-Louis.',
    metaTitle:
      'IPTV Saint-Louis — Abonnement TV par Internet à Saint-Louis | IPTV Sénégal',
    metaDescription:
      'IPTV à Saint-Louis du Sénégal. Football national, Séries Premium, documentaires, films. Activation instantanée via WhatsApp. Paiement Wave ou Orange Money.',
    localContext:
      'Saint-Louis, ancienne capitale du Sénégal, bénéficie d\'une bonne couverture réseau pour profiter de notre service IPTV. Regardez les matchs de football, les films du cinéma africain et les chaînes culturelles en toute tranquillité.',
  },
  {
    slug: 'iptv-ziguinchor',
    name: 'Ziguinchor',
    region: 'Région de Ziguinchor',
    intro:
      'Service IPTV disponible à Ziguinchor et en Casamance. Accédez à +22 000 chaînes TV, au sport en direct et aux films depuis la capitale du sud.',
    metaTitle:
      'IPTV Ziguinchor — Abonnement IPTV en Casamance | IPTV Sénégal',
    metaDescription:
      'IPTV à Ziguinchor et en Casamance. +22 000 chaînes, sport en direct, films et séries. Paiement Wave ou Orange Money. Activation WhatsApp.',
    localContext:
      'Ziguinchor et la Casamance disposent d\'une couverture 4G suffisante pour profiter de l\'IPTV. Notre service est optimisé pour fonctionner même avec des connexions modérées, afin que vous ne manquiez aucun match ni aucune série.',
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
