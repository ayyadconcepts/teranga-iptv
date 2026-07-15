import type { Metadata } from 'next';
import OffersGrid from '@/components/OffersGrid';
import FeatureList from '@/components/FeatureList';
import AboutIPTV from '@/components/AboutIPTV';
import ChannelShowcase from '@/components/ChannelShowcase';
import InstallationGuide from '@/components/InstallationGuide';
import PaymentMethods from '@/components/PaymentMethods';
import FAQSection from '@/components/FAQSection';

import { generalFAQ } from '@/lib/faq';
import { generateFAQJsonLd } from '@/lib/jsonld';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'IPTV Sénégal — Abonnement IPTV Premium à partir de 3100 FCFA',
  description:
    'Le meilleur abonnement IPTV Premium au Sénégal à partir de 3100 FCFA/mois. +22 000 chaînes TV en direct, Football, Cinéma. Test gratuit 24h.',
  alternates: {
    canonical: 'https://terangaiptv.com',
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQJsonLd(generalFAQ)),
        }}
      />

      {/* Hero */}
      <section 
        className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 flex items-center min-h-screen"
        style={{ 
          backgroundImage: "url('/images/iptv_senegal.jpeg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        {/* Oblique Overlay - Dark on left, fading to right */}
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(10,10,10,1)_20%,rgba(10,10,10,0.8)_50%,rgba(10,10,10,0.1)_100%)] z-0"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10 w-full flex justify-start">
          
          <div className="lg:w-[60%] text-left flex flex-col items-start">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 border border-white/20 backdrop-blur-md">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white shadow-sm overflow-hidden text-[10px]">
                🇸🇳
              </span>
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                N°1 de l'abonnement IPTV Sénégal
              </span>
            </div>
            
            <h1 className="mb-6 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl text-white text-left">
              <span className="text-vert">Abonnement IPTV premium</span>
              <br />
              le moins cher au Sénégal
            </h1>
            
            <p className="mb-8 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg text-left">
              Découvrez <strong>IPTV Sénégal</strong> nouvelle génération : plus de 22 000 chaînes, tout le sport européen et international en direct, 
              les meilleurs bouquets africains et tout le cinéma mondial en qualité 4K UHD. 
              Une installation simple, un flux stable anti-coupure, sur tous vos appareils.
            </p>



            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 w-full sm:w-auto">
              <a
                href="#offres"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-jaune px-8 py-4 text-sm font-bold text-black transition-transform hover:bg-jaune/90 hover:scale-105 shadow-lg shadow-jaune/20"
              >
                Voir les abonnements
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-medium text-white">
              <div className="flex items-center gap-3 sm:border-r sm:border-white/20 sm:pr-4">
                <div className="flex text-jaune">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span><strong>4.9/5</strong> · 12 847 avis</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-300">
                <svg className="h-4 w-4 text-vert" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Support client <strong>24/7 en français</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutIPTV />
      <FeatureList />
      <ChannelShowcase />
      <InstallationGuide />
      <OffersGrid />
      <PaymentMethods />
      <FAQSection faqs={generalFAQ} />
    </>
  );
}
