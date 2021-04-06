class Coin {
    constructor() {
        this.x;
        this.y;
        this.w;
        this.h;

        this.모르겠어요 = 0;
        this.완벽히이해했어 = 3;
        this.isSeonhwan = false;
        this.active = true;

        this.coinSprite = new Image();
        this.coinSprite.src = "/images/coin.png";
        this.seonhwan = new Image();
        this.seonhwan.src = "/images/image1.png";

        this.reset();
    }

    remove() {
        this.active = false;
    }

    reset() {
        this.w = this.h = 20 + Math.random() * 40;

        this.x = Math.random() * (600 - this.w);
        this.y = Math.random() * (400 - this.h);

        this.완벽히이해했어 = Math.random() * 4 + 1;
    }

    update(d) {
        if (!this.active) { return; }
        this.모르겠어요 += d;
        if (this.모르겠어요 >= this.완벽히이해했어) {
            this.모르겠어요 = 0;
            this.isSeonhwan = !this.isSeonhwan;
        }
    }

    checkCol(p) {
        if (!this.active) { return false; }
        let pr = p.w / 2;
        let dx = ((p.x + pr) - (this.x + this.w / 2));
        let dy = ((p.y + pr) - (this.y + this.h / 2));
        let d = Math.sqrt(dx * dx + dy * dy);
        return d <= pr + this.w / 2;
    }

    render(ctx) {
        if (!this.active) { return; }
        if (!this.isSeonhwan) {
            ctx.drawImage(this.coinSprite, this.x, this.y, this.w, this.h);
        } else {
            ctx.drawImage(this.seonhwan, this.x, this.y, this.w, this.h);
        }

    }
}