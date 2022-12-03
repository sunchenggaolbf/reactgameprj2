import React from "react";
import ReactDOM from "react-dom";
import { GameEngine } from "react-game-engine";
import { Enemy } from "./Enemy";
import { Player } from "./Player";
import { MoveEnemy } from "./systems";

function SimpleGame() {
  return (
    <GameEngine
      style={{ width: 800, height: 600, backgroundColor: "green" }}
      systems={[MoveEnemy]}
      entities={{enemy1: { x: 200, y: 200, renderer: <Enemy /> },
                 player: { x: 400, y: 400, renderer: <Player /> }}}
    />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <SimpleGame />
  </React.StrictMode>,
  rootElement
);
