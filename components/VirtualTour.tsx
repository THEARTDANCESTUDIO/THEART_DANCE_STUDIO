import React from 'react';
import { PlayCircle, MoveRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const VirtualTour: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] bg-zinc-900 overflow-hidden group">
      <img 
        src="https://picsum.photos/1920/1080?grayscale" 
        alt="Studio Interior" 
        className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>

      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 z-10">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight max-w-2xl mb-8 whitespace-pre-line">
          {t.tour.title}
        </h2>
        
        <button className="flex items-center space-x-4 group/btn w-max">
            <span className="text-sm font-bold uppercase tracking-widest border-b border-transparent group-hover/btn:border-white transition-all">{t.tour.cta}</span>
            <MoveRight className="text-red-600 group-hover/btn:translate-x-2 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default VirtualTour;