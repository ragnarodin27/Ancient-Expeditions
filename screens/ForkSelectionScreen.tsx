import React, { useState } from 'react';

interface ForkSelectionScreenProps {
  onBack: () => void;
  onChoose: (path: 'left' | 'right') => void;
}

const ForkSelectionScreen: React.FC<ForkSelectionScreenProps> = ({ onBack, onChoose }) => {
  const [selected, setSelected] = useState<'left' | 'right' | null>(null);

  const handleSelect = (side: 'left' | 'right') => {
    setSelected(side);
    // Simulate selection delay or interaction
    setTimeout(() => {
        onChoose(side);
    }, 500);
  };

  return (
    <div className="relative flex h-full w-full flex-col bg-[#181611] overflow-hidden font-display text-white selection:bg-[#f4c025]/30">
      
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]"></div>

      {/* Top AppBar */}
      <div className="z-20 flex items-center bg-transparent p-4 pb-2 justify-between shrink-0">
        <button 
            onClick={onBack}
            className="flex size-12 shrink-0 items-center justify-start text-white hover:text-[#f4c025] transition-colors"
        >
            <span className="material-symbols-outlined text-[28px]">arrow_back</span>
        </button>
        <h2 className="text-white text-sm font-bold leading-tight tracking-[0.2em] flex-1 text-center uppercase text-shadow-sm font-sans">Choose Your Path</h2>
        <div className="flex w-12 items-center justify-end">
            <button className="flex size-10 items-center justify-center text-white">
                <span className="material-symbols-outlined text-[28px]">backpack</span>
            </button>
        </div>
      </div>

      {/* Main Narrative Header */}
      <div className="z-20 relative shrink-0">
        <h1 className="text-white tracking-tight text-[32px] font-extrabold leading-tight px-6 text-center pb-3 pt-4 text-shadow-sm font-display">The Fork in the Road</h1>
        <p className="text-[#bab29c] text-sm text-center font-medium px-10 font-serif italic">Deep within the overgrown temple courtyard, your journey diverges.</p>
      </div>

      {/* Visual Path Selection */}
      <div className="flex-1 relative flex flex-col justify-center p-4 min-h-0 overflow-y-auto no-scrollbar">
        <div className="grid grid-cols-2 gap-4 h-[55vh] min-h-[300px]">
            
            {/* Left Path: Forbidden Catacombs */}
            <div 
                onClick={() => handleSelect('left')}
                className={`relative bg-cover bg-center flex flex-col gap-3 rounded-2xl justify-end p-5 border-2 transition-all duration-300 cursor-pointer group overflow-hidden ${selected === 'left' ? 'border-[#f4c025] scale-[1.02] shadow-[0_0_20px_rgba(244,192,37,0.3)]' : 'border-transparent hover:border-white/20'}`}
                style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzcrqwbF-yDJ4U07YgZmrf9mmCVZq7JwVF3U3i-80lmFC6bBz6x9C0tpS3ghlAzhWoEeFjNNLQM4LoW7Yl-PHPcY3t7fV62WRvarQ-52y-LUBDUQ_3asITf12JxQTFBqUpHXRAkXhVjtUPXFRhU36ul0opYtbKuNmNgs6kNaAfBwNAjNKpx1YY6Qt30XdlA3fIAdDA05vWSiEvOEmQXyY8jhjgurLYzhtbhCcWcmHRtFMrtD31gqbo__pIK40LOZeoRWaF1ekbU2M")' }}
            >
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md rounded-full p-2 border border-white/10 group-hover:bg-red-900/50 transition-colors">
                    <span className="material-symbols-outlined text-red-500">skull</span>
                </div>
                <div className="relative z-10">
                    <p className="text-white text-lg font-bold leading-tight line-clamp-2 font-display">The Forbidden Catacombs</p>
                    <p className="text-red-400 text-xs font-bold uppercase tracking-wider mt-1 font-sans">High Risk</p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>

            {/* Right Path: Celestial Gardens */}
            <div 
                onClick={() => handleSelect('right')}
                className={`relative bg-cover bg-center flex flex-col gap-3 rounded-2xl justify-end p-5 border-2 transition-all duration-300 cursor-pointer group overflow-hidden ${selected === 'right' ? 'border-[#f4c025] scale-[1.02] shadow-[0_0_20px_rgba(244,192,37,0.3)]' : 'border-[#f4c025]/40 hover:border-[#f4c025]'}`}
                style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlJlWVuJOcPTPEuc_dWuHN6okwLD49FAon9-_j9rrf6DjPMEpwSRDB-TQo1e0CXX7euYgQZmBWxS3LisapaboUjZuy0Dt5OBnH0nQY8Vnu6XisabEupArO3nbCXBtV1HfjEhnIWd2L08jLlw1TQZHw0KAQ6i-sPCvqIOl_75UnmMYE_BkNvAYLuSi18riF3Q2Dp2kIjBG_x7bmpYqOWhbICzw5ol8Yb8h7jPTRrNWVWbzocfVX5pozoNxkQVAwdoTcdL6Vg6L3b0I")' }}
            >
                <div className="absolute top-4 right-4 bg-[#f4c025]/20 backdrop-blur-md rounded-full p-2 border border-[#f4c025]/40 group-hover:bg-[#f4c025]/30 transition-colors">
                    <span className="material-symbols-outlined text-[#f4c025]" style={{ fontVariationSettings: "'FILL' 1" }}>wb_sunny</span>
                </div>
                <div className="relative z-10">
                    <p className="text-white text-lg font-bold leading-tight line-clamp-2 font-display">The Celestial Gardens</p>
                    <p className="text-[#f4c025] text-xs font-bold uppercase tracking-wider mt-1 font-sans">Safe Path</p>
                </div>
            </div>
        </div>

        {/* TextGrid for stats */}
        <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="flex flex-1 gap-2 rounded-xl border border-[#544e3b] bg-[#27241b]/80 backdrop-blur-sm p-4 flex-col">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#f4c025] text-sm">auto_awesome</span>
                    <h2 className="text-white text-xs font-bold leading-tight uppercase tracking-widest font-sans">Rewards</h2>
                </div>
                <p className="text-[#bab29c] text-sm font-normal leading-tight font-serif">Ancient Artifacts & Legendary Loot</p>
            </div>
            <div className="flex flex-1 gap-2 rounded-xl border border-[#544e3b] bg-[#27241b]/80 backdrop-blur-sm p-4 flex-col">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#f4c025] text-sm">shield</span>
                    <h2 className="text-white text-xs font-bold leading-tight uppercase tracking-widest font-sans">Security</h2>
                </div>
                <p className="text-[#bab29c] text-sm font-normal leading-tight font-serif">Minimal Traps & Rare Resources</p>
            </div>
        </div>
      </div>

      {/* ActionPanel / Interaction Zone */}
      <div className="p-6 pb-12 shrink-0">
        <div className="flex flex-1 flex-col items-center justify-center gap-6 rounded-2xl border border-[#544e3b] bg-[#181611]/60 backdrop-blur-lg p-6 relative overflow-hidden">
            {/* Decorative border glow */}
            <div className="absolute inset-0 border border-[#f4c025]/10 rounded-2xl pointer-events-none"></div>
            
            <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex items-center gap-4 mb-2 opacity-80">
                    <span className="material-symbols-outlined text-[#544e3b] animate-pulse">chevron_left</span>
                    <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#f4c025]/40 to-transparent rounded-full"></div>
                    <span className="material-symbols-outlined text-[#544e3b] animate-pulse">chevron_right</span>
                </div>
                <p className="text-white text-lg font-bold leading-tight font-display">Tap to Decide</p>
                <p className="text-[#bab29c] text-sm font-normal leading-normal max-w-[240px] font-sans">Left for Catacombs, Right for Gardens</p>
            </div>
            
            <button className="text-sm font-bold leading-normal tracking-[0.1em] flex items-center gap-2 text-[#f4c025] uppercase font-sans hover:text-white transition-colors">
                Path Details
                <span className="material-symbols-outlined text-sm">info</span>
            </button>
        </div>
      </div>

      {/* iOS Home Indicator Spacing */}
      <div className="h-6 w-full flex justify-center items-center pb-2 shrink-0">
        <div className="w-32 h-1 bg-white/20 rounded-full"></div>
      </div>

    </div>
  );
};

export default ForkSelectionScreen;
