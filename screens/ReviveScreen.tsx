import React from 'react';

interface ReviveScreenProps {
  onRevive: () => void;
  onGiveUp: () => void;
}

const ReviveScreen: React.FC<ReviveScreenProps> = ({ onRevive, onGiveUp }) => {
  // Hardcoded selected character for prototype display
  const character = {
    name: "AXEL",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbNQ9tgMrdNHXotfNMg5M2a8s-FYQfuSp-1MrJom1qHjjxRQDK0LgaIw1s0xR0RqfazTPQ0AKFKBNwp76cGa1JlAxZakpjK5LMUeW-q5oaF9BVh2_PRGi7afkqRtIJnXwhLWt238RqqXUXYT9g3LfExb1hH_7SMj_8DBmK9vUCTgmSxdYWNB8PDkpucdCLGprwWbiUFdH3SfPon_pM0c5Rh23E9S0z6b7gLDlEIODTSgWuFlFl7loQ6jTJOpR0g6KMpcsjNHU6M9E'
  };

  return (
    <div className="h-full w-full bg-[#020617] font-display relative overflow-hidden flex flex-col items-center select-none text-cyan-50">
      
      {/* --- 1. Environmental Atmosphere --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Base Cavern Layer */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=2070&auto=format&fit=crop" 
            alt="Dark Cavern" 
            className="w-full h-full object-cover opacity-40 grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0f172a]/80 to-[#020617]"></div>
        </div>

        {/* Volumetric Fog Layers (Animated) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/10 via-transparent to-purple-900/10 mix-blend-overlay"></div>
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-cyan-950/50 to-transparent blur-2xl"></div>
        
        {/* Floating Spores/Dust */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse mix-blend-screen"></div>
      </div>

      {/* --- 2. Main Content Container --- */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-between py-12 w-full max-w-md">
        
        {/* Header Section */}
        <div className="text-center w-full space-y-4 mt-8 animate-in slide-in-from-top-8 fade-in duration-1000">
           {/* Sanctuary Label */}
           <div className="flex items-center justify-center gap-4 opacity-60">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500/50"></div>
              <span className="text-cyan-200/60 text-xs uppercase tracking-[0.4em] font-serif">Sanctuary</span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-500/50"></div>
           </div>

           {/* Cyan Bar */}
           <div className="w-48 h-6 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent mx-auto border-y border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]"></div>

           {/* Flavour Text */}
           <p className="text-cyan-400/50 text-sm font-serif italic tracking-wide">The spirits demand a tribute</p>
        </div>

        {/* Centerpiece: Character Portrait in Diamond */}
        <div className="flex-1 w-full flex flex-col items-center justify-center relative perspective-1000 -mt-8">
            
            {/* Diamond Frame */}
            <div className="relative w-56 h-56 group">
                {/* Rotating Glow Ring */}
                <div className="absolute inset-[-10px] border border-cyan-500/20 transform rotate-45 rounded-[20%] animate-spin-slow"></div>

                {/* Main Diamond Container */}
                <div className="absolute inset-0 transform rotate-45 overflow-hidden border-2 border-cyan-400/40 bg-slate-900/80 shadow-[0_0_40px_rgba(6,182,212,0.2)] backdrop-blur-sm z-10">
                    {/* Inner Image (Counter-Rotated) */}
                    <div className="absolute inset-[-20%] transform -rotate-45 flex items-center justify-center">
                        <img 
                            src={character.image} 
                            alt={character.name}
                            className="w-full h-full object-cover object-top grayscale-[0.3] contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                        />
                    </div>
                    {/* Overlay Gradient/Texture */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/80 via-transparent to-transparent mix-blend-multiply pointer-events-none"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 mix-blend-overlay"></div>
                    {/* Scanline */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent h-[200%] w-full animate-[spin_5s_linear_infinite] pointer-events-none opacity-30"></div>
                </div>

                {/* Ornamental Corners */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-200 rotate-45 shadow-[0_0_10px_white] z-20"></div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-200 rotate-45 shadow-[0_0_10px_white] z-20"></div>
            </div>

            {/* Character Name Plate */}
            <div className="mt-10 relative">
                {/* Rune text above? "RMPIPM" */}
                <div className="text-center mb-1">
                    <span className="text-[10px] text-cyan-500/40 font-mono tracking-[0.5em] blur-[0.5px]">RMPIPM</span>
                </div>
                {/* Name Box */}
                <div className="relative w-48 py-2 bg-gradient-to-r from-transparent via-black/60 to-transparent border-y border-cyan-500/20 backdrop-blur-md flex items-center justify-center">
                     <h2 className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-400 tracking-[0.2em] uppercase drop-shadow-sm">
                        {character.name}
                     </h2>
                </div>
            </div>

        </div>

        {/* --- 3. UI Actions --- */}
        <div className="w-full flex flex-col items-center gap-6 mb-8 z-20">
            
            {/* Primary Action: Gem Button */}
            <button 
              onClick={onRevive}
              className="group relative w-64 h-16 active:scale-[0.98] transition-transform duration-200"
            >
               {/* Button Body */}
               <div className="absolute inset-0 bg-gradient-to-b from-[#164e63] to-[#083344] rounded-sm border border-cyan-500/30 shadow-[0_0_20px_rgba(8,145,178,0.3)] overflow-hidden">
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-multiply"></div>
                   {/* Inner Highlight */}
                   <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent"></div>
               </div>
               
               {/* Label */}
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-cyan-50 font-display font-bold text-lg tracking-[0.2em] uppercase drop-shadow-md group-hover:text-white transition-colors">
                    Offer Tribute
                  </span>
                  <div className="flex items-center gap-1">
                     <span className="text-xs font-bold text-cyan-300">50</span>
                     <span className="material-symbols-outlined text-[10px] text-cyan-300">diamond</span>
                  </div>
               </div>
               
               {/* Hover Glow */}
               <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Secondary Action: Text Link */}
            <button 
              onClick={onGiveUp}
              className="text-slate-500 font-serif text-[10px] uppercase tracking-[0.25em] hover:text-slate-300 transition-colors"
            >
              Accept Fate & Return
            </button>

        </div>

      </div>
    </div>
  );
};

export default ReviveScreen;