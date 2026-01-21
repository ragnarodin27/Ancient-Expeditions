import React, { useState } from 'react';

interface GearWorkshopScreenProps {
  onBack: () => void;
}

type Tab = 'Stitching' | 'Forging';

const GearWorkshopScreen: React.FC<GearWorkshopScreenProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<Tab>('Stitching');

  return (
    <div className="relative flex h-full w-full flex-col bg-[#1e1711] overflow-hidden font-display select-none">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-primary/10 to-transparent mix-blend-overlay"></div>
      </div>

      {/* Top App Bar */}
      <div className="relative z-10 flex items-center p-4 justify-between bg-gradient-to-b from-[#181511] to-transparent shrink-0">
        <button 
            onClick={onBack}
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-wood-dark border border-wood-light text-white hover:bg-wood-light transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-white text-xl font-bold leading-tight tracking-wide text-shadow">Gear Workshop</h2>
        <button className="flex size-10 shrink-0 items-center justify-center rounded-full bg-wood-dark border border-wood-light text-white hover:bg-wood-light transition-colors relative">
          <span className="material-symbols-outlined">backpack</span>
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold">!</span>
        </button>
      </div>

      {/* Main Content Scrollable Area */}
      <div className="relative z-10 flex-1 overflow-y-auto pb-32 no-scrollbar">
        {/* Hero / 3D Viewer Placeholder */}
        <div className="px-4 py-2">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-wood-light bg-black group">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-wood-light/30 to-black opacity-50"></div>
            {/* 3D Item Image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFcYHOyEHUjBH40IXpdbqC6l5OXIgcCkK8P_BVn4vn-sHXJ697qz3nZrnPgALJhIqGMB_ug3SvUGz_orJ7pfBKRf1KHaakyxYbFyGpuCSBFQRI628XRrWbPr1XU5UM4e36PzT0GjFwONH4HZ8y7KOGLXTVpHJ3o9c96ByQneM4zlg7SH6eFGOch3iaI6N25DjSTsX_hYCzOHbzS70Wd35_9ie2XQsY7VnRNEgqn7Q79konivmDRxAJsrKvEWOjxLrLAns5ItVT0L8"
                alt="Ancient Tunic"
              />
            </div>
            {/* Item Info Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-12">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold text-white text-shadow tracking-wide">Ancient Tunic</h3>
                  <p className="text-primary text-sm font-medium tracking-wider uppercase">Tier IV • Light Armor</p>
                </div>
                <div className="flex items-center gap-1 text-parchment-dark text-xs bg-black/40 px-2 py-1 rounded backdrop-blur-sm border border-white/10 cursor-help hover:bg-black/60 transition-colors">
                  <span className="material-symbols-outlined text-[16px]">info</span>
                  <span>Details</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upgrade Paths (Tabs) */}
        <div className="px-4 mt-6">
          <div className="flex rounded-lg bg-black/30 p-1 border border-wood-light/30">
            <button 
                onClick={() => setActiveTab('Stitching')}
                className={`flex flex-1 flex-col items-center justify-center gap-1 rounded-md py-3 transition-all duration-300 ${activeTab === 'Stitching' ? 'bg-wood-dark border border-wood-light shadow-lg' : 'text-wood-light hover:text-parchment hover:bg-white/5'}`}
            >
              <span className={`material-symbols-outlined ${activeTab === 'Stitching' ? 'text-white' : 'text-current'}`} style={{ fontVariationSettings: "'FILL' 1" }}>gesture</span>
              <span className={`text-sm font-bold tracking-wide ${activeTab === 'Stitching' ? 'text-white' : 'text-current'}`}>Stitching</span>
            </button>
            <button 
                onClick={() => setActiveTab('Forging')}
                className={`flex flex-1 flex-col items-center justify-center gap-1 rounded-md py-3 transition-all duration-300 ${activeTab === 'Forging' ? 'bg-wood-dark border border-wood-light shadow-lg' : 'text-wood-light hover:text-parchment hover:bg-white/5'}`}
            >
              <span className={`material-symbols-outlined ${activeTab === 'Forging' ? 'text-white' : 'text-current'}`}>construction</span>
              <span className={`text-sm font-bold tracking-wide ${activeTab === 'Forging' ? 'text-white' : 'text-current'}`}>Forging</span>
            </button>
          </div>
        </div>

        {/* Stats (Parchment Style) */}
        <div className="px-4 mt-6">
          <div className="relative bg-parchment text-[#2a2218] rounded-lg p-5 shadow-[0_4px_20px_rgba(0,0,0,0.5)] border-2 border-[#b0a08b]">
            {/* Parchment Texture Overlay (CSS Pattern) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none rounded-lg bg-canvas-pattern"></div>
            
            <div className="relative z-10">
              <h4 className="text-sm font-bold uppercase tracking-widest border-b border-[#a3927d] pb-2 mb-4 opacity-70 flex items-center justify-between">
                <span>Upgrade Preview</span>
                <span className="text-[10px] bg-[#a3927d] text-parchment px-1.5 py-0.5 rounded">Level 5 → 6</span>
              </h4>
              
              <div className="space-y-4 font-sans">
                {/* Stat Row 1 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded bg-[#a3927d]/20 text-[#3e3428]">
                      <span className="material-symbols-outlined text-[20px]">speed</span>
                    </div>
                    <span className="font-bold text-lg font-display">Speed</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold opacity-60">15</span>
                    <span className="text-sm text-[#544a3b]">→</span>
                    <span className="text-2xl font-bold text-green-800">17</span>
                    <span className="text-xs font-bold text-green-700 bg-green-100/50 px-1 rounded">+13%</span>
                  </div>
                </div>
                
                {/* Stat Row 2 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded bg-[#a3927d]/20 text-[#3e3428]">
                      <span className="material-symbols-outlined text-[20px]">shield</span>
                    </div>
                    <span className="font-bold text-lg font-display">Protection</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold opacity-60">25</span>
                    <span className="text-sm text-[#544a3b]">→</span>
                    <span className="text-2xl font-bold text-green-800">30</span>
                    <span className="text-xs font-bold text-green-700 bg-green-100/50 px-1 rounded">+20%</span>
                  </div>
                </div>
                
                {/* Stat Row 3 */}
                <div className="flex items-center justify-between opacity-50">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded bg-[#a3927d]/20 text-[#3e3428]">
                      <span className="material-symbols-outlined text-[20px]">directions_run</span>
                    </div>
                    <span className="font-bold text-lg font-display">Agility</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold">10</span>
                    <span className="text-xs font-bold text-[#544a3b] px-1 rounded">No Change</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-6"></div>
        </div>
      </div>

      {/* Footer / Action Area */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        {/* Gradient fade up */}
        <div className="h-12 w-full bg-gradient-to-t from-[#181511] to-transparent pointer-events-none absolute -top-12"></div>
        
        <div className="bg-[#181511] border-t border-wood-light p-4 pb-8 flex flex-col gap-4 shadow-2xl">
          {/* Resources Cost */}
          <div className="flex justify-center gap-6">
            <div className="flex items-center gap-2 text-white/80 bg-wood-dark/50 px-3 py-1.5 rounded-lg border border-white/5">
              <span className="material-symbols-outlined text-primary text-[18px]">texture</span> {/* Leather */}
              <span className="text-sm font-medium font-sans">245</span>
              <span className="text-xs text-red-400 font-bold ml-1 font-sans">-120</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 bg-wood-dark/50 px-3 py-1.5 rounded-lg border border-white/5">
              <span className="material-symbols-outlined text-gray-400 text-[18px]">view_in_ar</span> {/* Iron */}
              <span className="text-sm font-medium font-sans">40</span>
              <span className="text-xs text-white/30 ml-1 font-sans">-0</span>
            </div>
          </div>
          
          {/* Forge Button */}
          <button className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-b from-[#4a4a4a] to-[#2a2a2a] p-0.5 shadow-[0_4px_0_#1a1a1a] active:shadow-none active:translate-y-[4px] transition-all">
            {/* Glowing Border Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            {/* Button Inner */}
            <div className="relative flex h-14 items-center justify-center gap-3 rounded-[5px] bg-gradient-to-b from-[#3a3a3a] to-[#1f1f1f] border border-white/10 px-6">
              {/* Heat Glow */}
              <div className="absolute bottom-0 left-0 h-1/2 w-full bg-primary/10 blur-md rounded-[5px]"></div>
              <span className="material-symbols-outlined text-primary text-glow group-hover:text-white transition-colors">healing</span>
              <span className="text-lg font-black tracking-widest text-primary text-shadow group-hover:text-white transition-colors uppercase">Stitch Upgrade</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GearWorkshopScreen;