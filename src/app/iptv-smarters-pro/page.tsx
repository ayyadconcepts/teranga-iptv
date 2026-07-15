import type { Metadata } from 'next';
import { smartersFAQ } from '@/lib/faq';
import { generateFAQJsonLd } from '@/lib/jsonld';
import FAQSection from '@/components/FAQSection';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import OffersGrid from '@/components/OffersGrid';
import PaymentMethods from '@/components/PaymentMethods';

export const metadata: Metadata = {
  title: 'IPTV Smarters Pro — Guide Complet pour Abonnement IPTV Premium | IPTV Sénégal',
  description:
    'Configurez IPTV Smarters Pro pour votre abonnement IPTV Premium au Sénégal (à partir de 3100 FCFA). Guide d\'installation sur Smart TV, Android, PC. Test gratuit.',
  alternates: {
    canonical: 'https://terangaiptv.com/iptv-smarters-pro',
  },
};

const installSteps = [
  {
    title: 'Télécharger IPTV Smarters Pro',
    description:
      'Rendez-vous sur le Play Store (Android), l\'App Store (iOS) ou téléchargez l\'APK directement pour votre TV Box ou Smart TV.',
  },
  {
    title: 'Ouvrir l\'application et choisir "Ajouter un utilisateur"',
    description:
      'Au premier lancement, l\'application vous propose d\'ajouter un profil utilisateur. Cliquez sur le bouton correspondant.',
  },
  {
    title: 'Sélectionner "Se connecter avec l\'API Xtream Codes"',
    description:
      'Parmi les options de connexion, choisissez "Xtream Codes API". C\'est la méthode la plus simple et la plus stable.',
  },
  {
    title: 'Entrer les identifiants reçus par WhatsApp',
    description:
      'Saisissez l\'URL du serveur, le nom d\'utilisateur et le mot de passe que nous vous envoyons par WhatsApp après votre commande.',
  },
  {
    title: 'Profiter de +18 000 chaînes en direct',
    description:
      'C\'est tout ! Naviguez entre les catégories, ajoutez vos chaînes préférées en favoris et profitez du meilleur de l\'IPTV au Sénégal.',
  },
];

const compatibleDevices = [
  {
    name: 'Smart TV Samsung / LG',
    description: 'Tizen (Samsung) et WebOS (LG) supportés nativement',
    icon: 'M4 6a2 2 0 012-2h12a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm6 10h4m-2 0v3',
  },
  {
    name: 'Android TV Box',
    description: 'Xiaomi Mi Box, X96, T95, Mecool et toutes les box Android',
    icon: 'M9 17H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2h-2m-6 0h6m-6 0v4m6-4v4',
  },
  {
    name: 'Smartphone & Tablette',
    description: 'Android (Play Store) et iOS (App Store)',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  },
  {
    name: 'PC & Mac',
    description: 'Fonctionne via BlueStacks ou tout émulateur Android',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
];

export default function IPTVSmartersProPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQJsonLd(smartersFAQ)),
        }}
      />

      <article>
        {/* Hero */}
        <section className="border-b border-border py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <span className="mb-4 inline-block rounded-full border border-vert/30 bg-vert/10 px-3 py-1 text-xs font-medium text-vert">
              Guide d&apos;installation • Toutes plateformes
            </span>
            <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Guide complet{' '}
              <span className="text-vert">IPTV Smarters Pro</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              IPTV Smarters Pro est l&apos;application la plus populaire et la
              plus fiable pour regarder l&apos;IPTV au Sénégal. Interface
              intuitive, guide des programmes (EPG), lecteur vidéo performant et
              support multi-écrans. Voici comment l&apos;installer en moins de 5
              minutes.
            </p>
            <WhatsAppCTA
              offerName="Test Gratuit 24h"
              price="0"
              label="Tester gratuitement 24h"
              size="lg"
            />
            <p className="mt-4 text-xs text-muted">
              Recevez vos identifiants IPTV Smarters Pro en 5 minutes sur
              WhatsApp
            </p>
          </div>
        </section>

        {/* Installation steps */}
        <section className="border-b border-border py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="mb-2 text-center text-2xl font-bold sm:text-3xl">
              Installation en 5 étapes
            </h2>
            <p className="mb-10 text-center text-sm text-muted">
              Suivez ce guide pas à pas pour configurer IPTV Smarters Pro sur
              n&apos;importe quel appareil.
            </p>
            <ol className="space-y-4">
              {installSteps.map((step, index) => (
                <li
                  key={index}
                  className="flex gap-4 rounded-xl border border-border bg-surface p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-vert text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground sm:text-base">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Compatible devices */}
        <section className="border-b border-border py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="mb-2 text-center text-2xl font-bold sm:text-3xl">
              Appareils compatibles
            </h2>
            <p className="mb-10 text-center text-sm text-muted">
              IPTV Smarters Pro fonctionne sur tous vos écrans.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {compatibleDevices.map((device) => (
                <div
                  key={device.name}
                  className="rounded-xl border border-border bg-surface p-5 text-center"
                >
                  <svg
                    className="mx-auto mb-3 h-10 w-10 text-vert"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d={device.icon} />
                  </svg>
                  <h3 className="text-sm font-semibold text-foreground">
                    {device.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted">
                    {device.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-b border-border bg-surface py-16">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
            <h2 className="mb-3 text-xl font-bold sm:text-2xl">
              Prêt à tester IPTV Smarters Pro ?
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-muted">
              Essayez gratuitement pendant 24h, sans engagement. Recevez vos
              identifiants par WhatsApp et commencez à regarder immédiatement.
            </p>
            <WhatsAppCTA
              offerName="Test Gratuit 24h"
              price="0"
              label="Essai Gratuit 24h — Sans Engagement"
              size="lg"
            />
          </div>
        </section>

        <OffersGrid />
        <PaymentMethods />
        <FAQSection faqs={smartersFAQ} />
      </article>
    </>
  );
}
