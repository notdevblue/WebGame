class Player {
    constructor(x, y, w, h, speed, sprite) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.w = w;
        this.h = h;
        this.sprite = sprite;

        this.input = new InputSystem();
    }

    limitSpace() {
        if (this.x <= 0) {
            this.x = 1;
        }
        if (this.x >= 500 - this.w) {
            this.x = 499 - this.w;
        }
        if (this.y <= 0) {
            this.y = 1;
        }
        if (this.y >= 800 - this.h) {
            this.y = 799 - this.h;
        }
    }

    update() {
        if (this.input.getkey(37)) {
            this.x -= this.speed * (1 / 60);
        }
        if (this.input.getkey(39)) {
            this.x += this.speed * (1 / 60);
        }
        if (this.input.getkey(38)) {
            this.y -= this.speed * (1 / 60);
        }
        if (this.input.getkey(40)) {
            this.y += this.speed * (1 / 60);
        }
        this.limitSpace();
    }

    render(ctx) {
        ctx.drawImage(this.sprite, this.x, this.y, this.w, this.h);
    }

    checkCol(poop) {
        let px = this.x + this.w / 2;
        let py = this.y + this.h / 2;
        let distance = Math.sqrt((poop.x - px) * (poop.x - py) + (poop.y - py) * (poop.y - py));

        return distance < poop.r + this.w / 2;
    }


}