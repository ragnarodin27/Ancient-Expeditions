import React, { useState } from 'react';

interface FusionApparatusScreenProps {
  onBack: () => void;
}

interface InventoryItem {
  id: string;
  name: string;
  image: string;
}

const INVENTORY_ITEMS: InventoryItem[] = [
  { id: 'obsidian', name: 'Obsidian Shard', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9z_Gq-sFXabx3w5oQIfIjO0UunDPP4UQmp2L7V58UkGM8fa_dbRg0RDBuOG7wnuIT6MpqlxwhzSvnRbfkonU099L5WfSZ6sE_kjKS25Zv-7e9kYjsVeLM7H88u77k-fqwqJ2M2BPJyjqtrt13Gh6gBsXEacDYoztZOvtzghEqCtzwvUApJjON-zg3lHQcmYurZF2dYnTA6J6gK0kADbukwytLLGI_aJzFT256dHDNuO0WcpEZ7rYkeQrYWCdjMg3V297ibi-wVLQ' },
  { id: 'amber', name: 'Amber Fossil', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBst3IIWmc7zLTxizobtYbR6H9yawXdTBK9ikC8uw71z5-Sc5JyTotrMThhGVDkexvHZE3SBwNo7WrHOwtDIMOEvoTJw_CqfQDQQdvk3Q8vqYgPx0CvPNIlmdhshJCpr5bcfE950EcYrLNye0VY2ygcUeFp08qV1esOIiW1dbZYvs3Mt-9ycGRifGrhj9ihjSMmTYexguu9S7bYIMa3ulhY8PDNHnfcOwMz1YAtPrPKJL-upl7BW_gZCHPoFTxkoAKEQci65yD2ZHY' },
  { id: 'gear', name: 'Bronze Gear', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHTZpMgPv55dp57UIbPTc57z8z28Y8xqGeiE3xpubldrFiZD6AW1hpphfdgdqAihxqpvIdNSoZmV-b83zOSOuW9j3fcy6Y9h-KzEIVb1_a8_p1LUvaEddAoEctP90Xf9MnkcrfiMpYkhdlDgZVWvJh9wHxguf3a-H5c8dIH8q4dLbg9AdGNbrlnZxtPs6qA8e63T1ca-lNQn-VqRjYPwmc6ivS1OOdHgFsYJRJBHnPxD0uk5GpxqFaq6EXA-ULo7BOGoIk66P5QSQ' },
  { id: 'bone', name: 'Bone Fragment', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9fv5WBAix00nJI5F7dHdvv098Hjo30AUnV-dhD_qVAPEDY916TN_cPD1ZZmTp2sXbAMm0jQjKqltQpE3xk7TIF50XeRtZsHZ30SlZFutr82_rI0Or1VunEgoBBkS5qSfvRpN3iVMf-TU0sgnWN0P25xXaPaYX07mfFINWQe-ONqLX06m_EoplhF5c2YpshY4AlnW9Hnfuem-lYn7zDp2tfE_KcTLDeL__wAfH7W4hMkmEBnNnlzT_f7Q9aQHAF1UfYzomTL9L8gw' }
];

// Pre-filled mock slots for visual fidelity to prompt
const INITIAL_SLOT_1: InventoryItem = {
    id: 'jade_idol',
    name: 'Jade Idol',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4_1Z-PI81_u3HgiQQdNCl_JtL-mrZRHhlJMdkigsAcACsvAlVp6E7GUDTU7BcX8CIokagJhqfF8lcp2J5Z8V46A30OCdyTOjqzSQZJgVfHdelqjG07sxD4SaaIFvUhfN0az_TdAP3MY10h8MD7qnSk1hNGKBOa58hwkBnUEvy5tCOK6H9HHaeVWjbotPg0t73ZnmPhrQP62IxUglCEA4jZzW-iZrHQ8qw8dHjKiE3WHrjAu3USP4c2yMN249u8dl6TT_79w6t22Q'
};

const INITIAL_SLOT_2: InventoryItem = {
    id: 'golden_coin',
    name: 'Golden Coin',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZomhVSod8ZiY79afMRWp0ekBOqf-_uNlK4ScZAGd8X0L5zYK-j3SmNrwBBiR5eFFY-CcWNBR4GYVb_6iHkhaGANpFuZrLSoNNiWU07X_SWsl7KcM98z4WNfCm15hHvCcRZ2vBnG9HNx9pWXHfXFMSA2vP_ZZtR4cnSCScg-yg3NXKMubiS0xFRSkE0i1AjThS9GJmmNxhKKiGV62BxNWXHiKVOCsX8ipdU1BIjgDV_lqak7hzNqW0aFPWgXYgbCpzlfYdUL4xQ_g'
};

const FusionApparatusScreen: React.FC<FusionApparatusScreenProps> = ({ onBack }) => {
  const [slot1, setSlot1] = useState<InventoryItem | null>(INITIAL_SLOT_1);
  const [slot2, setSlot2] = useState<InventoryItem | null>(INITIAL_SLOT_2);
  const [isFusing, setIsFusing] = useState(false);

  const handleInventoryClick = (item: InventoryItem) => {
    if (!slot1) setSlot1(item);
    else if (!slot2) setSlot2(item);
    else setSlot1(item); // Replace first if full
  };

  const handleFuse = () => {
    if (slot1 && slot2) {
      setIsFusing(true);
      setTimeout(() => setIsFusing(false), 2000);
    }
  };

  return (
    <div className="bg-[#f4f0eb] text-apparatus-ink font-noto-serif overflow-x-hidden selection:bg-primary/30 h-full w-full flex flex-col relative select-none">
        
        {/* Background Texture & Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wall-4-light.png')] bg-fixed bg-cover z-0"></div>
        <div className="absolute inset-0 bg-[#e6e2de] opacity-95 z-0"></div>
        <div className="absolute inset-0 god-ray z-10 pointer-events-none"></div>

        {/* Content Wrapper */}
        <div className="relative z-20 flex flex-col h-full min-h-0">
            
            {/* Top Navigation */}
            <div className="flex items-center p-4 pb-2 justify-between shrink-0">
                <button 
                    onClick={onBack}
                    className="flex size-12 shrink-0 items-center justify-center rounded-full bg-apparatus-stone/50 hover:bg-apparatus-stone/80 transition-colors text-apparatus-ink"
                >
                    <span className="material-symbols-outlined text-[28px]">arrow_back</span>
                </button>
                <h2 className="text-apparatus-ink text-xl font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12 drop-shadow-sm opacity-90 font-noto-serif">
                    RELIC SYNTHESIS
                </h2>
            </div>

            {/* Main Apparatus Section */}
            <div className="flex-1 flex flex-col items-center justify-center px-4 py-2 w-full max-w-md mx-auto min-h-0 overflow-y-auto no-scrollbar pb-32">
                
                {/* Stone Tablet / Apparatus Base */}
                <div className="w-full bg-apparatus-stone rounded-2xl p-6 shadow-xl border-b-4 border-apparatus-stone-dark relative overflow-hidden">
                    {/* Texture overlay for stone */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent pointer-events-none"></div>
                    
                    {/* Header for the machine */}
                    <div className="flex justify-center mb-6">
                        <div className="text-xs font-bold tracking-[0.2em] text-apparatus-ink/60 uppercase border-b border-apparatus-ink/20 pb-1 font-noto-sans">Fusion Chamber</div>
                    </div>

                    {/* Slots Grid (Triangle layout) */}
                    <div className="relative flex flex-col items-center gap-6">
                        
                        {/* Result Slot (Top) */}
                        <div className="relative z-10">
                            <div className="w-28 h-28 rounded-full bg-[#c5c0b8] shadow-deep-slot flex items-center justify-center relative border border-apparatus-stone-dark/30">
                                {/* Glowing Aura */}
                                <div className={`absolute inset-0 rounded-full shadow-glow opacity-50 ${isFusing ? 'animate-ping' : 'animate-pulse'}`}></div>
                                {/* Placeholder Image for Result */}
                                <div 
                                    className="w-20 h-20 rounded-full bg-center bg-no-repeat bg-cover opacity-80 mix-blend-multiply transition-all duration-1000" 
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzMUU_l-aFRfHYt60lE3sOVMLCNjLnzq0j8APbISoUNC7Mpdapy45p9KxXnqS2t9OKucwqJ5XJ_26Y6WHMBobuM0-J_35SzLiF3zC4tlFMvtjBqJJa860OFOXSxlQLZIL1cdjshX9XJPqXRyRdF-lcBtc4Mf5L8YVlFDzXTfYW8qg5ZQibEQzD9qBJHh-CLe-i9eHXQ91OIYRjnPP56cIBbS9Un892lIToPlDrhXeyDrvRKdvfT7a292ctf9zl_HUbG2x4UNjWAuw")' }}
                                ></div>
                                <span className={`material-symbols-outlined absolute text-primary/80 text-4xl ${isFusing ? 'animate-spin' : 'animate-pulse'}`}>auto_awesome</span>
                            </div>
                            <p className="text-center text-xs font-bold mt-2 text-primary uppercase tracking-wider font-noto-sans">Preview</p>
                        </div>

                        {/* Connector Lines (Visual) */}
                        <div className="absolute top-14 w-40 h-24 border-l-2 border-r-2 border-b-0 border-apparatus-bronze/30 rounded-t-full pointer-events-none -z-0"></div>

                        {/* Input Slots (Bottom Row) */}
                        <div className="flex justify-between w-full gap-8 mt-2">
                            
                            {/* Slot 1 */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-20 h-20 rounded-full bg-[#c5c0b8] shadow-deep-slot flex items-center justify-center border border-apparatus-stone-dark/30 relative">
                                    {slot1 ? (
                                        <>
                                            <div 
                                                className="w-16 h-16 rounded-full bg-center bg-no-repeat bg-cover shadow-sm" 
                                                style={{ backgroundImage: `url("${slot1.image}")` }}
                                            ></div>
                                            <button onClick={() => setSlot1(null)} className="absolute -top-1 -right-1 bg-red-900/80 text-white rounded-full p-0.5 shadow-md hover:bg-red-800 transition-colors">
                                                <span className="material-symbols-outlined text-[14px]">close</span>
                                            </button>
                                        </>
                                    ) : (
                                        <span className="material-symbols-outlined text-apparatus-ink/20 text-3xl">add</span>
                                    )}
                                </div>
                                <p className="text-apparatus-ink/70 text-xs font-medium font-noto-sans">{slot1 ? slot1.name : 'Select Item'}</p>
                            </div>

                            {/* Slot 2 */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-20 h-20 rounded-full bg-[#c5c0b8] shadow-deep-slot flex items-center justify-center border border-apparatus-stone-dark/30 relative">
                                    {slot2 ? (
                                        <>
                                            <div 
                                                className="w-16 h-16 rounded-full bg-center bg-no-repeat bg-cover shadow-sm" 
                                                style={{ backgroundImage: `url("${slot2.image}")` }}
                                            ></div>
                                            <button onClick={() => setSlot2(null)} className="absolute -top-1 -right-1 bg-red-900/80 text-white rounded-full p-0.5 shadow-md hover:bg-red-800 transition-colors">
                                                <span className="material-symbols-outlined text-[14px]">close</span>
                                            </button>
                                        </>
                                    ) : (
                                        <span className="material-symbols-outlined text-apparatus-ink/20 text-3xl">add</span>
                                    )}
                                </div>
                                <p className="text-apparatus-ink/70 text-xs font-medium font-noto-sans">{slot2 ? slot2.name : 'Select Item'}</p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Stats Parchment (Overlapping the stone slightly) */}
                <div className="w-[95%] -mt-4 z-20 rotate-1 transition-transform hover:rotate-0 transform-origin-top">
                    <div className="bg-apparatus-parchment rounded-sm shadow-paper border border-apparatus-border p-5 relative">
                        {/* Torn edge effect top */}
                        <div className="absolute -top-1 left-0 right-0 h-1 bg-apparatus-parchment clip-path-jagged"></div>
                        {/* Pin */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-apparatus-bronze shadow-sm border border-white/20"></div>
                        
                        <h3 className="text-apparatus-ink/90 font-bold text-sm uppercase tracking-widest border-b border-apparatus-ink/10 pb-2 mb-3 text-center font-noto-sans">Synthesis Forecast</h3>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <span className="text-apparatus-ink/50 text-xs uppercase font-semibold font-noto-sans">Est. Power</span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-bold text-apparatus-ink font-noto-serif">450</span>
                                    <span className="text-xs font-bold text-primary">+50%</span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-apparatus-ink/50 text-xs uppercase font-semibold font-noto-sans">Durability</span>
                                <span className="text-lg font-bold text-apparatus-ink font-noto-serif">High</span>
                            </div>
                            <div className="col-span-2 bg-primary/10 p-2 rounded border border-primary/20 flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">local_fire_department</span>
                                <div className="flex flex-col">
                                    <span className="text-primary font-bold text-sm font-noto-sans">Flame Resistance</span>
                                    <span className="text-apparatus-ink/60 text-xs font-noto-serif">Grants immunity to lava tiles</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Lever (Action Button) */}
                <div className="w-full mt-6 px-4">
                    <button 
                        onClick={handleFuse}
                        className="group relative w-full h-16 bg-gradient-to-b from-[#b87333] to-[#8c5625] rounded-lg shadow-[0_4px_0_rgb(101,67,33),0_15px_20px_rgba(0,0,0,0.2)] active:shadow-none active:translate-y-1 transition-all flex items-center justify-center overflow-hidden border-t border-white/20 active:border-transparent"
                    >
                        {/* Gears Decoration */}
                        <span className={`material-symbols-outlined absolute left-4 text-white/20 text-4xl ${isFusing ? 'animate-spin' : 'animate-[spin_4s_linear_infinite]'}`}>settings</span>
                        <span className={`material-symbols-outlined absolute right-4 text-white/20 text-4xl ${isFusing ? 'animate-spin' : 'animate-[spin_4s_linear_infinite_reverse]'}`}>settings</span>
                        <div className="flex flex-col items-center z-10">
                            <span className="text-white font-bold text-lg tracking-widest drop-shadow-md group-hover:text-amber-100 font-noto-serif">
                                {isFusing ? 'FUSING...' : 'FUSE RELICS'}
                            </span>
                            <span className="text-[10px] text-amber-200/80 uppercase tracking-wider font-noto-sans">Pull Lever</span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Inventory Drawer (Bottom) */}
            <div className="absolute bottom-0 w-full bg-[#3e342b] pt-4 pb-8 rounded-t-xl shadow-[0_-5px_15px_rgba(0,0,0,0.3)] z-30 border-t border-[#5c4d41]">
                {/* Handle visual */}
                <div className="mx-auto w-16 h-1.5 rounded-full bg-[#5c4d41] mb-3"></div>
                <h4 className="text-[#dcd8d3] text-sm font-bold px-5 mb-3 uppercase tracking-wider flex items-center gap-2 font-noto-sans">
                    <span className="material-symbols-outlined text-sm text-primary">backpack</span>
                    Inventory
                </h4>
                <div className="flex overflow-x-auto hide-scrollbar px-5 gap-3 pb-2">
                    {INVENTORY_ITEMS.map((item) => (
                        <div key={item.id} className="flex-shrink-0 flex flex-col gap-2 w-24" onClick={() => handleInventoryClick(item)}>
                            <div className="w-24 h-24 bg-[#2a221b] rounded-lg border border-[#5c4d41] relative flex items-center justify-center shadow-inner group cursor-pointer hover:border-primary transition-colors">
                                <div className="absolute inset-0 bg-[url('https://placeholder.pics/svg/100')] opacity-5"></div>
                                <div 
                                    className="w-16 h-16 bg-center bg-no-repeat bg-cover transition-transform group-hover:scale-105" 
                                    style={{ backgroundImage: `url("${item.image}")` }}
                                ></div>
                            </div>
                            <p className="text-[#dcd8d3] text-xs text-center font-medium leading-tight font-noto-serif">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </div>
  );
};

export default FusionApparatusScreen;