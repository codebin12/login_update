const express = require("express");
const router = express.Router();
const ctrl = require("./ctrl")

// app.use("/", home); 에서 넘어오면 밑의 조건에 의해서 처리된다.

router.get ("/", ctrl.get_ejs.home) // get으로 "/"를 받으면 ctrl.get_ejs.home를 실행

router.get ("/login", ctrl.get_ejs.login) // get으로 "/login"를 받으면 ctrl.get_ejs.login를 실행

// post로 "/login"를 받으면 ctrl.process.login를 실행
router.post("/login", ctrl.process.login) // 로그인 버튼을 누르면 fetch에서 적어준 이부분으로 와서 ctrl.process.login을 실행한다.


module.exports = router;
