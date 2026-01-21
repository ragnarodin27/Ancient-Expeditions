import React from 'react';

interface ExpeditionResultScreenProps {
  onContinue: () => void;
  onEnd: () => void;
  results?: {
    distance: number;
    relics: number;
    gold: number;
  };
}

const ExpeditionResultScreen: React.FC<ExpeditionResultScreenProps> = ({ 
  onContinue, 
  onEnd,
  results
}) => {
  
  return (
    <div className="h-full w-full bg-[#221a10] font-display relative overflow-hidden flex flex-col items-center justify-end select-none text-white">
      
      {/* 1. Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCFa_gXlsc8KPJfHFQBVkeiMCggdvgvIqGcclOZmaTnAGr4PKaA4sKq3W0xn3sh18V61chhQAW-UM5FgdLg4zm-HPh2ieeSeFoenmoEx8a9htasY48E58ST2LtQsYzs81poCR7tZgWiKMpLBmZ_Jqm32_kzGToSfZClTm_7TUG1FsYSTHQvJKmSwRbRSGQt1G6Qa_y3CaISRhJBR_9-hQJCZBGp30hG2_I7zP71Nc1fsCJko-OwCfQxewGepd6H3hqFxWy4WD7x-4"
          alt="Temple Interior" 
          className="w-full h-full object-cover" 
        />
        {/* Vignette & Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-[#221a10]"></div>
      </div>

      {/* 2. Main Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-md p-6 pb-12 gap-8 animate-in slide-in-from-bottom-10 duration-1000">

        {/* Victory Banner Area */}
        <div className="flex flex-col items-center text-center gap-2">
            <div className="flex items-center gap-2 mb-2 opacity-90">
                <span className="material-symbols-outlined text-[#f49d25] text-4xl drop-shadow-md">emoji_events</span>
            </div>
            <h1 className="text-[#f49d25] text-4xl font-bold tracking-tight leading-none uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Expedition<br/>Accomplished
            </h1>
            <div className="flex items-center justify-center gap-3 mt-2 w-full">
                <div className="h-[1px] flex-1 max-w-[40px] bg-[#f49d25]/60"></div>
                <p className="text-white/90 text-lg font-medium italic tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-serif">
                    The Golden Idol of Xibalba
                </p>
                <div className="h-[1px] flex-1 max-w-[40px] bg-[#f49d25]/60"></div>
            </div>
        </div>

        {/* Stats Panel */}
        <div className="w-full bg-[#2a241d]/95 backdrop-blur-sm rounded-lg p-1 border-t border-white/10 shadow-[inset_0_0_20px_rgba(0,0,0,0.8),0_10px_20px_rgba(0,0,0,0.5)]">
            <div className="grid grid-cols-3 divide-x divide-white/10">
                {/* Secrets */}
                <div className="flex flex-col items-center justify-center py-4 px-2 gap-1">
                    <span className="text-white/60 text-xs uppercase tracking-widest font-sans font-bold">Secrets</span>
                    <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[#f49d25] text-sm">diamond</span>
                        <span className="text-white text-xl font-bold leading-none">3 / 3</span>
                    </div>
                </div>
                {/* Time */}
                <div className="flex flex-col items-center justify-center py-4 px-2 gap-1">
                    <span className="text-white/60 text-xs uppercase tracking-widest font-sans font-bold">Time</span>
                    <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[#f49d25] text-sm">timer</span>
                        <span className="text-white text-xl font-bold leading-none">04:21</span>
                    </div>
                </div>
                {/* Rank */}
                <div className="flex flex-col items-center justify-center py-4 px-2 gap-1 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#f49d25]/5"></div>
                    <span className="text-white/60 text-xs uppercase tracking-widest font-sans font-bold">Rank</span>
                    <div className="flex items-center gap-1.5 z-10">
                        <span className="text-[#f49d25] text-xl font-bold leading-none drop-shadow-sm">Elite</span>
                        <span className="material-symbols-outlined text-[#f49d25] text-sm">verified</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Action Button */}
        <div className="w-full pt-2">
            <button 
                onClick={onContinue}
                className="group relative w-full flex items-center justify-center gap-3 rounded-full py-4 px-8 cursor-pointer select-none bg-gradient-to-b from-[#f49d25] to-[#e08e1f] shadow-[0_4px_0_#c77d1e,0_10px_20px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.4)] active:translate-y-1 active:shadow-[0_0_0_#c77d1e,inset_0_1px_0_rgba(255,255,255,0.4)] transition-all duration-100"
            >
                {/* Dots */}
                <div className="h-1.5 w-1.5 rounded-full bg-[#221a10]/40"></div>
                <span className="text-[#221a10] text-lg font-black uppercase tracking-widest font-sans">Claim Reward</span>
                <div className="h-1.5 w-1.5 rounded-full bg-[#221a10]/40"></div>
                
                {/* Shimmer */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                </div>
            </button>
            <p className="text-center text-white/40 text-xs mt-6 font-sans uppercase tracking-widest animate-pulse">Tap to continue</p>
        </div>

      </div>
    </div>
  );
};

export default ExpeditionResultScreen;