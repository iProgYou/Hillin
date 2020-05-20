import Player from "./player";
import Levels from './levels';

class Game {
    constructor(keysPressed) {
        Game.DIM_X = 1000; 
        Game.DIM_Y = 500;
        Game.MAP_EL_WIDTH = 50;
        Game.MAP_EL_HEIGHT = 50;
        this.ground_color = "#000000"
        this.keysPressed = keysPressed;
        this.player = new Player({
            pos: [20, 410],
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

                    let platformXPos = j * Game.MAP_EL_WIDTH;
                    let platformYPos = i * Game.MAP_EL_HEIGHT;

                    ctx.fillStyle = this.ground_color
                    ctx.fillRect(
                        platformXPos, 
                        platformYPos, 
                        Game.MAP_EL_WIDTH, 
                        Game.MAP_EL_HEIGHT
                    );
                }
            }
        }
        this.player.draw(ctx)
    }

    checkCollisions(objA,objB) {
        return ((objA.posX < (objB.posX + objB.width)) &&
        ((objA.posX + objA.width) > objB.posX) &&
        (objA.posY < (objB.posY + objB.height)) &&
        ((objA.posY + objA.height) > objB.posY)) 
    }
    

    
    step(ctx) {
        let level = Levels[0]
        this.player.move(this.keysPressed);

        for (let i = 0; i < Game.DIM_Y / Game.MAP_EL_HEIGHT; i ++) {
            for (let j = 0; j < Game.DIM_X / Game.MAP_EL_WIDTH; j ++) {
                if (level[i][j] === 'g') {
                    let platformXPos = j * Game.MAP_EL_WIDTH;
                    let platformYPos = i * Game.MAP_EL_HEIGHT;
                    let mapEl = {
                        posX: platformXPos, 
                        posY:platformYPos, 
                        height: Game.MAP_EL_WIDTH, 
                        width: Game.MAP_EL_HEIGHT
                    }
                    if (this.checkCollisions(this.player,mapEl)) {
                        this.player.resolveMapCollision(mapEl)
                    }
                }
            }
        }
        console.log(this.player.posX,this.player.posY)
        this.player.step();

        // this.checkCollisions()
        // debugger
        this.drawLevel(ctx,level);
        // this.moveObjects(); 
        // this.checkCollisions();

        // player topleft
        // player bottomright

        // entity topleft
        // entity bottomright
    }
}

export default Game;