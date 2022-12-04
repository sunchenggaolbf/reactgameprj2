import React from "react";
import ReactDOM from "react-dom";
import { GameEngine } from "react-game-engine";
import { Enemy } from "./Enemy";
import { Player } from "./Player";
import { MoveEnemy } from "./systems";
import Constant from "./Constant";
import InitUtil from "./utils/InitUtil";

function SimpleGame() {
  const getEntities = () => {
    let entities = {};
    for (let i = 0; i < Constant.enemyCount; i++) {
      const key = "enemy" + i;
      entities[key] = {renderer: <Enemy /> };
    }

    entities["player"] = { renderer: <Player /> };

    return entities;
  }

  const entities = getEntities();
  InitUtil.simplePlayerPositionInit(entities);
  InitUtil.simpleEnemyPositionInit(entities);
  return (
    <GameEngine
      style={{ width: 800, height: 600, backgroundColor: "green" }}
      systems={[MoveEnemy]}
      entities={entities}
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
