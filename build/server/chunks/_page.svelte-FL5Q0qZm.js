import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component, g as getContext } from './ssr-KgfjOieO.js';
import { t as tiles, G as GameBoard } from './tiles-Ce-YiyeK.js';
import './exports-BGi7-Rnc.js';

const GameController = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { playerId } = $$props;
  let { players } = $$props;
  let { tiles: tiles2 } = $$props;
  let { turn } = $$props;
  let { onefifty } = $$props;
  let { oneten } = $$props;
  let { onefive } = $$props;
  let { onetwo } = $$props;
  let { oneone } = $$props;
  let { oneptfive } = $$props;
  let { oneptone } = $$props;
  let { twofifty } = $$props;
  let { twoten } = $$props;
  let { twofive } = $$props;
  let { twotwo } = $$props;
  let { twoone } = $$props;
  let { twoptfive } = $$props;
  let { twoptone } = $$props;
  let { threefifty } = $$props;
  let { threeten } = $$props;
  let { threefive } = $$props;
  let { threetwo } = $$props;
  let { threeone } = $$props;
  let { threeptfive } = $$props;
  let { threeptone } = $$props;
  let { fourfifty } = $$props;
  let { fourten } = $$props;
  let { fourfive } = $$props;
  let { fourtwo } = $$props;
  let { fourone } = $$props;
  let { fourptfive } = $$props;
  let { fourptone } = $$props;
  let { noHavemoney = "" } = $$props;
  let { socket } = $$props;
  let send = 0;
  function findwhose(a) {
    const found = tiles2.find((country) => country.num === a);
    return found ? found.whose : null;
  }
  function findhowmuchtax(a) {
    let taxx;
    if (typeof a === "number") {
      const found = tiles2.find((country) => country.num === a);
      taxx = found.pass + found.pass1 * found.house + found.pass2 * found.building + found.pass3 * found.hotel;
    } else {
      taxx = "없음";
    }
    return taxx;
  }
  if ($$props.playerId === void 0 && $$bindings.playerId && playerId !== void 0) $$bindings.playerId(playerId);
  if ($$props.players === void 0 && $$bindings.players && players !== void 0) $$bindings.players(players);
  if ($$props.tiles === void 0 && $$bindings.tiles && tiles2 !== void 0) $$bindings.tiles(tiles2);
  if ($$props.turn === void 0 && $$bindings.turn && turn !== void 0) $$bindings.turn(turn);
  if ($$props.onefifty === void 0 && $$bindings.onefifty && onefifty !== void 0) $$bindings.onefifty(onefifty);
  if ($$props.oneten === void 0 && $$bindings.oneten && oneten !== void 0) $$bindings.oneten(oneten);
  if ($$props.onefive === void 0 && $$bindings.onefive && onefive !== void 0) $$bindings.onefive(onefive);
  if ($$props.onetwo === void 0 && $$bindings.onetwo && onetwo !== void 0) $$bindings.onetwo(onetwo);
  if ($$props.oneone === void 0 && $$bindings.oneone && oneone !== void 0) $$bindings.oneone(oneone);
  if ($$props.oneptfive === void 0 && $$bindings.oneptfive && oneptfive !== void 0) $$bindings.oneptfive(oneptfive);
  if ($$props.oneptone === void 0 && $$bindings.oneptone && oneptone !== void 0) $$bindings.oneptone(oneptone);
  if ($$props.twofifty === void 0 && $$bindings.twofifty && twofifty !== void 0) $$bindings.twofifty(twofifty);
  if ($$props.twoten === void 0 && $$bindings.twoten && twoten !== void 0) $$bindings.twoten(twoten);
  if ($$props.twofive === void 0 && $$bindings.twofive && twofive !== void 0) $$bindings.twofive(twofive);
  if ($$props.twotwo === void 0 && $$bindings.twotwo && twotwo !== void 0) $$bindings.twotwo(twotwo);
  if ($$props.twoone === void 0 && $$bindings.twoone && twoone !== void 0) $$bindings.twoone(twoone);
  if ($$props.twoptfive === void 0 && $$bindings.twoptfive && twoptfive !== void 0) $$bindings.twoptfive(twoptfive);
  if ($$props.twoptone === void 0 && $$bindings.twoptone && twoptone !== void 0) $$bindings.twoptone(twoptone);
  if ($$props.threefifty === void 0 && $$bindings.threefifty && threefifty !== void 0) $$bindings.threefifty(threefifty);
  if ($$props.threeten === void 0 && $$bindings.threeten && threeten !== void 0) $$bindings.threeten(threeten);
  if ($$props.threefive === void 0 && $$bindings.threefive && threefive !== void 0) $$bindings.threefive(threefive);
  if ($$props.threetwo === void 0 && $$bindings.threetwo && threetwo !== void 0) $$bindings.threetwo(threetwo);
  if ($$props.threeone === void 0 && $$bindings.threeone && threeone !== void 0) $$bindings.threeone(threeone);
  if ($$props.threeptfive === void 0 && $$bindings.threeptfive && threeptfive !== void 0) $$bindings.threeptfive(threeptfive);
  if ($$props.threeptone === void 0 && $$bindings.threeptone && threeptone !== void 0) $$bindings.threeptone(threeptone);
  if ($$props.fourfifty === void 0 && $$bindings.fourfifty && fourfifty !== void 0) $$bindings.fourfifty(fourfifty);
  if ($$props.fourten === void 0 && $$bindings.fourten && fourten !== void 0) $$bindings.fourten(fourten);
  if ($$props.fourfive === void 0 && $$bindings.fourfive && fourfive !== void 0) $$bindings.fourfive(fourfive);
  if ($$props.fourtwo === void 0 && $$bindings.fourtwo && fourtwo !== void 0) $$bindings.fourtwo(fourtwo);
  if ($$props.fourone === void 0 && $$bindings.fourone && fourone !== void 0) $$bindings.fourone(fourone);
  if ($$props.fourptfive === void 0 && $$bindings.fourptfive && fourptfive !== void 0) $$bindings.fourptfive(fourptfive);
  if ($$props.fourptone === void 0 && $$bindings.fourptone && fourptone !== void 0) $$bindings.fourptone(fourptone);
  if ($$props.noHavemoney === void 0 && $$bindings.noHavemoney && noHavemoney !== void 0) $$bindings.noHavemoney(noHavemoney);
  if ($$props.socket === void 0 && $$bindings.socket && socket !== void 0) $$bindings.socket(socket);
  return `${playerId !== void 0 ? `${playerId === "1" ? `<h1>Player ${escape(playerId)} 통계</h1> <button>50만원권 : ${escape(onefifty)}장</button> <button>10만원권 : ${escape(oneten)}장</button> <button>5만원권 : ${escape(onefive)}장</button> <button>2만원권 : ${escape(onetwo)}장</button> <button>1만원권 : ${escape(oneone)}장</button> <button>5천원권 : ${escape(oneptfive)}장</button> <button>1천원권 : ${escape(oneptone)}장</button> <p>선택한 금액 ${escape(send)} 만원
      <button data-svelte-h="svelte-ve3x27">선택 금액 초기화</button></p> <p>총 재산 : ${escape((onefifty * 500 + oneten * 100 + onefive * 50 + onetwo * 20 + oneone * 10 + oneptfive * 5 + oneptone) / 10)} 만원</p>` : `${playerId === "2" ? `<h1>Player ${escape(playerId)} 통계</h1> <button>50만원권 : ${escape(twofifty)}장</button> <button>10만원권 : ${escape(twoten)}장</button> <button>5만원권 : ${escape(twofive)}장</button> <button>2만원권 : ${escape(twotwo)}장</button> <button>1만원권 : ${escape(twoone)}장</button> <button>5천원권 : ${escape(twoptfive)}장</button> <button>1천원권 : ${escape(twoptone)}장</button> <p>선택한 금액 ${escape(send)} 만원
      <button data-svelte-h="svelte-ve3x27">선택 금액 초기화</button></p> <p>총 재산 : ${escape((twofifty * 500 + twoten * 100 + twofive * 50 + twotwo * 20 + twoone * 10 + twoptfive * 5 + twoptone) / 10)} 만원</p>` : `${playerId === "3" ? `<h1>Player ${escape(playerId)} 통계</h1> <button>50만원권 : ${escape(threefifty)}장</button> <button>10만원권 : ${escape(threeten)}장</button> <button>5만원권 : ${escape(threefive)}장</button> <button>2만원권 : ${escape(threetwo)}장</button> <button>1만원권 : ${escape(threeone)}장</button> <button>5천원권 : ${escape(threeptfive)}장</button> <button>1천원권 : ${escape(threeptone)}장</button> <p>선택한 금액 ${escape(send)} 만원
      <button data-svelte-h="svelte-ve3x27">선택 금액 초기화</button></p> <p>총 재산 : ${escape((threefifty * 500 + threeten * 100 + threefive * 50 + threetwo * 20 + threeone * 10 + threeptfive * 5 + threeptone) / 10)} 만원</p>` : `${playerId === "4" ? `<h1>Player ${escape(playerId)} 통계</h1> <button>50만원권 : ${escape(fourfifty)}장</button> <button>10만원권 : ${escape(fourten)}장</button> <button>5만원권 : ${escape(fourfive)}장</button> <button>2만원권 : ${escape(fourtwo)}장</button> <button>1만원권 : ${escape(fourone)}장</button> <button>5천원권 : ${escape(fourptfive)}장</button> <button>1천원권 : ${escape(fourptone)}장</button> <p>선택한 금액 ${escape(send)} 만원
      <button data-svelte-h="svelte-ve3x27">선택 금액 초기화</button></p> <p>총 재산 : ${escape((fourfifty * 500 + fourten * 100 + fourfive * 50 + fourtwo * 20 + fourone * 10 + fourptfive * 5 + fourptone) / 10)} 만원</p>` : ``}`}`}`} <p>현재 땅의 통행료 : ${typeof findhowmuchtax(players[playerId]) === "number" ? `${escape(findhowmuchtax(players[playerId]) / 10)}만원` : `${escape(findhowmuchtax(players[playerId]))}`}</p> ${escape(noHavemoney)} <button data-svelte-h="svelte-18wi8o4">땅 구매</button> ${players[playerId] !== 0 ? `${playerId === findwhose(players[playerId]) ? `<button data-svelte-h="svelte-1mbmyer">별장 구매</button> <button data-svelte-h="svelte-caldqn">빌딩 구매</button> <button data-svelte-h="svelte-10rmra2">호텔 구매</button>` : ``} ${findwhose(players[playerId]) !== 0 && findwhose(players[playerId]) !== 5 && findwhose(players[playerId]) !== 6 ? `<button data-svelte-h="svelte-1x87oac">통행료 납부</button>` : ``}` : ``}` : ``}`;
});
function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const css = {
  code: ".gamecontroller.svelte-1mlyz22{display:flex;justify-content:center;text-align:center;flex-direction:column}.controller.svelte-1mlyz22{display:flex;flex-direction:row;align-items:center;padding:10px;gap:30px}.dice-container.svelte-1mlyz22{width:5cm;margin-top:1cm;font-size:smaller}.double.svelte-1mlyz22{margin-top:10px}.connection-message.svelte-1mlyz22{margin-top:10px;color:green}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n  import GameBoard from \\"$lib/GameBoard.svelte\\";\\r\\n  import { onMount } from \\"svelte\\";\\r\\n  import { page } from \\"$app/stores\\";\\r\\n  import GameController from \\"../../../lib/GameController.svelte\\";\\r\\n  import { tiles } from \\"./tiles.js\\";\\r\\n  let turn = 0;\\r\\n  let dice1 = 0;\\r\\n  let dice2 = 0;\\r\\n  let double = \\"\\";\\r\\n  let socket;\\r\\n  let currentPlayer = null;\\r\\n  let players = {}; // 플레이어의 위치를 저장합니다.\\r\\n  let connectionMessage = \\"\\";\\r\\n  let ahotel = 0;\\r\\n  let abuilding = 0;\\r\\n  let ahouse = 0;\\r\\n  let tilenum = 0;\\r\\n  // URL 파라미터에서 playerId 가져오기\\r\\n  let playerId;\\r\\n  $: playerId = $page.data.playerId;\\r\\n  let gb = \\"\\";\\r\\n  let data = \\"\\";\\r\\n  let passmoney = [0, 0, 0, 0];\\r\\n  let notYourTurn = \\"\\";\\r\\n  let toplayer;\\r\\n  let onefifty = 3;\\r\\n  let oneten = 10;\\r\\n  let onefive = 10;\\r\\n  let onetwo = 5;\\r\\n  let oneone = 5;\\r\\n  let oneptfive = 5;\\r\\n  let oneptone = 5;\\r\\n\\r\\n  let twofifty = 3;\\r\\n  let twoten = 10;\\r\\n  let twofive = 10;\\r\\n  let twotwo = 5;\\r\\n  let twoone = 5;\\r\\n  let twoptfive = 5;\\r\\n  let twoptone = 5;\\r\\n\\r\\n  let threefifty = 3;\\r\\n  let threeten = 10;\\r\\n  let threefive = 10;\\r\\n  let threetwo = 5;\\r\\n  let threeone = 5;\\r\\n  let threeptfive = 5;\\r\\n  let threeptone = 5;\\r\\n\\r\\n  let fourfifty = 3;\\r\\n  let fourten = 10;\\r\\n  let fourfive = 10;\\r\\n  let fourtwo = 5;\\r\\n  let fourone = 5;\\r\\n  let fourptfive = 5;\\r\\n  let fourptone = 5;\\r\\n  onMount(() => {\\r\\n    socket = new WebSocket(\\"ws://localhost:8080\\");\\r\\n\\r\\n    socket.addEventListener(\\"open\\", () => {\\r\\n      socket.send(\\r\\n        JSON.stringify({ type: \\"register\\", playerId: `${playerId}` })\\r\\n      );\\r\\n    });\\r\\n\\r\\n    socket.addEventListener(\\"message\\", (event) => {\\r\\n      data = JSON.parse(event.data);\\r\\n      if (data.type === \\"connected\\") {\\r\\n        connectionMessage = data.message;\\r\\n      } else if (data.type === \\"move\\") {\\r\\n        players[data.playerId] = data.position;\\r\\n        dice1 = data.dice1;\\r\\n        dice2 = data.dice2;\\r\\n        double = data.double;\\r\\n        turn = data.turn;\\r\\n        console.log(\\r\\n          `Player ${data.playerId} moved to position ${data.position}`\\r\\n        );\\r\\n      } else if (data.type === \\"turn\\") {\\r\\n        turn = data.turn;\\r\\n      } else if (data.type === \\"buyGround\\") {\\r\\n        let found = tiles.find((country) => country.num === data.where);\\r\\n        found.whose = data.playerId;\\r\\n      } else if (data.type === \\"buyStructure\\") {\\r\\n        let found = tiles.find((country) => country.num === data.where);\\r\\n        found.hotel = found.hotel + data.hotel;\\r\\n        found.building = found.building + data.building;\\r\\n        found.house = found.house + data.house;\\r\\n        tilenum = data.where;\\r\\n        ahotel = found.hotel;\\r\\n        abuilding = found.building;\\r\\n        ahouse = found.house;\\r\\n\\r\\n        console.log(tiles);\\r\\n      } else if (data.type === \\"tax\\") {\\r\\n        passmoney[data.playerId - 1] = data.passmoney;\\r\\n        onefifty = data.onefifty;\\r\\n        oneten = data.oneten;\\r\\n        onefive = data.onefive;\\r\\n        onetwo = data.onetwo;\\r\\n        oneone = data.oneone;\\r\\n        oneptfive = data.oneptfive;\\r\\n        oneptone = data.oneptone;\\r\\n        twofifty = data.twofifty;\\r\\n        twoten = data.twoten;\\r\\n        twofive = data.twofive;\\r\\n        twotwo = data.twotwo;\\r\\n        twoone = data.twoone;\\r\\n        twoptfive = data.twoptfive;\\r\\n        twoptone = data.twoptone;\\r\\n        threefifty = data.threefifty;\\r\\n        threeten = data.threeten;\\r\\n        threefive = data.threefive;\\r\\n        threetwo = data.threetwo;\\r\\n        threeone = data.threeone;\\r\\n        threeptfive = data.threeptfive;\\r\\n        threeptone = data.threeptone;\\r\\n        fourfifty = data.fourfifty;\\r\\n        fourten = data.fourten;\\r\\n        fourfive = data.fourfive;\\r\\n        fourtwo = data.fourtwo;\\r\\n        fourone = data.fourone;\\r\\n        fourptfive = data.fourptfive;\\r\\n        fourptone = data.fourptone;\\r\\n        notYourTurn = \\"통행료 지불 완료\\";\\r\\n        setTimeout(function () {\\r\\n          notYourTurn = \\"\\";\\r\\n        }, 500);\\r\\n      } else if (data.type === \\"pay\\") {\\r\\n        onefifty = data.onefifty;\\r\\n        oneten = data.oneten;\\r\\n        onefive = data.onefive;\\r\\n        onetwo = data.onetwo;\\r\\n        oneone = data.oneone;\\r\\n        oneptfive = data.oneptfive;\\r\\n        oneptone = data.oneptone;\\r\\n        twofifty = data.twofifty;\\r\\n        twoten = data.twoten;\\r\\n        twofive = data.twofive;\\r\\n        twotwo = data.twotwo;\\r\\n        twoone = data.twoone;\\r\\n        twoptfive = data.twoptfive;\\r\\n        twoptone = data.twoptone;\\r\\n        threefifty = data.threefifty;\\r\\n        threeten = data.threeten;\\r\\n        threefive = data.threefive;\\r\\n        threetwo = data.threetwo;\\r\\n        threeone = data.threeone;\\r\\n        threeptfive = data.threeptfive;\\r\\n        threeptone = data.threeptone;\\r\\n        fourfifty = data.fourfifty;\\r\\n        fourten = data.fourten;\\r\\n        fourfive = data.fourfive;\\r\\n        fourtwo = data.fourtwo;\\r\\n        fourone = data.fourone;\\r\\n        fourptfive = data.fourptfive;\\r\\n        fourptone = data.fourptone;\\r\\n      }\\r\\n    });\\r\\n\\r\\n    socket.addEventListener(\\"close\\", () => {\\r\\n      connectionMessage = \\"Connection closed.\\";\\r\\n    });\\r\\n  });\\r\\n  function findwhose(a) {\\r\\n    const found = tiles.find((country) => country.num === a);\\r\\n    return found ? found.whose : null;\\r\\n  }\\r\\n  function rollDice() {\\r\\n    if (\\r\\n      passmoney[playerId - 1] === 1 ||\\r\\n      findwhose(players[playerId]) === 0 ||\\r\\n      findwhose(players[playerId]) === 5 ||\\r\\n      findwhose(players[playerId]) === 6 ||\\r\\n      findwhose(players[playerId]) === playerId ||\\r\\n      findwhose(players[playerId]) === \\"\\" ||\\r\\n      players[playerId] === undefined\\r\\n    ) {\\r\\n      //돈을 안 내도 되는 상황\\r\\n      dice1 = Math.floor(Math.random() * 6) + 1;\\r\\n      dice2 = Math.floor(Math.random() * 6) + 1;\\r\\n      const dice = dice1 + dice2;\\r\\n      double = dice1 === dice2 ? \\"더블!\\" : \\"\\";\\r\\n\\r\\n      socket.send(\\r\\n        JSON.stringify({\\r\\n          type: \\"move\\",\\r\\n          playerId,\\r\\n          position: ((players[playerId] ? players[playerId] : 0) + dice) % 40, // 현재 위치 업데이트 로직 필요\\r\\n          dice1,\\r\\n          dice2,\\r\\n          double,\\r\\n          turn,\\r\\n        })\\r\\n      );\\r\\n    } else {\\r\\n      return;\\r\\n    }\\r\\n  }\\r\\n  /**\\r\\n   * rolldice 함수를 호출 받았을 때 지금 서 있는 땅이 통행료를 지불 받았는지 확인\\r\\n   * 만약에 받지 않았으면 리턴, 받았으면 진행 (지금 서있는 땅 주인이 있는지 확인 必)\\r\\n   * 진행 후 통행료 지불 여부 0으로 변경\\r\\n   * 게임컨트롤러파일에서 send값이랑 연동하여 지불 (passmoney1로 변경 후 서버로 전송)\\r\\n   */\\r\\n\\r\\n  function whosturn() {\\r\\n    console.log(tiles);\\r\\n    notYourTurn = \\"\\";\\r\\n    console.log(turn);\\r\\n    console.log(playerId);\\r\\n\\r\\n    if (\\r\\n      (turn === 0 && playerId === \\"1\\") ||\\r\\n      (turn === 1 && playerId === \\"2\\") ||\\r\\n      (turn === 2 && playerId === \\"3\\") ||\\r\\n      (turn === 3 && playerId === \\"4\\")\\r\\n    ) {\\r\\n      rollDice();\\r\\n      console.log(double);\\r\\n      if (\\r\\n        passmoney[playerId - 1] === 1 ||\\r\\n        findwhose(players[playerId]) === 0 ||\\r\\n        findwhose(players[playerId]) === 5 ||\\r\\n        findwhose(players[playerId]) === 6 ||\\r\\n        findwhose(players[playerId]) === playerId ||\\r\\n        findwhose(players[playerId]) === \\"\\" ||\\r\\n        players[playerId] === undefined\\r\\n      ) {\\r\\n        if (double !== \\"더블!\\") {\\r\\n          turn = (turn + 1) % 4;\\r\\n          socket.send(\\r\\n            JSON.stringify({\\r\\n              type: \\"turn\\",\\r\\n              turn,\\r\\n            })\\r\\n          );\\r\\n        }\\r\\n      } else {\\r\\n        notYourTurn = \\"통행료를 지불하여 주십시오\\";\\r\\n        setTimeout(function () {\\r\\n          notYourTurn = \\"\\";\\r\\n        }, 700);\\r\\n      }\\r\\n      passmoney[playerId - 1] = 0;\\r\\n    } else {\\r\\n      notYourTurn = \\"당신의 차례가 아닙니다\\";\\r\\n      setTimeout(function () {\\r\\n        notYourTurn = \\"\\";\\r\\n      }, 700);\\r\\n    }\\r\\n  }\\r\\n  let b = 0;\\r\\n  setInterval(function () {\\r\\n    b = (b + 1) % 2;\\r\\n  }, 500);\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"controller\\">\\r\\n  <div class=\\"dice-container\\">\\r\\n    <button on:click={whosturn}>주사위 굴리기</button>\\r\\n\\r\\n    <p>순서: Player {turn + 1}</p>\\r\\n    <p>{dice1}</p>\\r\\n    <p>{dice2}</p>\\r\\n\\r\\n    <div class=\\"double\\">\\r\\n      <p>{double}</p>\\r\\n    </div>\\r\\n    <h5>{notYourTurn}</h5>\\r\\n\\r\\n    <div class=\\"connection-message\\">\\r\\n      <p>{connectionMessage}</p>\\r\\n      게임말이 출발지점에 있을 경우<br />표시가 되지 않을 수 있습니다.\\r\\n    </div>\\r\\n  </div>\\r\\n  <GameBoard {players} {tiles} {b} {tilenum} {ahotel} {abuilding} {ahouse} />\\r\\n  <div class=\\"gamecontroller\\">\\r\\n    {#if playerId}\\r\\n      <GameController\\r\\n        {playerId}\\r\\n        {players}\\r\\n        {tiles}\\r\\n        {turn}\\r\\n        {onefifty}\\r\\n        {oneten}\\r\\n        {onefive}\\r\\n        {onetwo}\\r\\n        {oneone}\\r\\n        {oneptfive}\\r\\n        {oneptone}\\r\\n        {twofifty}\\r\\n        {twoten}\\r\\n        {twofive}\\r\\n        {twotwo}\\r\\n        {twoone}\\r\\n        {twoptfive}\\r\\n        {twoptone}\\r\\n        {threefifty}\\r\\n        {threeten}\\r\\n        {threefive}\\r\\n        {threetwo}\\r\\n        {threeone}\\r\\n        {threeptfive}\\r\\n        {threeptone}\\r\\n        {fourfifty}\\r\\n        {fourten}\\r\\n        {fourfive}\\r\\n        {fourtwo}\\r\\n        {fourone}\\r\\n        {fourptfive}\\r\\n        {fourptone}\\r\\n      />\\r\\n    {/if}\\r\\n  </div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  .gamecontroller {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    text-align: center;\\r\\n    flex-direction: column;\\r\\n  }\\r\\n  .controller {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    align-items: center;\\r\\n    padding: 10px;\\r\\n    gap: 30px;\\r\\n  }\\r\\n  .dice-container {\\r\\n    width: 5cm;\\r\\n    margin-top: 1cm;\\r\\n    font-size: smaller;\\r\\n  }\\r\\n  .double {\\r\\n    margin-top: 10px;\\r\\n  }\\r\\n  .connection-message {\\r\\n    margin-top: 10px;\\r\\n    color: green;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA+TE,8BAAgB,CACd,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,MAAM,CAClB,cAAc,CAAE,MAClB,CACA,0BAAY,CACV,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IACP,CACA,8BAAgB,CACd,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,GAAG,CACf,SAAS,CAAE,OACb,CACA,sBAAQ,CACN,UAAU,CAAE,IACd,CACA,kCAAoB,CAClB,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,KACT"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let turn = 0;
  let dice1 = 0;
  let dice2 = 0;
  let double = "";
  let players = {};
  let connectionMessage = "";
  let ahotel = 0;
  let abuilding = 0;
  let ahouse = 0;
  let tilenum = 0;
  let playerId;
  let notYourTurn = "";
  let onefifty = 3;
  let oneten = 10;
  let onefive = 10;
  let onetwo = 5;
  let oneone = 5;
  let oneptfive = 5;
  let oneptone = 5;
  let twofifty = 3;
  let twoten = 10;
  let twofive = 10;
  let twotwo = 5;
  let twoone = 5;
  let twoptfive = 5;
  let twoptone = 5;
  let threefifty = 3;
  let threeten = 10;
  let threefive = 10;
  let threetwo = 5;
  let threeone = 5;
  let threeptfive = 5;
  let threeptone = 5;
  let fourfifty = 3;
  let fourten = 10;
  let fourfive = 10;
  let fourtwo = 5;
  let fourone = 5;
  let fourptfive = 5;
  let fourptone = 5;
  let b = 0;
  setInterval(
    function() {
      b = (b + 1) % 2;
    },
    500
  );
  $$result.css.add(css);
  playerId = $page.data.playerId;
  $$unsubscribe_page();
  return `<div class="controller svelte-1mlyz22"><div class="dice-container svelte-1mlyz22"><button data-svelte-h="svelte-1k9fv5a">주사위 굴리기</button> <p>순서: Player ${escape(turn + 1)}</p> <p>${escape(dice1)}</p> <p>${escape(dice2)}</p> <div class="double svelte-1mlyz22"><p>${escape(double)}</p></div> <h5>${escape(notYourTurn)}</h5> <div class="connection-message svelte-1mlyz22"><p>${escape(connectionMessage)}</p>
      게임말이 출발지점에 있을 경우<br>표시가 되지 않을 수 있습니다.</div></div> ${validate_component(GameBoard, "GameBoard").$$render(
    $$result,
    {
      players,
      tiles,
      b,
      tilenum,
      ahotel,
      abuilding,
      ahouse
    },
    {},
    {}
  )} <div class="gamecontroller svelte-1mlyz22">${playerId ? `${validate_component(GameController, "GameController").$$render(
    $$result,
    {
      playerId,
      players,
      tiles,
      turn,
      onefifty,
      oneten,
      onefive,
      onetwo,
      oneone,
      oneptfive,
      oneptone,
      twofifty,
      twoten,
      twofive,
      twotwo,
      twoone,
      twoptfive,
      twoptone,
      threefifty,
      threeten,
      threefive,
      threetwo,
      threeone,
      threeptfive,
      threeptone,
      fourfifty,
      fourten,
      fourfive,
      fourtwo,
      fourone,
      fourptfive,
      fourptone
    },
    {},
    {}
  )}` : ``}</div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-FL5Q0qZm.js.map
