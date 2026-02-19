
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { ASSETS } from '../constants';
import { ShieldCheck, Eye, Compass, UserCheck, BarChart3, Globe, Lock, CheckCircle2, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-night pt-32">
      {/* Intro & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            tag="Le Cabinet"
            title="Indépendance. Autorité. Discrétion."
            subtitle="MLT Security Consulting est un cabinet de conseil stratégique né d'une conviction : la cybersécurité est le premier pilier de la confiance numérique moderne et un enjeu majeur de gouvernance."
          />
          
          <div className="grid md:grid-cols-2 gap-20 items-center mt-20">
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white/5 flex-shrink-0 flex items-center justify-center text-gold shadow-lg">
                   <Eye size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-3 tracking-wide">Vision Exécutive</h3>
                  <p className="text-slate-400 font-light leading-relaxed">
                    Nous refusons l'approche purement technique de l'IT. Pour MLT, la cybersécurité est un levier de performance et de réputation qui doit être piloté au niveau du COMEX.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white/5 flex-shrink-0 flex items-center justify-center text-gold shadow-lg">
                   <Compass size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-3 tracking-wide">Philosophie de Résilience</h3>
                  <p className="text-slate-400 font-light leading-relaxed">
                    Un accompagnement sur-mesure fondé sur une compréhension profonde des enjeux business. Nous transformons la contrainte sécuritaire en socle de continuité d'activité.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white/5 flex-shrink-0 flex items-center justify-center text-gold shadow-lg">
                   <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-3 tracking-wide">Indépendance Totale</h3>
                  <p className="text-slate-400 font-light leading-relaxed">
                    Aucun lien avec des éditeurs de logiciels. Notre objectivité est absolue, garantissant des recommandations alignées uniquement sur vos intérêts stratégiques.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={ASSETS.IMG_DATA} alt="Data abstraction" className="w-full h-[600px] object-cover grayscale opacity-60 shadow-2xl" />
              <div className="absolute inset-0 bg-night/20"></div>
              <div className="absolute -bottom-10 -left-10 subtle-glass p-10 hidden lg:block shadow-2xl">
                 <p className="text-gold font-serif text-3xl mb-2 italic">Strategic</p>
                 <p className="text-white text-[10px] uppercase tracking-[0.3em] font-medium">Cyber Advisory</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Histoire & Références */}
      <section className="py-32 bg-carbon/10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            tag="Notre Histoire"
            title="Une expertise forgée au sein d’environnements critiques."
            subtitle="MLT Security Consulting est né de plus de dix années d'intervention au sein d'organisations exposées à des niveaux de menace élevés et à des exigences réglementaires complexes."
          />

          <div className="grid gap-12 mt-20">
            {/* Orange */}
            <div className="subtle-glass p-12 group hover:border-gold/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-white/5 pb-8">
                <div>
                  <h3 className="text-3xl font-serif text-white mb-2">Orange</h3>
                  <p className="text-gold text-[10px] uppercase tracking-[0.3em]">Gouvernance Sécurité & Transformation SOC</p>
                </div>
                <div className="mt-4 md:mt-0 text-slate-500 font-light text-sm italic">Infrastructures critiques à haute disponibilité</div>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-white font-medium mb-4 flex items-center space-x-2 text-sm">
                    <CheckCircle2 size={16} className="text-gold" />
                    <span>Interventions Stratégiques</span>
                  </h4>
                  <ul className="space-y-3 text-slate-400 font-light text-sm leading-relaxed">
                    <li>• Audit de maturité sécurité basé sur ISO 27001 et NIST CSF</li>
                    <li>• Revue d’architecture réseau cœur et périmètre</li>
                    <li>• Évaluation des dispositifs de détection (SIEM, corrélation)</li>
                    <li>• Contribution à l’optimisation d’un SOC multi-sites</li>
                    <li>• Mise en place d’indicateurs de performance cyber pour le COMEX</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-4 flex items-center space-x-2 text-sm">
                    <Award size={16} className="text-gold" />
                    <span>Expertise Technique</span>
                  </h4>
                  <ul className="space-y-3 text-slate-400 font-light text-sm leading-relaxed">
                    <li>• Segmentation réseau avancée</li>
                    <li>• Gestion des identités à grande échelle</li>
                    <li>• Supervision 24/7</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* LVMH */}
            <div className="subtle-glass p-12 group hover:border-gold/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-white/5 pb-8">
                <div>
                  <h3 className="text-3xl font-serif text-white mb-2">LVMH</h3>
                  <p className="text-gold text-[10px] uppercase tracking-[0.3em]">Protection des Actifs & Risque Réputationnel</p>
                </div>
                <div className="mt-4 md:mt-0 text-slate-500 font-light text-sm italic">Environnements internationaux multi-marques</div>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-white font-medium mb-4 flex items-center space-x-2 text-sm">
                    <CheckCircle2 size={16} className="text-gold" />
                    <span>Actions de Renforcement</span>
                  </h4>
                  <ul className="space-y-3 text-slate-400 font-light text-sm leading-relaxed">
                    <li>• Protection de la propriété intellectuelle & données clients premium</li>
                    <li>• Évaluation du risque supply chain IT & audits filiales</li>
                    <li>• Mise en conformité RGPD multi-juridictionnelle</li>
                    <li>• Sécurisation d’environnements cloud hybrides</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-4 flex items-center space-x-2 text-sm">
                    <Award size={16} className="text-gold" />
                    <span>Travaux Réalisés</span>
                  </h4>
                  <ul className="space-y-3 text-slate-400 font-light text-sm leading-relaxed">
                    <li>• Cartographie des flux critiques & analyse de surface d'attaque</li>
                    <li>• Tests d'intrusion ciblés & revue des politiques IAM</li>
                    <li>• Structuration d'un plan de réponse à incident groupe</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Thales */}
            <div className="subtle-glass p-12 group hover:border-gold/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-white/5 pb-8">
                <div>
                  <h3 className="text-3xl font-serif text-white mb-2">Thales</h3>
                  <p className="text-gold text-[10px] uppercase tracking-[0.3em]">Sécurité des Systèmes Critiques & Risque Industriel</p>
                </div>
                <div className="mt-4 md:mt-0 text-slate-500 font-light text-sm italic">Infrastructures défense et classifiées</div>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-white font-medium mb-4 flex items-center space-x-2 text-sm">
                    <CheckCircle2 size={16} className="text-gold" />
                    <span>Domaines d'Intervention</span>
                  </h4>
                  <ul className="space-y-3 text-slate-400 font-light text-sm leading-relaxed">
                    <li>• Analyse de risques selon méthodologie EBIOS Risk Manager</li>
                    <li>• Sécurisation d’architectures industrielles (IT / OT)</li>
                    <li>• Revue des mécanismes de cloisonnement réseau</li>
                    <li>• Audit de conformité aux référentiels de sécurité défense</li>
                    <li>• Participation à des exercices de gestion de crise cyber</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-4 flex items-center space-x-2 text-sm">
                    <Award size={16} className="text-gold" />
                    <span>Environnements</span>
                  </h4>
                  <ul className="space-y-3 text-slate-400 font-light text-sm leading-relaxed">
                    <li>• Systèmes embarqués & Réseaux industriels segmentés</li>
                    <li>• Protocoles spécifiques OT</li>
                    <li>• Gouvernance de systèmes sensibles</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Genèse du Cabinet */}
      <section className="py-32 bg-night relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-10 leading-tight">
            Pourquoi avoir créé <span className="italic">MLT Security Consulting ?</span>
          </h2>
          <p className="text-slate-300 font-light text-lg leading-relaxed mb-12">
            Ces expériences au sein de structures complexes ont mis en évidence un besoin majeur : les directions générales manquent d’un interlocuteur capable de traduire la technique en décision stratégique. 
          </p>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="p-6 border border-white/5 bg-carbon/20">
                <p className="text-white font-serif text-lg mb-2">Conseiller</p>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest">Stratégique du Dirigeant</p>
             </div>
             <div className="p-6 border border-white/5 bg-carbon/20">
                <p className="text-white font-serif text-lg mb-2">Partenaire</p>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest">Gouvernance Cyber</p>
             </div>
             <div className="p-6 border border-white/5 bg-carbon/20">
                <p className="text-white font-serif text-lg mb-2">Interface</p>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest">Technique & Décision</p>
             </div>
          </div>
        </div>
      </section>

      {/* Méthodologies Maîtrisées */}
      <section className="py-24 bg-carbon/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-semibold mb-6 block">Rigueur Opérationnelle</span>
              <h2 className="text-3xl font-serif text-white">Méthodologies Maîtrisées</h2>
            </div>
            <p className="text-slate-400 font-light text-sm max-w-sm">
              L'application stricte des cadres internationaux pour garantir la robustesse de votre stratégie cyber.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
             {[
               "ISO 27001 / 27005",
               "NIST Framework",
               "EBIOS Risk Manager",
               "MITRE ATT&CK",
               "OWASP",
               "Crisis Management"
             ].map((m) => (
               <div key={m} className="p-8 border border-white/10 bg-night text-center hover:border-gold/50 transition-colors shadow-lg">
                  <span className="text-slate-200 text-xs font-medium tracking-tight uppercase">{m}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Profile summary signature */}
      <section className="py-32 bg-night border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-10 relative">
               <img src={ASSETS.IMG_FOUNDER} alt="Founder" className="w-full h-full object-cover grayscale rounded-full border-2 border-gold/20" />
               <div className="absolute inset-0 rounded-full bg-gold/5"></div>
            </div>
            <p className="text-white font-serif italic text-2xl mb-6 max-w-3xl">
              "Notre mission est de garantir la cohérence globale du dispositif de sécurité de nos clients, en transformant chaque vulnérabilité technique en une opportunité de renforcement stratégique."
            </p>
            <div className="h-px w-20 bg-gold mb-6"></div>
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold">Marc-Laurent T.</p>
            <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-2">Managing Partner - MLT Security Consulting</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
