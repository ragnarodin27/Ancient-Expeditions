import React, { useRef, useEffect } from 'react';
import { useGame } from '../GameContext';

interface SettingsScreenProps {
  onBack: () => void;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({ onBack }) => {
  const { settings, updateSettings } = useGame();
  
  // Custom colors from design
  const colors = {
    primary: "#f49d25",
    bgDark: "#221a10",
    stoneLight: "#3e3223",
    stoneDark: "#1a140e",
    stoneText: "#d6cbb8"
  };

  const languages = ["FRANÇAIS", "DEUTSCH", "ENGLISH", "ESPAÑOL", "ITALIANO", "日本語"];

  const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const pct = Math.max(0, Math.min(100, (x / width) * 100));
    updateSettings({ volume: Math.round(pct) });
  };

  const handleReset = () => {
    updateSettings({ volume: 75, graphics: 'high', language: 'ENGLISH' });
  };

  return (
    <div className="h-full w-full bg-[#221a10] text-[#d6cbb8] font-display antialiased overflow-hidden flex flex-col relative select-none">
      
      {/* Styles for specific text effects */}
      <style>{`
        .text-engraved { text-shadow: 0px 2px 3px rgba(0,0,0,0.9), 0px -1px 1px rgba(255,255,255,0.1); }
        .stone-panel { background: linear-gradient(145deg, #2a2218, #1c150e); box-shadow: 5px 5px 10px #0e0a07, -2px -2px 6px #3a2e22; }
        .stone-inset { background: #15100c; box-shadow: inset 2px 2px 5px #080604, inset -2px -2px 5px #2a2016; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Ambient Background Layers */}
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1599824425751-b8e3a895c73c?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1a140e] via-[#1a140e]/90 to-[#1a140e]"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(244,157,37,0.15),transparent_70%)] pointer-events-none"></div>

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between p-6 pb-2 border-b border-white/5 bg-gradient-to-b from-[#1a140e] to-transparent shrink-0">
        <button 
            onClick={onBack}
            className="group flex items-center justify-center w-12 h-12 rounded-full stone-panel active:scale-95 transition-transform duration-100"
        >
            <span className="material-symbols-outlined text-stone-400 group-hover:text-[#f49d25] transition-colors text-3xl drop-shadow-md">arrow_back</span>
        </button>
        <h1 className="text-2xl font-bold tracking-widest uppercase text-engraved text-stone-300 font-display">Settings</h1>
        <button onClick={handleReset} className="group relative px-4 py-2">
            <div className="absolute inset-0 bg-[#3e3223] opacity-20 rounded-lg transform skew-x-12 border border-stone-500/30"></div>
            <span className="relative text-sm font-bold tracking-wider text-stone-400 group-hover:text-white transition-colors uppercase text-engraved font-sans">Reset</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col gap-6 p-6 overflow-y-auto overflow-x-hidden pb-12">
        
        {/* Audio Section */}
        <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-stone-300 text-engraved tracking-wide border-l-4 border-[#f49d25] pl-3 font-display">Aural Echoes</h2>
                <span className="text-[#f49d25] font-sans text-sm opacity-80 font-bold">{settings.volume}%</span>
            </div>
            
            <div className="stone-panel rounded-xl p-6 flex flex-col items-center gap-6 relative overflow-hidden group">
                {/* Decor Gear */}
                <div className="absolute -right-10 -top-10 opacity-10 rotate-12 transition-transform duration-[10s] ease-linear group-hover:rotate-45 pointer-events-none">
                    <span className="material-symbols-outlined text-[150px]">settings</span>
                </div>

                {/* Dial Visual */}
                <div className="relative w-32 h-32 rounded-full stone-panel flex items-center justify-center border-4 border-[#2a2218] shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                    <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_180deg,transparent_0deg,rgba(244,157,37,0.2)_270deg)] animate-pulse"></div>
                    <div className="absolute inset-2 rounded-full bg-[url('https://images.unsplash.com/photo-1618397746666-63405ce5d015?q=80&w=500&auto=format&fit=crop')] bg-cover opacity-60 mix-blend-multiply"></div>
                    {/* Needle */}
                    <div 
                        className="absolute w-1 h-12 bg-[#f49d25] top-2 rounded-full shadow-[0_0_10px_#f49d25] origin-bottom transition-transform duration-300 ease-out" 
                        style={{ transform: `rotate(${45 + (settings.volume / 100) * 270}deg) translateY(-25%)` }}
                    ></div>
                    <div className="absolute w-8 h-8 rounded-full stone-panel border border-stone-600/30 z-10"></div>
                </div>

                {/* Slider Control */}
                <div 
                    className="w-full relative h-10 flex items-center cursor-pointer group/slider"
                    onClick={handleVolumeChange}
                >
                    {/* Track */}
                    <div className="absolute w-full h-3 bg-[#0e0a07] rounded-full shadow-[inset_0_4px_6px_-1px_rgba(0,0,0,0.5)] border-b border-white/5"></div>
                    {/* Fill */}
                    <div 
                        className="absolute h-2 top-1/2 -translate-y-1/2 left-1 bg-gradient-to-r from-red-900 to-[#f49d25] rounded-l-full shadow-[0_0_8px_rgba(244,157,37,0.5)] transition-all duration-75 ease-linear"
                        style={{ width: `${Math.max(5, settings.volume)}%` }}
                    ></div>
                    {/* Thumb */}
                    <div 
                        className="absolute h-8 w-8 -ml-4 top-1/2 -translate-y-1/2 bg-[#3e3223] rounded shadow-[2px_2px_5px_black] border-t border-white/10 flex items-center justify-center transition-all duration-75 ease-linear hover:bg-[#4a3d2c] active:scale-95"
                        style={{ left: `${settings.volume}%` }}
                    >
                        <div className="w-1 h-4 bg-black/40 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>

        {/* Graphics Section */}
        <section className="flex flex-col gap-4">
            <h2 className="text-lg font-bold text-stone-300 text-engraved tracking-wide border-l-4 border-[#f49d25] pl-3 font-display">Vision Clarity</h2>
            <div className="flex flex-col gap-3">
                {/* Low */}
                <button 
                    onClick={() => updateSettings({ graphics: 'low' })}
                    className={`flex items-center gap-4 p-4 rounded-lg border-2 stone-panel transition-all duration-300 group ${settings.graphics === 'low' ? 'border-[#f49d25] bg-[#f49d25]/10 text-[#f49d25]' : 'border-transparent hover:border-white/10'}`}
                >
                    <div className={`w-3 h-3 rounded-full shadow-inner transition-colors duration-300 ${settings.graphics === 'low' ? 'bg-[#f49d25] shadow-[0_0_8px_#f49d25]' : 'bg-[#1c150e]'}`}></div>
                    <div className="flex-1 text-left">
                        <p className={`font-bold tracking-wider text-engraved font-display ${settings.graphics === 'low' ? 'text-[#f49d25]' : 'text-stone-200'}`}>Low Runes</p>
                        <p className="text-stone-500 text-xs mt-1 font-sans">Performance optimized</p>
                    </div>
                    <span className={`material-symbols-outlined transition-colors ${settings.graphics === 'low' ? 'text-[#f49d25]' : 'text-stone-600'}`}>eco</span>
                </button>

                {/* High */}
                <button 
                    onClick={() => updateSettings({ graphics: 'high' })}
                    className={`flex items-center gap-4 p-4 rounded-lg border-2 stone-panel transition-all duration-300 group ${settings.graphics === 'high' ? 'border-[#f49d25] bg-[#f49d25]/10 text-[#f49d25]' : 'border-transparent hover:border-white/10'}`}
                >
                    <div className={`w-3 h-3 rounded-full shadow-inner transition-colors duration-300 ${settings.graphics === 'high' ? 'bg-[#f49d25] shadow-[0_0_8px_#f49d25]' : 'bg-[#1c150e]'}`}></div>
                    <div className="flex-1 text-left">
                        <p className={`font-bold tracking-wider text-engraved font-display ${settings.graphics === 'high' ? 'text-[#f49d25]' : 'text-stone-200'}`}>High Runes</p>
                        <p className="text-stone-500 text-xs mt-1 font-sans">Visual fidelity maximized</p>
                    </div>
                    <span className={`material-symbols-outlined transition-colors ${settings.graphics === 'high' ? 'text-[#f49d25]' : 'text-stone-600'}`}>diamond</span>
                </button>
            </div>
        </section>

        {/* Language Section */}
        <section className="flex flex-col gap-4">
            <h2 className="text-lg font-bold text-stone-300 text-engraved tracking-wide border-l-4 border-[#f49d25] pl-3 font-display">Tongue</h2>
            
            <div className="relative h-48 w-full rounded-xl overflow-hidden stone-inset border border-white/5">
                {/* 3D Cylinder Overlays */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0e0a07] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0e0a07] to-transparent z-10 pointer-events-none"></div>
                
                {/* Selection Window */}
                <div className="absolute top-1/2 left-0 right-0 h-14 -translate-y-1/2 bg-white/5 border-y border-[#f49d25]/30 z-0 shadow-[0_0_15px_rgba(244,157,37,0.1)]"></div>
                <div className="absolute top-1/2 right-4 -translate-y-1/2 text-[#f49d25] animate-pulse z-20">
                    <span className="material-symbols-outlined">play_arrow</span>
                </div>

                {/* List */}
                <div className="absolute inset-0 overflow-y-scroll snap-y snap-mandatory py-[calc(50%-1.75rem)] scrollbar-hide flex flex-col items-center">
                    {languages.map((lang) => (
                        <button 
                            key={lang}
                            onClick={() => updateSettings({ language: lang })}
                            className={`snap-center shrink-0 h-14 w-full flex items-center justify-center transition-all duration-300 
                                ${settings.language === lang 
                                    ? 'text-[#f49d25] drop-shadow-[0_0_5px_rgba(244,157,37,0.8)] scale-110 opacity-100' 
                                    : 'text-stone-400 opacity-40 hover:opacity-80'}`}
                        >
                            <span className={`text-xl font-bold tracking-[0.2em] text-engraved ${settings.language === lang ? 'font-display' : 'font-sans'}`}>
                                {lang}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </section>

        {/* Footer */}
        <div className="h-10 border-t border-white/5 flex items-center justify-center opacity-30 mt-4 relative">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-stone-500 to-transparent absolute top-0"></div>
            <span className="bg-[#221a10] px-2 text-xs font-mono tracking-widest text-stone-600">v.1.0.4</span>
        </div>

      </main>
    </div>
  );
};

export default SettingsScreen;