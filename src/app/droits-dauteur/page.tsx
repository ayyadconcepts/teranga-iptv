import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Droits d\'Auteur (DMCA) - IPTV Sénégal',
  description: 'Politique de droits d\'auteur et conformité DMCA.',
};

export default function CopyrightCompliant() {
  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-white mb-8">Politique de Droits d'Auteur (DMCA Compliant)</h1>
        <div className="prose prose-invert max-w-none text-muted-light space-y-6">
          <p>
            IPTV Sénégal respecte la propriété intellectuelle d'autrui et s'engage à se conformer à la loi sur les droits d'auteur du millénaire numérique (DMCA) et aux lois internationales sur les droits d'auteur.
          </p>
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Non-Hébergement de Contenu</h2>
          <p>
            Veuillez noter que <strong>IPTV Sénégal ne diffuse, n'héberge, ne copie, ni ne stocke aucun contenu multimédia (vidéos, films, émissions de télévision) sur ses propres serveurs.</strong> 
          </p>
          <p>
            Nous fournissons uniquement un accès à des flux de données et des liens disponibles publiquement sur Internet. Nous n'avons aucun contrôle sur ces flux ou sur les serveurs de contenu de tiers.
          </p>
          
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Notification de violation de droits d'auteur</h2>
          <p>
            Si vous êtes le propriétaire des droits d'auteur ou l'agent de ce propriétaire et que vous estimez qu'un contenu accessible par nos services enfreint vos droits d'auteur, vous pouvez soumettre une notification.
          </p>
          <p>
            Votre notification doit inclure les éléments suivants :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Une description détaillée de l'œuvre protégée par des droits d'auteur dont vous affirmez la violation.</li>
            <li>L'emplacement exact (URL, nom de chaîne ou adresse de flux) du matériel présumé en infraction pour nous permettre de le localiser.</li>
            <li>Vos coordonnées (nom, adresse, numéro de téléphone et adresse e-mail).</li>
            <li>Une déclaration de bonne foi indiquant que l'utilisation du matériel n'est pas autorisée par le propriétaire des droits, son agent ou la loi.</li>
            <li>Une déclaration sous peine de parjure indiquant que les informations de la notification sont exactes et que vous êtes autorisé à agir au nom du propriétaire des droits.</li>
            <li>Votre signature physique ou électronique.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. Contact pour les demandes de retrait</h2>
          <p>
            Veuillez envoyer toutes vos demandes de retrait pour violation présumée des droits d'auteur à l'adresse e-mail suivante :
          </p>
          <div className="bg-surface p-4 rounded-lg inline-block border border-border mt-2">
            <a href="mailto:contact@terangaiptv.com" className="text-jaune font-bold hover:underline text-lg">
              contact@terangaiptv.com
            </a>
          </div>
          <p className="mt-4">
            Une fois la demande vérifiée et validée, nous prendrons les mesures appropriées, qui peuvent inclure le blocage de l'accès aux flux concernés via nos listes de lecture.
          </p>
        </div>
      </div>
    </div>
  );
}
