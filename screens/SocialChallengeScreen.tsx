import React, { useState } from 'react';

interface SocialChallengeScreenProps {
  onBack: () => void;
}

const SocialChallengeScreen: React.FC<SocialChallengeScreenProps> = ({ onBack }) => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    setTimeout(onBack, 1500);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-background-dark group/design-root font-display overflow-hidden">
        {/* Background Scene: Dark Cave Shore */}
        <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-cover bg-center bg-no-repeat opacity-80" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA1csTVVEl_fFRcH9ig41XslV04gd9k4lt0TwH48FlXWH0Q-T7-StfnZWjaYpHZoO_dhOCq679yuFc3gTNv9TgUKsuM9iDlodQHEN7RHDqdnXG3GTRJidrqBS5K7wTRBkZs_ap4dNbAA_Ux5s0NHINdcFK2BVO0iMBEO4YhQ0GUX9QYfe4UwNp-aAQfz9dD1TBdsTTDppn3Tyo6Z5fnQT4DUfreRC9rVXrSsz-bqkNNmPBIOMWf2goEPR8PImQ8-JQOTAGyLA0u86U')" }}></div>
            {/* Overlay Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#181511]/90 via-[#181511]/40 to-[#181511]/90"></div>
            {/* Torchlight Glow */}
            <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
        </div>

        {/* UI Content Layer */}
        <div className="relative z-10 flex flex-col h-full justify-between pt-6 pb-8 px-4 w-full max-w-md mx-auto">
            
            {/* Header */}
            <div className="w-full flex justify-between items-center opacity-90">
                <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                    <span className="material-symbols-outlined text-primary text-[20px]">explore</span>
                    <span className="text-sm font-medium tracking-wide text-white/90">Social Challenge</span>
                </div>
                <button onClick={onBack} className="p-2 rounded-full hover:bg-white/10 text-white/70 transition-colors">
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>

            {/* Main Interactive Area: The Scroll */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8 py-8 w-full perspective-1000">
                <div className={`w-full relative group transition-transform duration-700 ${accepted ? 'translate-y-[200%] rotate-12 opacity-0' : 'rotate-1 hover:rotate-0'}`}>
                    
                    {/* Top Scroll Roll */}
                    <div className="h-6 w-[96%] mx-auto bg-[#cbb898] rounded-full shadow-lg relative z-20 mb-[-12px]"></div>
                    
                    {/* Paper Body */}
                    <div className="bg-parchment text-ink p-6 md:p-8 rounded-sm shadow-[0_10px_30px_-5px_rgba(0,0,0,0.6)] relative z-10 mx-auto w-full">
                        {/* Texture */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>
                        {/* Water Stain */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#d4c5b0]/30 rounded-full blur-xl"></div>

                        {/* Content Header */}
                        <div className="flex items-start justify-between mb-6 border-b border-[#c4b395] pb-4 relative">
                            <div className="flex gap-4">
                                <div className="relative">
                                    <div className="w-14 h-14 rounded-lg bg-gray-300 bg-cover bg-center border-2 border-[#8c7b62] shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDs6uTX2ur1rCXO1szoKPtSwt9XRPlIC-dAX_JQVPocG5mmQ8j47HdV1aG3ugRl4jblLCIwMN8q5qACgJWeSghCRVCdVh-43_hYfoR8HQraArcy3MJbiYXciNGSR498ML0JMfvXXumtlainqSZvyFH7ksk7XmlnoRnwHhzqTXrsMNIen60BF9aZx--YSoceOqPFbTP-OFgyPr1Kn8vUf6o1ywQMqWQiEZjO9p34ILm2ZTY0W9V42cCLmpcQ5W1IKphYmy0QWZcNKaU')" }}></div>
                                    <div className="absolute -bottom-2 -right-2 bg-primary text-background-dark text-[10px] font-bold px-1.5 py-0.5 rounded border border-background-dark">LVL 42</div>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h2 className="text-lg font-bold leading-tight tracking-tight text-[#3e3223]">Explorer Sarah</h2>
                                    <p className="text-[#8c7b62] text-xs font-sans uppercase tracking-widest">Sent a challenge</p>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-[#8c7b62] opacity-50 text-[32px]">local_fire_department</span>
                        </div>

                        {/* Challenge Info */}
                        <div className="flex flex-col gap-4 mb-6">
                            <div className="flex items-baseline justify-between">
                                <span className="text-[#8c7b62] text-sm font-medium italic">Distance to beat</span>
                                <span className="text-4xl font-bold tracking-tighter text-[#3e3223] drop-shadow-sm">1,450m</span>
                            </div>
                            
                            {/* Map Snippet */}
                            <div className="w-full h-32 bg-[#d6cbb5] rounded border border-[#c4b395] overflow-hidden relative sepia-[0.4] contrast-[0.9] saturate-[0.5]">
                                <div className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-multiply" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596501042718-e32502690a29?q=80&w=300&auto=format&fit=crop')" }}></div>
                                <div className="absolute bottom-2 right-2 bg-[#3e3223]/10 backdrop-blur-[2px] px-2 py-1 rounded text-[10px] text-[#3e3223] font-bold font-sans">
                                    JUNGLE SECTOR 4
                                </div>
                            </div>
                            
                            <p className="text-[#3e3223]/80 text-sm italic leading-relaxed text-center mt-2">
                                "The path is slippery near the aqueducts. Watch your step!"
                            </p>
                        </div>

                        {/* Reward */}
                        <div className="flex items-center justify-center gap-2 py-3 bg-[#dbcbb0]/30 rounded border border-[#dbcbb0]">
                            <span className="material-symbols-outlined text-[#b08d55]">monetization_on</span>
                            <span className="text-[#3e3223] font-bold text-sm">Reward: 50 Ancient Coins</span>
                        </div>
                    </div>

                    {/* Bottom Scroll Roll */}
                    <div className="h-6 w-[96%] mx-auto bg-[#cbb898] rounded-full shadow-lg relative z-20 mt-[-12px]"></div>
                </div>
            </div>

            {/* Actions Area: Diegetic UI */}
            <div className={`w-full flex flex-col items-center gap-6 mt-4 transition-opacity duration-500 ${accepted ? 'opacity-0' : 'opacity-100'}`}>
                {/* Accept: Sand Writing */}
                <button 
                    onClick={handleAccept}
                    className="group w-full flex flex-col items-center justify-center gap-1 py-4 cursor-pointer focus:outline-none"
                >
                    <div className="relative">
                        <span className="text-2xl sm:text-3xl font-bold tracking-[0.15em] text-primary text-sand-traced transition-all duration-300 group-hover:tracking-[0.2em] group-hover:scale-105 group-hover:text-primary/90">
                            ACCEPT
                        </span>
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[10px] text-[#baad9c]/60 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans">
                            Trace in sand to confirm
                        </span>
                    </div>
                    <div className="h-0.5 w-12 bg-primary/30 rounded-full mt-1 blur-[1px] group-hover:w-24 transition-all duration-500"></div>
                </button>

                {/* Decline: Driftwood Button */}
                <button onClick={onBack} className="relative w-full max-w-[280px] h-12 flex items-center justify-center group overflow-hidden rounded-lg shadow-lg transform transition-transform active:scale-95">
                    {/* Wood Texture */}
                    <div className="absolute inset-0 bg-wood wood-texture border-t border-b border-[#3a2e22] bg-[#4a3b2a]">
                        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.1)_0px,rgba(0,0,0,0.1)_2px,transparent_2px,transparent_8px)]"></div>
                    </div>
                    {/* Edges */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#7a644b]/50"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black/40"></div>
                    
                    <div className="relative z-10 flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-[#c5b49b] text-[18px]">close</span>
                        <span className="text-[#c5b49b] text-sm font-bold tracking-wider uppercase">Decline & Toss</span>
                    </div>
                </button>
            </div>

        </div>
    </div>
  );
};

export default SocialChallengeScreen;