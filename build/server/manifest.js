const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.DtT54IOe.js","app":"_app/immutable/entry/app.DOnonUx7.js","imports":["_app/immutable/entry/start.DtT54IOe.js","_app/immutable/chunks/entry.RZYzDLN8.js","_app/immutable/chunks/scheduler.BCRSdwSa.js","_app/immutable/entry/app.DOnonUx7.js","_app/immutable/chunks/scheduler.BCRSdwSa.js","_app/immutable/chunks/index.BFzVNqAT.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-BNRx8BeJ.js')),
			__memo(() => import('./chunks/1-CayEZda4.js')),
			__memo(() => import('./chunks/2-DJVOQGTK.js')),
			__memo(() => import('./chunks/4-DAtragr-.js')),
			__memo(() => import('./chunks/5-DafBHckt.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/play",
				pattern: /^\/play\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/play/[playerId]",
				pattern: /^\/play\/([^/]+?)\/?$/,
				params: [{"name":"playerId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/about"]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
