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
		client: {"start":"_app/immutable/entry/start.BYmhugsN.js","app":"_app/immutable/entry/app.DG8QRYAY.js","imports":["_app/immutable/entry/start.BYmhugsN.js","_app/immutable/chunks/entry.DU-uMvIj.js","_app/immutable/chunks/scheduler.BCRSdwSa.js","_app/immutable/entry/app.DG8QRYAY.js","_app/immutable/chunks/scheduler.BCRSdwSa.js","_app/immutable/chunks/index.BFzVNqAT.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-CX-00qML.js')),
			__memo(() => import('./chunks/1-DqJGWOF1.js')),
			__memo(() => import('./chunks/2-MdrUgVX7.js')),
			__memo(() => import('./chunks/4-CV8_pLB7.js')),
			__memo(() => import('./chunks/5-Cgh_in-q.js'))
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
