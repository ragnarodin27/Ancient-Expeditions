import React from 'react';

interface CreditsScreenProps {
  onBack: () => void;
}

const CreditsScreen: React.FC<CreditsScreenProps> = ({ onBack }) => {
  return (
    <div className="bg-[#0f0c08] text-parchment font-display overflow-hidden select-none h-full w-full relative flex flex-col">
        {/* Wall Background */}
        <div className="fixed inset-0 flex justify-center z-0 pointer-events-none">
            <div className="w-full max-w-lg h-full bg-[#5c5242] wall-surface relative shadow-[inset_0_0_120px_rgba(0,0,0,0.9)]">
                <div 
                    className="absolute inset-0 bg-cover opacity-10 mix-blend-overlay grayscale contrast-125" 
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8QVBikYUt30tESoyZV1JfabXYJLfyIzZoBQrlO7aPgKRDKCnNk6rkQg9eheAOyQ5ij52ZEU_ufXvI5SRzesLBfIfW0ua3yulPBzDKNiVan4WVsuWK0DnKUdy9oqR4iEX3rzfPiMJKcNxLHBvbeiJZsMPxkL5kn7Nf3v8Aq10FYCj_i4oDVulZAQ4ZyGNls5OgfUzIYEBJ7cqIgTse64WOUF3PtfU8rnU8xtDpr_BpeenTd9ECPuqptu6sFW__SkWOsvFEFuk2pN8')" }}
                ></div>
            </div>
        </div>

        {/* Ambient Overlays */}
        <div className="fixed inset-0 pointer-events-none z-10 bg-gradient-radial from-transparent via-black/50 to-black/95"></div>
        <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
        <div className="fixed bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/90 to-transparent z-10 pointer-events-none"></div>
        
        {/* Lighting */}
        <div className="fixed top-1/4 -left-16 w-80 h-80 bg-orange-600/20 rounded-full blur-[80px] lamp-light z-10 pointer-events-none"></div>
        <div className="fixed top-2/3 -right-16 w-80 h-80 bg-orange-500/15 rounded-full blur-[90px] lamp-light z-10 pointer-events-none" style={{ animationDelay: '1.2s' }}></div>
        
        {/* Dust Particles */}
        <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
            <div className="dust-mote w-1 h-1 top-[40%] left-[20%]" style={{ animationDuration: '8s' }}></div>
            <div className="dust-mote w-[3px] h-[3px] top-[60%] left-[80%]" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
            <div className="dust-mote w-1 h-1 top-[80%] left-[40%]" style={{ animationDuration: '15s', animationDelay: '5s' }}></div>
            <div className="dust-mote w-[2px] h-[2px] top-[30%] left-[70%]" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
        </div>

        {/* Scrollable Content */}
        <div className="relative z-20 h-full overflow-y-auto no-scrollbar flex flex-col items-center w-full max-w-md mx-auto pt-16 pb-40">
            <header className="text-center mb-16 px-6 relative w-full shrink-0">
                <div className="flex items-center justify-center gap-4 mb-2 opacity-60">
                    <div className="h-[1px] w-8 bg-[#3d3628]"></div>
                    <span className="text-[#3d3628] text-[10px] font-bold uppercase tracking-[0.4em]">Legacy</span>
                    <div className="h-[1px] w-8 bg-[#3d3628]"></div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#e8dcc0] tracking-[0.15em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" style={{ textShadow: '2px 2px 0px #2c261b' }}>
                    The Expedition
                </h1>
                <div className="w-24 h-1 bg-[#8c8268] mx-auto mt-4 rounded-full opacity-50 shadow-inner"></div>
            </header>

            <div className="w-full px-10 mb-20 space-y-8">
                {/* Director */}
                <div className="relative gold-panel rounded-sm p-[2px] transform rotate-1 group hover:scale-[1.01] transition-transform duration-700">
                    <div className="border border-[#eecda3]/50 p-4 flex flex-col items-center justify-center relative">
                        <h2 className="font-hand text-4xl font-bold etched-gold-text mb-0 leading-none relative z-10">Alexander Graves</h2>
                        <span className="text-[#4e342e] text-[10px] font-bold uppercase tracking-[0.3em] border-t border-[#4e342e]/30 pt-1 mt-2 z-10">Game Director</span>
                        <div className="absolute top-1 left-1 size-1.5 bg-[#3e2723] rounded-full shadow-[inset_0_-1px_1px_rgba(255,255,255,0.4)]"></div>
                        <div className="absolute top-1 right-1 size-1.5 bg-[#3e2723] rounded-full shadow-[inset_0_-1px_1px_rgba(255,255,255,0.4)]"></div>
                        <div className="absolute bottom-1 left-1 size-1.5 bg-[#3e2723] rounded-full shadow-[inset_0_-1px_1px_rgba(255,255,255,0.4)]"></div>
                        <div className="absolute bottom-1 right-1 size-1.5 bg-[#3e2723] rounded-full shadow-[inset_0_-1px_1px_rgba(255,255,255,0.4)]"></div>
                    </div>
                </div>

                {/* Creative Lead */}
                <div className="relative gold-panel rounded-sm p-[2px] transform -rotate-1 group hover:scale-[1.01] transition-transform duration-700">
                    <div className="border border-[#eecda3]/50 p-4 flex flex-col items-center justify-center relative">
                        <h2 className="font-hand text-4xl font-bold etched-gold-text mb-0 leading-none relative z-10">Elena Vance</h2>
                        <span className="text-[#4e342e] text-[10px] font-bold uppercase tracking-[0.3em] border-t border-[#4e342e]/30 pt-1 mt-2 z-10">Creative Lead</span>
                        <div className="absolute top-1 left-1 size-1.5 bg-[#3e2723] rounded-full shadow-[inset_0_-1px_1px_rgba(255,255,255,0.4)]"></div>
                        <div className="absolute top-1 right-1 size-1.5 bg-[#3e2723] rounded-full shadow-[inset_0_-1px_1px_rgba(255,255,255,0.4)]"></div>
                        <div className="absolute bottom-1 left-1 size-1.5 bg-[#3e2723] rounded-full shadow-[inset_0_-1px_1px_rgba(255,255,255,0.4)]"></div>
                        <div className="absolute bottom-1 right-1 size-1.5 bg-[#3e2723] rounded-full shadow-[inset_0_-1px_1px_rgba(255,255,255,0.4)]"></div>
                    </div>
                </div>
            </div>

            {/* Cartographers */}
            <div className="w-full px-6 mb-20 text-center">
                <div className="flex items-center justify-center gap-2 mb-8 opacity-50">
                    <span className="material-symbols-outlined text-[#3d3628] text-sm">edit_road</span>
                    <span className="text-[#2c261b] font-display text-xs font-bold uppercase tracking-widest">Cartographers</span>
                </div>
                <div className="flex flex-col items-center gap-6">
                    <div className="charcoal-sig text-4xl -rotate-2 transform">Marcus "North" Holloway</div>
                    <div className="charcoal-sig text-4xl rotate-1 transform ml-4">Sarah Jenkins</div>
                    <div className="charcoal-sig text-4xl -rotate-1 transform mr-2">Dr. Aris Thorne</div>
                </div>
            </div>

            {/* Architects */}
            <div className="w-full px-6 mb-20 text-center">
                <div className="flex items-center justify-center gap-2 mb-8 opacity-50">
                    <span className="material-symbols-outlined text-[#3d3628] text-sm">engineering</span>
                    <span className="text-[#2c261b] font-display text-xs font-bold uppercase tracking-widest">Architects</span>
                </div>
                <div className="flex flex-col items-center gap-8">
                    <div className="charcoal-sig text-4xl rotate-2 transform">David Chen</div>
                    <div className="charcoal-sig text-4xl -rotate-1 transform scale-110">Priya Patel</div>
                    <div className="charcoal-sig text-4xl rotate-1 transform">James "Bug" Wilson</div>
                    <div className="charcoal-sig text-4xl -rotate-2 transform">Kiera Knight</div>
                </div>
            </div>

            {/* Restorers */}
            <div className="w-full px-6 mb-24 text-center">
                <div className="flex items-center justify-center gap-2 mb-8 opacity-50">
                    <span className="material-symbols-outlined text-[#3d3628] text-sm">palette</span>
                    <span className="text-[#2c261b] font-display text-xs font-bold uppercase tracking-widest">Restorers</span>
                </div>
                <div className="flex flex-col items-center gap-6">
                    <div className="charcoal-sig text-4xl -rotate-3 transform">Lucas Bross</div>
                    <div className="charcoal-sig text-4xl rotate-2 transform ml-6">Emily Stone</div>
                    <div className="charcoal-sig text-4xl -rotate-1 transform mr-4">The "Voxel" Twins</div>
                </div>
            </div>
        </div>

        {/* Return Button */}
        <div className="fixed bottom-0 left-0 w-full p-8 flex justify-center z-50 pointer-events-none">
            <div className="relative group cursor-pointer pointer-events-auto" onClick={onBack}>
                <button className="relative size-20 rounded-full bg-[#1c1917] border-[3px] border-[#8c8268] shadow-[0_10px_30px_rgba(0,0,0,0.9)] flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-active:scale-95 group-active:translate-y-0">
                    <div className="absolute inset-0 bg-[#3d3628] opacity-100 wall-surface"></div>
                    <div className="absolute inset-1 rounded-full border border-[#544d3b] opacity-80 shadow-[inset_0_0_5px_rgba(0,0,0,0.8)]"></div>
                    <span className="material-symbols-outlined text-4xl text-[#cbb886] relative z-10 transition-transform duration-700 group-hover:rotate-[360deg] drop-shadow-md">explore</span>
                    <div className="absolute top-0 left-2 w-8 h-4 bg-white/10 rounded-full blur-[2px] -rotate-45 pointer-events-none"></div>
                </button>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-max text-center transition-all duration-300 group-hover:opacity-100 opacity-60 translate-y-2 group-hover:translate-y-0">
                    <span className="text-[#8c8268] text-[10px] font-bold tracking-[0.3em] uppercase drop-shadow-md">Return</span>
                </div>
            </div>
        </div>

    </div>
  );
};

export default CreditsScreen;