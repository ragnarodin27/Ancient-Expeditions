import React, { useState } from 'react';
import { useGame } from '../GameContext';

interface JournalScreenProps {
  onBack: () => void;
}

const JournalScreen: React.FC<JournalScreenProps> = ({ onBack }) => {
  const { credits } = useGame();
  const [claimed, setClaimed] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Sprint 2000m through Jungle', subtext: 'Avoid the roots!', done: false, progress: null },
    { id: 2, text: 'Collect 3 Jade Idols', subtext: 'Done. Kept one for myself.', done: true, progress: null },
    { id: 3, text: 'Slide under 10 traps', subtext: 'Progress:', done: false, progress: { current: 6, max: 10 } },
  ]);

  const toggleTask = (id: number) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const handleClaim = () => {
    setClaimed(true);
    // Logic to add gold would go here
  };

  return (
    <div className="h-full w-full bg-[#2a1d15] font-handwriting h-screen overflow-hidden flex items-center justify-center selection:bg-[#8a1c1c]/20 selection:text-[#1a1614]">
      {/* Cinematic Vignette */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[radial-gradient(circle_at_center,transparent_20%,#000000_100%)] mix-blend-multiply opacity-80"></div>
      <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-black/40 to-transparent z-40 pointer-events-none"></div>
      
      {/* Background Wood Pattern */}
      <div className="absolute inset-0 bg-[#3e2b20]">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-40 mix-blend-overlay"></div>
      </div>

      <div className="relative w-full h-full max-w-md mx-auto flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-6 pt-8">
            <button onClick={onBack} className="flex items-center justify-center text-[#f2e8d5]/80 hover:text-[#f2e8d5] transition-colors transform hover:-translate-x-1">
                <span className="material-symbols-outlined text-[32px] drop-shadow-md">arrow_back</span>
            </button>
            <div className="relative rotate-2">
                <div 
                    className="absolute inset-0 bg-[#f2e8d5] shadow-md transform -rotate-1 skew-x-1 border border-stone-300"
                    style={{ borderRadius: "2px 255px 3px 25px / 255px 5px 225px 5px" }}
                ></div>
                <div className="relative px-3 py-1 flex items-center gap-1 z-10">
                    <span className="material-symbols-outlined text-[#1a1614] text-[20px]">monetization_on</span>
                    <span className="text-[#1a1614] font-bold text-lg font-handwriting">{credits.toLocaleString()}</span>
                </div>
            </div>
        </div>

        {/* Main Journal Page */}
        <div className="relative flex-1 m-4 mt-20 mb-8 bg-[#e6dac3] rounded-[4px] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col transform rotate-[0.5deg]">
            
            {/* Paper Textures */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-60 mix-blend-multiply pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/10 pointer-events-none mix-blend-multiply"></div>
            <div className="absolute top-0 bottom-0 left-0 w-full h-full bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none mix-blend-multiply z-10"></div>
            
            {/* Coffee Stains */}
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full border-[12px] border-[#3e2b20]/10 blur-[2px] pointer-events-none mix-blend-multiply z-0"></div>
            <div className="absolute bottom-12 -left-6 w-24 h-16 bg-[#3e2b20]/20 blur-xl transform rotate-12 pointer-events-none mix-blend-multiply z-0"></div>

            {/* Content Area */}
            <div className="relative z-20 flex flex-col h-full overflow-y-auto no-scrollbar p-1">
                <div className="flex-1 p-6 pb-2 border-b-2 border-dashed border-[#4a4540]/30 relative">
                    <div className="flex flex-col items-center mb-6">
                        <span className="font-rough text-[#4a4540] text-xl -rotate-2 self-end mr-4">Oct 14th</span>
                        <h1 className="font-script-title text-5xl text-[#1a1614] drop-shadow-sm leading-tight mt-[-10px]">Daily Quest</h1>
                        <div className="w-32 h-1 bg-[#1a1614]/80 rounded-full mt-2 transform -rotate-1 filter blur-[0.5px]"></div>
                    </div>
                    
                    <div className="flex flex-col gap-5">
                        {tasks.map((task) => (
                            <div key={task.id} onClick={() => toggleTask(task.id)} className={`group flex items-start gap-4 select-none cursor-pointer ${task.done ? 'opacity-70' : ''}`}>
                                <div className="relative shrink-0 pt-1">
                                    <div className={`w-6 h-6 border-2 border-[#1a1614] transition-colors ${task.done ? 'bg-[#1a1614]/5' : 'group-hover:bg-[#1a1614]/5'}`}
                                         style={{ borderRadius: "2px 255px 3px 25px / 255px 5px 225px 5px" }}
                                    >
                                       {task.done && (
                                            <span className="material-symbols-outlined text-[#1a1614] text-2xl font-bold -mt-1 -ml-1 transform -rotate-12">check</span>
                                       )}
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className={`text-2xl leading-none text-[#1a1614] transition-colors duration-300 ${task.done ? 'line-through decoration-2 decoration-[#1a1614]/60' : 'group-hover:text-[#8a1c1c]'}`}>
                                        {task.text}
                                    </span>
                                    {task.progress ? (
                                        <div className="flex items-center gap-2 mt-1 ml-1">
                                            <span className="font-rough text-lg text-[#4a4540]">{task.subtext}</span>
                                            <div className="w-24 h-2 border border-[#1a1614]/40 rounded-full p-[1px]">
                                                <div className="h-full bg-[#1a1614]/60 rounded-full filter blur-[0.5px]" style={{ width: `${(task.progress.current / task.progress.max) * 100}%` }}></div>
                                            </div>
                                            <span className="font-rough text-lg text-[#1a1614]">{task.progress.current}/{task.progress.max}</span>
                                        </div>
                                    ) : (
                                        <span className="font-rough text-lg text-[#4a4540] mt-1 ml-1">{task.subtext}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Rewards Section */}
                <div className="relative p-6 pt-4 flex flex-col items-center bg-black/5">
                    <h2 className="font-script-title text-3xl text-[#1a1614] mb-4 self-start transform rotate-1">Rewards</h2>
                    <div className="w-full flex justify-around items-center mb-6 px-4">
                        <div className="flex flex-col items-center gap-1 transform -rotate-2">
                            <div className="relative w-16 h-16 flex items-center justify-center">
                                <div className="absolute inset-0 border-2 border-[#1a1614]/30 rounded-full border-dashed animate-pulse"></div>
                                <span className="material-symbols-outlined text-[40px] text-[#1a1614] blur-[0.3px] opacity-80" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}>money_bag</span>
                            </div>
                            <span className="font-rough text-xl text-[#1a1614] font-bold">500 Gold</span>
                        </div>
                        <span className="material-symbols-outlined text-[#4a4540] text-2xl transform rotate-90 opacity-50">arrow_right_alt</span>
                        <div className="flex flex-col items-center gap-1 transform rotate-2">
                            <div className="relative w-16 h-16 flex items-center justify-center">
                                <span className="material-symbols-outlined text-[40px] text-[#1a1614] blur-[0.3px] opacity-80" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}>diamond</span>
                                <span className="absolute -top-1 -right-1 text-xl text-[#1a1614] font-rough">+</span>
                                <span className="absolute -bottom-1 -left-1 text-lg text-[#1a1614] font-rough">+</span>
                            </div>
                            <span className="font-rough text-xl text-[#1a1614] font-bold">1 Gem</span>
                        </div>
                    </div>

                    {/* Wax Seal Button */}
                    <button 
                        onClick={handleClaim}
                        disabled={claimed}
                        className={`group relative w-24 h-24 flex items-center justify-center transition-transform duration-200 mt-2 ${claimed ? 'opacity-50 grayscale' : 'active:scale-95'}`}
                    >
                        <div className="absolute inset-0 bg-[#8a1c1c] rounded-full shadow-[inset_0_2px_5px_rgba(255,255,255,0.2),0_4px_10px_rgba(0,0,0,0.4)] border-4 border-[#5c1010]/30" style={{ borderRadius: "45% 55% 40% 60% / 55% 45% 60% 40%" }}></div>
                        <div className="absolute inset-1 bg-[#8a1c1c] rounded-full border-2 border-[#a93636]/50 blur-[1px]" style={{ borderRadius: "50% 50% 45% 55% / 50% 55% 45% 50%" }}></div>
                        <div className="relative w-16 h-16 rounded-full border border-[#5c1010]/40 flex flex-col items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] bg-[#8a1c1c]">
                            <span className="font-serif italic text-[#f2e8d5]/90 text-lg font-bold tracking-widest drop-shadow-md group-hover:scale-105 transition-transform">
                                {claimed ? 'SENT' : 'CLAIM'}
                            </span>
                            <div className="w-8 h-[1px] bg-[#f2e8d5]/50 mt-1"></div>
                        </div>
                        <div className="absolute -bottom-1 right-4 w-3 h-3 bg-[#8a1c1c] rounded-full shadow-md"></div>
                    </button>
                </div>
            </div>
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center pb-2 opacity-60">
                <span className="font-rough text-[#f2e8d5] text-xl tracking-widest">Page 14 of 365</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default JournalScreen;