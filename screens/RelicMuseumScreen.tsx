import React, { useState } from 'react';

interface RelicMuseumScreenProps {
  onBack: () => void;
}

interface Relic {
  id: string;
  name: string;
  image: string;
  description: string;
  age: string;
  origin: string;
  bonus: string;
}

const relics: Relic[] = [
  {
    id: 'idol',
    name: 'Golden Idol',
    image: 'https://images.unsplash.com/photo-1599939571322-792a326991f2?q=80&w=1000&auto=format&fit=crop',
    description: "A rare artifact believed to bring fortune to those who possess it. The craftsmanship suggests a pre-colonial origin.",
    age: "1200 Years",
    origin: "Temple of the Sun",
    bonus: "+10% Gold Find"
  },
  {
    id: 'mask',
    name: 'Jade Mask',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2484&auto=format&fit=crop', 
    description: "Used in royal burial ceremonies. The jade is mined from the deep valleys of the Jaguar territory.",
    age: "850 Years",
    origin: "Crypt of Kings",
    bonus: "+5% Durability"
  },
  {
    id: 'tablet',
    name: 'Stone Tablet',
    image: 'https://images.unsplash.com/photo-1596501042718-e32502690a29?q=80&w=1000&auto=format&fit=crop',
    description: "Inscribed with the laws of the elder gods. Deciphering it unlocks secrets of the underworld.",
    age: "2000 Years",
    origin: "Sunken City",
    bonus: "Unlock Ancient Dialect"
  },
  {
    id: 'obsidian',
    name: 'Obsidian Dagger',
    image: 'https://images.unsplash.com/photo-1595166672322-c288f912e737?q=80&w=1964&auto=format&fit=crop',
    description: "Razor sharp volcanic glass used for sacrificial rituals.",
    age: "600 Years",
    origin: "Volcano Rim",
    bonus: "+15% Critical Damage"
  }
];

const RelicMuseumScreen: React.FC<RelicMuseumScreenProps> = ({ onBack }) => {
  const [selectedRelic, setSelectedRelic] = useState<Relic>(relics[0]);

  return (
    <div className="h-full w-full bg-[#050505] font-serif relative overflow-hidden flex flex-col items-center">
      
      {/* 1. Background: Dark Private Museum Room */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1594132044810-7e3f8373b320?q=80&w=2070&auto=format&fit=crop" 
            alt="Dark Museum Room"
            className="w-full h-full object-cover opacity-30 blur-[2px] grayscale-[0.5]"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-[#1a0f0a]/90"></div>
         
         {/* Atmospheric Particles */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 animate-pulse mix-blend-screen"></div>
         
         {/* Subtle Volumetric Light from Top */}
         <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-gradient-to-b from-white/10 to-transparent blur-3xl rounded-full pointer-events-none"></div>
      </div>

      {/* 2. Header / Navigation */}
      <div className="relative z-40 w-full pt-8 pb-2 px-6 flex justify-between items-center">
         <button onClick={onBack} className="text-[#c5a059] flex items-center gap-3 group transition-all">
            <div className="w-10 h-10 rounded-full border border-[#8c7b66]/50 flex items-center justify-center bg-black/40 group-hover:bg-[#c5a059] group-hover:border-[#c5a059] transition-all shadow-lg backdrop-blur-sm">
               <span className="material-symbols-outlined text-lg text-[#e3dacb] group-hover:text-[#1a1410]">arrow_back</span>
            </div>
            <span className="text-[10px] font-display font-bold uppercase tracking-[0.25em] text-[#8c7b66] group-hover:text-[#e3dacb] transition-colors">Return</span>
         </button>
      </div>

      {/* 3. The Display Cabinet (Middle Section) */}
      <div className="relative z-20 flex-1 w-full flex items-center justify-center perspective-1000">
          <div className="w-full relative transform -translate-y-8">
             
             {/* Cabinet Wood Top */}
             <div className="h-6 bg-[#261f1a] border-y border-[#3d2e18] mx-2 shadow-[0_5px_15px_rgba(0,0,0,0.8)] relative z-30 flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-20 mix-blend-overlay"></div>
                {/* Brass Plaque */}
                <div className="px-4 py-0.5 bg-gradient-to-r from-[#8c7b66] via-[#c5a059] to-[#8c7b66] shadow-sm border border-[#4a3b2a]">
                   <span className="text-[8px] font-display font-bold text-[#1a1410] uppercase tracking-widest">Rare Antiquities</span>
                </div>
             </div>

             {/* Shelf Area (Glass Case) */}
             <div className="h-72 w-full bg-[#0a0806]/80 relative flex items-center overflow-visible border-x border-[#3d2e18]/50 mx-2">
                 
                 {/* Glass Glare & Texture */}
                 <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-br from-white/5 via-transparent to-black/40 opacity-60"></div>
                 <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12 opacity-30 pointer-events-none"></div>
                 
                 {/* Relics Carousel */}
                 <div className="w-full flex overflow-x-auto snap-x snap-mandatory px-[calc(50%-6rem)] py-8 gap-6 no-scrollbar items-center z-20 h-full">
                    {relics.map(relic => {
                        const isSelected = selectedRelic.id === relic.id;
                        return (
                           <div 
                              key={relic.id} 
                              onClick={() => setSelectedRelic(relic)}
                              className={`snap-center shrink-0 w-48 h-56 flex flex-col items-center justify-end pb-4 transition-all duration-700 cursor-pointer group relative ${isSelected ? 'scale-110 opacity-100 z-10' : 'scale-90 opacity-40 blur-[1px] hover:opacity-70'}`}
                           >
                              {/* Spotlight Beam (Only visible when active) */}
                              <div className={`absolute -top-20 left-1/2 -translate-x-1/2 w-32 h-80 bg-gradient-to-b from-amber-100/10 via-amber-500/5 to-transparent blur-2xl pointer-events-none transition-opacity duration-700 ${isSelected ? 'opacity-100' : 'opacity-0'}`}></div>

                              {/* Artifact Container */}
                              <div className="relative w-40 h-40 z-10 drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:-translate-y-2">
                                  <img 
                                    src={relic.image} 
                                    alt={relic.name} 
                                    className="w-full h-full object-contain filter contrast-125 brightness-110"
                                  />
                                  {/* Specular Highlight */}
                                  {isSelected && <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>}
                              </div>

                              {/* Red Velvet Cushion */}
                              <div className="w-40 h-12 mt-[-15px] relative z-0">
                                 <div className="absolute inset-0 bg-gradient-to-b from-[#5c0a0a] to-[#2e0404] rounded-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.8),0_10px_20px_rgba(0,0,0,0.8)]"></div>
                                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/felt.png')] opacity-50 mix-blend-multiply"></div>
                                 {/* Fabric Folds/Indentation */}
                                 <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-6 bg-black/50 blur-md rounded-full"></div>
                                 <div className="absolute bottom-1 right-2 w-full h-px bg-white/5 opacity-30"></div>
                              </div>
                           </div>
                        )
                    })}
                 </div>

                 {/* Shelf Base Surface */}
                 <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#1a1410] border-t border-[#3d2e18] shadow-[0_-5px_20px_rgba(0,0,0,0.8)] z-10"></div>
             </div>
             
             {/* Cabinet Wood Bottom */}
             <div className="h-10 bg-[#261f1a] border-y border-[#3d2e18] mx-2 shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative z-20 flex justify-between px-12 items-center">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-20 mix-blend-overlay"></div>
                 {/* Decorative Bolts */}
                 <div className="w-2 h-2 rounded-full bg-[#1a1410] shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]"></div>
                 <div className="w-2 h-2 rounded-full bg-[#1a1410] shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]"></div>
             </div>
          </div>
      </div>

      {/* 4. The Dossier (Lore Panel) */}
      <div className="relative z-30 w-full max-w-md px-4 pb-8 -mt-6">
          {/* Paper Sheet Object */}
          <div className="bg-[#e3dacb] p-1 relative shadow-[0_-10px_40px_rgba(0,0,0,0.9)] transform rotate-1 transition-all duration-500 hover:rotate-0">
             
             {/* Torn Edge Top */}
             <div className="absolute -top-1 left-0 w-full h-2 bg-[#e3dacb] [mask-image:linear-gradient(to_bottom,transparent,black)] clip-torn-bottom transform rotate-180"></div>

             {/* Inner Paper Area */}
             <div className="bg-[#e3dacb] bg-paper-texture p-6 min-h-[260px] relative overflow-hidden">
                {/* Texture Overlays */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-60 mix-blend-multiply pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4c5b0]/20 to-[#bfa889]/30 pointer-events-none"></div>
                
                {/* Binder Clip Visual */}
                <div className="absolute -top-4 right-6 w-12 h-16 border-4 border-[#3d342b] rounded-b-xl z-20 opacity-90 shadow-sm"></div>
                <div className="absolute -top-4 right-6 w-12 h-8 bg-[#1a1410] z-10"></div>

                {/* Content Fade In */}
                <div key={selectedRelic.id} className="relative z-10 animate-in fade-in slide-in-from-bottom-3 duration-500">
                    
                    {/* Header Section */}
                    <div className="flex justify-between items-start border-b-2 border-[#1a1410]/20 border-dashed pb-3 mb-4">
                        <div className="flex flex-col">
                           <span className="font-sans font-bold text-[9px] text-[#6b5d4d] uppercase tracking-widest mb-1">
                              Archive Ref: {selectedRelic.id.toUpperCase()}-88
                           </span>
                           <h2 className="font-serif text-3xl text-[#1a1410] leading-none tracking-tight">
                              {selectedRelic.name}
                           </h2>
                        </div>
                        {/* 'Verified' Stamp */}
                        <div className="border-[3px] border-[#8a1c1c]/50 text-[#8a1c1c]/70 font-display font-bold text-[10px] uppercase px-2 py-1 transform -rotate-12 mix-blend-multiply">
                           Authenticated
                        </div>
                    </div>

                    {/* Lore Description (Typewriter style) */}
                    <p className="font-serif text-[#4a3b2a] text-sm leading-relaxed mb-6 italic border-l-2 border-[#c5a059]/50 pl-3">
                       "{selectedRelic.description}"
                    </p>

                    {/* Stats Grid (Handwritten notes style) */}
                    <div className="grid grid-cols-2 gap-4 relative">
                        {/* Coffee Stain Decoration */}
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full border-[10px] border-[#4a3b2a]/5 blur-sm opacity-60 pointer-events-none"></div>

                        <div className="flex flex-col">
                            <span className="font-sans font-bold text-[9px] text-[#8c7b66] uppercase tracking-wider">Provenance</span>
                            <span className="font-handwriting text-xl text-[#1a1410]">{selectedRelic.origin}</span>
                        </div>
                        
                        <div className="flex flex-col">
                            <span className="font-sans font-bold text-[9px] text-[#8c7b66] uppercase tracking-wider">Era</span>
                            <span className="font-handwriting text-xl text-[#1a1410]">{selectedRelic.age}</span>
                        </div>

                        <div className="col-span-2 mt-2 bg-[#1a1410]/5 p-2 rounded border border-[#1a1410]/10 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#c5a059]/20 flex items-center justify-center text-[#b8860b]">
                               <span className="material-symbols-outlined text-lg">auto_awesome</span>
                            </div>
                            <div className="flex flex-col">
                               <span className="font-sans font-bold text-[8px] text-[#6b5d4d] uppercase tracking-widest">Effect Discovered</span>
                               <span className="font-display font-bold text-[#b8860b] text-sm uppercase">{selectedRelic.bonus}</span>
                            </div>
                        </div>
                    </div>
                </div>
             </div>

             {/* Torn Edge Bottom */}
             <div className="absolute -bottom-2 left-0 w-full h-4 bg-[#e3dacb] bg-paper-texture clip-torn-bottom"></div>
          </div>
      </div>

    </div>
  );
};

export default RelicMuseumScreen;