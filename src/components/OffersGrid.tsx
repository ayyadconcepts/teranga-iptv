import { offers } from '@/lib/offers';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function OffersGrid() {
  const paidOffers = offers.filter(o => o.id !== 'test-24h');

  return (
    <section id="offres" className="py-20 sm:py-28 bg-[#050a07] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-vert/10 blur-[120px] pointer-events-none rounded-full"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-medium tracking-widest text-muted-light uppercase">
            Un seul abonnement, toutes les chaînes
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Choisissez votre forfait
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-light">
            Payez par carte bancaire, Wave ou Orange Money, activation immédiate, 
            et profitez de la garantie satisfait ou remboursé.
          </p>
        </div>

        {/* Shared features - displayed once above the cards */}


        {/* 4 Plans - same row */}
        <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {paidOffers.map((offer) => {
            const isAnnual = offer.id === '1-an';
            return (
              <div
                key={offer.id}
                className={`relative flex flex-col items-center rounded-2xl border p-6 text-center transition-transform hover:scale-[1.02] ${
                  isAnnual
                    ? 'border-rouge/50 bg-[#1a0a0a] shadow-2xl shadow-rouge/10'
                    : 'border-white/10 bg-surface'
                }`}
              >
                {/* Badge */}
                {offer.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider shadow-lg ${
                        offer.badgeColor === 'rouge'
                          ? 'bg-rouge text-white'
                          : 'bg-jaune text-background'
                      }`}
                    >
                      {offer.badge}
                    </span>
                  </div>
                )}

                {/* Duration */}
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-vert">
                  {offer.duration}
                </p>

                {/* Price */}
                <div className="mt-4 mb-5 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white lg:text-4xl">
                    {offer.price.toLocaleString('fr-FR')}
                  </span>
                  <span className="text-sm font-bold text-jaune">FCFA</span>
                </div>

                {/* Savings */}
                {offer.savingsNote && (
                  <p className="mb-4 text-xs font-semibold text-jaune">
                    {offer.savingsNote}
                  </p>
                )}

                {/* Features */}
                <ul className="w-full mb-5 space-y-2 text-left">
                  {offer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-muted-light">
                      <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-vert" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={getWhatsAppUrl(offer.name, offer.priceLabel)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white transition-all hover:scale-105 ${
                    isAnnual
                      ? 'bg-rouge hover:bg-red-600 shadow-lg shadow-rouge/30'
                      : 'bg-vert hover:bg-vert-light shadow-lg shadow-vert/20'
                  }`}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Commander
                </a>
              </div>
            );
          })}
        </div>

        {/* 24h Free Trial - simple banner below */}
        <div className="mx-auto max-w-3xl mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 rounded-2xl border border-jaune/30 bg-jaune/5 px-8 py-6">
          <p className="text-white text-sm sm:text-base font-medium text-center sm:text-left">
            Vous hésitez ? <strong className="text-jaune">Testez gratuitement pendant 24h</strong> — aucun engagement, aucune carte requise.
          </p>
          <a
            href={getWhatsAppUrl('Test Gratuit 24h', 'Gratuit')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-jaune px-6 py-3 text-sm font-bold text-black transition-all hover:bg-yellow-400 hover:scale-105"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Essai gratuit 24h
          </a>
        </div>
      </div>
    </section>
  );
}
