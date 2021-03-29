class Poop {
    constructor() {
        this.x;
        this.y
        this.speed;
        this.r;
        this.color = "rgba(230,154,30,0.5)";
        this.reset();
    }

    reset() {
        this.color = "rgba(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() + ")";

        this.y = 0;
        this.x = Math.random() * 500;
        this.speed = 20 + Math.random() * 20; // 10 ~ 20
        this.r = 5 + Math.random() * 5;
    }

    update() {
        this.y += this.speed * 1 / 60;

        if (this.y >= 800 + this.r) {
            this.reset();
        }

    }

    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
    }
}