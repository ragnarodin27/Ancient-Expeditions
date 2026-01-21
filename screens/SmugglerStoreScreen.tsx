import React from 'react';

interface SmugglerStoreScreenProps {
  onBack: () => void;
}

const SmugglerStoreScreen: React.FC<SmugglerStoreScreenProps> = ({ onBack }) => {
  return (
    <div className="relative flex h-full w-full flex-col bg-[#120f0c] overflow-hidden font-display antialiased text-parchment select-none">
        
        {/* Background Ambience */}
        <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 bg-[#1e1812] opacity-80"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.9))]"></div>
            <div className="absolute top-20 right-[-40px] w-64 h-96 bg-black/40 blur-3xl rounded-full opacity-60 transform rotate-12"></div>
            <div className="absolute top-10 left-10 w-96 h-96 bg-orange-500/10 blur-[100px] rounded-full lamp-flicker mix-blend-screen"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-mystic/10 blur-[80px] rounded-full mix-blend-screen"></div>
        </div>

        {/* Top Header */}
        <div className="relative z-20 flex items-center px-4 py-5 justify-between bg-gradient-to-b from-black/80 via-black/40 to-transparent shrink-0">
            <button 
                onClick={onBack}
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-wood-rough/80 border border-[#5c4d3c] text-parchment hover:bg-[#5c4d3c] transition-colors shadow-lg"
            >
                <span className="material-symbols-outlined text-shadow">arrow_back</span>
            </button>
            <div className="flex flex-col items-center">
                <h2 className="text-gold-bright text-xl font-bold tracking-widest uppercase text-shadow text-glow-gold">Black Market</h2>
                <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-smuggler-red to-transparent mt-1"></div>
            </div>
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-smuggler-red/30 shadow-lg">
                <span className="material-symbols-outlined text-smuggler-red text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                <span className="text-white font-bold text-sm tracking-wide">1,450</span>
                <button className="flex items-center justify-center bg-smuggler-red rounded-full w-4 h-4 text-black text-[10px] font-bold hover:bg-smuggler-glow transition-colors">+</button>
            </div>
        </div>

        {/* Scrollable Content */}
        <div className="relative z-10 flex-1 overflow-y-auto pb-32 no-scrollbar">
            
            {/* Featured Bundle */}
            <div className="px-4 py-4">
                <div className="relative w-full rounded-xl overflow-hidden border border-mystic/40 shadow-[0_0_25px_rgba(155,93,229,0.2)] group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2a1b35] to-[#150f1a]"></div>
                    <div className="absolute inset-0 bg-grunge-overlay opacity-30 mix-blend-overlay"></div>
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-mystic/30 blur-[50px] rounded-full"></div>
                    
                    <div className="relative p-4 flex flex-col items-center text-center space-y-3">
                        <div className="absolute top-0 left-0 bg-mystic text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-br-lg shadow-lg z-20">
                            Limited Time
                        </div>
                        <div className="w-full aspect-[16/9] relative rounded-lg overflow-hidden border border-mystic/20 mb-2 bg-black/40 shadow-inner">
                            <img alt="Cursed Relic Bundle" className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFcYHOyEHUjBH40IXpdbqC6l5OXIgcCkK8P_BVn4vn-sHXJ697qz3nZrnPgALJhIqGMB_ug3SvUGz_orJ7pfBKRf1KHaakyxYbFyGpuCSBFQRI628XRrWbPr1XU5UM4e36PzT0GjFwONH4HZ8y7KOGLXTVpHJ3o9c96ByQneM4zlg7SH6eFGOch3iaI6N25DjSTsX_hYCzOHbzS70Wd35_9ie2XQsY7VnRNEgqn7Q79konivmDRxAJsrKvEWOjxLrLAns5ItVT0L8"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-mystic/40 to-transparent mix-blend-overlay"></div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-mystic-light text-glow-mystic mb-1">Cursed Relic Bundle</h3>
                            <p className="text-xs text-parchment/70 italic font-sans">"Power comes at a price... are you willing to pay?"</p>
                        </div>
                        <button className="w-full bg-gradient-to-r from-mystic/80 to-mystic/60 hover:from-mystic hover:to-mystic/80 border border-mystic-light/30 rounded py-2 flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95">
                            <span className="text-white font-bold tracking-wide text-sm">UNLOCK</span>
                            <div className="w-px h-4 bg-white/20"></div>
                            <div className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-white text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                                <span className="text-white font-bold text-sm">850</span>
                                <span className="text-xs text-white/50 line-through decoration-red-500">1200</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Section Header */}
            <div className="px-4 mt-2 mb-2 flex items-center justify-between">
                <h3 className="text-parchment font-bold text-lg tracking-wider border-b border-wood-rough/50 pb-1 w-full flex items-center gap-2">
                    <span className="material-symbols-outlined text-gold-dim text-lg">storefront</span>
                    Smuggler's Wares
                </h3>
            </div>

            {/* Wares Grid */}
            <div className="px-4 grid grid-cols-2 gap-4">
                {/* Item 1 */}
                <div className="bg-[#1e1915] rounded-lg border border-[#3e3025] shadow-lg overflow-hidden relative group">
                    <div className="absolute top-2 right-2 z-10 bg-black/60 rounded px-1.5 py-0.5 border border-white/10 backdrop-blur-sm">
                        <span className="text-[10px] text-emerald-400 uppercase font-bold tracking-widest">Rare</span>
                    </div>
                    <div className="h-32 bg-[radial-gradient(circle_at_center,_#2d241c_0%,_#120f0c_100%)] flex items-center justify-center p-4 relative">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
                        <span className="material-symbols-outlined text-emerald-400 text-6xl drop-shadow-[0_0_15px_rgba(52,211,153,0.5)] group-hover:scale-110 transition-transform duration-300">emergency</span>
                    </div>
                    <div className="p-3 bg-wood-rough/30 border-t border-[#3e3025]">
                        <h4 className="text-parchment font-bold text-sm leading-tight mb-1">Serpent's Eye</h4>
                        <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-smuggler-red text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                                <span className="text-white font-bold text-sm font-sans">250</span>
                            </div>
                            <button className="bg-[#2a2018] hover:bg-[#3a2d22] border border-[#4a3b2d] rounded p-1 transition-colors">
                                <span className="material-symbols-outlined text-gold-bright text-[16px]">shopping_bag</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="bg-[#1e1915] rounded-lg border border-[#3e3025] shadow-lg overflow-hidden relative group">
                    <div className="absolute top-2 right-2 z-10 bg-black/60 rounded px-1.5 py-0.5 border border-white/10 backdrop-blur-sm">
                        <span className="text-[10px] text-purple-400 uppercase font-bold tracking-widest">Epic</span>
                    </div>
                    <div className="h-32 bg-[radial-gradient(circle_at_center,_#2d241c_0%,_#120f0c_100%)] flex items-center justify-center p-4 relative">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
                        <span className="material-symbols-outlined text-amber-600 text-6xl drop-shadow-[0_0_15px_rgba(217,119,6,0.3)] group-hover:scale-110 transition-transform duration-300">theater_comedy</span>
                    </div>
                    <div className="p-3 bg-wood-rough/30 border-t border-[#3e3025]">
                        <h4 className="text-parchment font-bold text-sm leading-tight mb-1">Rogue Mask</h4>
                        <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-smuggler-red text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                                <span className="text-white font-bold text-sm font-sans">500</span>
                            </div>
                            <button className="bg-[#2a2018] hover:bg-[#3a2d22] border border-[#4a3b2d] rounded p-1 transition-colors">
                                <span className="material-symbols-outlined text-gold-bright text-[16px]">shopping_bag</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="bg-[#1e1915] rounded-lg border border-[#3e3025] shadow-lg overflow-hidden relative group">
                    <div className="h-32 bg-[radial-gradient(circle_at_center,_#2d241c_0%,_#120f0c_100%)] flex items-center justify-center p-4 relative">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
                        <span className="material-symbols-outlined text-blue-400 text-6xl drop-shadow-[0_0_15px_rgba(96,165,250,0.4)] group-hover:scale-110 transition-transform duration-300">water_drop</span>
                    </div>
                    <div className="p-3 bg-wood-rough/30 border-t border-[#3e3025]">
                        <h4 className="text-parchment font-bold text-sm leading-tight mb-1">Spirit Elixir</h4>
                        <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-smuggler-red text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                                <span className="text-white font-bold text-sm font-sans">50</span>
                            </div>
                            <button className="bg-[#2a2018] hover:bg-[#3a2d22] border border-[#4a3b2d] rounded p-1 transition-colors">
                                <span className="material-symbols-outlined text-gold-bright text-[16px]">shopping_bag</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Item 4 - Mystery */}
                <div className="bg-[#1e1915] rounded-lg border border-[#3e3025] shadow-lg overflow-hidden relative group opacity-75">
                    <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center backdrop-blur-[1px]">
                        <span className="material-symbols-outlined text-white/50 text-4xl">lock</span>
                    </div>
                    <div className="h-32 bg-[radial-gradient(circle_at_center,_#2d241c_0%,_#120f0c_100%)] flex items-center justify-center p-4 relative">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
                        <span className="material-symbols-outlined text-gray-500 text-6xl">inventory_2</span>
                    </div>
                    <div className="p-3 bg-wood-rough/30 border-t border-[#3e3025]">
                        <h4 className="text-parchment/60 font-bold text-sm leading-tight mb-1">Mystery Box</h4>
                        <div className="flex items-center justify-between mt-2 opacity-50">
                            <div className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-smuggler-red text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                                <span className="text-white font-bold text-sm font-sans">???</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hot Item */}
            <div className="px-4 mt-6">
                <div className="relative bg-[#261f18] border-2 border-dashed border-[#5c4d3c] rounded-lg p-4 flex items-center gap-4">
                    <div className="absolute -top-2 -left-2 rotate-[-10deg] bg-red-700 text-white text-[10px] font-bold px-2 py-0.5 shadow-md border border-white/20">HOT</div>
                    <div className="w-16 h-16 bg-black/40 rounded border border-[#5c4d3c] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-gold-bright text-3xl">local_fire_department</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-parchment font-bold text-sm">Torch of the Ancients</h4>
                        <p className="text-xs text-gold-dim mb-2 italic">Lights the darkest paths.</p>
                        <div className="w-full bg-black/50 rounded-full h-1.5 overflow-hidden">
                            <div className="bg-orange-600 w-3/4 h-full"></div>
                        </div>
                        <p className="text-[10px] text-white/40 mt-1 text-right font-sans">3h 42m left</p>
                    </div>
                    <button className="bg-smuggler-red/90 hover:bg-smuggler-red text-white font-bold text-xs px-3 py-2 rounded shadow-lg border border-white/10 uppercase tracking-wider">
                        Buy
                    </button>
                </div>
            </div>
            
            <div className="h-10"></div>
        </div>

        {/* Bottom Footer Area */}
        <div className="absolute bottom-0 left-0 w-full z-30">
            <div className="absolute -top-3 left-0 w-full h-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDE2IiBwcmVzZXJ2ZUFzcGVjdHJhdGlvPSJub25lIj48cGF0aCBkPSJNMCAxNnYtNGM1MC0xMCAxMDAtMjAgMTUwLTEwczEwMCAyMCAxNTAgMTBjNTAtMTAgMTAwLTIwIDE1MC0xMHMxMDAgMjAgMTUwIDEwYzUwLTEwIDEwMC0yMCAxNTAtMTBzMTAwIDIwIDE1MCAxMGM1MC0xMCAxMDAtMjAgMTUwLTEwdjR6IiBmaWxsPSIjMWMxNjExIi8+PC9zdmc+')] bg-cover bg-bottom opacity-100"></div>
            <div className="bg-[#1c1611] border-t-2 border-[#5c4d3c] p-4 pb-8 flex items-center justify-between shadow-[0_-5px_20px_rgba(0,0,0,0.7)] relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
                
                <div className="relative flex flex-col">
                    <span className="text-gold-dim text-xs font-bold uppercase tracking-widest">Your Stash</span>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="material-symbols-outlined text-parchment/60">backpack</span>
                        <span className="text-parchment font-display font-bold text-lg">Empty</span>
                    </div>
                </div>
                
                <button className="relative group overflow-hidden rounded-lg bg-gradient-to-b from-[#bfae92] to-[#8c7a5e] p-0.5 shadow-[0_4px_0_#3e3025] active:shadow-none active:translate-y-[4px] transition-all">
                    <div className="relative flex h-12 items-center justify-center gap-2 rounded-[5px] bg-[#2a2018] border border-[#5c4d3c] px-6 group-hover:bg-[#3e3025] transition-colors">
                        <span className="material-symbols-outlined text-gold-bright text-glow-gold group-hover:text-white transition-colors">redeem</span>
                        <span className="text-sm font-bold tracking-widest text-parchment group-hover:text-white transition-colors uppercase font-display">Redeem Code</span>
                    </div>
                </button>
            </div>
        </div>

    </div>
  );
};

export default SmugglerStoreScreen;