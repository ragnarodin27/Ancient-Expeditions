import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000; // 3 seconds loading
    const interval = 30;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Slight delay at 100%
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="h-full w-full bg-[#221a10] font-display antialiased relative overflow-hidden flex flex-col items-center">
      {/* Atmospheric Void Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_var(--tw-gradient-stops))] from-[#3c2f22] via-[#221a10] to-black opacity-90 z-0"></div>
      
      {/* Grain Texture Overlay */}
      <div className="absolute inset-0 bg-grain mix-blend-overlay z-0 pointer-events-none opacity-20"></div>
      
      {/* Floating Dust Motes */}
      <div className="absolute top-[20%] left-[15%] h-1 w-1 rounded-full bg-[#f49d25]/40 blur-[1px] animate-pulse-slow z-0"></div>
      <div className="absolute top-[45%] right-[10%] h-0.5 w-0.5 rounded-full bg-white/30 blur-[0.5px] z-0"></div>
      <div className="absolute bottom-[30%] left-[25%] h-1.5 w-1.5 rounded-full bg-[#f49d25]/20 blur-[2px] animate-pulse z-0"></div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-between px-6 py-12 w-full">
        
        {/* Top Spacer */}
        <div className="flex-1"></div>

        {/* Central Artifact: Sun Disk */}
        <div className="flex flex-col items-center justify-center w-full mb-8 relative">
            {/* Outer Glow/Rim Light */}
            <div className="absolute inset-0 bg-[#f49d25]/20 blur-[60px] rounded-full scale-75 opacity-60"></div>
            
            {/* The Artifact Container */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full ring-1 ring-white/10 shadow-2xl bg-black/40 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                {/* Rotating Layer */}
                <div className="absolute inset-0 w-full h-full animate-spin-slow">
                    <div 
                        className="w-full h-full bg-cover bg-center opacity-90" 
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBP1dXeyOgdeoBF-dQfTPj-HikYnAKc-ceCwS-hXyy4agDSQw6n3x1dOXkzFGIda_Swy0tcjLMCEBn8L5X-iGUoEfGS393eMIU2Y0gapCzocm2KvMzHuadDNkdNCGTsbDwAuZ8zNDwWkV2QzHMD1lMt11q-xS1UjNclYe2iybxFEZjvSTWKprRXTGsvzaXBlITEpxEHbnVcBCKWrpdp-g58fZetGGi4ZmuyQhIeEDP1H-zj1nIZjOJE9BovJVjXbCB5plkWTAY8n2c')" }}
                    ></div>
                </div>
                
                {/* Inner Lighting Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.1),_transparent_60%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_50%,_rgba(0,0,0,0.8)_100%)]"></div>
                
                {/* Center Detail */}
                <div className="w-16 h-16 rounded-full border border-[#f49d25]/30 bg-black/60 backdrop-blur-md flex items-center justify-center shadow-inner relative z-10">
                    <span className="material-symbols-outlined text-[#f49d25]/80 text-3xl">sunny</span>
                </div>
            </div>
        </div>

        {/* Lore Fragment */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12 w-full max-w-xs relative">
            <h2 className="text-white tracking-[0.2em] text-2xl font-bold uppercase leading-tight drop-shadow-md font-display">
                The Sunken Temple
            </h2>
            
            {/* Decorative Separator */}
            <div className="flex items-center gap-2 opacity-50">
                <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#f49d25]"></div>
                <div className="h-1.5 w-1.5 rotate-45 border border-[#f49d25]"></div>
                <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#f49d25]"></div>
            </div>

            <p className="text-[#baad9c] text-sm font-normal leading-relaxed italic font-serif">
                "Legend speaks of a light that never fades, buried beneath waves of sand and time. Few who enter return to tell of its warmth."
            </p>
        </div>

        {/* Footer: Progress & Status */}
        <div className="w-full mt-auto flex flex-col gap-3 pb-6">
            <div className="flex justify-between items-end px-1">
                <p className="text-[#f49d25] text-xs font-semibold tracking-widest uppercase flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] animate-spin">autorenew</span>
                    Deciphering Glyphs...
                </p>
                <p className="text-white/40 text-xs font-mono">{Math.floor(progress)}%</p>
            </div>
            
            {/* Minimalist Progress Bar */}
            <div className="relative w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#f49d25]/50 via-[#f49d25] to-[#f49d25] shadow-[0_0_8px_rgba(244,157,37,0.9)] transition-all ease-out"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default LoadingScreen;