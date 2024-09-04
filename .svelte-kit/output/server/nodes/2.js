

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BjfBjS0J.js","_app/immutable/chunks/scheduler.BCRSdwSa.js","_app/immutable/chunks/index.BFzVNqAT.js","_app/immutable/chunks/tiles.sOSW5Ls0.js"];
export const stylesheets = ["_app/immutable/assets/2.BsChUDA3.css","_app/immutable/assets/tiles.CjKkceRx.css"];
export const fonts = [];
