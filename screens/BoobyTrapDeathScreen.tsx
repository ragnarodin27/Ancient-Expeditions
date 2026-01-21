import React from 'react';

interface BoobyTrapDeathScreenProps {
  onRetry: () => void;
  onExit: () => void;
}

const BoobyTrapDeathScreen: React.FC<BoobyTrapDeathScreenProps> = ({ onRetry, onExit }) => {
  return (
    <div className="relative flex h-full w-full flex-col justify-end bg-[#221410] overflow-hidden font-display select-none">
      
      {/* Custom Styles for Clip Paths and Animations */}
      <style>{`
        .cracked-border {
            clip-path: polygon(
                0% 4px, 4px 0%, 
                calc(100% - 4px) 0%, 100% 4px, 
                100% calc(100% - 4px), calc(100% - 4px) 100%, 
                4px 100%, 0% calc(100% - 4px)
            );
        }
        .text-glow-impact {
            text-shadow: 0 0 20px rgba(244, 89, 37, 0.6), 0 0 40px rgba(244, 89, 37, 0.2);
        }
        @keyframes shake-impact {
            0%, 100% { transform: translate(0, 0) scale(1.1); }
            10%, 90% { transform: translate(-2px, -1px) scale(1.1); }
            20%, 80% { transform: translate(2px, 1px) scale(1.1); }
            30%, 50%, 70% { transform: translate(-4px, -2px) scale(1.1); }
            40%, 60% { transform: translate(4px, 2px) scale(1.1); }
        }
      `}</style>

      {/* Main Background Image - First Person Trap View */}
      <div className="absolute inset-0 z-0">
        <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLzk3S7Lvn-UOfWIrGbNuINeYSESVbgrlbph5fSoZLBdvEhAe5KRBBW-8dsMs6gNRqHHIC__X4d4eDXEUeT9KGhc3dUjokyoijgwcUitHAX9_GG0zpYm1goIFr1qprjIUg6nht3wJWfpAu2JcA8qqiqc_L1eVegf4yfP67gv8rp4IZs-337oRTRZgZcBK-80_Q62y_A9wb-jeBnCkP4Nwh9iZdnu8BNBInmPhK0zcjz11WBlzqzkH4wDhEs66hH_P38SPo4weHwOs")',
                animation: 'shake-impact 0.5s ease-out forwards', // Simulate initial impact shake
                transform: 'scale(1.1)' 
            }}
        ></div>
        {/* Vignette & Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#221410] via-[#221410]/80 to-transparent opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>
      </div>

      {/* Dust & Debris Overlay */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none opacity-30 mix-blend-overlay" 
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBkAw1vezxtJ2f83ovewaEKQPcBmT0h7se5xB_qfkOG6QZ8eaZl1V7jm-sbHboMrbE6M-80HWSwLhlRGcfKUD0NU4wgb9ac36jfLKNvFWs6fEqUqpfgQ5WWagrW1DZaY8TzGouZFC2X6JtedAIaXoeoyiKL0jjsFR5WOqbMINarI1SKPgepUj6Z_reu0Kki4DQMEGub2DgtW-Db9LSt-8Iy6PyIqGQ8XIGQAsVnk_lusSJhi18jpw54PIOYlNOuXZzk6VjWfqBsjc')" }}
      ></div>

      {/* Map Location Hint (Top Right) */}
      <div className="absolute top-10 right-6 opacity-60 z-20">
        <div className="flex items-center gap-1 bg-black/40 px-3 py-1.5 rounded backdrop-blur-md border border-white/10">
            <span className="material-symbols-outlined text-white text-xs">location_on</span>
            <span className="text-[10px] text-white font-mono uppercase tracking-wider">Forbidden Ruins</span>
        </div>
      </div>

      {/* UI Content Layer */}
      <div className="relative z-20 w-full max-w-md mx-auto px-6 pb-12 flex flex-col items-center gap-8">
        
        {/* Header Section: Impact Title */}
        <div className="text-center transform transition-all duration-700 ease-out animate-in zoom-in-50 fade-in slide-in-from-bottom-10">
            <div className="inline-flex items-center justify-center p-4 mb-4 rounded-full bg-[#f45925]/10 border border-[#f45925]/20 backdrop-blur-md shadow-[0_0_30px_rgba(244,89,37,0.2)]">
                <span className="material-symbols-outlined text-[#f45925] text-4xl animate-pulse">skull</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-[#f45925] tracking-tighter leading-none text-glow-impact uppercase italic transform -skew-x-6">
                Crushed
            </h1>
            <p className="text-[#baa39c] text-sm tracking-[0.3em] font-bold mt-3 uppercase border-t border-[#f45925]/30 pt-2 inline-block">
                Fatal Impact
            </p>
        </div>

        {/* Stats Section: Stone Etched Style */}
        <div className="flex w-full gap-4 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-150">
            {/* Stat Card: Distance */}
            <div className="flex-1 bg-[#2a1d19]/80 backdrop-blur-sm border border-[#54413b] rounded p-4 flex flex-col items-center text-center shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#f45925]/40 to-transparent"></div>
                <span className="material-symbols-outlined text-[#baa39c] mb-1 text-2xl group-hover:text-[#f45925] transition-colors">sprint</span>
                <p className="text-white tracking-tight text-3xl font-bold leading-tight font-space">450<span className="text-base font-normal opacity-60 ml-0.5">m</span></p>
                <p className="text-[#baa39c] text-[10px] font-bold uppercase tracking-widest mt-1">Distance</p>
            </div>
            
            {/* Stat Card: Relics */}
            <div className="flex-1 bg-[#2a1d19]/80 backdrop-blur-sm border border-[#54413b] rounded p-4 flex flex-col items-center text-center shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#f45925]/40 to-transparent"></div>
                <span className="material-symbols-outlined text-[#baa39c] mb-1 text-2xl group-hover:text-[#f45925] transition-colors">diamond</span>
                <p className="text-white tracking-tight text-3xl font-bold leading-tight font-space">3</p>
                <p className="text-[#baa39c] text-[10px] font-bold uppercase tracking-widest mt-1">Relics</p>
            </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col w-full gap-4 mt-2 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-300">
            {/* Primary Button: Cracked Stone Slab */}
            <button 
                onClick={onRetry}
                className="relative w-full h-16 group cursor-pointer active:scale-[0.98] transition-transform"
            >
                {/* Button Background Layer */}
                <div className="absolute inset-0 bg-[#3d2b25] cracked-border border-2 border-[#54413b] shadow-2xl"></div>
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-[#f45925]/0 group-hover:bg-[#f45925]/10 transition-colors duration-300 cracked-border"></div>
                
                {/* Inner Content */}
                <div className="relative h-full flex items-center justify-center gap-3 z-10">
                    <span className="material-symbols-outlined text-[#f45925] group-hover:animate-spin">replay</span>
                    <span className="text-white text-lg font-bold tracking-[0.15em] uppercase font-space">Try Again</span>
                </div>
                
                {/* Corner Accents (simulating stone chips) */}
                <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-[#f45925]/40 z-20 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-[#f45925]/40 z-20 pointer-events-none"></div>
            </button>

            {/* Secondary Button: Exit Parchment/Link */}
            <button 
                onClick={onExit}
                className="w-full flex items-center justify-center gap-2 py-3 text-[#baa39c] hover:text-white transition-colors group cursor-pointer"
            >
                <span className="material-symbols-outlined text-sm opacity-60 group-hover:opacity-100 transition-opacity">logout</span>
                <span className="text-sm font-bold tracking-widest border-b border-transparent group-hover:border-[#f45925]/50 pb-0.5 transition-all font-space">
                    EXIT TEMPLE
                </span>
            </button>
        </div>

      </div>
    </div>
  );
};

export default BoobyTrapDeathScreen;
