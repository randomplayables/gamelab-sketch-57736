import React from 'react';
import { GameProvider } from './hooks/useGame';
import { GameUI } from './components/GameUI';
import './App.css';

export default function App() {
  return (
    <GameProvider>
      <GameUI />
    </GameProvider>
  );
}