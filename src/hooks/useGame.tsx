import React, { useState, useCallback, useContext, createContext, ReactNode } from 'react';
import { GameState } from '../types';
import { INITIAL_SCORE, WINNING_SCORE } from '../constants';

interface GameContextType {
  gameState: GameState;
  incrementScore: () => void;
  resetGame: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [gameState, setGameState] = useState<GameState>({
    status: 'playing',
    score: INITIAL_SCORE,
  });

  const incrementScore = useCallback(() => {
    setGameState(prev => {
      const newScore = prev.score + 1;
      const newStatus = newScore >= WINNING_SCORE ? 'won' : 'playing';
      return { ...prev, score: newScore, status: newStatus };
    });
  }, []);

  const resetGame = useCallback(() => {
    setGameState({ status: 'playing', score: INITIAL_SCORE });
  }, []);
  
  const value = { gameState, incrementScore, resetGame };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
