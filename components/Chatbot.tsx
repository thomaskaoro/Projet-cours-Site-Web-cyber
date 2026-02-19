
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, X, Send, Shield, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { t, language } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = language === 'fr' 
        ? "Tu es un assistant de direction pour MLT Security Consulting, un cabinet de conseil stratégique en cybersécurité haut de gamme. Ton ton est sobre, élégant et institutionnel. Tu parles aux dirigeants (CEO, COMEX). Ne sois pas trop technique. Ne donne pas de prix fixes, propose toujours un rendez-vous confidentiel pour les détails budgétaires. MLT propose : Cyber Risk Governance, vCISO, Transformation, Gestion de Crise."
        : "You are an executive assistant for MLT Security Consulting, a high-end strategic cyber security consulting firm. Your tone is sober, elegant, and institutional. You speak to executives (CEOs, Boards). Don't be too technical. Don't give fixed prices; always suggest a confidential meeting for budgetary details. MLT offers: Cyber Risk Governance, vCISO, Transformation, Crisis Management.";

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages.map(m => ({ role: m.role === 'user' ? 'user' : 'model', parts: [{ text: m.text }] })), { role: 'user', parts: [{ text: userMessage }] }],
        config: { systemInstruction }
      });

      const botResponse = response.text || (language === 'fr' ? "Je m'excuse, je ne parviens pas à traiter votre demande actuellement. Veuillez contacter nos conseillers directement." : "I apologize, I am currently unable to process your request. Please contact our advisors directly.");
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      console.error("Chatbot error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {isOpen ? (
        <div className="w-80 md:w-96 h-[500px] subtle-glass border border-gold/20 flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-carbon p-4 border-b border-gold/10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="text-gold w-4 h-4" />
              <span className="text-[10px] uppercase tracking-widest text-white font-medium">{t('chatbot.title')}</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-night/80 scrollbar-hide">
            <div className="bg-carbon/50 p-3 text-xs font-light text-slate-300 border-l-2 border-gold max-w-[85%]">
              {t('chatbot.welcome')}
            </div>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 text-xs font-light max-w-[85%] ${m.role === 'user' ? 'bg-gold text-night font-medium' : 'bg-carbon text-slate-300 border-l-2 border-slate-600'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-carbon p-3 text-xs text-slate-500 italic flex items-center space-x-2">
                  <Loader2 size={14} className="animate-spin" />
                  <span>{language === 'fr' ? 'Analyse en cours...' : 'Analyzing...'}</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gold/10 bg-carbon">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t('chatbot.placeholder')}
                className="w-full bg-night border border-white/5 p-3 text-xs text-white focus:outline-none focus:border-gold/50 transition-colors pr-10"
              />
              <button onClick={handleSend} className="absolute right-3 top-1/2 -translate-y-1/2 text-gold hover:text-white transition-colors">
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-gold flex items-center justify-center text-night hover:bg-white transition-all duration-300 shadow-2xl group"
        >
          <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
