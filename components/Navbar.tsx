import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'ko', label: 'KR' },
    { code: 'ja', label: 'JP' },
    { code: 'zh', label: 'CN' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#hero" 
          onClick={handleLogoClick}
          className="text-2xl font-black tracking-tighter uppercase cursor-pointer hover:opacity-80 transition-opacity"
        >
          THEART<span className="text-red-600">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-bold tracking-widest uppercase">
          {Object.entries(t.nav).map(([key, value]) => {
            if (key === 'account') return null; // Handle account separately
            return (
              <a key={key} href={`#${key}`} className="hover:text-red-500 transition-colors">
                {value as string}
              </a>
            );
          })}
          <span className="opacity-50">|</span>
          <a href="#" className="hover:text-red-500">{t.nav.account}</a>
          
          {/* Language Switcher - Click based */}
          <div className="relative">
            <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center hover:text-red-500 space-x-1 focus:outline-none"
            >
               <Globe size={16} />
               <span>{languages.find(l => l.code === language)?.label}</span>
            </button>
            
            {/* Dropdown with Click Outside overlay */}
            {isLangMenuOpen && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsLangMenuOpen(false)}></div>
                    <div className="absolute right-0 mt-2 w-24 bg-zinc-900 border border-zinc-800 rounded-md overflow-hidden shadow-xl z-50 animate-fade-in-up origin-top-right">
                        {languages.map((lang) => (
                            <button 
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code);
                                    setIsLangMenuOpen(false);
                                }}
                                className={`block w-full text-left px-4 py-2 text-xs hover:bg-zinc-800 hover:text-red-500 ${language === lang.code ? 'text-red-500' : 'text-gray-300'}`}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>
                </>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <div 
             className="text-xs font-bold border border-white/20 rounded px-2 py-1 cursor-pointer select-none active:bg-white/10" 
             onClick={() => {
              // Simple cycle for mobile
              const langs: Language[] = ['en', 'ko', 'ja', 'zh'];
              const idx = langs.indexOf(language);
              setLanguage(langs[(idx + 1) % langs.length]);
          }}>
             {languages.find(l => l.code === language)?.label}
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-black border-t border-gray-800 p-6 md:hidden flex flex-col space-y-4 text-center font-bold uppercase tracking-wider h-screen bg-black/95 backdrop-blur-xl">
          {Object.entries(t.nav).map(([key, value]) => {
             if (key === 'account') return null;
             return (
                <a key={key} href={`#${key}`} onClick={() => setIsOpen(false)} className="block py-2 hover:text-red-600">
                {value as string}
                </a>
            );
          })}
          <div className="flex justify-center space-x-6 pt-8 border-t border-gray-800 mt-4">
             {languages.map((lang) => (
                 <button 
                    key={lang.code} 
                    onClick={() => {
                        setLanguage(lang.code);
                        setIsOpen(false);
                    }}
                    className={`text-sm px-3 py-2 rounded ${language === lang.code ? 'bg-red-600 text-white' : 'text-gray-500 hover:text-white'}`}
                 >
                    {lang.label}
                 </button>
             ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;