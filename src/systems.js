export function MoveEnemy(entities, { input }) {

    const { payload } = input.find(x => x.name === "onMouseDown") || {};
  
    if (payload) {
      const enemy1 = entities["enemy1"];
      enemy1.x = payload.pageX;
      enemy1.y = payload.pageY;
    }
  
    return entities;
  }
  