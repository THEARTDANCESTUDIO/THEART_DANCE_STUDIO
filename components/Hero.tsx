import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-black">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
         <iframe 
            src='https://my.spline.design/metalicapplelogoanimation-Pvxn9MwR05UCf4LEL6iCZdy5/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            className="w-full h-full scale-100 md:scale-100" 
            title="Spline 3D Animation"
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full pb-20 md:pb-32 text-center px-4 pointer-events-none">
        <h2 className="text-sm md:text-lg font-bold tracking-[0.3em] text-gray-400 mb-4 uppercase">
          {t.hero.subtitle}
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
          {t.hero.title1}<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{t.hero.title2}</span><br />
          <span className="text-white">{t.hero.title3}</span>
        </h1>
        
        <div className="pointer-events-auto">
             <button className="group flex items-center space-x-2 text-white border-b border-white pb-1 hover:text-red-500 hover:border-red-500 transition-all duration-300">
                <span className="text-sm font-bold uppercase tracking-widest">{t.hero.cta}</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;