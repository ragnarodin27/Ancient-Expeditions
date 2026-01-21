import React from 'react';

interface IconSheetScreenProps {
  onBack: () => void;
}

const IconSheetScreen: React.FC<IconSheetScreenProps> = ({ onBack }) => {
  return (
    <div className="relative flex h-full w-full flex-col bg-[#f8f8f6] dark:bg-[#221d10] group/design-root overflow-x-hidden font-noto-serif text-[#dcdacb] select-none">
        
        {/* Vignette / Torchlight Effect Overlay */}
        <div className="fixed inset-0 pointer-events-none z-50 bg-[radial-gradient(circle_at_50%_40%,transparent_10%,rgba(10,8,3,0.4)_60%,rgba(0,0,0,0.85)_100%)]"></div>
        
        {/* Header */}
        <header className="relative z-10 flex items-center justify-between p-5 bg-[#2a2415] border-b border-[#3e3522] shadow-lg shrink-0">
            <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#ecb613] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_stories</span>
                <h1 className="text-2xl font-bold tracking-wide text-etched text-[#eceadd]">Explorer's Codex</h1>
            </div>
            <div className="flex items-center gap-2 text-[#8c8573]">
                <span className="text-sm italic">Vol. IV</span>
            </div>
        </header>

        <main className="relative z-10 flex-1 flex flex-col gap-6 p-5 pb-32 overflow-y-auto no-scrollbar">
            
            {/* Section: Maneuvers */}
            <section>
                <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-[#8c8573]">gesture</span>
                    <h3 className="text-lg font-bold uppercase tracking-widest text-[#8c8573] border-b border-[#3e3522] w-full pb-1">Maneuvers</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="group flex flex-col gap-2 p-3 bg-[#2a2415] rounded-lg border border-[#3e3522] shadow-[0_4px_4px_rgba(0,0,0,0.4)] transition-transform active:scale-95">
                        <div className="relative w-full aspect-square bg-[#1a160d] rounded border-2 border-[#3e3522] overflow-hidden">
                            <div 
                                className="w-full h-full bg-center bg-no-repeat bg-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBeNMeZMXr_Y-NdCKRNOs20eBcL0aDazDhGWlnBLmeFvqWIuHs_TCBX6pWXhN17DycCIrHHD8Z5QvmA5uOswM7J85MnpogNwZC4Azu2p2nWWPOBBuwgh_71gd2ASLpx90svhcjl6yIZU5csOmNRmwRasgFfQRvFBimHlY0BhN0t1CXwjxCzSEFqNwntch4FTm8Yml6MGENLE5tABxG9itecbwlMY50Yggo_SDq_V6b7qmoqDlGIUJaqypQtZF0bwcEGHj2MLQn8WWc")' }}
                            ></div>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[#eceadd] text-base font-bold leading-tight">Swipe Gesture</p>
                            <p className="text-[#8c8573] text-xs italic font-serif">Movement technique</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Combat Abilities */}
            <section>
                <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-[#8c8573]">swords</span>
                    <h3 className="text-lg font-bold uppercase tracking-widest text-[#8c8573] border-b border-[#3e3522] w-full pb-1">Combat</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {/* Item 1 */}
                    <div className="flex flex-col gap-2 group">
                        <div className="relative w-full aspect-[4/5] bg-[#2a2415] rounded-lg border border-[#3e3522] shadow-md p-2 flex items-center justify-center">
                            <div 
                                className="w-full h-full bg-center bg-no-repeat bg-contain" 
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDpjuQFM2WzGmqdFjLthiwCC0eSjGDa8O8FTIwjeNGlB75lqAds6pBZBEuscJEilzFHpvEqN6vnH8K6dOB_DlnqIbewA9Oh0ILYilbNJCosqch6fOIShqmCzqXrP2kh8oIK3cdw2eRDGNgpHv0eCR6QgTRckPEC9PT23DqHnxZOZHTYDgyQpMPrL_ynKft-_9JvaclldSQvDaPZ74Wh9C95xLC6T_4Bwho_EIaBK4vEBEsYGu__OP1qnKFQGqFi5jWSQ9AZMRwod2Q")' }}
                            ></div>
                        </div>
                        <p className="text-center text-sm font-medium text-[#c4c1b3] italic">Stone Blade</p>
                    </div>
                    {/* Item 2 */}
                    <div className="flex flex-col gap-2 group">
                        <div className="relative w-full aspect-[4/5] bg-[#2a2415] rounded-lg border border-[#3e3522] shadow-md p-2 flex items-center justify-center">
                            <div className="absolute inset-0 bg-[#ecb613]/5 rounded-lg"></div> {/* Glow effect container */}
                            <div 
                                className="w-full h-full bg-center bg-no-repeat bg-contain drop-shadow-[0_0_8px_rgba(236,182,19,0.3)]" 
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTUAwCBwlFh1-L3RxcRObJNp9m5D0uifAkwYBLpjr73E120T87jl7DQkYUN5LrHpeZlKWvB65kFWRqPZVBZgQ31O1OGUEpfhrrnm_cRMTvSWSSnYFljfNMYV4Eim9SYd1kwNRobNWRSkKpIXeBp5Bmge3M78BvMT6tD-Yd5zhLedlmF9coCmlT8fwvKVZt8ccYUWUpJk9P0qVhud35NonUWYpBixLrsfmiuU0Yq1oQ91Mvg0vs7S8EW3nvUjeJG3avOSPIgt0QQzM")' }}
                            ></div>
                        </div>
                        <p className="text-center text-sm font-medium text-[#c4c1b3] italic">Ember Jar</p>
                    </div>
                    {/* Item 3 */}
                    <div className="flex flex-col gap-2 group">
                        <div className="relative w-full aspect-[4/5] bg-[#2a2415] rounded-lg border border-[#3e3522] shadow-md p-2 flex items-center justify-center">
                            <div 
                                className="w-full h-full bg-center bg-no-repeat bg-contain" 
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDI_QNZb2vdAXcO5aV4U791HZnSM5fmiCx-Pu_IYrNTCdz7s9ziVVKC0R2EZdR7bwphChIwRl4xiTqt1BD8NAGwfbQYvVdbjde6QGHAV0bd6v7hs1bxnM9mYZA60f-wYCZEzbz2x2xmxa5Qf0E5SGkNACxyzB4YN6gNFkW9cbCuxGZUXJW7zt4WYTdqOWIkc0iV-h5fgow6DVNv3t6tMGmjJTIeQ0qgrmCpfSVHt8Xfc3rcGXrk9F-cuXfyhdJVGduPK0-xY1Tvt-A")' }}
                            ></div>
                        </div>
                        <p className="text-center text-sm font-medium text-[#c4c1b3] italic">Iron Shield</p>
                    </div>
                </div>
            </section>

            {/* Section: Navigation */}
            <section>
                <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-[#8c8573]">explore</span>
                    <h3 className="text-lg font-bold uppercase tracking-widest text-[#8c8573] border-b border-[#3e3522] w-full pb-1">Wayfinding</h3>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4">
                    {/* Compass */}
                    <div className="flex items-center gap-3 p-3 bg-[#2a2415]/60 border border-[#3e3522] rounded-lg">
                        <div className="size-12 shrink-0 rounded-full bg-[#1a160d] border border-[#5c533e] flex items-center justify-center overflow-hidden">
                            <div 
                                className="w-full h-full bg-center bg-cover" 
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAx7AC7r1hvKLwvldRPMYVNMnfb49WdHJov8k7T47527VEuW_l6WRBDI8qDmSqpC4APSJxA5UNP3kr02Yx35tPXdCfoob_QjZQv8s-7wDCxyIxth2VqfZF6csgPrLX_OSRTuorbGsuJpOMir1uusyLarHDyWwr1dkIaLja_Xev55UqPxZO0tdwFN2QNrmt72W_x1JQd0SLX9tIjZoOB82ouL71FlXPQoa23qmEsFvP8OFbF4tZyuZGJD32T3l7rZjhgUXKxpHJnuxY")' }}
                            ></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-[#dcdacb]">Brass Compass</span>
                            <span className="text-xs text-[#8c8573] italic">Guidance</span>
                        </div>
                    </div>
                    {/* Map */}
                    <div className="flex items-center gap-3 p-3 bg-[#2a2415]/60 border border-[#3e3522] rounded-lg">
                        <div className="size-12 shrink-0 rounded bg-[#e8e6d9] border border-[#5c533e] flex items-center justify-center overflow-hidden rotate-2">
                            <div 
                                className="w-full h-full bg-center bg-cover opacity-80 sepia" 
                                style={{ backgroundImage: 'url("https://placeholder.pics/svg/300")' }}
                            ></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-[#dcdacb]">Torn Map</span>
                            <span className="text-xs text-[#8c8573] italic">Geography</span>
                        </div>
                    </div>
                    {/* Backpack */}
                    <div className="flex items-center gap-3 p-3 bg-[#2a2415]/60 border border-[#3e3522] rounded-lg">
                        <div className="size-12 shrink-0 rounded bg-[#3e2b18] border border-[#5c533e] flex items-center justify-center overflow-hidden">
                            <div 
                                className="w-full h-full bg-center bg-cover" 
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3prrPhjWdXRRrqltqJAAP-ysc20oxjCblfaBc2HqhPwQMunPbksnlDLelEHDYrr-VcGTJ6XX_n1C73ms8MY0zxVJkmZE51bKeFmoYSm9IwLIXBwPR5bEUjDNCsGqQ9wJlGF5uXMW9Hj-EQjnquMUxtFRElgo10_Zy59J0x0n8UFUEW1rzt91VQ4NQcqc44ZpKE2m6B8Cm8t8dhzY-Mvt0-9mkQbCe-EACTRRdg3VDjq2PmHt_IrQT6C-_YvXYOxvpptuh-lQJRcQ")' }}
                            ></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-[#dcdacb]">Leather Pack</span>
                            <span className="text-xs text-[#8c8573] italic">Storage</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Currency */}
            <section>
                <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-[#8c8573]">savings</span>
                    <h3 className="text-lg font-bold uppercase tracking-widest text-[#8c8573] border-b border-[#3e3522] w-full pb-1">Valuables</h3>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                    {/* Gold */}
                    <div className="min-w-[160px] flex-1 bg-gradient-to-b from-[#3a321f] to-[#221d10] p-4 rounded-xl border border-[#ecb613]/30 flex flex-col items-center gap-3 shadow-lg relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[#ecb613]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="w-20 h-20 rounded-full bg-[#ecb613]/10 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]">
                            <div 
                                className="w-16 h-16 bg-center bg-contain drop-shadow-md" 
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCuJqb0RqY9mIxGmJliYtr68tXf4zFLvpYKf4WsNv7sLWyAPMraXUC6Q_GdXUZ3hQC0uf_cNaIQexVoo8WLYvQs2Xywv9GZsyZssO4A-YYmJ3aj7dErIgSPCQ8vEjkxMsgToz8XfOL0rm_ML7TOG7UJvk09ggADrA-GjeJ0UOcd8KDzlDmexs0Q17MZG9JFb2aHAABiYh0xTekqQR98vJELgO15mdo-CyVdobD4kb_YU0bBtxcoYCROFFgND1pochkPH3CBvaLI1b0")' }}
                            ></div>
                        </div>
                        <div className="text-center">
                            <h4 className="text-[#ecb613] font-bold text-lg">Gold Coins</h4>
                            <span className="text-xs text-[#8c8573]">Currency of the Old World</span>
                        </div>
                    </div>
                    {/* Gem */}
                    <div className="min-w-[160px] flex-1 bg-gradient-to-b from-[#3a321f] to-[#221d10] p-4 rounded-xl border border-red-900/40 flex flex-col items-center gap-3 shadow-lg relative overflow-hidden group">
                        <div className="absolute inset-0 bg-red-900/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="w-20 h-20 rounded-full bg-red-900/10 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]">
                            <div 
                                className="w-16 h-16 bg-center bg-contain drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]" 
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuApexqzL0oath_QSvinVw8h4xRhXRcqYQtlAW_qUreRjaDlOYgk-A0kTyCq-ktL0Nxk3kPeMyPiAJGoIMrTTGva0PY82Rb2lnYUP713m_OlFswt_oDoj6Dm0r3GNiruH-AMKaDeBGm8IYP1tWWOjB2JrHF7jLAE7weiKALjMYg5QWUZLVFqaCLgj5zmhYrYHxWhJkRSnKHpcUKulTRML4LRv4JwEKyrjqoLSCfETf51klfeh9dblbLz7jiAeZPzwCEKCzb6Wqv2dDc")' }}
                            ></div>
                        </div>
                        <div className="text-center">
                            <h4 className="text-red-400 font-bold text-lg">Soul Gem</h4>
                            <span className="text-xs text-[#8c8573]">Rare Artifact</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        {/* Footer Controls */}
        <footer className="fixed bottom-0 left-0 w-full z-40 p-4 pb-6 flex justify-between items-end bg-gradient-to-t from-[#100d07] via-[#100d07] to-transparent pointer-events-none">
            {/* Pause Lever */}
            <div className="flex flex-col items-center gap-1 group cursor-pointer pointer-events-auto">
                <div className="w-14 h-24 bg-[#2a2415] rounded-lg border-2 border-[#5c533e] relative shadow-[0_10px_20px_rgba(0,0,0,0.8)] transition-transform active:translate-y-1">
                    {/* Lever Handle */}
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-12 bg-gradient-to-b from-[#8c8573] to-[#3e3522] rounded border border-[#1a160d] shadow-md flex items-center justify-center">
                        <span className="material-symbols-outlined text-[#1a160d] text-xl">pause</span>
                    </div>
                    {/* Slot track */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2 h-10 bg-[#000000] rounded-full shadow-[inset_0_1px_3px_rgba(0,0,0,1)]"></div>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#5c533e] group-hover:text-[#ecb613] transition-colors">Pause</span>
            </div>
            
            {/* Back Wax Seal */}
            <div 
                onClick={onBack}
                className="flex flex-col items-center gap-1 group cursor-pointer pointer-events-auto"
            >
                <div className="wax-seal size-16 rounded-full flex items-center justify-center relative transition-transform active:scale-95 active:rotate-3">
                    <div className="absolute inset-0 rounded-full border border-white/10"></div>
                    <span className="material-symbols-outlined text-[#eab8b8] text-3xl drop-shadow-md" style={{ fontVariationSettings: "'wght' 600" }}>arrow_back</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#5c533e] group-hover:text-[#a63434] transition-colors">Back</span>
            </div>
        </footer>

    </div>
  );
};

export default IconSheetScreen;