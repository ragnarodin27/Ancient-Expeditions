import React from 'react';

interface TempleEntranceScreenProps {
  onStart: () => void;
}

const TempleEntranceScreen: React.FC<TempleEntranceScreenProps> = ({ onStart }) => {
  return (
    <div className="relative flex h-full w-full flex-col bg-[#221d10] overflow-hidden select-none font-display text-white">
        
        {/* Cinematic Background Layer */}
        <div className="absolute inset-0 z-0 w-full h-full bg-[#221d10]">
            <div 
                className="w-full h-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden opacity-80" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCj8c3Rg5M68GpM4V-dKGRlfcn6K9zfX4MBFTmZifZUcwwA93Tslx1m5Z-8vPU8akBxiNM_YvBto5TtK10joSGhrMKpSa2cctWQIVSeSl4Quwe4I1CfF-5O5IZgULbWDDVfvc63h96eKNdc9yajd6uqnNLnY8owj1ADx4X5Rd1eJnsZk-MfxSOAklMNd5Aced8FHCUYZ4pZfFheJ0N3vpqN8FLCkTGnUrRPD2jrF2S9WGYsLXuIYMgQ-u8diV-XqDGqosnFBYG0IwE")' }}
            >
                {/* Gradient Overlays for readability and atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#221d10] via-[#221d10]/80 to-transparent"></div>
            </div>
        </div>

        {/* Atmospheric Particles (Dust Motes) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-temple-gold/40 rounded-full blur-[1px] animate-float" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-1/3 left-3/4 w-1.5 h-1.5 bg-temple-gold/30 rounded-full blur-[1px] animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-white/20 rounded-full blur-[1px] animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Top UI Layer */}
        <div className="relative z-10 w-full pt-safe-top">
            {/* TopAppBar */}
            <div className="flex items-center p-6 justify-between">
                <div className="flex flex-col">
                    <h2 className="text-white/90 text-sm font-bold leading-tight tracking-[0.15em] uppercase drop-shadow-md font-sans">Expedition</h2>
                    <span className="text-temple-gold text-2xl font-black tracking-tighter drop-shadow-lg font-display">#042</span>
                </div>
                <div className="flex items-center justify-end bg-black/40 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 shadow-lg">
                    <div className="flex items-center justify-center gap-2 text-temple-gold">
                        <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                        <p className="text-[#f1e6cc] text-sm font-bold leading-normal tracking-wide font-sans">1,250</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Main Content / Spacer */}
        <div className="flex-1 relative z-10">
            {/* Invisible interaction area for camera gestures could go here */}
        </div>

        {/* Bottom UI Layer (Interaction) */}
        <div className="relative z-20 flex flex-col items-center justify-end pb-12 px-6 gap-6 w-full">
            {/* BodyText: Prompt */}
            <p className="text-[#f1e6cc] text-sm font-medium leading-normal tracking-[0.2em] uppercase opacity-0 animate-[pulse_3s_ease-in-out_infinite] animate-delay-1000 font-sans">
                Touch the Rune to Begin
            </p>
            
            {/* FAB / The Rune */}
            {/* Modified FAB component to act as the primary glowing rune trigger */}
            <div className="flex justify-center overflow-visible p-4">
                <button 
                    onClick={onStart}
                    className="group relative flex items-center justify-center w-24 h-24 rounded-full bg-transparent text-[#181611] transition-transform duration-500 active:scale-90"
                >
                    {/* Decorative Rings (Spinning/Static) */}
                    <div className="absolute inset-0 rounded-full border border-temple-gold/20 scale-125 group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="absolute inset-0 rounded-full border border-dashed border-temple-gold/40 scale-110 animate-[spin_20s_linear_infinite]"></div>
                    {/* Glow Background */}
                    <div className="absolute inset-0 rounded-full bg-temple-gold/20 blur-xl rune-glow animate-pulse-slow"></div>
                    {/* The Stone/Rune Button Itself */}
                    <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#2a2415] to-[#15120a] rounded-full border border-temple-gold/50 shadow-inner">
                        {/* Rune Icon */}
                        <span className="material-symbols-outlined text-temple-gold text-[48px] text-glow group-hover:text-white transition-colors duration-300">
                            change_history
                        </span>
                    </div>
                </button>
            </div>
            
            {/* MetaText: Variant */}
            <p className="text-[#b9b29d]/60 text-xs font-sans font-medium leading-normal tracking-wider text-center pt-2">
                Variant 1: Into the Depths
            </p>
        </div>

        {/* Tailwind Config Safety Check for safe-area spacing */}
        <style>{`
            .pt-safe-top {
                padding-top: max(1.5rem, env(safe-area-inset-top));
            }
        `}</style>
    </div>
  );
};

export default TempleEntranceScreen;