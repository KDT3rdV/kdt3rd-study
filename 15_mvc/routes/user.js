const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

// '경로설정' = 라우팅
// 기본설정: localhost:PORT/user

// GET / => localhost:PORT/user/
router.get("/", controller.user);

module.exports = router;
