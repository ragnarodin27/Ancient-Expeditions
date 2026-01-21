import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GameSettings {
  volume: number;
  graphics: 'low' | 'high';
  language: string;
}

interface GameState {
  credits: number;
  inventory: string[];
  settings: GameSettings;
  addToInventory: (item: string, cost: number) => boolean;
  updateSettings: (newSettings: Partial<GameSettings>) => void;
}

const GameContext = createContext<GameState | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [credits, setCredits] = useState(2450);
  const [inventory, setInventory] = useState<string[]>([]);
  const [settings, setSettings] = useState<GameSettings>({
    volume: 75,
    graphics: 'high',
    language: 'ENGLISH'
  });

  const addToInventory = (item: string, cost: number) => {
    if (credits >= cost && !inventory.includes(item)) {
      setCredits(prev => prev - cost);
      setInventory(prev => [...prev, item]);
      return true;
    }
    return false;
  };

  const updateSettings = (newSettings: Partial<GameSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  return (
    <GameContext.Provider value={{ credits, inventory, settings, addToInventory, updateSettings }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};