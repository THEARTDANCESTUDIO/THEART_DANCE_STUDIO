import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const KPOP_VIDEO_ID = 'fEBETzsJenI';

const SplitSection: React.FC = () => {
  const { t } = useLanguage();
  const SCHEDULE_LINK = "https://illustrious-pegasus-596112.netlify.app";

  return (
    <section className="flex flex-col md:flex-row w-full min-h-[800px] border-t border-gray-900">
      
      {/* Left Side: K-POP MV */}
      <div className="relative w-full md:w-1/2 h-[600px] md:h-auto bg-black group overflow-hidden border-b md:border-b-0 md:border-r border-gray-900">
         
         {/* Video Background Layer - Strictly decorative */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <iframe 
                src={`https://www.youtube.com/embed/${KPOP_VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${KPOP_VIDEO_ID}&playsinline=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&enablejsapi=1`}
                title="K-POP MV Background"
                className="absolute top-1/2 left-1/2 w-[350%] h-[350%] -translate-x-1/2 -translate-y-1/2 opacity-100 transition-opacity duration-700"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
         </div>

        {/* Overlays - Decorative */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 group-hover:via-black/10 transition-all duration-500 pointer-events-none z-10"></div>

        {/* Content Container - Interaction enabled for children */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-6 text-center">
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6 leading-none text-white drop-shadow-2xl pointer-events-none select-none">
                K-POP<br />MUSIC VIDEO
            </h3>
            
            <a 
                href="https://dapper-peony-31a555.netlify.app"
                target="_self"
                className="inline-flex items-center space-x-3 text-sm font-bold uppercase text-white hover:text-red-500 transition-all tracking-[0.2em] mt-8 border-b-2 border-transparent hover:border-red-500 pb-1 cursor-pointer active:scale-95 touch-manipulation"
            >
                <span>WATCH NOW</span>
                <Play size={14} fill="currentColor" />
            </a>
        </div>
      </div>

      {/* Right Side: Schedule */}
      <div className="relative w-full md:w-1/2 h-[600px] md:h-auto bg-zinc-900 group overflow-hidden">
        <img 
          src="https://picsum.photos/800/1202?grayscale" 
          alt="Class Schedule" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-105 pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500 pointer-events-none"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-center">
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6 leading-none text-white pointer-events-none select-none">
                {t.split.schedule}
            </h3>
            <a 
                href={SCHEDULE_LINK}
                target="_self"
                className="flex items-center space-x-3 text-sm font-bold uppercase text-white hover:text-red-500 transition-all tracking-[0.2em] mt-8 border-b-2 border-transparent hover:border-red-500 pb-1 cursor-pointer active:scale-95 touch-manipulation"
            >
                <span>{t.split.viewSchedule}</span>
                <ArrowRight size={14} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default SplitSection;