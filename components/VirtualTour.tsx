import React from 'react';
import { MoveRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const VirtualTour: React.FC = () => {
  const { t } = useLanguage();
  const TOUR_LINK = "https://sparkly-basbousa-23afdf.netlify.app";
  const VIDEO_ID = "Q4qg81KQD-U";

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] bg-black overflow-hidden group border-t border-zinc-900">
      {/* Video Background Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <iframe 
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${VIDEO_ID}&playsinline=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&enablejsapi=1`}
          title="Studio Virtual Tour Background"
          className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 opacity-70 transition-opacity duration-1000 object-cover"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      
      {/* Gradient Overlays for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 z-10"></div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 z-20">
        <div className="block max-w-max select-none">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-tight max-w-2xl mb-8 whitespace-pre-line text-white drop-shadow-2xl">
            {t.tour.title}
          </h2>
          
          <a 
            href={TOUR_LINK}
            target="_self"
            className="flex items-center space-x-4 w-max group/btn cursor-pointer transition-all duration-300 active:scale-95 touch-manipulation"
          >
              <span className="text-sm font-bold uppercase tracking-widest border-b-2 border-transparent group-hover/btn:border-white pb-1 transition-all text-white">
                {t.tour.cta}
              </span>
              <div className="bg-red-600 p-2 rounded-full group-hover/btn:bg-white transition-colors duration-300">
                <MoveRight className="text-white group-hover/btn:text-red-600 transition-transform duration-300 group-hover/btn:translate-x-1" size={20} />
              </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;