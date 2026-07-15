'use client';

import React, { useState } from 'react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

type TabKey = 'android' | 'smarttv' | 'iphone' | 'pc';

interface Step {
  title: string;
  description: string;
}

const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
  {
    key: 'android',
    label: 'Android / Google TV',
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    key: 'smarttv',
    label: 'Smart TV Samsung / LG',
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    key: 'iphone',
    label: 'iPhone / iPad',
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    key: 'pc',
    label: 'PC / Ordinateur',
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const stepsData: Record<TabKey, { heading: string; steps: Step[] }> = {
  android: {
    heading: 'Installer IPTV sur Android, Google TV et Fire Stick',
    steps: [
      {
        title: 'Activez l\'installation depuis des sources inconnues',
        description:
          'Sur Android Box ou Google TV, allez dans Paramètres → Sécurité et activez « Sources inconnues ». Sur Fire Stick, allez dans Paramètres → Mon Fire TV → Options du développeur → Applications provenant de sources inconnues.',
      },
      {
        title: 'Installez IPTV Smarters Pro',
        description:
          'Téléchargez l\'APK d\'IPTV Smarters Pro via le navigateur de l\'appareil ou utilisez l\'application « Downloader » sur le Fire Stick. C\'est la meilleure appli pour profiter de toutes les chaînes sans souci.',
      },
      {
        title: 'Configurez avec les identifiants reçus par WhatsApp',
        description:
          'Dans IPTV Smarters, choisissez « Xtream Codes API » — c\'est la méthode la plus rapide. Entrez le serveur, l\'utilisateur et le mot de passe qu\'on vous a envoyés. Ça prend littéralement 30 secondes.',
      },
      {
        title: 'Attendez la synchronisation des chaînes',
        description:
          'L\'application va synchroniser automatiquement toutes les chaînes en direct et le catalogue VOD. Selon la vitesse de votre connexion, ça prend entre 1 et 3 minutes.',
      },
      {
        title: 'C\'est prêt — profitez de la TV en 4K !',
        description:
          'Marquez vos chaînes préférées, ajustez l\'EPG et organisez vos listes comme vous le souhaitez. Fire Stick et Android Box fonctionnent en 4K avec HDR sans aucun problème — parfait pour les matchs de foot et les films.',
      },
    ],
  },
  smarttv: {
    heading: 'Installer IPTV sur Samsung et LG Smart TV',
    steps: [
      {
        title: 'Téléchargez IPTV Smarters Pro ou Smart IPTV',
        description:
          'Sur Samsung Smart TV, accédez à l\'App Store de Samsung et recherchez « IPTV Smarters ». Sur LG, utilisez le LG Content Store et recherchez « Smart IPTV ». Installez l\'application gratuitement.',
      },
      {
        title: 'Ouvrez l\'application et sélectionnez « Ajouter un utilisateur »',
        description:
          'Quand vous ouvrez IPTV Smarters, allez sur « Ajouter un utilisateur ». Selon ce qu\'on vous envoie, vous avez deux options : les codes Xtream (utilisateur + mot de passe) ou l\'URL M3U. Dites-nous votre appareil et on vous enverra la bonne méthode.',
      },
      {
        title: 'Entrez les informations d\'identification reçues sur WhatsApp',
        description:
          'Quand vous payez, vous nous envoyez un message via WhatsApp et on vous envoie tout : l\'URL, votre nom d\'utilisateur et votre mot de passe. Vous copiez chaque champ dans l\'appli et vous validez — ça prend littéralement 30 secondes.',
      },
      {
        title: 'Attendez que les chaînes se chargent',
        description:
          'L\'application va charger automatiquement les chaînes, organisées par catégories : Sénégal, Afrique, Sports, International et VOD. Ce processus ne prend que 1 à 2 minutes.',
      },
      {
        title: 'Commencez à regarder la télévision en 4K Ultra HD',
        description:
          'C\'est bon, tout est prêt ! Allez sur les chaînes, choisissez une catégorie et regardez. La première fois, il faut quelques secondes pour charger le catalogue complet — après ça, il suffit de naviguer normalement dans l\'EPG ou la liste VOD.',
      },
    ],
  },
  iphone: {
    heading: 'Installer IPTV sur iPhone et iPad',
    steps: [
      {
        title: 'Téléchargez GSE Smart IPTV ou IPTV Smarters',
        description:
          'Ouvrez l\'App Store sur votre iPhone ou iPad et cherchez « GSE Smart IPTV » (gratuit) ou « IPTV Smarters Pro ». Les deux sont compatibles avec iOS 14 et supérieur et fonctionnent parfaitement sur tous les modèles d\'iPhone et d\'iPad.',
      },
      {
        title: 'Ouvrez l\'application et accédez aux paramètres',
        description:
          'Sur GSE Smart IPTV, appuyez sur « Listes de lecture distantes » ; sur IPTV Smarters, allez sur « Ajouter un utilisateur ». Dans les deux cas, vous trouverez le champ pour Xtream Codes — c\'est la méthode qu\'on vous enverra sur WhatsApp.',
      },
      {
        title: 'Entrez les informations d\'identification reçues',
        description:
          'Ouvrez le message WhatsApp, copiez le serveur, l\'utilisateur et le mot de passe dans les champs de l\'appli. Appuyez sur Enregistrer — utilisez le copier/coller iOS pour aller plus vite. Ça prend moins d\'une minute.',
      },
      {
        title: 'Attendez que la liste des chaînes se charge',
        description:
          'L\'application charge toutes les chaînes automatiquement — vous voyez la progression sur l\'écran. Ça prend 1 à 2 minutes selon votre connexion.',
      },
      {
        title: 'Caster sur Apple TV ou Chromecast (en option)',
        description:
          'Vous avez une Apple TV ou une TV compatible ? Utilisez AirPlay et envoyez tout sur grand écran. Ça fonctionne parfaitement — les chaînes 4K sont bien plus belles sur un écran de salon que sur un téléphone portable.',
      },
    ],
  },
  pc: {
    heading: 'Installer IPTV sur PC et Mac',
    steps: [
      {
        title: 'Téléchargez VLC Media Player ou Kodi',
        description:
          'Pour commencer rapidement : VLC (gratuit, vous l\'avez probablement déjà). Pour une expérience plus complète avec EPG et organisation des chaînes : Kodi avec le module complémentaire IPTV PVR. Les deux fonctionnent sous Windows, Mac et Linux.',
      },
      {
        title: 'Dans VLC : ouvrez directement la liste M3U',
        description:
          'Ouvrez VLC, cliquez sur « Média » → « Ouvrir un flux réseau » et collez l\'URL de la liste M3U qu\'on vous a envoyée sur WhatsApp. Cliquez sur « Play » pour charger toutes les chaînes de la playlist.',
      },
      {
        title: 'Sur Kodi : activez le module PVR IPTV et ajoutez la liste',
        description:
          'Sur Kodi, allez dans Modules complémentaires → installez « PVR IPTV Simple Client ». Dans les paramètres, saisissez l\'URL M3U reçue et l\'URL du fichier XMLTV pour le guide EPG. Activez le module et redémarrez Kodi.',
      },
      {
        title: 'Accès aux chaînes et à la VOD',
        description:
          'Sur Kodi, allez dans « TV » depuis le menu principal pour voir les chaînes en direct et l\'EPG. Pour la VOD, accédez à la section « Vidéos ». Dans VLC, toutes les chaînes apparaissent dans la playlist organisée par catégories.',
      },
      {
        title: 'Branchez sur le téléviseur pour une expérience maximale',
        description:
          'Un câble HDMI du PC au téléviseur et vous avez toutes les chaînes en 4K sur grand écran. Pour ceux qui n\'ont pas de Smart TV mais qui en ont un portable, c\'est la solution la plus simple et la moins chère du marché.',
      },
    ],
  },
};

export default function InstallationGuide() {
  const [activeTab, setActiveTab] = useState<TabKey>('android');
  const currentData = stepsData[activeTab];

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Comment utiliser IPTV Sénégal — Guide complet : IPTV Smarters Pro et applications IPTV
          </h2>
          <p className="text-muted-light text-base sm:text-lg">
            Pas de techniciens, pas d&apos;installations physiques — vous pouvez le faire vous-même en moins de 5 minutes, sur n&apos;importe quel écran que vous avez à la maison.
          </p>
        </div>

        {/* Tabs + Content */}
        <div className="mx-auto max-w-4xl">
          {/* Tab bar */}
          <div className="flex flex-wrap border-b border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-5 py-3.5 text-sm font-medium transition-all border-b-2 -mb-px ${
                  activeTab === tab.key
                    ? 'border-vert text-vert'
                    : 'border-transparent text-muted-light hover:text-white hover:border-white/30'
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' / ')[0].split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Content area */}
          <div className="bg-[#111] border border-white/10 border-t-0 rounded-b-2xl p-6 sm:p-10">
            <h3 className="text-lg font-bold text-white mb-10">{currentData.heading}</h3>

            {/* Steps */}
            <div className="space-y-8">
              {currentData.steps.map((step, idx) => (
                <div key={idx} className="flex gap-5">
                  {/* Number circle */}
                  <div className="shrink-0 flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-cyan-400 text-cyan-400 text-sm font-bold">
                      {idx + 1}
                    </div>
                  </div>
                  {/* Text */}
                  <div className="pt-1">
                    <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp help banner */}
          <div className="mt-8 bg-surface border border-white/10 rounded-2xl p-6 sm:p-8 text-center">
            <p className="text-gray-400 text-sm mb-5">
              Vous avez des doutes ou vous êtes bloqué à un moment donné ? Envoyez un message sur WhatsApp et on vous aide en temps réel. La plupart des installations sont résolues en moins de 10 minutes avec notre support.
            </p>
            <a
              href={getWhatsAppUrl('Aide Installation', '')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-vert px-6 py-3 text-sm font-bold text-white transition-all hover:bg-vert-light hover:scale-105 shadow-lg shadow-vert/20"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Aide à l&apos;installation via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
