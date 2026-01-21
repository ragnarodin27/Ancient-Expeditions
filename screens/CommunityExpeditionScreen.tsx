import React from 'react';

interface CommunityExpeditionScreenProps {
  onBack: () => void;
}

const CommunityExpeditionScreen: React.FC<CommunityExpeditionScreenProps> = ({ onBack }) => {
  return (
    <div className="h-full w-full bg-[#181611] font-display text-white selection:bg-[#f4c025]/30 relative overflow-hidden flex flex-col">
      {/* Styles for specific visual effects from the design */}
      <style>{`
        .parchment-texture {
            background-color: #d2b48c;
            background-image: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%);
            position: relative;
        }
        .parchment-texture::before {
            content: "";
            position: absolute;
            inset: 0;
            background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuC71c-EQzpScmZ1YKbB7uRV5fpUBAjufrJ-BNHn6w6pGm_yxdhDdcg1a4RPUvqdsOUB-8jBQ9g6REzF94iZyR7uxKwbNVIgvLbtmXf6GtiaXMUOvO0NWsvU9n6mJs4D4aXO09eU_i6Gj6dnIVX53Az5VwumjcBKVN-Dm5HZg09dqXcmovbZ1ov5Ho8mSPC3ktUjGjAZaA7f_31qW2ZZglZ9KzxFOvvEA34NePm94s0Sx2yxjFJwwkjdtMGVeGAi-GYHd8WbGZaGvMQ);
            opacity: 0.4;
            pointer-events: none;
        }
        .ink-progress {
            background: linear-gradient(90deg, #221e10 0%, #3a3321 100%);
        }
        .torn-edge {
            clip-path: polygon(0% 2%, 5% 0%, 10% 3%, 15% 1%, 20% 4%, 25% 2%, 30% 5%, 35% 2%, 40% 4%, 45% 1%, 50% 3%, 55% 0%, 60% 4%, 65% 2%, 70% 5%, 75% 2%, 80% 4%, 85% 1%, 90% 3%, 95% 0%, 100% 2%, 100% 98%, 95% 100%, 90% 97%, 85% 99%, 80% 96%, 75% 98%, 70% 95%, 65% 98%, 60% 96%, 55% 100%, 50% 97%, 45% 99%, 40% 96%, 35% 98%, 30% 95%, 25% 98%, 20% 96%, 15% 100%, 10% 97%, 5% 99%, 0% 98%);
        }
      `}</style>

      {/* TopAppBar */}
      <div className="flex items-center p-4 pb-2 justify-between z-10 bg-[#181611]/80 backdrop-blur-sm sticky top-0">
        <button 
            onClick={onBack}
            className="flex size-12 shrink-0 items-center justify-center rounded-full text-[#f4c025] hover:bg-white/5 transition-colors cursor-pointer"
        >
            <span className="material-symbols-outlined text-3xl">arrow_back_ios_new</span>
        </button>
        <h2 className="text-white text-xl font-bold leading-tight tracking-tight flex-1 text-center italic font-display">Expedition Notices</h2>
        <div className="flex w-12 items-center justify-end">
            <button className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-[#f4c025]/10 text-[#f4c025]">
                <span className="material-symbols-outlined">explore</span>
            </button>
        </div>
      </div>

      {/* Ambient Atmosphere Layer */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
          
          {/* Major Event Header Image (Solar Eclipse Ritual) */}
          <div className="z-10 px-4 mt-2 mb-8">
            <div className="relative group">
                {/* Torch Highlight Effect */}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-24 h-48 bg-[#f4c025]/10 blur-[60px] rounded-full pointer-events-none"></div>
                
                <div 
                    className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-64 border border-white/10 shadow-2xl torn-edge parchment-texture relative"
                >
                    <div 
                        className="absolute inset-0 z-0" 
                        style={{ 
                            backgroundImage: 'linear-gradient(0deg, rgba(24, 22, 17, 0.9) 0%, rgba(24, 22, 17, 0.2) 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCcXA21vnMbF772dPPGG8Ik1MS6cXORojb-MgjSq3u4jRqHqWQwPfIKvUG8ZiKDTZjrlZc-SM-pqf3cWThxikRAQBsugYfXkc8aoWBefq3w3S-fJr_DEH29_V5NgGbZ0RDQrS5XsH76ygb9CPwj_H-L0-RuvOeVSkZuN9OfJfwuKt4YtfOCnwlgwz7aHj95Yj35bv4PftyIkNJpVQ6i0kAJP9-Nof5Ma9LU719HsW0JeoV1SF6Hkq8EP-37rQzZQ3ZQ7YpkICixxbA")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    ></div>
                    
                    <div className="flex flex-col p-6 gap-1 relative z-10">
                        <span className="text-[#f4c025] text-xs font-bold uppercase tracking-[0.2em]">Live Major Event</span>
                        <p className="text-white text-3xl font-bold leading-tight drop-shadow-md italic font-display">The Solar Eclipse Ritual</p>
                        <p className="text-white/70 text-sm italic font-serif">Offer idols to the celestial altar before the moon passes.</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Headline */}
          <div className="z-10 relative px-6 pb-2">
            <h3 className="text-white tracking-light text-2xl font-bold leading-tight text-left italic flex items-center gap-2 font-display">
                <span className="material-symbols-outlined text-[#f4c025]">potted_plant</span>
                Community Challenges
            </h3>
          </div>

          {/* Challenge Cards (The Great Jungle Clearing) */}
          <div className="px-4 py-2 z-10">
            <div className="flex flex-col items-stretch justify-start rounded-lg shadow-xl bg-[#2a261e] border border-white/5 parchment-texture torn-edge p-1">
                <div className="flex w-full flex-col items-stretch justify-center gap-1 py-4 px-6 relative z-10">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-[#4a3f28] text-xs font-bold uppercase tracking-widest mb-1 font-sans">Active Expedition</p>
                            <p className="text-[#221e10] text-xl font-extrabold leading-tight italic font-display">The Great Jungle Clearing</p>
                        </div>
                        <span className="material-symbols-outlined text-[#4a3f28]">push_pin</span>
                    </div>
                    <div className="mt-4 flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <div className="flex justify-between items-end">
                                <p className="text-[#4a3f28] text-sm italic font-medium font-serif">Path Progress</p>
                                <p className="text-[#221e10] text-sm font-bold">65%</p>
                            </div>
                            <div className="rounded-full bg-[#4a3f28]/20 h-3 overflow-hidden border border-[#4a3f28]/10">
                                <div className="h-full rounded-full ink-progress" style={{ width: '65%' }}></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-4 mt-2">
                            <p className="text-[#4a3f28]/80 text-xs italic leading-snug max-w-[180px] font-serif">Join thousands of explorers hacking through the dense Overgrowth.</p>
                            <button className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-9 px-4 bg-[#221e10] text-[#f4c025] text-xs font-bold uppercase tracking-tighter border border-[#f4c025]/20 hover:bg-[#1a160e] transition-colors">
                                <span className="truncate">Join Effort</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Progress Section (Collective Stats) */}
          <div className="z-10 px-4 my-2">
            <div className="flex flex-col gap-3 p-6 bg-[#221e10]/40 rounded-xl border border-white/5 backdrop-blur-sm">
                <div className="flex gap-6 justify-between items-center">
                    <p className="text-white/90 text-sm font-bold italic tracking-wide font-display">World Ink-Fill Progress</p>
                    <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[#f4c025] text-xs">group</span>
                        <p className="text-[#f4c025] text-xs font-bold font-mono">650k / 1M Miles</p>
                    </div>
                </div>
                <div className="rounded-full bg-[#3a3321] h-2.5 p-[2px]">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#f4c025]/60 to-[#f4c025]" style={{ width: '65%' }}></div>
                </div>
                <p className="text-white/50 text-[10px] uppercase tracking-[0.15em] font-medium text-center font-sans">Global contribution to the Great Map</p>
            </div>
          </div>

          {/* Secondary Card (Idol Retrieval) */}
          <div className="px-4 py-2 z-10 opacity-90 scale-[0.98]">
            <div className="flex flex-col items-stretch justify-start rounded-lg shadow-lg bg-[#2a261e] border border-white/5 parchment-texture torn-edge p-1 grayscale-[0.2]">
                <div className="flex w-full flex-col items-stretch justify-center gap-1 py-4 px-6 relative z-10">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-[#4a3f28] text-xs font-bold uppercase tracking-widest mb-1 font-sans">Marathon Goal</p>
                            <p className="text-[#221e10] text-xl font-extrabold leading-tight italic font-display">Idol Retrieval Marathon</p>
                        </div>
                        <span className="material-symbols-outlined text-[#4a3f28]/40">push_pin</span>
                    </div>
                    <div className="mt-4 flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <div className="flex justify-between items-end">
                                <p className="text-[#4a3f28] text-sm italic font-medium font-serif">Idols Found</p>
                                <p className="text-[#221e10] text-sm font-bold">12,402</p>
                            </div>
                            <div className="rounded-full bg-[#4a3f28]/20 h-3 overflow-hidden border border-[#4a3f28]/10">
                                <div className="h-full rounded-full ink-progress" style={{ width: '42%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

      </div>

      {/* Footer / Contribution Toggle */}
      <div className="absolute bottom-0 w-full p-8 z-20 bg-gradient-to-t from-[#181611] to-transparent">
        <div className="flex flex-col items-center gap-4">
            <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-sans">Pull to commit progress</p>
            <div className="relative w-full max-w-[280px] h-16 bg-[#2a261e] rounded-xl border-4 border-[#1a1812] shadow-[inset_0_4px_10px_rgba(0,0,0,0.5)] flex items-center p-1 cursor-pointer group hover:border-[#f4c025]/20 transition-colors">
                {/* The Wooden Handle */}
                <div className="h-full aspect-square bg-gradient-to-br from-[#4a3f28] to-[#221e10] rounded-lg shadow-xl flex items-center justify-center border border-white/10 transition-all duration-300 group-active:translate-x-[200px] group-hover:bg-[#5c4d32] z-10">
                    <span className="material-symbols-outlined text-[#f4c025]">drag_handle</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-[#f4c025] font-bold tracking-[0.2em] uppercase text-sm ml-8 font-display">Contribute</span>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default CommunityExpeditionScreen;
