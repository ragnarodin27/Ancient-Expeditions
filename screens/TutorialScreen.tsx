import React, { useState } from 'react';

interface TutorialScreenProps {
  onBack: () => void;
}

const TutorialScreen: React.FC<TutorialScreenProps> = ({ onBack }) => {
  const [traced, setTraced] = useState(false);

  const handleTrace = () => {
    setTraced(true);
    setTimeout(onBack, 1500); // Auto close after tracing
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-stone-dark text-white overflow-hidden select-none">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-cover bg-center grayscale-[30%] contrast-125" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596230529625-7ee54136283d?q=80&w=2574&auto=format&fit=crop')" }}></div>
            {/* Vignettes for lighting */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-radial-gradient from-rgba(255,180,100,0.15) to-transparent blur-3xl opacity-60"></div>
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-radial-gradient from-rgba(255,180,100,0.15) to-transparent blur-3xl opacity-50"></div>
            {/* Torch Light Source */}
            <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-torch-amber/20 blur-[100px] rounded-full mix-blend-color-dodge animate-flicker pointer-events-none"></div>
            {/* Dark Edges */}
            <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: "radial-gradient(circle at 80% 90%, transparent 10%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.95) 85%)" }}></div>
        </div>

        <div className="relative z-20 w-full h-full flex flex-col p-6">
            <div className="w-full h-16"></div>
            
            <div className="flex-1 w-full relative">
                {/* JUMP Instruction */}
                <div className="absolute top-[5%] left-[10%] transform -rotate-3 group cursor-default">
                    <div className="flex flex-col items-center justify-center p-4">
                        <span className="material-symbols-outlined text-[90px] charcoal-icon leading-none scale-y-125">swipe_up</span>
                        <span className="font-marker text-4xl charcoal-text mt-2 tracking-widest pl-2">JUMP</span>
                        <div className="w-24 h-1 bg-[#2a2a2a] opacity-60 rounded-full blur-[1px] mt-1 transform -rotate-2 mix-blend-multiply"></div>
                    </div>
                </div>

                {/* TURN Instruction */}
                <div className="absolute top-[20%] right-[8%] transform rotate-6 group cursor-default">
                    <div className="flex flex-col items-center justify-center p-4">
                        <span className="material-symbols-outlined text-[90px] charcoal-icon leading-none">turn_right</span>
                        <span className="font-marker text-4xl charcoal-text mt-2 tracking-widest pr-2">TURN</span>
                        <div className="w-24 h-1 bg-[#2a2a2a] opacity-70 rounded-full blur-[1px] mt-1 transform rotate-1 mix-blend-multiply"></div>
                    </div>
                </div>

                {/* RUNE Interaction */}
                <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-8 w-full">
                    <div 
                        onClick={handleTrace}
                        className="relative w-48 h-48 flex items-center justify-center cursor-pointer active:scale-95 transition-transform"
                    >
                        <div className="relative z-10">
                            <span className={`material-symbols-outlined text-[140px] text-white/80 rune-glow-effect animate-pulse-slow transition-all duration-1000 ${traced ? 'text-torch-amber scale-110' : ''}`}>
                                cyclone
                            </span>
                        </div>
                        {/* Chalk Circles */}
                        <div className="absolute inset-0 rounded-full border-4 border-[#2a2a2a] opacity-20 blur-[2px] scale-75 transform rotate-45 mix-blend-multiply"></div>
                        <div className="absolute inset-0 rounded-full border-2 border-[#2a2a2a] opacity-10 blur-[1px] scale-90 transform -rotate-12 mix-blend-multiply"></div>
                        
                        {/* Highlights */}
                        <div className="absolute top-10 left-8 w-1 h-1 bg-torch-amber rounded-full shadow-[0_0_10px_orange]"></div>
                        <div className="absolute bottom-12 right-10 w-1.5 h-1.5 bg-torch-amber rounded-full shadow-[0_0_10px_orange] opacity-80"></div>
                    </div>
                    
                    <div className="text-center transform skew-x-[-5deg]">
                        <p className={`font-rough text-3xl font-bold tracking-wider leading-none drop-shadow-lg transition-colors duration-500 ${traced ? 'text-torch-amber opacity-100' : 'text-torch-amber/90 opacity-90'}`}>
                            {traced ? "Path Revealed" : "Trace the rune"}
                        </p>
                        <p className="font-rough text-2xl text-white/50 tracking-widest mt-1">
                            {traced ? "Loading..." : "to begin"}
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Action */}
            <div className="w-full pb-8 flex justify-center opacity-30 hover:opacity-100 transition-opacity duration-500">
                <button onClick={onBack} className="flex items-center gap-2 cursor-pointer group">
                    <span className="material-symbols-outlined text-stone-400 group-hover:text-torch-amber transition-colors">close</span>
                    <span className="font-rough text-xl text-stone-400 group-hover:text-torch-amber transition-colors">Abandon Path</span>
                </button>
            </div>
        </div>
    </div>
  );
};

export default TutorialScreen;