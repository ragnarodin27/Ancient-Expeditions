import React, { useState, useRef, useEffect } from 'react';

interface AscensionScreenProps {
  onBack: () => void;
  onNavigate: (screen: string) => void;
}

const AscensionScreen: React.FC<AscensionScreenProps> = ({ onBack, onNavigate }) => {
  const [soulEchoes, setSoulEchoes] = useState(2450);
  const [pillars, setPillars] = useState({
    strength: { level: 12, progress: 65, color: 'red' },
    spirit: { level: 8, progress: 40, color: 'blue' },
    agility: { level: 15, progress: 85, color: 'emerald' }
  });
  
  const activePillarRef = useRef<string | null>(null);
  const progressIntervalRef = useRef<number | null>(null);

  const startChanneling = (type: 'strength' | 'spirit' | 'agility') => {
    activePillarRef.current = type;
    
    // Start loop
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    
    progressIntervalRef.current = window.setInterval(() => {
        if (soulEchoes <= 0) {
            stopChanneling();
            return;
        }

        setSoulEchoes(prev => Math.max(0, prev - 1));
        
        setPillars(prev => {
            const current = prev[type];
            let newProgress = current.progress + 2; // Speed of fill
            let newLevel = current.level;
            
            if (newProgress >= 100) {
                newProgress = 0;
                newLevel += 1;
            }
            
            return {
                ...prev,
                [type]: { ...current, progress: newProgress, level: newLevel }
            };
        });
    }, 50);
  };

  const stopChanneling = () => {
    activePillarRef.current = null;
    if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
    }
  };

  // Cleanup
  useEffect(() => {
      return () => stopChanneling();
  }, []);

  return (
    <div className="bg-[#f5f7f8] dark:bg-soul-dark font-epilogue antialiased overflow-hidden h-full w-full select-none text-white flex flex-col relative">
        {/* Main Container */}
        <div className="relative flex flex-col h-full w-full overflow-hidden">
            {/* Background Layer: Ancient Vault */}
            <div className="absolute inset-0 z-0">
                {/* Obsidian Wall Texture */}
                <div className="absolute inset-0 bg-obsidian-texture opacity-90"></div>
                {/* Reflected Floor */}
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                {/* Atmospheric Fog */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-soul-primary/10 via-transparent to-black"></div>
                
                {/* Central Visual: Sarcophagus & Soul Fire */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square flex items-center justify-center">
                    {/* The glowing core (Soul Geyser) */}
                    <div className="relative w-64 h-64 rounded-full bg-soul-primary/20 blur-3xl animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-64 bg-gradient-to-t from-white via-soul-primary to-transparent blur-xl opacity-80 mix-blend-screen"></div>
                    {/* Character Silhouette */}
                    <div className="absolute bottom-0 w-32 h-48 bg-black/80 rounded-t-full blur-sm transform translate-y-12"></div>
                    
                    <div className="w-full h-full absolute inset-0 bg-center bg-no-repeat bg-contain opacity-40 mix-blend-overlay" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBAUS2Hy99f93eqDvoBvJ-VLXMIJB8B0EzecdwOrpDUo3WfY00J0IJ41gT5jCoendmCs1GnI3ejWTV-chmN3KA5ZSEepC6jegQmVue_G9o0bqbYqZnXdfm0IZbPUiTlVsqedzoxLvt7jj2ck0uwhj9IYVsFMV0AJ98lfmysz9E_1NF8LmTlcZTdxNLRU1RXN3M_8LvJzTFTazpk5CtrhDuuFctTwusMaUBEXFwMLyo-8Z4-zlR-KU2bQWhD-uP0B21DgHhdMeFGxsY')" }}></div>
                </div>
            </div>

            {/* Top Navigation / HUD */}
            <header className="relative z-20 flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                    <button onClick={onBack} className="flex items-center justify-center w-10 h-10 rounded-full glass-panel-obsidian text-gray-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                </div>
                {/* Soul Echoes Counter */}
                <div className="glass-panel-obsidian px-4 py-2 rounded-full flex items-center gap-3 shadow-lg shadow-soul-glow border border-white/10">
                    <div className="w-6 h-6 rounded-sm bg-soul-primary/20 flex items-center justify-center border border-soul-primary/50 rotate-45 transform">
                        <div className="w-3 h-3 bg-soul-primary rounded-sm shadow-[0_0_10px_rgba(13,127,242,0.8)]"></div>
                    </div>
                    <div className="flex flex-col items-start leading-none">
                        <span className="text-[10px] text-soul-primary/80 font-bold uppercase tracking-widest">Soul Echoes</span>
                        <span className="text-xl font-bold text-white tracking-tight">{soulEchoes.toLocaleString()}</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button className="flex items-center justify-center w-10 h-10 rounded-full glass-panel-obsidian text-gray-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">help</span>
                    </button>
                </div>
            </header>

            {/* Main Content Area: The Three Pillars */}
            <main className="relative z-10 flex-1 flex flex-col justify-end pb-24 px-6">
                {/* Contextual Title */}
                <div className="absolute top-24 left-0 w-full text-center pointer-events-none opacity-60">
                    <h1 className="text-3xl font-bold tracking-[0.2em] text-white/10 uppercase font-epilogue">Ascension</h1>
                </div>
                
                <div className="grid grid-cols-3 gap-4 h-96 items-end">
                    
                    {/* Pillar 1: Strength */}
                    <Pillar 
                        label="Strength"
                        level={pillars.strength.level}
                        progress={pillars.strength.progress}
                        icon="fitness_center"
                        color="red"
                        onHoldStart={() => startChanneling('strength')}
                        onHoldEnd={stopChanneling}
                    />

                    {/* Pillar 2: Spirit (Center) */}
                    <div className="h-[110%] -mb-4">
                        <Pillar 
                            label="Spirit"
                            level={pillars.spirit.level}
                            progress={pillars.spirit.progress}
                            icon="auto_awesome"
                            color="soul-primary"
                            isCenter={true}
                            onHoldStart={() => startChanneling('spirit')}
                            onHoldEnd={stopChanneling}
                        />
                    </div>

                    {/* Pillar 3: Agility */}
                    <Pillar 
                        label="Agility"
                        level={pillars.agility.level}
                        progress={pillars.agility.progress}
                        icon="bolt"
                        color="emerald"
                        onHoldStart={() => startChanneling('agility')}
                        onHoldEnd={stopChanneling}
                    />

                </div>
                
                {/* Helper Text */}
                <div className="mt-8 text-center">
                    <p className="text-white/40 text-sm font-light tracking-wide animate-pulse font-epilogue">Tap and hold pillars to channel souls</p>
                </div>
            </main>

            {/* Bottom Navigation */}
            <nav className="relative z-20 border-t border-white/5 bg-[#1b2127]/90 backdrop-blur-md pb-6 pt-3 px-6">
                <div className="flex justify-between items-end gap-2">
                    <button onClick={() => onNavigate('loading')} className="flex flex-1 flex-col items-center justify-end gap-1.5 text-gray-500 hover:text-white transition-colors group">
                        <span className="material-symbols-outlined text-2xl group-hover:-translate-y-1 transition-transform">directions_run</span>
                        <span className="text-[10px] uppercase font-bold tracking-wider font-epilogue">Run</span>
                    </button>
                    <button className="flex flex-1 flex-col items-center justify-end gap-1.5 text-soul-primary relative">
                        {/* Active Indicator Glow */}
                        <div className="absolute -top-12 w-12 h-12 bg-soul-primary/20 rounded-full blur-xl"></div>
                        <span className="material-symbols-outlined text-2xl fill-current drop-shadow-[0_0_8px_rgba(13,127,242,0.8)]">local_fire_department</span>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-white font-epilogue">Ascend</span>
                    </button>
                    <button onClick={() => onNavigate('armory')} className="flex flex-1 flex-col items-center justify-end gap-1.5 text-gray-500 hover:text-white transition-colors group">
                        <span className="material-symbols-outlined text-2xl group-hover:-translate-y-1 transition-transform">backpack</span>
                        <span className="text-[10px] uppercase font-bold tracking-wider font-epilogue">Inventory</span>
                    </button>
                    <button onClick={() => onNavigate('map')} className="flex flex-1 flex-col items-center justify-end gap-1.5 text-gray-500 hover:text-white transition-colors group">
                        <span className="material-symbols-outlined text-2xl group-hover:-translate-y-1 transition-transform">map</span>
                        <span className="text-[10px] uppercase font-bold tracking-wider font-epilogue">Map</span>
                    </button>
                </div>
            </nav>
            
            {/* Overlay Vignette */}
            <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050608_120%)]"></div>
        </div>
    </div>
  );
};

// Subcomponent: Pillar
interface PillarProps {
    label: string;
    level: number;
    progress: number; // 0-100
    icon: string;
    color: string;
    isCenter?: boolean;
    onHoldStart: () => void;
    onHoldEnd: () => void;
}

const Pillar: React.FC<PillarProps> = ({ label, level, progress, icon, color, isCenter, onHoldStart, onHoldEnd }) => {
    // Dynamic styles based on color
    const colorMap: Record<string, { bg: string, bar: string, shadow: string, text: string }> = {
        'red': { bg: 'bg-red-500/20', bar: 'bg-red-400', shadow: 'rgba(248,113,113,0.8)', text: 'text-red-300' },
        'soul-primary': { bg: 'bg-soul-primary/30', bar: 'bg-soul-primary', shadow: 'rgba(13,127,242,0.8)', text: 'text-soul-primary' },
        'emerald': { bg: 'bg-emerald-500/20', bar: 'bg-emerald-400', shadow: 'rgba(52,211,153,0.8)', text: 'text-emerald-300' }
    };

    const c = colorMap[color] || colorMap['soul-primary'];

    return (
        <div 
            className={`group relative flex flex-col items-center justify-end h-full transition-all duration-300 hover:-translate-y-2 cursor-pointer select-none active:scale-95`}
            onMouseDown={onHoldStart}
            onMouseUp={onHoldEnd}
            onMouseLeave={onHoldEnd}
            onTouchStart={onHoldStart}
            onTouchEnd={onHoldEnd}
        >
            {/* Glowing Rune */}
            <div className={`mb-4 ${isCenter ? 'opacity-80' : 'opacity-50'} group-hover:opacity-100 transition-opacity duration-300 ${isCenter ? 'animate-pulse' : ''}`}>
                <span className={`material-symbols-outlined ${isCenter ? 'text-5xl text-soul-primary' : 'text-4xl text-white'} drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]`}>{icon}</span>
            </div>
            
            {/* The Pillar Object */}
            <div className={`w-full h-3/4 bg-gradient-to-t from-[#1a1e23] to-[#2a3038] ${isCenter ? 'rounded-t-xl shadow-[0_0_30px_rgba(13,127,242,0.1)]' : 'rounded-t-lg'} border-x border-t border-white/10 relative overflow-hidden flex flex-col justify-end active:border-opacity-50 active:border-${color === 'soul-primary' ? 'soul-primary' : color + '-400'}`}>
                
                {/* Progress/Liquid Fill */}
                <div className={`absolute bottom-0 left-0 w-full ${c.bg} transition-all duration-100 ease-linear`} style={{ height: `${progress}%` }}>
                    <div className={`absolute top-0 left-0 w-full h-[2px] ${c.bar}`} style={{ boxShadow: `0 0 15px ${c.shadow}` }}></div>
                    {/* Particles inside (Center only for perf/style) */}
                    {isCenter && <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent animate-pulse"></div>}
                </div>
                
                {/* Texture Overlay */}
                <div className="absolute inset-0 bg-grunge-overlay opacity-30 mix-blend-overlay pointer-events-none"></div>
                
                {/* Level Indicator */}
                <div className="relative z-10 p-4 text-center pointer-events-none">
                    <p className={`text-xs font-bold ${c.text} tracking-wider uppercase mb-1 font-epilogue`}>{label}</p>
                    <p className={`font-bold text-white font-epilogue ${isCenter ? 'text-3xl drop-shadow-md' : 'text-2xl'}`}>Lvl {level}</p>
                </div>
            </div>
            
            {/* Base Reflection */}
            <div className={`w-3/4 h-2 bg-black/50 blur-md rounded-[100%] mt-2 ${isCenter ? 'w-4/5 h-3 bg-soul-primary/20' : ''}`}></div>
        </div>
    );
};

export default AscensionScreen;