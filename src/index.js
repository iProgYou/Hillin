// const MovingObject = require("./moving_object");
import Game from './game';
import GameView from './game_view';

document.addEventListener("DOMContentLoaded", () => {
    const elCanvas = document.getElementById("game-canvas");
    const backgroundCanvas = document.getElementById("background-canvas")
    const musicPlayback = document.getElementById("music-playback");
    const audio = new Audio('./assets/Music/1.mp3')
    elCanvas.height = 700;
    elCanvas.width = 1400;
    backgroundCanvas.height = 700;
    backgroundCanvas.width = 1400;

    let keysPressed = {};
    document.addEventListener("keydown", (e) => {
        keysPressed[e.key] = true;
    }, false);
    document.addEventListener("keyup", (e) => {
        keysPressed[e.key] = false;
    }, false);


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
    window.game = new Game(keysPressed);
    const gameView = new GameView(ctx,ctxBackground,game);
    gameView.start();

})