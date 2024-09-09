import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 10000 });
let players = {};

wss.on("connection", (ws) => {
  let playerId = null;

  ws.on("message", (message) => {
    const data = JSON.parse(message);
    if (data.type === "register") {
      playerId = data.playerId;
      players[playerId] = ws;
      console.log(`Player ${playerId} connected`);
      ws.send(
        JSON.stringify({
          type: "connected",
          message: `Player ${playerId} connected to the server.`,
        })
      );
    } else if (data.type === "move") {
      const { playerId, position, dice1, dice2, double, turn } = data;
      Object.values(players).forEach((client) => {
        client.send(
          JSON.stringify({
            type: "move",
            playerId,
            position,
            dice1,
            dice2,
            double,
            turn,
          })
        );
      });
    } else if (data.type === "turn") {
      const { playerId, position, dice1, dice2, double, turn } = data;
      Object.values(players).forEach((client) => {
        client.send(
          JSON.stringify({
            type: "turn",
            playerId,
            position,
            dice1,
            dice2,
            double,
            turn,
          })
        );
      });
    } else if (data.type === "buyGround") {
      const { playerId, where } = data;
      Object.values(players).forEach((client) => {
        client.send(JSON.stringify({ type: "buyGround", playerId, where }));
      });
      console.log(`server.js, Roger`);
    } else if (data.type === "buyStructure") {
      const { playerId, where, hotel, building, house } = data;
      Object.values(players).forEach((client) => {
        client.send(
          JSON.stringify({
            type: "buyStructure",
            playerId,
            where,
            hotel,
            building,
            house,
          })
        );
      });
    } else if (data.type === "tax") {
      const {
        playerId,
        passmoney,
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
        fourptone,
      } = data;
      Object.values(players).forEach((client) => {
        client.send(
          JSON.stringify({
            type: "tax",
            playerId,
            passmoney,
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
            fourptone,
          })
        );
      });
    } else if (data.type === "pay") {
      const {
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
        fourptone,
      } = data;
      Object.values(players).forEach((client) => {
        client.send(
          JSON.stringify({
            type: "pay",
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
            fourptone,
          })
        );
      });
    }
  });

  ws.on("close", () => {
    if (playerId) {
      console.log(`Player ${playerId} disconnected`);
      delete players[playerId];
    }
  });
});

console.log("WebSocket server is running on ws://localhost:10000");
