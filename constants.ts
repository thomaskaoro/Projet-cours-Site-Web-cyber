
export const ASSETS = {
  VIDEO_HERO: "https://res.cloudinary.com/djil4gwsy/video/upload/v1771509315/Gen-4_Turbo_je_voudrais_une_video_qu_on_pourrait_trouver_sur_un_site_web_de_consultant_en_cybers%C3%A9curit%C3%A9_une_video_sur_des_ton_b_xkwfrj.mp4",
  IMG_ARCHITECTURE: "https://res.cloudinary.com/djil4gwsy/image/upload/v1771509281/asset_rd1zb84n3_1771506606638_lc6k2i.jpg",
  IMG_FOUNDER: "https://res.cloudinary.com/djil4gwsy/image/upload/v1771509281/Portrait_Open_Space_-_Pose_1_igevbx.png",
  IMG_DATA: "https://res.cloudinary.com/djil4gwsy/image/upload/v1771509281/asset_svjpx5msn_1771506606638_wwdr9g.jpg",
  IMG_MEETING: "https://res.cloudinary.com/djil4gwsy/image/upload/v1771509280/asset_jxxrgim1c_1771506606638_zpoqfp.jpg",
  IMG_OFFICE: "https://res.cloudinary.com/djil4gwsy/image/upload/v1771509280/asset_cwca5d5dy_1771506606638_pfciws.jpg"
};

export const OFFICES = [
  {
    city: "Paris",
    address: "8 Avenue des Champs-Élysées",
    zip: "75008 Paris",
    country: "France"
  },
  {
    city: "Marseille",
    address: "2 Place d'Arvieux, La Joliette",
    zip: "13002 Marseille",
    country: "France"
  }
];

export const TRUSTED_CLIENTS = [
  "Orange",
  "LVMH",
  "TotalEnergies",
  "Airbus",
  "Sanofi",
  "BNP Paribas",
  "Thales",
  "Schneider Electric"
];

export const SERVICES = [
  {
    title: { fr: "Cyber Risk Governance Advisory", en: "Cyber Risk Governance Advisory" },
    description: { 
      fr: "Accompagnement des instances dirigeantes dans la définition de l'appétence au risque et la structuration de la gouvernance globale.",
      en: "Supporting executive boards in defining risk appetite and structuring global governance."
    },
    details: {
      fr: ["Reporting exécutif", "Due Diligence M&A", "Intégration stratégique"],
      en: ["Executive Reporting", "M&A Due Diligence", "Strategic Integration"]
    }
  },
  {
    title: { fr: "vCISO & Strategic Leadership", en: "vCISO & Strategic Leadership" },
    description: {
      fr: "Expertise de pointe en direction de la sécurité externalisée pour piloter votre stratégie numérique sur le long terme.",
      en: "Cutting-edge expertise in outsourced security leadership to drive your long-term digital strategy."
    },
    details: {
      fr: ["Pilotage budgétaire", "Encadrement expert", "Interface autorités"],
      en: ["Budget Steering", "Expert Mentorship", "Regulatory Interface"]
    }
  },
  {
    title: { fr: "Transformation & Maturité", en: "Transformation & Maturity" },
    description: {
      fr: "Programmes de transformation sur-mesure pour aligner votre résilience organisationnelle sur les standards internationaux (ISO 27001, NIS2).",
      en: "Bespoke transformation programs to align organizational resilience with international standards (ISO 27001, NIS2)."
    },
    details: {
      fr: ["Alignement réglementaire", "Tableaux de bord stratégiques", "Culture sécurité"],
      en: ["Regulatory Alignment", "Strategic Dashboards", "Security Culture"]
    }
  },
  {
    title: { fr: "Crisis Management", en: "Crisis Management" },
    description: {
      fr: "Préparation et réponse exécutive pour protéger la réputation et assurer la continuité d'activité face aux incidents majeurs.",
      en: "Executive preparation and response to protect reputation and ensure business continuity during major incidents."
    },
    details: {
      fr: ["Simulations COMEX", "Communication stratégique", "Post-incident response"],
      en: ["Board Simulations", "Strategic Communication", "Post-incident Response"]
    }
  }
];
