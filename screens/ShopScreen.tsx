import React from 'react';
import { useGame } from '../GameContext';

interface ShopScreenProps {
  onNavigate: () => void;
  onOpenMuseum?: () => void;
  onGoToArmory?: () => void;
  onOpenJournal?: () => void;
  onOpenToolShop?: () => void;
  onOpenDailyReward?: () => void;
  onOpenWorkshop?: () => void;
  onOpenSmuggler?: () => void;
  onOpenWarRoom?: () => void;
  onOpenSocial?: () => void;
  onOpenTutorial?: () => void;
  onOpenAscension?: () => void;
  onOpenDeath?: () => void;
  onOpenRitual?: () => void;
  onOpenNightRun?: () => void;
  onOpenFusionApparatus?: () => void;
  onOpenIconSheet?: () => void;
  onOpenTempleEntrance?: () => void;
  onOpenSeasonPass?: () => void;
  onOpenCredits?: () => void;
  onOpenCommunityExpedition?: () => void;
  onOpenForkSelection?: () => void;
  onOpenFieldMapOverlay?: () => void;
  onOpenCavePainting?: () => void;
  onOpenBossWarning?: () => void;
  onOpenBoobyTrap?: () => void;
  onOpenCompassUpgrade?: () => void;
}

const ShopScreen: React.FC<ShopScreenProps> = ({ 
  onNavigate, 
  onOpenMuseum, 
  onGoToArmory, 
  onOpenJournal, 
  onOpenToolShop, 
  onOpenDailyReward,
  onOpenWorkshop,
  onOpenSmuggler,
  onOpenWarRoom,
  onOpenSocial,
  onOpenTutorial,
  onOpenAscension,
  onOpenDeath,
  onOpenRitual,
  onOpenNightRun,
  onOpenFusionApparatus,
  onOpenIconSheet,
  onOpenTempleEntrance,
  onOpenSeasonPass,
  onOpenCredits,
  onOpenCommunityExpedition,
  onOpenForkSelection,
  onOpenFieldMapOverlay,
  onOpenCavePainting,
  onOpenBossWarning,
  onOpenBoobyTrap,
  onOpenCompassUpgrade
}) => {
  const { credits, addToInventory } = useGame();

  const handleRun = () => {
      // Simulate purchasing supplies for the run
      addToInventory('supplies', 10);
      onNavigate();
  };
  
  return (
    <div className="h-full w-full bg-[#0c0a09] font-sans relative overflow-hidden flex flex-col">
      {/* --- Cinematic Background --- */}
      <div className="fixed inset-0 z-0">
        {/* Base Camp at Dusk Image */}
        <img 
          src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=1974&auto=format&fit=crop" 
          alt="Base Camp" 
          className="w-full h-full object-cover opacity-60 brightness-[0.7] contrast-125 transform scale-105"
        />
        
        {/* Vignette & Color Grading */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_60%,rgba(200,100,50,0.1),transparent_70%)] mix-blend-overlay"></div>

        {/* Animated Embers (Simulated) */}
        <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-64 h-64 bg-orange-600/20 blur-[80px] rounded-full animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse mix-blend-screen"></div>
      </div>

      {/* --- Main Layout --- */}
      <div className="relative z-10 flex-1 flex flex-col justify-between p-6">
        
        {/* Top: Profile & Currency */}
        <div className="flex justify-between items-start">
           {/* Profile Card - Dirty Glass */}
           <div className="relative overflow-hidden rounded-sm border border-white/10 bg-stone-900/40 backdrop-blur-sm p-3 flex gap-3 shadow-2xl">
              {/* Texture Overlay */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-30 pointer-events-none"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1760&auto=format&fit=crop"
                alt="Avatar"
                className="w-12 h-12 rounded-sm border border-[#6b5d4d] object-cover grayscale-[0.2]"
              />
              <div className="flex flex-col justify-center relative z-10">
                <span className="text-[#c5a059] font-display font-bold text-xs uppercase tracking-[0.2em] mb-0.5">Explorer</span>
                <span className="text-[#e3dacb] font-serif text-lg leading-none tracking-wide">Max</span>
                <div className="w-full h-px bg-white/10 mt-1 mb-0.5"></div>
                <span className="text-[#8c7b66] text-[9px] uppercase tracking-wider font-bold">Level 12</span>
              </div>
           </div>

           {/* Currency - Minimalist */}
           <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-black/50 border border-[#3d342b] backdrop-blur-md">
                 <span className="text-[#e3dacb] font-sans font-bold text-sm tracking-widest">{credits.toLocaleString()}</span>
                 <span className="material-symbols-outlined text-[#c5a059] text-base drop-shadow-sm">monetization_on</span>
              </div>
           </div>
        </div>

        {/* Middle: Ambience / Diegetic Elements */}
        <div className="flex-1 flex items-end pb-8">
            <div className="relative">
               {/* Daily Quest Journal */}
               <div 
                 onClick={onOpenJournal}
                 className="w-56 bg-[#e3dacb] p-4 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.8)] transform -rotate-2 border-l-4 border-[#4a3b2a] relative overflow-hidden group hover:rotate-0 transition-transform duration-500 cursor-pointer"
               >
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-50 mix-blend-multiply"></div>
                  <h3 className="relative z-10 text-[#1a1410] font-serif font-bold text-lg border-b border-[#8c7b66] pb-1 mb-2">Field Notes</h3>
                  <p className="relative z-10 text-[#4a3b2a] font-handwriting text-lg leading-tight mb-2">"Strange readings coming from the sunken ruins..."</p>
                  <div className="relative z-10 flex items-center gap-2 mt-3">
                     <div className="h-1.5 flex-1 bg-[#bfa889] rounded-full overflow-hidden">
                       <div className="h-full w-[45%] bg-[#6b5d4d]"></div>
                     </div>
                     <span className="text-[#6b5d4d] font-bold text-[10px]">45%</span>
                  </div>
               </div>
            </div>
        </div>

        {/* Right: Vertical Navigation Menu */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 min-w-[140px] flex flex-col justify-center items-end pr-6 pointer-events-none">
           <div className="flex flex-col gap-6 pointer-events-auto overflow-y-auto no-scrollbar max-h-full py-4 items-end">
              
              <MenuItem label="Run" subLabel="Start Expedition" onClick={handleRun} icon="directions_run" active />
              <MenuItem label="Journey" subLabel="Painted Timeline" onClick={onOpenCavePainting} icon="fingerprint" />
              <MenuItem label="Boss" subLabel="Warning" onClick={onOpenBossWarning} icon="warning" />
              <MenuItem label="Field Map" subLabel="Tactical View" onClick={onOpenFieldMapOverlay} icon="explore" />
              <MenuItem label="Compass" subLabel="Infusion" onClick={onOpenCompassUpgrade} icon="explore_off" />
              <MenuItem label="Next Path" subLabel="Choose Route" onClick={onOpenForkSelection} icon="alt_route" />
              <MenuItem label="Prologue" subLabel="Cinematic Intro" onClick={onOpenTempleEntrance} icon="movie" />
              <MenuItem label="Notices" subLabel="Expedition Board" onClick={onOpenCommunityExpedition} icon="campaign" />
              <MenuItem label="Season" subLabel="Ancient Mural" onClick={onOpenSeasonPass} icon="map" />
              <MenuItem label="Merchant" subLabel="Tool Shop" onClick={onOpenToolShop} icon="storefront" />
              <MenuItem label="Workshop" subLabel="Gear Forge" onClick={onOpenWorkshop} icon="construction" />
              <MenuItem label="Equipment" subLabel="Manage Gear" onClick={onGoToArmory} icon="backpack" />
              <MenuItem label="The Vault" subLabel="Soul Ascension" onClick={onOpenAscension} icon="local_fire_department" />
              <MenuItem label="Relics" subLabel="Museum" onClick={onOpenMuseum} icon="diamond" />
              <MenuItem label="Atlas" subLabel="World Map" onClick={onNavigate} icon="map" />
              <MenuItem label="Black Market" subLabel="Smuggler" onClick={onOpenSmuggler} icon="visibility_off" />
              <MenuItem label="Siege" subLabel="War Room" onClick={onOpenWarRoom} icon="swords" />
              <MenuItem label="Challenge" subLabel="Message in Bottle" onClick={onOpenSocial} icon="sailing" />
              <MenuItem label="Guide" subLabel="Tutorial" onClick={onOpenTutorial} icon="school" />
              <MenuItem label="Daily Gift" subLabel="Free Reward" onClick={onOpenDailyReward} icon="featured_seasonal_and_gifts" />
              <MenuItem label="Ritual" subLabel="Blood Pact" onClick={onOpenRitual} icon="favorite" />
              <MenuItem label="Apparatus" subLabel="Fusion V2" onClick={onOpenFusionApparatus} icon="science" />
              <MenuItem label="Codex" subLabel="Icons" onClick={onOpenIconSheet} icon="auto_stories" />
              <MenuItem label="Night Ops" subLabel="Dark Run" onClick={onOpenNightRun} icon="dark_mode" />
              <MenuItem label="Legacy" subLabel="Credits" onClick={onOpenCredits} icon="history_edu" />
              <MenuItem label="Failed" subLabel="Death Screen" onClick={onOpenDeath} icon="skull" />
              <MenuItem label="Trap Death" subLabel="Cinematic" onClick={onOpenBoobyTrap} icon="dangerous" />

              {/* Version Indicator */}
              <div className="pt-4 mt-4 border-t border-[#c5a059]/20 w-full text-right">
                <span className="text-[8px] font-mono text-[#c5a059]/40 tracking-widest uppercase">v1.0 Gold Master</span>
              </div>

           </div>
           
           {/* Decorative Line on the right */}
           <div className="absolute right-6 top-[20%] bottom-[20%] w-px bg-gradient-to-b from-transparent via-[#c5a059]/30 to-transparent"></div>
        </div>

      </div>

    </div>
  );
};

const MenuItem = ({ label, subLabel, onClick, icon, active }: { label: string, subLabel: string, onClick?: () => void, icon: string, active?: boolean }) => (
  <button 
    onClick={onClick}
    className={`group relative flex flex-col items-end text-right transition-all duration-300 ${active ? 'scale-105' : 'hover:scale-105 opacity-80 hover:opacity-100'}`}
  >
     <div className="flex items-center gap-3 mb-1">
        <span className={`text-2xl font-display font-bold uppercase tracking-[0.1em] drop-shadow-md ${active ? 'text-[#e3dacb]' : 'text-[#8c7b66] group-hover:text-[#e3dacb]'}`}>
          {label}
        </span>
        <div className={`w-8 h-8 rounded-full border flex items-center justify-center shadow-lg transition-colors ${active ? 'bg-[#c5a059] border-[#e3dacb] text-[#1a1410]' : 'bg-[#1a1410]/80 border-[#3d342b] text-[#5c4d41] group-hover:border-[#c5a059] group-hover:text-[#c5a059]'}`}>
           <span className="material-symbols-outlined text-lg">{icon}</span>
        </div>
     </div>
     <span className="text-[10px] font-sans font-bold text-[#6b5d4d] uppercase tracking-widest mr-11 group-hover:text-[#c5a059] transition-colors">
       {subLabel}
     </span>
     
     {/* Active Indicator Line */}
     {active && <div className="absolute top-1/2 -right-6 w-4 h-0.5 bg-[#c5a059] shadow-[0_0_8px_#c5a059]"></div>}
  </button>
);

export default ShopScreen;