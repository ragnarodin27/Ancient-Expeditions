import React, { useState } from 'react';
import { useGame } from '../GameContext';

interface DailyRewardScreenProps {
  onBack: () => void;
}

const DailyRewardScreen: React.FC<DailyRewardScreenProps> = ({ onBack }) => {
  const { addToInventory } = useGame();
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  const handleClaim = () => {
    if (unlocked || isUnlocking) return;
    setIsUnlocking(true);
    
    // Simulate mechanical unlocking delay
    setTimeout(() => {
        setIsUnlocking(false);
        setUnlocked(true);
        // Award item
        addToInventory('mysterious_shard', 0);
    }, 2500);
  };

  return (
    <div className="h-full w-full bg-[#1a1614] text-white font-display antialiased overflow-hidden flex flex-col relative select-none">
        
        {/* CSS for animations */}
        <style>{`
            @keyframes float {
                0% { transform: translateY(0px); opacity: 0; }
                50% { opacity: 0.5; }
                100% { transform: translateY(-20px); opacity: 0; }
            }
            .particle { animation: float 4s infinite ease-in-out; }
        `}</style>

        {/* Ambient Background */}
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none"></div>

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between px-4 pt-6 pb-2 shrink-0">
            <button 
                onClick={onBack}
                className="flex size-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 transition-colors"
            >
                <span className="material-symbols-outlined text-xl">arrow_back</span>
            </button>
            <div className="flex flex-col items-center">
                <h1 className="text-sm uppercase tracking-[0.2em] text-[#f49d25] font-bold mb-1 drop-shadow-sm">Temple Rewards</h1>
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#f49d25]/40 to-transparent"></div>
            </div>
            <button className="flex size-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-xl">help</span>
            </button>
        </header>

        {/* Streak Tracker */}
        <div className="relative z-10 flex w-full flex-col items-center justify-center py-6 px-6 shrink-0">
            <div className="flex w-full items-center justify-between relative">
                {/* Connecting Line */}
                <div className="absolute top-[14px] left-2 right-2 h-[2px] bg-[#3d342b] -z-10"></div>
                
                {/* Days */}
                {/* Day I */}
                <div className="flex flex-col items-center gap-2">
                    <div className="w-7 h-7 rounded-full border-2 border-[#5c4d41] bg-[#2a241d] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5c4d41]"></div>
                    </div>
                    <span className="text-[10px] text-[#5c4d41] font-serif font-bold">I</span>
                </div>
                {/* Day II */}
                <div className="flex flex-col items-center gap-2">
                    <div className="w-7 h-7 rounded-full border-2 border-[#5c4d41] bg-[#2a241d] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5c4d41]"></div>
                    </div>
                    <span className="text-[10px] text-[#5c4d41] font-serif font-bold">II</span>
                </div>
                {/* Day III */}
                <div className="flex flex-col items-center gap-2">
                    <div className="w-7 h-7 rounded-full border-2 border-[#5c4d41] bg-[#2a241d] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5c4d41]"></div>
                    </div>
                    <span className="text-[10px] text-[#5c4d41] font-serif font-bold">III</span>
                </div>
                 {/* Day IV (Active) */}
                 <div className="flex flex-col items-center gap-2 -mt-1">
                    <div className="relative w-9 h-9 flex items-center justify-center">
                        <div className="absolute inset-0 bg-[#f49d25]/20 rounded-full blur-[4px]"></div>
                        <div className="w-full h-full rounded-full border-2 border-[#f49d25] bg-[#2a241d] flex items-center justify-center shadow-[0_0_10px_rgba(244,157,37,0.4)]">
                             <div className="w-3 h-3 rounded-full bg-[#f49d25] shadow-inner"></div>
                        </div>
                    </div>
                    <span className="text-[10px] text-[#f49d25] font-serif font-bold">IV</span>
                </div>
                {/* Day V */}
                <div className="flex flex-col items-center gap-2">
                    <div className="w-7 h-7 rounded-full border-2 border-[#3d342b] bg-[#1c1917]"></div>
                    <span className="text-[10px] text-[#3d342b] font-serif font-bold">V</span>
                </div>
                {/* Day VI */}
                <div className="flex flex-col items-center gap-2">
                    <div className="w-7 h-7 rounded-full border-2 border-[#3d342b] bg-[#1c1917]"></div>
                    <span className="text-[10px] text-[#3d342b] font-serif font-bold">VI</span>
                </div>
                {/* Day VII (Diamond) */}
                <div className="flex flex-col items-center gap-2">
                    <div className="w-7 h-7 rotate-45 border-2 border-[#3d342b] bg-[#1c1917]"></div>
                    <span className="text-[10px] text-[#3d342b] font-serif font-bold mt-1">VII</span>
                </div>
            </div>
        </div>

        {/* Main Content Area */}
        <main className="relative z-10 flex flex-1 flex-col items-center px-6 w-full max-w-md mx-auto">
            
            {/* Title Text */}
            <div className="text-center mb-6">
                <h2 className="text-[#f49d25] text-2xl font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {unlocked ? "Seal Broken" : "The Iron Cryptex"}
                </h2>
                <div className="flex flex-col items-center gap-1 mt-1">
                    <p className="text-[#8c7b66] text-sm font-sans">Day 4 Challenge</p>
                    <div className="w-1 h-1 rounded-full bg-[#f49d25]/50"></div>
                </div>
            </div>

            {/* The Cryptex Card */}
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/5 bg-[#0c0a09] group">
                
                {/* Background Image */}
                <div 
                    className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${unlocked ? 'scale-110 brightness-125' : 'scale-100'}`}
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfxhNDclaxmFExA916a8OOmvcDWzIDfb2GZ_7gty5JF0nNvRhlG1tVsJ0Zp2XjrakWOBuhFa7xYxTzPgmb5t85a1lkeuuUdNdUmeeGv2Ez_9mXix5L1CqB4WH637Yu-1Ul9VApJEVdYoYwWyhfoWdiBMfNphcwhj2isxrBaYlofm157CiZieo-aihsSerfIFq_3N1lL40MVWZ0gt98zeku6lXuz9rd10m6wGUnNoXE2TI6S1BbeeqjcgfHMIvW_C8UrSgbLbQ7N0E')" }}
                ></div>

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 pointer-events-none"></div>

                {/* Top Badge */}
                {!unlocked && (
                    <div className="absolute top-6 left-1/2 -translate-x-1/2">
                        <div className="px-4 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
                            <span className="text-[10px] text-white/80 font-sans font-bold uppercase tracking-[0.15em]">Rotate Rings</span>
                        </div>
                    </div>
                )}

                {/* Runes Interaction */}
                <div className={`absolute top-1/2 left-0 w-full -translate-y-1/2 flex justify-between px-4 opacity-70 ${unlocked ? 'hidden' : ''}`}>
                    <span className="material-symbols-outlined text-4xl text-white/50">chevron_left</span>
                    <span className="material-symbols-outlined text-4xl text-white/50">chevron_right</span>
                </div>

                {/* Runes Center */}
                <div className={`absolute bottom-32 w-full flex justify-center gap-6 mix-blend-screen transition-all duration-1000 ${unlocked ? 'opacity-0 scale-150 blur-md' : 'opacity-80'}`}>
                    <span className="text-4xl font-serif text-[#f49d25] drop-shadow-[0_0_10px_rgba(244,157,37,0.8)]">ᚠ</span>
                    <span className="text-4xl font-serif text-[#f49d25] drop-shadow-[0_0_10px_rgba(244,157,37,0.8)]">ᚢ</span>
                    <span className="text-4xl font-serif text-[#f49d25] drop-shadow-[0_0_10px_rgba(244,157,37,0.8)]">ᚦ</span>
                </div>

                {/* Unlock Animation Content */}
                {unlocked && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center animate-in zoom-in fade-in duration-700 z-20">
                         <div className="w-32 h-32 relative mb-4">
                             <div className="absolute inset-0 bg-[#f49d25]/40 blur-xl rounded-full animate-pulse"></div>
                             <img 
                                src="https://images.unsplash.com/photo-1618516969850-93a830b561df?q=80&w=1000&auto=format&fit=crop" 
                                alt="Reward" 
                                className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(244,157,37,0.6)] relative z-10"
                             />
                         </div>
                         <h3 className="text-2xl font-bold text-white text-center drop-shadow-md">Obsidian Shard</h3>
                         <p className="text-[#f49d25] font-sans text-xs tracking-widest uppercase mt-2">Added to Inventory</p>
                    </div>
                )}

                {/* Footer Info Box */}
                <div className={`absolute bottom-4 left-4 right-4 bg-[#1c1917]/90 backdrop-blur-sm rounded-lg border border-white/5 p-3 flex items-center gap-4 transition-transform duration-500 ${unlocked ? 'translate-y-[150%]' : ''}`}>
                    <div className="w-10 h-10 rounded bg-[#2a241d] border border-[#3d342b] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[#f49d25] text-xl">diamond</span>
                    </div>
                    <div>
                        <p className="text-[#e3dacb] font-display font-bold text-sm">Mystery Contents</p>
                        <p className="text-[#8c7b66] font-sans text-[10px]">Rare Item · 20% Chance for Legendary</p>
                    </div>
                </div>

            </div>

            {/* Instruction Text */}
            <div className="mt-6 text-center max-w-[280px]">
                <p className="text-[#8c7b66] text-xs font-serif leading-relaxed">
                    {unlocked 
                        ? "The ancient mechanism clicks into place, revealing its hidden treasure."
                        : "Align the ancient runes to unlock the seal.\nListen for the click of the tumblers."
                    }
                </p>
            </div>

        </main>

        {/* Bottom Button Area */}
        <div className="w-full p-6 pb-8 bg-gradient-to-t from-[#0c0a09] to-transparent z-20 shrink-0">
            <button 
                onClick={handleClaim}
                disabled={isUnlocking || unlocked}
                className={`group w-full h-14 rounded-lg relative overflow-hidden transition-all duration-300 active:scale-[0.98] shadow-[0_10px_20px_rgba(0,0,0,0.5)]
                   ${unlocked ? 'grayscale brightness-75 cursor-default' : ''}
                `}
            >
                {/* Button Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#b88a44] to-[#7d5a23] border-t border-[#ffeebb]/30"></div>
                
                {/* Shine Effect */}
                {!unlocked && !isUnlocking && (
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                )}
                
                {/* Content */}
                <div className="relative h-full flex items-center justify-center gap-3">
                    {isUnlocking ? (
                        <span className="material-symbols-outlined text-[#2a1d0f] text-xl animate-spin">settings</span>
                    ) : (
                        <span className="material-symbols-outlined text-[#2a1d0f] text-xl">{unlocked ? 'lock_open' : 'lock'}</span>
                    )}
                    <span className="text-[#2a1d0f] font-display font-bold tracking-[0.15em] uppercase text-sm">
                        {isUnlocking ? 'Engaging...' : unlocked ? 'Reward Unlocked' : 'Unlock Reward'}
                    </span>
                </div>
            </button>
            
            {!unlocked && (
                <p className="text-center text-[#5c4d41] text-[10px] uppercase tracking-widest mt-4 font-sans font-bold">Tap to engage mechanism</p>
            )}
        </div>

    </div>
  );
};

export default DailyRewardScreen;