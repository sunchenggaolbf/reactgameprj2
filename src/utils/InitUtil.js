import Constant from "../Constant";

const simplePlayerPositionInit = (entities) => {
        entities["player"].x = 100;
        entities["player"].y = 100;
}

const simpleEnemyPositionInit = (entities) => {
  for (let i = 0; i < Constant.enemyCount; i++) {
      let xp = Math.random() * 150;
      let yp = Math.random() * 130;
      const key = "enemy" + i;
      entities[key].x = 10 + i * 10 + xp;
      entities[key].y = 10 + yp;
    }
}

const InitUtil = { simplePlayerPositionInit, simpleEnemyPositionInit };

export default InitUtil;