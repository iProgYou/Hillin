class Player {
    constructor(playerData) {
        this.pos = playerData["pos"];
        this.isJumping = false;
        this.accel = [0,0];
        this.velocity = [0,0];
        this.maxVelocity = 100;
        console.log(this.maxVelocity)
        this.friction = 0.2;
        // this.height = playerData["height"];
        // this.width = playerData["width"];
        this.color = playerData["color"];
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(...this.pos,20,40);
        ctx.stroke();
    }

    move(keysPressed) {
        if (keysPressed['d']) {
            this.pos[0] += 7;
        }
        if (keysPressed['a']) {
            this.pos[0] -= 7;
        }
        if (keysPressed['w']) {
            if (!this.isJumping) {
                this.jump()
            }
        }
        // if (keysPressed['d']) {
        //     this.accel[0] = 1;
        // }
        // if (keysPressed['a']) {
        //     this.accel[0] = -1;
        // }
        // if (keysPressed['w']) {
        //     if (!this.isJumping) {
        //         this.jump()
        //     }
        // }
        // this.velocity[0] += this.accel[0]
        // if(this.velocity[0] > this.maxVelocity){
        //     this.velocity[0] = this.maxVelocity;
        // } else if(this.velocity[0] < -this.maxVelocity) {
        //     this.velocity[0] = -this.maxVelocity;
        // }

        // this.velocity[1] += this.accel[1]

        // this.pos[0] += this.velocity[0]
        // this.pos[1] += this.velocity[1]
    }

    checkCollision() {

    }

    jump() {

        this.isJumping = false;
    }
}

export default Player;