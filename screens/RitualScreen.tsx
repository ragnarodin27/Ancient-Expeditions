import React, { useState } from 'react';

interface RitualScreenProps {
  onBack: () => void;
}

const RitualScreen: React.FC<RitualScreenProps> = ({ onBack }) => {
  const [selectedPact, setSelectedPact] = useState<number | null>(null);

  return (
    <div className="bg-background-light dark:bg-background-dark font-space antialiased selection:bg-blood-primary selection:text-white overflow-x-hidden w-full h-full relative">
        {/* Background Layer with Mist & Jungle Atmosphere */}
        <div className="fixed inset-0 z-0">
            <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAav_lIpymDcIhq3GyO33PREUctlUcyHfHj-ewXAj9SiW-F_olJ_B7dMDNLCgQys1akfN2nhbFiaN4ZyvR4RhB99328qqtHtx-GIcYmbWJxvYfzy-crILNt54EaM-Xfos0jrtZuEtwb8k6erFALAxt8YDHU-EaAkKzHcxzrClzpDLGpdJHu0B01BRUyGvTZ8rRJ6SjDXsRo2qR48gJMal2UnV61D1PpJw_7aYS9UOzikz_MnoCQL5TiktUFhBGmbUr4KqHV-5PZzU0')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#211111]/80 to-black/95"></div>
            {/* Red atmospheric glow from the bottom simulating the blood altar */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blood-primary/20 to-transparent pointer-events-none"></div>
        </div>

        <div className="relative z-10 flex flex-col h-full w-full px-4 pt-6 pb-8">
            {/* Header: Ritual Title */}
            <header className="flex flex-col items-center justify-center text-center mb-6 shrink-0">
                <div className="mb-2">
                    <span className="material-symbols-outlined text-stone-400 text-4xl opacity-80">account_balance</span>
                </div>
                <h1 className="text-stone-200 tracking-[0.2em] text-2xl font-bold uppercase leading-tight text-shadow-sm border-b border-blood-primary/30 pb-2 px-8 font-space">
                    Offer a Tribute
                </h1>
                <p className="text-stone-400 text-xs mt-2 font-medium tracking-wide">CHOOSE YOUR BLOOD PACT</p>
            </header>

            {/* Stats: Cracked Bone/Stone Aesthetic */}
            <div className="grid grid-cols-2 gap-3 mb-8 shrink-0">
                {/* Life Force */}
                <div className="bg-stone-gradient bg-gradient-to-br from-[#292524] to-[#1c1917] border border-[#533c3c] rounded p-3 flex flex-col items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blood-primary/40"></div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="material-symbols-outlined text-blood-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                        <span className="text-white text-lg font-bold tracking-tight">85%</span>
                    </div>
                    <p className="text-[#b89d9d] text-[10px] uppercase tracking-wider font-semibold">Life Force</p>
                </div>
                {/* Gold Collected */}
                <div className="bg-stone-gradient bg-gradient-to-br from-[#292524] to-[#1c1917] border border-[#533c3c] rounded p-3 flex flex-col items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.5)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1 h-full bg-yellow-600/20"></div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="material-symbols-outlined text-yellow-500 text-xl">monetization_on</span>
                        <span className="text-white text-lg font-bold tracking-tight">1,240</span>
                    </div>
                    <p className="text-[#b89d9d] text-[10px] uppercase tracking-wider font-semibold">Gold Tribute</p>
                </div>
            </div>

            {/* The Three Tablets: Selection Grid */}
            <div className="flex-1 flex flex-col gap-4 justify-center overflow-y-auto no-scrollbar pb-6">
                
                {/* Tablet 1: Haste */}
                <button 
                    onClick={() => setSelectedPact(1)}
                    className={`relative w-full group text-left transition-all duration-300 transform active:scale-95 focus:outline-none rounded ${selectedPact === 1 ? 'scale-[1.02] ring-2 ring-blood-primary/50' : 'hover:scale-[1.01]'}`}
                >
                    <div className={`absolute inset-0 bg-[#1c1917]/90 rounded border transition-colors duration-300 ${selectedPact === 1 ? 'border-blood-primary/50' : 'border-stone-600 group-hover:border-blood-primary/30'}`}></div>
                    
                    {/* Background Image Overlay */}
                    <div 
                        className={`absolute inset-0 opacity-20 bg-cover bg-center rounded grayscale transition-all duration-500 ${selectedPact === 1 ? 'grayscale-0' : 'group-hover:grayscale-0'}`}
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDTFRkbZ_kGZRhY-LxrVXfQBWwJEK0bVhm5r7jV_pmJ3TQXHMkB0IcRh6wo6Y-yWuw0nCg2eXHyVTEOtLwjZkrNFrXFvoXQ3fhU1ZZCdA96iiRDj3W3Kyf7-eVGGzW0xOvyqm1HTcokFturl1AKdEriZuAB5eFvz3Fdt35DacI2gK5FYrf800m4B4jrPO9pRBiQBSgzLD_zpyojWb5BcvZ7v2NEPMF0UsSFZq5ShLIQvtDZfsgYdIkOThwANo5DC0Jfu9N46si5GNw')" }}
                    ></div>
                    
                    <div className="relative p-4 flex items-center justify-between z-10">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded bg-[#292524] flex items-center justify-center border border-stone-600 shadow-lg group-hover:border-blood-primary/50 group-hover:shadow-blood-primary/20 transition-all">
                                <span className="material-symbols-outlined text-white group-hover:text-blood-primary transition-colors text-2xl">avg_pace</span>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-white font-bold text-lg uppercase tracking-wide group-hover:text-blood-primary transition-colors font-space">Vow of Haste</h3>
                                <p className="text-stone-300 text-xs mt-0.5 font-light">+50% Dash Speed</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                            <span className="text-xs text-stone-400 uppercase tracking-wider">Cost</span>
                            <div className="flex items-center gap-1 text-blood-primary font-bold bg-blood-primary/10 px-2 py-1 rounded border border-blood-primary/20">
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                                <span>-15%</span>
                            </div>
                        </div>
                    </div>
                </button>

                {/* Tablet 2: Iron */}
                <button 
                    onClick={() => setSelectedPact(2)}
                    className={`relative w-full group text-left transition-all duration-300 transform active:scale-95 focus:outline-none rounded ${selectedPact === 2 ? 'scale-[1.02] ring-2 ring-blood-primary/50' : 'hover:scale-[1.01]'}`}
                >
                    <div className={`absolute inset-0 bg-[#1c1917]/90 rounded border transition-colors duration-300 ${selectedPact === 2 ? 'border-blood-primary/50' : 'border-stone-600 group-hover:border-blood-primary/30'}`}></div>
                    
                    <div 
                        className={`absolute inset-0 opacity-20 bg-cover bg-center rounded grayscale transition-all duration-500 ${selectedPact === 2 ? 'grayscale-0' : 'group-hover:grayscale-0'}`}
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCeRS8iYXF0cQ9r5rm093D6_MkhS5ok6EzyKH_Hbzv1rSYgLMgK7pSWIR8DcDg0UzaQ9TrEpiqchlqygCsZygntIX_MzOIRfpZ1wXxMfnHP_TuDAWcx3yc6BebM2ivdU-HSLeHLcwq-KX3clmvc6YrXppRFqCJQrlCx7tvoDW6jk5HZyxJ8_4S0gRCgNjO4elOUaCtxuQdAxnqYrNMksJmxHaWHTM5q4-6l53wjfJJBXyg-UWG_u1aKh5uAspV1DmcwKifqv6rgJTk')" }}
                    ></div>
                    
                    <div className="relative p-4 flex items-center justify-between z-10">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded bg-[#292524] flex items-center justify-center border border-stone-600 shadow-lg group-hover:border-blood-primary/50 group-hover:shadow-blood-primary/20 transition-all">
                                <span className="material-symbols-outlined text-white group-hover:text-blood-primary transition-colors text-2xl">shield</span>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-white font-bold text-lg uppercase tracking-wide group-hover:text-blood-primary transition-colors font-space">Vow of Iron</h3>
                                <p className="text-stone-300 text-xs mt-0.5 font-light">Invulnerability (10s)</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                            <span className="text-xs text-stone-400 uppercase tracking-wider">Cost</span>
                            <div className="flex items-center gap-1 text-blood-primary font-bold bg-blood-primary/10 px-2 py-1 rounded border border-blood-primary/20">
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                                <span>-25%</span>
                            </div>
                        </div>
                    </div>
                </button>

                {/* Tablet 3: Midas */}
                <button 
                    onClick={() => setSelectedPact(3)}
                    className={`relative w-full group text-left transition-all duration-300 transform active:scale-95 focus:outline-none rounded ${selectedPact === 3 ? 'scale-[1.02] ring-2 ring-blood-primary/50' : 'hover:scale-[1.01]'}`}
                >
                    <div className={`absolute inset-0 bg-[#1c1917]/90 rounded border transition-colors duration-300 ${selectedPact === 3 ? 'border-blood-primary/50' : 'border-stone-600 group-hover:border-blood-primary/30'}`}></div>
                    
                    <div 
                        className={`absolute inset-0 opacity-20 bg-cover bg-center rounded grayscale transition-all duration-500 ${selectedPact === 3 ? 'grayscale-0' : 'group-hover:grayscale-0'}`}
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRleKRgggKsl-j6PXPnq3lR360azM9HK6jXJeR9IC_ERHckkRdNkC5NV0I89XZq1JNXVQ0CRRglcXs_LXzbnxf7WY-GXmUnRUGD2PO92WJRtV8PMlvYX8R3fO-kKAJFW0ZuSx-zd0I7SZ1wc_D8r_84B0RYINSFRvBNxoxd6KokegCmrdThi279yvJRIQ89wGG3o7O8d5vqC6xdKBd-KaRJ2SW0SyxzW4HnjfjjrFZzNV4ClJU9CTb08wtusGGRggtimNHRODIeIA')" }}
                    ></div>
                    
                    <div className="relative p-4 flex items-center justify-between z-10">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded bg-[#292524] flex items-center justify-center border border-stone-600 shadow-lg group-hover:border-yellow-500/50 group-hover:shadow-yellow-500/20 transition-all">
                                <span className="material-symbols-outlined text-white group-hover:text-yellow-500 transition-colors text-2xl">diamond</span>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-white font-bold text-lg uppercase tracking-wide group-hover:text-yellow-500 transition-colors font-space">Vow of Midas</h3>
                                <p className="text-stone-300 text-xs mt-0.5 font-light">2x Gold Multiplier</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                            <span className="text-xs text-stone-400 uppercase tracking-wider">Cost</span>
                            <div className="flex items-center gap-1 text-blood-primary font-bold bg-blood-primary/10 px-2 py-1 rounded border border-blood-primary/20">
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                                <span>-20%</span>
                            </div>
                        </div>
                    </div>
                </button>
            </div>

            {/* Refuse / Action Area */}
            <div className="mt-auto pt-4 shrink-0">
                <p className="text-center text-stone-500 text-[10px] uppercase tracking-[0.2em] mb-4 font-bold">
                    {selectedPact ? 'Hold to Sacrifice' : 'Select a Pact'}
                </p>
                <button 
                    onClick={onBack}
                    className="w-full flex items-center justify-center gap-2 h-12 rounded border border-[#533c3c] bg-[#1a1616] hover:bg-[#251e1e] active:bg-[#151111] text-stone-400 hover:text-stone-200 transition-all duration-200"
                >
                    <span className="material-symbols-outlined text-lg">close</span>
                    <span className="text-sm font-bold uppercase tracking-widest font-space">Refuse the Pact</span>
                </button>
            </div>
        </div>
    </div>
  );
};

export default RitualScreen;