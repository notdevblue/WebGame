let saveBtn = document.querySelector("#btnSave");
let loadBtn = document.querySelector("#btnLoad");
let openBtn = document.querySelector("#btnOpen");
let closeBtn = document.querySelector("#btnClose");

let nameInput = document.querySelector("#nameInput");
let scoreInput = document.querySelector("#scoreInput");
let wordInput = document.querySelector("#wordInput");
let rl = document.querySelector("#rankList");

//#region 팝업
let popup = document.querySelector("#popup")
openBtn.addEventListener("click", () => {
    popup.classList.add("on");
    window.open("https://www.naver.com", "location=false", "fullscreen=true");
});
closeBtn.addEventListener("click", () => {
    popup.classList.remove("on");
});
//#endregion


saveBtn.addEventListener("click", function() {
    let list = localStorage.getItem("list");

    if (list == null) {
        list = []; // 리스트에 새 배열 생성
    } else {
        list = JSON.parse(list);
    }

    let obj = {
        name: nameInput.value,
        score: scoreInput.value * 1, // 숫자가 됨 (C# 처럼)
        msg: wordInput.value
    }

    list.push(obj);

    localStorage.setItem("list", JSON.stringify(list));

    nameInput.value = "";
    scoreInput.value = "";
    wordInput.value = "";
});

loadBtn.addEventListener("click", function() {

    let list = localStorage.getItem("list");
    if (list == null) {
        list = [];
    } else {
        list = JSON.parse(list);
    }

    rl.innerHTML = "";
    for (let i = 0; i < list.length; ++i) {
        let div = document.createElement("div");
        div.innerHTML = `
        <span>${list[i].name}</span>
        <span>${list[i].score}</span>
        <span>${list[i].msg}</span>
        `;

        rl.appendChild(div);
    }

    // nameInput.value = str.name;
    // scoreInput.value = str.score;
    // wordInput.value = str.msg;


});