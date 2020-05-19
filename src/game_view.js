class GameView { 
    constructor(ctx,game) {
        this.game = game; 
        this.ctx = ctx; 
    }

    start() { 
        setInterval(() => {this.game.step(this.ctx)}, 20); 
    }
}


module.exports = GameView;