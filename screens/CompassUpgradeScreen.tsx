import React, { useState } from 'react';

interface CompassUpgradeScreenProps {
  onBack: () => void;
}

type UpgradeType = 'LODESTONE' | 'SUN_CRYSTAL' | 'OBSIDIAN';

interface UpgradeOption {
  id: UpgradeType;
  name: string;
  effect: string;
  description: string;
  image: string;
  stats: {
    duration: number;
    range: number;
  };
}

const UPGRADES: UpgradeOption[] = [
  {
    id: 'LODESTONE',
    name: 'Lodestones',
    effect: 'Precision',
    description: 'Magnetic resonance stabilizes the needle, pinpointing rare ores through walls.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEbNvPOyrH7RsPRH2cWP6B9y05nj1zYot71u2oTO0_G2ryfCdUx9HMZdHekRo4jJGuOi-7kqTZM0PHJoucqEnaoa1CWFLCcj-oiQjZfaNawMvGN9L3AOYR9LWDIPk6TojKeGCMH8Ymyvrq08d_cO94nnXbPZIjmypr4s62OLK5noeisHQyc46YQLBEQGpouCFdRAPFO4X922hGc2XoXR2xMp-pNO7Slse7qlpOlUiTQVIzPyqnEIUWPFPOwjKf8OkiE2urg3j-3Wc',
    stats: { duration: 6.5, range: 20 }
  },
  {
    id: 'SUN_CRYSTAL',
    name: 'Sun Crystals',
    effect: 'Ghost Path',
    description: 'Captures the last light of day to reveal footprints of those who came before.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkHcTOSaDtO4YulT8wqk-MFvH8Uhr6xU13NLdlbXPqIhdHknh_zpHPK2Ws3cyZodsMl91xTDIMuIsX5BdYk8_KGhR7TeopsnMlN17FOYPpokJ2QsPtObOlM0cRriP6ZyvuN4EatSNTaaCqjTtc7o_7_HlfGcztqaD-fvOkC4DICEAl0wZlMNrDiwxnpM1n6PSqEefc3BBoysMh-sgUG4Eajfghv5xONS1zQBn3U3b66SdNZIJ7X9IPhY-xEcW3V1IKmyPLiZa70P4',
    stats: { duration: 8.0, range: 15 }
  },
  {
    id: 'OBSIDIAN',
    name: 'Obsidian',
    effect: 'Tracking',
    description: 'Volcanic glass absorbs ambient shadows, highlighting enemy movements.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtlfK8ZBV0K7BLbWRPC1uMJWQvTtrqnrNRySD5VyPXSSbn5pPwEWtObmUB_orgjvlYisbuD0nL3BS4OnJgpCM3p0fdfwUBhkJ-Wl6FrrWa6nKAhyEsSSPjlR7gCjnNdDSLKkQLuww81h4sDZG3-kqG07HuPv3TajB8lFrEReaGG4CY5Doewu8W39Zo2etuMt3tUwTVmqynFGCqHsEHaxozlzjpi3Gq0UjQU9gKDT0KlmNtiT8VAG9-iox4KTmqp0xKHRteYQ6loQs',
    stats: { duration: 5.0, range: 35 }
  }
];

const CompassUpgradeScreen: React.FC<CompassUpgradeScreenProps> = ({ onBack }) => {
  const [selectedUpgrade, setSelectedUpgrade] = useState<UpgradeType>('LODESTONE');
  const [isInfusing, setIsInfusing] = useState(false);

  const selectedData = UPGRADES.find(u => u.id === selectedUpgrade) || UPGRADES[0];
  const currentStats = { duration: 5.0, range: 15 };

  const handleInfuse = () => {
    setIsInfusing(true);
    setTimeout(() => {
        setIsInfusing(false);
    }, 2000);
  };

  return (
    <div className="h-full w-full bg-[#101622] text-white font-serif antialiased overflow-hidden flex flex-col relative select-none">
      
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618557219623-1c39050f5a35?q=80&w=1000&auto=format&fit=crop')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#101622] via-[#101622]/90 to-[#0a0d14] z-0"></div>

      {/* Styles specific to this magical screen */}
      <style>{`
        .text-magic-blue { color: #2b6cee; }
        .bg-magic-blue { background-color: #2b6cee; }
        .border-magic-blue { border-color: #2b6cee; }
        .shadow-magic { box-shadow: 0 0 20px rgba(43,108,238,0.3); }
        .text-gold { color: #d4af37; }
        .border-gold { border-color: #d4af37; }
      `}</style>

      {/* Header */}
      <div className="flex items-center px-4 py-4 justify-between backdrop-blur-sm bg-[#101622]/30 sticky top-0 z-50 border-b border-white/5 shrink-0">
        <button 
            onClick={onBack}
            className="text-white/80 hover:text-white transition-colors flex size-10 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 active:scale-95 cursor-pointer"
        >
            <span className="material-symbols-outlined text-xl">arrow_back</span>
        </button>
        <h2 className="text-gold text-xl font-medium tracking-wide drop-shadow-sm font-display">Mystical Compass</h2>
        <div className="flex items-center justify-end gap-1.5 bg-black/40 px-3 py-1.5 rounded-full border border-gold/20">
            <span className="material-symbols-outlined text-magic-blue text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            <p className="text-slate-200 text-sm font-bold tracking-wide font-sans">1,250</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-32 no-scrollbar relative z-10">
        
        {/* Central Artifact (Hero) */}
        <div className="relative w-full aspect-[4/3] flex items-center justify-center py-6">
            {/* Glow effect behind compass */}
            <div className={`absolute w-48 h-48 bg-magic-blue/20 rounded-full blur-[60px] transition-all duration-1000 ${isInfusing ? 'scale-150 opacity-80' : 'animate-pulse'}`}></div>
            
            {/* Compass Image Container */}
            <div className={`relative w-64 h-64 transition-transform duration-700 hover:scale-105 ${isInfusing ? 'animate-spin-slow' : ''}`}>
                <div 
                    className="w-full h-full bg-center bg-no-repeat bg-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]" 
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCBwa8sMfbFLPEFEe-yQ5d547huBa2IYvXtg5-Mo1aUMZiyaGnyAsAm_9JoCY_Cpd4RKrb0hOjaQTGza3n1BgZxLH4y5THjPhrwM2LlyLmi-sd3qy-DMuNaokVmHc9zk1ZUJqVw3c85ISwX2GIPNe37kPUWhBKn3TWxfsTSo1nJ71SENX9KyCjBuND6ntMPrIY8VlA8Nxn0ysFL8jCI9nv1VECYEIbOhhHjks1WywdnjLys186_lkNGg6_zBW_SoKmFLyf0QKXwIhU")' }}
                ></div>
                
                {/* Floating particles effect */}
                {!isInfusing && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                        <div className="absolute top-[20%] right-[20%] w-1.5 h-1.5 bg-magic-blue rounded-full blur-[1px] opacity-80 animate-bounce"></div>
                        <div className="absolute bottom-[30%] left-[25%] w-1 h-1 bg-magic-blue rounded-full blur-[0.5px] opacity-60"></div>
                    </div>
                )}
            </div>
        </div>

        {/* Headline */}
        <div className="px-6 text-center space-y-1 mb-6">
            <h3 className="text-white text-2xl font-serif italic font-medium leading-tight">Select Artifact to Infuse</h3>
            <p className="text-white/40 text-sm font-sans">Choose a path to channel ancient power</p>
        </div>

        {/* Stats Comparison Overlay */}
        <div className="mx-4 mb-6 p-5 rounded-lg border border-gold/30 bg-[#1e232d]/85 backdrop-blur-md shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
            
            <div className="flex items-center justify-between mb-4">
                <span className="text-gold font-bold text-sm uppercase tracking-widest font-sans opacity-80">Current Stats</span>
                <span className="text-magic-blue font-bold text-sm uppercase tracking-widest font-sans flex items-center gap-1">
                    Projected
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
            </div>

            <div className="grid grid-cols-2 gap-4 divide-x divide-white/10">
                <div className="flex flex-col gap-1 pr-2">
                    <p className="text-white/60 text-sm font-sans">Effect Duration</p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-white text-xl font-medium font-display">{currentStats.duration}s</span>
                        <span className="text-[#0bda5e] text-sm font-medium flex items-center font-sans">
                            <span className="material-symbols-outlined text-[14px]">arrow_upward</span> 
                            {(selectedData.stats.duration - currentStats.duration).toFixed(1)}s
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-1 pl-4">
                    <p className="text-white/60 text-sm font-sans">Magic Range</p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-white text-xl font-medium font-display">{currentStats.range}m</span>
                        <span className="text-[#0bda5e] text-sm font-medium flex items-center font-sans">
                            <span className="material-symbols-outlined text-[14px]">arrow_upward</span> 
                            {selectedData.stats.range - currentStats.range}m
                        </span>
                    </div>
                </div>
            </div>
        </div>

        {/* Upgrade Path Selectors (Grid) */}
        <div className="grid grid-cols-3 gap-3 px-4 pb-8">
            {UPGRADES.map((upgrade) => (
                <button 
                    key={upgrade.id}
                    onClick={() => setSelectedUpgrade(upgrade.id)}
                    className={`group relative flex flex-col items-center gap-3 p-3 rounded-xl border transition-all transform active:scale-95
                        ${selectedUpgrade === upgrade.id 
                            ? 'bg-gradient-to-b from-[#252a33] to-[#151921] border-magic-blue ring-1 ring-magic-blue/50 shadow-magic' 
                            : 'bg-[#1c1f26]/80 border-white/5 hover:border-white/20 hover:bg-[#252a33]'}
                    `}
                >
                    {selectedUpgrade === upgrade.id && (
                        <div className="absolute -top-2 -right-2 bg-magic-blue text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm z-10 font-sans">ACTIVE</div>
                    )}
                    
                    <div className={`w-16 h-16 rounded-full bg-black/40 border border-white/5 flex items-center justify-center p-2 transition-colors ${selectedUpgrade === upgrade.id ? 'bg-magic-blue/10' : ''}`}>
                        <div 
                            className="w-full h-full bg-center bg-no-repeat bg-contain" 
                            style={{ backgroundImage: `url('${upgrade.image}')` }}
                        ></div>
                    </div>
                    
                    <div className={`text-center transition-opacity ${selectedUpgrade === upgrade.id ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
                        <p className="text-white/90 text-sm font-medium leading-tight font-display">{upgrade.name}</p>
                        <p className={`text-[10px] font-sans font-medium mt-1 tracking-wide uppercase ${selectedUpgrade === upgrade.id ? 'text-magic-blue' : 'text-white/40'}`}>
                            {upgrade.effect}
                        </p>
                    </div>
                </button>
            ))}
        </div>

      </div>

      {/* Sticky Footer Action Button */}
      <div className="absolute bottom-0 left-0 w-full p-6 pb-8 bg-gradient-to-t from-[#101622] via-[#101622] to-transparent backdrop-blur-[2px] z-50">
        <button 
            onClick={handleInfuse}
            disabled={isInfusing}
            className="w-full group relative overflow-hidden bg-magic-blue hover:bg-blue-600 text-white font-serif text-lg font-medium py-4 px-6 rounded-lg shadow-[0_0_20px_rgba(43,108,238,0.4)] transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
        >
            {/* Button Glow Effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            
            <div className="relative flex items-center justify-center gap-3">
                <span className={`material-symbols-outlined ${isInfusing ? 'animate-spin' : ''}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                    {isInfusing ? 'autorenew' : 'auto_fix_high'}
                </span>
                <span>{isInfusing ? 'Infusing...' : 'Infuse Compass'}</span>
                {!isInfusing && <span className="text-white/70 text-sm font-sans font-normal ml-2 bg-black/20 px-2 py-0.5 rounded">-500 Mana</span>}
            </div>
        </button>
      </div>

    </div>
  );
};

export default CompassUpgradeScreen;
