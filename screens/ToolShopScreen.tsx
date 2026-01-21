import React, { useState } from 'react';
import { useGame } from '../GameContext';

interface ToolShopScreenProps {
  onBack: () => void;
}

interface ShopItem {
  id: string;
  name: string;
  type: string;
  rarity: 'Common' | 'Rare' | 'Epic';
  description: string;
  price: number;
  image: string;
  stats: {
    label: string;
    value: string;
    icon: string;
  }[];
}

const shopItems: ShopItem[] = [
  {
    id: 'grapple',
    name: 'Grappling Hook',
    type: 'Utility',
    rarity: 'Rare',
    description: '"A weathered iron hook with frayed but sturdy rope, essential for vertical ascents."',
    price: 500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAs7MR6Qt4OZXRsz6mFmRFTwH60yDi22tKj8RXA9xhjARQVfQULa8Z1mc2KFbIr4S9yPV4kOiDIoZKluTuAfOYTwtukXpldygsNWdOq4mj-1Ni0iG5RvgWz8e_AARtz7alNHpF_b3dl2xu2lmNlDjLw2FziDxC-0Ocd3XpRRegoccEWHD020WIyMQXWpt7yuBr8zTg9LD8mWRbBqXc-PeRLKdJsOpJq_VsXSizqKKLgArYNERxZ_eSMLeT2Ij7sclz551pvcHMqhgc',
    stats: [
        { label: 'Climb Speed', value: '+15% Bonus', icon: 'hiking' },
        { label: 'Durability', value: 'High Grade', icon: 'shield' }
    ]
  },
  {
    id: 'boots',
    name: 'Sturdy Boots',
    type: 'Agility',
    rarity: 'Common',
    description: '"Leather treated with beeswax. Keeps the jungle rot out and your ankles intact."',
    price: 500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcoQRQMRijbzaf8k8CG9rwM2gLtsv4H8q1yHIO8whEURXn_6IvCBmfp5tx3m3UK71OhpNEVfxPRel5SSsxwtunL8slwk2zUaG7C7EzybHZ8PYdB0b1kCHsByOD9I_2_rQPUr_pBlgLsyK9weJtfQmbXTEz22KpbgB5_VdUUQzObvJGtyi3F-73d8kq5NDL3eMPa8E-H9pXDKeFsNElmlKz6XMDNjib1cVS0p--l1D-VMkeXyCJ6G1Po0f5BdF9DAdOZ0GvUC4ZqwQ',
    stats: [
        { label: 'Traction', value: 'Ignore Spikes', icon: 'footprint' },
        { label: 'Comfort', value: 'Medium', icon: 'health_and_safety' }
    ]
  },
  {
    id: 'torch',
    name: 'Reinforced Torch',
    type: 'Vision',
    rarity: 'Common',
    description: '"Burns twice as long. The flame is resistant to damp cavern air."',
    price: 300,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlzl88JfTjbC8QMhpiDa-9EscHeWFiHllmu8Ox41XpOy6eaFE30nvtF1-gUf42qJ48_EPBTxNUYeMCeKylICITu_nXfZDNkCuGqRIGD5qiV6PniahsO3mE8p_veJ_o3pfeKknPriSGhNE0sMLodiMtg4151FCllHPYcaIp-r9ky0ZAJmGEk6jEAGFL-j9UkIDpe8G7jh40ZiAZi88gkYB9y3snlotsPoz7JVFfN4mHmpKt3ZhMz05T3ppTFTcbuzEkv4CbIjSPqXQ',
    stats: [
        { label: 'Radius', value: '+20% Light', icon: 'light_mode' },
        { label: 'Fuel', value: 'Standard', icon: 'local_fire_department' }
    ]
  },
  {
    id: 'machete',
    name: 'Steel Machete',
    type: 'Combat',
    rarity: 'Rare',
    description: '"Sharp enough to cut through dense vines and thick hides alike."',
    price: 750,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAORCaw-ve3db-7o03Jsh48nPNmeW_4fHZJLeiG8Q3BYIRt0S8LcR0s3mdin-KyjObDWd3xrhqAoQaQsMMAufl4arOQeeOslVGRaVMSxa_81_gkapRPFOVYrYcHbq3MHkLjMbXU9t0ZGy1DUYG8qXZJzGuwh67l_wen0bIkEsUFExpew0ooJbgrRDJHYsylKUmmNEt3R-irily06FbE6XxufpbhVmDd-NDoWWs_sNa-eeZzhn2LhhV05UzZRi4uvudl8aGrLIteKOo',
    stats: [
        { label: 'Damage', value: 'High', icon: 'swords' },
        { label: 'Speed', value: 'Fast Swing', icon: 'speed' }
    ]
  }
];

const ToolShopScreen: React.FC<ToolShopScreenProps> = ({ onBack }) => {
  const { credits, addToInventory, inventory } = useGame();
  const [selectedItem, setSelectedItem] = useState<ShopItem>(shopItems[0]);

  const isOwned = inventory.includes(selectedItem.id);

  const handlePurchase = () => {
     if (!isOwned) {
        addToInventory(selectedItem.id, selectedItem.price);
     }
  };

  return (
    <div className="h-full w-full bg-[#18120b] text-white font-noto-serif overflow-hidden flex flex-col relative">
      
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-gradient-to-b from-black/80 to-transparent">
        <button onClick={onBack} className="flex w-10 h-10 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            <span className="material-symbols-outlined text-[#f49d25] text-[20px]">monetization_on</span>
            <p className="text-[#e2dacc] text-sm font-bold tracking-wide">{credits.toLocaleString()}</p>
        </div>
      </div>

      {/* 3D Preview Area (Hero) */}
      <div className="relative w-full h-[55vh] flex flex-col items-center justify-center shrink-0">
         {/* Background Atmosphere */}
         <div 
            className="absolute inset-0 bg-center bg-cover opacity-60 mix-blend-overlay" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB23ReSE47wq6iDHSXj-Zc88WJw89q2Dws362IoSIGTktCvEk2_JhsbH5CbmDz0zRcIiBaNUBqlUXho5KX_peynvDsProN613sByls2juUOQe_-Bg92JRfB9qSUzCk3SpJpIOXvyOzYzxM6f1urnEkHN5fMz2vDZD08aUFLisD-kmyjdCGsP6FQvrTd_iiDFaxGQqrkdeerpdVQdre3jyfV_Y75EUlUurvIvPbbNQ2rq4qzHQsSjkuxpsVBMd7cKXzV-iQqCSsDbos")' }}
         ></div>
         
         {/* Vignette & Gradient Overlay */}
         <div className="absolute inset-0 bg-gradient-to-b from-[#18120b]/60 via-transparent to-[#18120b]"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#18120b_90%)]"></div>
         
         {/* Spotlight Effect */}
         <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#f49d25]/20 blur-[80px] rounded-full pointer-events-none"></div>

         {/* 3D Item Preview */}
         <div className="relative z-10 flex flex-col items-center justify-center pt-8">
            <div className="relative w-64 h-64 transition-transform duration-700 hover:scale-105 animate-in zoom-in-90 fade-in duration-500 key={selectedItem.id}">
                <img 
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                    style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                />
            </div>
         </div>
      </div>

      {/* Item Details & Actions Panel */}
      <div className="relative z-20 -mt-12 flex flex-col px-5 pb-8">
         {/* Main Item Info */}
         <div className="flex flex-col items-center text-center gap-1 mb-6 animate-in slide-in-from-bottom-4 duration-500">
             <div className="flex items-center gap-2 mb-1">
                 <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white/10 text-[#baad9c] border border-white/5">{selectedItem.type}</span>
                 <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border border-current ${selectedItem.rarity === 'Common' ? 'text-gray-400 bg-gray-400/10' : selectedItem.rarity === 'Rare' ? 'text-[#f49d25] bg-[#f49d25]/20' : 'text-purple-400 bg-purple-400/20'}`}>
                    {selectedItem.rarity}
                 </span>
             </div>
             <h1 className="text-3xl font-bold text-white tracking-tight drop-shadow-md">{selectedItem.name}</h1>
             <p className="text-[#baad9c] text-sm italic max-w-xs leading-relaxed">
                 {selectedItem.description}
             </p>
         </div>

         {/* Stats Grid */}
         <div className="grid grid-cols-2 gap-3 mb-6 w-full">
            {selectedItem.stats.map((stat, idx) => (
                <div key={idx} className="bg-[#2a2118]/80 backdrop-blur-sm border border-white/5 p-3 rounded-lg flex items-center gap-3">
                    <div className="size-8 rounded-full bg-white/5 flex items-center justify-center text-[#f49d25]">
                        <span className="material-symbols-outlined text-[18px]">{stat.icon}</span>
                    </div>
                    <div>
                        <p className="text-[10px] text-[#8e8476] uppercase tracking-wider">{stat.label}</p>
                        <p className="text-white font-bold text-sm">{stat.value}</p>
                    </div>
                </div>
            ))}
         </div>

         {/* Brass Purchase Button */}
         <button 
            onClick={handlePurchase}
            disabled={isOwned}
            className={`group relative w-full overflow-hidden rounded-lg p-[1px] shadow-[0_4px_20px_rgba(244,157,37,0.3)] active:scale-[0.98] transition-transform duration-100 
               ${isOwned ? 'bg-gray-700 cursor-default opacity-80' : 'bg-[linear-gradient(180deg,#fcd34d_0%,#f59e0b_50%,#b45309_100%)]'}
            `}
         >
             <div className={`relative flex h-12 w-full items-center justify-center gap-2 rounded-[7px] border-t border-white/40 shadow-inner transition-colors
                ${isOwned ? 'bg-[#3e3428] border-gray-600' : 'bg-gradient-to-b from-[#fcd34d] to-[#d97706] group-hover:to-[#b45309]'}
             `}>
                 <span className={`text-base font-bold tracking-widest uppercase ${isOwned ? 'text-gray-400' : 'text-[#2a1805]'}`}>
                    {isOwned ? 'Acquired' : 'Acquire'}
                 </span>
                 {!isOwned && <span className="h-1 w-1 rounded-full bg-[#2a1805]"></span>}
                 {!isOwned && <span className="text-[#2a1805] text-base font-bold">{selectedItem.price} G</span>}
                 {isOwned && <span className="material-symbols-outlined text-gray-400 text-sm">check</span>}
             </div>
         </button>
      </div>

      {/* Scrollable Gear List */}
      <div className="flex-1 bg-[#1c150d] relative z-20 rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border-t border-white/5 flex flex-col min-h-0">
          {/* Header for List */}
          <div className="flex items-center justify-between px-6 pt-6 pb-2 shrink-0">
             <h3 className="text-white text-lg font-bold tracking-tight">Available Gear</h3>
             <span className="text-xs text-[#f49d25] font-medium tracking-wide cursor-pointer hover:underline">View All</span>
          </div>

          {/* List Content */}
          <div className="flex flex-col gap-3 px-4 pb-8 overflow-y-auto no-scrollbar">
             {shopItems.map((item) => {
                const itemOwned = inventory.includes(item.id);
                return (
                <div 
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className={`group relative flex items-center gap-4 bg-[#2a2118] p-3 rounded-xl border hover:border-[#f49d25]/50 transition-colors cursor-pointer ${selectedItem.id === item.id ? 'border-[#f49d25]' : 'border-white/5'}`}
                >
                    <div className="relative size-16 shrink-0 rounded-lg bg-[#18120b] border border-white/5 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
                        <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                        />
                        {itemOwned && (
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                <span className="material-symbols-outlined text-[#f49d25]">check</span>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                            <h4 className={`text-base font-bold leading-tight truncate transition-colors ${selectedItem.id === item.id ? 'text-[#f49d25]' : 'text-[#e2dacc] group-hover:text-[#f49d25]'}`}>{item.name}</h4>
                            <p className={`${itemOwned ? 'text-gray-500 line-through' : 'text-[#f49d25]'} text-sm font-bold shrink-0`}>{item.price} G</p>
                        </div>
                        <p className="text-[#8e8476] text-xs font-medium mt-1 truncate">Effect: {item.stats[0].value}</p>
                        <div className="mt-2 flex gap-1">
                            <div className="h-1 w-12 rounded-full bg-white/10 overflow-hidden">
                                <div className="h-full bg-[#f49d25]" style={{ width: item.id === 'grapple' ? '70%' : item.id === 'boots' ? '30%' : item.id === 'torch' ? '50%' : '90%' }}></div>
                            </div>
                            <span className="text-[9px] text-[#8e8476] leading-none">{item.type}</span>
                        </div>
                    </div>
                </div>
             )})}
             {/* Spacer */}
             <div className="h-4 shrink-0"></div>
          </div>
      </div>

    </div>
  );
};

export default ToolShopScreen;