import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useGame } from '../GameContext';

interface GameplayScreenProps {
  onEnd?: () => void;
  onSettings?: () => void;
  onOpenLeaderboard?: () => void;
}

// Types
type EntityType = 'ENEMY' | 'POWERUP_SPEED' | 'POWERUP_SHIELD' | 'COIN';
interface Entity {
  id: number;
  type: EntityType;
  x: number; // Percentage 0-100
  y: number; // 0 (ground) or 1 (air) - simplified for lanes
  active: boolean;
}

const GameplayScreen: React.FC<GameplayScreenProps> = ({ onEnd, onSettings, onOpenLeaderboard }) => {
  // Use settings from Context
  const { settings } = useGame();

  // --- State ---
  const [distance, setDistance] = useState(0);
  const [gold, setGold] = useState(0); 
  const [health, setHealth] = useState(100);
  const [paused, setPaused] = useState(false);
  
  // Game State
  const [isJumping, setIsJumping] = useState(false);
  const [entities, setEntities] = useState<Entity[]>([]);
  const [activeBuff, setActiveBuff] = useState<'SPEED' | 'SHIELD' | null>(null);
  const [flash, setFlash] = useState<'DAMAGE' | 'BUFF' | null>(null);

  // Compass State
  const [bearing, setBearing] = useState(0);

  // Refs for Game Loop (avoid stale closures)
  const gameState = useRef({
    distance: 0,
    health: 100,
    isJumping: false,
    speedMultiplier: 1,
    lastSpawn: 0,
    frameCount: 0,
    isDead: false
  });

  // Audio Refs
  const audioCtx = useRef<AudioContext | null>(null);

  // --- Audio System ---
  const playSound = useCallback((type: 'JUMP' | 'COLLECT' | 'DAMAGE' | 'POWERUP') => {
    if (!audioCtx.current) {
      audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    
    if (audioCtx.current && settings.volume > 0) {
       const oscillator = audioCtx.current.createOscillator();
       const gainNode = audioCtx.current.createGain();
       
       oscillator.connect(gainNode);
       gainNode.connect(audioCtx.current.destination);
       
       const vol = settings.volume / 100;

       if (type === 'JUMP') {
         oscillator.frequency.setValueAtTime(150, audioCtx.current.currentTime);
         oscillator.frequency.exponentialRampToValueAtTime(300, audioCtx.current.currentTime + 0.1);
         gainNode.gain.setValueAtTime(vol * 0.1, audioCtx.current.currentTime);
       } else if (type === 'COLLECT') {
         oscillator.type = 'sine';
         oscillator.frequency.setValueAtTime(800, audioCtx.current.currentTime);
         oscillator.frequency.exponentialRampToValueAtTime(1200, audioCtx.current.currentTime + 0.1);
         gainNode.gain.setValueAtTime(vol * 0.1, audioCtx.current.currentTime);
       } else if (type === 'DAMAGE') {
         oscillator.type = 'sawtooth';
         oscillator.frequency.setValueAtTime(100, audioCtx.current.currentTime);
         oscillator.frequency.exponentialRampToValueAtTime(50, audioCtx.current.currentTime + 0.2);
         gainNode.gain.setValueAtTime(vol * 0.2, audioCtx.current.currentTime);
       } else if (type === 'POWERUP') {
         oscillator.type = 'square';
         oscillator.frequency.setValueAtTime(400, audioCtx.current.currentTime);
         oscillator.frequency.linearRampToValueAtTime(800, audioCtx.current.currentTime + 0.3);
         gainNode.gain.setValueAtTime(vol * 0.1, audioCtx.current.currentTime);
       }

       oscillator.start();
       oscillator.stop(audioCtx.current.currentTime + 0.2);
    }
  }, [settings.volume]);

  // --- Game Loop ---
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const loop = (time: number) => {
      if (!paused && !gameState.current.isDead) {
        const deltaTime = time - lastTime;
        lastTime = time;

        gameState.current.frameCount++;

        // 1. Update Distance & Bearing
        const speed = activeBuff === 'SPEED' ? 2 : 1;
        gameState.current.speedMultiplier = speed;
        gameState.current.distance += (deltaTime * 0.01 * speed);
        setDistance(Math.floor(gameState.current.distance));
        
        // Slight compass drift
        setBearing(prev => (prev + (Math.random() - 0.5) * 0.5) % 360);

        // 2. Spawn Entities
        if (gameState.current.frameCount % 100 === 0) { // Approx every 1.5s
           const rand = Math.random();
           let type: EntityType = 'ENEMY';
           if (rand > 0.7) type = 'COIN';
           if (rand > 0.9) type = Math.random() > 0.5 ? 'POWERUP_SPEED' : 'POWERUP_SHIELD';

           setEntities(prev => [...prev, {
             id: Date.now(),
             type,
             x: 100, // Start at right
             y: type === 'COIN' && Math.random() > 0.5 ? 1 : 0, // Coins can be high
             active: true
           }]);
        }

        // 3. Move Entities & Collision
        setEntities(prev => {
          const nextEntities: Entity[] = [];
          
          prev.forEach(entity => {
            // Move left
            const moveSpeed = activeBuff === 'SPEED' ? 1.5 : 1;
            entity.x -= moveSpeed; 

            // Collision Check (Player is approx at x=15%)
            if (entity.active && entity.x > 10 && entity.x < 20) {
               const playerIsJumping = gameState.current.isJumping;
               
               let hit = false;
               if (entity.type === 'ENEMY' && !playerIsJumping && activeBuff !== 'SHIELD') {
                   // Hit Enemy
                   hit = true;
                   gameState.current.health = Math.max(0, gameState.current.health - 20);
                   setHealth(gameState.current.health);
                   setFlash('DAMAGE');
                   playSound('DAMAGE');
                   
                   // Check death
                   if (gameState.current.health <= 0 && !gameState.current.isDead) {
                       gameState.current.isDead = true;
                       if (onEnd) setTimeout(onEnd, 500);
                   }
               } else if (entity.type === 'COIN') {
                   // Collect Coin
                   if ((entity.y === 1 && playerIsJumping) || (entity.y === 0 && !playerIsJumping)) {
                      hit = true;
                      playSound('COLLECT');
                      setGold(g => g + 10);
                   }
               } else if (entity.type.startsWith('POWERUP')) {
                   // Collect Powerup
                   hit = true;
                   playSound('POWERUP');
                   setFlash('BUFF');
                   const buffType = entity.type === 'POWERUP_SPEED' ? 'SPEED' : 'SHIELD';
                   setActiveBuff(buffType);
                   setTimeout(() => setActiveBuff(null), 5000);
               }

               if (hit) {
                 entity.active = false;
               }
            }

            if (entity.x > -10 && entity.active) {
              nextEntities.push(entity);
            }
          });
          return nextEntities;
        });

        // Clear Flash
        if (gameState.current.frameCount % 20 === 0) setFlash(null);
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [paused, activeBuff, playSound, onEnd]);

  // --- Input Handlers ---
  const handleJump = () => {
    if (!paused && !isJumping && !gameState.current.isDead) {
      setIsJumping(true);
      gameState.current.isJumping = true;
      playSound('JUMP');
      setTimeout(() => {
        setIsJumping(false);
        gameState.current.isJumping = false;
      }, 800); // Jump duration
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') handleJump();
      if (e.code === 'Escape') setPaused(p => !p);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paused, isJumping]);


  return (
    <div 
      className="h-full w-full bg-[#0a0806] font-sans relative overflow-hidden select-none touch-none"
      onClick={handleJump}
    >
      {/* --- Environment (High Fidelity) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Background Image: Mossy Ruins */}
        <div className="absolute inset-0 overflow-hidden">
             <img 
              src="https://images.unsplash.com/photo-1599939571322-792a326991f2?q=80&w=1000&auto=format&fit=crop" 
              alt="Mayan Ruins" 
              className={`w-full h-full object-cover transform transition-transform duration-[30s] ease-linear origin-center ${paused ? '' : 'scale-125'}`}
            />
        </div>
        
        {/* Cinematic Lighting: Volumetric Rays */}
        <div className="absolute top-[-50%] left-[-20%] w-[150%] h-[150%] bg-gradient-to-br from-cyan-100/10 via-transparent to-transparent rotate-12 blur-3xl mix-blend-overlay opacity-60 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1610] via-transparent to-black/60 mix-blend-multiply opacity-80"></div>
        
        {/* Path Visuals */}
        <div className="absolute bottom-0 w-full h-[20%] bg-gradient-to-t from-[#1a1410] to-transparent opacity-90"></div>
        <div className="absolute bottom-0 w-full h-[18%] opacity-30 bg-[url('https://www.transparenttextures.com/patterns/rocky-wall.png')] mix-blend-luminosity"></div>

        {/* Dynamic Screen Effects */}
        {flash === 'DAMAGE' && <div className="absolute inset-0 bg-red-600/30 mix-blend-overlay animate-pulse duration-75"></div>}
        {flash === 'BUFF' && <div className="absolute inset-0 bg-cyan-400/20 mix-blend-overlay animate-pulse duration-300"></div>}
        {activeBuff === 'SPEED' && <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 animate-pulse mix-blend-screen"></div>}
      </div>

      {/* --- Gameplay Entities --- */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
         
         {/* Entities */}
         {entities.map(entity => (
           <div 
             key={entity.id}
             className="absolute w-16 h-16 flex items-center justify-center transition-transform will-change-transform"
             style={{ 
               left: `${entity.x}%`, 
               bottom: entity.y === 1 ? '40%' : '15%',
               transition: 'left 0.05s linear'
             }}
           >
              {entity.type === 'ENEMY' && (
                <div className="relative w-12 h-12">
                   {/* Realistic Spike/Trap visuals */}
                   <div className="absolute inset-0 bg-stone-800 rounded-full border border-stone-600 shadow-xl flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-50"></div>
                      <span className="material-symbols-outlined text-red-500/80 text-2xl drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]">skull</span>
                   </div>
                </div>
              )}
              {entity.type === 'COIN' && (
                <div className="w-8 h-8 relative animate-spin [animation-duration:3s]">
                   <div className="absolute inset-0 bg-gradient-to-tr from-yellow-600 to-yellow-300 rounded-full border border-yellow-200 shadow-[0_0_15px_rgba(234,179,8,0.6)]"></div>
                   <div className="absolute inset-2 border border-yellow-800/30 rounded-full"></div>
                </div>
              )}
              {entity.type === 'POWERUP_SPEED' && (
                <div className="w-10 h-10 bg-cyan-500/20 backdrop-blur-sm rounded-full border border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6)] flex items-center justify-center animate-pulse">
                  <span className="material-symbols-outlined text-cyan-200 text-xl drop-shadow-[0_0_5px_rgba(34,211,238,1)]">bolt</span>
                </div>
              )}
              {entity.type === 'POWERUP_SHIELD' && (
                <div className="w-10 h-10 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.6)] flex items-center justify-center animate-pulse">
                  <span className="material-symbols-outlined text-purple-200 text-xl drop-shadow-[0_0_5px_rgba(168,85,247,1)]">shield</span>
                </div>
              )}
           </div>
         ))}

         {/* Player Character - High Fidelity Style */}
         <div 
           className={`absolute left-[15%] w-20 h-28 transition-all duration-300 ease-out ${isJumping ? 'bottom-[40%]' : 'bottom-[15%]'}`}
         >
            {/* Visual Buff Effects */}
            {activeBuff === 'SHIELD' && (
              <div className="absolute -inset-4 border border-purple-400/50 rounded-full bg-purple-500/10 animate-pulse shadow-[0_0_20px_rgba(168,85,247,0.3)]"></div>
            )}
            {activeBuff === 'SPEED' && (
               <div className="absolute top-1/2 -left-12 w-24 h-2 bg-cyan-400 blur-md opacity-60"></div>
            )}
            
            {/* Ground Shadow */}
            <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-14 h-3 bg-black/60 blur-sm rounded-[100%] transition-all duration-300 ${isJumping ? 'scale-75 opacity-40 translate-y-20' : 'scale-100 opacity-80'}`}></div>

            {/* Character Sprite Container */}
            <div className={`w-full h-full relative ${isJumping ? '-rotate-6' : ''}`}>
               {/* Using a more realistic silhouette/cutout style */}
               <img 
                 src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1000&auto=format&fit=crop" 
                 className="w-full h-full object-cover object-top [clip-path:polygon(20%_0%,80%_0%,100%_100%,0%_100%)] rounded-sm brightness-90 contrast-125"
                 alt="Explorer"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent mix-blend-multiply"></div>
            </div>
         </div>
      </div>


      {/* --- HUD Layer (Refined & Physical) --- */}
      <div className="absolute inset-0 z-20 pointer-events-none p-safe">
        
        {/* Top Left: Realistic Compass */}
        <div className="absolute top-6 left-6 w-24 h-24 pointer-events-auto">
             <div className="relative w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                  {/* Brass Case */}
                  <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_45deg,#5c4033,#8b4513,#5c4033)] border-2 border-[#3d2e18] shadow-inner"></div>
                  {/* Glass Reflection */}
                  <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-white/10 to-transparent z-20 rounded-full border-t border-white/20"></div>
                  {/* Compass Face */}
                  <div className="absolute inset-2 rounded-full bg-[#e3dacb] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] flex items-center justify-center overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?q=80&w=1000&auto=format&fit=crop" 
                        className="w-full h-full object-cover opacity-80 mix-blend-multiply"
                        alt="Compass Face"
                      />
                      {/* Needle */}
                      <div 
                         className="absolute w-1 h-16 bg-red-800 z-10 shadow-sm transition-transform duration-1000 ease-in-out"
                         style={{ transform: `rotate(${bearing}deg)` }}
                      >
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-red-600 rotate-45"></div>
                         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-800 rotate-45"></div>
                      </div>
                      <div className="absolute w-2 h-2 bg-[#1a1410] rounded-full z-20 border border-[#8b4513]"></div>
                  </div>
             </div>
        </div>

        {/* Top Right: Distance Tracker (Stone Tablet Style) */}
        <div className="absolute top-6 right-6 pointer-events-auto">
             <div className="relative px-6 py-3 bg-[#e3dacb] shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-b-4 border-[#bfa889] transform rotate-1">
                 {/* Paper Texture */}
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-60 mix-blend-multiply"></div>
                 {/* Torn Edges */}
                 <div className="absolute -left-1 top-0 bottom-0 w-1 bg-[#e3dacb] clip-torn-right transform rotate-180"></div>
                 <div className="absolute -right-1 top-0 bottom-0 w-1 bg-[#e3dacb] clip-torn-right"></div>
                 
                 <div className="relative z-10 flex items-baseline gap-1">
                     <span className="text-3xl font-display font-bold text-[#3d2e18] drop-shadow-sm tracking-tight">{distance}</span>
                     <span className="text-xs font-serif text-[#8c7b66] uppercase tracking-widest font-bold">Meters</span>
                 </div>
             </div>
        </div>
        
        {/* Pause Button (Discreet) */}
        <button 
             onClick={(e) => { e.stopPropagation(); setPaused(!paused); }}
             className="absolute top-32 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors pointer-events-auto text-white/60"
        >
             <span className="material-symbols-outlined text-xl">pause</span>
        </button>

        {/* Bottom Center: Ability Dock */}
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center justify-end pointer-events-auto">
             
             {/* Health Bar (Integrated above items) */}
             <div className="mb-4 w-48 h-1.5 bg-[#1a1410] rounded-full overflow-hidden border border-[#3d2e18] shadow-lg relative">
                 <div 
                   className={`h-full transition-all duration-300 ${health < 30 ? 'bg-red-600 shadow-[0_0_10px_red]' : 'bg-[#c5a059] shadow-[0_0_10px_#c5a059]'}`}
                   style={{ width: `${health}%` }}
                 ></div>
                 <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
             </div>

             {/* Item Slots */}
             <div className="flex items-center gap-4">
                 
                 {/* Slot 1: Potion */}
                 <div className="w-16 h-16 bg-[#1a1410] border-4 border-[#c7c2b8] rounded-md shadow-2xl relative overflow-hidden group">
                     {/* Bone Texture Border */}
                     <div className="absolute inset-0 border-[4px] border-[#e3dacb] opacity-50 rounded-sm pointer-events-none"></div>
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rocky-wall.png')] opacity-40 mix-blend-overlay"></div>
                     
                     {/* Item Image */}
                     <img 
                        src="https://images.unsplash.com/photo-1620052087057-bfd8231f5885?q=80&w=1000&auto=format&fit=crop" 
                        alt="Potion" 
                        className={`w-full h-full object-cover transition-transform duration-300 ${activeBuff ? 'scale-110 brightness-125' : 'scale-100'}`} 
                     />
                     
                     {/* Glow Overlay when active */}
                     {activeBuff && <div className="absolute inset-0 bg-cyan-500/30 animate-pulse mix-blend-screen"></div>}
                 </div>

                 {/* Slot 2: Weapon (Primary) */}
                 <div className="w-20 h-20 bg-[#1a1410] border-4 border-[#e3dacb] rounded-md shadow-2xl relative overflow-hidden transform -translate-y-2">
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rocky-wall.png')] opacity-40 mix-blend-overlay"></div>
                     <img 
                        src="https://images.unsplash.com/photo-1595166672322-c288f912e737?q=80&w=1964&auto=format&fit=crop" 
                        alt="Machete" 
                        className="w-full h-full object-cover scale-110 contrast-125" 
                     />
                     <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]"></div>
                 </div>

                 {/* Slot 3: Shield */}
                 <div className="w-16 h-16 bg-[#1a1410] border-4 border-[#5c5650] rounded-md shadow-2xl relative overflow-hidden">
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rocky-wall.png')] opacity-40 mix-blend-overlay"></div>
                     <img 
                        src="https://images.unsplash.com/photo-1625425662704-c361427503e2?q=80&w=1000&auto=format&fit=crop" 
                        alt="Shield" 
                        className="w-full h-full object-cover scale-125" 
                     />
                 </div>

             </div>

        </div>

      </div>

      {/* --- EXPLORER'S FIELD KIT (PAUSE MENU) --- */}
      {paused && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300 pointer-events-auto" onClick={(e) => e.stopPropagation()}>
           
           {/* Top Wooden Sign */}
           <div className="relative mb-6 transform -rotate-1">
              <div className="absolute inset-0 bg-[#3d2e18] border-2 border-[#1a1410] rounded-sm shadow-xl transform skew-x-12"></div>
              <div className="relative px-8 py-3 bg-[#4a3b2a] border-2 border-[#6b5d4d] rounded-sm shadow-inner flex items-center justify-center">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-30 mix-blend-multiply"></div>
                 {/* Bolts */}
                 <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#1a1410] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
                 <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#1a1410] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
                 <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-[#1a1410] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
                 <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-[#1a1410] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
                 
                 <h2 className="font-rough text-2xl text-[#e3dacb] tracking-widest drop-shadow-md">EXPLORER'S FIELD KIT</h2>
              </div>
           </div>

           {/* The Kit (Bag) */}
           <div className="relative w-[90%] max-w-sm aspect-square bg-[#3e2b20] rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.9)] p-6 flex flex-col items-center justify-between overflow-visible">
              {/* Leather Texture */}
              <div className="absolute inset-0 rounded-3xl bg-[url('https://www.transparenttextures.com/patterns/leather.png')] opacity-60 mix-blend-multiply pointer-events-none"></div>
              {/* Stitching */}
              <div className="absolute inset-3 rounded-[20px] border-2 border-dashed border-[#6b5d4d]/40 pointer-events-none"></div>
              
              {/* Bag Flap Shadow (Top) */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/40 to-transparent rounded-t-3xl pointer-events-none"></div>

              {/* -- INNER CONTENT -- */}
              <div className="relative z-10 w-full h-full flex flex-col gap-4">
                  
                  {/* Row 1: Resume (Magnifying Glass) & Restart (Stopwatch) */}
                  <div className="flex justify-between items-center h-1/2 px-2">
                      
                      {/* RESUME - Magnifying Glass */}
                      <button onClick={() => setPaused(false)} className="group relative w-28 h-28 flex flex-col items-center justify-center transition-transform active:scale-95">
                          {/* Handle */}
                          <div className="absolute -bottom-8 -left-4 w-4 h-16 bg-[#5c4033] rounded-full transform rotate-45 border border-[#2a1d15] shadow-lg z-0"></div>
                          {/* Rim */}
                          <div className="absolute inset-0 rounded-full border-[6px] border-[#b8860b] bg-[#c5a059]/20 shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-10 box-border"></div>
                          {/* Lens */}
                          <div className="absolute inset-2 rounded-full bg-blue-100/10 backdrop-blur-[2px] border border-white/20 shadow-inner flex items-center justify-center overflow-hidden z-20 group-hover:bg-blue-100/20 transition-colors">
                              {/* Reflection */}
                              <div className="absolute top-2 left-4 w-8 h-4 bg-white/30 rounded-full -rotate-45 blur-md"></div>
                              <span className="font-display font-bold text-[#e3dacb] text-lg tracking-widest drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transform -rotate-12 group-hover:scale-110 transition-transform">RESUME</span>
                          </div>
                      </button>

                      {/* RESTART - Stopwatch */}
                      <button onClick={() => { setPaused(false); onEnd && onEnd(); }} className="group relative w-24 h-24 transition-transform active:scale-95 hover:rotate-6">
                           {/* Top Winder */}
                           <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-5 bg-[#d4af37] rounded-sm border border-[#8b7355]"></div>
                           <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#8b7355]"></div>
                           {/* Body */}
                           <div className="absolute inset-0 rounded-full bg-[#e3dacb] border-[4px] border-[#d4af37] shadow-[0_5px_15px_rgba(0,0,0,0.4)] flex items-center justify-center">
                               {/* Face */}
                               <div className="w-full h-full rounded-full bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-100 flex items-center justify-center relative">
                                  <div className="absolute inset-0 rounded-full border border-black/10"></div>
                                  {/* Ticks */}
                                  <div className="absolute top-1 left-1/2 w-0.5 h-1 bg-black/40"></div>
                                  <div className="absolute bottom-1 left-1/2 w-0.5 h-1 bg-black/40"></div>
                                  <div className="absolute left-1 top-1/2 w-1 h-0.5 bg-black/40"></div>
                                  <div className="absolute right-1 top-1/2 w-1 h-0.5 bg-black/40"></div>
                                  
                                  <span className="font-rough font-bold text-[#3d2e18] text-sm tracking-widest z-10">RESTART</span>
                                  
                                  {/* Hand */}
                                  <div className="absolute top-1/2 left-1/2 w-0.5 h-8 bg-red-800 origin-bottom transform -translate-x-1/2 -translate-y-full rotate-45 opacity-80"></div>
                                  <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                               </div>
                           </div>
                      </button>

                  </div>

                  {/* Volume removed from here, now in Settings */}
                  {/* Decorative element instead? */}
                  <div className="absolute top-6 right-4 bottom-20 w-8 flex flex-col items-center justify-center opacity-30">
                     <div className="w-1 h-full bg-[#2a1d15] rounded-full"></div>
                  </div>


                  {/* Row 2: Quit (Folded Map) - Bottom Left */}
                  <div className="absolute bottom-6 left-6">
                      <button onClick={onEnd} className="group relative w-40 h-28 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                          {/* Map Paper */}
                          <div className="absolute inset-0 bg-[#d4c5b0] shadow-[0_5px_15px_rgba(0,0,0,0.5)] border-l-2 border-[#bfa889]">
                              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-80 mix-blend-multiply"></div>
                              {/* Fold Lines */}
                              <div className="absolute top-0 bottom-0 left-1/3 w-px bg-black/10 shadow-[1px_0_1px_rgba(255,255,255,0.4)]"></div>
                              <div className="absolute top-0 bottom-0 right-1/3 w-px bg-black/10 shadow-[1px_0_1px_rgba(255,255,255,0.4)]"></div>
                              
                              {/* Map Drawing */}
                              <svg className="absolute inset-0 w-full h-full opacity-30 mix-blend-multiply p-2" viewBox="0 0 100 100">
                                  <path d="M10,10 Q30,40 50,20 T90,50" fill="none" stroke="#3d2e18" strokeWidth="1" strokeDasharray="2,2"/>
                                  <path d="M20,80 Q50,60 80,90" fill="none" stroke="#3d2e18" strokeWidth="1"/>
                                  <circle cx="20" cy="20" r="2" fill="#8a1c1c" />
                              </svg>

                              <div className="absolute inset-0 flex items-center justify-center">
                                  <span className="font-display font-bold text-[#3d2e18] text-3xl tracking-widest uppercase transform -rotate-6 opacity-90 group-hover:scale-110 transition-transform">QUIT</span>
                              </div>
                          </div>

                          {/* String Tie */}
                          <div className="absolute top-1/2 left-0 w-full h-1 bg-[#e3dacb] shadow-sm transform -translate-y-1/2 rotate-1 z-10"></div>
                          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#e3dacb] rounded-full shadow-md transform -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                              <div className="w-1.5 h-1.5 bg-[#3d2e18] rounded-full"></div>
                          </div>
                      </button>
                  </div>

              </div>
           </div>

           {/* Footer Buttons (Below Bag) */}
           <div className="mt-8 flex gap-8">
               <FooterButton icon="settings" label="Options" onClick={onSettings} />
               <FooterButton icon="book" label="Journal" />
               <FooterButton icon="leaderboard" label="Leaders" onClick={onOpenLeaderboard} />
           </div>

        </div>
      )}

    </div>
  );
};

const FooterButton = ({ icon, label, onClick }: { icon: string, label: string, onClick?: () => void }) => (
    <button onClick={onClick} className="flex flex-col items-center gap-1 group">
        <div className="w-12 h-12 bg-[#3e2b20] rounded-lg border border-[#6b5d4d] shadow-lg flex items-center justify-center group-active:scale-95 transition-transform relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-30"></div>
             <span className="material-symbols-outlined text-[#e3dacb] text-2xl group-hover:text-[#c5a059] relative z-10">{icon}</span>
        </div>
        <span className="font-rough font-bold text-[#e3dacb] text-sm uppercase tracking-wider">{label}</span>
    </button>
);

export default GameplayScreen;