class Game {
    constructor(canvas) {
        this.objectList = [];

        let img = new Image();
        img.src = "/Player.jpg";
        let p = new Player(220, 740, 70, 50, 60, img);
        let roundedTime;
        this.objectList.push(p);

        for (let i = 0; i < 50; ++i) {
            this.objectList.push(new Poop());
        }

        this.gameOver = false;
        this.time = 20.34;

        this.ctx = canvas.getContext("2d");

        setInterval(() => {
            this.update();
            this.render(this.ctx);
        }, 1000 / 60);
    }

    update() {
        if (this.gameOver) return;
        if (this.time <= 0) return;


        this.objectList.forEach(item => item.update());

        let p = this.objectList[0];
        for (let i = 1; i < this.objectList.length; ++i) {
            if (p.checkCol(this.objectList[i])) {
                this.gameOver = true;
                break;
            }
        }
        this.time -= 1 / 60;
        this.roundedTime = Math.round(this.time * 100.0) / 100.0;
    }

    render(ctx) {
        if (this.gameOver) return;
        if (this.time <= 0) return;
        this.ctx.clearRect(0, 0, 500, 800);
        this.ctx.fillStyle = "#000";
        this.ctx.font = "25px Arial";
        ctx.fillText(this.roundedTime, 350, 30);
        this.objectList.forEach(item => item.render(this.ctx));
    }
}