import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SplitSection from './components/SplitSection';
import Ticker from './components/Ticker';
import VirtualTour from './components/VirtualTour';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      <Navbar />
      <Hero />
      <SplitSection />
      <Ticker />
      <VirtualTour />
      <Footer />
      <AiAssistant />
      
      {/* Global Style for marquee animation and smooth scrolling */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}

export default App;