class App {
    constructor() {
        this.player = new Player(290, 190);
        this.canvas = document.querySelector("#myGame");
        this.ctx = this.canvas.getContext("2d");
        this.gameOver = false;

        this.coinList = [];
        for (let i = 0; i < 10; ++i) {
            this.coinList.push(new Coin());
        }


        this.canvas.addEventListener("click", (e) => {
            this.player.setTarget(e.offsetX, e.offsetY);
        });

        setInterval(() => {
            this.update();
            this.render();
        }, 1000 / 60);
    }

    setGameOver() {
        alert("게임오버");
        this.gameOver = true;
    }
    setGameClear() {

    }

    update() {
        if (this.gameOver) { return; }
        this.player.update(1 / 60);
        for (let i = 0; i < this.coinList.length; ++i) {
            this.coinList[i].update(1 / 60);
            if (this.coinList[i].checkCol(this.player)) {
                if (this.coinList[i].isSeonhwan) {
                    this.setGameOver();
                } else {
                    this.coinList[i].remove();
                }
            }
        }

        let coinCnt = this.coinList.filter(x => x.active).length;
        // filter == 조건이 참인 것만 거름
        // x == 원소 (인듯 하다)

        if (coinCnt == 0) {
            this.setGameClear();
        }
    }

    render() {
        this.ctx.clearRect(0, 0, 600, 400);
        for (let i = 0; i < this.coinList.length; ++i) {
            this.coinList[i].render(this.ctx);
        }
        this.player.render(this.ctx);
    }


}