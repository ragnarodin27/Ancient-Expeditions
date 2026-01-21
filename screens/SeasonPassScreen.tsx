import React, { useRef, useState, useEffect } from 'react';

interface SeasonPassScreenProps {
  onBack: () => void;
}

const SeasonPassScreen: React.FC<SeasonPassScreenProps> = ({ onBack }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    isDown.current = true;
    sliderRef.current.classList.add('active');
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    if (sliderRef.current) sliderRef.current.classList.remove('active');
  };

  const handleMouseUp = () => {
    isDown.current = false;
    if (sliderRef.current) sliderRef.current.classList.remove('active');
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="bg-background-dark text-parchment font-display overflow-hidden select-none h-full w-full flex flex-col relative">
        {/* Atmospheric Overlay (Vignette & Texture) */}
        <div className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-30 stone-texture"></div>
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-radial from-transparent via-background-dark/60 to-background-dark/95"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background-dark to-transparent z-10 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col h-full w-full shadow-2xl bg-[#130f0a]">
            {/* Header Section */}
            <header className="flex items-center justify-between p-5 pt-6 relative z-20 shrink-0">
                {/* Back Button (Parchment Style) */}
                <button 
                    onClick={onBack}
                    className="group relative flex items-center justify-center size-10 bg-[#e3dac4] text-[#2c261b] rounded shadow-[2px_2px_0px_rgba(0,0,0,0.5)] active:translate-y-[1px] active:shadow-none transition-all rotate-[-2deg]"
                >
                    <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">arrow_back</span>
                    <div className="absolute -bottom-1 -right-1 size-3 bg-[#e3dac4] rotate-45 z-[-1]"></div> {/* Torn edge effect */}
                </button>
                <div className="text-center">
                    <p className="text-primary text-xs tracking-[0.2em] font-bold uppercase mb-1 text-glow">Season 4</p>
                    <h1 className="text-2xl font-bold text-white tracking-wide drop-shadow-md">Ancient Journey</h1>
                </div>
                {/* Help Button (Parchment Style) */}
                <button className="group relative flex items-center justify-center size-10 bg-[#e3dac4] text-[#2c261b] rounded shadow-[2px_2px_0px_rgba(0,0,0,0.5)] active:translate-y-[1px] active:shadow-none transition-all rotate-[1deg]">
                    <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">help</span>
                    <div className="absolute -top-1 -left-1 size-3 bg-[#e3dac4] rotate-45 z-[-1]"></div>
                </button>
            </header>

            {/* Stats / Current Progress Summary */}
            <div className="px-6 pb-2 relative z-20 flex justify-between items-end shrink-0">
                <div className="flex flex-col">
                    <span className="text-stone-light text-sm italic">Next Reward: 800 XP</span>
                    <div className="text-white text-lg font-bold flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-xl">diamond</span>
                        <span>Level 12 <span className="text-stone-light text-sm font-normal">/ 50</span></span>
                    </div>
                </div>
                <button className="text-primary text-sm underline decoration-primary/50 underline-offset-4 hover:text-white transition-colors">View Map</button>
            </div>

            {/* Main Mural Scroll Area */}
            <div 
                ref={sliderRef}
                className="flex-1 relative w-full overflow-y-hidden overflow-x-auto no-scrollbar snap-x snap-mandatory flex items-stretch mt-4 pb-24 cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {/* Start Spacer */}
                <div className="shrink-0 w-8"></div>
                
                {/* Segment 1: Jungle (Levels 10-14) */}
                <div className="relative flex shrink-0 snap-start bg-[#2a251b] border-y-4 border-[#1a160e] shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
                    {/* Mural Background Art (Jungle) */}
                    <div 
                        className="absolute inset-0 opacity-40 mix-blend-overlay bg-cover bg-center grayscale contrast-125" 
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8QVBikYUt30tESoyZV1JfabXYJLfyIzZoBQrlO7aPgKRDKCnNk6rkQg9eheAOyQ5ij52ZEU_ufXvI5SRzesLBfIfW0ua3yulPBzDKNiVan4WVsuWK0DnKUdy9oqR4iEX3rzfPiMJKcNxLHBvbeiJZsMPxkL5kn7Nf3v8Aq10FYCj_i4oDVulZAQ4ZyGNls5OgfUzIYEBJ7cqIgTse64WOUF3PtfU8rnU8xtDpr_BpeenTd9ECPuqptu6sFW__SkWOsvFEFuk2pN8')" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#2a251b]/10 via-transparent to-black/80"></div>
                    
                    {/* Level 10 Node */}
                    <div className="relative w-32 h-full flex flex-col justify-between items-center py-6 border-r border-[#3d3628]/30 group">
                        {/* Top: Free Reward */}
                        <div className="flex flex-col items-center gap-2 relative">
                            <div className="relative z-10 size-16 bg-[#3d3628] rounded-lg border-2 border-[#544d3b] shadow-lg flex items-center justify-center">
                                <img alt="Gold Coins Pile" className="size-10 opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlyKJPGUoomNCCjCNLkzeHUWDDpOE2jQ0TmqdtIJoKJjSZmnVQzXJjr7HfRvotqBplHYTGyX1-hIK32j6NuHpCCg5g1tYBMJ8tguvGkgU0WL2bzxJFKrW9KMTddy6yG7m1Fm4rhxluCaNE8qmtjntAezaAeE9V1u8G7rR3YWh5f4QlntW7x14MPTcZayO5bZkkyAnsNLMzlw74PeDUIKs0lMfRpThn_2jomsMpuE2r34fo5r7BJ0sEfTul-0hW0_EMM2b2zN5Uh7s"/>
                            </div>
                            <span className="text-xs text-stone-light font-bold">Free</span>
                            {/* Connection Line (Vertical) */}
                            <div className="w-[2px] h-6 bg-[#544d3b]"></div>
                        </div>
                        {/* Center: Timeline & Level */}
                        <div className="relative w-full flex items-center justify-center z-20">
                            <div className="absolute w-full h-[4px] bg-[#3d3628]"></div> {/* Track Line */}
                            <div className="absolute w-1/2 left-0 h-[4px] bg-primary shadow-flame"></div> {/* Progress Fill */}
                            <div className="relative size-12 bg-[#2a251b] border-2 border-primary rounded-full flex items-center justify-center shadow-flame z-10">
                                <span className="text-primary font-bold text-lg">10</span>
                            </div>
                        </div>
                        {/* Bottom: Premium Reward (Obsidian Track) */}
                        <div className="flex flex-col items-center gap-2 relative mt-4">
                            {/* Connection Line */}
                            <div className="w-[2px] h-6 bg-primary/30"></div>
                            <div className="relative z-10 size-20 bg-gradient-to-br from-[#2a2a2a] to-black rounded-xl border border-primary/50 shadow-[0_0_15px_rgba(236,182,19,0.1)] flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                                <img alt="Ancient Totem" className="size-12 drop-shadow-[0_0_5px_rgba(236,182,19,0.8)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnrhpE6JWFJcN3wj_GYHguJiKSiRVJzJcM0acULgXfMtM4E06Ho3tdwm5AoQcUjqLsESPZ6P-vGAyZebxKqae4Pp8y3sej6qNPw7wT4dd7Ir4D9nJP9K3E8S3D_qvwnQvotEG85OlGnfJGDP2q064AyLivJ7UBHEMgDDvfoT7efeixb5TKaVeJy-cIKB9CdkoK7JI31qAAK3kd6DMmTY6qA9UJfyFZVAUU-JcXCLSThp_Ae9nNoxii9QMbskTN4pJkUKU4qvojhsk"/>
                                <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-primary/20 to-transparent"></div>
                                <div className="absolute top-1 right-1"><span className="material-symbols-outlined text-primary text-[10px]">lock_open</span></div>
                            </div>
                        </div>
                    </div>

                    {/* Level 11 Node (Current Position) */}
                    <div className="relative w-32 h-full flex flex-col justify-between items-center py-6 border-r border-[#3d3628]/30">
                        {/* Player Marker (Bronze Figurine) */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -mt-10 z-30 drop-shadow-2xl animate-bounce" style={{ animationDuration: '3s' }}>
                            <img alt="Bronze explorer figurine" className="size-16 filter sepia contrast-125 brightness-75" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfpn_Rcp4JoQKjJ8p_jO-TlDNiSDoXuPTghFLD9ETKN9O_t9oc8ugt2xPuUx-tYDTxfRJXj6DuetupWSv5mJ6toRIaCwPQy1u7_ce3voYJyPie-ehDtxTgOCeq4rwM0g7OJiAeGoBJU_PtsXLtltUX583JRTbxgsqgnbFD1c7feT9qAKIT2_B-RbxmBgA67UxUsfpND8YxKwwtEfalt-4NSsE3UteUogDcD2TVQ1VoRR8VAxinrEBxNh9mn0bm59CPDdUn8KhEEr8"/>
                        </div>
                        {/* Top: Free Reward */}
                        <div className="flex flex-col items-center gap-2 relative opacity-50">
                            <div className="relative z-10 size-14 bg-[#2c261b] rounded-lg border border-[#3d3628] flex items-center justify-center grayscale">
                                <img alt="Potion" className="size-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFirsHQk8_9vFigGxJWEt-EvQZ4AaaZ290KQmK-5IUbzEVXpYPO4wFdBd0vnDHSroeCvYxRQ9V8D5hykvzoWIRo27wxVwnS6tILnIM0iZCpe4hGuKvWn6MfxtAaHiP0FB56GGyjQqAr-jSqUwYUDBEazXZC9ztdSOCzsb31lb_24EGc1p65810xp-SnJPsHqLaB66g3oyX_zni0g7wEdS3muU5LnHLBCgpOhkpKPBxrZPpcFcXVywgJtO_ukJHi_NcqqgWkN3bHVI"/>
                            </div>
                            <div className="w-[2px] h-6 bg-[#3d3628]"></div>
                        </div>
                        {/* Center: Timeline & Level */}
                        <div className="relative w-full flex items-center justify-center z-20">
                            <div className="absolute w-full h-[4px] bg-[#3d3628]"></div>
                            <div className="absolute w-1/2 left-0 h-[4px] bg-primary/50"></div> {/* Partial Progress */}
                            <div className="relative size-10 bg-[#1a160e] border-2 border-primary rounded-full flex items-center justify-center shadow-lg z-10">
                                <span className="text-white font-bold">11</span>
                            </div>
                        </div>
                        {/* Bottom: Premium Reward */}
                        <div className="flex flex-col items-center gap-2 relative mt-4 opacity-70">
                            <div className="w-[2px] h-6 bg-[#3d3628]"></div>
                            <div className="relative z-10 size-16 bg-[#1a1a1a] rounded-xl border border-stone-600 flex items-center justify-center">
                                <img alt="Scroll" className="size-10 grayscale opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzZ2krVF85tk1EvxXEadH7Th0VoHkG10vW9X55xZcfYvMJRLnkvvf0_RiT3ly5jNUZclpgN3Cez5xUTmVDIQrOUvURh3ziX3HVmsY3c8dL7GKkEI1n3KdJaq_4vqfuxlkfxpK86o8JlAqxUDFdGkHj8PQvVBh1ffTeRYJcrQ3wsX3doE6IbppWH7bE5ndjqTb6rOuFudhFkK-k0miTcBfQaPOv3PBMcAE3CU4Sp48x-f6BGf6T7wSCEUFnW2r3dvM1QlMfMhJzBQ8"/>
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl">
                                    <span className="material-symbols-outlined text-white/50">lock</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Level 12 Node (Next) */}
                    <div className="relative w-32 h-full flex flex-col justify-between items-center py-6 border-r border-[#3d3628]/30">
                        {/* Top: Free Reward */}
                        <div className="flex flex-col items-center gap-2 relative">
                            <div className="relative z-10 size-14 bg-[#2c261b] rounded-lg border border-[#3d3628] flex items-center justify-center">
                                <img alt="Gem" className="size-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiCMlW23Bb1cpvlkJzcviziHMpZO0-ityeDmT7QOGlHS4fHRqNiN9Z5LZm_nhy9rpxIeOtw6Y-MxiYyhkCG63rlw5SPS-TiBxjimhgiBkNap09raxEmn3eun85Y-ijWjr6VgApNZ9B88MAAVH4_GE0ztbziM2-VL58VyR_yx0LhYR0j8xLR_udK40FyYo0i4WeiNv8syO99wjeNHd79zaKFmxNPnnVUEu81_Js2VPiOufDAOi1pFPWECyIInfaaqMd2qKnBc6IY_U"/>
                            </div>
                            <div className="w-[2px] h-6 bg-[#3d3628]"></div>
                        </div>
                        {/* Center */}
                        <div className="relative w-full flex items-center justify-center z-20">
                            <div className="absolute w-full h-[4px] bg-[#3d3628]"></div>
                            <div className="relative size-10 bg-[#2c261b] border-2 border-[#544d3b] rounded-full flex items-center justify-center text-stone-400 z-10">
                                <span className="font-bold">12</span>
                            </div>
                        </div>
                        {/* Bottom: Premium */}
                        <div className="flex flex-col items-center gap-2 relative mt-4">
                            <div className="w-[2px] h-6 bg-[#3d3628]"></div>
                            <div className="relative z-10 size-16 bg-[#1a1a1a] rounded-xl border border-primary/30 flex items-center justify-center shadow-[0_0_10px_rgba(236,182,19,0.1)]">
                                <img alt="Rare Chest" className="size-10 opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX7Ycti5Sf6LpfjyLpZVz9vnf--XHpkSsYChYcDjVrOIvaE1F7iP3v-lQKZFYIIzYTY9_E1GLl2PiJLp7zcQMQ7RmfMweYYyjVGYaprTKhRpVtx1PR_kNm1H0sjnTM0AOVRA4EoJKqt91wHSFLWsrSKcL34f8HjrsV_8wn_BWjkZCgVOh-1VrLahgh3LHXn_85E-nJXzAPWQd4OO0m8kAf5FhfeyuHYdoV6Zp-Betf3T9Z-0oNIG0qO9NXIlFR8g8psaSV0LOxuoo"/>
                                <div className="absolute inset-0 flex items-center justify-center rounded-xl">
                                    <span className="material-symbols-outlined text-primary text-xl drop-shadow-md">lock</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Transition: Pillar */}
                <div className="relative shrink-0 w-8 bg-[#1a160e] flex flex-col items-center justify-center z-10">
                    <div className="h-full w-4 bg-[#221d10] border-x border-[#3d3628] flex flex-col items-center justify-around py-4">
                        <div className="size-2 rounded-full bg-[#544d3b]"></div>
                        <div className="size-2 rounded-full bg-[#544d3b]"></div>
                        <div className="size-2 rounded-full bg-[#544d3b]"></div>
                        <div className="size-2 rounded-full bg-[#544d3b]"></div>
                    </div>
                </div>

                {/* Segment 2: Desert (Levels 13-15) */}
                <div className="relative flex shrink-0 bg-[#352c20] border-y-4 border-[#1a160e] shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
                    {/* Mural Background Art (Desert) */}
                    <div 
                        className="absolute inset-0 opacity-30 mix-blend-overlay bg-cover bg-center sepia contrast-125" 
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgucPWUX98isC21OR9-tVTTUvW9iP2P5esUgnxvLwWczv0HQQTNKDLMhze-vHtcKIjY2Qvt3RNdThCqiskSm6ylBcU3jndMlesG_vUw7Xwar4tZCCLYIj2IHa2mW1qwfpJoRNOWsgyF7nNIm13DuFDgtYkDnJkIx-7_ikkueXRbLRuSTwjOaf27OMSHx-mfLx05sLEVi9EjL9WZzehga6JGaHBRmYpVEDE44MC_xlgvRTsym4bqEqlw1RNbqSRzFJPNsf_vnKVLBE')" }}
                    ></div>
                    {/* Level 13 Node */}
                    <div className="relative w-32 h-full flex flex-col justify-between items-center py-6 border-r border-[#4a3e2c]/30">
                        <div className="flex flex-col items-center gap-2 relative">
                            <div className="relative z-10 size-14 bg-[#352c20] rounded-lg border border-[#4a3e2c] flex items-center justify-center">
                                <span className="text-xs text-stone-500 font-bold">XP</span>
                            </div>
                            <div className="w-[2px] h-6 bg-[#4a3e2c]"></div>
                        </div>
                        <div className="relative w-full flex items-center justify-center z-20">
                            <div className="absolute w-full h-[4px] bg-[#2a2319]"></div>
                            <div className="relative size-10 bg-[#352c20] border-2 border-[#544d3b] rounded-full flex items-center justify-center text-stone-500 z-10">
                                <span className="font-bold">13</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2 relative mt-4">
                            <div className="w-[2px] h-6 bg-[#4a3e2c]"></div>
                            <div className="relative z-10 size-16 bg-[#1a1a1a] rounded-xl border border-stone-700 flex items-center justify-center">
                                <img alt="Scarab" className="size-9 opacity-50 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6rzXx19S5-5G1tCgTsDl82rJ91ipmXlC9THOX832kgw--1NtguYnLoYrVGP4vjfTXjXx5LbLDhl1viAIUrL1q4HDiA_RDnN0KdhJ6t1WBV1YWzBzw1voL9KjB0nX8GeDIhfotZN4TDwRw6I1LVj7QFojBxhZ03pXGaAnt2hm9CjS3mI6L3jbJegDfw2V0Hqj9ciUohulTRkAp4y_46S5n40l5Y4F6HEfAXOMqSBd6YGD5-AaHnZfbiDjUDQManBDztvQSnu1UKwc"/>
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl">
                                    <span className="material-symbols-outlined text-white/50">lock</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Level 14 Node */}
                    <div className="relative w-32 h-full flex flex-col justify-between items-center py-6 border-r border-[#4a3e2c]/30">
                        <div className="flex flex-col items-center gap-2 relative">
                            <div className="relative z-10 size-14 bg-[#352c20] rounded-lg border border-[#4a3e2c] flex items-center justify-center">
                                <span className="text-xs text-stone-500 font-bold">100g</span>
                            </div>
                            <div className="w-[2px] h-6 bg-[#4a3e2c]"></div>
                        </div>
                        <div className="relative w-full flex items-center justify-center z-20">
                            <div className="absolute w-full h-[4px] bg-[#2a2319]"></div>
                            <div className="relative size-10 bg-[#352c20] border-2 border-[#544d3b] rounded-full flex items-center justify-center text-stone-500 z-10">
                                <span className="font-bold">14</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2 relative mt-4">
                            <div className="w-[2px] h-6 bg-[#4a3e2c]"></div>
                            <div className="relative z-10 size-16 bg-[#1a1a1a] rounded-xl border border-stone-700 flex items-center justify-center">
                                <img alt="Pharaoh Mask" className="size-9 opacity-50 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyDFePJS1o1IKvb9RYOiQvLj09LXAjTiVD-_heMsggY3K_h2QOiOKlS1I2tagr3f4Ug5a9V0jtM1iCIvmUBtovBduqUMFdi51dvyL81H-REfvjmE6YYl-XbSqKgwiHD0lXTflElRHSh4QfHTRT06d807GbxXFdT_Cmonoj7CxExqNzijA0zNunh_VGSGhDubpgqaaExFcCyBQ8kUNsWi6yDJ_CXia1FHuuQRIbi2hP7t-3_JN6jKxIDZL47cxTcJx38DSBbG3mzbE"/>
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl">
                                    <span className="material-symbols-outlined text-white/50">lock</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Level 15 (Boss/Milestone) */}
                    <div className="relative w-40 h-full flex flex-col justify-between items-center py-6 border-r border-[#4a3e2c]/30">
                        <div className="flex flex-col items-center gap-2 relative">
                            <div className="relative z-10 size-16 bg-[#352c20] rounded-lg border-2 border-[#8c8268] shadow-lg flex items-center justify-center">
                                <img alt="Camel" className="size-10 opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpAbOMMX-Hl80N-FEAzTyxaSkBfcXPgdEJLa_odRgtFo23UGXVBQx5VWAhOVmhFux1LdJayqGHk4J0O0H2Pc-7SmGMt9JLp0eKA9m66LVfev75UoDqqidrPZHZSDR8doD_pMPdoqowQn0hwWRj4AAmOBpIS0hCgLb7NaOQThZ6iOvcpa_cgqLYw1Vw9yy95juEhMYXAvNSdFH_VP2dJGklzJPDSwk8eOfRXzJCKunzLpT1Ze3MPvGoZ003dn7q_SY49KY68QHwXLA"/>
                            </div>
                            <div className="w-[2px] h-6 bg-[#4a3e2c]"></div>
                        </div>
                        <div className="relative w-full flex items-center justify-center z-20">
                            <div className="absolute w-full h-[4px] bg-[#2a2319]"></div>
                            {/* Milestone Node */}
                            <div className="relative size-14 bg-[#352c20] border-4 border-[#8c8268] rounded-full flex items-center justify-center text-[#8c8268] z-10 shadow-lg">
                                <span className="font-bold text-xl">15</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2 relative mt-4">
                            <div className="w-[2px] h-6 bg-[#4a3e2c]"></div>
                            <div className="relative z-10 size-24 bg-[#1a1a1a] rounded-xl border-2 border-primary/20 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                                <img alt="Sarcophagus" className="size-16 opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHkIbqQTupJZEPQ_s3lacMcH955SMvDxIcnESRS00VEl0E7EXZpgjdmSMQid17lT5wLlOXTvQyVODlcEUpRMAuwlC2ZCSpPMENwLflMNWmu1JtslJ2JupXng6lOM5WylDw1EPQasxpzoIuihhH6uCr6upkFHVtdffCr55V2_SbSHz6XVKtkuxY83ODGSR2EsfZWpfmdHMzRG_LZRNq0SBkEZhnmfqmsMDBlW2AbC6ePJbYipvW6Umcd3u9KMEmffS6BxUeWOEhu6U"/>
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl">
                                    <span className="material-symbols-outlined text-primary text-2xl">lock</span>
                                </div>
                                {/* Shiny effect on locked item */}
                                <div className="absolute -top-2 -right-2 bg-primary text-black text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg">LEGENDARY</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Spacer */}
                <div className="shrink-0 w-8"></div>
            </div>

            {/* Floating Labels for Tracks */}
            <div className="absolute left-4 top-1/3 mt-8 pointer-events-none z-20 flex flex-col gap-[140px] opacity-80">
                <span className="text-stone-light/50 text-xs font-bold tracking-widest uppercase rotate-[-90deg] origin-left translate-y-10">Free Path</span>
                <span className="text-primary/40 text-xs font-bold tracking-widest uppercase rotate-[-90deg] origin-left translate-y-10">Obsidian Path</span>
            </div>

            {/* Bottom CTA Section (Fixed Slab) */}
            <div className="relative z-30 bg-[#0f0c08] border-t-2 border-[#3d3628] shadow-[0_-10px_40px_rgba(0,0,0,0.8)] p-5 pb-8 shrink-0">
                {/* Texture overlay for slab */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
                <div className="relative flex flex-col gap-4">
                    <div className="flex justify-between items-center text-parchment">
                        <div>
                            <h3 className="text-lg font-bold text-white">Unlock Obsidian Track</h3>
                            <p className="text-xs text-[#8c8268]">Get exclusive skins, 5x rewards & more.</p>
                        </div>
                        <div className="flex items-center gap-1 text-primary">
                            <span className="material-symbols-outlined text-sm">schedule</span>
                            <span className="text-xs font-bold">Ends in 14d</span>
                        </div>
                    </div>
                    <button className="relative group w-full overflow-hidden rounded-lg bg-gradient-to-r from-[#b0850b] via-primary to-[#b0850b] p-[1px] shadow-flame transition-transform active:scale-95">
                        <div className="relative flex items-center justify-center gap-3 bg-gradient-to-b from-[#1a160e] to-black px-4 py-3 rounded-lg group-hover:bg-opacity-90 transition-all">
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">diamond</span>
                            <span className="font-bold text-white tracking-wider text-sm uppercase">Purchase Pass • $9.99</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SeasonPassScreen;