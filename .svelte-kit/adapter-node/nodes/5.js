import * as universal from '../entries/pages/play/_playerId_/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/play/_playerId_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/play/[playerId]/+page.js";
export const imports = ["_app/immutable/nodes/5.B4uXaWSj.js","_app/immutable/chunks/scheduler.BCRSdwSa.js","_app/immutable/chunks/index.BFzVNqAT.js","_app/immutable/chunks/tiles.sOSW5Ls0.js","_app/immutable/chunks/entry.DU-uMvIj.js"];
export const stylesheets = ["_app/immutable/assets/5.CJN5ELGd.css","_app/immutable/assets/tiles.CjKkceRx.css"];
export const fonts = [];
