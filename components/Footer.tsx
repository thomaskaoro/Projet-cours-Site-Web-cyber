
import React from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION } from '../constants';
import { Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import CompanyLogo from './CompanyLogo';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-carbon border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-4 mb-8 group">
              <CompanyLogo size={36} />
              <div className="flex flex-col">
                <span className="text-lg font-medium tracking-widest text-white">MLT SECURITY</span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-slate-500 underline underline-offset-4 decoration-gold/40">Strategic Consulting</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed font-light mb-8">
              {t('footer.desc')}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-500 hover:text-gold transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-gold transition-colors"><Mail size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white mb-8 font-medium">Expertise</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-slate-400 hover:text-gold text-sm font-light transition-colors">Governance Advisory</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-gold text-sm font-light transition-colors">vCISO Strategy</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-gold text-sm font-light transition-colors">Crisis Management</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-gold text-sm font-light transition-colors">Cyber M&A Audit</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white mb-8 font-medium">{language === 'fr' ? 'Cabinet' : 'Firm'}</h4>
            <ul className="space-y-4">
              <li><Link to="/cabinet" className="text-slate-400 hover:text-gold text-sm font-light transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/insights" className="text-slate-400 hover:text-gold text-sm font-light transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-gold text-sm font-light transition-colors">{t('nav.contact')}</Link></li>
              <li><Link to="#" className="text-slate-400 hover:text-gold text-sm font-light transition-colors">{language === 'fr' ? 'Mentions Légales' : 'Legal Mentions'}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 flex flex-col md:row justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} MLT Security Consulting. {t('footer.rights')}</p>
          <p>Strategic Cyber Resilience for the Executive Board.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
