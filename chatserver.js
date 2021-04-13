const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const app = new express();
const server = http.createServer(app);
const path = require('path');

const io = socketio(server); // 서버에 소켓이 붙음

app.use(express.static('public')); // jpg 같은 파일들을 public 폴더를 뒤지게 함
// 미들웨어. 요청이 서버에 도착하기 전에 여기서 실체가 있는 파일들 (jpg...)을 'public' 폴더에서 찾아서 보내줌 (변화 없는 정적 파일)
// 만약 없다면 서버로 요청을 넘겨준다

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html")); // 해당 os 마다 / \ $... 를 바꿔줌
});

// io = 서버의 모든 소켓을 관리하는 객체
io.on("connection", socket => {
    console.log(socket.id);
    socket.on("chat", data => {
        // data => {msg:"asdfg", nickname:"오"}
        let { msg, nickname } = data; // 구조 분해 할당

        io.emit("chat", { sender: socket.id, msg, nickname });

    })
});


server.listen(56789, () => {
    console.log("서버가 56789 포트에서 돌아가고 있습니다.");
});

// callback = 작업이 끝나면 실행됨