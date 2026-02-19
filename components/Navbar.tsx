
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Removed NAVIGATION as it is not exported from constants and not used here.
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import CompanyLogo from './CompanyLogo';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/cabinet' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.sectors'), path: '/secteurs' },
    { name: t('nav.insights'), path: '/insights' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-night/95 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-4 group">
          <CompanyLogo size={44} className="group-hover:scale-105 transition-transform duration-500" />
          <div className="flex flex-col">
            <span className="text-xl font-medium tracking-[0.2em] text-white">MLT</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Security Consulting</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-link text-[10px] uppercase tracking-[0.15em] transition-colors ${location.pathname === item.path ? 'text-gold' : 'text-slate-300 hover:text-white'}`}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="flex items-center space-x-4 border-l border-white/10 pl-8">
            <button 
              onClick={() => setLanguage('fr')}
              className={`text-[10px] uppercase tracking-widest transition-colors ${language === 'fr' ? 'text-gold font-bold' : 'text-slate-500 hover:text-white'}`}
            >
              FR
            </button>
            <span className="text-white/10 text-[10px]">|</span>
            <button 
              onClick={() => setLanguage('en')}
              className={`text-[10px] uppercase tracking-widest transition-colors ${language === 'en' ? 'text-gold font-bold' : 'text-slate-500 hover:text-white'}`}
            >
              EN
            </button>
          </div>

          <Link 
            to="/contact" 
            className="px-6 py-2.5 border border-gold text-gold text-[10px] uppercase tracking-widest hover:bg-gold hover:text-night transition-all duration-300"
          >
            {t('nav.cta')}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-night z-40 md:hidden transition-transform duration-500 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-light uppercase tracking-[0.2em] text-white hover:text-gold"
            >
              {item.name}
            </Link>
          ))}
          
          <div className="flex items-center space-x-8 mt-4">
             <button onClick={() => { setLanguage('fr'); setMobileMenuOpen(false); }} className={`text-sm tracking-widest ${language === 'fr' ? 'text-gold underline' : 'text-slate-500'}`}>FRANÇAIS</button>
             <button onClick={() => { setLanguage('en'); setMobileMenuOpen(false); }} className={`text-sm tracking-widest ${language === 'en' ? 'text-gold underline' : 'text-slate-500'}`}>ENGLISH</button>
          </div>

          <Link 
            to="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="px-8 py-4 border border-gold text-gold text-xs uppercase tracking-widest"
          >
            {t('nav.cta')}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
