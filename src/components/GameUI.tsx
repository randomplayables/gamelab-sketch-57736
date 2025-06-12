import React from 'react';
import { useGame } from '../hooks/useGame';
import { getGameTitle } from '../utils';

const containerStyles: React.CSSProperties = {
  textAlign: 'center',
  padding: '2rem',
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
};

const buttonStyles: React.CSSProperties = {
  backgroundColor: '#10B981',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '15px',
};

export const GameUI: React.FC = () => {
  const { gameState, incrementScore, resetGame } = useGame();
  
  return (
    <div style={containerStyles}>
      <h1>{getGameTitle()}</h1>
      <p>Current Score: <strong>{gameState.score}</strong></p>
      
      {gameState.status === 'playing' && (
        <button style={buttonStyles} onClick={incrementScore}>
          Add Point
        </button>
      )}

      {gameState.status === 'won' && (
        <div>
          <p style={{ color: '#10B981', fontWeight: 'bold' }}>You Won!</p>
          <button style={buttonStyles} onClick={resetGame}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};
