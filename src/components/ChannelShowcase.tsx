import React from 'react';

export default function ChannelShowcase() {
  return (
    <section className="py-24 bg-background border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Liste complète des chaînes IPTV — Toutes les chaînes en direct en HD et 4K
          </h2>
          <p className="text-muted-light text-base mb-10">
            Du sport en direct au cinéma international, en passant par toutes vos chaînes locales — ce que vous avez ici, vous ne pouvez le trouver nulle part ailleurs pour ce prix.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { number: '22 000+', label: 'Chaînes', icon: '📡', color: 'from-cyan-500/20 to-cyan-500/5', border: 'border-cyan-500/30', text: 'text-cyan-400' },
              { number: '118 000+', label: 'Films', icon: '🎬', color: 'from-purple-500/20 to-purple-500/5', border: 'border-purple-500/30', text: 'text-purple-400' },
              { number: '44 000+', label: 'Séries', icon: '📺', color: 'from-pink-500/20 to-pink-500/5', border: 'border-pink-500/30', text: 'text-pink-400' },
              { number: '4K', label: 'Ultra HD', icon: '✨', color: 'from-jaune/20 to-jaune/5', border: 'border-jaune/30', text: 'text-jaune' },
              { number: '0', label: 'Coupure', icon: '🛡️', color: 'from-vert/20 to-vert/5', border: 'border-vert/30', text: 'text-vert' },
            ].map(stat => (
              <div key={stat.label} className={`relative rounded-2xl bg-gradient-to-b ${stat.color} border ${stat.border} p-5 text-center transition-transform hover:scale-105`}>
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className={`text-xl sm:text-2xl lg:text-3xl font-extrabold ${stat.text} mb-1 whitespace-nowrap`}>{stat.number}</div>
                <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Card 1: Chaînes Sénégalaises */}
          <div className="bg-[#111] border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl">🇸🇳</span>
              <h3 className="text-lg font-bold text-white">Chaînes Sénégalaises & Africaines</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {[
                'Canaux généralistes', 'Chaînes d\'information', 'Chaînes sportives',
                'Canaux thématiques', 'Chaînes culturelles', 'Chaînes de divertissement',
                'Chaînes pour enfants', 'Chaînes documentaires', 'Les canaux de la diaspora',
                'Chaînes religieuses', 'Chaînes musicales'
              ].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Chaînes Sportives */}
          <div className="bg-[#111] border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-bold text-white">Chaînes sportives</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {[
                'Football européen', 'Football national', 'Football anglais', 'Football espagnol', 'Football italien',
                'Sport automobile', 'Motocyclisme', 'Basket-ball', 'Sports de combat', 'Multisport européen',
                'Streaming sportif', 'Football international', 'Sports américains', 'Tennis en direct', 'Cyclisme et athlétisme', 'Sports d\'hiver'
              ].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                  {tag}
                </span>
              ))}
              <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold text-cyan-400">
                +1 000 chaînes sportives
              </span>
            </div>
          </div>

          {/* Card 3: Chaînes Internationales */}
          <div className="bg-[#111] border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-bold text-white">Chaînes internationales — 190+ pays</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { flag: '🇫🇷', name: 'France' },
                { flag: '🇺🇸', name: 'États-Unis' },
                { flag: '🇨🇦', name: 'Canada' },
                { flag: '🇲🇦', name: 'Maroc' },
                { flag: '🇨🇮', name: 'Côte d\'Ivoire' },
                { flag: '🇲🇱', name: 'Mali' },
                { flag: '🇸🇦', name: 'Arabie Saoudite' },
                { flag: '🇬🇧', name: 'Royaume-Uni' },
                { flag: '🇪🇸', name: 'Espagne' },
                { flag: '🇮🇹', name: 'Italie' },
                { flag: '🇹🇷', name: 'Turquie' },
                { flag: '🇧🇷', name: 'Brésil' }
              ].map(country => (
                <div key={country.name} className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-lg">{country.flag}</span>
                  <span className="text-xs font-medium text-gray-300">{country.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Films et séries VOD */}
          <div className="bg-[#111] border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
              <h3 className="text-lg font-bold text-white">Films et séries — VOD</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { color: 'bg-red-500', icon: '🎬', label: 'Cinéma international' },
                { color: 'bg-purple-500', icon: '🏆', label: 'Séries Premium' },
                { color: 'bg-blue-500', icon: '✨', label: 'Animation & Famille' },
                { color: 'bg-cyan-500', icon: '💥', label: 'Films d\'action' },
                { color: 'bg-gray-500', icon: '📺', label: 'Documentaires' },
                { color: 'bg-orange-500', icon: '🌍', label: 'Cinéma Africain' }
              ].map(item => (
                <div key={item.label} className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center aspect-square sm:aspect-auto sm:py-6">
                  <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center text-xl shadow-lg`}>
                    {item.icon}
                  </div>
                  <span className="text-xs font-medium text-gray-300">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
