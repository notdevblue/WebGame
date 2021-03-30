class Player {
    constructor(x, y) {
        this.speed = 120;
        this.sprite = new Image();
        this.sprite.src = "/mario.png";
        this.x = x;
        this.y = y;
        this.w = 20;
        this.h = 20;

        this.targetX = x;
        this.targetY = y;

    }

    setTarget(x, y) {
        this.targetX = x - this.w / 2;
        this.targetY = y - this.h / 2;
    }

    update(d) {
        // 순간이동 안 하게 해 보세요 (숙제)
        this.x = this.targetX;
        this.y = this.targetY;
        // this.x += this.speed * d;
        // if (this.x >= 600 - this.w || this.x <= 0) {
        //     this.speed *= -1;
        // }



    }

    render(ctx) {
        ctx.drawImage(this.sprite, this.x, this.y, this.w, this.h);
    }

    checkCol() {

    }
}