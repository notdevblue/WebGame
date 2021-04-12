const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

let titleId = process.argv[2];
let start = process.argv[3];
let end = process.argv[4];

let url = [end - start * 1];
for (let i = 0; i <= end - start * 1; ++i) {
    url[i] = `https://comic.naver.com/webtoon/detail.nhn?titleId=${titleId}&no=${start * 1 + i * 1}`;
    console.log(url[i]);
}

fs.mkdirSync(titleId, 0777);
// url = 해당 페이지로 가서 모든걸 긁어옴
// res = 바이트 스트림
// body = HTML 페이지


for (let i = 0; i <= end - start * 1; ++i) {

    request(url[i], function(err, res, body) {
        let $ = cheerio.load(body); // 변수 이름이 $임
        let list = $(".wt_viewer > img");

        fs.mkdirSync(titleId + "/" + (start * 1 + i * 1) + "/", 0777);

        for (let j = 0; j < list.length; ++j) {
            let src = list.eq(j).attr("src");
            download(src, `${j}.jpg`, i);
        }
    });
}

function download(src, filename, i) {
    let option = {
        method: "GET", // GET(받기), POST (전송), PUT(수정), DELETE(삭제)
        uri: src,
        headers: { "User-Agent": "Mozilla/5.0" },
        encoding: null
    };
    request(option).pipe(fs.createWriteStream(titleId + "/" + (start * 1 + i * 1) + "/" + filename));
}