import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conditions d\'Utilisation - IPTV Sénégal',
  description: 'Conditions d\'utilisation de notre service IPTV.',
};

export default function TermsOfUse() {
  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-white mb-8">Conditions d'Utilisation</h1>
        <div className="prose prose-invert max-w-none text-muted-light space-y-6">
          <p>
            Bienvenue sur IPTV Sénégal. En utilisant notre site web et nos services, vous acceptez d'être lié par les conditions d'utilisation suivantes.
          </p>
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Utilisation du service</h2>
          <p>
            Nos services sont destinés à un usage personnel et non commercial. Vous ne pouvez pas revendre, distribuer ou partager votre abonnement avec des tiers sans notre autorisation explicite. Le partage de compte peut entraîner la suspension immédiate du service sans remboursement.
          </p>
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Contenu</h2>
          <p>
            IPTV Sénégal agit en tant que fournisseur de services pour la transmission de signaux. Nous n'hébergeons, ne stockons ni ne contrôlons le contenu diffusé via notre plateforme. 
          </p>
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. Paiements et remboursements</h2>
          <p>
            Tous les paiements sont finaux. Nous proposons une garantie satisfait ou remboursé sous certaines conditions (voir notre politique de remboursement). Nous offrons également un test gratuit de 24 heures pour vous permettre d'évaluer le service avant achat.
          </p>
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. Disponibilité du service</h2>
          <p>
            Bien que nous nous efforcions de fournir un service avec un temps de disponibilité de 99%, des interruptions peuvent survenir en raison de maintenances ou de problèmes techniques indépendants de notre volonté.
          </p>
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">5. Modifications des conditions</h2>
          <p>
            Nous nous réservons le droit de modifier ces conditions à tout moment. Les utilisateurs sont encouragés à consulter régulièrement cette page pour être informés de tout changement.
          </p>
        </div>
      </div>
    </div>
  );
}
