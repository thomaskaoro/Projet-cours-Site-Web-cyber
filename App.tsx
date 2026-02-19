
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Insights from './pages/Insights';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen selection:bg-gold selection:text-night">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cabinet" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/secteurs" element={<Industries />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Chatbot />
          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;
