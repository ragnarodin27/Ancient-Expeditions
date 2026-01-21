import React from 'react';

interface NightRunScreenProps {
  onBack: () => void;
}

const NightRunScreen: React.FC<NightRunScreenProps> = ({ onBack }) => {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-black font-epilogue select-none">
        {/* Game Background Layer */}
        <div className="absolute inset-0 z-0">
            {/* Main Scenic Image */}
            <img 
                alt="Dark misty jungle path at night with ancient ruins" 
                className="h-full w-full object-cover opacity-60 scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLTnAX4qjajzW4RgpPbwwsomXu207FmfnLBSa_6QVjNHZV58wzu4HjpJRpuIs3-hqoUH2bGkhyW-ztnEF2BikvxfTx78PxUmrOOyTEFH8Rr_aWFuEC1HhTgP_bCGshHNq-gADeunIYHS68XECOQSVWWEOyISKP3K8kAVuG0yNbItWAQ01wmHOZOewwE7xli3dwIBOmlIG6tYJqlX7li02LUdTBboZaH0R4ZaWs7DWOjvHWCZVKsdayIcPsN-JXDbv0hKPp6FfbiUc"
            />
            {/* Vignette & Lighting Overlays */}
            <div className="absolute inset-0 bg-torch-vignette z-10"></div>
            <div className="absolute inset-0 bg-orange-600/10 mix-blend-overlay z-10 torch-flicker"></div>
            {/* Atmospheric Particles */}
            <div className="ember ember-1 z-20"></div>
            <div className="ember ember-2 z-20"></div>
            <div className="ember ember-3 z-20"></div>
            <div className="ember ember-4 z-20"></div>
        </div>

        {/* HUD Layer */}
        <div className="relative z-30 flex h-full flex-col justify-between p-4 pb-8 safe-area-inset">
            {/* TOP AREA: Score, Health, Pause */}
            <div className="flex flex-col gap-4">
                {/* Header Row */}
                <div className="flex items-start justify-between">
                    {/* Top Left: Stats & Health Combined */}
                    <div className="flex flex-col gap-2">
                        {/* Relics Counter (ProfileStats variant) */}
                        <div className="flex min-w-[100px] flex-col gap-1 rounded-lg border border-night-stone-border bg-night-stone-bg/80 backdrop-blur-sm p-2 shadow-lg">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-night-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                                <p className="text-white text-xl font-bold leading-tight">124</p>
                            </div>
                        </div>
                        {/* Health Bar (ProgressBar variant) */}
                        <div className="w-[140px] rounded border border-night-stone-border bg-night-stone-bg/90 p-1 backdrop-blur-sm shadow-lg">
                            <div className="flex justify-between px-0.5 pb-1">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-[#b9ab9d]">Spirit</span>
                            </div>
                            <div className="h-2 w-full overflow-hidden rounded-sm bg-[#3a312a]">
                                <div className="h-full w-[85%] bg-gradient-to-r from-red-500 to-night-primary shadow-[0_0_10px_rgba(236,127,19,0.8)]"></div>
                            </div>
                        </div>
                    </div>
                    {/* Top Center: Distance (TopAppBar variant) */}
                    <div className="absolute left-1/2 top-4 -translate-x-1/2 flex flex-col items-center">
                        <h2 className="text-white text-4xl font-black tracking-[-0.02em] drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] text-shadow-lg">
                            2450<span className="text-xl font-bold text-night-primary ml-0.5">m</span>
                        </h2>
                        <div className="mt-1 h-0.5 w-12 bg-gradient-to-r from-transparent via-night-primary to-transparent opacity-80"></div>
                    </div>
                    {/* Top Right: Pause (TopAppBar variant) */}
                    <button 
                        onClick={onBack}
                        className="group flex size-12 cursor-pointer items-center justify-center rounded-lg border border-night-stone-border bg-night-stone-bg/80 backdrop-blur-sm text-white shadow-lg transition-transform active:scale-95"
                    >
                        <span className="material-symbols-outlined group-hover:text-night-primary transition-colors">pause</span>
                    </button>
                </div>
            </div>
            {/* BOTTOM AREA: Hints & Powerups */}
            <div className="flex items-end justify-between">
                {/* Bottom Left: Empty for balance/gameplay visibility */}
                <div className="w-16"></div>
                {/* Bottom Center: Contextual Hint (MetaText variant) */}
                <div className="mb-4 flex flex-col items-center gap-2 animate-pulse opacity-80">
                    <div className="flex flex-col items-center gap-1">
                        <span className="material-symbols-outlined text-white/60 text-3xl">swipe_left</span>
                        <p className="text-[#b9ab9d] text-xs font-bold uppercase tracking-[0.2em] shadow-black drop-shadow-md">Swipe to Dodge</p>
                    </div>
                </div>
                {/* Bottom Right: Power Up (FAB variant) */}
                <div className="flex flex-col items-center gap-2">
                    {/* Cooldown indicator could go here */}
                    <button className="relative flex size-16 cursor-pointer items-center justify-center overflow-hidden rounded-xl border-2 border-night-primary bg-night-stone-bg/90 shadow-[0_0_20px_rgba(236,127,19,0.3)] transition-all active:scale-95 active:shadow-[0_0_10px_rgba(236,127,19,0.5)]">
                        {/* Inner Glow */}
                        <div className="absolute inset-0 bg-night-primary/20"></div>
                        {/* Icon */}
                        <span className="material-symbols-outlined relative z-10 text-night-primary text-4xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" style={{ fontVariationSettings: "'FILL' 1" }}>
                            bolt
                        </span>
                        {/* Gloss effect */}
                        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent"></div>
                    </button>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-night-primary drop-shadow-md">Boost Ready</span>
                </div>
            </div>
        </div>
        {/* Optional: Simulated vignette corners for extra focus */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
    </div>
  );
};

export default NightRunScreen;