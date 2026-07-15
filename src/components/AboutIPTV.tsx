import React from 'react';

export default function AboutIPTV() {
  return (
    <section className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl text-white">
            À propos d'IPTV Sénégal — Qu'est-ce que le service IPTV et comment ça fonctionne ?
          </h2>
          <p className="text-muted-light text-base sm:text-lg">
            Nous expliquons sans complications ce que c'est, comment cela fonctionne et pourquoi tant de gens abandonnent le câble et le satellite au Sénégal.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Text */}
          <div className="lg:w-1/2 text-gray-300 space-y-6 text-sm sm:text-base leading-relaxed">
            <p>
              <strong className="text-white">IPTV Sénégal</strong> est un service de télévision diffusé via Internet, remplaçant totalement les abonnements classiques. En termes simples, c'est la télévision par protocole IP : <strong className="text-white">pas d'antenne parabolique, pas de câbles complexes, aucune installation technique requise</strong>. Le signal arrive directement par votre connexion Wi-Fi ou Fibre.
            </p>
            <p>
              Au Sénégal, de plus en plus de foyers font ce choix. La raison est simple : vous accédez à <strong className="text-white">plus de 32 000 chaînes</strong>, ainsi qu'à des milliers de films, séries et événements sportifs premium, le tout pour une fraction du prix d'un abonnement traditionnel. C'est de loin la meilleure décision pour votre divertissement à domicile.
            </p>
            <p>
              L'installation est instantanée et accessible à tous. Dès votre abonnement validé, il vous suffit de configurer votre appareil (Smart TV Samsung/LG, Box Android, Apple TV, ou Smartphone) via des applications comme <strong className="text-white">IPTV Smarters Pro</strong> en moins de 5 minutes. Une connexion internet standard (15 Mbps) suffit pour profiter d'une qualité allant de la HD à la 4K UHD.
            </p>
          </div>

          {/* Right: Diagram */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl">
              <h3 className="text-center text-white font-bold mb-10 text-lg">Comment fonctionne l'IPTV</h3>
              
              {/* Flowchart */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-2 relative">
                
                {/* Step 1 */}
                <div className="flex flex-col items-center gap-3 w-full sm:w-32 z-10">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-xl border border-vert/40 bg-vert/10 flex flex-col items-center justify-center gap-2 p-2 transition-transform hover:scale-105">
                    <svg className="h-8 w-8 text-vert" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-white mb-1">Contenu mondial</p>
                    <p className="text-[10px] text-muted-light leading-tight">32 000+ chaînes du monde entier</p>
                  </div>
                </div>

                {/* Arrow */}
                <svg className="hidden sm:block h-6 w-6 text-gray-600 rotate-90 sm:rotate-0 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>

                {/* Step 2 */}
                <div className="flex flex-col items-center gap-3 w-full sm:w-32 z-10">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-xl border border-blue-500/40 bg-blue-500/10 flex flex-col items-center justify-center gap-2 p-2 transition-transform hover:scale-105">
                    <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-white mb-1">Serveur IPTV</p>
                    <p className="text-[10px] text-muted-light leading-tight">Traitement en 4K Ultra HD</p>
                  </div>
                </div>

                {/* Arrow */}
                <svg className="hidden sm:block h-6 w-6 text-gray-600 rotate-90 sm:rotate-0 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>

                {/* Step 3 */}
                <div className="flex flex-col items-center gap-3 w-full sm:w-32 z-10">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-xl border border-jaune/40 bg-jaune/10 flex flex-col items-center justify-center gap-2 p-2 transition-transform hover:scale-105">
                    <svg className="h-8 w-8 text-jaune" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-white mb-1">Internet</p>
                    <p className="text-[10px] text-muted-light leading-tight">Transmission IP sécurisée</p>
                  </div>
                </div>

                {/* Arrow */}
                <svg className="hidden sm:block h-6 w-6 text-gray-600 rotate-90 sm:rotate-0 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>

                {/* Step 4 */}
                <div className="flex flex-col items-center gap-3 w-full sm:w-32 z-10">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-xl border border-rose-500/40 bg-rose-500/10 flex flex-col items-center justify-center gap-2 p-2 transition-transform hover:scale-105">
                    <svg className="h-8 w-8 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-white mb-1">Votre appareil</p>
                    <p className="text-[10px] text-muted-light leading-tight">TV, téléphone, tablette, PC</p>
                  </div>
                </div>

              </div>

              {/* Qualities */}
              <div className="mt-12 flex flex-wrap justify-center gap-3">
                {['SD', 'HD', 'Full HD', '4K UHD'].map((q, i) => (
                  <span key={q} className={`px-4 py-1.5 rounded-lg border text-xs font-bold ${i === 3 ? 'border-vert/50 bg-vert/20 text-vert' : 'border-white/10 bg-white/5 text-gray-400'}`}>
                    {q}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
