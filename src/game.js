import Player from "./player";
import Levels from './levels';
// import Tile from '../assets/Tiles/grassMid.png';

class Game {
    constructor(keysPressed) {
        Game.DIM_X = 1400; 
        Game.DIM_Y = 700;
        Game.MAP_EL_WIDTH = 50;
        Game.MAP_EL_HEIGHT = 50;
        this.hazrds = ['a']
        this.ground_color = "#000000"
        this.keysPressed = keysPressed;
        this.levelNum = 0;
        this.level = Levels[this.levelNum].level;
        this.levelType = Levels[this.levelNum].type;
        this.hazardType = Levels[this.levelNum].hazardType
        document.getElementById("background-canvas").style.backgroundImage = `url('${Levels[this.levelNum].background}')`;
        this.spriteFilenames = Levels.spriteFilenames;
        this.player = new Player({
                pos: Levels[this.levelNum].startPos,
                color: "#00FF00"
            },
            Game.DIM_X
        );

    }

    drawLevel(ctx) {
        for (let i = 0; i < this.level.length; i ++) {
            for (let j = 0; j < this.level[i].length; j ++) {
                let currentBlock = this.level[i][j];
                if (currentBlock != 0) {
                    let img = new Image();
                    let platformXPos = j * Game.MAP_EL_WIDTH;
                    let platformYPos = i * Game.MAP_EL_HEIGHT;

                    if (this.hazrds.includes(currentBlock)) {
                        img.src = `./assets/Tiles_resized/resized_liquid${this.hazardType}${this.spriteFilenames[this.level[i][j]]}.png`
                    } else {
                        img.src = `./assets/Tiles_resized/resized_${this.levelType}${this.spriteFilenames[this.level[i][j]]}.png`;
                    }

                    img.onload = () => {
                        ctx.drawImage(
                            img,
                            platformXPos,
                            platformYPos,
                            img.width,
                            img.height,
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
    
    resetLevel() {

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