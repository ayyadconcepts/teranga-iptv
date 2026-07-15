import Link from 'next/link';
import type { Offer } from '@/lib/offers';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import WhatsAppCTA from './WhatsAppCTA';

export default function OfferCard({ offer }: { offer: Offer }) {
  const isPremium = offer.popular; // We use popular for the elevated middle card

  return (
    <article
      className={`offer-card relative flex flex-col h-full rounded-[24px] border bg-surface p-5 lg:p-6 w-full ${
        isPremium
          ? 'offer-card-popular z-10 border-vert/50 bg-[#0c1a12] lg:-translate-y-4 shadow-2xl'
          : 'border-border'
      }`}
    >
      {/* Badge */}
      {offer.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex justify-center w-full">
          <span
            className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold tracking-wide shadow-lg ${
              offer.badgeColor === 'rouge'
                ? 'bg-rouge text-white'
                : 'bg-jaune text-background'
            }`}
          >
            {isPremium && (
              <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            )}
            {offer.badge.toUpperCase()}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6 border-b border-white/5 pb-6 text-center">
        <h3 className={`text-sm font-bold tracking-widest uppercase ${isPremium ? 'text-vert-light' : 'text-vert'}`}>
          {offer.name.split(' ')[0]} {/* Roughly matches ESSENTIEL, PREMIUM etc from design */}
        </h3>
        <p className="mt-2 text-sm text-muted-light font-medium">{offer.duration}</p>
        
        <div className="mt-4 flex items-baseline justify-center gap-1.5">
          <span className="text-4xl font-extrabold sm:text-5xl text-white tracking-tight">
            {offer.price === 0 ? 'Gratuit' : offer.price.toLocaleString('fr-FR')}
          </span>
          {offer.price > 0 && (
            <span className="text-xl font-bold text-jaune">FCFA</span>
          )}
        </div>
      </div>

      {/* Features */}
      <ul className="mb-8 flex-1 space-y-3.5">

        {offer.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-muted-light">
            <svg className="mt-0.5 h-4 w-4 shrink-0 text-vert" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            <span dangerouslySetInnerHTML={{ __html: feature }}></span>
          </li>
        ))}
      </ul>

      {/* Bonus / Savings */}
      {offer.savingsNote && (
        <div className="mb-6 flex items-center justify-center gap-2 rounded-lg bg-jaune/10 px-3 py-2 text-sm font-bold text-jaune">
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
          </svg>
          {offer.savingsNote}
        </div>
      )}

      {/* CTAs */}
      <div className="mt-auto flex flex-col gap-3">
        <a
          href={getWhatsAppUrl(offer.name, offer.priceLabel)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-vert px-4 py-3.5 text-sm font-bold text-white transition-all hover:bg-vert-light shadow-lg shadow-vert/20"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Commander maintenant
        </a>
      </div>

      {/* Details link */}
      <Link
        href={`/${offer.slug}`}
        className="mt-4 block text-center text-xs text-muted-light underline-offset-4 transition-colors hover:text-white hover:underline"
      >
        Voir les détails de l&apos;offre
      </Link>
    </article>
  );
}
