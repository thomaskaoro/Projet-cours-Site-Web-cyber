
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { ASSETS } from '../constants';
import { ShieldCheck, Eye, Compass, CheckCircle2, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-night pt-32">
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
                    Nous refusons l'approche purement technique. Pour MLT, la cybersécurité est un levier de performance qui doit être piloté au niveau du COMEX.
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
                    Un accompagnement fondé sur une compréhension profonde des enjeux business pour transformer la contrainte en socle de continuité.
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
                    Aucun lien avec des éditeurs. Notre objectivité est absolue, garantissant des recommandations alignées sur vos intérêts stratégiques.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={ASSETS.IMG_DATA} alt="Data abstraction" className="w-full h-[600px] object-cover grayscale opacity-60 shadow-2xl" />
              <div className="absolute inset-0 bg-night/20"></div>
              <div className="absolute -bottom-10 -left-10 subtle-glass p-10 hidden lg:block shadow-2xl border-l-2 border-gold">
                 <p className="text-gold font-serif text-3xl mb-2 italic">Strategic</p>
                 <p className="text-white text-[10px] uppercase tracking-[0.3em] font-medium">Cyber Advisory</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-carbon/10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            tag="Notre Histoire"
            title="Une expertise forgée au sein d’environnements critiques."
            subtitle="MLT est né de plus de dix années d'intervention au sein d'organisations exposées à des menaces étatiques et des exigences réglementaires extrêmes."
          />

          <div className="grid gap-12 mt-20">
            {/* Orange */}
            <div className="subtle-glass p-12 group hover:border-gold/30 transition-all border-l-4 border-white/5 hover:border-l-gold">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-white/5 pb-8">
                <div>
                  <h3 className="text-3xl font-serif text-white mb-2 tracking-tight">Orange</h3>
                  <p className="text-gold text-[10px] uppercase tracking-[0.3em]">Gouvernance & Transformation SOC</p>
                </div>
                <div className="mt-4 md:mt-0 text-slate-500 font-light text-xs italic tracking-widest uppercase">Operator Grade Security</div>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h4 className="text-white font-medium flex items-center space-x-2 text-xs uppercase tracking-widest">
                    <CheckCircle2 size={14} className="text-gold" />
                    <span>Actions Stratégiques</span>
                  </h4>
                  <ul className="space-y-3 text-slate-400 font-light text-sm leading-relaxed">
                    <li>• Audit de maturité ISO 27001 & NIST CSF</li>
                    <li>• Revue d'architecture réseau cœur</li>
                    <li>• Optimisation SOC multi-sites</li>
                    <li>• Reporting de performance cyber pour le COMEX</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white font-medium flex items-center space-x-2 text-xs uppercase tracking-widest">
                    <Award size={14} className="text-gold" />
                    <span>Environnement</span>
                  </h4>
                  <p className="text-slate-400 font-light text-sm">Gestion des identités à grande échelle, segmentation réseau avancée et supervision 24/7 sur infrastructures critiques.</p>
                </div>
              </div>
            </div>

            {/* LVMH */}
            <div className="subtle-glass p-12 group hover:border-gold/30 transition-all border-l-4 border-white/5 hover:border-l-gold">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-white/5 pb-8">
                <div>
                  <h3 className="text-3xl font-serif text-white mb-2 tracking-tight">LVMH</h3>
                  <p className="text-gold text-[10px] uppercase tracking-[0.3em]">Protection des Actifs & Image de Marque</p>
                </div>
                <div className="mt-4 md:mt-0 text-slate-500 font-light text-xs italic tracking-widest uppercase">Luxury & Reputation Risk</div>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h4 className="text-white font-medium flex items-center space-x-2 text-xs uppercase tracking-widest">
                    <CheckCircle2 size={14} className="text-gold" />
                    <span>Focus Conseil</span>
                  </h4>
                  <ul className="space-y-3 text-slate-400 font-light text-sm leading-relaxed">
                    <li>• Protection de la propriété intellectuelle</li>
                    <li>• Audit de risque supply chain IT filiales</li>
                    <li>• Mise en conformité RGPD multi-juridictionnelle</li>
                    <li>• Sécurisation cloud hybride international</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white font-medium flex items-center space-x-2 text-xs uppercase tracking-widest">
                    <Award size={14} className="text-gold" />
                    <span>Objectif</span>
                  </h4>
                  <p className="text-slate-400 font-light text-sm">Protéger la confiance client premium et l'intégrité des données créatives sensibles à l'échelle mondiale.</p>
                </div>
              </div>
            </div>

            {/* Thales */}
            <div className="subtle-glass p-12 group hover:border-gold/30 transition-all border-l-4 border-white/5 hover:border-l-gold">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-white/5 pb-8">
                <div>
                  <h3 className="text-3xl font-serif text-white mb-2 tracking-tight">Thales</h3>
                  <p className="text-gold text-[10px] uppercase tracking-[0.3em]">Cyberdéfense & Systèmes Critiques</p>
                </div>
                <div className="mt-4 md:mt-0 text-slate-500 font-light text-xs italic tracking-widest uppercase">Defense & Industry Grade</div>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h4 className="text-white font-medium flex items-center space-x-2 text-xs uppercase tracking-widest">
                    <CheckCircle2 size={14} className="text-gold" />
                    <span>Expertise de Pointe</span>
                  </h4>
                  <ul className="space-y-3 text-slate-400 font-light text-sm leading-relaxed">
                    <li>• Analyse de risques EBIOS Risk Manager</li>
                    <li>• Sécurisation architectures IT / OT</li>
                    <li>• Audit conformité référentiels défense</li>
                    <li>• Exercices de gestion de crise COMEX</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white font-medium flex items-center space-x-2 text-xs uppercase tracking-widest">
                    <Award size={14} className="text-gold" />
                    <span>Environnement</span>
                  </h4>
                  <p className="text-slate-400 font-light text-sm">Systèmes embarqués, infrastructures classifiées et réseaux industriels segmentés à haute criticité.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-night">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
             <div>
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">Combler l'écart entre la <span className="italic">technique</span> et la <span className="italic text-gold">stratégie.</span></h2>
                <p className="text-slate-300 font-light text-lg leading-relaxed mb-10">
                  MLT Security Consulting a été fondé pour offrir aux directions générales un interlocuteur capable de traduire la complexité cyber en décisions business éclairées.
                </p>
                <div className="grid grid-cols-2 gap-6">
                   <div className="p-6 border border-white/5 bg-carbon/20">
                      <p className="text-white font-serif mb-2">Conseiller</p>
                      <p className="text-slate-500 text-[10px] uppercase tracking-widest">Du Dirigeant</p>
                   </div>
                   <div className="p-6 border border-white/5 bg-carbon/20">
                      <p className="text-white font-serif mb-2">Garant</p>
                      <p className="text-slate-500 text-[10px] uppercase tracking-widest">De la Cohérence</p>
                   </div>
                </div>
             </div>
             <div className="bg-carbon/30 p-12 border border-white/5">
                <h3 className="text-xs uppercase tracking-[0.4em] text-gold font-bold mb-10">Méthodologies Maîtrisées</h3>
                <div className="space-y-6">
                   {[
                     "ISO 27001 / ISO 27005",
                     "NIST Cybersecurity Framework",
                     "EBIOS Risk Manager",
                     "MITRE ATT&CK",
                     "NIS2 Regulatory Alignment",
                     "Crisis Response Frameworks"
                   ].map((m) => (
                     <div key={m} className="flex items-center space-x-4 border-b border-white/5 pb-4">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                        <span className="text-slate-200 text-xs font-light tracking-wide">{m}</span>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-night border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-10 overflow-hidden rounded-full border-2 border-gold/20 shadow-2xl">
               <img src={ASSETS.IMG_FOUNDER} alt="Founder" className="w-full h-full object-cover grayscale" />
            </div>
            <p className="text-white font-serif italic text-2xl mb-8 max-w-3xl leading-relaxed">
              "La cybersécurité n'est plus une option technique. C'est l'armure invisible de votre stratégie de croissance."
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
