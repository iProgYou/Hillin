class Player {
    constructor(playerData, gameWidth) {
        this.posX = playerData["pos"][0];
        this.posY = playerData["pos"][1];
        this.width = 30;
        this.height = 57;
        this.gravity = -5;
        this.isJumping = false;
        this.isGrounded = true;
        this.facingRight = true;
        this.walkingFrame = 1;
        this.skipFrame = false;
        this.maxWalkingFrame = 11;
        this.startingJumpAcc = 16
        // this.facingRight = false;
        // this.isStopped = true
        this.maxXValue = gameWidth - this.width
        // this.isDashing = false;
        // this.dashLength = 20;
        // this.dashAcc = 0;
        // this.dashDir = [0,0];
        this.jumpAcc = -1;
        this.jumpFrameDelay = 0;
        this.velocityX = 0;
        this.velocityY = 0;
        this.isStopped = true;
        this.maxVelocity = 100;
        this.friction = 0.2;
        // this.height = playerData["height"];
        // this.width = playerData["width"];
        this.color = playerData["color"];
        this.jumpingRightSprite = new Image();
        this.jumpingRightSprite.src = `./assets/Player_sprites/p2_jump_right.png`;
        this.jumpingLeftSprite = new Image();
        this.jumpingLeftSprite.src = `./assets/Player_sprites/p2_jump_left.png`;
        this.standingRightSprite = new Image();
        this.standingRightSprite.src = `./assets/Player_sprites/p2_stand_right.png`;
        this.standingLeftSprite = new Image();
        this.standingLeftSprite.src = `./assets/Player_sprites/p2_stand_left.png`;
        this.walkingRightSpriteImgs = [];
        this.walkingLeftSpriteImgs = [];
        for (let i = 1; i <= this.maxWalkingFrame; i++) {
            let img = new Image();
            img.src = `./assets/Player_sprites/walking/right/p2_walk${i}.png`;
            let imgl = new Image();
            imgl.src = `./assets/Player_sprites/walking/left/p2_walk${i}.png`;
            this.walkingRightSpriteImgs.push(img)
            this.walkingLeftSpriteImgs.push(imgl)
        }
    }

    draw(ctx) {
        let drawImage = this.standingRightSprite;
        if (!this.isGrounded) {
            if (this.facingRight) {
                drawImage = this.jumpingRightSprite;
            } else {
                drawImage = this.jumpingLeftSprite;
            }
        } else if (this.isStopped) {
            if (this.facingRight) {
                drawImage = this.standingRightSprite;
            } else {
                drawImage = this.standingLeftSprite;
            }
        } else if (!this.isStopped) {
            if (this.facingRight)  {
                drawImage = this.walkingRightSpriteImgs[this.walkingFrame - 1];
            } else {
                drawImage = this.walkingLeftSpriteImgs[this.walkingFrame - 1];
            }
        }
        ctx.drawImage(
            drawImage,
            this.posX,
            this.posY,
            this.width,
            this.height,
        )
    }

    move(keysPressed) {
        // if (this.velocityY === 0) this.isJumping = false;
        this.velocityX = 0;
        this.isStopped = true;
        if (keysPressed['d'] || keysPressed['ArrowRight']) {
            this.facingRight = true;
            this.velocityX = 7;
        }
        if (keysPressed['a'] || keysPressed['ArrowLeft']) {
            this.facingRight = false;
            this.velocityX = -7;
        }
        
        if (this.velocityX != 0){
            this.isStopped = false
            if (this.walkingFrame < this.maxWalkingFrame) {
                if (this.skipFrame) this.walkingFrame++;
                this.skipFrame = !this.skipFrame;
            } else {
                this.walkingFrame = 1;
            }
            this.posX += this.velocityX;
            if (this.posX > this.maxXValue) {
                this.posX = this.maxXValue;
            } else if (this.posX < 0){
                this.posX = 0;
            }
        }

        // Jump /////////////////////////////////////////
        this.velocityY = -this.gravity;
        if (keysPressed[' ']) {
            this.isGrounded = false
            if(!this.isJumping){
                this.isJumping = true;
                this.jumpAcc = this.startingJumpAcc;
                this.jumpFrameDelay = 0;
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
                    this.posX -= oX;
                } else { //if (dX > 0) object came from the right
                    this.posX += oX;
                }
            } else {
                if (dY < 0){ // object came from the top
                    this.isGrounded = true;
                    if(this.jumpFrameDelay > 5){
                        this.isJumping = false;
                    } else {
                        this.jumpFrameDelay++;
                    }
                    this.posY -= oY;
                }
                else { // object came from the bottom
                    this.posY += oY;
                }
            } 
        }
    }

}

export default Player;