class Player {
    //code.gondr.net  => 86
    constructor(x, y) {
        this.speed = 150;
        this.sprite = new Image();
        this.sprite.src = "/images/mario.png";
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

    update(delta) {
        // console.log(this);
        let tx = this.targetX;
        let ty = this.targetY;
        let x = this.x;
        let y = this.y;


        let dx = tx - x;
        let dy = ty - y;
        let d = Math.sqrt(dx * dx + dy * dy);

        let vx = 0;
        let vy = 0;

        if (d > 1) {
            vx = dx / d;
            vy = dy / d;
        }

        this.x += vx * this.speed * delta;
        this.y += vy * this.speed * delta;

        // this.x = this.targetX;
        // this.y = this.targetY;



    }

    render(ctx) {
        ctx.drawImage(this.sprite, this.x, this.y, this.w, this.h);
    }

    checkCol() {

    }
}