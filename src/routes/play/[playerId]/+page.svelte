<script>
  import GameBoard from "$lib/GameBoard.svelte";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import GameController from "../../../lib/GameController.svelte";
  import { tiles } from "./tiles.js";
  //const link = "ws://localhost:10000";
  const link = "ws://blue-marble.onrender.com";
  let turn = 0;
  let dice1 = 0;
  let dice2 = 0;
  let double = "";
  let socket;
  let currentPlayer = null;
  let players = {}; // 플레이어의 위치를 저장합니다.
  let connectionMessage = "";
  let ahotel = 0;
  let abuilding = 0;
  let ahouse = 0;
  let tilenum = 0;
  // URL 파라미터에서 playerId 가져오기
  let playerId;
  $: playerId = $page.data.playerId;
  let gb = "";
  let data = "";
  let passmoney = [0, 0, 0, 0];
  let notYourTurn = "";
  let toplayer;
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
  onMount(() => {
    socket = new WebSocket(link);

    socket.addEventListener("open", () => {
      socket.send(
        JSON.stringify({ type: "register", playerId: `${playerId}` })
      );
    });

    socket.addEventListener("message", (event) => {
      data = JSON.parse(event.data);
      if (data.type === "connected") {
        connectionMessage = data.message;
      } else if (data.type === "move") {
        players[data.playerId] = data.position;
        dice1 = data.dice1;
        dice2 = data.dice2;
        double = data.double;
        turn = data.turn;
        console.log(
          `Player ${data.playerId} moved to position ${data.position}`
        );
      } else if (data.type === "turn") {
        turn = data.turn;
      } else if (data.type === "buyGround") {
        let found = tiles.find((country) => country.num === data.where);
        found.whose = data.playerId;
      } else if (data.type === "buyStructure") {
        let found = tiles.find((country) => country.num === data.where);
        found.hotel = found.hotel + data.hotel;
        found.building = found.building + data.building;
        found.house = found.house + data.house;
        tilenum = data.where;
        ahotel = found.hotel;
        abuilding = found.building;
        ahouse = found.house;

        console.log(tiles);
      } else if (data.type === "tax") {
        passmoney[data.playerId - 1] = data.passmoney;
        onefifty = data.onefifty;
        oneten = data.oneten;
        onefive = data.onefive;
        onetwo = data.onetwo;
        oneone = data.oneone;
        oneptfive = data.oneptfive;
        oneptone = data.oneptone;
        twofifty = data.twofifty;
        twoten = data.twoten;
        twofive = data.twofive;
        twotwo = data.twotwo;
        twoone = data.twoone;
        twoptfive = data.twoptfive;
        twoptone = data.twoptone;
        threefifty = data.threefifty;
        threeten = data.threeten;
        threefive = data.threefive;
        threetwo = data.threetwo;
        threeone = data.threeone;
        threeptfive = data.threeptfive;
        threeptone = data.threeptone;
        fourfifty = data.fourfifty;
        fourten = data.fourten;
        fourfive = data.fourfive;
        fourtwo = data.fourtwo;
        fourone = data.fourone;
        fourptfive = data.fourptfive;
        fourptone = data.fourptone;
        notYourTurn = "통행료 지불 완료";
        setTimeout(function () {
          notYourTurn = "";
        }, 500);
      } else if (data.type === "pay") {
        onefifty = data.onefifty;
        oneten = data.oneten;
        onefive = data.onefive;
        onetwo = data.onetwo;
        oneone = data.oneone;
        oneptfive = data.oneptfive;
        oneptone = data.oneptone;
        twofifty = data.twofifty;
        twoten = data.twoten;
        twofive = data.twofive;
        twotwo = data.twotwo;
        twoone = data.twoone;
        twoptfive = data.twoptfive;
        twoptone = data.twoptone;
        threefifty = data.threefifty;
        threeten = data.threeten;
        threefive = data.threefive;
        threetwo = data.threetwo;
        threeone = data.threeone;
        threeptfive = data.threeptfive;
        threeptone = data.threeptone;
        fourfifty = data.fourfifty;
        fourten = data.fourten;
        fourfive = data.fourfive;
        fourtwo = data.fourtwo;
        fourone = data.fourone;
        fourptfive = data.fourptfive;
        fourptone = data.fourptone;
      }
    });

    socket.addEventListener("close", () => {
      connectionMessage = "Connection closed.";
    });
  });
  function findwhose(a) {
    const found = tiles.find((country) => country.num === a);
    return found ? found.whose : null;
  }
  function rollDice() {
    if (
      passmoney[playerId - 1] === 1 ||
      findwhose(players[playerId]) === 0 ||
      findwhose(players[playerId]) === 5 ||
      findwhose(players[playerId]) === 6 ||
      findwhose(players[playerId]) === playerId ||
      findwhose(players[playerId]) === "" ||
      players[playerId] === undefined
    ) {
      //돈을 안 내도 되는 상황
      dice1 = Math.floor(Math.random() * 6) + 1;
      dice2 = Math.floor(Math.random() * 6) + 1;
      const dice = dice1 + dice2;
      double = dice1 === dice2 ? "더블!" : "";

      socket.send(
        JSON.stringify({
          type: "move",
          playerId,
          position: ((players[playerId] ? players[playerId] : 0) + dice) % 40, // 현재 위치 업데이트 로직 필요
          dice1,
          dice2,
          double,
          turn,
        })
      );
    } else {
      return;
    }
  }
  /**
   * rolldice 함수를 호출 받았을 때 지금 서 있는 땅이 통행료를 지불 받았는지 확인
   * 만약에 받지 않았으면 리턴, 받았으면 진행 (지금 서있는 땅 주인이 있는지 확인 必)
   * 진행 후 통행료 지불 여부 0으로 변경
   * 게임컨트롤러파일에서 send값이랑 연동하여 지불 (passmoney1로 변경 후 서버로 전송)
   */

  function whosturn() {
    console.log(tiles);
    notYourTurn = "";
    console.log(turn);
    console.log(playerId);

    if (
      (turn === 0 && playerId === "1") ||
      (turn === 1 && playerId === "2") ||
      (turn === 2 && playerId === "3") ||
      (turn === 3 && playerId === "4")
    ) {
      rollDice();
      console.log(double);
      if (
        passmoney[playerId - 1] === 1 ||
        findwhose(players[playerId]) === 0 ||
        findwhose(players[playerId]) === 5 ||
        findwhose(players[playerId]) === 6 ||
        findwhose(players[playerId]) === playerId ||
        findwhose(players[playerId]) === "" ||
        players[playerId] === undefined
      ) {
        if (double !== "더블!") {
          turn = (turn + 1) % 4;
          socket.send(
            JSON.stringify({
              type: "turn",
              turn,
            })
          );
        }
      } else {
        notYourTurn = "통행료를 지불하여 주십시오";
        setTimeout(function () {
          notYourTurn = "";
        }, 700);
      }
      passmoney[playerId - 1] = 0;
    } else {
      notYourTurn = "당신의 차례가 아닙니다";
      setTimeout(function () {
        notYourTurn = "";
      }, 700);
    }
  }
  let b = 0;
  setInterval(function () {
    b = (b + 1) % 2;
  }, 500);
</script>

<div class="controller">
  <div class="dice-container">
    <button on:click={whosturn}>주사위 굴리기</button>

    <p>순서: Player {turn + 1}</p>
    <p>{dice1}</p>
    <p>{dice2}</p>

    <div class="double">
      <p>{double}</p>
    </div>
    <h5>{notYourTurn}</h5>

    <div class="connection-message">
      <p>{connectionMessage}</p>
      게임말이 출발지점에 있을 경우<br />표시가 되지 않을 수 있습니다.
    </div>
  </div>
  <GameBoard {players} {tiles} {b} {tilenum} {ahotel} {abuilding} {ahouse} />
  <div class="gamecontroller">
    {#if playerId}
      <GameController
        {playerId}
        {players}
        {tiles}
        {turn}
        {onefifty}
        {oneten}
        {onefive}
        {onetwo}
        {oneone}
        {oneptfive}
        {oneptone}
        {twofifty}
        {twoten}
        {twofive}
        {twotwo}
        {twoone}
        {twoptfive}
        {twoptone}
        {threefifty}
        {threeten}
        {threefive}
        {threetwo}
        {threeone}
        {threeptfive}
        {threeptone}
        {fourfifty}
        {fourten}
        {fourfive}
        {fourtwo}
        {fourone}
        {fourptfive}
        {fourptone}
      />
    {/if}
  </div>
</div>

<style>
  .gamecontroller {
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }
  .controller {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    gap: 30px;
  }
  .dice-container {
    width: 5cm;
    margin-top: 1cm;
    font-size: smaller;
  }
  .double {
    margin-top: 10px;
  }
  .connection-message {
    margin-top: 10px;
    color: green;
  }
</style>
