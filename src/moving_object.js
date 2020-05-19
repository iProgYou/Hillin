class MovingObject {
    constructor(objectInfo) {
        this.pos = objectInfo["pos"];
        this.vel = objectInfo["vel"];
        this.color = objectInfo["color"];
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(...this.pos,20,40);
        ctx.stroke();
    }
};

export default MovingObject;