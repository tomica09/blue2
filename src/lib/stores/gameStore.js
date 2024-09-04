/*import { writable } from 'svelte/store';

const initialState = {
  players: [],
};

function createGameStore() {
  const { subscribe, set, update } = writable(initialState);

  const socket = new WebSocket('ws://localhost:8080');

  socket.addEventListener('message', event => {
    const data = JSON.parse(event.data);
    
    if (data.type === 'init' || data.type === 'update') {
      set(data.gameState);
    }
  });

  return {
    subscribe,
    movePlayer: (playerId, steps) => {
      socket.send(JSON.stringify({ type: 'move', playerId, steps }));
    },
  };
}

export const gameStore = createGameStore();
**/