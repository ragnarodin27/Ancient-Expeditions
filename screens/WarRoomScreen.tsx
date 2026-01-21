import React from 'react';

interface WarRoomScreenProps {
  onBack: () => void;
}

const WarRoomScreen: React.FC<WarRoomScreenProps> = ({ onBack }) => {
  return (
    <div className="relative flex h-full w-full flex-col bg-[#0c0a09] overflow-hidden select-none font-display text-white">
      
      {/* LAYER 1: The Map Background (Simulated 3D Stone Map) */}
      <div className="absolute inset-0 z-0 bg-[#1c1917]">
        {/* Base Texture Image */}
        <div 
            className="w-full h-[65%] bg-cover bg-center opacity-40 mix-blend-luminosity brightness-75 contrast-125 grayscale" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596501042718-e32502690a29?q=80&w=1000&auto=format&fit=crop')" }}
        ></div>
        
        {/* Vignette & Shadows to blend map into bottom UI */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#181511]/90 via-transparent to-[#1c1917] pointer-events-none h-[70%]"></div>
        <div className="absolute bottom-[35%] w-full h-24 bg-gradient-to-t from-[#1c1917] to-transparent pointer-events-none"></div>
      </div>

      {/* LAYER 2: Map Objects (Figurines, Embers, Conflict Zones) */}
      <div className="absolute inset-0 z-10 w-full h-[60%] pointer-events-none">
        
        {/* Conflict Zone: The Sun Temple (Main) */}
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 flex flex-col items-center group pointer-events-auto cursor-pointer">
            {/* Ember Particle Effect */}
            <div className="relative flex items-center justify-center w-16 h-16">
                <div className="absolute w-full h-full bg-orange-500/20 rounded-full animate-ping"></div>
                <div className="absolute w-10 h-10 bg-orange-600/30 rounded-full blur-sm"></div>
                <span className="material-symbols-outlined text-primary drop-shadow-[0_0_10px_rgba(244,157,37,1)] text-4xl animate-pulse">
                    local_fire_department
                </span>
            </div>
            {/* Tooltip / Label */}
            <div className="mt-1 flex flex-col items-center">
                <div className="px-3 py-1 bg-black/70 backdrop-blur-md border border-primary/30 rounded text-primary text-xs font-bold uppercase tracking-widest shadow-lg">
                    Sun Temple
                </div>
                <div className="w-0.5 h-4 bg-gradient-to-b from-primary/50 to-transparent"></div>
            </div>
        </div>

        {/* Figurine: Siege Tower (Western Front) */}
        <div className="absolute top-[42%] left-[20%] flex flex-col items-center opacity-90 pointer-events-auto">
            <div className="relative">
                <span className="material-symbols-outlined text-[#a8a29e] drop-shadow-[2px_4px_6px_rgba(0,0,0,0.8)] text-3xl transform -rotate-12">
                    fort
                </span>
                {/* Small status indicator */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full shadow-ember-glow animate-pulse"></div>
            </div>
            <span className="mt-1 text-[10px] text-[#78716c] font-bold shadow-black drop-shadow-md">West Wall</span>
        </div>

        {/* Figurine: Iron Soldier (Eastern Flank) */}
        <div className="absolute top-[25%] right-[20%] flex flex-col items-center opacity-80 pointer-events-auto">
            <span className="material-symbols-outlined text-[#78716c] drop-shadow-[2px_4px_6px_rgba(0,0,0,0.8)] text-3xl transform rotate-6">
                swords
            </span>
            <span className="mt-1 text-[10px] text-[#78716c] font-bold shadow-black drop-shadow-md">Vanguard</span>
        </div>

        {/* Active Conflict Zone (Minor) */}
        <div className="absolute top-[18%] left-[30%] w-2 h-2 bg-orange-500 rounded-full shadow-ember-glow animate-pulse"></div>
        <div className="absolute top-[50%] right-[35%] w-1.5 h-1.5 bg-red-600 rounded-full shadow-ember-glow animate-pulse delay-700"></div>
      
      </div>

      {/* LAYER 3: Top Navigation (TopAppBar) */}
      <div className="relative z-20 flex items-center justify-between p-4 pt-12 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
        <button 
            onClick={onBack}
            className="pointer-events-auto flex items-center justify-center w-10 h-10 rounded-full bg-[#27221b]/50 backdrop-blur text-white hover:bg-[#27221b] transition-colors border border-white/10 shadow-lg"
        >
            <span className="material-symbols-outlined text-xl">arrow_back</span>
        </button>
        {/* Screen Title styling */}
        <div className="flex flex-col items-center">
            <div className="h-[1px] w-8 bg-primary/50 mb-1"></div>
            <h1 className="text-white/90 text-sm font-bold tracking-[0.2em] uppercase shadow-black drop-shadow-lg">War Room</h1>
            <div className="h-[1px] w-8 bg-primary/50 mt-1"></div>
        </div>
        <button className="pointer-events-auto flex items-center justify-center w-10 h-10 rounded-full bg-[#27221b]/50 backdrop-blur text-white hover:bg-[#27221b] transition-colors border border-white/10 shadow-lg">
            <span className="material-symbols-outlined text-xl">settings</span>
        </button>
      </div>

      {/* Spacer to push overlay to bottom */}
      <div className="flex-1"></div>

      {/* LAYER 4: Bottom Sheet Overlay (Parchment & Controls) */}
      <div className="relative z-30 flex flex-col w-full bg-[#1c1917] rounded-t-3xl shadow-[0_-10px_60px_rgba(0,0,0,0.9)] border-t border-[#44403c]">
        {/* Parchment Texture Overlay */}
        <div className="absolute inset-0 opacity-5 rounded-t-3xl pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>
        
        {/* Handle */}
        <div className="w-full flex justify-center pt-3 pb-1">
            <div className="w-12 h-1 bg-[#44403c] rounded-full"></div>
        </div>

        <div className="flex flex-col px-6 pb-8 pt-2 gap-6 relative">
            
            {/* HeadlineText Component */}
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-red-500 shadow-ember-glow animate-pulse"></span>
                    <span className="text-red-400 text-xs font-bold tracking-widest uppercase">Live Event</span>
                </div>
                <h2 className="text-[#e5e0d8] text-2xl font-bold leading-tight tracking-tight drop-shadow-md">
                    The Great Siege of the Sun Temple
                </h2>
                <p className="text-[#a8a29e] text-sm leading-snug font-normal font-sans">
                    Enemy forces have breached the outer sanctum. Rally the legions to hold the line before the eclipse.
                </p>
            </div>

            {/* Timer Component (Etched Stone Style) */}
            <div className="grid grid-cols-3 gap-4">
                <div className="group flex flex-col items-center p-3 bg-[#27221b] rounded-lg border border-[#3f3a33] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]">
                    <span className="text-2xl font-bold text-[#d6d3d1] font-display tabular-nums group-hover:text-primary transition-colors">04</span>
                    <span className="text-[10px] text-[#78716c] uppercase tracking-wider font-bold mt-1">Hours</span>
                </div>
                <div className="group flex flex-col items-center p-3 bg-[#27221b] rounded-lg border border-[#3f3a33] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]">
                    <span className="text-2xl font-bold text-[#d6d3d1] font-display tabular-nums group-hover:text-primary transition-colors">12</span>
                    <span className="text-[10px] text-[#78716c] uppercase tracking-wider font-bold mt-1">Minutes</span>
                </div>
                <div className="group flex flex-col items-center p-3 bg-[#27221b] rounded-lg border border-[#3f3a33] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]">
                    <span className="text-2xl font-bold text-primary font-display tabular-nums animate-pulse">59</span>
                    <span className="text-[10px] text-[#78716c] uppercase tracking-wider font-bold mt-1">Seconds</span>
                </div>
            </div>

            {/* ProgressBar Component (Burning Rope Style) */}
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-end">
                    <p className="text-[#d6d3d1] text-xs font-bold uppercase tracking-wider">Global Defense</p>
                    <p className="text-primary text-xs font-bold">65% Breached</p>
                </div>
                <div className="relative h-3 w-full bg-[#0c0a09] rounded-full overflow-visible shadow-inner border border-[#3f3a33]">
                    {/* The Rope/Fuse */}
                    <div className="absolute top-0 left-0 h-full rounded-l-full bg-gradient-to-r from-stone-600 via-orange-900 to-primary" style={{ width: '65%' }}>
                        {/* Texture for rope twist */}
                        <div className="absolute inset-0 opacity-30 w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, #000 2px, #000 4px)' }}></div>
                    </div>
                    {/* Burning Tip */}
                    <div className="absolute top-1/2 -translate-y-1/2" style={{ left: '65%' }}>
                        <div className="relative -left-1.5">
                            <div className="absolute w-4 h-4 -top-2 -left-1 bg-orange-500 rounded-full blur-sm opacity-80 animate-pulse"></div>
                            <div className="absolute w-2 h-2 -top-1 left-0 bg-white rounded-full blur-[1px] animate-ping"></div>
                            {/* Sparks */}
                            <div className="absolute w-1 h-1 bg-yellow-200 rounded-full -top-3 left-1 animate-[bounce_1s_infinite]"></div>
                        </div>
                    </div>
                </div>
                <p className="text-[#57534e] text-[10px] italic">The rope burns fast... reinforce now.</p>
            </div>

            {/* CTA Button (Scorched Iron Plate) */}
            <button className="relative group w-full overflow-hidden rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.6)] transform active:scale-[0.98] transition-transform">
                {/* Base Iron Texture */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3f3a33] via-[#292524] to-[#1c1917]"></div>
                {/* Rust/Burn overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/40 via-transparent to-black/60 opacity-80"></div>
                {/* Glowing Core Animation */}
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-primary shadow-[0_0_15px_rgba(244,157,37,0.5)] group-hover:h-[4px] transition-all duration-300"></div>
                {/* Content */}
                <div className="relative flex items-center justify-center gap-3 py-4 border border-[#57534e]/30 rounded-lg group-hover:border-primary/50 transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:rotate-12 transition-transform duration-300">swords</span>
                    <span className="text-lg font-bold text-[#e5e0d8] tracking-[0.15em] uppercase group-hover:text-white transition-colors">Join Battle</span>
                </div>
            </button>

        </div>
        {/* Safe Area for Home Indicator */}
        <div className="h-6 w-full bg-[#1c1917]"></div>
      </div>

    </div>
  );
};

export default WarRoomScreen;