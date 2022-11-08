const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

// "경로 설정" = 라우팅
// 기본 경로: localhost:PORT/

// GET / => localhost:PORT/
router.get("/", controller.main);

// GET / => localhost:PORT/visitor
router.get("/visitor", controller.getVisitors); // 전체조회

// POST /visitor/write => localhost:PORT/visitor/write
router.post("/visitor/write", controller.postVisitor); // 하나추가

// DELETE /visitor/delete => localhost:PORT/visitor/delete
router.delete("/visitor/delete", controller.deleteVisitor); // 하나 삭제

// module.exports 를 통해서 router 등록
// -> 다른 파일에서도 사용 가능
module.exports = router;
