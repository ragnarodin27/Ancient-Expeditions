import React, { useState, useEffect } from 'react';
import { useGame } from '../GameContext';

interface ArmoryScreenProps {
  onBack?: () => void;
}

// --- Types ---
type ViewMode = 'dossier' | 'loadout';
type DossierTab = 'overview' | 'skills' | 'log';
type Rarity = 'Common' | 'Rare' | 'Epic' | 'Legendary';
type SlotType = 'Weapon' | 'Tool' | 'Relic';
type SortMethod = 'rarity' | 'power' | 'name';

interface GearItem {
  id: string;
  name: string;
  type: SlotType;
  rarity: Rarity;
  stats: {
    power: number;  // Combat/Effectiveness
    weight: number; // Mobility (Lower is often better)
    utility: number; // Special interactions
  };
  description: string;
  lore: string;
  image: string;
  quantity: number;
}

interface HeroData {
  id: string;
  name: string;
  title: string;
  stats: {
    speed: number;
    durability: number;
    luck: number;
  };
  description: string;
  image: string;
  portrait: string;
  locked?: boolean;
}

interface SkillNode {
  id: string;
  name: string;
  cost: number;
  description: string;
  icon: string;
  type: 'Passive' | 'Active';
  parent?: string;
}

interface CombatLogEntry {
  id: string;
  date: string;
  location: string;
  outcome: 'Victory' | 'Defeat' | 'Retreat';
  loot: string;
}

// --- Data ---
const heroes: HeroData[] = [
  {
    id: 'axel',
    name: 'Axel',
    title: 'Speedster Specialist',
    stats: { speed: 80, durability: 50, luck: 40 },
    description: "Known for rapid tomb navigation and quick reflexes. A veteran explorer with a knack for finding hidden pathways.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbNQ9tgMrdNHXotfNMg5M2a8s-FYQfuSp-1MrJom1qHjjxRQDK0LgaIw1s0xR0RqfazTPQ0AKFKBNwp76cGa1JlAxZakpjK5LMUeW-q5oaF9BVh2_PRGi7afkqRtIJnXwhLWt238RqqXUXYT9g3LfExb1hH_7SMj_8DBmK9vUCTgmSxdYWNB8PDkpucdCLGprwWbiUFdH3SfPon_pM0c5Rh23E9S0z6b7gLDlEIODTSgWuFlFl7loQ6jTJOpR0g6KMpcsjNHU6M9E',
    portrait: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUsHe9EJyNmQDpDrZpsuJXhm6YGypixBXoGl2kv9JcYDWZ2NjpY3dOe_lh4xyQUxvktZh0SaSDVJCB4O5-pPw6MOjiwCE-VLd4sAIJT24N7zpv-sVC-y5b63uS9-dLKm4pPQH0PcIW15fNykv8CcV0GWiqk2EGSj2fIl-Zx6ckAJCsV1MXD169xRdrESVHN8EVinfra6_atKi0gCtIzGcCDeTy0UFOmAoXM2twZr2QTDztupfBeDEJLw495r3_sznZpJ7s-P_to9A'
  },
  {
    id: 'zara',
    name: 'Zara',
    title: 'Relic Hunter',
    stats: { speed: 60, durability: 40, luck: 90 },
    description: "An expert in ancient linguistics and trap disarming. Her intuition often leads to the rarest artifacts.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBr5r6mcX_6Td-EwizwU-RqlgK5ddlNXgzb8VDYeo6u2e67PbUS86m0dnGCfc0XRV4BfoJf22NC7sbpyZaNqr1MhNfmj7cgvXZfm5aU3HQk9cMx65SMM4xznh7GGhCY3wP6bNvrvte6dlhnsTwdzAMl49fMzlDcqC54gumbZbCNT-oij1SoPC3eiNJ9vOKhZavXM-MSuO-HPhpSXQQYgDkXxurBq4xxLwB-PCamyeQ1U4KSrNeraqB9QDGYNy3m78fM4TLo0FAvn7c',
    portrait: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBr5r6mcX_6Td-EwizwU-RqlgK5ddlNXgzb8VDYeo6u2e67PbUS86m0dnGCfc0XRV4BfoJf22NC7sbpyZaNqr1MhNfmj7cgvXZfm5aU3HQk9cMx65SMM4xznh7GGhCY3wP6bNvrvte6dlhnsTwdzAMl49fMzlDcqC54gumbZbCNT-oij1SoPC3eiNJ9vOKhZavXM-MSuO-HPhpSXQQYgDkXxurBq4xxLwB-PCamyeQ1U4KSrNeraqB9QDGYNy3m78fM4TLo0FAvn7c'
  },
  {
    id: 'rocco',
    name: 'Rocco',
    title: 'Demolitionist',
    stats: { speed: 40, durability: 90, luck: 30 },
    description: "When finesse fails, Rocco brings the boom. Heavy armor allows him to withstand collapsing tunnels.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtc08r2jO2BhO0OsMi5PCxNWesU8gCgfLUeOGeChGsatFREDHHK6QpwLdh-ZNIwqoxPMLbMwD3Iu91zqX920sga0eMmwozZKXM0gmzk4JbP3-DoHIDGQVcXGC4Qc-WDfrQk_xKtI7oE2529y0m2sgqYfFek1xkkJuCX7U80K7e9dfMGnA_iEELQ0_5-ypVNzP8Cbe94EvAvKZw5UKftY3UEPUaTtcyziHivsVZV2rypXqX_ZpNtklzChS-0RNnJo9y2lXCp6BCvM4',
    portrait: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtc08r2jO2BhO0OsMi5PCxNWesU8gCgfLUeOGeChGsatFREDHHK6QpwLdh-ZNIwqoxPMLbMwD3Iu91zqX920sga0eMmwozZKXM0gmzk4JbP3-DoHIDGQVcXGC4Qc-WDfrQk_xKtI7oE2529y0m2sgqYfFek1xkkJuCX7U80K7e9dfMGnA_iEELQ0_5-ypVNzP8Cbe94EvAvKZw5UKftY3UEPUaTtcyziHivsVZV2rypXqX_ZpNtklzChS-0RNnJo9y2lXCp6BCvM4'
  },
  {
    id: 'isolde',
    name: 'Isolde',
    title: 'Loremaster',
    stats: { speed: 55, durability: 45, luck: 70 },
    description: "A scholar obsessed with deciphering ancient texts. Her knowledge of glyphs often reveals hidden passages.",
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop',
    portrait: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop'
  },
  {
    id: 'locked',
    name: '???',
    title: 'Unknown',
    stats: { speed: 0, durability: 0, luck: 0 },
    description: "Character not yet discovered.",
    image: '',
    portrait: '',
    locked: true
  }
];

const mockSkills: Record<string, SkillNode[]> = {
  default: [
    { id: 's1', name: 'Basic Training', cost: 100, description: 'Increases base stats by 5%.', icon: 'fitness_center', type: 'Passive' },
    { id: 's2', name: 'Trap Awareness', cost: 250, description: 'Highlights nearby traps for 3s.', icon: 'visibility', type: 'Active', parent: 's1' },
    { id: 's3', name: 'Treasure Hunter', cost: 250, description: 'Gold drop rate +10%.', icon: 'savings', type: 'Passive', parent: 's1' },
    { id: 's4', name: 'Veteran', cost: 500, description: 'Unlock special ability slot.', icon: 'military_tech', type: 'Passive', parent: 's2' },
  ]
};

const mockLogs: Record<string, CombatLogEntry[]> = {
  default: [
    { id: 'l1', date: '2 hours ago', location: 'Misty Jungle', outcome: 'Victory', loot: '3 Gold, 1 Relic' },
    { id: 'l2', date: 'Yesterday', location: 'Sunken Temple', outcome: 'Retreat', loot: 'None' },
    { id: 'l3', date: '2 days ago', location: 'Cursed Highlands', outcome: 'Defeat', loot: 'Lost 50 Gold' },
  ]
};

const gearInventory: GearItem[] = [
  {
    id: 'machete',
    name: 'Iron Machete',
    type: 'Weapon',
    rarity: 'Common',
    stats: { power: 30, weight: 50, utility: 20 },
    description: "A standard issue blade. Reliable for clearing vines and fending off wildlife.",
    lore: "Forged in the industrial districts of the old city, this blade has seen more vines than combat.",
    image: 'https://images.unsplash.com/photo-1595166672322-c288f912e737?q=80&w=1964&auto=format&fit=crop',
    quantity: 1
  },
  {
    id: 'pistol_rusty',
    name: 'Service Revolver',
    type: 'Weapon',
    rarity: 'Rare',
    stats: { power: 65, weight: 30, utility: 10 },
    description: "Old but hits hard. The action is smooth despite the rust on the barrel.",
    lore: "Recovered from a smuggler's crash site. The serial numbers have been filed off.",
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=2070&auto=format&fit=crop',
    quantity: 1
  },
  {
    id: 'rifle_hunting',
    name: 'Marksman Rifle',
    type: 'Weapon',
    rarity: 'Epic',
    stats: { power: 85, weight: 70, utility: 15 },
    description: "Precision engineered for long-range engagements.",
    lore: "A custom build favored by the Royal Game Wardens. Illegal to own, deadly to use.",
    image: 'https://images.unsplash.com/photo-1585589266782-9612fdd4536f?q=80&w=2000&auto=format&fit=crop',
    quantity: 1
  },
  {
    id: 'macuahuitl',
    name: 'Obsidian Macuahuitl',
    type: 'Weapon',
    rarity: 'Epic',
    stats: { power: 88, weight: 65, utility: 10 },
    description: "A wooden club embedded with prism-sharp obsidian blades. Brutal and effective.",
    lore: "A ceremonial weapon taken from a temple guard. The obsidian is sharper than surgical steel.",
    image: 'https://images.unsplash.com/photo-1599557347206-8cb962c64dfc?q=80&w=1000&auto=format&fit=crop',
    quantity: 1
  },
  {
    id: 'dagger_sacrificial',
    name: 'Jade Dagger',
    type: 'Weapon',
    rarity: 'Legendary',
    stats: { power: 95, weight: 20, utility: 40 },
    description: "Ceremonial blade that hums with thirst. Exceptionally light and deadly.",
    lore: "Legend says it was used to carve the hearts of stars. It feels warm to the touch.",
    image: 'https://images.unsplash.com/photo-1615672963420-646731d1cb92?q=80&w=1000&auto=format&fit=crop',
    quantity: 1
  },
  {
    id: 'compass_gold',
    name: 'Navigator\'s Compass',
    type: 'Tool',
    rarity: 'Legendary',
    stats: { power: 0, weight: 10, utility: 95 },
    description: "It points to what you desire most, not just north. A true relic of the ancients.",
    lore: "Found in the captain's quarters of a ghost ship stranded in the desert.",
    image: 'https://images.unsplash.com/photo-1599939571322-792a326991f2?q=80&w=1000&auto=format&fit=crop',
    quantity: 1
  },
  {
    id: 'rope',
    name: 'Climbing Rope',
    type: 'Tool',
    rarity: 'Common',
    stats: { power: 0, weight: 40, utility: 50 },
    description: "Essential for descending into dark pits or scaling crumbling walls.",
    lore: "Woven from giant spider silk harvested from the Shadow Caves.",
    image: 'https://images.unsplash.com/photo-1595166672322-c288f912e737?q=80&w=1964&auto=format&fit=crop',
    quantity: 5
  },
  {
    id: 'grapple',
    name: 'Grappling Hook',
    type: 'Tool',
    rarity: 'Rare',
    stats: { power: 15, weight: 25, utility: 80 },
    description: "Allows for reaching otherwise inaccessible ledges. A thief's best friend.",
    lore: "Designed by the guild of shadows for silent infiltration.",
    image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1000&auto=format&fit=crop',
    quantity: 1
  },
  {
    id: 'torch_everburning',
    name: 'Ever-Burning Torch',
    type: 'Tool',
    rarity: 'Epic',
    stats: { power: 10, weight: 15, utility: 90 },
    description: "Never goes out, even underwater. Reveals hidden glyphs on walls.",
    lore: "The flame is fed by an alchemical core that has burned for centuries.",
    image: 'https://images.unsplash.com/photo-1542220970-d7a858567119?q=80&w=1000&auto=format&fit=crop',
    quantity: 1
  },
  {
    id: 'idol_obsidian',
    name: 'Obsidian Idol',
    type: 'Relic',
    rarity: 'Epic',
    stats: { power: 20, weight: 80, utility: 70 },
    description: "Vibrates with a low hum. It seems to ward off bad luck, at a cost.",
    lore: "A statue of a forgotten deity, its eyes seem to follow you in the dark.",
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2484&auto=format&fit=crop',
    quantity: 1
  },
  {
    id: 'amulet_scarab',
    name: 'Scarab Amulet',
    type: 'Relic',
    rarity: 'Rare',
    stats: { power: 0, weight: 5, utility: 60 },
    description: "Vibrates near gold. A greedy little thing.",
    lore: "Worn by the grave robbers of old, until the curse took them.",
    image: 'https://images.unsplash.com/photo-1605218427306-6354457e04c1?q=80&w=1000&auto=format&fit=crop',
    quantity: 1
  },
  {
    id: 'skull_crystal',
    name: 'Crystal Skull',
    type: 'Relic',
    rarity: 'Legendary',
    stats: { power: 5, weight: 15, utility: 100 },
    description: "It stares into your soul. Legend says it holds the knowledge of the stars.",
    lore: "One of the thirteen skulls said to control the cycles of time.",
    image: 'https://images.unsplash.com/photo-1618516969850-93a830b561df?q=80&w=1000&auto=format&fit=crop',
    quantity: 1
  },
  {
    id: 'compass_ancient',
    name: 'Ancient Compass',
    type: 'Tool',
    rarity: 'Legendary',
    stats: { power: 5, weight: 15, utility: 95 },
    description: "This compass doesn't point north, but towards your greatest desire.",
    lore: "Created by a mad cartographer who tried to map the dreamlands.",
    image: 'https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?q=80&w=1000&auto=format&fit=crop',
    quantity: 1
  }
];

const rarityColors: Record<Rarity, string> = {
  Common: '#9ca3af', // Gray
  Rare: '#3b82f6',   // Blue
  Epic: '#a855f7',   // Purple
  Legendary: '#eab308' // Gold
};

const ArmoryScreen: React.FC<ArmoryScreenProps> = ({ onBack }) => {
  const { inventory, addToInventory } = useGame();
  const [viewMode, setViewMode] = useState<ViewMode>('dossier');
  
  // Dossier State
  const [selectedHeroIndex, setSelectedHeroIndex] = useState(0);
  const [dossierTab, setDossierTab] = useState<DossierTab>('overview');
  const [heroXP, setHeroXP] = useState(350); // Mock XP
  const [unlockedSkills, setUnlockedSkills] = useState<string[]>(['s1']); // Mock unlocked skills
  
  const hero = heroes[selectedHeroIndex];
  const skills = mockSkills[hero.id] || mockSkills['default'];
  const combatLogs = mockLogs[hero.id] || mockLogs['default'];

  // Loadout State
  const [equippedIds, setEquippedIds] = useState<{ [key in SlotType]: string | null }>({
    Weapon: 'machete',
    Tool: 'rope',
    Relic: null
  });
  const [selectedSlot, setSelectedSlot] = useState<SlotType>('Weapon');
  const [sortMethod, setSortMethod] = useState<SortMethod>('rarity');
  const [rarityFilter, setRarityFilter] = useState<Rarity | 'All'>('All');
  
  // Preview item for comparison
  const [previewItemId, setPreviewItemId] = useState<string | null>(equippedIds['Weapon']);
  
  // Confirmation Modal State
  const [pendingEquip, setPendingEquip] = useState<string | null>(null);

  // Sync preview with equipped when slot changes
  useEffect(() => {
    setPreviewItemId(equippedIds[selectedSlot]);
  }, [selectedSlot]); 

  const equippedItem = equippedIds[selectedSlot] ? gearInventory.find(g => g.id === equippedIds[selectedSlot]) : null;
  const previewItem = gearInventory.find(g => g.id === previewItemId);
  
  // Check if item is owned (default items included)
  const isPreviewItemOwned = previewItem ? (inventory.includes(previewItem.id) || ['machete', 'rope'].includes(previewItem.id)) : false;

  // Sorting Logic
  const getSortedItems = (slot: SlotType) => {
    let items = gearInventory.filter(g => g.type === slot);
    
    // Rarity Filter
    if (rarityFilter !== 'All') {
      items = items.filter(g => g.rarity === rarityFilter);
    }

    const sorted = items.sort((a, b) => {
      if (sortMethod === 'power') return b.stats.power - a.stats.power;
      if (sortMethod === 'name') return a.name.localeCompare(b.name);
      if (sortMethod === 'rarity') {
        const order: Record<Rarity, number> = { Legendary: 4, Epic: 3, Rare: 2, Common: 1 };
        return order[b.rarity] - order[a.rarity];
      }
      return 0;
    });
    
    return sorted;
  };

  const slotItems = getSortedItems(selectedSlot);

  // Helper Functions
  const handleNextHero = () => {
    setSelectedHeroIndex((prev) => (prev + 1) % heroes.length);
    setDossierTab('overview');
  };
  const handlePrevHero = () => {
    setSelectedHeroIndex((prev) => (prev - 1 + heroes.length) % heroes.length);
    setDossierTab('overview');
  };

  // Trigger Modal
  const initiateEquip = () => {
    if (previewItem && previewItem.id !== equippedIds[selectedSlot]) {
        setPendingEquip(previewItem.id);
    }
  };

  const handleUnequip = () => {
    setEquippedIds(prev => ({ ...prev, [selectedSlot]: null }));
  };

  const handlePurchase = (itemId: string, cost: number) => {
      addToInventory(itemId, cost);
  };

  const unlockSkill = (skillId: string, cost: number) => {
    if (heroXP >= cost && !unlockedSkills.includes(skillId)) {
        setHeroXP(prev => prev - cost);
        setUnlockedSkills(prev => [...prev, skillId]);
    }
  };

  // Confirm Logic
  const confirmEquip = () => {
    if (pendingEquip) {
      setEquippedIds(prev => ({ ...prev, [selectedSlot]: pendingEquip }));
      setPendingEquip(null);
    }
  };

  return (
    <div className="h-full w-full bg-[#1c1c1c] font-display text-[#e3dacb] relative overflow-hidden flex flex-col selection:bg-[#c5a059] selection:text-black">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599696803186-b485055272a2?q=80&w=2560&auto=format&fit=crop')] bg-cover bg-center transition-opacity duration-1000"></div>
      <div className="absolute inset-0 bg-[#0a0806]/70 bg-grunge-overlay mix-blend-multiply"></div>
      
      {/* Header / Nav */}
      <div className="relative z-40 pt-4 px-4 flex justify-between items-center">
         <button onClick={onBack} className="flex size-10 items-center justify-center rounded-full bg-black/40 border border-[#8c7b66] text-[#e3dacb] hover:bg-[#8c7b66] hover:text-[#1a1410] transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
         </button>
         
         <div className="flex bg-black/40 rounded-full p-1 border border-[#3d342b]">
            <button 
              onClick={() => setViewMode('dossier')}
              className={`px-4 py-1.5 rounded-full uppercase tracking-[0.1em] font-bold text-xs transition-all ${viewMode === 'dossier' ? 'bg-[#c5a059] text-[#1a1410] shadow-lg' : 'text-[#8c7b66] hover:text-[#e3dacb]'}`}
            >
              Dossier
            </button>
            <button 
              onClick={() => setViewMode('loadout')}
              className={`px-4 py-1.5 rounded-full uppercase tracking-[0.1em] font-bold text-xs transition-all ${viewMode === 'loadout' ? 'bg-[#c5a059] text-[#1a1410] shadow-lg' : 'text-[#8c7b66] hover:text-[#e3dacb]'}`}
            >
              Loadout
            </button>
         </div>
         
         <div className="w-10"></div> {/* Spacer for balance */}
      </div>

      {/* --- CONFIRMATION MODAL --- */}
      {pendingEquip && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
           <div className="bg-[#1a1410] border-2 border-[#8c7b66] p-6 max-w-xs w-[85%] shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative text-center">
              {/* Decorative corners */}
              <div className="absolute top-1 left-1 w-3 h-3 border-t border-l border-[#c5a059]"></div>
              <div className="absolute top-1 right-1 w-3 h-3 border-t border-r border-[#c5a059]"></div>
              <div className="absolute bottom-1 left-1 w-3 h-3 border-b border-l border-[#c5a059]"></div>
              <div className="absolute bottom-1 right-1 w-3 h-3 border-b border-r border-[#c5a059]"></div>

              <h3 className="text-[#c5a059] font-display font-bold text-lg mb-4 uppercase tracking-widest">
                  Equip Item
              </h3>
              <p className="text-[#e3dacb] font-serif mb-8 text-sm leading-relaxed">
                Are you sure you want to equip this item?
              </p>
              <div className="flex gap-3 justify-center">
                  <button 
                    onClick={() => setPendingEquip(null)} 
                    className="px-4 py-2 border border-[#3d342b] text-[#8c7b66] uppercase text-xs font-bold tracking-widest hover:bg-[#2d241b] transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={confirmEquip} 
                    className="px-4 py-2 bg-[#c5a059] text-[#1a1410] border border-[#c5a059] uppercase text-xs font-bold tracking-widest hover:bg-[#e3dacb] transition-colors"
                  >
                    Confirm
                  </button>
              </div>
           </div>
        </div>
      )}

      {/* --- DOSSIER VIEW --- */}
      {viewMode === 'dossier' && (
        <div className="flex-1 flex flex-col relative z-10 animate-in fade-in slide-in-from-left-4 duration-500 overflow-hidden">
           {/* Dossier Content - Unchanged for brevity, assumed existing logic persists */}
            <div className="flex-1 flex items-center justify-center p-4 min-h-0">
              <div className="relative w-full max-w-sm h-full max-h-[600px] bg-[#e3dacb] bg-paper-texture rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.7)] transform rotate-1 flex flex-col overflow-hidden transition-all duration-300">
                  {/* Parchment styling */}
                  <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(40,30,20,0.3)] pointer-events-none"></div>
                  <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] pointer-events-none"></div>
                  
                  {/* Dossier Tabs */}
                  <div className="relative z-20 flex border-b border-[#8c7b66]/30 bg-[#d4c5b0]/20 shrink-0">
                      {(['overview', 'skills', 'log'] as DossierTab[]).map(tab => (
                          <button
                            key={tab}
                            onClick={() => setDossierTab(tab)}
                            className={`flex-1 py-3 text-center text-[10px] uppercase font-bold tracking-widest transition-colors
                                ${dossierTab === tab ? 'text-[#1a1410] bg-[#8c7b66]/10 shadow-inner border-b-2 border-[#1a1410]' : 'text-[#6b5d4d] hover:text-[#4a3b2a]'}
                            `}
                          >
                              {tab}
                          </button>
                      ))}
                  </div>

                  <div className="flex-1 overflow-y-auto relative z-10 no-scrollbar">
                      {dossierTab === 'overview' && (
                        <>
                          <div className="absolute top-6 left-4 opacity-90 z-20 mix-blend-multiply pointer-events-none">
                            <div className="w-14 h-14 rounded-full border-[3px] border-red-900/40 flex items-center justify-center transform -rotate-12">
                                <span className="material-symbols-outlined text-red-900/40 text-2xl font-bold">verified</span>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row p-4 pt-4 gap-3">
                              <div className="w-[45%] flex items-end justify-center relative">
                                {!hero.locked ? (
                                  <img 
                                    src={hero.image} 
                                    alt={hero.name} 
                                    className="object-cover h-64 w-auto max-w-none -ml-12 drop-shadow-[8px_8px_12px_rgba(0,0,0,0.5)] grayscale-[0.2] sepia-[0.2]"
                                  />
                                ) : (
                                  <div className="h-full w-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[#4a3b2a]/30 text-6xl">lock</span>
                                  </div>
                                )}
                              </div>
                              <div className="w-[55%] flex flex-col pt-2">
                                <h2 className="font-handwriting text-5xl text-[#1a1410] leading-none mb-1 opacity-90">{hero.name}</h2>
                                <div className="h-px w-12 bg-[#8c7b66] mb-2"></div>
                                <p className="font-handwriting text-[#4a3b2a] text-xl mb-6 leading-none tracking-wide">{hero.title}</p>
                                <div className="flex flex-col gap-5 mb-6">
                                    <StatSlider label="SPD" value={hero.stats.speed} />
                                    <StatSlider label="DUR" value={hero.stats.durability} />
                                    <StatSlider label="LCK" value={hero.stats.luck} />
                                </div>
                                <div className="bg-[#f0e6d2] p-3 rounded-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] border border-[#c5a059]/30 relative">
                                  <div className="absolute top-0 right-0 w-3 h-3 bg-[#c5a059]/20 shadow-sm transform -rotate-45 translate-x-1.5 -translate-y-1.5"></div>
                                  <p className="font-handwriting text-[#4a3b2a] text-sm leading-tight italic opacity-90">"{hero.description}"</p>
                                </div>
                              </div>
                          </div>
                        </>
                      )}
                      {dossierTab === 'skills' && (
                          <div className="p-6 h-full flex flex-col">
                             <div className="flex justify-between items-center mb-6 border-b border-[#8c7b66]/30 pb-2">
                                <h3 className="font-display font-bold text-[#1a1410] text-sm uppercase tracking-wider">Field Training</h3>
                                <div className="flex items-center gap-1.5 bg-[#1a1410]/5 px-2 py-0.5 rounded border border-[#8c7b66]/20">
                                    <span className="text-xs font-bold text-[#6b5d4d]">{heroXP} XP</span>
                                    <span className="material-symbols-outlined text-sm text-[#c5a059]">stars</span>
                                </div>
                             </div>
                             <div className="flex-1 flex flex-col items-center gap-6 relative pl-4 pb-8">
                                <div className="absolute top-6 bottom-12 left-[34px] w-0.5 border-l-2 border-dashed border-[#8c7b66]/40 -z-10"></div>
                                {skills.map((skill, idx) => {
                                   const isUnlocked = unlockedSkills.includes(skill.id);
                                   const isAffordable = heroXP >= skill.cost;
                                   const parentUnlocked = !skill.parent || unlockedSkills.includes(skill.parent);
                                   const canUnlock = !isUnlocked && isAffordable && parentUnlocked;
                                   return (
                                       <div key={skill.id} className="w-full flex items-center gap-4 relative group">
                                          {idx > 0 && <div className={`absolute -top-4 left-[18px] w-1 h-2 bg-[#8c7b66] ${isUnlocked ? 'opacity-100' : 'opacity-30'}`}></div>}
                                          <button 
                                            onClick={() => canUnlock && unlockSkill(skill.id, skill.cost)}
                                            disabled={!canUnlock && !isUnlocked}
                                            className={`relative w-12 h-12 rounded-full border-2 flex items-center justify-center shrink-0 shadow-md transition-all z-10 duration-300
                                              ${isUnlocked ? 'bg-[#1a1410] border-[#c5a059] text-[#c5a059]' : canUnlock ? 'bg-[#e3dacb] border-[#4a3b2a] text-[#4a3b2a] hover:scale-110 cursor-pointer shadow-[0_0_10px_rgba(197,160,89,0.5)] animate-pulse' : 'bg-[#d4c5b0] border-[#8c7b66] text-[#8c7b66] opacity-60 cursor-not-allowed grayscale'}
                                            `}
                                          >
                                              <span className="material-symbols-outlined text-xl">{skill.icon}</span>
                                              {canUnlock && <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full border border-[#e3dacb] animate-bounce"></div>}
                                          </button>
                                          <div className={`flex-1 p-2 rounded-sm border relative transition-colors ${isUnlocked ? 'bg-[#f0e6d2] border-[#c5a059]/50' : 'bg-transparent border-transparent'}`}>
                                              {canUnlock && <div className="absolute -left-2 top-1/2 -translate-y-1/2 text-[#4a3b2a] text-lg font-handwriting">→</div>}
                                              <div className="flex justify-between items-center mb-1">
                                                  <div className="flex items-center gap-2">
                                                      <span className={`font-display font-bold text-xs uppercase tracking-wider ${isUnlocked ? 'text-[#1a1410]' : 'text-[#6b5d4d]'}`}>{skill.name}</span>
                                                      <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded border uppercase ${skill.type === 'Active' ? 'bg-red-900/10 text-red-900 border-red-800/30' : 'bg-blue-900/10 text-blue-900 border-blue-800/30'}`}>{skill.type}</span>
                                                  </div>
                                                  {!isUnlocked && <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${isAffordable ? 'bg-[#c5a059]/20 text-[#4a3b2a] border-[#c5a059]/50' : 'text-[#8c7b66] border-transparent'}`}>{skill.cost} XP</span>}
                                                  {isUnlocked && <span className="material-symbols-outlined text-[#c5a059] text-xs">check</span>}
                                              </div>
                                              <p className="font-serif italic text-[10px] text-[#6b5d4d] leading-tight opacity-90">{skill.description}</p>
                                          </div>
                                       </div>
                                   );
                                })}
                             </div>
                          </div>
                      )}
                      {dossierTab === 'log' && (
                          <div className="p-6">
                             <h3 className="font-display font-bold text-[#1a1410] text-sm uppercase tracking-wider mb-4 border-b border-[#8c7b66]/30 pb-2">Combat Log</h3>
                             <div className="flex flex-col gap-3">
                                {combatLogs.map((log, i) => (
                                    <div key={log.id} className={`flex gap-3 items-start border-l-2 border-[#8c7b66] pl-3 py-2 relative ${i % 2 === 0 ? 'bg-[#8c7b66]/5' : ''}`}>
                                        {i === 0 && <span className="absolute top-2 right-2 text-[8px] font-bold bg-[#c5a059] text-white px-1.5 rounded-sm uppercase tracking-wider">New</span>}
                                        <div className="pt-0.5">
                                            <span className={`material-symbols-outlined text-sm ${log.outcome === 'Victory' ? 'text-green-700' : log.outcome === 'Defeat' ? 'text-red-700' : 'text-orange-700'}`}>
                                                {log.outcome === 'Victory' ? 'swords' : log.outcome === 'Defeat' ? 'skull' : 'flag'}
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-baseline mb-0.5">
                                                <span className="font-display font-bold text-[#1a1410] text-xs uppercase">{log.location}</span>
                                                <span className="font-sans text-[9px] text-[#6b5d4d]">{log.date}</span>
                                            </div>
                                            <p className={`font-serif text-[10px] italic ${log.outcome === 'Victory' ? 'text-green-800' : 'text-[#4a3b2a]'}`}>Outcome: {log.outcome}</p>
                                            <p className="font-sans text-[10px] text-[#6b5d4d] mt-1"><span className="font-bold">Loot:</span> {log.loot}</p>
                                        </div>
                                    </div>
                                ))}
                             </div>
                          </div>
                      )}
                  </div>
                  {dossierTab === 'overview' && (
                    <div className="relative z-20 pb-8 flex justify-center mt-auto shrink-0">
                        <button className="bg-[#2d241b] text-[#e3dacb] px-6 py-2 rounded shadow-lg border border-[#4a3b2a] flex items-center gap-3 active:scale-95 transition-all group hover:bg-[#1a1410]">
                            <span className="font-display font-bold tracking-[0.2em] text-xs">DEPLOY</span>
                            <div className="w-px h-3 bg-white/20"></div>
                            <span className="material-symbols-outlined text-xs group-hover:text-[#c5a059] transition-colors">arrow_forward</span>
                        </button>
                    </div>
                  )}
              </div>
            </div>
            {/* Roster Selector */}
            <div className="relative z-20 pb-24 px-2 shrink-0">
              <div className="flex items-center justify-center gap-2">
                  <button onClick={handlePrevHero} className="text-[#e3dacb]/30 hover:text-[#c5a059] transition-colors"><span className="material-symbols-outlined text-4xl">chevron_left</span></button>
                  <div className="flex gap-4 overflow-x-auto px-4 py-2 no-scrollbar items-center min-h-[5rem]">
                    {heroes.map((h, idx) => (
                      <div key={idx} onClick={() => setSelectedHeroIndex(idx)} className={`flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 ${idx === selectedHeroIndex ? 'scale-110 -translate-y-2 opacity-100' : 'opacity-40 hover:opacity-100 scale-90'}`}>
                          <div className={`bg-[#e3dacb] p-1 shadow-black/50 shadow-lg relative group transition-transform ${idx === selectedHeroIndex ? 'ring-2 ring-[#c5a059] ring-offset-2 ring-offset-[#0a0806]' : ''}`}>
                              <div className="absolute inset-0 border-[2px] border-dashed border-[#1c1c1c]/20 pointer-events-none -m-[2px]"></div>
                              <div className="w-14 h-16 bg-[#1a1410] overflow-hidden grayscale group-hover:grayscale-0 transition-all relative">
                                {h.locked ? (
                                  <div className="w-full h-full flex items-center justify-center bg-[#0c0a09]"><span className="material-symbols-outlined text-white/20">question_mark</span></div>
                                ) : (
                                  <img src={h.portrait} alt={h.name} className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal" />
                                )}
                                {idx === selectedHeroIndex && <div className="absolute inset-0 bg-[#c5a059]/10 mix-blend-overlay"></div>}
                              </div>
                          </div>
                      </div>
                    ))}
                  </div>
                  <button onClick={handleNextHero} className="text-[#e3dacb]/30 hover:text-[#c5a059] transition-colors"><span className="material-symbols-outlined text-4xl">chevron_right</span></button>
              </div>
            </div>
        </div>
      )}

      {/* --- LOADOUT VIEW --- */}
      {viewMode === 'loadout' && (
        <div className="flex-1 flex flex-col relative z-10 p-4 pb-24 animate-in fade-in slide-in-from-right-4 duration-500">
           
           <h2 className="text-center font-display text-sm tracking-[0.3em] text-[#6b5d4d] mb-4">FIELD LOGISTICS</h2>

           <div className="flex-1 flex gap-4 min-h-0">
              {/* LEFT COLUMN: Equipped Slots Section */}
              <div className="w-1/3 flex flex-col gap-4">
                 <div className="bg-[#1a1410] border border-[#3d342b] p-3 rounded-sm shadow-lg flex flex-col gap-3 h-full relative overflow-hidden">
                     {/* Section Background Texture */}
                     <div className="absolute inset-0 bg-grunge-overlay opacity-50 mix-blend-overlay pointer-events-none"></div>
                     <div className="relative z-10 text-[10px] uppercase tracking-widest text-[#6b5d4d] text-center border-b border-[#3d342b] pb-2">Active Gear</div>
                     
                     {(['Weapon', 'Tool', 'Relic'] as SlotType[]).map((slot) => {
                       const itemId = equippedIds[slot];
                       const item = gearInventory.find(i => i.id === itemId);
                       const isSelected = selectedSlot === slot;
                       
                       return (
                         <div 
                           key={slot}
                           onClick={() => setSelectedSlot(slot)}
                           className={`flex-1 relative rounded-sm border-2 cursor-pointer transition-all duration-300 group overflow-hidden
                             ${isSelected ? 'border-[#c5a059] bg-[#0c0a09] shadow-[inset_0_0_15px_rgba(197,160,89,0.2)]' : 'border-[#3d342b] bg-[#0c0a09] hover:border-[#6b5d4d]'}
                           `}
                         >
                           {/* Slot Label */}
                           <div className="absolute top-1 left-1 bg-[#1a1410] px-1.5 py-0.5 text-[7px] uppercase tracking-widest text-[#6b5d4d] z-10 border border-[#3d342b]">
                             {slot}
                           </div>
                           
                           {item ? (
                             <div className="w-full h-full p-2 relative flex items-center justify-center">
                               <img src={item.image} alt={item.name} className="w-[80%] h-[80%] object-contain drop-shadow-md" />
                               {/* Rarity Border Indicator */}
                               <div className="absolute inset-0 pointer-events-none border-2 border-opacity-30" style={{ borderColor: rarityColors[item.rarity] }}></div>
                               {/* Rarity Gem Icon Indicator */}
                               <div className="absolute bottom-1 right-1 drop-shadow-md">
                                  <span className="material-symbols-outlined text-[10px]" style={{ color: rarityColors[item.rarity] }}>diamond</span>
                               </div>
                             </div>
                           ) : (
                             <div className="w-full h-full flex items-center justify-center opacity-10">
                               <span className="material-symbols-outlined text-3xl">add_circle</span>
                             </div>
                           )}
                         </div>
                       );
                     })}
                 </div>
              </div>

              {/* RIGHT COLUMN: Detail / Comparison Panel */}
              <div className="w-2/3 flex flex-col gap-4">
                 
                 {/* Selected Item Detail & Comparison */}
                 <div className="bg-[#1a1410]/90 border border-[#3d342b] p-4 rounded-sm shadow-xl flex-1 flex flex-col relative overflow-hidden">
                    {/* Grunge Overlay */}
                    <div className="absolute inset-0 bg-grunge-overlay opacity-30 pointer-events-none"></div>

                    {previewItem ? (
                      <>
                        <div className="flex justify-between items-start mb-2 relative z-10">
                          <div>
                            <span className="text-[10px] uppercase tracking-wider font-bold" style={{ color: rarityColors[previewItem.rarity] }}>
                               {previewItem.rarity}
                            </span>
                            <h3 className="font-display text-xl leading-none text-[#e3dacb] line-clamp-1">{previewItem.name}</h3>
                          </div>
                          {previewItem.id === equippedIds[selectedSlot] && (
                             <span className="material-symbols-outlined text-[#c5a059] text-lg">check_circle</span>
                          )}
                        </div>
                        
                        <div className="relative w-full h-24 mb-3 bg-black/40 rounded border border-[#2d2620] overflow-hidden group shrink-0">
                            <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10`}></div>
                            <img src={previewItem.image} className="w-full h-full object-cover opacity-80" alt={previewItem.name} />
                            {/* Rarity Glow */}
                            <div className="absolute inset-0 z-0 opacity-20 mix-blend-screen" style={{ boxShadow: `inset 0 0 40px ${rarityColors[previewItem.rarity]}` }}></div>
                            {/* Quantity Badge */}
                            {previewItem.quantity > 1 && (
                                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] font-bold px-1.5 py-0.5 rounded border border-white/20 z-20">
                                    x{previewItem.quantity}
                                </div>
                            )}
                        </div>

                        {/* Comparison Header */}
                        {previewItem.id !== equippedItem?.id && equippedItem && (
                        <div className="flex items-center gap-2 mb-2 bg-[#0c0a09] p-1.5 rounded border border-[#3d342b]/50">
                            <span className="text-[8px] uppercase tracking-widest text-[#6b5d4d]">Comparing vs</span>
                            <div className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-[10px] text-[#8c7b66]">shield</span>
                                <span className="text-[9px] font-bold text-[#8c7b66]">{equippedItem.name}</span>
                            </div>
                        </div>
                        )}

                        {/* Stats Comparison Section */}
                        <div className="space-y-2 relative z-10 mb-2">
                        <StatComparison 
                            label="Power" 
                            value={previewItem.stats.power} 
                            baseValue={equippedItem?.stats.power || 0} 
                            isEquipped={previewItem.id === equippedItem?.id}
                            description="Determines damage output and combat efficiency."
                        />
                        <StatComparison 
                            label="Weight" 
                            value={previewItem.stats.weight} 
                            baseValue={equippedItem?.stats.weight || 0} 
                            invert 
                            isEquipped={previewItem.id === equippedItem?.id}
                            description="Affects movement speed and stamina drain. Lower is better."
                        />
                        <StatComparison 
                            label="Utility" 
                            value={previewItem.stats.utility} 
                            baseValue={equippedItem?.stats.utility || 0} 
                            isEquipped={previewItem.id === equippedItem?.id}
                            description="Influences success rate of non-combat interactions and skill checks."
                        />
                        </div>

                        <div className="flex-1 overflow-y-auto min-h-0 mb-3 pr-1">
                          <p className="text-[10px] font-serif italic text-[#8c7b66] leading-relaxed border-t border-[#3d342b] pt-2 mb-2">
                            "{previewItem.description}"
                          </p>
                          {/* Lore Section */}
                          <div className="bg-[#0c0a09]/50 p-2 rounded border border-[#3d342b]/50 relative">
                              <div className="absolute top-0 right-0 p-1 opacity-20"><span className="material-symbols-outlined text-[10px] text-[#c5a059]">history_edu</span></div>
                              <span className="text-[8px] text-[#6b5d4d] uppercase tracking-widest font-bold block mb-1">Origin</span>
                              <p className="text-[9px] font-display text-[#a89f91] leading-tight">
                                {previewItem.lore}
                              </p>
                          </div>
                        </div>

                        {/* Equip / Unequip Action / Purchase */}
                        {isPreviewItemOwned ? (
                            previewItem.id === equippedItem?.id ? (
                                <button 
                                    onClick={handleUnequip}
                                    className="w-full py-2 relative overflow-hidden transition-all uppercase font-display font-bold tracking-widest text-xs border border-[#8a1c1c] text-[#8a1c1c] bg-[#2a0a0a] hover:bg-[#8a1c1c] hover:text-white active:scale-95 flex items-center justify-center gap-2"
                                >
                                    <span className="material-symbols-outlined text-sm">remove_circle</span>
                                    <span>Unequip Item</span>
                                </button>
                            ) : (
                                <button 
                                    onClick={initiateEquip}
                                    className={`w-full py-2 relative overflow-hidden transition-all uppercase font-display font-bold tracking-widest text-xs border active:scale-95 flex items-center justify-center gap-2 bg-[#2d241b] border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-[#1a1410]`}
                                >
                                    <span className="material-symbols-outlined text-sm">check_circle</span>
                                    <span>Equip Item</span>
                                </button>
                            )
                        ) : (
                            <button 
                                onClick={() => handlePurchase(previewItem.id, 500)}
                                className={`w-full py-2 relative overflow-hidden transition-all uppercase font-display font-bold tracking-widest text-xs border active:scale-95 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 border-amber-500 text-white hover:brightness-110 shadow-lg`}
                            >
                                <span className="material-symbols-outlined text-sm">shopping_cart</span>
                                <span>Purchase (500 G)</span>
                            </button>
                        )}
                      </>
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-[#3d342b]">
                         <span className="material-symbols-outlined text-4xl mb-2">backpack</span>
                         <span className="text-xs uppercase tracking-widest">Select an Item</span>
                      </div>
                    )}
                 </div>

                 {/* REFACTORED FILTERS AND SORTING */}
                 <div className="bg-[#0c0a09] border border-[#3d342b] p-3 rounded-sm flex flex-col gap-3 mb-2 shadow-inner relative overflow-hidden">
                      {/* Background texture for filter panel */}
                      <div className="absolute inset-0 bg-grunge-overlay opacity-10 pointer-events-none"></div>

                      <div className="relative z-10 flex flex-col gap-3">
                         
                         {/* Category Group */}
                         <div>
                            <div className="flex items-center gap-2 mb-1.5 border-b border-[#3d342b] pb-1">
                                <span className="material-symbols-outlined text-[#6b5d4d] text-[12px]">category</span>
                                <h4 className="text-[8px] uppercase tracking-[0.2em] text-[#6b5d4d] font-bold">Category</h4>
                            </div>
                            <div className="flex gap-1">
                                {(['Weapon', 'Tool', 'Relic'] as SlotType[]).map(type => (
                                    <button
                                        key={type}
                                        onClick={() => setSelectedSlot(type)}
                                        className={`flex-1 py-1 text-[8px] uppercase font-bold tracking-wider transition-all border rounded-sm
                                            ${selectedSlot === type 
                                                ? 'bg-[#c5a059]/10 border-[#c5a059] text-[#c5a059] shadow-[inset_0_0_8px_rgba(197,160,89,0.2)]' 
                                                : 'bg-[#1c1c1c] border-[#2d241b] text-[#6b5d4d] hover:text-[#8c7b66] hover:bg-[#262626]'}
                                        `}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                         </div>

                         {/* Rarity Group */}
                         <div>
                            <div className="flex items-center gap-2 mb-1.5 border-b border-[#3d342b] pb-1">
                                <span className="material-symbols-outlined text-[#6b5d4d] text-[12px]">diamond</span>
                                <h4 className="text-[8px] uppercase tracking-[0.2em] text-[#6b5d4d] font-bold">Rarity</h4>
                            </div>
                            <div className="flex gap-1 flex-wrap">
                                <button
                                    onClick={() => setRarityFilter('All')}
                                    className={`px-3 py-1 text-[8px] uppercase tracking-wider border rounded-sm transition-colors ${rarityFilter === 'All' ? 'border-[#e3dacb] text-[#e3dacb] bg-[#e3dacb]/10' : 'border-[#3d342b] text-[#6b5d4d] bg-[#1c1c1c] hover:border-[#8c7b66]'}`}
                                >
                                    All
                                </button>
                                {(['Common', 'Rare', 'Epic', 'Legendary'] as Rarity[]).map(rarity => (
                                    <button
                                        key={rarity}
                                        onClick={() => setRarityFilter(rarity)}
                                        className={`px-2 py-1 text-[8px] uppercase tracking-wider border rounded-sm transition-all flex-1
                                        ${rarityFilter === rarity ? 'border-opacity-100 bg-opacity-10' : 'border-opacity-30 bg-opacity-0 hover:border-opacity-60'}
                                        `}
                                        style={{ 
                                        borderColor: rarityFilter === rarity ? rarityColors[rarity] : '#3d342b',
                                        color: rarityFilter === rarity ? rarityColors[rarity] : '#6b5d4d',
                                        backgroundColor: rarityFilter === rarity ? rarityColors[rarity] : undefined
                                        }}
                                    >
                                        {rarity.charAt(0)}
                                    </button>
                                ))}
                            </div>
                         </div>

                         {/* Sorting Group */}
                         <div>
                            <div className="flex items-center gap-2 mb-1.5 border-b border-[#3d342b] pb-1">
                                <span className="material-symbols-outlined text-[#6b5d4d] text-[12px]">sort</span>
                                <h4 className="text-[8px] uppercase tracking-[0.2em] text-[#6b5d4d] font-bold">Sort By</h4>
                            </div>
                            <div className="flex gap-1 justify-between">
                                {['rarity', 'power', 'name'].map(method => (
                                <button
                                    key={method}
                                    onClick={() => setSortMethod(method as SortMethod)}
                                    className={`px-3 py-1 flex-1 text-[8px] uppercase tracking-wider border rounded-sm transition-colors
                                    ${sortMethod === method ? 'border-[#c5a059] text-[#c5a059] bg-[#c5a059]/10' : 'border-[#3d342b] text-[#6b5d4d] bg-[#1c1c1c] hover:border-[#6b5d4d]'}
                                    `}
                                >
                                    {method}
                                </button>
                                ))}
                            </div>
                         </div>
                      </div>
                 </div>

                 {/* Available Items List (Strip) */}
                 <div>
                    <div className="h-24 bg-[#0c0a09] border border-[#3d342b] p-2 flex gap-2 overflow-x-auto no-scrollbar relative z-10 rounded-sm">
                        {slotItems.map(item => (
                        <div 
                            key={item.id} 
                            onClick={() => setPreviewItemId(item.id)}
                            style={{ 
                                // Priority: Preview Highlight > Rarity Color
                                borderColor: previewItemId === item.id 
                                    ? '#c5a059' 
                                    : rarityColors[item.rarity],
                                boxShadow: previewItemId === item.id ? `0 0 10px ${rarityColors[item.rarity]}` : 'none'
                            }}
                            className={`min-w-[4rem] w-[4rem] h-full bg-[#1c1c1c] border-2 relative cursor-pointer group transition-all shrink-0 overflow-hidden duration-200
                            ${previewItemId === item.id 
                                ? 'opacity-100 scale-105 z-20 ring-1 ring-[#c5a059] ring-offset-1 ring-offset-[#0c0a09]' 
                                : 'opacity-60 hover:opacity-100 scale-95 border-opacity-60'}
                            `}
                        >
                            <img src={item.image} className="w-full h-full object-cover" />
                            
                            {/* Quantity Badge */}
                            {item.quantity > 1 && (
                                <div className="absolute top-0 left-0 p-0.5 bg-black/60 rounded-br-sm text-[8px] text-white font-bold px-1">
                                    x{item.quantity}
                                </div>
                            )}

                            {/* DISTINCT EQUIPPED BADGE */}
                            {item.id === equippedIds[selectedSlot] && (
                            <div className="absolute top-0 right-0 p-0.5 bg-black/60 rounded-bl-sm">
                                <span className="material-symbols-outlined text-[#c5a059] text-[10px] bg-black rounded-full border border-[#c5a059]">check</span>
                            </div>
                            )}
                        </div>
                        ))}
                        {slotItems.length === 0 && (
                        <div className="w-full flex items-center justify-center text-[10px] text-[#3d342b] uppercase tracking-wide">
                            No items found in this category
                        </div>
                        )}
                    </div>
                 </div>

              </div>
           </div>
        </div>
      )}
    </div>
  );
};

// --- Subcomponents ---

const StatSlider = ({ label, value }: { label: string, value: number }) => (
  <div className="flex flex-col gap-1 w-full pr-6">
     <div className="flex justify-between items-end">
       <span className="text-[9px] font-display font-bold tracking-widest text-[#6b5d4d]">{label}</span>
     </div>
     <div className="relative h-[2px] bg-[#8c7b66]/30 w-full mt-1">
        <div className="absolute inset-0 bg-[#8c7b66] w-full origin-left transform scale-x-[0.3] opacity-20"></div>
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#1a1410] border border-[#c5a059]"
          style={{ left: `${value}%` }}
        ></div>
        <div className="absolute top-1/2 -translate-y-1/2 h-[2px] bg-[#1a1410] w-[calc(100%-2px)] origin-left" style={{ width: `${value}%` }}></div>
     </div>
  </div>
);

const StatComparison = ({ label, value, baseValue, invert = false, isEquipped = false, description }: { label: string, value: number, baseValue: number, invert?: boolean, isEquipped?: boolean, description?: string }) => {
  const diff = value - baseValue;
  const common = Math.min(value, baseValue);
  const diffAbs = Math.abs(diff);

  // Determine Colors for Bar and Text
  let diffColor = 'text-[#6b5d4d]';
  let barColor = 'bg-[#5c4d41]'; // Neutral
  let isGhost = false;

  // Good = Green (Emerald), Bad = Red (Red)
  const colorGoodText = 'text-emerald-500';
  const colorBadText = 'text-red-500';
  const colorGoodBar = 'bg-emerald-500';
  const colorBadBar = 'bg-red-600';

  if (!isEquipped && diff !== 0) {
      if (diff > 0) {
          // Increase
          // If Invert (Weight): Increase is Bad (Red). If Normal (Power): Increase is Good (Green)
          diffColor = invert ? colorBadText : colorGoodText;
          barColor = invert ? colorBadBar : colorGoodBar;
      } else {
          // Decrease
          // If Invert (Weight): Decrease is Good (Green). If Normal (Power): Decrease is Bad (Red)
          diffColor = invert ? colorGoodText : colorBadText;
          barColor = invert ? colorGoodBar : colorBadBar;
          isGhost = true; // Represents lost value visually on the bar
      }
  }

  const arrowIcon = diff > 0 ? 'arrow_upward' : 'arrow_downward';
  const actionText = diff > 0 ? 'Increased' : 'Decreased';
  const comparisonText = `${label}: ${actionText} by ${diffAbs}`;

  return (
    <div className="flex items-center gap-2 text-xs group relative cursor-help">
      <span className="w-12 font-bold text-[#8c7b66] uppercase tracking-wide text-[9px] border-b border-dotted border-[#6b5d4d]">{label}</span>
      
      {/* Bar Visual */}
      <div className="flex-1 h-2 bg-[#0c0a09] rounded-sm overflow-hidden relative border border-[#3d342b]">
         {/* Grid lines for scale (Optional aesthetic) */}
         <div className="absolute inset-0 flex justify-between px-[10%] opacity-10 pointer-events-none">
             <div className="w-px h-full bg-white"></div>
             <div className="w-px h-full bg-white"></div>
             <div className="w-px h-full bg-white"></div>
             <div className="w-px h-full bg-white"></div>
         </div>

         {/* Common Bar */}
         <div className="absolute top-0 left-0 h-full bg-[#5c4d41]" style={{ width: `${common}%` }}></div>
         
         {/* Difference Bar */}
         {!isEquipped && diff !== 0 && (
             <div 
                className={`absolute top-0 h-full ${barColor} ${isGhost ? 'opacity-30' : 'opacity-100'}`} 
                style={{ left: `${common}%`, width: `${diffAbs}%` }}
             >
                 {/* Stripe pattern for ghost bars if desired, or just opacity */}
                 {isGhost && <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-50"></div>}
             </div>
         )}
      </div>

      <div className="flex items-center justify-end w-24 text-[9px] font-bold relative group/diff">
        {!isEquipped && diff !== 0 ? (
           <div className="flex items-center justify-end gap-1 relative">
             <span className="text-[#6b5d4d] opacity-50">{baseValue}</span>
             <span className="material-symbols-outlined text-[10px] text-[#6b5d4d]">arrow_right_alt</span>
             {/* The new value text is colored based on whether it is a "good" or "bad" change */}
             <span className={diffColor}>{value}</span>
             <div className={`ml-1 flex items-center ${diffColor}`}>
                  <span className="material-symbols-outlined text-[10px]">{arrowIcon}</span>
             </div>
             
             {/* Specific Difference Tooltip */}
             <div className="absolute bottom-full right-0 mb-1 w-48 bg-[#1a1410] border border-[#c5a059] text-[10px] text-[#e3dacb] p-2 rounded shadow-xl opacity-0 group-hover/diff:opacity-100 transition-opacity pointer-events-none z-[60]">
                <div className={`font-bold flex items-center gap-1 ${diffColor}`}>
                   <span className="material-symbols-outlined text-sm">{arrowIcon}</span>
                   {comparisonText}
                </div>
                <p className="text-[#8c7b66] mt-1 italic leading-tight">{description}</p>
             </div>
           </div>
        ) : (
           <span className="text-[#e3dacb]">{value}</span>
        )}
      </div>
      
      {/* Label Tooltip (General) */}
       {description && (
          <div className="absolute left-0 bottom-full mb-1 w-40 bg-[#1a1410] border border-[#3d342b] text-[10px] text-[#e3dacb] p-2 rounded shadow-[0_10px_30px_rgba(0,0,0,0.9)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 flex flex-col gap-1">
             <div>
                <span className="font-bold text-[#c5a059] uppercase tracking-wider block mb-0.5">{label}</span> 
                <span className="text-[#a89f91] font-serif leading-tight">{description}</span>
             </div>
          </div>
       )}
    </div>
  );
};

export default ArmoryScreen;
