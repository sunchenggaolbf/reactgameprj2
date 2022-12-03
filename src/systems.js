export function MoveEnemy(entities, { input }) {

    const { payload } = input.find(x => x.name === "onMouseDown") || {};
  
    if (payload) {
      const player = entities["player"];
      player.x = payload.pageX;
      player.y = payload.pageY;
    }

    const enemy1 = entities["enemy1"];
    enemy1.x = enemy1.x + 1;
    enemy1.y = enemy1.y + 1;

    if(enemy1.x > 800){
        enemy1.x = 0;
    }
    if(enemy1.x < 0){
        enemy1.x = 800;
    }
    if(enemy1.y > 600){
        enemy1.y = 0;
    }
    if(enemy1.y < 0){
        enemy1.y = 600;
    }


    
  
    return entities;
  }
  