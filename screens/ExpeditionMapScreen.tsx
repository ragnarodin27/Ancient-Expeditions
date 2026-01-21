import React, { useState } from 'react';

interface ExpeditionMapScreenProps {
  onBack: () => void;
  onPlay: () => void;
}

interface LevelNode {
  id: string;
  name: string;
  description: string;
  levelRange: string;
  bonus: string;
  x: number; // Percentage X
  y: number; // Percentage Y
  locked: boolean;
  image: string; // Background sketch for the area
}

const levels: LevelNode[] = [
  {
    id: 'jungle',
    name: 'The Misty Jungle',
    description: "Dense canopy hides ancient secrets. Beware the temple guardians lurking in the shadows.",
    levelRange: "Level 1-5",
    bonus: "+5% Speed",
    x: 25,
    y: 35,
    locked: false,
    image: 'https://images.unsplash.com/photo-1548345680-f5475ea5df84?q=80&w=2073&auto=format&fit=crop'
  },
  {
    id: 'temple',
    name: 'The Sunken Temple',
    description: "Submerged ruins filled with aquatic traps and lost treasures of a drowned civilization.",
    levelRange: "Level 6-10",
    bonus: "+10% Gold Find",
    x: 55,
    y: 50,
    locked: false,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2484&auto=format&fit=crop'
  },
  {
    id: 'highlands',
    name: 'The Cursed Highlands',
    description: "Treacherous peaks where the air is thin and spirits are restless. Only the brave survive.",
    levelRange: "Level 11-15",
    bonus: "Rare Relic Chance",
    x: 75,
    y: 70,
    locked: true,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop'
  }
];

const ExpeditionMapScreen: React.FC<ExpeditionMapScreenProps> = ({ onBack, onPlay }) => {
  const [selectedLevelId, setSelectedLevelId] = useState<string>('jungle');

  const selectedLevel = levels.find(l => l.id === selectedLevelId) || levels[0];

  return (
    <div className="h-full w-full bg-[#1a1410] font-serif relative overflow-hidden flex flex-col items-center select-none">
      
      {/* --- 1. Surface: Dark Scarred Mahogany --- */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop" 
            alt="Mahogany Desk" 
            className="w-full h-full object-cover opacity-100 brightness-[0.4] contrast-125 saturate-150"
        />
        {/* Scars & Dust Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-60 mix-blend-multiply"></div>
        {/* Heavy Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#000000_100%)] opacity-90"></div>
      </div>

      {/* Header - Subtle integrated text */}
      <div className="relative z-20 pt-8 pb-2 w-full text-center pointer-events-none mix-blend-overlay opacity-60">
        <h1 className="text-[#e3dacb] font-display text-2xl uppercase tracking-[0.2em] font-bold">
          Expedition Log
        </h1>
      </div>

      {/* Back Button - Brass Compass Style */}
      <div className="absolute top-6 left-4 z-30 group cursor-pointer" onClick={onBack}>
         <div className="relative w-12 h-12 transition-transform group-active:scale-95 duration-300 hover:scale-105">
             <div className="absolute inset-0 bg-[#2d241b] rounded-full border-[3px] border-[#8c7b66] shadow-[0_4px_10px_rgba(0,0,0,0.8)]"></div>
             <div className="absolute inset-1 rounded-full bg-[conic-gradient(from_45deg,#4a3b2a,#6b5d4d,#4a3b2a)] opacity-80"></div>
             {/* Glass Glint */}
             <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-white/20 to-transparent"></div>
             <span className="material-symbols-outlined absolute inset-0 flex items-center justify-center text-[#e3dacb] text-xl drop-shadow-md">arrow_back</span>
         </div>
      </div>

      {/* --- 2. Centerpiece: The Map --- */}
      <div className="flex-1 w-full max-w-lg relative z-10 flex items-center justify-center p-4">
         
         <div className="relative w-full aspect-[4/3] transform rotate-1 transition-transform duration-700 shadow-[0_30px_60px_-10px_rgba(0,0,0,0.9)]">
             
             {/* Burnt/Torn Parchment Body */}
             <div className="absolute inset-0 bg-[#e6d5b8]"
                  style={{
                    clipPath: "polygon(2% 0%, 98% 1%, 100% 97%, 95% 100%, 3% 99%, 0% 5%)",
                  }}
             >
                {/* Paper Texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-100 mix-blend-multiply brightness-90 contrast-125"></div>
                {/* Burnt Edges Gradient (Inner Shadow simulation) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(139,69,19,0.2)_80%,rgba(60,30,10,0.9)_100%)] pointer-events-none"></div>
                {/* Crease Lines */}
                <div className="absolute top-1/3 left-0 w-full h-px bg-black/10"></div>
                <div className="absolute top-2/3 left-0 w-full h-px bg-black/10"></div>
                <div className="absolute left-1/2 top-0 w-px h-full bg-black/10"></div>

                {/* --- 3. Map Details: Ink Sketches --- */}
                {levels.map((level) => (
                    <div 
                        key={`sketch-${level.id}`}
                        className={`absolute w-40 h-32 transition-opacity duration-500`}
                        style={{ 
                            left: `${level.x}%`, 
                            top: `${level.y}%`, 
                            transform: 'translate(-50%, -50%)',
                            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
                            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
                        }}
                    >
                        {/* Ink Filter Effect: Grayscale, High Contrast, Sepia, Multiply Blend */}
                        <img 
                          src={level.image} 
                          className={`w-full h-full object-cover mix-blend-multiply contrast-[1.5] brightness-90 grayscale sepia transition-opacity duration-500 ${level.id === selectedLevelId ? 'opacity-90' : 'opacity-50'}`} 
                        />
                    </div>
                ))}

                {/* Dotted Red Ink Path */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-70 mix-blend-multiply">
                    <path 
                        d="M 25% 35% Q 40% 50% 55% 50% T 75% 70%" 
                        fill="none" 
                        stroke="#8a1c1c" 
                        strokeWidth="3" 
                        strokeDasharray="4 6" 
                        strokeLinecap="round"
                        className="drop-shadow-[1px_1px_2px_rgba(0,0,0,0.3)]"
                    />
                </svg>

                {/* --- 4. Interaction Points --- */}
                {levels.map((level) => (
                    <div 
                        key={level.id}
                        onClick={() => setSelectedLevelId(level.id)}
                        className={`absolute cursor-pointer group transition-transform duration-300 ${level.id === selectedLevelId ? 'scale-110 z-20' : 'scale-100 z-10'}`}
                        style={{ left: `${level.x}%`, top: `${level.y}%`, transform: 'translate(-50%, -50%)' }}
                    >
                        {level.locked ? (
                          // Locked: Red Wax Seal
                          <div className="relative w-12 h-12 flex items-center justify-center filter drop-shadow-[2px_4px_6px_rgba(0,0,0,0.6)]">
                              <div className="absolute inset-0 bg-[#8a1c1c] rounded-full [clip-path:polygon(10%_0%,90%_5%,100%_50%,95%_95%,50%_100%,5%_90%,0%_50%)] shadow-inner"></div>
                              <div className="absolute inset-1 border border-[#5c1212] rounded-full opacity-50"></div>
                              <span className="material-symbols-outlined text-[#5c1212] text-xl relative z-10 drop-shadow-[0_1px_0_rgba(255,255,255,0.1)]">lock</span>
                          </div>
                        ) : (
                          // Unlocked/Current: Brass Compass Marker
                          <div className="relative w-12 h-12 flex items-center justify-center">
                              {/* Shadow */}
                              <div className="absolute -bottom-2 w-10 h-4 bg-black/60 blur-sm rounded-[100%]"></div>
                              {/* Brass Ring */}
                              <div className="absolute inset-0 rounded-full border-[3px] border-[#c5a059] bg-[#1a1410] shadow-[0_0_0_1px_#3d2e18]"></div>
                              {/* Face */}
                              <div className="absolute inset-1 rounded-full bg-[#e3dacb] opacity-10"></div>
                              {/* Glass Reflection */}
                              <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-white/30 to-transparent clip-circle"></div>
                              {/* Pin */}
                              <div className="absolute w-1 h-1 bg-red-800 rounded-full z-10"></div>
                              <div className="absolute w-1 h-5 bg-red-700 top-3 left-[22px] rounded-full origin-bottom transform -rotate-45"></div>
                          </div>
                        )}
                        
                        {/* Hover Name Tag */}
                        <div className={`absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 bg-[#e3dacb] border border-[#bfa889] shadow-[0_5px_10px_rgba(0,0,0,0.3)] transition-all duration-300 ${level.id === selectedLevelId ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                             <span className="text-[#3d2e18] font-handwriting font-bold text-sm tracking-wide">{level.name}</span>
                        </div>
                    </div>
                ))}
             </div>
         </div>

         {/* --- 5. Ambient Objects --- */}
         
         {/* Weathered Gold Coins Stack */}
         <div className="absolute bottom-[-10px] left-0 pointer-events-none transform scale-90">
             <div className="w-10 h-10 rounded-full bg-[#b8860b] border border-[#8b6508] shadow-[2px_2px_5px_rgba(0,0,0,0.6)] relative z-10">
                 <div className="absolute inset-0 flex items-center justify-center text-[#5c3a05] font-serif font-bold text-xs opacity-50">$</div>
             </div>
             <div className="w-10 h-10 rounded-full bg-[#daa520] border border-[#8b6508] shadow-[2px_2px_5px_rgba(0,0,0,0.6)] absolute -top-1.5 -left-2 z-20"></div>
             <div className="w-10 h-10 rounded-full bg-[#ffd700] border border-[#b8860b] shadow-[2px_2px_5px_rgba(0,0,0,0.6)] absolute -top-3 left-1 z-30 flex items-center justify-center">
               <div className="w-6 h-6 rounded-full border border-[#b8860b]/30"></div>
             </div>
         </div>

         {/* Magnifying Glass (CSS Constructed) */}
         <div className="absolute top-[-30px] right-[-30px] w-48 h-48 pointer-events-none transform rotate-[20deg] z-30">
             {/* Handle */}
             <div className="absolute bottom-0 right-10 w-24 h-4 bg-[#3d2e18] rounded-full transform -rotate-45 origin-right border border-[#1a1410] shadow-2xl">
                <div className="absolute right-2 top-0 bottom-0 w-2 bg-[#1a1410]/20"></div>
             </div>
             {/* Rim */}
             <div className="absolute top-4 left-4 w-32 h-32 rounded-full border-[8px] border-[#b8860b] shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-white/5 backdrop-blur-[1px]">
                 {/* Lens Reflection */}
                 <div className="absolute top-4 left-4 w-10 h-6 bg-white/20 rounded-full -rotate-45 blur-md"></div>
                 {/* Distortion Highlight */}
                 <div className="absolute bottom-4 right-4 w-6 h-6 bg-white/10 rounded-full blur-md"></div>
             </div>
         </div>

      </div>

      {/* --- Bottom Info Panel (Wood & Brass) --- */}
      <div className="relative z-20 w-full max-w-md px-4 pb-8 animate-in slide-in-from-bottom-6 duration-500">
          <div className="bg-[#1a1410] border border-[#4a3b2a] p-1 shadow-[0_-10px_50px_rgba(0,0,0,1)] relative overflow-hidden">
             
             {/* Inner Texture */}
             <div className="bg-[#2d241b] p-5 border border-[#3d2e18] relative">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
                
                {/* Brass Corner Bolts */}
                <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-[#8c7b66] shadow-sm"></div>
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#8c7b66] shadow-sm"></div>
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-[#8c7b66] shadow-sm"></div>
                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-[#8c7b66] shadow-sm"></div>

                 <div className="flex flex-col gap-3 relative z-10">
                     <div className="flex justify-between items-start">
                         <div>
                             <h2 className="text-[#e3dacb] font-display text-xl leading-none mb-1 text-shadow-sm">{selectedLevel.name}</h2>
                             <p className="text-[#8c7b66] font-serif text-xs italic">{selectedLevel.description}</p>
                         </div>
                         {selectedLevel.locked && <span className="text-[#8a1c1c] font-bold text-[10px] border border-[#5c1212] bg-[#2a0a0a] px-2 py-0.5 uppercase tracking-wider">Locked</span>}
                     </div>

                     <div className="h-px w-full bg-[#4a3b2a]"></div>

                     <div className="flex justify-between items-center text-sm">
                         <div className="flex flex-col">
                             <span className="text-[#5c4d41] font-bold text-[10px] uppercase tracking-widest">Difficulty</span>
                             <span className="text-[#c5a059] font-display text-xs">{selectedLevel.levelRange}</span>
                         </div>
                         <div className="flex flex-col items-end">
                             <span className="text-[#5c4d41] font-bold text-[10px] uppercase tracking-widest">Zone Bonus</span>
                             <span className="text-[#c5a059] font-display text-xs">{selectedLevel.bonus}</span>
                         </div>
                     </div>

                     <button 
                        onClick={selectedLevel.locked ? undefined : onPlay}
                        disabled={selectedLevel.locked}
                        className={`w-full py-3 mt-2 font-display font-bold uppercase tracking-[0.2em] text-xs transition-all relative overflow-hidden group border
                            ${selectedLevel.locked 
                                ? 'bg-[#1a1410] border-[#3d342b] text-[#3d342b] cursor-not-allowed' 
                                : 'bg-[#1a1410] border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-[#1a1410] active:scale-[0.98] shadow-lg'}
                        `}
                     >
                        {selectedLevel.locked ? 'Requirements Unmet' : 'Travel to Location'}
                     </button>
                 </div>
             </div>
          </div>
      </div>

    </div>
  );
};

export default ExpeditionMapScreen;