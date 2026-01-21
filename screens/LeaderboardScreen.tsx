import React from 'react';

interface LeaderboardScreenProps {
  onBack: () => void;
}

const LeaderboardScreen: React.FC<LeaderboardScreenProps> = ({ onBack }) => {
  const leaders = [
    { rank: 1, name: "KingMidas", score: "12,400m", relics: 15, avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5g6wg1vrr-fZnSuVRh9yrSkKcudLla3WLpLE6mC2OrmimXOaHVuti7Nj6uf_ghExWRKFuAkOzXZ2SQ0MvVgcbF6zYva9ylVzmtfIkgguqVkFhwKe0WITmw52oirbFQUxah_zUAzeiy8eLn8RUkjOTtdmUZY0bAsC7hJ6mm6BdruAnmRonM9iHukBLG9yuEpzW0k3CmJR-5ItTrFk4WyMUhazflpNINxxjOT6hptG96eGAA3_8qvRNJ9q0i5ai2JbvaKqEqIWBJ8c" },
    { rank: 2, name: "TombRaider99", score: "11,200m", relics: 12, avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAziBeT2xVBxeDUIqN-gBuh9_E-zlqvWfp8UDEFOU5krQwA6bdm8-V2unz2cI9_6vS9HhDG2aWdMyzL5ejF07ich7TirnpbkYfiMVBTNv5Lu9_uG1t_2-Ty_R54cdwZhl2Fgf6eLP9lh_3a-YEbZnW-Re2xOq1NXAL6hGHKMgRW8Hf8x1ggPgMsxq7OAZTR2QTEhZMdsBD2Na1cris17_Vs-Qkerj6vU8HOvQdf4otjzve6xwCpCfhGrReq07_8wxZNg3ubWXoZvK8" },
    { rank: 3, name: "RelicHunter", score: "10,900m", relics: 10, avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcRQCoNa2pWtKlJHjzoz6hCLfqHIRmODVDo9iJJBvxl75ANXa_Nmw2ReF9pKxnaLoyC-8JyFrHlH0LzCDuL5yHuM20IrQT0bBCV2HtUSm1LMdShSD2cdRJjAWGa9YcCjD38Rzvvr8QlcQ-L-A2JDtWxGAwMz7RETWfbcES83R8LctWMyvri7Vny9oeQHSyH4Ku0FsAgtGAsKoWAOpw2QlueyLdggV9lsGy83uhe68IacvZz4BcJ-DjJ4CS11yaDtnPJa69qNOwGZY" },
    { rank: 4, name: "StoneSeeker", score: "9,840m", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeqhFtewtCmzLyz4tDRl86Bb2V7hH3JdkrmahKp1MMfBk7SA3EgdUIj73PvwsrtzO2nG3bBNEUTP1X2WOIJAGMBIwC1hGLm6ho_47J1STLA58O-ZzYoYkZW7MOaFlZdN6-tqwXFuHaAOc2rs7KRFyz-Dtw-WaK6lXVKFBDK00vKtx1EnZTXmUuURRR6tXwMHcRp5Ny33vuRgnmYakXYsF-0f5dAT7wVN2h0m4ns9QqX51Q_7CF6tY3qI5wwAj04xNrIgGHMFn_k1o" },
    { rank: 5, name: "JungleJim", score: "8,200m", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjMhxIohsE4P_zHz5c4wPXpgvBOUuuQNYBeFNoEXh9VWqc2quJdCGqLRWeH_5v_AvKUNPmMiGMouJ4fmDBxByUuPhYr19Y9kjcumZBSQwv4QI-XBUSoU-zhRcd0AEeB9zr3UiTgshERmM5xW0nGPg83BVvPEVh0z-H52Ru6xm25bsPqK7RQTq1d2Ndpe2h6jb-PwvRqFsE-zVyX8X1Yhn5xkd_u1VPPw9onj_qeCUuu1XLwy82S9Jskuw9_ojPtxRLi-z0uFeO9dA" },
    { rank: 6, name: "MayaMystic", score: "7,950m", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7Z6LRHUF-TQWa70tJpGPdg3KHgHKRfrUEa-n6OcZuEUDM7QRVCs7UTfR-hdwyiVQlhl6cSjg1elo8SKOnIUHDyd7h29d0v2B434YYH--eHzxnHclKcjSZE1ED_Nz7o50-zdwGh-15OvdAIfAebXgtACu0QdlmPkIKd9a5xmveydq2OAE_SHHFGeelWwFqKHhawX4JxxK_cLYspVLdFFaya0_UdT3k2CXJIqUFvJIQ9D1I8sPmgwhrNitMD2n5AU6LQ30MW_cQmkc" },
    { rank: 7, name: "GoldDigger", score: "7,100m", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdRAaXHzQ9dCePbPENrQgnvcbNU-LlNyJaneQfml5lHVYx54XuXYgwFQC3NxyFZbTFwnkyDhbmrcD2Q04n2o7h3NBwpO7PfjIMy0OJ2R7RXrVk01X_uOHb-jLYhjabBU_8N2UUqe0Ll9_vxNyva1vdVZLV15sUXLlGmo1qUGQL_-uRlq7gDfr4R058JjEfzDQNnxNsp6LfC_XaqaVAz0WhpFpqVZYSvlykse6QjYnQAA8an8ZItERjNH9_MdCwEUnTtvbIKVC4w9Q" }
  ];

  return (
    <div className="h-full w-full bg-[#221a10] font-display text-stone-200 overflow-hidden relative flex flex-col select-none">
       {/* CSS for specialized text effects */}
       <style>{`
          .text-carved-deep {
            color: rgba(0, 0, 0, 0.4);
            text-shadow: 0px 1px 1px rgba(255, 255, 255, 0.1), inset 0px 2px 4px rgba(0,0,0,0.8);
          }
          .text-carved-light {
             color: #a8a29e;
             text-shadow: 0px -1px 0px rgba(0,0,0,0.8), 0px 1px 0px rgba(255,255,255,0.05);
          }
          .text-gold-fill {
            background: linear-gradient(180deg, #ffd700 0%, #f49d25 60%, #b8860b 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: drop-shadow(0px 1px 2px rgba(0,0,0,0.8));
          }
          .mask-image-b {
            mask-image: linear-gradient(to bottom, black 85%, transparent 100%);
            -webkit-mask-image: linear-gradient(to bottom, black 85%, transparent 100%);
          }
          .mask-image-t {
             mask-image: linear-gradient(to top, black 20%, transparent 100%);
             -webkit-mask-image: linear-gradient(to top, black 20%, transparent 100%);
          }
       `}</style>

       {/* Ambient Background Layers */}
       <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Main Texture */}
          <div className="absolute inset-0 bg-cover bg-center opacity-100" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/wall-4-light.png')" }}></div>
          <div className="absolute inset-0 bg-[#221a10]/80 mix-blend-multiply"></div>
          
          {/* Vignette & Shadow */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
          
          {/* Sun Drenched God Ray */}
          <div className="absolute top-0 right-[-20%] w-[100%] h-[80%] bg-gradient-to-bl from-[#f49d25]/10 via-transparent to-transparent blur-3xl transform rotate-12"></div>
          
          {/* Hanging Vines Decorations (CSS Shapes/Images) */}
          <div className="absolute top-0 left-0 w-32 h-48 opacity-40 mix-blend-multiply bg-contain bg-no-repeat bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuB23ReSE47wq6iDHSXj-Zc88WJw89q2Dws362IoSIGTktCvEk2_JhsbH5CbmDz0zRcIiBaNUBqlUXho5KX_peynvDsProN613sByls2juUOQe_-Bg92JRfB9qSUzCk3SpJpIOXvyOzYzxM6f1urnEkHN5fMz2vDZD08aUFLisD-kmyjdCGsP6FQvrTd_iiDFaxGQqrkdeerpdVQdre3jyfV_Y75EUlUurvIvPbbNQ2rq4qzHQsSjkuxpsVBMd7cKXzV-iQqCSsDbos')]"></div>
       </div>

       {/* Header Section */}
       <div className="shrink-0 pt-10 pb-6 px-6 text-center relative z-10">
          <h1 className="text-[28px] md:text-[36px] font-bold leading-tight tracking-widest text-stone-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] border-b-2 border-stone-700/30 pb-4 mx-auto w-fit inline-block font-display">
             LEGENDS OF THE TEMPLE
          </h1>
          <p className="text-xs text-[#f49d25]/60 uppercase tracking-[0.2em] mt-2 font-bold opacity-80">Hall of Ancestors</p>
       </div>

       {/* Leaderboard List Area */}
       <div className="flex-1 overflow-y-auto pb-40 px-4 md:px-6 no-scrollbar mask-image-b relative z-10">
          <div className="max-w-md mx-auto flex flex-col gap-5">
             
             {/* Rank 1: Gold Tier */}
             <div className="relative flex items-center p-3 rounded-lg border border-[#f49d25]/20 bg-[#2c241b]/60 backdrop-blur-[1px] shadow-lg group transition-transform hover:scale-[1.01]">
                <div className="flex flex-col items-center justify-center w-12 shrink-0 border-r border-[#f49d25]/20 mr-3 pr-2">
                   <span className="text-4xl font-bold text-gold-fill drop-shadow-md font-display">1</span>
                </div>
                <div className="flex flex-1 items-center gap-3 overflow-hidden">
                   <div className="shrink-0 relative">
                      <div className="h-12 w-12 rounded bg-stone-800 bg-center bg-cover border border-[#f49d25] shadow-md" style={{ backgroundImage: `url(${leaders[0].avatar})` }}></div>
                      <span className="material-symbols-outlined absolute -top-2 -right-2 text-[#f49d25] text-sm drop-shadow-md bg-[#221a10] rounded-full p-[1px]">crown</span>
                   </div>
                   <div className="flex flex-col min-w-0">
                      <p className="text-xl font-bold text-gold-fill truncate tracking-wide font-display">{leaders[0].name}</p>
                      <div className="flex items-center gap-3 text-xs text-[#f49d25]/80 font-bold tracking-wider mt-0.5">
                         <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">hiking</span> {leaders[0].score}</span>
                         <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px] fill-current">diamond</span> {leaders[0].relics}</span>
                      </div>
                   </div>
                </div>
             </div>

             {/* Rank 2 */}
             <div className="relative flex items-center p-3 rounded-lg border border-white/5 bg-[#2c241b]/40 backdrop-blur-[1px] shadow-md">
                 <div className="flex flex-col items-center justify-center w-12 shrink-0 border-r border-white/5 mr-3 pr-2">
                    <span className="text-3xl font-bold text-[#f49d25]/80 drop-shadow-sm font-display">2</span>
                 </div>
                 <div className="flex flex-1 items-center gap-3 overflow-hidden">
                    <div className="h-11 w-11 rounded bg-stone-800 bg-center bg-cover border border-[#f49d25]/50 shadow-md shrink-0" style={{ backgroundImage: `url(${leaders[1].avatar})` }}></div>
                    <div className="flex flex-col min-w-0">
                       <p className="text-lg font-bold text-stone-200 truncate tracking-wide drop-shadow-md font-display">{leaders[1].name}</p>
                       <div className="flex items-center gap-3 text-xs text-stone-400 font-medium tracking-wide mt-0.5">
                          <span>{leaders[1].score}</span> <span className="text-stone-600">|</span> <span>{leaders[1].relics} Relics</span>
                       </div>
                    </div>
                 </div>
             </div>

             {/* Rank 3 */}
             <div className="relative flex items-center p-3 rounded-lg border border-white/5 bg-[#2c241b]/30 shadow-sm">
                 <div className="flex flex-col items-center justify-center w-12 shrink-0 border-r border-white/5 mr-3 pr-2">
                    <span className="text-2xl font-bold text-[#f49d25]/60 drop-shadow-sm font-display">3</span>
                 </div>
                 <div className="flex flex-1 items-center gap-3 overflow-hidden">
                    <div className="h-10 w-10 rounded bg-stone-800 bg-center bg-cover border border-[#f49d25]/30 shadow-md shrink-0" style={{ backgroundImage: `url(${leaders[2].avatar})` }}></div>
                    <div className="flex flex-col min-w-0">
                       <p className="text-base font-bold text-stone-300 truncate tracking-wide font-display">{leaders[2].name}</p>
                       <div className="flex items-center gap-3 text-xs text-stone-500 font-medium tracking-wide mt-0.5">
                          <span>{leaders[2].score}</span> <span className="text-stone-600">|</span> <span>{leaders[2].relics} Relics</span>
                       </div>
                    </div>
                 </div>
             </div>

             {/* Separator Chisel Mark */}
             <div className="h-px w-full bg-gradient-to-r from-transparent via-stone-700 to-transparent my-1 opacity-50"></div>

             {/* Ranks 4+ */}
             <div className="flex flex-col gap-1">
                 {leaders.slice(3).map((leader, i) => (
                    <div key={i} className="group flex items-center px-2 py-3 gap-4 border-b border-white/5 hover:bg-black/20 transition-colors rounded">
                        <p className="text-lg font-bold text-carved-light w-6 text-center font-display">{leader.rank}</p>
                        <div className="h-8 w-8 rounded bg-stone-800 bg-center bg-cover opacity-60 grayscale group-hover:grayscale-0 transition-all" style={{ backgroundImage: `url(${leader.avatar})` }}></div>
                        <p className="text-stone-400 text-sm font-bold flex-1 truncate tracking-wider text-carved-light font-display">{leader.name}</p>
                        <p className="text-stone-500 text-sm font-mono tracking-tighter">{leader.score}</p>
                    </div>
                 ))}
             </div>

          </div>
       </div>

       {/* Sticky User Rank / Footer Area */}
       <div className="absolute bottom-0 w-full z-20">
          {/* Floor Texture Overlay */}
          <div className="absolute bottom-0 h-32 w-full bg-cover bg-bottom opacity-100 mask-image-t" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/black-scales.png')" }}></div>
          <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-[#221a10] via-[#221a10]/90 to-transparent"></div>
          
          {/* Scattered Coins */}
          <div className="absolute bottom-4 right-6 flex pointer-events-none opacity-80 z-20">
             <span className="material-symbols-outlined text-[#f49d25] text-2xl drop-shadow-lg rotate-12 translate-y-2">monetization_on</span>
             <span className="material-symbols-outlined text-[#f49d25]/70 text-xl drop-shadow-lg -rotate-12 -translate-x-2">monetization_on</span>
             <span className="material-symbols-outlined text-[#f49d25]/50 text-lg drop-shadow-lg rotate-45 translate-x-1 translate-y-3">monetization_on</span>
          </div>

          {/* User Self Rank Card */}
          <div className="relative max-w-md mx-auto px-4 pb-20 z-20">
             <div className="flex items-center p-3 rounded-lg bg-stone-800 border-2 border-[#f49d25]/30 shadow-[0_4px_10px_rgba(0,0,0,0.5)] transform translate-y-2">
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f49d25] text-[#221a10] text-[10px] font-bold px-3 py-0.5 rounded-full border border-[#221a10] uppercase tracking-wider shadow-sm z-10">
                     Your Rank
                 </div>
                 <div className="text-xl font-bold text-[#f49d25] mr-3 w-8 text-center drop-shadow-sm font-display">42</div>
                 <div className="h-10 w-10 rounded bg-stone-700 bg-center bg-cover border border-stone-600 mr-3 shrink-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBlegNB4iGgdCRvchh_Z5PT9ZteSK6iHPsj3hTQpKNkQHqiOWsflEBqcsPbaJawfJ5nBp1bBYOrqkDHGHmP9uH1S1Iwxjfkg9xG8JKqUnIGf-1MCqafUBY8h8YPWoxbZswZOfhWw1Cv4ZiVmuWOwMMK_ER1LaUczf-m2PAVrVf_Rj14xQAIO1mRqZuMt69ErVmmDOFuhOB2Z3Av26grcK-ANd4fL6h7sVakOiho1JepYl8voEDEbGU1UliRrkvHrOM_W_uFeLh8LIw')" }}></div>
                 <div className="flex-1 flex justify-between items-center">
                    <div className="flex flex-col">
                       <span className="text-stone-200 font-bold text-sm font-display">ExplorerOne</span>
                       <span className="text-stone-500 text-xs">Top 10%</span>
                    </div>
                    <div className="text-stone-300 text-sm font-mono font-bold">4,320m</div>
                 </div>
             </div>
          </div>

          {/* Back Button */}
          <div className="absolute bottom-6 left-6 z-30">
             <button 
                onClick={onBack}
                className="group flex items-center gap-1 pl-3 pr-5 py-2.5 bg-[#2c241b] hover:bg-[#383025] active:scale-95 transition-all text-stone-300 rounded-l-full rounded-r-sm border border-stone-600 shadow-xl overflow-hidden relative"
             >
                 {/* Stone texture on button */}
                 <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/wall-4-light.png')" }}></div>
                 <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform relative z-10">arrow_back_ios_new</span>
                 <span className="text-xs font-bold tracking-[0.2em] relative z-10">BACK</span>
             </button>
          </div>
       </div>

    </div>
  );
};

export default LeaderboardScreen;