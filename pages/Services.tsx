
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { SERVICES, ASSETS } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Services: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-night pt-32">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            tag="Advisory Services"
            title={language === 'fr' ? "L'excellence opérationnelle au service de la gouvernance." : "Operational excellence at the service of governance."}
            subtitle={language === 'fr' ? "Nos services sont conçus pour transformer le risque cyber en avantage compétitif et en résilience durable." : "Our services are designed to transform cyber risk into a competitive advantage and sustainable resilience."}
          />

          <div className="grid gap-8 mt-24">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="group relative grid md:grid-cols-12 gap-12 items-center p-12 border border-white/5 bg-carbon/10 hover:bg-carbon/30 transition-all duration-500 shadow-sm hover:shadow-xl">
                <div className="md:col-span-1 hidden md:block">
                  <span className="text-gold font-serif text-4xl opacity-20 italic">0{idx + 1}</span>
                </div>
                <div className="md:col-span-5">
                  <h3 className="text-3xl font-serif text-white mb-6 leading-tight group-hover:text-gold transition-colors">{service.title[language]}</h3>
                  <p className="text-slate-300 font-light leading-relaxed text-lg">
                    {service.description[language]}
                  </p>
                </div>
                <div className="md:col-span-4">
                  <ul className="space-y-3">
                    {service.details[language].map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center space-x-3 text-slate-200 font-light text-sm">
                        <div className="w-1.5 h-1.5 bg-gold/50 rounded-full"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <Link to="/contact" className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-gold hover:text-night hover:border-gold transition-all duration-300 shadow-md">
                    <ArrowUpRight size={24} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Section */}
      <section className="py-32 bg-carbon/40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={ASSETS.IMG_MEETING} alt="Meeting room" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <SectionHeader 
            tag={language === 'fr' ? "Focus Stratégique" : "Strategic Focus"}
            title="Due Diligence Cyber & M&A Audit"
            subtitle={language === 'fr' ? "L'évaluation du passif cyber est devenue critique lors des fusions et acquisitions. Nous réalisons des audits flash ou approfondis pour sécuriser vos investissements et protéger la valeur future de vos actifs." : "Cyber liability assessment has become critical during mergers and acquisitions. We perform flash or in-depth audits to secure your investments and protect the future value of your assets."}
            align="center"
          />
          <Link 
            to="/contact" 
            className="inline-block border border-gold px-12 py-5 text-gold uppercase text-[11px] tracking-widest font-bold hover:bg-gold hover:text-night transition-all duration-300 shadow-lg"
          >
            {language === 'fr' ? 'Demander un audit confidentiel' : 'Request a confidential audit'}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
