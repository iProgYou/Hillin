import Player from "./player";
import Levels from './levels';
// import Tile from '../assets/Tiles/grassMid.png';

class Game {
    constructor(keysPressed) {
        Game.DIM_X = 1400; 
        Game.DIM_Y = 700;
        Game.MAP_EL_WIDTH = 50;
        Game.MAP_EL_HEIGHT = 50;
        this.ground_color = "#000000"
        this.keysPressed = keysPressed;
        this.levelNum = 1
        this.level = Levels[this.levelNum].level
        this.levelType = Levels[this.levelNum].type
        this.spriteFilenames = Levels.spriteFilenames
        this.player = new Player({
                pos: Levels[this.levelNum].startPos,
                color: "#00FF00"
            },
            Game.DIM_X
        );

    }

    // draw(ctx) {
    //     ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y)
    //     // screen.draw or level.draw
    //     // enamies.draw
    //     this.player.draw(ctx)
    // }

    drawLevel(ctx) {
        // ctx.clearRect(this.posX, this.posY, this.width, this.height)


        // debugger;
        
        

        // screen.draw or level.draw
        // enamies.draw
        // level is a 2d array
        // i = y coord, j = x coord
        // for (let i = 0; i < Game.DIM_Y / Game.MAP_EL_HEIGHT; i ++) {
        //     for (let j = 0; j < Game.DIM_X / Game.MAP_EL_WIDTH; j ++) {
        for (let i = 0; i < this.level.length; i ++) {
            for (let j = 0; j < this.level[i].length; j ++) {
                if (this.level[i][j] != 0) {

                    let platformXPos = j * Game.MAP_EL_WIDTH;
                    let platformYPos = i * Game.MAP_EL_HEIGHT;
                    let img = new Image();
                    img.src = `./assets/Tiles/small/resized_${this.levelType}${this.spriteFilenames[this.level[i][j]]}.png`;
                    img.onload = () => {
                        ctx.drawImage(
                            img,
                            platformXPos,
                            platformYPos,
                            img.width,
                            img.height,
                            // platformXPos, 
                            // platformYPos, 
                            // Game.MAP_EL_WIDTH, 
                            // Game.MAP_EL_HEIGHT
                        )
                    }
                }
            }
        }
    }

    checkCollisions(objA,objB) {
        return ((objA.posX < (objB.posX + objB.width)) &&
        ((objA.posX + objA.width) > objB.posX) &&
        (objA.posY < (objB.posY + objB.height)) &&
        ((objA.posY + objA.height) > objB.posY)) 
    }
    

    
    step(ctx) {
        this.player.move(this.keysPressed);

        for (let i = 0; i < Game.DIM_Y / Game.MAP_EL_HEIGHT; i ++) {
            for (let j = 0; j < Game.DIM_X / Game.MAP_EL_WIDTH; j ++) {
                if (this.level[i][j] != 0) {
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
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y)
        this.player.draw(ctx)
    }
}

export default Game;