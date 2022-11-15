// 모듈
const express = require("express");
const bodyparser = require("body-parser")
const cors = require("cors")
const fs = require("fs")
const path = require("path")
const app  = express();

// html 뷰 엔진 사용하여 프론트 구축
app.set("views", "./src/views");
app.set("view engine", "ejs");

// 라우터(경로)
const home = require("./src/routes/home");

// 미들웨어 

// 1. 정적파일 선언
app.use(express.static(`${__dirname}/src/public`))
// 2. ctrl에서 bodyparser이 사용되었으므로 4번에서 home하위로 보내주기전에 먼저 선언해줘야한다. 
app.use(bodyparser.json()); // json 데이터를 파싱할수있게 해줌
// 3. url 설정
app.use(bodyparser.urlencoded({extended: true})); // url을 통해 전달되는 데이터의 한글, 공백등의 문작가 있을경우 인식하지 못하는 경우를 위해 사용
// 4. 사용자를 home의 index로 보내서 조건의 맞게 처리한다, 앞의 "/"는 최상위 디렉토리인데 여기서는 그냥 서버의 접속하면 home로 보낸다고 생각하면 될듯하다. 
// ./routes/home의 index.js와 소통
app.use(express.json())
app.use(cors())
app.use("/", home); 

// 서버 응답 = bin/www.js에 app 넘겨서 실행
module.exports = app;
