<script>
  /*export let players = {};**/
  export let rows;
  export let cols;
  import { get } from "svelte/store";
  import Tile from "./Tile.svelte";
  import GameController from "./GameController.svelte";
  export let players;
  let socket;
  import { onMount } from "svelte";
  export let tiles;
  export let b;
  export let ahotel;
  export let abuilding;
  export let ahouse;
  export let tilenum;

  rows = 11;
  cols = 11;

  let tile;
  let a = 0;
  setInterval(function () {
    a = (a + 1) % 2;
  }, 500);
  // 그리드 데이터 생성
  let grid = Array(rows)
    .fill()
    .map(() => Array(cols).fill(null));

  for (let i = 0; i < 121; i++) {
    tile = tiles[i];
    grid[Math.floor(i / cols)][i % cols] = tile;
  }
  b = b;
  //console.log(tiles);
</script>

<div class="board">
  {#each grid as row, rowIndex}
    {#each row as tile, colIndex}
      <div class="tile">
        {#if tile}
          {#if players !== null && players !== undefined}
            <div class="ply">
              <div id="ply1">
                {#if players[1]}
                  {#if players[1] === tile.num}
                    1
                  {/if}
                {/if}
              </div>
              <div id="ply2">
                {#if players[2]}
                  {#if players[2] === tile.num}
                    2
                  {/if}
                {/if}
              </div>
              <div id="ply3">
                {#if players[3]}
                  {#if players[3] === tile.num}
                    3
                  {/if}
                {/if}
              </div>
              <div id="ply4">
                {#if players[4]}
                  {#if players[4] === tile.num}
                    4
                  {/if}
                {/if}
              </div>
            </div>
            <Tile {tile} {a} {ahotel} {abuilding} {ahouse} {tilenum} />
          {:else}
            <Tile {tile} {a} {ahotel} {abuilding} {ahouse} {tilenum} />
          {/if}
        {/if}
      </div>
    {/each}
  {/each}
</div>
<div class="gamecontroller">
  <!--{#if playerId}
    <GameController {playerId} {players} {tiles} {turn} />
  {/if}-->
</div>

<style>
  .gamecontroller {
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }
  .board {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: repeat(11, 1fr);
    gap: 1px;
    width: 17cm;
    height: 17cm;
  }
  .tile {
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #ply1 {
    color: red;
  }
  #ply2 {
    color: blue;
  }
  #ply3 {
    color: rgb(0, 255, 0);
  }
  #ply4 {
    color: rgb(255, 217, 0);
  }
  .ply {
    font-weight: 1000;
  }

  /*
  .player {
    
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  */
</style>
