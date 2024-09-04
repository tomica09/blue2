<script>
  export let tile;
  export let a;
  export let ahotel;
  export let abuilding;
  export let ahouse;
  export let tilenum;
  let structure = [
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
    { hotel: 0, building: 0, house: 0 },
  ];

  setInterval(function () {
    if (tilenum >= 0 && tilenum < structure.length) {
      // Add this check
      structure[tilenum].hotel = ahotel;
      structure[tilenum].building = abuilding;
      structure[tilenum].house = ahouse;
    } else {
    }
  }, 700);
  let howMuch = tile.price / 10;
  if (isNaN(howMuch)) {
    howMuch = "";
  } else if (howMuch === 0) {
    howMuch = "";
  } else {
    howMuch = String(howMuch) + " 만원";
  }
  a = a;
</script>

<div class="aa">
  {#if tile.whose === "1"}
    <div class="one">
      <p>{tile.name}<br />{howMuch}</p>
    </div>
  {:else if tile.whose === "2"}
    <div class="two">
      <p>{tile.name}<br />{howMuch}</p>
    </div>
  {:else if tile.whose === "3"}
    <div class="three">
      <p>{tile.name}<br />{howMuch}</p>
    </div>
  {:else if tile.whose === "4"}
    <div class="four">
      <p>{tile.name}<br />{howMuch}</p>
    </div>
  {:else if tile.whose === 0}
    <div class="noManager">
      <p>{tile.name}<br />{howMuch}</p>
    </div>
  {:else if tile.whose === 5}
    <div class="Gold">
      <p>{tile.name}<br />{howMuch}</p>
    </div>
  {:else if tile.whose === 6}
    <div class="social">
      <p>{tile.name}<br />{howMuch}</p>
    </div>
  {:else}
    <div class="tile">
      <p>{tile.name}<br />{howMuch}</p>
    </div>
  {/if}
</div>
{#if tile}
  {#if tile.hotel}
    {"🏨".repeat(structure[tilenum].hotel)}
  {/if}
  {#if tile.building}
    {"🏢".repeat(structure[tilenum].building)}
  {/if}
  {#if tile.house}
    {"🏠".repeat(structure[tilenum].house)}
  {/if}
{/if}

<!--
    #house{
      display:flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(255, 0, 0, 0.278);
      height: 1.5cm;
      width: 1.5cm;
    }-->

<style>
  .aa {
    text-shadow:
      -1px 0 #ffffff,
      0 1px #ffffff,
      1px 0 #ffffff,
      0 -1px #ffffff;
    font-weight: 600;
    font-size: 10%;
    display: flex;
    flex-direction: row;
  }
  .tile {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    height: 1.1cm;
    width: 1.1cm;
    font-size: 10%;
  }
  .one {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid red;
    height: 1.1cm;
    width: 1.1cm;
  }
  .two {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid blue;
    height: 1.1cm;
    width: 1.1cm;
  }
  .three {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid rgb(0, 255, 0);
    height: 1.1cm;
    width: 1.1cm;
  }
  .four {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid rgb(255, 217, 0);
    height: 1.1cm;
    width: 1.1cm;
    font-size: 10%;
  }
  .noManager {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(110, 238, 255, 0.649);
    height: 1.1cm;
    width: 1.1cm;
  }
  .Gold {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 234, 0);
    height: 1.1cm;
    width: 1.1cm;
  }
  .social {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(72, 255, 0);
    height: 1.1cm;
    width: 1.1cm;
  }
</style>
