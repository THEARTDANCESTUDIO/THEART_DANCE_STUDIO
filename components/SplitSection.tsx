import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SplitSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="flex flex-col md:flex-row w-full min-h-[800px] border-t border-gray-900">
      
      {/* Left Side: K-POP MV */}
      <div className="relative w-full md:w-1/2 h-[600px] md:h-auto bg-zinc-900 group overflow-hidden border-b md:border-b-0 md:border-r border-gray-900">
         {/* Background Image with Hover Zoom */}
         <img 
          src="https://picsum.photos/800/1201?grayscale" 
          alt="K-POP MV" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500"></div>

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-center">
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-6 leading-none text-white">
                K-POP<br />MUSIC VIDEO
            </h3>
            
            <button className="flex items-center space-x-2 text-sm font-bold uppercase hover:text-red-500 transition-colors tracking-widest">
                <span>WATCH NOW</span>
                <Play size={16} fill="currentColor" />
            </button>
        </div>
      </div>

      {/* Right Side: Schedule */}
      <div className="relative w-full md:w-1/2 h-[600px] md:h-auto bg-zinc-900 group overflow-hidden">
        {/* Background Image with Hover Zoom */}
        <img 
          src="https://picsum.photos/800/1202?grayscale" 
          alt="Class Schedule" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500"></div>
        
        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-center">
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-6 leading-none text-white">
                {t.split.schedule}
            </h3>
            <button className="flex items-center space-x-2 text-sm font-bold uppercase hover:text-red-500 transition-colors tracking-widest">
                <span>{t.split.viewSchedule}</span>
                <ArrowRight size={16} />
            </button>
        </div>
      </div>

    </section>
  );
};

export default SplitSection;