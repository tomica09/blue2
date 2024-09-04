import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: "button.svelte-biu21c{width:5cm;height:2cm;margin-left:auto;margin-right:auto}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<main>\\r\\n    <a href=\\"/play/1\\"><button>Player1</button></a>\\r\\n    <a href=\\"/play/2\\"><button>Player2</button></a>\\r\\n    <a href=\\"/play/3\\"><button>Player3</button></a>\\r\\n    <a href=\\"/play/4\\"><button>Player4</button></a>\\r\\n</main>\\r\\n\\r\\n<style>\\r\\n    button {\\r\\n        width : 5cm;\\r\\n        height: 2cm;\\r\\n        margin-left:auto;\\r\\n        margin-right: auto;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAQI,oBAAO,CACH,KAAK,CAAG,GAAG,CACX,MAAM,CAAE,GAAG,CACX,YAAY,IAAI,CAChB,YAAY,CAAE,IAClB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main data-svelte-h="svelte-1yy49ww"><a href="/play/1"><button class="svelte-biu21c">Player1</button></a> <a href="/play/2"><button class="svelte-biu21c">Player2</button></a> <a href="/play/3"><button class="svelte-biu21c">Player3</button></a> <a href="/play/4"><button class="svelte-biu21c">Player4</button></a> </main>`;
});
export {
  Page as default
};
