import Constant from "../Constant";

const playerMouseMove = (entities, payload) => {
    const player = entities["player"];
    player.x = payload.pageX;
    player.y = payload.pageY;
}

const randomMove = (entities) => {
    for (let i = 0; i < Constant.enemyCount; i++) {
        let xv = Math.random() * 1;
        let yv = Math.random() * 1;
        let enemy = entities["enemy" + i];
        enemy.x = enemy.x + xv;
        enemy.y = enemy.y + yv;

        if (enemy.x > 800) {
            enemy.x = 0;
        }
        if (enemy.x < 0) {
            enemy.x = 800;
        }
        if (enemy.y > 600) {
            enemy.y = 0;
        }
        if (enemy.y < 0) {
            enemy.y = 600;
        }
    }
}

const pursuitMove = (entities) => {
    alert();
}

const MoveUtil = { playerMouseMove, randomMove, pursuitMove };

export default MoveUtil;