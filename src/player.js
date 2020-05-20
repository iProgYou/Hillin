class Player {
    constructor(playerData) {
        this.posX = playerData["pos"][0];
        this.posY = playerData["pos"][1];
        this.height = 40;
        this.width = 20;
        this.gravity = -3;
        this.isJumping = false;
        this.isDashing = false;
        this.jumpAcc = -7;
        this.velocityX = 0;
        this.velocityY = 0;
        this.maxVelocity = 100;
        console.log(this.maxVelocity)
        this.friction = 0.2;
        // this.height = playerData["height"];
        // this.width = playerData["width"];
        this.color = playerData["color"];
    }

    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.posX,this.posY,this.width,this.height);
    }

    move(keysPressed) {
        console.log(keysPressed)
        this.velocityX = 0;
        if (keysPressed['d']) {
            if (this.posX < 973) {
                this.velocityX = 7;
            }
        }
        if (keysPressed['a']) {
            if (this.posX > 0) {
                this.velocityX = -7;
            }
        }

        if (keysPressed['space']) {
            console.log('AYOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
            if (!this.isDashing) {
                this.isDashing = true
                this.dash(keysPressed)
            }
        }

        if (this.velocityX != 0){
            this.posX += this.velocityX;
        }


        this.velocityY = -this.gravity;
        if (keysPressed['w']) {
            if(!this.isJumping){
                this.isJumping = true;
                this.jumpAcc = 11;
            }
        }
        if(this.jumpAcc > 0){
            this.velocityY -= this.jumpAcc;
            this.jumpAcc -= 1;
        } else if (this.jumpAcc === 0) {
            this.jumpAcc = -1;
            // this.isJumping = false;
        }
        if(this.velocityY != 0){
            this.posY += this.velocityY;
        }
    }

    dash(keysPressed) {
        let dir;
        if (keysPressed['ArrowRight'] && keysPressed['ArrowUp']) { // up right dash
            dir = [1,-1];
        } else if (keysPressed['ArrowLeft'] && keysPressed['ArrowUp']) { // up left dash
            dir = [-1,-1];
        } else if (keysPressed['ArrowRight']) { // right dash
            dir = [1,0]
        } else if (keysPressed['ArrowUp']) { // up dash
            dir = [0,-1]
        } else if (keysPressed['ArrowLeft']) { // left dash
            dir = [-1,0]
        }
        // if ()
    }

    step() {
        
    }

    // resolveMapCollision(mapEl) {
    //     let dX = mapEl.posX - this.posX;
    //     let dY = mapEl.posY - this.posY;
    //     let absX = Math.abs(dX/2);
    //     let absY = Math.abs(dY/2);
    //     let max_width = (mapEl.width / 2) + (this.width / 2)
    //     let max_height = (mapEl.height / 2) + (this.height / 2)
    //     if(absX < max_width && absY < max_height){
    //         if(absX > absY){
    //             if (dX > 0){ // object came from the left
    //                 this.posX = mapEl.posX - this.width;
    //             }
    //             else if (dX < 0){ // object came from the right
    //                 this.posX = mapEl.posX + mapEl.width;
    //             }
    //         } else {
    //             if (dY > 0){ // object came from the top
    //                 console.log("FROM TOP")
    //                 this.posY = mapEl.posY - this.height;
    //             }
    //             else if (dY < 0){ // object came from the bottom
    //                 console.log("FROM BOTTOM")
    //                 this.posY = mapEl.posY + mapEl.height;
    //             }
    //         }
    //     }
    // }

    resolveMapCollision(mapEl) {
        let dX = (this.posX + (this.width/2)) - (mapEl.posX + (mapEl.width/2));
        let dY = (this.posY + (this.height/2)) - (mapEl.posY + (mapEl.height/2));
        let absX = Math.abs(dX);
        let absY = Math.abs(dY);  
        let max_width = (mapEl.width / 2) + (this.width / 2)
        let max_height = (mapEl.height / 2) + (this.height / 2)
        let oX = max_width - absX;
        let oY = max_height - absY;
        
        if(oX > 0 && oY > 0){
            if(oY > oX){
                if (dX < 0){ // object came from the left
                    console.log("FROM LEFT")
                    this.posX -= oX;
                } else { //if (dX > 0) object came from the right
                    console.log("FROM RIGHT")
                    this.posX += oX;
                }
            } else {
                if (dY < 0){ // object came from the top
                    console.log("FROM TOP")
                    this.isJumping = false;
                    this.posY -= oY;
                }
                else { // object came from the bottom

                    console.log("FROM BOTTOM")
                    this.posY += oY;
                }
            } 
        }
    }

}

export default Player;