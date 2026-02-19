
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { BookOpen, FileText, TrendingUp, Download } from 'lucide-react';

const INSIGHTS = [
  {
    category: 'Analysis',
    title: 'Gouvernance Cyber : Au-delà du Dashboard technique.',
    excerpt: 'Pourquoi les COMEX doivent redéfinir leur approche du risque numérique en 2025.',
    icon: <TrendingUp size={18} />
  },
  {
    category: 'Strategic Paper',
    title: 'Impact de NIS2 sur les ETI Industrielles.',
    excerpt: 'Une lecture stratégique des obligations de résilience et de responsabilité des dirigeants.',
    icon: <FileText size={18} />
  },
  {
    category: 'Vision',
    title: 'L\'IA Générative et la Surface d\'Attaque Executive.',
    excerpt: 'Analyses des nouveaux vecteurs d\'influence et de compromission visant les directions générales.',
    icon: <BookOpen size={18} />
  }
];

const Insights: React.FC = () => {
  return (
    <div className="bg-night pt-32">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            tag="Insights & Publications"
            title="Analyses prospectives pour décideurs."
            subtitle="Retrouvez nos notes de synthèse et publications stratégiques pour décrypter les enjeux cyber de demain."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
            {INSIGHTS.map((insight, idx) => (
              <div key={idx} className="flex flex-col h-full bg-carbon/20 border-b border-white/10 hover:border-gold transition-all duration-500 pb-12 group">
                <div className="flex items-center space-x-3 text-gold text-[10px] uppercase tracking-[0.3em] mb-8">
                  {insight.icon}
                  <span>{insight.category}</span>
                </div>
                <h3 className="text-2xl font-serif text-white mb-6 leading-snug group-hover:text-gold transition-colors">
                  {insight.title}
                </h3>
                <p className="text-slate-400 font-light leading-relaxed mb-10 flex-grow">
                  {insight.excerpt}
                </p>
                <button className="flex items-center space-x-3 text-white text-[10px] uppercase tracking-widest font-bold hover:text-gold transition-colors">
                  <Download size={14} />
                  <span>Télécharger la note stratégique</span>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-32 p-16 bg-white/5 border border-white/10 text-center rounded-sm">
             <h3 className="text-2xl font-serif text-white mb-6 italic">Newsletter Confidentielle</h3>
             <p className="text-slate-400 font-light mb-10 max-w-xl mx-auto">
               Recevez trimestriellement notre analyse macro des risques cyber directement dans votre boîte mail.
             </p>
             <form className="max-w-md mx-auto flex">
                <input 
                  type="email" 
                  placeholder="votre.email@corporate.com" 
                  className="flex-grow bg-night border border-white/10 px-6 py-4 text-white text-sm focus:outline-none focus:border-gold transition-colors"
                />
                <button className="bg-gold text-night px-8 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-white transition-colors">
                  S'abonner
                </button>
             </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
