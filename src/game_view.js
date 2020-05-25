class GameView { 
    constructor(ctx,backgroundCtx,game) {
        this.game = game; 
        this.ctx = ctx; 
        this.backgroundCtx = backgroundCtx;
    }

    start() { 
        this.game.drawLevel(this.backgroundCtx)
        setInterval(() => {this.game.step(this.ctx, this.backgroundCtx)}, 20); 
    }
}


export default GameView;