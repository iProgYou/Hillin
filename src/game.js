const Player = require("./player")

class Game {
    constructor(keysPressed) {
        Game.DIM_X = 1000; 
        Game.DIM_Y = 500;
        this.keysPressed = keysPressed;
        this.player = new Player({
            pos: [20, 400],
            color: "#00FF00"
        });
    }

    draw(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y)
        // screen.draw or level.draw
        // enamies.draw
        this.player.draw(ctx)
    }

    step(ctx) {
        this.player.move(this.keysPressed);
        // this.checkCollisions()
        this.draw(ctx);
        // this.moveObjects(); 
        // this.checkCollisions();

        // player topleft
        // player bottomright

        // entity topleft
        // entity bottomright
    }
}

module.exports = Game;