import Player from "./player";
import Levels from './levels';
// import Tile from '../assets/Tiles/grassMid.png';

class Game {
    constructor(keysPressed) {
        Game.DIM_X = 1400; 
        Game.DIM_Y = 700;
        Game.MAP_EL_WIDTH = 50;
        Game.MAP_EL_HEIGHT = 50;
        this.loadLevel(0);
        this.hazards = ['a']
        this.ground_color = "#000000"
        this.keysPressed = keysPressed;
        
        this.hasKey = false; // UNCOMMENT THIS WHEN GOING TO PROD
        // this.hasKey = true;
        
        this.spriteFilenames = Levels.spriteFilenames;
        this.player = new Player({
            pos: Levels[this.levelNum].startPos,
            color: "#00FF00"
        }, Game.DIM_X);
    }

    drawLevel(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y)
        for (let i = 0; i < this.level.length; i ++) {
            for (let j = 0; j < this.level[i].length; j++) {
                let currentBlock = this.level[i][j];
                if (currentBlock != 0) {
                    let img = new Image();
                    let platformXPos = j * Game.MAP_EL_WIDTH;
                    let platformYPos = i * Game.MAP_EL_HEIGHT;

                    if (this.hazards.includes(currentBlock)) {
                        img.src = `./assets/Tiles_resized/resized_liquid${this.hazardType}${this.spriteFilenames[this.level[i][j]]}.png`
                    } else if (currentBlock === 'k') {
                        if (!this.hasKey) {
                            // draw key
                            img.src = `./assets/Items/keyRed.png`
                        } else {
                            continue
                        }
                    } else if (currentBlock === 'd' || currentBlock === 'o') {
                        let doorStatus = 'closed'
                        let doorPiece = currentBlock === 'd' ? 'Mid' : 'Top'
                        if (this.hasKey) {
                            doorStatus = 'open'
                        } 
                        img.src = `./assets/Tiles_resized/resized_door_${doorStatus}${doorPiece}.png`
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
        // Reset player position
        if (!this.player) return;
        this.player.posX = Levels[this.levelNum].startPos[0];
        this.player.posY = Levels[this.levelNum].startPos[1];
        this.hasKey = false; // UNCOMMENT THIS WHEN GOING TO PROD
    }

    endScreen() {
        const endScreen = document.getElementById("endgame-screen");
        endScreen.style.display = 'block';
        window.dance(true)
        //  in index.html make an endscreen el with display none
        //  set to display here
        //  description of game bloob
        //  controls
    }
    
    loadLevel(levelNum) {
        if (levelNum === 4) this.endScreen();
        this.levelNum = levelNum;
        this.level = Levels[this.levelNum].level;
        this.levelType = Levels[this.levelNum].type;
        this.hazardType = Levels[this.levelNum].hazardType
        document.getElementById("background-canvas").style.backgroundImage = `url('${Levels[this.levelNum].background}')`;

        this.resetLevel()
    }

    step(ctx,backgroundCtx) {
        this.player.move(this.keysPressed);

        for (let i = 0; i < Game.DIM_Y / Game.MAP_EL_HEIGHT; i ++) {
            for (let j = 0; j < Game.DIM_X / Game.MAP_EL_WIDTH; j ++) {
                let currentBlock = this.level[i][j]
                if (currentBlock != 0) {
                    let platformXPos = j * Game.MAP_EL_WIDTH;
                    let platformYPos = i * Game.MAP_EL_HEIGHT;
                    let mapEl = {
                        posX: platformXPos, 
                        posY:platformYPos, 
                        height: Game.MAP_EL_WIDTH, 
                        width: Game.MAP_EL_HEIGHT
                    }
                    if (this.checkCollisions(this.player,mapEl)) {
                        if (currentBlock === 'k') {
                            if (!this.hasKey) {
                                this.hasKey = true;
                                this.drawLevel(backgroundCtx)
                            }
                        } else if (this.hazards.includes(currentBlock)) {
                            this.resetLevel()
                            this.drawLevel(backgroundCtx)
                        } else if (currentBlock === 'd' || currentBlock === 'o') {
                            if (!this.hasKey) continue;
                            // next level
                            this.loadLevel(this.levelNum + 1)
                            this.drawLevel(backgroundCtx)
                        } else {
                            this.player.resolveMapCollision(mapEl)
                        }
                    }
                }
            }
        }
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y)
        this.player.draw(ctx)
    }
}

export default Game;