import React, { useState } from 'react';

const FusionScreen: React.FC = () => {
  const [isFusing, setIsFusing] = useState(false);
  const [complete, setComplete] = useState(false);

  const handleRitual = () => {
    if (complete) {
      setComplete(false);
      return;
    }
    setIsFusing(true);
    setTimeout(() => {
      setIsFusing(false);
      setComplete(true);
    }, 2000);
  };

  return (
    <div className="h-full w-full bg-[#0c0a09] font-serif relative overflow-hidden">
      {/* Background - Stone Texture */}
      <div className="absolute inset-0 opacity-20 bg-grunge-overlay"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1c1917_0%,#000000_100%)]"></div>
      
      {/* Ambient Glows */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[100px] pointer-events-none transition-all duration-1000 ${isFusing ? 'scale-150 bg-amber-600/30' : ''}`}></div>

      <div className="relative z-10 flex flex-col h-full p-6">
        
        {/* Title */}
        <div className="text-center mt-4 mb-10">
          <h2 className="text-expedition-gold text-sm font-bold uppercase tracking-[0.3em] mb-2 opacity-70">The Altar of</h2>
          <h1 className="text-[#e3dacb] text-3xl font-display font-bold uppercase tracking-widest text-shadow-sm">Synthesis</h1>
          <div className="w-8 h-1 bg-[#3d342b] mx-auto mt-4"></div>
        </div>

        {/* Central Mechanism */}
        <div className="flex-1 flex flex-col items-center justify-center relative">
          
          {/* Outer Ring */}
          <div className={`w-72 h-72 rounded-full border border-[#2d2620] relative flex items-center justify-center transition-transform duration-[2000ms] ease-in-out ${isFusing ? 'rotate-[360deg]' : ''}`}>
             <div className="absolute inset-0 rounded-full border border-[#2d2620] scale-90 opacity-50"></div>
             
             {/* Decorative Runes around the circle */}
             <span className="absolute top-2 text-[#3d342b] font-display text-xs">IV</span>
             <span className="absolute bottom-2 text-[#3d342b] font-display text-xs">XI</span>
             <span className="absolute left-2 text-[#3d342b] font-display text-xs">IX</span>
             <span className="absolute right-2 text-[#3d342b] font-display text-xs">III</span>

             {/* Inner Stone */}
             <div className="w-40 h-40 rounded-full bg-[#1a1614] shadow-[inset_0_5px_15px_rgba(0,0,0,0.8)] border border-[#3d342b] flex items-center justify-center relative overflow-hidden group">
                {/* Glowing Core */}
                <div className={`absolute inset-0 bg-gradient-to-tr from-amber-900/40 to-transparent opacity-50 transition-opacity duration-700 ${complete ? 'opacity-100 bg-amber-500/20' : ''}`}></div>
                <span className={`material-symbols-outlined text-[#4a3b2a] text-6xl transition-all duration-700 ${complete ? 'text-expedition-gold scale-125 drop-shadow-[0_0_20px_rgba(197,160,89,0.8)]' : ''}`}>
                  {complete ? 'auto_awesome' : 'diamond'}
                </span>
             </div>

             {/* Input Slots - Orbiting */}
             <InputSlot position="top-0 -translate-y-1/2" icon="change_history" />
             <InputSlot position="bottom-0 translate-y-1/2" icon="circle" />
             <InputSlot position="left-0 -translate-x-1/2" icon="square" />
          </div>

          <p className="mt-12 text-[#6b5d4d] text-xs font-serif italic text-center max-w-[200px] h-8">
            {isFusing ? "Channeling ancient energy..." : complete ? "Ritual Complete. Artifact Restored." : "Combine the fragments to reveal the ancients' true power."}
          </p>
        </div>

        {/* Action Button - Stone Slab */}
        <button 
          onClick={handleRitual}
          disabled={isFusing}
          className="w-full py-4 mb-4 bg-[#1a1614] border border-[#3d342b] hover:border-expedition-gold group transition-all relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>
          <span className="relative z-10 text-[#e3dacb] font-display font-bold tracking-[0.2em] uppercase group-hover:text-expedition-gold transition-colors">
            {complete ? 'Reset Altar' : 'Begin Ritual'}
          </span>
        </button>

      </div>
    </div>
  );
};

const InputSlot = ({ position, icon }: { position: string, icon: string }) => (
  <div className={`absolute ${position} w-14 h-14 bg-[#0c0a09] border border-[#3d342b] rounded-full flex items-center justify-center shadow-xl hover:border-[#8c7b66] cursor-pointer transition-colors z-20`}>
    <span className="material-symbols-outlined text-[#3d342b] text-xl">{icon}</span>
  </div>
);

export default FusionScreen;