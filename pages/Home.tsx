
import React from 'react';
import { Link } from 'react-router-dom';
import { ASSETS, SERVICES, TRUSTED_CLIENTS } from '../constants';
import SectionHeader from '../components/SectionHeader';
import { ChevronRight, ShieldAlert, Target, Award, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-night">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
        >
          <source src={ASSETS.VIDEO_HERO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-night/10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <div className="max-w-4xl animate-fade-in-up">
            <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-semibold mb-8 block">{t('home.heroTag')}</span>
            <h1 className="text-5xl md:text-8xl font-serif text-white font-light leading-none mb-10 tracking-tight">
              {t('home.heroTitle')} <br />
              <span className="italic font-normal">{t('home.heroTitleItalic')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed max-w-2xl mb-12">
              {t('home.heroSub')}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
              <Link 
                to="/contact" 
                className="group flex items-center justify-center space-x-4 bg-gold px-10 py-5 text-night uppercase text-[11px] tracking-[0.2em] font-bold hover:bg-white transition-all duration-300"
              >
                <span>{t('home.heroBtn1')}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/cabinet" 
                className="flex items-center justify-center space-x-4 border border-white/30 px-10 py-5 text-white uppercase text-[11px] tracking-[0.2em] font-medium hover:bg-white/10 transition-all duration-300"
              >
                {t('home.heroBtn2')}
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-60">
           <span className="text-[8px] uppercase tracking-[0.5em] text-white">Scroll</span>
           <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent"></div>
        </div>
      </section>

      {/* Trusted By Section - Plus clair et aéré */}
      <section className="py-24 bg-carbon/40 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <p className="text-[10px] uppercase tracking-[0.4em] text-slate-400 mb-16 text-center font-medium">{t('home.trusted')}</p>
           <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-16 lg:gap-x-20">
              {TRUSTED_CLIENTS.map((client) => (
                <div 
                  key={client} 
                  className="group relative flex flex-col items-center justify-center grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700 transform hover:scale-105"
                >
                  <span className="text-slate-200 font-serif text-2xl lg:text-3xl tracking-tighter uppercase whitespace-nowrap group-hover:text-white transition-colors">
                    {client}
                  </span>
                  <div className="absolute -bottom-4 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Strategic Vision Section */}
      <section className="py-32 relative overflow-hidden bg-night">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <SectionHeader 
            tag={t('home.visionTag')}
            title={t('home.visionTitle')}
            subtitle={t('home.visionSub')}
          />
          <div className="relative h-[500px] overflow-hidden group shadow-2xl">
            <img 
              src={ASSETS.IMG_ARCHITECTURE} 
              alt="Architecture" 
              className="w-full h-full object-cover grayscale opacity-70 group-hover:scale-105 transition-transform duration-1000" 
            />
            <div className="absolute inset-0 border border-gold/10 m-6"></div>
            <div className="absolute bottom-12 right-0 bg-gold p-10 max-w-xs translate-x-1/2 hidden lg:block shadow-xl">
               <p className="text-night font-serif italic text-lg mb-4">"{t('home.quote')}"</p>
               <span className="text-xs uppercase tracking-widest font-bold text-night/60">Vision MLT Security</span>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Services Overview - Utilisation de Carbon/30 pour plus de clarté */}
      <section className="py-32 bg-carbon/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            tag={t('home.srvTag')}
            title={t('home.srvTitle')}
            subtitle={t('home.srvSub')}
            align="center"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="bg-night/50 backdrop-blur-sm p-10 border border-white/5 hover:border-gold/30 transition-all duration-500 group flex flex-col h-full shadow-lg">
                <div className="mb-8">
                   <div className="w-12 h-12 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-night transition-all">
                      {idx === 0 && <ShieldAlert size={20} />}
                      {idx === 1 && <Target size={20} />}
                      {idx === 2 && <Award size={20} />}
                      {idx === 3 && <Target size={20} />}
                   </div>
                </div>
                <h3 className="text-xl font-serif text-white mb-6 leading-snug">{service.title[language]}</h3>
                <p className="text-slate-300 text-sm font-light leading-relaxed mb-8 flex-grow">
                  {service.description[language]}
                </p>
                <Link to="/services" className="flex items-center space-x-3 text-gold text-[10px] uppercase tracking-widest font-bold group/link">
                  <span>{language === 'fr' ? 'Détails stratégiques' : 'Strategic Details'}</span>
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative bg-night">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-light text-white mb-10 leading-tight">
             {t('home.ctaTitle').split('confidentielle')[0]} <span className="italic">{language === 'fr' ? 'confidentielle.' : 'confidential.'}</span>
          </h2>
          <p className="text-slate-300 text-lg font-light mb-12 max-w-2xl mx-auto">
            {t('home.ctaSub')}
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-platinum text-night px-12 py-5 uppercase text-[11px] tracking-[0.3em] font-bold hover:bg-gold transition-colors duration-300 shadow-lg"
          >
            {t('home.ctaBtn')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
