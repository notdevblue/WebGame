let canvas = document.querySelector("#gameCanvas");
let ctx = canvas.getContext("2d");

// let up = false;
// let down = false;
// let left = false;
// let right = false;

let keyArray = [];




document.addEventListener("keydown", function (e) {
    {// switch (e.keyCode) {
        //     case 37:
        //         left = true;
        //         break;
        //     case 38:
        //         up = true;
        //         break;
        //     case 39:
        //         right = true;
        //         break;
        //     case 40:
        //         down = true;
        //         break;
        // }
    }
    keyArray[e.keyCode] = true;
})

document.addEventListener("keyup", function (e) {
    {// switch (e.keyCode) {
        //     case 37:
        //         left = false;
        //         break;
        //     case 38:
        //         up = false;
        //         break;
        //     case 39:
        //         right = false;
        //         break;
        //     case 40:
        //         down = false;
        //         break;
        // }
    }
    keyArray[e.keyCode] = false;

})


let x = 0;
let y = 0;

let speed = 200;
let espeed = 200;
let eespeed = 100;

let width = 40;
let height = 40;
//let speed = 200;

let ex = 50;
let ey = 60;
let eWidth = 30;
let eHeight = 100;

let eex = 400;
let eey = 50;
let eeWidth = 100;
let eeHeight = 100;

let img = new Image();
img.src = "/Han.jpg";

let enemyList = [
    { x: 50, y: 60, w: 30, h: 60 },
    { x: 50, y: 60, w: 30, h: 60 },
    { x: 50, y: 60, w: 30, h: 60 },
    { x: 50, y: 60, w: 30, h: 60 }
];

function update() {

    {// if (up) {
        //     y -= speed;
        // }
        // if (down) {
        //     y += speed;
        // }
        // if (left) {
        //     x -= speed;
        // }
        // if (right) {
        //     x += speed;
        // }
    }

    let tempx = x;
    let tempy = y;

    if (keyArray[37]) {
        x -= speed * 1 / 60;
    }
    if (keyArray[38]) {
        y -= speed * 1 / 60;
    }
    if (keyArray[39]) {
        x += speed * 1 / 60;
    }
    if (keyArray[40]) {
        y += speed * 1 / 60;
    }

    if (x < 0) {
        x = 0;
    }
    if (x > 960 - width) {
        x = 960 - width;
    }
    if (y < 0) {
        y = 0;
    }
    if (y > 480 - height) {
        y = 480 - height;
    }



    // if ((x > eex - width) && (x < eex + eWidth) && (y > eey - height) && (y < eey + eHeight)) {
    //     // x = tempx;
    //     // y = tempy;
    //     x = 0;
    //     y = 0;
    // }
    if ((x > ex - width) && (x < ex + eWidth) && (y > ey - height) && (y < ey + eHeight)) {
        // x = tempx;
        // y = tempy;
        if (ex < x + width) {
            x = ex - width;
        }
        if (ex > x - eWidth)
            x = ex + eWidth;
    }


    // if ((y > ey - height) && (y < ey + eHeight) && (x > ex - width) && (x < ex + eWidth)) {
    //     // x = tempx;
    //     // y = tempy;
    //     y = 0;
    // }

    // if ((x >= ex - width) && (x <=  ex + eWidth)) {
    //     if ((y >= ey - height)) {
    //         y = ey - height;
    //     }
    //     else if ((y <= ey + eHeight)) {
    //         y = ey + eHeight
    //     }
    // }

    {//Pingpong
        if (ey >= 480 - eHeight) {
            ey = 479 - eHeight;
            espeed *= -1;
        }
        if (ey <= 0) {
            espeed *= -1;
        }
        ey += espeed * (1 / 60);

        if (eey >= 480 - eeHeight) {
            eey = 479 - eeHeight;
            eespeed *= -1;
        }
        if (eey <= 0) {
            eespeed *= -1;
        }
        eey += eespeed * (1 / 60);
    }
}

function render() {
    ctx.clearRect(0, 0, 960, 480);
    ctx.drawImage(img, x, y, width, height);

    ctx.fillStyle = "rgba(255,0,0,1)";
    ctx.fillRect(ex, ey, eWidth, eHeight);

    ctx.fillStyle = "rgba(255,0,0,1)";
    ctx.fillRect(eex, eey, eeWidth, eeHeight);
}

setInterval(function () {
    update();
    render();
    console.log("1초가 지났습니다.");
}, 1000 / 60);
