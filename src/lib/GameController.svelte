<script>
  export let playerId;
  export let players;
  export let tiles;
  import { onMount } from "svelte";
  export let turn;

  export let onefifty;
  export let oneten;
  export let onefive;
  export let onetwo;
  export let oneone;
  export let oneptfive;
  export let oneptone;

  export let twofifty;
  export let twoten;
  export let twofive;
  export let twotwo;
  export let twoone;
  export let twoptfive;
  export let twoptone;

  export let threefifty;
  export let threeten;
  export let threefive;
  export let threetwo;
  export let threeone;
  export let threeptfive;
  export let threeptone;

  export let fourfifty;
  export let fourten;
  export let fourfive;
  export let fourtwo;
  export let fourone;
  export let fourptfive;
  export let fourptone;
  export let noHavemoney = "";
  export let socket;
  onMount(() => {
    socket = new WebSocket("ws://localhost:10000");
  });
  let send = 0;
  let sendmoney = {
    fifty: 0,
    ten: 0,
    five: 0,
    two: 0,
    one: 0,
    ptfive: 0,
    ptone: 0,
  };

  let money = 0;
  function paytax() {
    if (
      findwhose(players[playerId]) === String(playerId) ||
      findwhose(players[playerId]) === ""
    ) {
      nomoney("통행료를 납부할 필요가 없습니다");
    } else if (
      findwhose(players[playerId]) === "1" ||
      findwhose(players[playerId]) === "2" ||
      findwhose(players[playerId]) === "3" ||
      findwhose(players[playerId]) === "4"
    ) {
      if (typeof findhowmuchtax(players[playerId]) === "string") {
        nomoney("통행료를 납부할 수 없습니다");
      } else if (send * 10 === findhowmuchtax(players[playerId])) {
        //가격이 같으면

        send = (send * 10 - findhowmuchtax(players[playerId])) / 10;

        if (Number(findwhose(players[playerId])) === 1) {
          onefifty = onefifty + sendmoney.fifty;
          oneten = oneten + sendmoney.ten;
          onefive = onefive + sendmoney.five;
          onetwo = onetwo + sendmoney.two;
          oneone = oneone + sendmoney.one;
          oneptfive = oneptfive + sendmoney.ptfive;
          oneptone = oneptone + sendmoney.ptone;
        } else if (Number(findwhose(players[playerId])) === 2) {
          twofifty = twofifty + sendmoney.fifty;
          twoten = twoten + sendmoney.ten;
          twofive = twofive + sendmoney.five;
          twotwo = twotwo + sendmoney.two;
          twoone = twoone + sendmoney.one;
          twoptfive = twoptfive + sendmoney.ptfive;
          twoptone = twoptone + sendmoney.ptone;
        } else if (Number(findwhose(players[playerId])) === 3) {
          threefifty = threefifty + sendmoney.fifty;
          threeten = threeten + sendmoney.ten;
          threefive = threefive + sendmoney.five;
          threetwo = threetwo + sendmoney.two;
          threeone = threeone + sendmoney.one;
          threeptfive = threeptfive + sendmoney.ptfive;
          threeptone = threeptone + sendmoney.ptone;
        } else if (Number(findwhose(players[playerId])) === 4) {
          fourfifty = fourfifty + sendmoney.fifty;
          fourten = fourten + sendmoney.ten;
          fourfive = fourfive + sendmoney.five;
          fourtwo = fourtwo + sendmoney.two;
          fourone = fourone + sendmoney.one;
          fourptfive = fourptfive + sendmoney.ptfive;
          fourptone = fourptone + sendmoney.ptone;
        }
        socket.send(
          JSON.stringify({
            type: "tax",
            playerId,
            passmoney: 1,

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
        ///이제 서버에 추가하고 page.svelte 에도 추가 해야함. ==>거의 완성, 이제 경매, 황금열쇠,, 사회복지기금(이거는 통행료 ㅡ낌으로 하면 됨)
        sendmoney.fifty = 0;
        sendmoney.ten = 0;
        sendmoney.five = 0;
        sendmoney.two = 0;
        sendmoney.one = 0;
        sendmoney.ptfive = 0;
        sendmoney.ptone = 0;
      } else if (send * 10 < findhowmuchtax(players[playerId])) {
        nomoney(
          `${(findhowmuchtax(players[playerId]) - send * 10) / 10} 만원 만큼 돈이 부족합니다!`
        );
      } else if (send * 10 > findhowmuchtax(players[playerId])) {
        nomoney(
          `${(-1 * (findhowmuchtax(players[playerId]) - send * 10)) / 10} 만원 만큼 돈이 남습니다!`
        );
      } else {
        alert("요청처리 실패");
      }
    } else {
      alert("요청처리 실패");
    }
  }
  function buyGround() {
    if (findwhose(players[playerId]) === "") {
      //주인이 없으면
      if (send * 10 === findhowmuch(players[playerId])) {
        //가격이 같으면
        socket.send(
          JSON.stringify({
            type: "buyGround",
            playerId,
            where: players[playerId],
          })
        );
        send = (send * 10 - findhowmuch(players[playerId])) / 10;

        sendmoney.fifty = 0;
        sendmoney.ten = 0;
        sendmoney.five = 0;
        sendmoney.two = 0;
        sendmoney.one = 0;
        sendmoney.ptfive = 0;
        sendmoney.ptone = 0;
      } else if (send * 10 <= findhowmuch(players[playerId])) {
        nomoney(
          `${(findhowmuch(players[playerId]) - send * 10) / 10} 만원 만큼 돈이 부족합니다!`
        );
      } else if (send * 10 >= findhowmuch(players[playerId])) {
        nomoney(
          `${(-1 * (findhowmuch(players[playerId]) - send * 10)) / 10} 만원 만큼 돈이 남습니다!`
        );
      }
    } else {
      nomoney("이 땅을 구매할 수 없습니다!");
    }
    console.log(`GameController, Roger ${players[playerId]}`);
  }
  function buyhotel() {
    if (
      send * 10 === findhowmuchhotel(players[playerId]) &&
      findwhose(players[playerId]) === playerId &&
      turn + 1 === Number(playerId)
    ) {
      socket.send(
        JSON.stringify({
          type: "buyStructure",
          playerId,
          where: players[playerId],
          hotel: 1,
          building: 0,
          house: 0,
        })
      );
      send = (send * 10 - findhowmuchhotel(players[playerId])) / 10;
      sendmoney.fifty = 0;
      sendmoney.ten = 0;
      sendmoney.five = 0;
      sendmoney.two = 0;
      sendmoney.one = 0;
      sendmoney.ptfive = 0;
      sendmoney.ptone = 0;
    } else if (turn + 1 !== Number(playerId)) {
      nomoney("당신의 차례가 아닙니다!");
    } else if (findwhose(players[playerId]) !== playerId) {
      nomoney("당신의 땅이 아닙니다");
    } else if (send * 10 < findhowmuchhotel(players[playerId])) {
      nomoney(
        `${(findhowmuchhotel(players[playerId]) - send * 10) / 10} 만원 만큼 돈이 부족합니다!`
      );
    } else if (send * 10 > findhowmuchhotel(players[playerId])) {
      nomoney(
        `${(-1 * (findhowmuchhotel(players[playerId]) - send * 10)) / 10} 만원 만큼 돈이 남습니다!`
      );
    } else {
      nomoney("이 땅은 건물을 지을 수 없음");
    }
  }
  function buybuilding() {
    if (
      send * 10 === findhowmuchbuilding(players[playerId]) &&
      findwhose(players[playerId]) === playerId &&
      turn + 1 === Number(playerId)
    ) {
      socket.send(
        JSON.stringify({
          type: "buyStructure",
          playerId,
          where: players[playerId],
          hotel: 0,
          building: 1, //"🏢",
          house: 0,
        })
      );
      send = (send * 10 - findhowmuchbuilding(players[playerId])) / 10;

      sendmoney.fifty = 0;
      sendmoney.ten = 0;
      sendmoney.five = 0;
      sendmoney.two = 0;
      sendmoney.one = 0;
      sendmoney.ptfive = 0;
      sendmoney.ptone = 0;
    } else if (turn + 1 !== Number(playerId)) {
      nomoney("당신의 차례가 아닙니다!");
    } else if (findwhose(players[playerId]) !== playerId) {
      nomoney("당신의 땅이 아닙니다");
    } else if (send * 10 < findhowmuchbuilding(players[playerId])) {
      nomoney(
        `${(findhowmuchbuilding(players[playerId]) - send * 10) / 10} 만원 만큼 돈이 부족합니다!`
      );
    } else if (send * 10 > findhowmuchbuilding(players[playerId])) {
      nomoney(
        `${(-1 * (findhowmuchbuilding(players[playerId]) - send * 10)) / 10} 만원 만큼 돈이 남습니다!`
      );
    } else {
      nomoney("이 땅은 건물을 지을 수 없음");
    }
  }
  function buyhouse() {
    if (
      send * 10 === findhowmuchhouse(players[playerId]) &&
      findwhose(players[playerId]) === playerId &&
      turn + 1 === Number(playerId)
    ) {
      socket.send(
        JSON.stringify({
          type: "buyStructure",
          playerId,
          where: players[playerId],
          hotel: 0,
          building: 0,
          house: 1, //"🏠",
        })
      );
      send = (send * 10 - findhowmuchhouse(players[playerId])) / 10;

      sendmoney.fifty = 0;
      sendmoney.ten = 0;
      sendmoney.five = 0;
      sendmoney.two = 0;
      sendmoney.one = 0;
      sendmoney.ptfive = 0;
      sendmoney.ptone = 0;
    } else if (turn + 1 !== Number(playerId)) {
      nomoney("당신의 차례가 아닙니다!");
    } else if (findwhose(players[playerId]) !== playerId) {
      nomoney("당신의 땅이 아닙니다");
    } else if (send * 10 < findhowmuchhouse(players[playerId])) {
      nomoney(
        `${(findhowmuchhouse(players[playerId]) - send * 10) / 10} 만원 만큼 돈이 부족합니다!`
      );
    } else if (send * 10 > findhowmuchhouse(players[playerId])) {
      nomoney(
        `${(-1 * (findhowmuchhouse(players[playerId]) - send * 10)) / 10} 만원 만큼 돈이 남습니다!`
      );
    } else {
      nomoney("이 땅은 건물을 지을 수 없음");
    }
  }
  function moneymoney1() {
    if (playerId === "1") {
      if (onefifty > 0) {
        sendmoney.fifty = sendmoney.fifty + 1;
        onefifty = onefifty - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    } else if (playerId === "2") {
      if (twofifty > 0) {
        sendmoney.fifty = sendmoney.fifty + 1;
        twofifty = twofifty - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    } else if (playerId === "3") {
      if (threefifty > 0) {
        sendmoney.fifty = sendmoney.fifty + 1;
        threefifty = threefifty - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    } else if (playerId === "4") {
      if (fourfifty > 0) {
        sendmoney.fifty = sendmoney.fifty + 1;
        fourfifty = fourfifty - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    }
  }
  function moneymoney2() {
    if (playerId === "1") {
      if (oneten > 0) {
        sendmoney.ten = sendmoney.ten + 1;
        oneten = oneten - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    } else if (playerId === "2") {
      if (twoten > 0) {
        sendmoney.ten = sendmoney.ten + 1;
        twoten = twoten - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    } else if (playerId === "3") {
      if (threeten > 0) {
        sendmoney.ten = sendmoney.ten + 1;
        threeten = threeten - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    } else if (playerId === "4") {
      if (fourten > 0) {
        sendmoney.ten = sendmoney.ten + 1;
        fourten = fourten - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    }
  }
  function moneymoney3() {
    if (playerId === "1") {
      if (onefive > 0) {
        sendmoney.five = sendmoney.five + 1;
        onefive = onefive - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    } else if (playerId === "2") {
      if (twofive > 0) {
        sendmoney.five = sendmoney.five + 1;
        twofive = twofive - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    } else if (playerId === "3") {
      if (threefive > 0) {
        sendmoney.five = sendmoney.five + 1;
        threefive = threefive - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    } else if (playerId === "4") {
      if (fourfive > 0) {
        sendmoney.five = sendmoney.five + 1;
        fourfive = fourfive - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    }
  }
  function moneymoney4() {
    if (playerId === "1") {
      if (onetwo > 0) {
        sendmoney.two = sendmoney.two + 1;
        onetwo = onetwo - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    } else if (playerId === "2") {
      if (twotwo > 0) {
        sendmoney.two = sendmoney.two + 1;
        twotwo = twotwo - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    } else if (playerId === "3") {
      if (threetwo > 0) {
        sendmoney.two = sendmoney.two + 1;
        threetwo = threetwo - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    } else if (playerId === "4") {
      if (fourtwo > 0) {
        sendmoney.two = sendmoney.two + 1;
        fourtwo = fourtwo - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    }
  }
  function moneymoney5() {
    if (playerId === "1") {
      if (oneone > 0) {
        sendmoney.one = sendmoney.one + 1;
        oneone = oneone - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    } else if (playerId === "2") {
      if (twoone > 0) {
        sendmoney.one = sendmoney.one + 1;
        twoone = twoone - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    } else if (playerId === "3") {
      if (threeone > 0) {
        sendmoney.one = sendmoney.one + 1;
        threeone = threeone - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    } else if (playerId === "4") {
      if (fourone > 0) {
        sendmoney.one = sendmoney.one + 1;
        fourone = fourone - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    }
  }
  function moneymoney6() {
    if (playerId === "1") {
      if (oneptfive > 0) {
        sendmoney.ptfive = sendmoney.ptfive + 1;
        oneptfive = oneptfive - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    } else if (playerId === "2") {
      if (twoptfive > 0) {
        sendmoney.ptfive = sendmoney.ptfive + 1;
        twoptfive = twoptfive - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    } else if (playerId === "3") {
      if (threeptfive > 0) {
        sendmoney.ptfive = sendmoney.ptfive + 1;
        threeptfive = threeptfive - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    } else if (playerId === "4") {
      if (fourptfive > 0) {
        sendmoney.ptfive = sendmoney.ptfive + 1;
        fourptfive = fourptfive - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    }
  }
  function moneymoney7() {
    if (playerId === "1") {
      if (oneptone > 0) {
        sendmoney.ptone = sendmoney.ptone + 1;
        oneptone = oneptone - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    } else if (playerId === "2") {
      if (twoptone > 0) {
        sendmoney.ptone = sendmoney.ptone + 1;
        twoptone = twoptone - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    } else if (playerId === "3") {
      if (threeptone > 0) {
        sendmoney.ptone = sendmoney.ptone + 1;
        threeptone = threeptone - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    } else if (playerId === "4") {
      if (fourptone > 0) {
        sendmoney.ptone = sendmoney.ptone + 1;
        fourptone = fourptone - 1;
        send =
          (sendmoney.fifty * 500 +
            sendmoney.ten * 100 +
            sendmoney.five * 50 +
            sendmoney.two * 20 +
            sendmoney.one * 10 +
            sendmoney.ptfive * 5 +
            sendmoney.ptone) /
          10;
        socket.send(
          JSON.stringify({
            type: "pay",

            onefifty: onefifty,
            oneten: oneten,
            onefive: onefive,
            onetwo: onetwo,
            oneone: oneone,
            oneptfive: oneptfive,
            oneptone: oneptone,

            twofifty: twofifty,
            twoten: twoten,
            twofive: twofive,
            twotwo: twotwo,
            twoone: twoone,
            twoptfive: twoptfive,
            twoptone: twoptone,

            threefifty: threefifty,
            threeten: threeten,
            threefive: threefive,
            threetwo: threetwo,
            threeone: threeone,
            threeptfive: threeptfive,
            threeptone: threeptone,

            fourfifty: fourfifty,
            fourten: fourten,
            fourfive: fourfive,
            fourtwo: fourtwo,
            fourone: fourone,
            fourptfive: fourptfive,
            fourptone: fourptone,
          })
        );
      } else {
        nomoney("돈이 부족합니다!");
      }
    }
  }

  function resetmoney() {
    if (playerId === "1") {
      onefifty = onefifty + sendmoney.fifty;
      oneten = oneten + sendmoney.ten;
      onefive = onefive + sendmoney.five;
      onetwo = onetwo + sendmoney.two;
      oneone = oneone + sendmoney.one;
      oneptfive = oneptfive + sendmoney.ptfive;
      oneptone = oneptone + sendmoney.ptone;
    } else if (playerId === "2") {
      twofifty = twofifty + sendmoney.fifty;
      twoten = twoten + sendmoney.ten;
      twofive = twofive + sendmoney.five;
      twotwo = twotwo + sendmoney.two;
      twoone = twoone + sendmoney.one;
      twoptfive = twoptfive + sendmoney.ptfive;
      twoptone = twoptone + sendmoney.ptone;
    } else if (playerId === "3") {
      threefifty = threefifty + sendmoney.fifty;
      threeten = threeten + sendmoney.ten;
      threefive = threefive + sendmoney.five;
      threetwo = threetwo + sendmoney.two;
      threeone = threeone + sendmoney.one;
      threeptfive = threeptfive + sendmoney.ptfive;
      threeptone = threeptone + sendmoney.ptone;
    } else if (playerId === "4") {
      fourfifty = fourfifty + sendmoney.fifty;
      fourten = fourten + sendmoney.ten;
      fourfive = fourfive + sendmoney.five;
      fourtwo = fourtwo + sendmoney.two;
      fourone = fourone + sendmoney.one;
      fourptfive = fourptfive + sendmoney.ptfive;
      fourptone = fourptone + sendmoney.ptone;
    }
    sendmoney.fifty = 0;
    sendmoney.ten = 0;
    sendmoney.five = 0;
    sendmoney.two = 0;
    sendmoney.one = 0;
    sendmoney.ptfive = 0;
    sendmoney.ptone = 0;
    send =
      (sendmoney.fifty * 500 +
        sendmoney.ten * 100 +
        sendmoney.five * 50 +
        sendmoney.two * 20 +
        sendmoney.one * 10 +
        sendmoney.ptfive * 5 +
        sendmoney.ptone) /
      10;
    socket.send(
      JSON.stringify({
        type: "pay",

        onefifty: onefifty,
        oneten: oneten,
        onefive: onefive,
        onetwo: onetwo,
        oneone: oneone,
        oneptfive: oneptfive,
        oneptone: oneptone,

        twofifty: twofifty,
        twoten: twoten,
        twofive: twofive,
        twotwo: twotwo,
        twoone: twoone,
        twoptfive: twoptfive,
        twoptone: twoptone,

        threefifty: threefifty,
        threeten: threeten,
        threefive: threefive,
        threetwo: threetwo,
        threeone: threeone,
        threeptfive: threeptfive,
        threeptone: threeptone,

        fourfifty: fourfifty,
        fourten: fourten,
        fourfive: fourfive,
        fourtwo: fourtwo,
        fourone: fourone,
        fourptfive: fourptfive,
        fourptone: fourptone,
      })
    );
  }
  function findwhose(a) {
    const found = tiles.find((country) => country.num === a);
    return found ? found.whose : null;
  }
  function findhowmuch(a) {
    const found = tiles.find((country) => country.num === a);
    return found ? found.price : null;
  }
  function findhowmuchhotel(a) {
    const found = tiles.find((country) => country.num === a);
    return found ? found.price3 : null;
  }
  function findhowmuchbuilding(a) {
    const found = tiles.find((country) => country.num === a);
    return found ? found.price2 : null;
  }
  function findhowmuchhouse(a) {
    const found = tiles.find((country) => country.num === a);
    return found ? found.price1 : null;
  }
  function findhowmuchtax(a) {
    let taxx;
    if (typeof a === "number") {
      const found = tiles.find((country) => country.num === a);
      taxx =
        found.pass +
        found.pass1 * found.house +
        found.pass2 * found.building +
        found.pass3 * found.hotel;
    } else {
      taxx = "없음";
    }
    return taxx;
  }

  function nomoney(a) {
    noHavemoney = a;

    setTimeout(function () {
      noHavemoney = "";
    }, 700);
  }
</script>

{#if playerId !== undefined}
  {#if playerId === "1"}
    <h1>Player {playerId} 통계</h1>

    <button on:click={moneymoney1}>50만원권 : {onefifty}장</button>
    <button on:click={moneymoney2}>10만원권 : {oneten}장</button>
    <button on:click={moneymoney3}>5만원권 : {onefive}장</button>
    <button on:click={moneymoney4}>2만원권 : {onetwo}장</button>
    <button on:click={moneymoney5}>1만원권 : {oneone}장</button>
    <button on:click={moneymoney6}>5천원권 : {oneptfive}장</button>
    <button on:click={moneymoney7}>1천원권 : {oneptone}장</button>
    <p>
      선택한 금액 {send} 만원
      <button on:click={resetmoney}>선택 금액 초기화</button>
    </p>
    <p>
      총 재산 : {(onefifty * 500 +
        oneten * 100 +
        onefive * 50 +
        onetwo * 20 +
        oneone * 10 +
        oneptfive * 5 +
        oneptone) /
        10} 만원
    </p>
  {:else if playerId === "2"}
    <h1>Player {playerId} 통계</h1>

    <button on:click={moneymoney1}>50만원권 : {twofifty}장</button>
    <button on:click={moneymoney2}>10만원권 : {twoten}장</button>
    <button on:click={moneymoney3}>5만원권 : {twofive}장</button>
    <button on:click={moneymoney4}>2만원권 : {twotwo}장</button>
    <button on:click={moneymoney5}>1만원권 : {twoone}장</button>
    <button on:click={moneymoney6}>5천원권 : {twoptfive}장</button>
    <button on:click={moneymoney7}>1천원권 : {twoptone}장</button>
    <p>
      선택한 금액 {send} 만원
      <button on:click={resetmoney}>선택 금액 초기화</button>
    </p>
    <p>
      총 재산 : {(twofifty * 500 +
        twoten * 100 +
        twofive * 50 +
        twotwo * 20 +
        twoone * 10 +
        twoptfive * 5 +
        twoptone) /
        10} 만원
    </p>
  {:else if playerId === "3"}
    <h1>Player {playerId} 통계</h1>

    <button on:click={moneymoney1}>50만원권 : {threefifty}장</button>
    <button on:click={moneymoney2}>10만원권 : {threeten}장</button>
    <button on:click={moneymoney3}>5만원권 : {threefive}장</button>
    <button on:click={moneymoney4}>2만원권 : {threetwo}장</button>
    <button on:click={moneymoney5}>1만원권 : {threeone}장</button>
    <button on:click={moneymoney6}>5천원권 : {threeptfive}장</button>
    <button on:click={moneymoney7}>1천원권 : {threeptone}장</button>
    <p>
      선택한 금액 {send} 만원
      <button on:click={resetmoney}>선택 금액 초기화</button>
    </p>
    <p>
      총 재산 : {(threefifty * 500 +
        threeten * 100 +
        threefive * 50 +
        threetwo * 20 +
        threeone * 10 +
        threeptfive * 5 +
        threeptone) /
        10} 만원
    </p>
  {:else if playerId === "4"}
    <h1>Player {playerId} 통계</h1>

    <button on:click={moneymoney1}>50만원권 : {fourfifty}장</button>
    <button on:click={moneymoney2}>10만원권 : {fourten}장</button>
    <button on:click={moneymoney3}>5만원권 : {fourfive}장</button>
    <button on:click={moneymoney4}>2만원권 : {fourtwo}장</button>
    <button on:click={moneymoney5}>1만원권 : {fourone}장</button>
    <button on:click={moneymoney6}>5천원권 : {fourptfive}장</button>
    <button on:click={moneymoney7}>1천원권 : {fourptone}장</button>
    <p>
      선택한 금액 {send} 만원
      <button on:click={resetmoney}>선택 금액 초기화</button>
    </p>
    <p>
      총 재산 : {(fourfifty * 500 +
        fourten * 100 +
        fourfive * 50 +
        fourtwo * 20 +
        fourone * 10 +
        fourptfive * 5 +
        fourptone) /
        10} 만원
    </p>
  {/if}
  <p>
    현재 땅의 통행료 : {#if typeof findhowmuchtax(players[playerId]) === "number"}
      {findhowmuchtax(players[playerId]) / 10}만원
    {:else}{findhowmuchtax(players[playerId])}
    {/if}
  </p>
  {noHavemoney}
  <button on:click={buyGround}>땅 구매</button>
  {#if players[playerId] !== 0}
    {#if playerId === findwhose(players[playerId])}
      <button on:click={buyhouse}>별장 구매</button>
      <button on:click={buybuilding}>빌딩 구매</button>
      <button on:click={buyhotel}>호텔 구매</button>
    {/if}
    {#if findwhose(players[playerId]) !== 0 && findwhose(players[playerId]) !== 5 && findwhose(players[playerId]) !== 6}
      <button on:click={paytax}>통행료 납부</button>
    {/if}
  {/if}
{/if}

<style>
</style>
