
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { BookOpen, FileText, TrendingUp, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const INSIGHTS_DATA = [
  {
    category: 'Analysis',
    title: {
      fr: 'Gouvernance Cyber : Au-delà du Dashboard technique.',
      en: 'Cyber Governance: Beyond the Technical Dashboard.'
    },
    excerpt: {
      fr: 'Pourquoi les COMEX doivent redéfinir leur approche du risque numérique en 2025.',
      en: 'Why Executive Boards must redefine their approach to digital risk in 2025.'
    },
    icon: <TrendingUp size={18} />
  },
  {
    category: 'Strategic Paper',
    title: {
      fr: 'Impact de NIS2 sur les ETI Industrielles.',
      en: 'Impact of NIS2 on Industrial Mid-sized Companies.'
    },
    excerpt: {
      fr: 'Une lecture stratégique des obligations de résilience et de responsabilité des dirigeants.',
      en: 'A strategic reading of resilience obligations and executive responsibility.'
    },
    icon: <FileText size={18} />
  },
  {
    category: 'Vision',
    title: {
      fr: "L'IA Générative et la Surface d'Attaque Executive.",
      en: 'Generative AI and the Executive Attack Surface.'
    },
    excerpt: {
      fr: "Analyses des nouveaux vecteurs d'influence et de compromission visant les directions générales.",
      en: 'Analysis of new influence and compromise vectors targeting general management.'
    },
    icon: <BookOpen size={18} />
  }
];

const Insights: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-night pt-32">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            tag={t('insights.tag')}
            title={t('insights.title')}
            subtitle={t('insights.subtitle')}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
            {INSIGHTS_DATA.map((insight, idx) => (
              <div key={idx} className="flex flex-col h-full bg-carbon/20 border-b border-white/10 hover:border-gold transition-all duration-500 pb-12 group">
                <div className="flex items-center space-x-3 text-gold text-[10px] uppercase tracking-[0.3em] mb-8">
                  {insight.icon}
                  <span>{insight.category}</span>
                </div>
                <h3 className="text-2xl font-serif text-white mb-6 leading-snug group-hover:text-gold transition-colors">
                  {insight.title[language]}
                </h3>
                <p className="text-slate-400 font-light leading-relaxed mb-10 flex-grow">
                  {insight.excerpt[language]}
                </p>
                <button className="flex items-center space-x-3 text-white text-[10px] uppercase tracking-widest font-bold hover:text-gold transition-colors">
                  <Download size={14} />
                  <span>{t('insights.download')}</span>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-32 p-16 bg-white/5 border border-white/10 text-center rounded-sm">
             <h3 className="text-2xl font-serif text-white mb-6 italic">{t('insights.newsletterTitle')}</h3>
             <p className="text-slate-400 font-light mb-10 max-w-xl mx-auto">
               {t('insights.newsletterSub')}
             </p>
             <form className="max-w-md mx-auto flex">
                <input 
                  type="email" 
                  placeholder="votre.email@corporate.com" 
                  className="flex-grow bg-night border border-white/10 px-6 py-4 text-white text-sm focus:outline-none focus:border-gold transition-colors"
                />
                <button className="bg-gold text-night px-8 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-white transition-colors">
                  {t('insights.subscribe')}
                </button>
             </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
