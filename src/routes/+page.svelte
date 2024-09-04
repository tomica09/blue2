<script>
  import GameBoard from "$lib/GameBoard.svelte";
  import { tiles } from "./play/[playerId]/tiles";
</script>

<main>
  <h1>hooks.server.js 키는 것 확인하기!</h1>
  <h1>부루마불 게임</h1>
  <GameBoard rows={11} cols={11} {tiles} />
  <a href="/play"><button id="playbt">PLAY!</button></a>
</main>

<style>
  main {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
  button {
    width: 3cm;
    height: 1cm;
  }
</style>
