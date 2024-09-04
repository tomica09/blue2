import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { t as tiles, G as GameBoard } from "../../chunks/tiles.js";
const css = {
  code: "main.svelte-1v6sauq{display:flex;flex-direction:row;align-items:center;gap:20px}button.svelte-1v6sauq{width:3cm;height:1cm}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import GameBoard from \\"$lib/GameBoard.svelte\\";\\n  import { tiles } from \\"./play/[playerId]/tiles\\";\\n<\/script>\\n\\n<main>\\n  <h1>hooks.server.js 키는 것 확인하기!</h1>\\n  <h1>부루마불 게임</h1>\\n  <GameBoard rows={11} cols={11} {tiles} />\\n  <a href=\\"/play\\"><button id=\\"playbt\\">PLAY!</button></a>\\n</main>\\n\\n<style>\\n  main {\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    gap: 20px;\\n  }\\n  button {\\n    width: 3cm;\\n    height: 1cm;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAaE,mBAAK,CACH,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IACP,CACA,qBAAO,CACL,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GACV"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-1v6sauq"><h1 data-svelte-h="svelte-1ezvr7b">hooks.server.js 키는 것 확인하기!</h1> <h1 data-svelte-h="svelte-17cvzca">부루마불 게임</h1> ${validate_component(GameBoard, "GameBoard").$$render($$result, { rows: 11, cols: 11, tiles }, {}, {})} <a href="/play" data-svelte-h="svelte-dpmt6t"><button id="playbt" class="svelte-1v6sauq">PLAY!</button></a> </main>`;
});
export {
  Page as default
};
