export interface ChannelCategory {
  id: string;
  title: string;
  icon: string; // SVG path data for the category icon
  channels: string[];
}

export const channelCategories: ChannelCategory[] = [
  {
    id: 'tv-direct',
    title: 'Télévision en Direct',
    icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm3 14h10',
    channels: [
      'Canal+ Première',
      'Canal+ Pop',
      'Canal+ Comédie',
      'Canal+ Action',
      'A+',
      'Maboke TV',
      'Novelas TV',
      'Zee Magic',
      'Nollywood TV',
      'Nollywood TV Epic',
      'RTS 1',
      'TFM',
      '2STV',
      'SenTV',
      'iTV',
      'Walf TV',
    ],
  },
  {
    id: 'sport',
    title: 'Football & Sports',
    icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16zm-1 3v4.59L7.71 14.88l1.42 1.42L13 12.41V7h-2z',
    channels: [
      'beIN Sports 1 FR',
      'beIN Sports 2 FR',
      'beIN Sports 3 FR',
      'beIN Sports MENA',
      'Canal+ Sport 1',
      'Canal+ Sport 2',
      'Canal+ Sport 3',
      'Canal+ Sport 4',
      'Canal+ Sport 5',
      'RMC Sport 1',
      'RMC Sport 2',
      'SuperSport Premier League',
      'SuperSport Football',
      'SuperSport CAF',
      'ESPN',
    ],
  },
  {
    id: 'jeunesse',
    title: 'Jeunesse & Documentaires',
    icon: 'M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm0 12.55L5 12.4l7-3.82 7 3.82-7 3.15z',
    channels: [
      'Gulli Africa',
      'Ludikids',
      'Canal+ Kids',
      'Canal+ Docs',
      'National Geographic',
      'Planète+',
      'Discovery Channel',
      'TiVi5 Monde',
    ],
  },
  {
    id: 'vod',
    title: 'VOD & Films',
    icon: 'M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V4h-4z',
    channels: [
      'Catalogue Netflix',
      'Catalogue Amazon Prime',
      'Catalogue Disney+',
      'Nollywood',
      'Films Action VF',
      'Films Arts Martiaux VF',
      'Nouveautés Cinéma',
      'Cinéma Africain',
    ],
  },
  {
    id: 'series',
    title: 'Séries & Télénovelas',
    icon: 'M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z',
    channels: [
      'Télénovelas VF',
      'Séries Turques VF',
      'Séries Indiennes VF',
      'Séries Africaines',
      'Game of Thrones',
      'Lupin',
      'La Casa de Papel',
      'Séries VF/VOSTFR',
    ],
  },
];
