class GameView { 
    constructor(ctx,game) {
        this.game = game; 
        this.ctx = ctx; 
    }

    start() { 
        this.game.drawLevel(this.ctx)
        setInterval(() => {this.game.step(this.ctx)}, 20); 
    }
}


export default GameView;