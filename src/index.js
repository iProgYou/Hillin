// const MovingObject = require("./moving_object");
import Game from './game';
import GameView from './game_view';

document.addEventListener("DOMContentLoaded", () => {
    const elCanvas = document.getElementById("game-canvas");
    elCanvas.height = 500;
    elCanvas.width = 1000;

    let keysPressed = {};
    document.addEventListener("keydown", (e) => {
        keysPressed[e.key] = true;
    }, false);
    document.addEventListener("keyup", (e) => {
        keysPressed[e.key] = false;
    }, false);
    
    const ctx = elCanvas.getContext("2d");
    const game = new Game(keysPressed);
    const gameView = new GameView(ctx,game);
    gameView.start();

})