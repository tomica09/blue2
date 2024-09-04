// src/routes/[playerId]/+page.js
export async function load({ params }) {
  return {
    playerId: params.playerId
  };
}
