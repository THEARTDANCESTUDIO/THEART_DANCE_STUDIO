import React from 'react';
import { MoveRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const VirtualTour: React.FC = () => {
  const { t } = useLanguage();
  const TOUR_LINK = "https://sparkly-basbousa-23afdf.netlify.app";

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] bg-zinc-900 overflow-hidden group">
      <img 
        src="https://youtu.be/Q4qg81KQD-U?si=uAgUVdjU0kfAve4N" 
        alt="Studio Interior" 
        className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000"
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>

      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 z-10">
        <div className="block max-w-max select-none">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight max-w-2xl mb-8 whitespace-pre-line text-white">
            {t.tour.title}
          </h2>
          
          <a 
            href={TOUR_LINK}
            target="_self"
            className="flex items-center space-x-4 w-max group/btn cursor-pointer transition-all duration-300 active:scale-95 touch-manipulation"
          >
              <span className="text-sm font-bold uppercase tracking-widest border-b border-transparent group-hover/btn:border-white transition-all text-white">
                {t.tour.cta}
              </span>
              <MoveRight className="text-red-600 transition-transform duration-300 group-hover/btn:translate-x-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;