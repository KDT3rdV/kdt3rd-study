const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router();

console.log(controller);

// "경로 설정" = 라우팅

// GET / 기본 경로: localhost:PORT/
router.get("/", controller.main);

// POST / 기본 경로: localhost:PORT/practice30
router.post("/practice30", controller.practice30);

// module.exports 를 통해서 router 등록
// -> 다른 파일에서도 사용 가능
module.exports = router;
