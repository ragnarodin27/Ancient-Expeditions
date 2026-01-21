import React, { useState } from 'react';
import ShopScreen from './screens/ShopScreen';
import GameplayScreen from './screens/GameplayScreen';
import FusionScreen from './screens/FusionScreen';
import ArmoryScreen from './screens/ArmoryScreen';
import ExpeditionResultScreen from './screens/ExpeditionResultScreen';
import RelicMuseumScreen from './screens/RelicMuseumScreen';
import ExpeditionMapScreen from './screens/ExpeditionMapScreen';
import ReviveScreen from './screens/ReviveScreen';
import JournalScreen from './screens/JournalScreen';
import ToolShopScreen from './screens/ToolShopScreen';
import LoadingScreen from './screens/LoadingScreen';
import SettingsScreen from './screens/SettingsScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
import DailyRewardScreen from './screens/DailyRewardScreen';
import GearWorkshopScreen from './screens/GearWorkshopScreen';
import SmugglerStoreScreen from './screens/SmugglerStoreScreen';
import WarRoomScreen from './screens/WarRoomScreen';
import SocialChallengeScreen from './screens/SocialChallengeScreen';
import TutorialScreen from './screens/TutorialScreen';
import AscensionScreen from './screens/AscensionScreen';
import DeathScreen from './screens/DeathScreen';
import RitualScreen from './screens/RitualScreen';
import NightRunScreen from './screens/NightRunScreen';
import FusionApparatusScreen from './screens/FusionApparatusScreen';
import IconSheetScreen from './screens/IconSheetScreen';
import TempleEntranceScreen from './screens/TempleEntranceScreen';
import SeasonPassScreen from './screens/SeasonPassScreen';
import CreditsScreen from './screens/CreditsScreen';
import CommunityExpeditionScreen from './screens/CommunityExpeditionScreen';
import ForkSelectionScreen from './screens/ForkSelectionScreen';
import FieldMapOverlayScreen from './screens/FieldMapOverlayScreen';
import CavePaintingScreen from './screens/CavePaintingScreen';
import BossWarningScreen from './screens/BossWarningScreen';
import BoobyTrapDeathScreen from './screens/BoobyTrapDeathScreen';
import CompassUpgradeScreen from './screens/CompassUpgradeScreen';
import { GameProvider } from './GameContext';

type Screen = 'shop' | 'gameplay' | 'fusion' | 'armory' | 'result' | 'museum' | 'map' | 'revive' | 'journal' | 'toolShop' | 'loading' | 'settings' | 'leaderboard' | 'dailyReward' | 'gearWorkshop' | 'smugglerStore' | 'warRoom' | 'socialChallenge' | 'tutorial' | 'ascension' | 'death' | 'ritual' | 'nightRun' | 'fusionApparatus' | 'iconSheet' | 'templeEntrance' | 'seasonPass' | 'credits' | 'communityExpedition' | 'forkSelection' | 'fieldMapOverlay' | 'cavePainting' | 'bossWarning' | 'boobyTrap' | 'compassUpgrade';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('shop');
  // Store previous screen to return to from settings, defaulting to shop
  const [previousScreen, setPreviousScreen] = useState<Screen>('shop');

  const navigateToSettings = () => {
    setPreviousScreen(currentScreen);
    setCurrentScreen('settings');
  };

  const handleSettingsBack = () => {
    setCurrentScreen(previousScreen);
  };

  return (
    <GameProvider>
      <div className="h-full w-full flex flex-col items-center justify-center bg-[#050505]">
        {/* Mobile Frame Constraint */}
        <div className="relative w-full h-full max-w-md bg-stone-dark overflow-hidden flex flex-col shadow-2xl">
          
          {/* Screen Content */}
          <div className="flex-1 relative overflow-hidden">
            {currentScreen === 'shop' && (
              <ShopScreen 
                onNavigate={() => setCurrentScreen('map')} 
                onOpenMuseum={() => setCurrentScreen('museum')} 
                onGoToArmory={() => setCurrentScreen('armory')}
                onOpenJournal={() => setCurrentScreen('journal')}
                onOpenToolShop={() => setCurrentScreen('toolShop')}
                onOpenDailyReward={() => setCurrentScreen('dailyReward')}
                onOpenWorkshop={() => setCurrentScreen('gearWorkshop')}
                onOpenSmuggler={() => setCurrentScreen('smugglerStore')}
                onOpenWarRoom={() => setCurrentScreen('warRoom')}
                onOpenSocial={() => setCurrentScreen('socialChallenge')}
                onOpenTutorial={() => setCurrentScreen('tutorial')}
                onOpenAscension={() => setCurrentScreen('ascension')}
                onOpenDeath={() => setCurrentScreen('death')}
                onOpenRitual={() => setCurrentScreen('ritual')}
                onOpenNightRun={() => setCurrentScreen('nightRun')}
                onOpenFusionApparatus={() => setCurrentScreen('fusionApparatus')}
                onOpenIconSheet={() => setCurrentScreen('iconSheet')}
                onOpenTempleEntrance={() => setCurrentScreen('templeEntrance')}
                onOpenSeasonPass={() => setCurrentScreen('seasonPass')}
                onOpenCredits={() => setCurrentScreen('credits')}
                onOpenCommunityExpedition={() => setCurrentScreen('communityExpedition')}
                onOpenForkSelection={() => setCurrentScreen('forkSelection')}
                onOpenFieldMapOverlay={() => setCurrentScreen('fieldMapOverlay')}
                onOpenCavePainting={() => setCurrentScreen('cavePainting')}
                onOpenBossWarning={() => setCurrentScreen('bossWarning')}
                onOpenBoobyTrap={() => setCurrentScreen('boobyTrap')}
                onOpenCompassUpgrade={() => setCurrentScreen('compassUpgrade')}
              />
            )}
            {currentScreen === 'map' && <ExpeditionMapScreen onBack={() => setCurrentScreen('shop')} onPlay={() => setCurrentScreen('loading')} />}
            {currentScreen === 'loading' && <LoadingScreen onComplete={() => setCurrentScreen('gameplay')} />}
            {currentScreen === 'gameplay' && (
                <GameplayScreen 
                    onEnd={() => setCurrentScreen('death')} 
                    onSettings={navigateToSettings}
                    onOpenLeaderboard={() => setCurrentScreen('leaderboard')}
                />
            )}
            {currentScreen === 'death' && <DeathScreen onResurrect={() => setCurrentScreen('gameplay')} onAcceptFate={() => setCurrentScreen('result')} />}
            {currentScreen === 'revive' && <ReviveScreen onRevive={() => setCurrentScreen('gameplay')} onGiveUp={() => setCurrentScreen('result')} />}
            {currentScreen === 'result' && <ExpeditionResultScreen onContinue={() => setCurrentScreen('map')} onEnd={() => setCurrentScreen('shop')} />}
            {currentScreen === 'fusion' && <FusionScreen />}
            {currentScreen === 'armory' && <ArmoryScreen onBack={() => setCurrentScreen('shop')} />}
            {currentScreen === 'museum' && <RelicMuseumScreen onBack={() => setCurrentScreen('shop')} />}
            {currentScreen === 'journal' && <JournalScreen onBack={() => setCurrentScreen('shop')} />}
            {currentScreen === 'toolShop' && <ToolShopScreen onBack={() => setCurrentScreen('shop')} />}
            {currentScreen === 'settings' && <SettingsScreen onBack={handleSettingsBack} />}
            {currentScreen === 'leaderboard' && <LeaderboardScreen onBack={() => setCurrentScreen('gameplay')} />}
            {currentScreen === 'dailyReward' && <DailyRewardScreen onBack={() => setCurrentScreen('shop')} />}
            {currentScreen === 'gearWorkshop' && <GearWorkshopScreen onBack={() => setCurrentScreen('shop')} />}
            {currentScreen === 'smugglerStore' && <SmugglerStoreScreen onBack={() => setCurrentScreen('shop')} />}
            {currentScreen === 'warRoom' && <WarRoomScreen onBack={() => setCurrentScreen('shop')} />}
            {currentScreen === 'socialChallenge' && <SocialChallengeScreen onBack={() => setCurrentScreen('shop')} />}
            {currentScreen === 'tutorial' && <TutorialScreen onBack={() => setCurrentScreen('shop')} />}
            {currentScreen === 'ascension' && <AscensionScreen onBack={() => setCurrentScreen('shop')} onNavigate={(screen) => setCurrentScreen(screen as Screen)} />}
            {currentScreen === 'ritual' && <RitualScreen onBack={() => setCurrentScreen('shop')} />}
            {currentScreen === 'nightRun' && <NightRunScreen onBack={() => setCurrentScreen('shop')} />}
            {currentScreen === 'fusionApparatus' && <FusionApparatusScreen onBack={() => setCurrentScreen('shop')} />}
            {currentScreen === 'iconSheet' && <IconSheetScreen onBack={() => setCurrentScreen('shop')} />}
            {currentScreen === 'templeEntrance' && <TempleEntranceScreen onStart={() => setCurrentScreen('loading')} />}
            {currentScreen === 'seasonPass' && <SeasonPassScreen onBack={() => setCurrentScreen('shop')} />}
            {currentScreen === 'credits' && <CreditsScreen onBack={() => setCurrentScreen('shop')} />}
            {currentScreen === 'communityExpedition' && <CommunityExpeditionScreen onBack={() => setCurrentScreen('shop')} />}
            {currentScreen === 'forkSelection' && <ForkSelectionScreen onBack={() => setCurrentScreen('shop')} onChoose={(path) => setCurrentScreen('gameplay')} />}
            {currentScreen === 'fieldMapOverlay' && <FieldMapOverlayScreen onBack={() => setCurrentScreen('shop')} />}
            {currentScreen === 'cavePainting' && <CavePaintingScreen onBack={() => setCurrentScreen('shop')} />}
            {currentScreen === 'bossWarning' && <BossWarningScreen onBack={() => setCurrentScreen('shop')} onEngage={() => setCurrentScreen('gameplay')} />}
            {currentScreen === 'boobyTrap' && <BoobyTrapDeathScreen onRetry={() => setCurrentScreen('gameplay')} onExit={() => setCurrentScreen('shop')} />}
            {currentScreen === 'compassUpgrade' && <CompassUpgradeScreen onBack={() => setCurrentScreen('shop')} />}
          </div>

          {/* Global Navigation - Worn Leather & Iron Style */}
          {currentScreen !== 'gameplay' && currentScreen !== 'result' && currentScreen !== 'museum' && currentScreen !== 'map' && currentScreen !== 'revive' && currentScreen !== 'death' && currentScreen !== 'journal' && currentScreen !== 'toolShop' && currentScreen !== 'loading' && currentScreen !== 'settings' && currentScreen !== 'leaderboard' && currentScreen !== 'dailyReward' && currentScreen !== 'gearWorkshop' && currentScreen !== 'smugglerStore' && currentScreen !== 'warRoom' && currentScreen !== 'socialChallenge' && currentScreen !== 'tutorial' && currentScreen !== 'ascension' && currentScreen !== 'ritual' && currentScreen !== 'nightRun' && currentScreen !== 'fusionApparatus' && currentScreen !== 'iconSheet' && currentScreen !== 'templeEntrance' && currentScreen !== 'seasonPass' && currentScreen !== 'credits' && currentScreen !== 'communityExpedition' && currentScreen !== 'forkSelection' && currentScreen !== 'fieldMapOverlay' && currentScreen !== 'cavePainting' && currentScreen !== 'bossWarning' && currentScreen !== 'boobyTrap' && currentScreen !== 'compassUpgrade' && (
            <nav className="bg-[#1a1410] border-t border-[#3d342b] pt-3 pb-6 px-8 z-50 relative shadow-[0_-10px_40px_rgba(0,0,0,0.8)]">
               {/* Leather texture overlay */}
               <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] pointer-events-none"></div>
               {/* Top Highlight edge */}
               <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
               
              <div className="flex justify-between items-end relative z-10">
                <NavButton 
                  active={currentScreen === 'armory'} 
                  onClick={() => setCurrentScreen('armory')} 
                  icon="group" 
                  label="Dossier"
                />
                
                <div className="relative">
                  <NavButton 
                    active={currentScreen === 'fusion'} 
                    onClick={() => setCurrentScreen('fusion')} 
                    icon="diamond" 
                    label="Relics"
                  />
                  {/* Notification Dot */}
                  <div className="absolute top-1 right-3 w-2 h-2 bg-red-700 rounded-full shadow-[0_0_8px_rgba(185,28,28,0.8)] border border-black/50"></div>
                </div>

                <NavButton 
                  active={currentScreen === 'shop'} 
                  onClick={() => setCurrentScreen('shop')} 
                  icon="map" 
                  label="Camp"
                />
              </div>
            </nav>
          )}
        </div>
      </div>
    </GameProvider>
  );
};

const NavButton = ({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: string, label: string }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center gap-1.5 p-2 rounded transition-all duration-300 active:scale-95 group ${active ? 'text-[#c5a059]' : 'text-[#5c4d41] hover:text-[#8c7b66]'}`}
  >
    <div className={`relative ${active ? 'drop-shadow-[0_0_8px_rgba(197,160,89,0.3)]' : ''}`}>
        <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <span className={`text-[10px] uppercase font-display font-bold tracking-[0.15em] ${active ? 'text-[#e3dacb]' : 'text-[#4a3b2a] group-hover:text-[#6b5d4d]'}`}>
        {label}
    </span>
  </button>
);

export default App;