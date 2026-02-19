
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { ASSETS } from '../constants';
import { ShieldCheck, Eye, Compass, CheckCircle2, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-night pt-32">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            tag={t('about.tag')}
            title={t('about.title')}
            subtitle={t('about.subtitle')}
          />
          
          <div className="grid md:grid-cols-2 gap-20 items-center mt-20">
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white/5 flex-shrink-0 flex items-center justify-center text-gold shadow-lg">
                   <Eye size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-3 tracking-wide">{t('about.visionTitle')}</h3>
                  <p className="text-slate-400 font-light leading-relaxed">
                    {t('about.visionDesc')}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white/5 flex-shrink-0 flex items-center justify-center text-gold shadow-lg">
                   <Compass size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-3 tracking-wide">{t('about.philosophyTitle')}</h3>
                  <p className="text-slate-400 font-light leading-relaxed">
                    {t('about.philosophyDesc')}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white/5 flex-shrink-0 flex items-center justify-center text-gold shadow-lg">
                   <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-3 tracking-wide">{t('about.indepTitle')}</h3>
                  <p className="text-slate-400 font-light leading-relaxed">
                    {t('about.indepDesc')}
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
            tag={t('about.historyTag')}
            title={t('about.historyTitle')}
            subtitle={t('about.historySub')}
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
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-night">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
             <div>
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">{t('about.bridgeTitle')}</h2>
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
              "{t('about.founderQuote')}"
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
