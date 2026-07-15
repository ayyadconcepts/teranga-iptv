export interface FAQItem {
  question: string;
  answer: string;
}

export const generalFAQ: FAQItem[] = [
  {
    question:
      'C\'est quoi l\'IPTV et comment ça fonctionne ?',
    answer:
      'L\'IPTV (Internet Protocol Television) est une technologie qui permet de regarder la télévision via votre connexion Internet, sans antenne parabolique ni câble. Le signal arrive directement sur votre appareil (Smart TV, téléphone, PC, TV Box) via votre connexion Wi-Fi ou 4G. Avec IPTV Sénégal, vous accédez à plus de 22 000 chaînes en direct, 118 000 films et 44 000 séries — tout ça pour une fraction du prix du câble traditionnel.',
  },
  {
    question:
      'Comment avoir les codes IPTV et activer mon abonnement ?',
    answer:
      'C\'est très simple : choisissez votre formule sur notre site, cliquez sur \"Commander sur WhatsApp\", effectuez le paiement via Wave ou Orange Money, et vous recevez vos codes (URL du serveur, nom d\'utilisateur et mot de passe) directement sur WhatsApp en moins de 5 minutes. Ces codes vous permettent de vous connecter depuis n\'importe quel appareil.',
  },
  {
    question:
      'Comment installer IPTV sur Smart TV, Android Box ou Fire Stick ?',
    answer:
      'Sur Android Box, Google TV ou Fire Stick, téléchargez IPTV Smarters Pro via le Play Store ou l\'APK. Sur Samsung Smart TV, cherchez l\'appli dans le Samsung App Store. Sur LG, utilisez le LG Content Store et installez Smart IPTV. Une fois l\'appli installée, entrez les codes reçus par WhatsApp et toutes les chaînes se chargent automatiquement. L\'installation prend moins de 5 minutes.',
  },
  {
    question:
      'Quelle est la meilleure application gratuite pour l\'IPTV ?',
    answer:
      'Nous recommandons IPTV Smarters Pro — c\'est l\'application la plus stable et la plus complète. Elle est gratuite et disponible sur Android, iOS, Smart TV Samsung/LG, Fire Stick et PC. Elle offre un guide des programmes (EPG), la gestion des favoris et un lecteur vidéo performant. Sur iPhone/iPad, vous pouvez aussi utiliser GSE Smart IPTV. Sur PC, VLC Media Player ou Kodi font très bien l\'affaire.',
  },
  {
    question:
      'Comment fonctionne IPTV Smarters Pro et comment le configurer ?',
    answer:
      'Après avoir installé IPTV Smarters Pro, ouvrez l\'appli et sélectionnez \"Ajouter un utilisateur\". Choisissez \"Xtream Codes API\" (la méthode la plus rapide), puis entrez le serveur, le nom d\'utilisateur et le mot de passe qu\'on vous envoie sur WhatsApp. L\'appli synchronise automatiquement toutes les chaînes et la VOD en 1 à 3 minutes. C\'est prêt !',
  },
  {
    question:
      'Comment regarder l\'IPTV sur PC ou ordinateur ?',
    answer:
      'Sur PC ou Mac, vous avez deux options : VLC Media Player (gratuit, ouvrez-le puis allez dans Média → Ouvrir un flux réseau et collez l\'URL M3U reçue par WhatsApp) ou Kodi avec le module PVR IPTV Simple Client pour une expérience complète avec EPG. Branchez un câble HDMI à votre TV pour profiter des chaînes sur grand écran.',
  },
  {
    question:
      'Où acheter son code IPTV au Sénégal et comment payer ?',
    answer:
      'Vous pouvez commander directement sur notre site terangaiptv.com. Le paiement se fait en FCFA via Wave, Orange Money ou Free Money — pas besoin de carte bancaire ni de compte étranger. Après le paiement, vos codes sont envoyés sur WhatsApp en moins de 5 minutes. Vous pouvez aussi demander un test gratuit de 24h avant de vous abonner.',
  },
  {
    question:
      'Pourquoi mon IPTV bloque tout le temps et comment résoudre ce problème ?',
    answer:
      'Les blocages sont généralement liés à la connexion Internet. Vérifiez que votre débit est d\'au moins 8 Mbps pour le HD (20 Mbps pour le 4K). Sur la 4G, rapprochez-vous de votre routeur ou utilisez un câble Ethernet. Avec IPTV Sénégal, notre technologie Anti-Freeze™ réduit les coupures à zéro même sur des connexions moyennes. Si le problème persiste, contactez notre support WhatsApp 24/7.',
  },
  {
    question:
      'Quelle connexion Internet faut-il pour l\'IPTV au Sénégal ?',
    answer:
      'Pour la qualité SD, 4 Mbps suffisent. Pour le HD, prévoyez 8 Mbps minimum. Pour le 4K, il faut 20 Mbps. La 4G au Sénégal (Orange, Free, Expresso) offre généralement un débit suffisant pour le HD. Si vous avez la fibre Sonatel, vous profiterez de la meilleure qualité possible. Notre service fonctionne avec tous les opérateurs sénégalais.',
  },
  {
    question:
      'Le test gratuit de 24h est-il vraiment sans engagement ?',
    answer:
      'Oui, le test gratuit de 24 heures est 100% sans engagement et sans aucune obligation d\'achat. Vous testez toutes les chaînes, la VOD et les séries pendant 24h. Si le service vous convient, vous choisissez l\'abonnement qui vous plaît. Sinon, il n\'y a rien à payer ni à annuler — zéro risque.',
  },
  {
    question:
      'Sur combien d\'appareils puis-je utiliser mon abonnement IPTV ?',
    answer:
      'Votre abonnement vous permet de connecter jusqu\'à 2 appareils simultanément. Vous pouvez l\'installer sur autant d\'appareils que vous le souhaitez (Smart TV, téléphone, tablette, PC, Fire Stick, Android Box), mais seuls 2 pourront streamer en même temps.',
  },
  {
    question:
      'Comment faire un abonnement IPTV et combien ça coûte ?',
    answer:
      'Nos abonnements commencent à 3 100 FCFA/mois. Choisissez votre formule (1 mois, 3 mois, 6 mois ou 1 an), cliquez sur \"Commander sur WhatsApp\", payez via Wave ou Orange Money, et recevez vos codes en 5 minutes. Plus la durée est longue, plus le prix par mois est avantageux. Vous pouvez aussi tester gratuitement pendant 24h avant de vous décider.',
  },
];

export const productFAQ: FAQItem[] = [
  ...generalFAQ.slice(0, 4),
  {
    question: 'Mon abonnement est-il activé immédiatement après le paiement ?',
    answer:
      'Oui, votre abonnement est activé dans les 5 minutes suivant la confirmation de votre paiement par Wave ou Orange Money. Vous recevez vos identifiants directement sur WhatsApp.',
  },
  ...generalFAQ.slice(4),
];

export const smartersFAQ: FAQItem[] = [
  generalFAQ[4], // Comment fonctionne IPTV Smarters Pro
  {
    question: 'IPTV Smarters Pro est-il compatible avec ma Smart TV Samsung/LG ?',
    answer:
      'Oui, IPTV Smarters Pro est compatible avec les Smart TV Samsung (Tizen), LG (WebOS), les TV Box Android (Xiaomi Mi Box, X96, etc.), les smartphones Android et iOS, les tablettes, et les PC/Mac. L\'application est gratuite à télécharger.',
  },
  {
    question: 'Quelle est la différence entre IPTV Smarters Pro et les autres applications ?',
    answer:
      'IPTV Smarters Pro est l\'application la plus populaire et la plus stable pour l\'IPTV. Elle offre un guide des programmes (EPG), un lecteur vidéo intégré performant, la gestion des favoris, et le support du multi-écran. C\'est l\'application que nous recommandons à tous nos clients au Sénégal.',
  },
  generalFAQ[2], // Comment installer IPTV
  generalFAQ[3], // Quelle application gratuite
  generalFAQ[7], // Pourquoi mon IPTV bloque
  generalFAQ[8], // Quelle connexion
];

export const cityFAQ: FAQItem[] = [
  generalFAQ[0], // C'est quoi l'IPTV
  generalFAQ[1], // Comment avoir les codes
  generalFAQ[2], // Comment installer
  generalFAQ[6], // Où acheter son code
  generalFAQ[8], // Quelle connexion
  generalFAQ[7], // Pourquoi mon IPTV bloque
  generalFAQ[9], // Test gratuit
  generalFAQ[11], // Comment faire un abonnement
];
