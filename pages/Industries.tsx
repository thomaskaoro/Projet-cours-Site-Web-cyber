
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { ASSETS } from '../constants';
import { Factory, Zap, HeartPulse, Landmark, Cpu, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Industries: React.FC = () => {
  const { language } = useLanguage();

  const SECTORS = [
    { 
      name: language === 'fr' ? 'Industrie Critique' : 'Critical Industry', 
      icon: <Factory />, 
      desc: language === 'fr' 
        ? 'Protection de la chaîne de production et du secret industriel. Sécurisation IT/OT pour prévenir tout arrêt d\'activité.' 
        : 'Protection of production lines and industrial secrets. Securing IT/OT to prevent business interruption.',
      details: language === 'fr' 
        ? ['Sécurisation automates (ICS)', 'Protection Propriété Intellectuelle', 'Résilience Supply Chain']
        : ['ICS Security', 'IP Protection', 'Supply Chain Resilience']
    },
    { 
      name: language === 'fr' ? 'Banque & Finance' : 'Banking & Finance', 
      icon: <Landmark />, 
      desc: language === 'fr' 
        ? 'Maîtrise du risque systémique et conformité DORA. Protection des actifs numériques et des flux transactionnels.' 
        : 'Systemic risk management and DORA compliance. Protection of digital assets and transactional flows.',
      details: language === 'fr' 
        ? ['Conformité DORA / ACPR', 'Sécurisation des paiements', 'Risk Reporting au Board']
        : ['DORA / ACPR Compliance', 'Payment Security', 'Board Risk Reporting']
    },
    { 
      name: language === 'fr' ? 'Assurance & Prévoyance' : 'Insurance & Protection', 
      icon: <ShieldCheck />, 
      desc: language === 'fr' 
        ? 'Intégrité des modèles actuariels et protection massive des données sensibles. Résilience de la chaîne d\'indemnisation.' 
        : 'Integrity of actuarial models and massive protection of sensitive data. Resilience of the claims chain.',
      details: language === 'fr' 
        ? ['Données Santé (HDS)', 'Sécurité Modèles de Risque', 'Audit Plateformes de Gestion']
        : ['Health Data (HDS)', 'Risk Model Security', 'Management Platform Audit']
    },
    { 
      name: language === 'fr' ? 'Énergie & Utilities' : 'Energy & Utilities', 
      icon: <Zap />, 
      desc: language === 'fr' 
        ? 'Résilience des infrastructures vitales et protection des Smart Grids. Gouvernance de la souveraineté énergétique.' 
        : 'Resilience of vital infrastructure and Smart Grid protection. Governance of energy sovereignty.',
      details: language === 'fr' 
        ? ['Protection OIV / OSE', 'Cyber-résilience Smart Grid', 'Alignement NIS2']
        : ['OIV / OSE Protection', 'Smart Grid Resilience', 'NIS2 Alignment']
    },
    { 
      name: language === 'fr' ? 'Santé & Life Sciences' : 'Healthcare & Life Sciences', 
      icon: <HeartPulse />, 
      desc: language === 'fr' 
        ? 'Sécurisation du parcours patient et protection de la recherche. Accompagnement souveraineté sanitaire.' 
        : 'Securing the patient journey and research protection. Healthcare sovereignty support.',
      details: language === 'fr' 
        ? ['Sécurité Dispositifs Médicaux', 'Certification HDS', 'Gestion de Crise Hospitalière']
        : ['Medical Device Security', 'HDS Certification', 'Hospital Crisis Management']
    },
    { 
      name: language === 'fr' ? 'Technologie & Fintech' : 'Tech & Fintech', 
      icon: <Cpu />, 
      desc: language === 'fr' 
        ? 'Due diligence cyber (M&A) et sécurisation des roadmaps d\'innovation. Audit maturité pour scale-ups.' 
        : 'Cyber due diligence (M&A) and securing innovation roadmaps. Maturity audit for scale-ups.',
      details: language === 'fr' 
        ? ['Audit Pré-acquisition (M&A)', 'Sécurité Cloud Native', 'Protection Code Source']
        : ['Pre-acquisition Audit (M&A)', 'Cloud Native Security', 'Source Code Protection']
    },
  ];

  return (
    <div className="bg-night pt-32">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            tag={language === 'fr' ? "Secteurs Stratégiques" : "Strategic Sectors"}
            title={language === 'fr' ? "Une expertise adaptée aux environnements critiques." : "Expertise adapted to critical environments."}
            subtitle={language === 'fr' 
              ? "Nous intervenons sur des secteurs où l'échec n'est pas une option. Notre approche intègre les contraintes métier spécifiques." 
              : "We operate in sectors where failure is not an option. Our approach integrates specific business constraints."}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {SECTORS.map((sector, idx) => (
              <div key={idx} className="bg-carbon/20 p-10 border border-white/5 hover:border-gold/30 transition-all duration-500 group flex flex-col h-full shadow-lg">
                <div className="w-14 h-14 bg-night flex items-center justify-center text-gold mb-10 border border-gold/10 group-hover:bg-gold group-hover:text-night transition-all">
                  {React.cloneElement(sector.icon as React.ReactElement, { size: 24 })}
                </div>
                <h3 className="text-2xl font-serif text-white mb-6 group-hover:text-gold transition-colors">{sector.name}</h3>
                <p className="text-slate-400 font-light leading-relaxed mb-8 flex-grow text-sm">
                  {sector.desc}
                </p>
                
                <div className="space-y-3 mb-10">
                  {sector.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center space-x-3">
                      <div className="w-1 h-1 bg-gold/50 rounded-full"></div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-500">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="w-full h-px bg-white/5 group-hover:bg-gold/30 transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Quote */}
      <section className="h-[50vh] relative overflow-hidden mt-20">
        <img src={ASSETS.IMG_OFFICE} alt="Modern Office" className="w-full h-full object-cover grayscale opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-night via-night/40 to-night"></div>
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="max-w-3xl text-center px-6">
              <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-8">Expertise Métier</span>
              <h2 className="text-3xl md:text-5xl font-serif text-white italic leading-tight">
                "Comprendre le business pour <br /> mieux sécuriser la valeur."
              </h2>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
