import React from 'react';

interface FieldMapOverlayScreenProps {
  onBack: () => void;
}

const FieldMapOverlayScreen: React.FC<FieldMapOverlayScreenProps> = ({ onBack }) => {
  return (
    <div className="relative flex h-full w-full flex-col bg-[#221e10] overflow-hidden select-none font-display text-white">
      {/* Background Game World (Blurred) */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-cover bg-center blur-md brightness-50 contrast-125 scale-105" 
              style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtgiA-1Kjn2OT7yUFSi6d-IQhfijZinGCP1g9HvQP1xtltZewdPpvU-BO2UPcQEegtHthTnMXDOGWMBDs5OSHkLAwKpSPrLlRjqouDDoy5Errw4QnnznA3rHFzqrlRyW_9DQD8HTQ1fq9t2lPKj3vEAC3jS_qTR0gsroXtIZmp6vhqgMIm6ZHOj9NAkNBbw7YQlpLpUo_bxugH8GGC8NPRuWFMKVB5ibIKmPARQwLjW4dqQFX6Ugb81hxMHr-a4c2SIon-ZnLJqY8')"}}>
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60"></div>
      </div>

      {/* Main Overlay Container */}
      <div className="relative z-10 flex flex-col h-full w-full max-w-md mx-auto overflow-hidden">
         {/* Top App Bar - Coordinates & Time */}
         <div className="flex items-center bg-transparent p-6 pb-2 justify-between">
            <button 
                onClick={onBack}
                className="text-[#f4c025] flex size-12 shrink-0 items-center justify-start drop-shadow-lg cursor-pointer hover:scale-110 transition-transform"
            >
                <span className="material-symbols-outlined text-[32px]">arrow_back</span>
            </button>
            <div className="flex flex-col items-center">
                <h2 className="text-white text-lg font-medium leading-tight tracking-tight drop-shadow-md">14° 52' N, 22° 11' E</h2>
                <span className="text-[#f4c025]/90 text-xs uppercase tracking-[0.2em] font-bold">Golden Hour</span>
            </div>
            <div className="flex w-12 items-center justify-end">
                <button className="flex items-center justify-center text-white drop-shadow-lg">
                    <span className="material-symbols-outlined text-[28px]">visibility</span>
                </button>
            </div>
         </div>

         {/* Headline - Current Objective */}
         <div className="px-8 pt-4 pb-2">
            <h3 className="text-white tracking-wide text-2xl font-bold leading-tight text-center drop-shadow-lg">Find the Sun God’s Altar</h3>
            <p className="text-[#f4c025]/80 text-sm font-medium leading-normal text-center drop-shadow-md italic mt-1">Navigate through the frayed ruins toward the red ink marker.</p>
         </div>

         {/* Tactile Map Section */}
         <div className="flex-1 relative flex items-center justify-center p-4">
            {/* The Parchment Map */}
            <div className="relative w-full aspect-[3/4] bg-[#e6d5b8] shadow-2xl overflow-hidden border-[1px] border-black/20"
                 style={{
                     backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_jepb3ZmQeWSg_txv8RZGHEnZPck_oPnPs42VIq_i1APu6Fh26YbXuitik6unRwG4nPQ0i0XagYoN61UQ4KSuMQ6kGed3bZekXn94qn6iUXhuXE1Yldz2jL868Y0n_v-FAYDR2_S6j0dr8kQOzdh50Mq26QQFhvmDlXqyPtCxTxJAaJ-RgLF-2A49OL8dZcP8NSNRzDoQ-Y7SgSAPdtKJ6PqOYV_4ZQ4ucm0F03WphCGR43FXKYzGyAFlJ56q-7bb7qI1gdgWB1k')",
                     backgroundColor: "#dcc7a1",
                     boxShadow: "0 50px 100px -20px rgba(0,0,0,0.7), inset 0 0 50px rgba(0,0,0,0.2)"
                 }}>
                 
                 {/* Burnt Edges Effect */}
                 <div className="absolute inset-0 border-[16px] border-transparent shadow-[inset_0_0_40px_rgba(40,20,0,0.8)]" 
                      style={{ borderImage: "radial-gradient(#3a2610, #1a1108) 30 stretch" }}></div>
                 
                 {/* Map Content (Drawn Features) */}
                 <div className="absolute inset-0 p-8 flex flex-col opacity-80">
                    <div className="w-full h-full border-2 border-[#8b5e34]/30 rounded-sm relative overflow-hidden">
                        {/* Topography Sketches (Placeholder visualization) */}
                        <div className="absolute top-10 left-10 text-[#4a3728] opacity-60">
                            <span className="material-symbols-outlined text-[120px]">terrain</span>
                        </div>
                        <div className="absolute bottom-20 right-10 text-[#4a3728] opacity-60 rotate-12">
                            <span className="material-symbols-outlined text-[100px]">forest</span>
                        </div>
                        
                        {/* Red Ink Path */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                            <path d="M 20 80 Q 40 70 50 50 T 80 20" fill="transparent" opacity="0.7" stroke="#8b0000" strokeDasharray="4,2" strokeWidth="1.5"></path>
                            <circle cx="80" cy="20" fill="#8b0000" opacity="0.8" r="3"></circle>
                        </svg>

                        {/* Landmark Under Magnifying Glass */}
                        <div className="absolute top-[45%] left-[45%]">
                            <div className="w-24 h-24 rounded-full border-4 border-[#8b5e34]/20 backdrop-blur-[1px] flex items-center justify-center scale-110 shadow-lg">
                                <div className="text-[#8b0000] drop-shadow-sm flex flex-col items-center">
                                    <span className="material-symbols-outlined text-[32px]">location_on</span>
                                    <span className="text-[10px] font-bold uppercase tracking-tighter">Target</span>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>

                 {/* Attached Compass (Physical UI) */}
                 <div className="absolute top-4 right-4 w-16 h-16 bg-[#c5a059] rounded-full border-4 border-[#8b6b23] shadow-lg flex items-center justify-center">
                    <div className="absolute inset-1 rounded-full border-2 border-black/10 bg-[#f4ebd0] flex items-center justify-center">
                        <div className="w-1 h-12 bg-gradient-to-b from-[#8b0000] via-[#8b0000] to-black/40 rotate-45 rounded-full"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-black/60">
                            <span className="absolute top-1">N</span>
                            <span className="absolute right-1">E</span>
                            <span className="absolute bottom-1">S</span>
                            <span className="absolute left-1">W</span>
                        </div>
                    </div>
                 </div>

                 {/* Magnifying Glass Handle (Visual Element) */}
                 <div className="absolute top-[52%] left-[62%] w-32 h-3 bg-gradient-to-b from-[#3a2610] to-[#1a1108] -rotate-45 origin-left rounded-full shadow-xl"></div>
            </div>

            {/* Explorer's Hands (Overlaying bottom of map) */}
            <div className="absolute -bottom-8 left-0 right-0 flex justify-between px-2 pointer-events-none">
                {/* Left Hand */}
                <div className="w-40 h-48 bg-gradient-to-t from-[#2a1b0c] to-transparent opacity-90 rotate-[-15deg] transform translate-y-10">
                    <div className="w-full h-full bg-cover bg-center mix-blend-multiply" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAqnJFHnvJffDAhAE7DgAeoHQodlZHzU7Vfnsm4zAdTABMUdvwaHiv_3eXlgd4NgvL6VEBWcRwF6CVFsCJrOX0zhn_eEOkdjNjVvrtmEpwd7-iOEUiZhT8QpOo7zAbp21PmfudHMjau_qwyxJFnpaoFaIKSrPSKyvUI0R8dVlTE-LhtrqFrMyMnWZcYsna0LP3JLhdnJyY9R3S3-RtYai0xfXBVzmv3If9B5tJYR6zMKSPGI_UfuMO3dBcgtWWctBrDgPGu09agbW8')"}}></div>
                </div>
                {/* Right Hand */}
                <div className="w-40 h-48 bg-gradient-to-t from-[#2a1b0c] to-transparent opacity-90 rotate-[15deg] transform translate-y-10">
                    <div className="w-full h-full bg-cover bg-center mix-blend-multiply" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlF1po9qtE7PobbNXEmQdy3S-MFS8Jbb2jqre6dNCkdralmlAupRBKqwLj8MoBKpxZ0HEkDkUw1y4ANYmSEM-7Q76ZonfCYVkufVgv-Z1rEmWS9ul4i_8qufk_rqyHaoaDvs2I4dLPua6v67dbbDZC5tDfav-EdOI7B57hAYeTD6GScIhPQk6jYZLWcZSo8WoeqG9O54d0qSgpnL7CswyMUsK989CUdqW65uM_sdBb-1pecNVzmGxnsFCU5t2fdROcnZA0Vnt96BQ')"}}></div>
                </div>
            </div>
         </div>

         {/* Bottom Controls & Progress */}
         <div className="bg-black/40 backdrop-blur-md border-t border-white/10 px-6 py-4 pb-10">
            <div className="flex flex-col gap-3">
                <div className="flex gap-6 justify-between items-center">
                    <p className="text-white text-base font-medium leading-normal flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#f4c025] text-sm">route</span>
                        Path Progress
                    </p>
                    <p className="text-[#f4c025] text-sm font-bold leading-normal">65%</p>
                </div>
                <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-[#f4c025]" style={{width: '65%'}}></div>
                </div>
                <div className="flex justify-between items-center mt-1">
                    <p className="text-white/60 text-xs font-normal leading-normal uppercase tracking-widest">Ruins of Xibalba</p>
                    <div className="flex gap-2">
                        {/* Map Tool Buttons */}
                        <button className="size-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white active:bg-[#f4c025]/20 hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined">zoom_in</span>
                        </button>
                        <button className="size-10 flex items-center justify-center rounded-lg bg-[#f4c025] text-[#221e10] font-bold shadow-lg shadow-[#f4c025]/20 hover:bg-[#e0b020] transition-colors">
                            <span className="material-symbols-outlined">edit</span>
                        </button>
                    </div>
                </div>
            </div>
         </div>

         {/* UI Interaction Hint */}
         <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold pointer-events-none z-50">
            Pinch to Inspect
         </div>
      </div>
    </div>
  );
};

export default FieldMapOverlayScreen;
