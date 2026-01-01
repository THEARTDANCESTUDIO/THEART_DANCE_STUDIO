import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Replace this ID with your studio's cover video ID if available
const KPOP_VIDEO_ID = 'fEBETzsJenI'; // Requested Video ID

const SplitSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="flex flex-col md:flex-row w-full min-h-[800px] border-t border-gray-900">
      
      {/* Left Side: K-POP MV */}
      <div className="relative w-full md:w-1/2 h-[600px] md:h-auto bg-black group overflow-hidden border-b md:border-b-0 md:border-r border-gray-900">
         
         {/* Video Background Layer */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* 
              Scale the iframe to ensure it covers the container without black bars.
              Using w-[300%] h-[300%] to zoom in and hide controls/margins.
            */}
            <iframe 
                src={`https://www.youtube.com/embed/${KPOP_VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${KPOP_VIDEO_ID}&playsinline=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&enablejsapi=1`}
                title="K-POP MV Background"
                className="absolute top-1/2 left-1/2 w-[350%] h-[350%] -translate-x-1/2 -translate-y-1/2 opacity-100 transition-opacity duration-700"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
         </div>

        {/* Dark Overlay for text readability - Adjusted to be lighter so video is visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 group-hover:via-black/10 transition-all duration-500 pointer-events-none"></div>

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-center pointer-events-none">
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6 leading-none text-white drop-shadow-2xl">
                K-POP<br />MUSIC VIDEO
            </h3>
            
            <a 
                href="https://dapper-peony-31a555.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm font-bold uppercase hover:text-red-500 transition-colors tracking-[0.2em] pointer-events-auto mt-8 border-b-2 border-transparent hover:border-red-500 pb-1"
            >
                <span>WATCH NOW</span>
                <Play size={14} fill="currentColor" />
            </a>
        </div>
      </div>

      {/* Right Side: Schedule */}
      <div className="relative w-full md:w-1/2 h-[600px] md:h-auto bg-zinc-900 group overflow-hidden">
        {/* Background Image with Hover Zoom */}
        <img 
          src="https://picsum.photos/800/1202?grayscale" 
          alt="Class Schedule" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500"></div>
        
        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-center">
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6 leading-none text-white">
                {t.split.schedule}
            </h3>
            <button className="flex items-center space-x-3 text-sm font-bold uppercase hover:text-red-500 transition-colors tracking-[0.2em] mt-8 border-b-2 border-transparent hover:border-red-500 pb-1">
                <span>{t.split.viewSchedule}</span>
                <ArrowRight size={14} />
            </button>
        </div>
      </div>

    </section>
  );
};

export default SplitSection;