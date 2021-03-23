let btn = document.querySelector("#startBtn");

btn.addEventListener("click", function () { })
let canvas = document.querySelector("#gameCanvas");
let cp = document.querySelector("#colorPicker");
let ctx = canvas.getContext("2d");
let numbox = document.querySelector("#px");
let draw = document.querySelector("#drawRadio");
let remove = document.querySelector("#removeRadio");

/* ^-^ 코딩
// ctx.strokeStyle = "rgba(255,0,0,0.5)";
// ctx.strokeRect(20,20,100,100);
// ctx.fillStyle = "rgba(255,0,255,0.5)";
// ctx.fillRect(150,20,100,100);

ctx.beginPath();
ctx.moveTo(120,120);
ctx.lineTo(200,60);
ctx.lineTo(280,120);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(240,200);
ctx.lineTo(310,270);
ctx.lineTo(380,200);
ctx.closePath();
ctx.fill();
//ctx.stroke();

ctx.beginPath();
ctx.moveTo(340,120);
ctx.lineTo(420,60);
ctx.lineTo(500,120);
ctx.stroke();
*/

// canvas.addEventListener("click", function(e)
// {
//     console.log(cp.value);
//     console.log(e.offsetX, e.offsetY);
//     ctx.fillStyle = cp.value;
//     ctx.fillRect(e.offsetX, e.offsetY, 10, 10);
// });

let isDown = false;
let x = 0;
let y = 0;
//ctx.clearRect(x, y, 너비, 높이);
canvas.addEventListener("mousedown", function (e) {
    isDown = true;
    x = e.offsetX;
    y = e.offsetY;
    ctx.lineWidth = numbox.value;
    ctx.strokeStyle = cp.value;
    ctx.lineCap = "round";
});
canvas.addEventListener("mouseup", function (e) {
    isDown = false;
});
canvas.addEventListener("mousemove", function (e) {
    if (!isDown) return;
    if (draw.checked) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
    if (remove.checked) {
        ctx.clearRect(x, y, 5, 5);
    }

    x = e.offsetX;
    y = e.offsetY;
});
