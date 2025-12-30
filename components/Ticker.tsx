import React from 'react';
import { ArrowRight } from 'lucide-react';

const Ticker: React.FC = () => {
  return (
    <div className="bg-red-600 text-black overflow-hidden py-4 whitespace-nowrap sticky top-20 z-40">
      <div className="inline-flex items-center space-x-12 animate-marquee font-black uppercase tracking-widest text-lg md:text-xl">
        {[1, 2, 3, 4, 5, 6].map((i) => (
            <React.Fragment key={i}>
                <span className="flex items-center space-x-2 hover:underline cursor-pointer">
                    <span>Follow Us @theartdance</span>
                    <ArrowRight size={20} />
                </span>
                 <span>//</span>
            </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Ticker;