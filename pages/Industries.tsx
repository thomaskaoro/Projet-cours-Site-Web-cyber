
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { ASSETS } from '../constants';
import { Factory, Zap, HeartPulse, Landmark, Cpu, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Industries: React.FC = () => {
  const { language } = useLanguage();

  const SECTORS = [
    { 
      name: language === 'fr' ? 'Industrie Critique' : 'Critical Industry', 
      icon: <Factory />, 
      desc: language === 'fr' 
        ? 'Protection de la chaîne de production et du secret industriel. Sécurisation de la convergence IT/OT pour prévenir tout arrêt d\'activité.' 
        : 'Protection of production lines and industrial secrets. Securing IT/OT convergence to prevent business interruption.',
      details: language === 'fr' 
        ? ['Sécurisation des automates (ICS)', 'Protection de la PI', 'Audit de résilience supply chain']
        : ['ICS Security', 'IP Protection', 'Supply chain resilience audit']
    },
    { 
      name: language === 'fr' ? 'Banque & Finance' : 'Banking & Finance', 
      icon: <Landmark />, 
      desc: language === 'fr' 
        ? 'Maîtrise du risque systémique et alignement avec les exigences réglementaires (DORA). Protection des actifs numériques et des flux transactionnels.' 
        : 'Systemic risk management and alignment with regulatory requirements (DORA). Protection of digital assets and transactional flows.',
      details: language === 'fr' 
        ? ['Conformité DORA / ACPR', 'Sécurisation des paiements', 'Reporting de risque au Board']
        : ['DORA / ACPR Compliance', 'Payment Security', 'Board Risk Reporting']
    },
    { 
      name: language === 'fr' ? 'Assurance & Prévoyance' : 'Insurance & Protection', 
      icon: <ShieldCheck />, 
      desc: language === 'fr' 
        ? 'Garantie de l\'intégrité des modèles actuariels et protection massive des données personnelles sensibles. Résilience de la chaîne d\'indemnisation.' 
        : 'Guaranteeing the integrity of actuarial models and massive protection of sensitive personal data. Resilience of the claims chain.',
      details: language === 'fr' 
        ? ['Protection des données de santé', 'Sécurité des modèles de risque', 'Audit des plateformes de gestion']
        : ['Health Data Protection', 'Risk Model Security', 'Management Platform Audit']
    },
    { 
      name: language === 'fr' ? 'Énergie & Utilities' : 'Energy & Utilities', 
      icon: <Zap />, 
      desc: language === 'fr' 
        ? 'Résilience des infrastructures vitales et protection des réseaux de distribution intelligents (Smart Grids). Gouvernance de la souveraineté énergétique.' 
        : 'Resilience of vital infrastructure and protection of smart grids. Governance of energy sovereignty.',
      details: language === 'fr' 
        ? ['Protection des infrastructures vitales', 'Cyber-résilience Smart Grid', 'Audit de conformité NIS2']
        : ['Critical Infrastructure Protection', 'Smart Grid Resilience', 'NIS2 Compliance Audit']
    },
    { 
      name: language === 'fr' ? 'Santé & Life Sciences' : 'Healthcare & Life Sciences', 
      icon: <HeartPulse />, 
      desc: language === 'fr' 
        ? 'Sécurisation du parcours patient et protection des données de recherche à haute valeur. Accompagnement face aux exigences de souveraineté sanitaire.' 
        : 'Securing the patient journey and protecting high-value research data. Support for healthcare sovereignty requirements.',
      details: language === 'fr' 
        ? ['Sécurité des dispositifs médicaux', 'Certification HDS', 'Gestion de crise hospitalière']
        : ['Medical Device Security', 'HDS Certification', 'Hospital Crisis Management']
    },
    { 
      name: language === 'fr' ? 'Technologie & Fintech' : 'Tech & Fintech', 
      icon: <Cpu />, 
      desc: language === 'fr' 
        ? 'Due diligence cyber pour fonds d\'investissement et sécurisation des roadmaps d\'innovation. Audit de maturité pour scale-ups à forte valorisation.' 
        : 'Cyber due diligence for investment funds and securing innovation roadmaps. Maturity audit for high-valuation scale-ups.',
      details: language === 'fr' 
        ? ['Audit pré-acquisition (M&A)', 'Sécurité Cloud Native', 'Protection du code source']
        : ['Pre-acquisition Audit (M&A)', 'Cloud Native Security', 'Source Code Protection']
    },
  ];

  return (
    <div className="bg-night pt-32">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            tag={language === 'fr' ? "Secteurs Stratégiques" : "Strategic Sectors"}
            title={language === 'fr' ? "Une expertise adaptée aux environnements de haute criticité." : "Expertise adapted to high-criticality environments."}
            subtitle={language === 'fr' 
              ? "Nous intervenons là où l'échec n'est pas une option. Notre approche sectorielle intègre les contraintes réglementaires et opérationnelles propres à chaque métier." 
              : "We intervene where failure is not an option. Our sector-specific approach integrates the regulatory and operational constraints unique to each profession."}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {SECTORS.map((sector, idx) => (
              <div key={idx} className="bg-carbon/20 p-10 border border-white/5 hover:border-gold/30 transition-all duration-500 group flex flex-col h-full shadow-lg">
                <div className="w-14 h-14 bg-night flex items-center justify-center text-gold mb-10 border border-gold/10 group-hover:bg-gold group-hover:text-night transition-all">
                  {React.cloneElement(sector.icon as React.ReactElement, { size: 24 })}
                </div>
                <h3 className="text-2xl font-serif text-white mb-6 group-hover:text-gold transition-colors">{sector.name}</h3>
                <p className="text-slate-400 font-light leading-relaxed mb-8 flex-grow">
                  {sector.desc}
                </p>
                
                <div className="space-y-3 mb-10">
                  {sector.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center space-x-3">
                      <div className="w-1 h-1 bg-gold rounded-full"></div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-500">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="w-full h-px bg-white/5 group-hover:bg-gold/30 transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Context image section */}
      <section className="h-[60vh] relative overflow-hidden mt-20">
        <img src={ASSETS.IMG_OFFICE} alt="Modern Office" className="w-full h-full object-cover grayscale opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-night via-transparent to-night"></div>
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="max-w-3xl text-center px-6">
              <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-8">Engagement Métier</span>
              <h2 className="text-3xl md:text-5xl font-serif text-white italic leading-tight">
                "Comprendre le métier pour sécuriser <br /> la valeur de demain."
              </h2>
              <div className="mt-12">
                <button 
                  onClick={() => window.location.hash = '#/contact'}
                  className="bg-transparent border border-white/20 text-white px-10 py-4 uppercase text-[10px] tracking-widest hover:bg-white hover:text-night transition-all"
                >
                  {language === 'fr' ? 'Consulter un expert sectoriel' : 'Consult a sector expert'}
                </button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
