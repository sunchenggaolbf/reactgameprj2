
import MoveUtil from "./utils/MoveUtil";

export function MoveEnemy(entities, { input }) {

    const { payload } = input.find(x => x.name === "onMouseDown") || {};

    if (payload) {
        // 玩家移动方式
        MoveUtil.playerMouseMove(entities,payload);
    }
    
    // 敌人移动方式
    MoveUtil.randomMove(entities);

    return entities;
}
