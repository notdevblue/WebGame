const http = require('http'); // #include, using 과 비슷함.
// http = 웹서버 => 기본적으로 요청과 응답이 있음

const server = http.createServer(function(req, res) {
    res.write("<h1>Hello node server</h1>");
    res.end("<p>미안하다.. 더이상 쓸게 없다</p>");
});

server.listen(56789);