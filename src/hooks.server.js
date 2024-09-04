// src/hooks.server.js
/*
import { isNumberObject } from 'util/types';

let visitedUrls = new Set();

export async function handle({ event, resolve }) {
  const url = new URL(event.request.url);
  const playerId = url.pathname.split('/').pop();

  console.log('Request URL:', url.toString());
  console.log('Extracted playerId:', playerId);
if(playerId==='1'||playerId==='2'||playerId==='3'||playerId==='4'){
    

  if (visitedUrls.has(playerId)) {
    console.log(`Player ID ${playerId} already visited`);
    return new Response('Already visited', { status: 403 });
  }

  visitedUrls.add(playerId);
  console.log(`Player ID ${playerId} added to visited URLs`);
}
  return resolve(event);
}
**/