import React from 'react';
import { Instagram, Youtube, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-zinc-900">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        
        {/* FAQ Section */}
        <div className="border-l-2 border-zinc-800 pl-8">
            <h4 className="text-xl font-bold mb-2 text-gray-500 uppercase">{t.footer.faq}</h4>
            <h2 className="text-5xl font-black uppercase tracking-tighter">{t.footer.faq}</h2>
        </div>

        {/* Contact Section */}
        <div className="border-l-2 border-zinc-800 pl-8">
            <h4 className="text-xl font-bold mb-2 text-gray-500 uppercase">{t.footer.contact}</h4>
            <h2 className="text-5xl font-black uppercase tracking-tighter">{t.footer.contact}</h2>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center mb-16">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-4">THEART</h1>
        <div className="text-sm md:text-base font-bold tracking-widest text-gray-400 uppercase space-y-2">
            <p>{t.footer.location}</p>
            <p>+82 10 9584 9901</p>
            <p className="text-white hover:text-red-500 cursor-pointer">info@theartdance.com</p>
        </div>
      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 pt-8 border-t border-zinc-900">
        <div className="mb-4 md:mb-0">
            <p>&copy; 2017 THEART DANCE STUDIO. {t.footer.rights}</p>
        </div>
        <div className="flex space-x-6">
            <a href="https://www.instagram.com/theart_dance_studio?igsh=a2J6ZnZ2d3N3a20z" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="https://www.youtube.com/@THEART_DANCE_STUDIO" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Youtube size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;