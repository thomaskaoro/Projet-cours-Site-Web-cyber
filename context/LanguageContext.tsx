
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string) => {
    const keys = key.split('.');
    let result: any = TRANSLATIONS[language];
    for (const k of keys) {
      if (result[k]) result = result[k];
      else return key;
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

const TRANSLATIONS: Record<Language, any> = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'Le Cabinet',
      services: 'Advisory Services',
      sectors: 'Secteurs',
      insights: 'Insights',
      contact: 'Contact',
      cta: 'Rendez-vous Confidentiel'
    },
    home: {
      heroTag: 'Executive Advisory',
      heroTitle: 'Strategic Cyber',
      heroTitleItalic: 'Resilience.',
      heroSub: "La cybersécurité n'est plus un sujet technique. C'est un enjeu de gouvernance, de réputation et de continuité d'activité.",
      heroBtn1: 'Conseil Exécutif',
      heroBtn2: 'Notre Approche',
      visionTag: 'La Cybersécurité comme levier de valeur',
      visionTitle: "L'enjeu n'est plus la protection technique, mais la survie stratégique.",
      visionSub: "Nous accompagnons les organisations qui considèrent la sécurité non pas comme un centre de coût, mais comme un socle de confiance indispensable à la performance globale.",
      quote: "La résilience est la forme ultime de la stratégie.",
      srvTag: 'Advisory Services',
      srvTitle: 'Une expertise dédiée au Board.',
      srvSub: "Des solutions pensées pour les décideurs, loin du jargon technique, centrées sur le risque et l'impact business.",
      ctaTitle: 'Engagez une discussion confidentielle.',
      ctaSub: "Chaque intervention commence par une écoute attentive des enjeux de votre organisation. Contact direct au niveau exécutif.",
      ctaBtn: 'Prendre contact',
      trusted: 'Ils nous font confiance'
    },
    footer: {
      desc: 'Partenaire de confiance des directions générales pour la gouvernance du risque cyber et la résilience stratégique des actifs sensibles.',
      rights: 'Confidentialité Absolue.'
    },
    chatbot: {
      title: 'Conseiller Stratégique IA',
      placeholder: 'Posez votre question...',
      welcome: 'Bonjour. Comment puis-je vous assister dans votre réflexion stratégique sur la cybersécurité ?'
    },
    assessment: {
      title: 'Évaluation Stratégique',
      subtitle: 'Générez une estimation préliminaire de votre feuille de route cyber.',
      step1: 'Organisation & Secteur',
      step2: 'Enjeux Critiques',
      step3: 'Services Requis',
      generate: 'Générer l\'estimation stratégique',
      reset: 'Recommencer',
      download: 'Conserver l\'analyse'
    },
    contact: {
      offices: 'Nos implantations stratégiques',
      officeParis: 'Siège Paris',
      officeMarseille: 'Bureau Méditerranée'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'The Firm',
      services: 'Advisory Services',
      sectors: 'Sectors',
      insights: 'Insights',
      contact: 'Contact',
      cta: 'Confidential Meeting'
    },
    home: {
      heroTag: 'Executive Advisory',
      heroTitle: 'Strategic Cyber',
      heroTitleItalic: 'Resilience.',
      heroSub: "Cybersecurity is no longer a technical issue. It is a matter of governance, reputation, and business continuity.",
      heroBtn1: 'Executive Advisory',
      heroBtn2: 'Our Approach',
      visionTag: 'Cybersecurity as a Value Lever',
      visionTitle: "The challenge is no longer technical protection, but strategic survival.",
      visionSub: "We support organizations that view security not as a cost center, but as a foundation of trust essential to global performance.",
      quote: "Resilience is the ultimate form of strategy.",
      srvTag: 'Advisory Services',
      srvTitle: 'Expertise Dedicated to the Board.',
      srvSub: "Solutions designed for decision-makers, free from technical jargon, focused on risk and business impact.",
      ctaTitle: 'Engage in a confidential discussion.',
      ctaSub: "Every engagement begins with a careful listening of your organization's challenges. Direct executive-level contact.",
      ctaBtn: 'Get in Touch',
      trusted: 'Trusted by leaders'
    },
    footer: {
      desc: 'Trusted partner for executive boards in cyber risk governance and strategic resilience of sensitive assets.',
      rights: 'Absolute Confidentiality.'
    },
    chatbot: {
      title: 'AI Strategic Advisor',
      placeholder: 'Ask your question...',
      welcome: 'Good day. How may I assist you with your strategic cybersecurity considerations?'
    },
    assessment: {
      title: 'Strategic Assessment',
      subtitle: 'Generate a preliminary estimate of your cyber roadmap.',
      step1: 'Organization & Sector',
      step2: 'Critical Challenges',
      step3: 'Required Services',
      generate: 'Generate Strategic Estimate',
      reset: 'Start Over',
      download: 'Save Analysis'
    },
    contact: {
      offices: 'Strategic Locations',
      officeParis: 'Paris Headquarters',
      officeMarseille: 'Mediterranean Office'
    }
  }
};
