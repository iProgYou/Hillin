import Player from "./player";
import Levels from './levels';

class Game {
    constructor(keysPressed) {
        Game.DIM_X = 1000; 
        Game.DIM_Y = 500;
        Game.MAP_EL_WIDTH = 50;
        Game.MAP_EL_HEIGHT = 50;
        this.groud_color = "#000000"
        this.keysPressed = keysPressed;
        this.player = new Player({
            pos: [20, 400],
            color: "#00FF00"
        });
    }

    // draw(ctx) {
    //     ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y)
    //     // screen.draw or level.draw
    //     // enamies.draw
    //     this.player.draw(ctx)
    // }

    drawLevel(ctx,level) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y)
        // screen.draw or level.draw
        // enamies.draw
        // level is a 2d array
        // i = y coord, j = x coord
        for (let i = 0; i < Game.DIM_Y / Game.MAP_EL_HEIGHT; i ++) {
            for (let j = 0; j < Game.DIM_X / Game.MAP_EL_WIDTH; j ++) {
                if (level[i][j] === 'g') {
                    // ctx.fillStyle(this.groud_color)
                    ctx.fillRect(
                        j * Game.MAP_EL_WIDTH, 
                        i * Game.MAP_EL_HEIGHT, 
                        Game.MAP_EL_WIDTH, 
                        Game.MAP_EL_HEIGHT
                    );
                }
            }
        }
        this.player.draw(ctx)
    }

    step(ctx) {
        this.player.move(this.keysPressed);
        // this.checkCollisions()
        debugger
        this.drawLevel(ctx,Levels[0]);
        // this.moveObjects(); 
        // this.checkCollisions();

        // player topleft
        // player bottomright

        // entity topleft
        // entity bottomright
    }
}

export default Game;