const features = [
  {
    icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm3 14h10',
    title: 'Un catalogue pensé pour le Sénégal',
    description: 'Tout le sport européen et international en direct, les grandes chaînes africaines, films, séries et plateformes de streaming réunis dans un seul abonnement IPTV Sénégal.',
  },
  {
    icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    title: 'Qualité 4K UHD & technologie Anti-Freeze™',
    description: "Image nette en Full HD et 4K, sans coupures ni gel d'écran — même quand votre connexion n'est pas parfaite. Un flux fluide, fiable à 99,9 % du temps.",
  },
  {
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    title: 'Paiement local simple et sécurisé',
    description: 'Réglez votre abonnement en toute confiance via Wave, Orange Money ou Free Money. Aucun frais caché, pas de banque étrangère — tout se fait en FCFA, en quelques secondes.',
  },
  {
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: 'Compatible avec tous vos appareils',
    description: "Smart TV Samsung & LG, Android, iPhone, iPad, Fire Stick, box Android, MAG, ordinateur... Votre IPTV Sénégal fonctionne partout, sur jusqu'à 3 écrans selon votre formule.",
  },
  {
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    title: 'Support client 24/7 en français',
    description: "Une question, un réglage, une aide à l'installation ? Notre équipe vous répond directement sur WhatsApp, 7j/7, en français et en wolof. Vous n'êtes jamais seul.",
  },
  {
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Activation en moins de 5 minutes',
    description: "Après votre paiement, vous recevez vos accès immédiatement sur WhatsApp. Installation guidée, pas de matériel à acheter : vous regardez vos chaînes le jour même.",
  },
];

export default function FeatureList() {
  return (
    <section className="bg-[#f0fcf5] py-24 text-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#e1f5eb] px-4 py-1.5 text-xs font-bold text-vert mb-6 uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-jaune"></span>
            Abonnement IPTV Sénégal
          </div>
          <h2 className="mb-6 text-3xl font-serif font-medium tracking-tight sm:text-5xl text-[#0d2818]">
            Pourquoi choisir notre abonnement
            <br />
            <span className="text-vert font-semibold">IPTV Sénégal</span> ?
          </h2>
          <p className="text-base leading-relaxed text-gray-600">
            Un bon abonnement <strong>IPTV Sénégal</strong> ne se résume pas à un nombre de chaînes. Il doit être stable, simple à payer en local et adapté à ce que vous regardez vraiment — du sport européen en direct aux grandes ligues, en passant par vos chaînes africaines préférées et les plateformes de streaming. Voici pourquoi des milliers de Sénégalais nous font confiance.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col rounded-[24px] bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-transform hover:-translate-y-1"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-vert text-white shadow-lg shadow-vert/20">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d={feature.icon} />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-serif font-medium text-gray-900 leading-snug">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
