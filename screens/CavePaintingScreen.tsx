import React from 'react';

interface CavePaintingScreenProps {
  onBack: () => void;
}

const CavePaintingScreen: React.FC<CavePaintingScreenProps> = ({ onBack }) => {
  return (
    <div className="h-full w-full bg-[#1a1712] font-display text-white overflow-hidden relative flex flex-col">
      {/* --- Styles for specific atmospheric effects --- */}
      <style>{`
        .cave-wall-bg {
            position: absolute;
            inset: 0;
            z-index: 0;
            background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRawjmMhn9mfZjrIUHavibrESakmwGG7KP7eHZZGxnq-nRbDu2-XsYQikWjs4rXBFXXMws8YFfabMwPwLHVEMNdcUR-SiT2yRA8LdSvXVplqdZ2TfYer2fXkbpLpDXkciDZekK0Ae_6mO77mSHB9ycmh1Q3xXp9wL1YN3kbGZxp6ySDeD8EekApnf6k3jxYTWU0EkHzGgxG990jgJMI3c3a1PwLx4ZNK_Ra8jhqpyu5wHj5L-K7mjfrcRNqseLWkTVz8gpeAK_Sfs');
            background-size: cover;
            background-position: center;
            opacity: 0.4;
            mix-blend-mode: overlay;
        }
        .torch-glow {
            background: radial-gradient(circle at 85% 90%, rgba(244, 192, 37, 0.25) 0%, rgba(244, 192, 37, 0.05) 40%, transparent 70%);
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 10;
            animation: glow-flicker 4s infinite alternate;
        }
        @keyframes glow-flicker {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.02); }
        }
        .etched-text {
            text-shadow: 0 1px 1px rgba(255, 255, 255, 0.1), 0 -1px 1px rgba(0, 0, 0, 0.8);
        }
        .cave-painting-icon {
            filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
        }
      `}</style>

      {/* Background Layers */}
      <div className="absolute inset-0 bg-[#1a1712] z-0"></div>
      <div className="cave-wall-bg pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-0 pointer-events-none"></div>
      <div className="torch-glow"></div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-[#1a1712]/30 border-b border-white/5 shrink-0">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
            <button 
                onClick={onBack}
                className="text-white/80 hover:text-[#f4c025] transition-colors flex size-10 items-center justify-center rounded-full bg-black/20 backdrop-blur-md"
            >
                <span className="material-symbols-outlined text-2xl">arrow_back</span>
            </button>
            <h1 className="text-[#e3dacb] text-lg font-bold tracking-widest uppercase etched-text opacity-90">The Painted Record</h1>
            <div className="size-10"></div> 
        </div>
      </header>

      {/* Main Content: Timeline */}
      <main className="relative z-10 flex-1 overflow-y-auto no-scrollbar pb-32 pt-6 px-6">
        <div className="grid grid-cols-[60px_1fr] gap-x-2">
            
            {/* Item 1: Completed */}
            <div className="flex flex-col items-center">
                <div className="relative flex items-center justify-center size-14 rounded-full bg-[#2a2620] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] border border-white/10 group">
                    <span className="material-symbols-outlined text-3xl text-[#a63c30] cave-painting-icon transform group-hover:scale-110 transition-transform duration-500">fingerprint</span>
                </div>
                <div className="w-[3px] bg-[#a63c30]/40 h-full my-2 rounded-full"></div>
            </div>
            <div className="flex flex-col py-2 pb-10 justify-start">
                <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-[#e3dacb] text-xl font-bold leading-tight etched-text">The Awakening</h3>
                    <span className="material-symbols-outlined text-[#f4c025] text-base">check_circle</span>
                </div>
                <p className="text-stone-400 text-sm font-normal leading-relaxed font-sans">First steps into the dark. The spirits were quiet.</p>
                <div className="mt-2 text-xs text-[#a63c30] font-bold uppercase tracking-widest opacity-80">Completed</div>
            </div>

            {/* Item 2: Completed */}
            <div className="flex flex-col items-center">
                <div className="relative flex items-center justify-center size-14 rounded-full bg-[#2a2620] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] border border-white/10 group">
                    <span className="material-symbols-outlined text-3xl text-stone-400 cave-painting-icon transform rotate-6 group-hover:rotate-0 transition-transform duration-500">directions_run</span>
                </div>
                <div className="w-[3px] bg-gradient-to-b from-[#a63c30]/40 to-[#f4c025]/50 h-full my-2 rounded-full"></div>
            </div>
            <div className="flex flex-col py-2 pb-10 justify-start">
                <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-[#e3dacb] text-xl font-bold leading-tight etched-text">The Great Escape</h3>
                    <span className="material-symbols-outlined text-[#f4c025] text-base">check_circle</span>
                </div>
                <p className="text-stone-400 text-sm font-normal leading-relaxed font-sans">Outran the collapsing walls of the Sun Temple.</p>
                <div className="mt-2 text-xs text-[#a63c30] font-bold uppercase tracking-widest opacity-80">Completed</div>
            </div>

            {/* Item 3: Current / Active */}
            <div className="flex flex-col items-center relative">
                {/* Glow Effect for Active Node */}
                <div className="absolute top-0 left-0 w-full h-14 bg-[#f4c025]/20 rounded-full blur-xl animate-pulse"></div>
                <div className="relative flex items-center justify-center size-16 rounded-full bg-[#3a352a] border-2 border-[#f4c025] shadow-[0_0_15px_rgba(244,192,37,0.3)] z-10">
                    <span className="material-symbols-outlined text-4xl text-[#f4c025] cave-painting-icon animate-pulse">emoji_events</span>
                </div>
                <div className="w-[2px] bg-gradient-to-b from-[#f4c025]/50 to-white/5 h-full my-2 rounded-full"></div>
            </div>
            <div className="flex flex-col py-3 pb-10 justify-start">
                <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-[#f4c025] text-2xl font-bold leading-tight etched-text drop-shadow-[0_0_8px_rgba(244,192,37,0.5)]">The Golden Idol</h3>
                </div>
                <p className="text-stone-300 text-base font-medium leading-relaxed font-sans">Retrieve the idol before the shadows consume it.</p>
                <div className="mt-3 inline-flex items-center px-3 py-1 rounded bg-[#f4c025]/10 border border-[#f4c025]/20 w-fit">
                    <span className="animate-pulse w-2 h-2 rounded-full bg-[#f4c025] mr-2"></span>
                    <span className="text-xs text-[#f4c025] font-bold uppercase tracking-widest">Current Objective</span>
                </div>
            </div>

            {/* Item 4: Locked */}
            <div className="flex flex-col items-center opacity-40">
                <div className="relative flex items-center justify-center size-12 rounded-full bg-transparent border-2 border-dashed border-stone-600">
                    <span className="material-symbols-outlined text-2xl text-stone-600">pets</span>
                </div>
                <div className="w-[1px] bg-stone-800 h-full my-2 rounded-full border-l border-dashed border-stone-700"></div>
            </div>
            <div className="flex flex-col py-2 pb-10 justify-start opacity-40">
                <h3 className="text-stone-500 text-lg font-bold leading-tight etched-text">Shadow Guardian</h3>
                <p className="text-stone-600 text-sm font-normal leading-relaxed font-sans mt-1">???</p>
                <div className="mt-2 text-xs text-stone-600 font-bold uppercase tracking-widest flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">lock</span> Locked
                </div>
            </div>

            {/* Item 5: Locked */}
            <div className="flex flex-col items-center opacity-20">
                <div className="relative flex items-center justify-center size-10 rounded-full bg-transparent border border-stone-700">
                    <span className="material-symbols-outlined text-xl text-stone-700">temple_hindu</span>
                </div>
            </div>
            <div className="flex flex-col py-1 justify-start opacity-20">
                <h3 className="text-stone-600 text-lg font-bold leading-tight etched-text">The Final Sanctum</h3>
                <div className="mt-2 text-xs text-stone-700 font-bold uppercase tracking-widest">Locked</div>
            </div>

        </div>
      </main>

      {/* Footer Action */}
      <div className="fixed bottom-0 left-0 w-full z-20 bg-gradient-to-t from-[#1a1712] via-[#1a1712]/95 to-transparent pb-8 pt-12 px-6 pointer-events-none">
        <div className="max-w-md mx-auto relative group pointer-events-auto">
            {/* Button Torch Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#f4c025] to-orange-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <button 
                onClick={onBack}
                className="relative w-full cursor-pointer flex items-center justify-center gap-3 overflow-hidden rounded-lg h-14 bg-[#f4c025] text-[#181611] font-bold text-lg tracking-wider shadow-lg hover:shadow-[0_0_20px_rgba(244,192,37,0.4)] active:scale-[0.98] transition-all"
            >
                <span className="material-symbols-outlined text-2xl animate-pulse">flashlight_on</span>
                <span>CONTINUE JOURNEY</span>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
            </button>
        </div>
        
        {/* Decoration: Torch handle hint in corner */}
        <div className="absolute bottom-[-20px] right-[-20px] w-32 h-32 opacity-80 pointer-events-none mix-blend-hard-light rotate-12 z-30">
            <img 
                className="w-full h-full object-cover rounded-full blur-sm" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPAazbXoEq_RDjkLAneHOvDf1HX7M6Ecyi23v8q_vAKHsKVfzBaG4WjUpWDpSZn1oDwOKNbxrRLa6K1xocML3a0-2uwnBKGph8zAM8LjnPpBuq-SX2G1opZTz65_LIvAy4_ejH65sLtnainW_X8sb6aIjlxE-6U0gveUuTisas_zV3bqBX0XI4NbTauXB_FqU9NY54s0aB3VNv0tfXi-RayG--9jiW8CefJ9wwI-R-4qNDtOLalnwgXwYfO2DTgUyICuCoAmUPsgg"
                alt="Torch flame"
            />
        </div>
      </div>

    </div>
  );
};

export default CavePaintingScreen;
