

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/play/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.DP4hq3Ik.js","_app/immutable/chunks/scheduler.BCRSdwSa.js","_app/immutable/chunks/index.BFzVNqAT.js"];
export const stylesheets = ["_app/immutable/assets/4.BfIMEMGy.css"];
export const fonts = [];
