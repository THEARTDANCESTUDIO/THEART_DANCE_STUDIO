import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const HOME_LINK = "https://theartdancestudio1120.netlify.app";
  const DANCERS_LINK = "https://theart-dancer.netlify.app";
  const CLASSES_LINK = "https://illustrious-pegasus-596112.netlify.app";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'ko', label: 'KR' },
    { code: 'ja', label: 'JP' },
    { code: 'zh', label: 'CN' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href={HOME_LINK} className="text-2xl font-black tracking-tighter uppercase cursor-pointer hover:opacity-80 transition-opacity">
            THEART<span className="text-red-600">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-bold tracking-widest uppercase">
            {Object.entries(t.nav).map(([key, value]) => {
              if (key === 'account') return null;
              let href = `#${key}`;
              if (key === 'dancers') href = DANCERS_LINK;
              if (key === 'classes') href = CLASSES_LINK;
              return (
                <a key={key} href={href} target="_self" className="hover:text-red-500 transition-colors">
                  {value as string}
                </a>
              );
            })}
            <span className="opacity-50">|</span>
            <div className="relative">
              <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className="flex items-center hover:text-red-500 space-x-1">
                 <Globe size={16} />
                 <span>{languages.find(l => l.code === language)?.label}</span>
              </button>
              {isLangMenuOpen && (
                  <>
                      <div className="fixed inset-0 z-40" onClick={() => setIsLangMenuOpen(false)}></div>
                      <div className="absolute right-0 mt-2 w-24 bg-zinc-900 border border-zinc-800 rounded-md overflow-hidden shadow-xl z-50">
                          {languages.map((lang) => (
                              <button key={lang.code} onClick={() => { setLanguage(lang.code); setIsLangMenuOpen(false); }} className={`block w-full text-left px-4 py-2 text-xs hover:bg-zinc-800 ${language === lang.code ? 'text-red-500' : 'text-gray-300'}`}>
                                  {lang.label}
                              </button>
                          ))}
                      </div>
                  </>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl z-40 flex flex-col p-8 md:hidden">
            <div className="flex justify-between items-center mb-12">
               <span className="text-2xl font-black tracking-tighter uppercase">THEART<span className="text-red-600">.</span></span>
               <button onClick={() => setIsOpen(false)} className="text-white"><X size={32} /></button>
            </div>
            
            <div className="flex flex-col space-y-6 text-center">
              {Object.entries(t.nav).map(([key, value]) => {
                 if (key === 'account') return null;
                 let href = `#${key}`;
                 if (key === 'dancers') href = DANCERS_LINK;
                 if (key === 'classes') href = CLASSES_LINK;
                 return (
                    <a key={key} href={href} target="_self" onClick={() => setIsOpen(false)} className="block py-2 hover:text-red-600 text-3xl uppercase font-black tracking-tighter">
                      {value as string}
                    </a>
                );
              })}
            </div>

            {/* Mobile Language Selector */}
            <div className="mt-auto pb-12">
              <div className="flex items-center justify-center space-x-2 text-zinc-500 mb-4 uppercase tracking-[0.2em] font-bold text-xs">
                <Globe size={14} />
                <span>Select Language</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {languages.map((lang) => (
                  <button 
                    key={lang.code} 
                    onClick={() => { setLanguage(lang.code); setIsOpen(false); }} 
                    className={`py-3 rounded-lg border font-bold text-sm transition-all ${language === lang.code ? 'bg-red-600 border-red-600 text-white' : 'bg-zinc-900 border-zinc-800 text-zinc-400'}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
