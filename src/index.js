// const MovingObject = require("./moving_object");
import Game from './game';
import GameView from './game_view';

document.addEventListener("DOMContentLoaded", () => {
    const elCanvas = document.getElementById("game-canvas");
    const backgroundCanvas = document.getElementById("background-canvas")
    const musicPlayback = document.getElementById("music-playback");
    const startGameButton = document.getElementById("start-button");
    const startGameScreen = document.getElementById("start-game-screen")
    const endGameScreen = document.getElementById("endgame-screen")
    const restartGameButton = document.getElementById("restart-game")
    const audio = new Audio('./assets/Music/1.mp3')
    elCanvas.height = 700;
    elCanvas.width = 1400;
    backgroundCanvas.height = 700;
    backgroundCanvas.width = 1400;

    let gameView = null;

    let keysPressed = {};
    document.addEventListener("keydown", (e) => {
        keysPressed[e.key] = true;
    }, false);
    document.addEventListener("keyup", (e) => {
        keysPressed[e.key] = false;
    }, false);

    window.dance = (on) => {
        if (on) {
            const bloo1 = document.getElementById("bloo-end-1")
            const bloo2 = document.getElementById("bloo-end-2")
            let switchin = true;
            window.danceInterval = setInterval(() => {

                if(switchin) {
                    bloo1.src = "./assets/Player_sprites/p2_jump_left.png"
                    bloo2.src = "./assets/Player_sprites/p2_jump_right.png"
                    switchin = false
                } else {
                    bloo2.src = "./assets/Player_sprites/p2_jump_left.png"
                    bloo1.src = "./assets/Player_sprites/p2_jump_right.png"
                    switchin = true
                }
            }, 150)
        } else {
            clearInterval(window.danceInterval)
        }

    }

    musicPlayback.addEventListener("click", (e) => {
        if (window.musicDisabled){
            audio.pause()
        } else {
            audio.play()
        }
        window.musicDisabled = !window.musicDisabled;
    })

    //play the music
    audio.play()
    
    
    const ctx = elCanvas.getContext("2d");
    const ctxBackground = backgroundCanvas.getContext("2d");
    const startGame = () => {
        keysPressed = {};
        window.game = new Game(keysPressed);
        gameView = new GameView(ctx,ctxBackground,game);
        gameView.start();
        startGameScreen.style.display = "none"
        endGameScreen.style.display = "none"
    }
    startGameButton.addEventListener("click", (e) => {
        startGame() 
    })

    restartGameButton.addEventListener("click", (e) => {
        startGame()
    })

})