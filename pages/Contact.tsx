
import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import StrategicAssessment from '../components/StrategicAssessment';
import { Mail, ShieldCheck, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { OFFICES } from '../constants';

const Contact: React.FC = () => {
  const { language, t } = useLanguage();
  const [showAssessment, setShowAssessment] = useState(false);

  return (
    <div className="bg-night pt-32">
      <section className="py-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 mb-32">
            <div>
              <SectionHeader 
                tag={t('contact.tag')}
                title={t('contact.title')}
                subtitle={t('contact.subtitle')}
              />
              
              <div className="space-y-12 mt-16">
                <div className="flex items-center space-x-6 p-8 border border-white/5 bg-carbon/30">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center text-gold">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Direct Advisor Email</h4>
                    <p className="text-xl font-serif text-white">contact@mlt-security.com</p>
                  </div>
                </div>

                <div className="space-y-8">
                   <h4 className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-6 font-semibold">{t('contact.offices')}</h4>
                   <div className="grid md:grid-cols-2 gap-10">
                      {OFFICES.map((office) => (
                        <div key={office.city} className="flex items-start space-x-4 p-6 border border-white/5 bg-carbon/20 hover:border-gold/30 transition-colors">
                          <MapPin size={20} className="text-gold mt-1 flex-shrink-0" />
                          <div>
                            <h5 className="text-white font-serif text-lg mb-2">{office.city === 'Paris' ? t('contact.officeParis') : t('contact.officeMarseille')}</h5>
                            <p className="text-slate-400 text-xs font-light leading-relaxed">
                              {office.address}<br />
                              {office.zip}<br />
                              {office.country}
                            </p>
                          </div>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock size={20} className="text-gold mt-1" />
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">{t('contact.availability')}</h4>
                    <p className="text-slate-300 text-sm">Lundi - Vendredi<br />08:30 - 19:30</p>
                  </div>
                </div>

                <div className="pt-12 border-t border-white/10">
                   <div className="flex items-center space-x-3 text-gold mb-4">
                      <ShieldCheck size={20} />
                      <span className="text-xs uppercase tracking-[0.2em] font-bold">{t('contact.confTitle')}</span>
                   </div>
                   <p className="text-slate-500 text-xs leading-relaxed font-light">
                      {t('contact.confDesc')}
                   </p>
                </div>
              </div>
            </div>

            <div className="bg-carbon p-12 lg:p-16 border border-white/5 shadow-2xl">
              <h3 className="text-2xl font-serif text-white mb-10">{t('contact.formTitle')}</h3>
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-slate-400">{t('contact.formName')}</label>
                      <input type="text" className="w-full bg-night/50 border-b border-white/10 py-4 text-white focus:outline-none focus:border-gold transition-colors font-light" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-slate-400">{t('contact.formOrg')}</label>
                      <input type="text" className="w-full bg-night/50 border-b border-white/10 py-4 text-white focus:outline-none focus:border-gold transition-colors font-light" />
                   </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-400">{t('contact.formEmail')}</label>
                  <input type="email" className="w-full bg-night/50 border-b border-white/10 py-4 text-white focus:outline-none focus:border-gold transition-colors font-light" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-400">{t('contact.formSubject')}</label>
                  <select className="w-full bg-night/50 border-b border-white/10 py-4 text-white focus:outline-none focus:border-gold transition-colors font-light appearance-none">
                     <option>{language === 'fr' ? 'Sélectionnez une option' : 'Select an option'}</option>
                     <option>Gouvernance & COMEX Advisory</option>
                     <option>Accompagnement vCISO</option>
                     <option>Audit M&A / Due Diligence</option>
                     <option>Gestion de Crise Cyber</option>
                     <option>Autre Enjeu Stratégique</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-400">{t('contact.formMessage')}</label>
                  <textarea rows={4} className="w-full bg-night/50 border-b border-white/10 py-4 text-white focus:outline-none focus:border-gold transition-colors font-light resize-none"></textarea>
                </div>
                <div className="pt-6">
                  <button className="w-full bg-gold text-night py-5 uppercase text-[11px] tracking-[0.3em] font-bold hover:bg-white transition-all duration-300">
                    {t('contact.formSubmit')}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div id="assessment" className="scroll-mt-32">
            {!showAssessment ? (
              <div className="bg-white/5 border border-gold/20 p-12 text-center max-w-4xl mx-auto">
                 <h2 className="text-3xl font-serif text-white mb-6">{t('contact.assessmentTitle')}</h2>
                 <p className="text-slate-400 font-light mb-10">
                   {t('contact.assessmentSub')}
                 </p>
                 <button 
                  onClick={() => setShowAssessment(true)}
                  className="inline-flex items-center space-x-4 border border-gold px-12 py-5 text-gold uppercase text-[11px] tracking-widest font-bold hover:bg-gold hover:text-night transition-all"
                 >
                    <span>{t('contact.assessmentBtn')}</span>
                    <ArrowRight size={16} />
                 </button>
              </div>
            ) : (
              <StrategicAssessment />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
