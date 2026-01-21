import React from 'react';

interface BossWarningScreenProps {
  onBack: () => void;
  onEngage: () => void;
}

const BossWarningScreen: React.FC<BossWarningScreenProps> = ({ onBack, onEngage }) => {
  return (
    <div className="relative w-full h-full bg-[#181311] overflow-hidden flex flex-col items-center font-display select-none">
      <style>{`
        @keyframes shake {
            0%, 100% { transform: translate(0, 0) scale(1.1); }
            25% { transform: translate(-1px, 1px) scale(1.1); }
            50% { transform: translate(1px, -1px) scale(1.1); }
            75% { transform: translate(-1px, -1px) scale(1.1); }
        }
        .animate-shake { animation: shake 8s infinite ease-in-out; }
        .text-glow-red { text-shadow: 0 0 10px rgba(244, 89, 37, 0.6); }
        .ember-particle {
            position: absolute;
            background: #f45925;
            border-radius: 50%;
            filter: blur(1px);
            animation: float-up 4s infinite linear;
        }
        @keyframes float-up {
            0% { transform: translateY(0) scale(1); opacity: 0; }
            50% { opacity: 0.8; }
            100% { transform: translateY(-100px) scale(0); opacity: 0; }
        }
      `}</style>

      {/* Background with Shake */}
      <div className="absolute inset-0 z-0">
         <div 
            className="w-full h-full bg-cover bg-center animate-shake"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB4mPp5WTUhLSQ-t7ClRL_wwlUAzeVbZaJMFh9g7IHINVpMUncazxS7EYFwGI7R0hkDNkKeO67J62YAqbQuOAJMYNBKoOjNdu0B3BMNT3HYZOAo6PreWUf5sdhVnFZLkJlXl_FX93qjaUhRSeqOkEMNeSnDkGr9KUYgYtP-SSdxg9EiQ_pHl3EKuiKHWTrqBVGUlmA1XwYzdMdPqa4X_yo3T_NFm828rkpWgTPjtlAz3_o1UiCoNeyV9ujfhjJpVlEimJ9fTej3FI8")' }}
         ></div>
         {/* Vignettes & Tints */}
         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>
         <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay"></div>
         <div className="absolute inset-0 bg-orange-500/5 mix-blend-color-dodge animate-pulse" style={{ animationDuration: '4s' }}></div>
      </div>

      {/* Floating Embers */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          <div className="ember-particle w-1 h-1 bottom-10 left-[20%]" style={{ animationDelay: '0s' }}></div>
          <div className="ember-particle w-1.5 h-1.5 bottom-20 left-[50%]" style={{ animationDelay: '1s' }}></div>
          <div className="ember-particle w-1 h-1 bottom-5 left-[80%]" style={{ animationDelay: '2.5s' }}></div>
      </div>

      {/* Glowing Eyes Overlay (positioned relative to image content roughly) */}
      {/* Left Eye */}
      <div className="absolute top-[30%] left-[35%] w-4 h-4 bg-[#f45925] rounded-full blur-md opacity-80 animate-pulse z-10 shadow-[0_0_20px_rgba(244,89,37,0.8)]"></div>
      {/* Right Eye */}
      <div className="absolute top-[30%] right-[35%] w-4 h-4 bg-[#f45925] rounded-full blur-md opacity-80 animate-pulse delay-75 z-10 shadow-[0_0_20px_rgba(244,89,37,0.8)]"></div>

      {/* Top Warning Indicator */}
      <div className="absolute top-12 z-20">
         <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#f45925]/40 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            <span className="material-symbols-outlined text-[#f45925] text-sm animate-pulse">warning</span>
            <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">Boss Encounter</span>
         </div>
      </div>

      {/* Bottom Content Container */}
      <div className="absolute bottom-0 w-full z-20 pb-12 px-6 flex flex-col items-center text-center">
         
         {/* Parchment Banner */}
         <div className="relative w-full bg-[#1a1410]/95 border-y-2 border-[#f45925]/40 p-6 mb-8 backdrop-blur-sm shadow-2xl">
             {/* Texture Overlay */}
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-40 mix-blend-multiply pointer-events-none"></div>
             
             {/* Torn Edge Visuals (simulated with CSS border tricks or just styling) */}
             <div className="absolute -top-1 left-0 w-full h-px bg-[#f45925]/20"></div>
             <div className="absolute -bottom-1 left-0 w-full h-px bg-[#f45925]/20"></div>

             <div className="relative z-10 flex flex-col items-center">
                 <span className="block text-[#f45925]/80 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Warning</span>
                 <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-none tracking-tight text-glow-red mb-4" style={{ fontFamily: 'Epilogue, sans-serif' }}>
                    The Guardian <br /> <span className="text-[#f45925]">Awakens</span>
                 </h1>
                 
                 {/* Decorative Separator */}
                 <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#f45925] to-transparent mx-auto mb-4 opacity-70"></div>
                 
                 <p className="text-stone-400 text-sm font-serif italic tracking-wide">
                    "The stone breathes. The ancient pact is broken."
                 </p>
             </div>
         </div>

         {/* Accept Fate Button */}
         <button 
            onClick={onEngage}
            className="group relative w-full max-w-[320px] h-16 flex items-center justify-center gap-3 bg-[#2a2625] border-2 border-[#3d3836] rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.7)] active:scale-95 transition-transform overflow-hidden"
         >
            {/* Inner Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#3d3836] to-[#1c1917] opacity-100 group-hover:opacity-0 transition-opacity"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#4d3836] to-[#2c1917] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Metallic Highlight */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-white/20"></div>
            
            {/* Rivets */}
            <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-stone-500 shadow-inner"></div>
            <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-stone-500 shadow-inner"></div>
            <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-stone-500 shadow-inner"></div>
            <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-stone-500 shadow-inner"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center gap-4">
                <span className="material-symbols-outlined text-[#f45925] group-hover:text-white transition-colors">swords</span>
                <span className="text-lg font-bold text-white tracking-[0.15em] uppercase font-display">Accept Fate</span>
                <span className="material-symbols-outlined text-[#f45925] scale-x-[-1] group-hover:text-white transition-colors">swords</span>
            </div>
         </button>

         {/* Secondary Action */}
         <button 
            onClick={onBack} 
            className="mt-6 text-stone-500 text-xs font-bold uppercase tracking-[0.2em] hover:text-stone-300 transition-colors opacity-60 hover:opacity-100"
         >
            Prepare Inventory
         </button>

      </div>
    </div>
  );
};

export default BossWarningScreen;
