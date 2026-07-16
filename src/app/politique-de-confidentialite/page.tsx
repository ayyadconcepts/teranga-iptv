import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - IPTV Sénégal',
  description: 'Politique de confidentialité de notre service IPTV.',
};

export default function PrivacyPolicy() {
  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-white mb-8">Politique de Confidentialité</h1>
        <div className="prose prose-invert max-w-none text-muted-light space-y-6">
          <p>
            La protection de vos données personnelles est une priorité pour IPTV Sénégal. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.
          </p>
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Collecte des données</h2>
          <p>
            Nous collectons uniquement les informations nécessaires pour la création et la gestion de votre abonnement (comme votre numéro de téléphone WhatsApp pour l'envoi de vos accès ou l'adresse email). Nous ne collectons pas de données de paiement, car les transactions sont gérées par des prestataires tiers sécurisés (Wave, Orange Money).
          </p>
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Utilisation des informations</h2>
          <p>
            Les informations que nous recueillons sont utilisées exclusivement pour :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fournir et maintenir le service IPTV.</li>
            <li>Vous envoyer vos identifiants de connexion.</li>
            <li>Vous fournir un support technique via WhatsApp.</li>
            <li>Vous informer de mises à jour importantes de notre service.</li>
          </ul>
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. Protection des données</h2>
          <p>
            Nous mettons en œuvre des mesures de sécurité pour protéger vos informations personnelles contre tout accès, altération, divulgation ou destruction non autorisés.
          </p>
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. Partage des données</h2>
          <p>
            Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. 
          </p>
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">5. Vos droits</h2>
          <p>
            Vous avez le droit de demander l'accès, la rectification ou la suppression de vos données personnelles à tout moment en contactant notre support technique via WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
}
