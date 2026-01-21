import React from 'react';

interface DeathScreenProps {
  onResurrect: () => void;
  onAcceptFate: () => void;
}

const DeathScreen: React.FC<DeathScreenProps> = ({ onResurrect, onAcceptFate }) => {
  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col items-center justify-end bg-background-dark font-space select-none">
        {/* Background Image (Guardian) */}
        <div className="absolute inset-0 w-full h-full z-0">
            <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNO4RPHvr3QIW7s8Naw-kweO6IKdkJqr0bQl6b2HXiTGTAwupT-NmFhPX3XBTkhOtKHygfEwV93gR-AiHfMGz5FRShtdDtrF4qiLpQZRKYEqwbtAnXdoNdegSGHBB422ukkOjAhYWfFRzlEZfAkOagyPYO8hHszhn5dhPTnHSien44M8-tdzVRyFNIPlf-Sikb6DFlWyItMmxmoaWtQ3DJVMiB_xdEgqScvN3TTYK_qBQhzBOr0Za4fmssfy16UlELrRM1szy6URE")' }}
            ></div>
            {/* Overlay to darken image for UI readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>
            {/* Red tint for danger/blood */}
            <div className="absolute inset-0 bg-blood-primary/10 mix-blend-overlay"></div>
        </div>

        {/* Atmospheric Overlays */}
        <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: "radial-gradient(circle, transparent 40%, #000000 120%)" }}></div>
        <div className="absolute inset-0 z-10 opacity-30 pointer-events-none bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.05)_50%,transparent_52%),linear-gradient(-45deg,transparent_48%,rgba(255,255,255,0.03)_50%,transparent_52%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent h-2/3 bottom-0 z-0 pointer-events-none"></div>

        {/* Content Wrapper */}
        <div className="relative z-20 w-full max-w-md flex flex-col items-center pb-8 px-5 gap-6">
            
            {/* Title Section */}
            <div className="flex flex-col items-center gap-1 mb-4 animate-pulse">
                <span className="text-blood-primary tracking-[0.3em] text-sm uppercase font-bold border-b border-blood-primary/30 pb-1 mb-2">Expedition Failed</span>
                <h1 className="text-white text-distressed text-5xl md:text-6xl font-bold leading-none text-center drop-shadow-2xl">
                    SLAUGHTERED
                </h1>
                <div className="h-1 w-24 bg-blood-primary mt-2 rounded-full shadow-[0_0_10px_rgba(207,23,23,0.8)]"></div>
            </div>

            {/* Stats Container (Stone Slab Look) */}
            <div className="w-full grid grid-cols-2 gap-3 mb-2">
                {/* Stat 1: Distance */}
                <div className="relative flex flex-col items-center justify-center p-4 rounded bg-[#1c1917]/80 backdrop-blur-sm border-t border-white/10 group shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_6px_-1px_rgba(0,0,0,0.8)]">
                    {/* Stone Texture */}
                    <div className="absolute inset-0 bg-[radial-gradient(at_10%_10%,rgba(255,255,255,0.05)_0%,transparent_20%),radial-gradient(at_90%_90%,rgba(0,0,0,0.5)_0%,transparent_40%)] pointer-events-none rounded"></div>
                    
                    <div className="absolute top-0 right-0 p-1 opacity-20 group-hover:opacity-40 transition-opacity">
                        <span className="material-symbols-outlined text-white text-4xl">hiking</span>
                    </div>
                    <span className="text-3xl font-bold text-white tracking-tighter drop-shadow-md">1,240<span className="text-sm text-stone-400 font-normal ml-1">m</span></span>
                    <span className="text-xs uppercase tracking-widest text-stone-400 mt-1">Distance</span>
                </div>
                
                {/* Stat 2: Relics */}
                <div className="relative flex flex-col items-center justify-center p-4 rounded bg-[#1c1917]/80 backdrop-blur-sm border-t border-white/10 group shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_6px_-1px_rgba(0,0,0,0.8)]">
                    {/* Stone Texture */}
                    <div className="absolute inset-0 bg-[radial-gradient(at_10%_10%,rgba(255,255,255,0.05)_0%,transparent_20%),radial-gradient(at_90%_90%,rgba(0,0,0,0.5)_0%,transparent_40%)] pointer-events-none rounded"></div>

                    <div className="absolute top-0 right-0 p-1 opacity-20 group-hover:opacity-40 transition-opacity">
                        <span className="material-symbols-outlined text-blood-primary text-4xl">diamond</span>
                    </div>
                    <span className="text-3xl font-bold text-blood-primary tracking-tighter drop-shadow-md">0<span className="text-stone-500 text-xl font-normal mx-1">/</span>3</span>
                    <span className="text-xs uppercase tracking-widest text-stone-400 mt-1">Relics Lost</span>
                </div>
            </div>

            {/* Spacer for visual breathing room */}
            <div className="h-2"></div>

            {/* Primary Action: RESURRECT (Cracked Stone Tablet Style) */}
            <button 
                onClick={onResurrect}
                className="group relative w-full h-16 bg-[#292524] rounded-sm overflow-hidden transform transition active:scale-95 shadow-xl border border-stone-600"
            >
                {/* Texture Overlay */}
                <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"></div>
                {/* Inner Glow/Highlight */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
                
                <div className="relative flex items-center justify-between px-6 h-full z-10">
                    <div className="flex items-center gap-4">
                        <div className="bg-blood-primary/20 p-2 rounded-full border border-blood-primary/30">
                            <span className="material-symbols-outlined text-blood-primary animate-spin-slow" style={{ animationDuration: '3s' }}>refresh</span>
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="text-lg font-bold tracking-widest text-white group-hover:text-blood-primary transition-colors font-space">RESURRECT</span>
                            <span className="text-xs text-stone-400 font-light tracking-wide uppercase">Try Again</span>
                        </div>
                    </div>
                    {/* Cost or Icon */}
                    <div className="flex items-center gap-1 opacity-60">
                        <span className="material-symbols-outlined text-stone-300">skull</span>
                    </div>
                </div>
                {/* Border Bottom Heavy */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-black/50"></div>
            </button>

            {/* Secondary Action: ACCEPT FATE (Torn Parchment Style) */}
            <button 
                onClick={onAcceptFate}
                className="group w-full h-12 bg-[#3f3f3f] border border-[#5d4a3e] shadow-[0_4px_15px_rgba(0,0,0,0.5)] rounded-sm relative overflow-hidden transform transition active:scale-95 mt-1"
                style={{ backgroundColor: '#3f3b38' }}
            >
                {/* Blood stain effect */}
                <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-blood-primary/20 blur-xl rounded-full pointer-events-none"></div>
                
                <div className="relative flex items-center justify-center h-full z-10 gap-2">
                    <span className="material-symbols-outlined text-stone-400 text-sm group-hover:text-blood-primary transition-colors">close</span>
                    <span className="text-sm font-bold tracking-[0.15em] text-stone-300 group-hover:text-white transition-colors font-space">ACCEPT FATE</span>
                </div>
            </button>

            {/* Bottom Safe Area Indicator / Quote */}
            <div className="mt-4 opacity-40 text-[10px] tracking-widest text-stone-500 text-center uppercase font-space">
                "The shadows claim another soul."
            </div>
            {/* Safe area padding for bottom swipe bar */}
            <div className="h-4 w-full"></div>
        </div>
    </div>
  );
};

export default DeathScreen;