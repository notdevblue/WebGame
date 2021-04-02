class Player {
    constructor(x, y) {
        this.speed = 120;
        this.sprite = new Image();
        this.sprite.src = "/mario.png";
        this.x = x;
        this.y = y;
        this.w = 20;
        this.h = 20;

        this.targetX = this.x;
        this.targetY = this.y;

        this.vector = 1;
        this.distanceX = this.targetX - this.x;
        this.distanceY = this.targetY - this.y;
    }

    setTarget(x, y) {
        this.targetX = x - this.w / 2;
        this.targetY = y - this.h / 2;
    }

    update(d) {
        console.log(this.targetX)

        this.distanceX = this.targetX - this.x;
        this.distanceY = this.targetY - this.y;
        this.vector = Math.sqrt(Math.pow(this.distanceX, 2) + Math.pow(this.distanceY, 2));

        this.x += this.vector / this.distanceX;
        this.y += this.vector / this.distanceY;


        // 순간이동 안 하게 해 보세요 (숙제)
        // this.x = this.targetX;
        // this.y = this.targetY;
    }

    render(ctx) {
        ctx.drawImage(this.sprite, this.x, this.y, this.w, this.h);
    }

    checkCol() {

    }
}