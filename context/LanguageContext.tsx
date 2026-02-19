
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
      if (result && result[k]) result = result[k];
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
    about: {
      tag: 'Le Cabinet',
      title: 'Indépendance. Autorité. Discrétion.',
      subtitle: "MLT Security Consulting est un cabinet de conseil stratégique né d'une conviction : la cybersécurité est le premier pilier de la confiance numérique moderne et un enjeu majeur de gouvernance.",
      visionTitle: 'Vision Exécutive',
      visionDesc: "Nous refusons l'approche purement technique. Pour MLT, la cybersécurité est un levier de performance qui doit être piloté au niveau du COMEX.",
      philosophyTitle: 'Philosophie de Résilience',
      philosophyDesc: "Un accompagnement fondé sur une compréhension profonde des enjeux business pour transformer la contrainte en socle de continuité.",
      indepTitle: 'Indépendance Totale',
      indepDesc: "Aucun lien avec des éditeurs. Notre objectivité est absolue, garantissant des recommandations alignées sur vos intérêts stratégiques.",
      historyTag: 'Notre Histoire',
      historyTitle: 'Une expertise forgée au sein d’environnements critiques.',
      historySub: "MLT est né de plus de dix années d'intervention au sein d'organisations exposées à des menaces étatiques et des exigences réglementaires extrêmes.",
      founderQuote: "La cybersécurité n'est plus une option technique. C'est l'armure invisible de votre stratégie de croissance.",
      bridgeTitle: "Combler l'écart entre la technique et la stratégie."
    },
    insights: {
      tag: 'Insights & Publications',
      title: 'Analyses prospectives pour décideurs.',
      subtitle: 'Retrouvez nos notes de synthèse et publications stratégiques pour décrypter les enjeux cyber de demain.',
      download: 'Télécharger la note stratégique',
      newsletterTitle: 'Newsletter Confidentielle',
      newsletterSub: 'Recevez trimestriellement notre analyse macro des risques cyber directement dans votre boîte mail.',
      subscribe: "S'abonner"
    },
    contact: {
      tag: 'Canal Exécutif',
      title: 'Engagez une collaboration confidentielle.',
      subtitle: 'Chaque échange est traité avec le plus haut niveau de discrétion. Pour toute demande urgente ou prise de contact directe au niveau décisionnel.',
      offices: 'Nos implantations stratégiques',
      officeParis: 'Siège Paris',
      officeMarseille: 'Bureau Méditerranée',
      formTitle: 'Formulaire de Contact Stratégique',
      formName: 'Nom Complet',
      formOrg: 'Organisation',
      formEmail: 'Email Professionnel',
      formSubject: 'Sujet de l\'échange',
      formMessage: 'Message',
      formSubmit: 'Transmettre ma demande',
      availability: 'Disponibilité',
      confTitle: 'Engagement de confidentialité',
      confDesc: "MLT Security Consulting s'engage à respecter la plus stricte confidentialité dès le premier contact. Aucune donnée n'est partagée avec des tiers sans accord explicite écrit.",
      assessmentTitle: "Besoin d'une estimation stratégique immédiate ?",
      assessmentSub: "Utilisez notre outil d'évaluation assisté par IA pour obtenir une première vision de votre feuille de route cyber.",
      assessmentBtn: "Lancer l'Évaluation"
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
    about: {
      tag: 'The Firm',
      title: 'Independence. Authority. Discretion.',
      subtitle: "MLT Security Consulting is a strategic advisory firm born from a conviction: cybersecurity is the primary pillar of modern digital trust and a major governance issue.",
      visionTitle: 'Executive Vision',
      visionDesc: "We refuse a purely technical approach. For MLT, cybersecurity is a performance lever that must be driven at the Board level.",
      philosophyTitle: 'Resilience Philosophy',
      philosophyDesc: "Support based on a deep understanding of business challenges to transform constraints into a foundation for continuity.",
      indepTitle: 'Total Independence',
      indepDesc: "No links with vendors. Our objectivity is absolute, guaranteeing recommendations aligned with your strategic interests.",
      historyTag: 'Our History',
      historyTitle: 'Expertise forged within critical environments.',
      historySub: "MLT was born from over ten years of intervention within organizations exposed to state threats and extreme regulatory requirements.",
      founderQuote: "Cybersecurity is no longer a technical option. It is the invisible armor of your growth strategy.",
      bridgeTitle: "Bridging the gap between technique and strategy."
    },
    insights: {
      tag: 'Insights & Publications',
      title: 'Prospective analyses for decision-makers.',
      subtitle: 'Find our summaries and strategic publications to decipher tomorrow’s cyber challenges.',
      download: 'Download strategic paper',
      newsletterTitle: 'Confidential Newsletter',
      newsletterSub: 'Receive our quarterly macro analysis of cyber risks directly in your inbox.',
      subscribe: 'Subscribe'
    },
    contact: {
      tag: 'Executive Channel',
      title: 'Engage in a confidential collaboration.',
      subtitle: 'Each exchange is handled with the highest level of discretion. For urgent requests or direct decision-level contact.',
      offices: 'Strategic Locations',
      officeParis: 'Paris Headquarters',
      officeMarseille: 'Mediterranean Office',
      formTitle: 'Strategic Contact Form',
      formName: 'Full Name',
      formOrg: 'Organization',
      formEmail: 'Professional Email',
      formSubject: 'Exchange Subject',
      formMessage: 'Message',
      formSubmit: 'Submit Request',
      availability: 'Availability',
      confTitle: 'Confidentiality Commitment',
      confDesc: "MLT Security Consulting commits to the strictest confidentiality from the first contact. No data is shared with third parties without explicit written agreement.",
      assessmentTitle: "Need an immediate strategic estimation?",
      assessmentSub: "Use our AI-assisted assessment tool to get a first view of your cyber roadmap.",
      assessmentBtn: "Launch Assessment"
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
    }
  }
};
