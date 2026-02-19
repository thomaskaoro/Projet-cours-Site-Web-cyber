
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GoogleGenAI } from "@google/genai";
import { ChevronRight, ChevronLeft, Loader2, ShieldCheck, Download, RefreshCcw } from 'lucide-react';

const StrategicAssessment: React.FC = () => {
  const { t, language } = useLanguage();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    sector: '',
    size: '',
    challenges: [] as string[],
    services: [] as string[]
  });

  const sectors = language === 'fr' 
    ? ['Industrie Critique', 'Énergie', 'Santé', 'Finance', 'Technologie', 'Autre']
    : ['Critical Industry', 'Energy', 'Healthcare', 'Finance', 'Technology', 'Other'];

  const sizes = language === 'fr'
    ? ['ETI (500-2000 pers.)', 'Grand Groupe (> 2000 pers.)', 'Startup / Scale-up', 'Secteur Public']
    : ['Mid-Market (500-2000)', 'Enterprise (> 2000)', 'Startup / Scale-up', 'Public Sector'];

  const challengesList = language === 'fr'
    ? ['Conformité (NIS2, ISO)', 'Menaces Ransomware', 'Gouvernance du Board', 'Due Diligence (M&A)', 'Cloud Security']
    : ['Compliance (NIS2, ISO)', 'Ransomware Threats', 'Board Governance', 'M&A Due Diligence', 'Cloud Security'];

  const servicesList = language === 'fr'
    ? ['vCISO Expert', 'Audit Stratégique', 'Programme Transformation', 'Simulation Crise COMEX']
    : ['Expert vCISO', 'Strategic Audit', 'Transformation Program', 'COMEX Crisis Simulation'];

  const toggleArray = (field: 'challenges' | 'services', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value) 
        ? prev[field].filter(v => v !== value)
        : [...prev[field], value]
    }));
  };

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Génère une proposition de feuille de route stratégique préliminaire pour MLT Security Consulting basée sur les données suivantes :
        Secteur : ${formData.sector}
        Taille : ${formData.size}
        Enjeux : ${formData.challenges.join(', ')}
        Services visés : ${formData.services.join(', ')}

        Règles : 
        1. Ton très premium, stratégique, court (300 mots max).
        2. Ne donne AUCUN prix chiffré.
        3. Structure : Analyse du Contexte, Priorités Stratégiques, Recommandation MLT.
        4. Langue : ${language === 'fr' ? 'Français' : 'Anglais'}.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [{ role: 'user', parts: [{ text: prompt }] }]
      });

      setResult(response.text || "Analyse indisponible.");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-carbon/50 border border-white/5 p-8 md:p-12 animate-fade-in">
      <div className="mb-12">
        <h3 className="text-2xl font-serif text-white mb-2">{t('assessment.title')}</h3>
        <p className="text-slate-400 font-light text-sm">{t('assessment.subtitle')}</p>
      </div>

      {!result ? (
        <div className="space-y-8">
          {/* Step Progress */}
          <div className="flex items-center space-x-4 mb-8">
            {[1, 2, 3].map(s => (
              <div key={s} className={`flex items-center space-x-2 ${step >= s ? 'text-gold' : 'text-slate-600'}`}>
                <div className={`w-6 h-6 border flex items-center justify-center text-[10px] ${step >= s ? 'border-gold' : 'border-slate-600'}`}>{s}</div>
                <span className="text-[10px] uppercase tracking-widest hidden md:inline">{t(`assessment.step${s}`)}</span>
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-widest text-slate-500">Secteur d'activité</label>
                <div className="grid grid-cols-1 gap-2">
                  {sectors.map(s => (
                    <button key={s} onClick={() => setFormData(f => ({...f, sector: s}))} className={`text-left p-4 text-xs font-light border transition-all ${formData.sector === s ? 'border-gold bg-gold/5 text-gold' : 'border-white/5 text-slate-400 hover:border-white/20'}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-widest text-slate-500">Taille de l'organisation</label>
                <div className="grid grid-cols-1 gap-2">
                  {sizes.map(s => (
                    <button key={s} onClick={() => setFormData(f => ({...f, size: s}))} className={`text-left p-4 text-xs font-light border transition-all ${formData.size === s ? 'border-gold bg-gold/5 text-gold' : 'border-white/5 text-slate-400 hover:border-white/20'}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <label className="text-[10px] uppercase tracking-widest text-slate-500">Sélectionnez vos enjeux prioritaires</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {challengesList.map(c => (
                  <button key={c} onClick={() => toggleArray('challenges', c)} className={`text-left p-4 text-xs font-light border transition-all ${formData.challenges.includes(c) ? 'border-gold bg-gold/5 text-gold' : 'border-white/5 text-slate-400 hover:border-white/20'}`}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 animate-fade-in">
              <label className="text-[10px] uppercase tracking-widest text-slate-500">Domaines d'intervention souhaités</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {servicesList.map(s => (
                  <button key={s} onClick={() => toggleArray('services', s)} className={`text-left p-4 text-xs font-light border transition-all ${formData.services.includes(s) ? 'border-gold bg-gold/5 text-gold' : 'border-white/5 text-slate-400 hover:border-white/20'}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-between pt-8 border-t border-white/5">
            {step > 1 && (
              <button onClick={() => setStep(step - 1)} className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors uppercase text-[10px] tracking-widest">
                <ChevronLeft size={16} />
                <span>Précédent</span>
              </button>
            )}
            <div className="ml-auto">
              {step < 3 ? (
                <button 
                  onClick={() => setStep(step + 1)} 
                  disabled={step === 1 && (!formData.sector || !formData.size)}
                  className="flex items-center space-x-2 bg-gold px-8 py-4 text-night uppercase text-[10px] tracking-widest font-bold hover:bg-white transition-all disabled:opacity-30"
                >
                  <span>Suivant</span>
                  <ChevronRight size={16} />
                </button>
              ) : (
                <button 
                  onClick={handleGenerate}
                  disabled={isLoading}
                  className="flex items-center space-x-3 bg-gold px-8 py-4 text-night uppercase text-[10px] tracking-widest font-bold hover:bg-white transition-all disabled:opacity-50"
                >
                  {isLoading ? <Loader2 className="animate-spin" size={16} /> : <ShieldCheck size={16} />}
                  <span>{t('assessment.generate')}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="animate-fade-in space-y-8">
           <div className="prose prose-invert prose-sm max-w-none bg-night/50 p-8 border-l-2 border-gold font-light leading-relaxed text-slate-300">
              <div className="whitespace-pre-wrap">{result}</div>
           </div>
           
           <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
              <button onClick={() => { setResult(null); setStep(1); }} className="flex items-center space-x-2 text-slate-500 hover:text-white transition-colors uppercase text-[10px] tracking-widest">
                <RefreshCcw size={14} />
                <span>{t('assessment.reset')}</span>
              </button>
              
              <div className="flex space-x-4">
                <button className="flex items-center space-x-3 border border-white/10 px-8 py-4 text-white uppercase text-[10px] tracking-widest font-bold hover:bg-white/5 transition-all">
                  <Download size={14} />
                  <span>{t('assessment.download')}</span>
                </button>
                <button onClick={() => window.location.hash = '#/contact'} className="bg-gold px-8 py-4 text-night uppercase text-[10px] tracking-widest font-bold hover:bg-white transition-all">
                  Finaliser avec un expert
                </button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default StrategicAssessment;
