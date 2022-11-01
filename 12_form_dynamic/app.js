const express = require("express");
const app = express();
const PORT = 8000;

// views 설정
app.set("view engine", "ejs");
// Middleware (미들웨어) 설정
// : 요청(req)과 응답(res)의 중간에서 작업
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // json 형태로 데이터를 전달받음

// Routing - 경로 설정
// - req(request) : 요청 (클라이언트 -> 서버)
// - res(response) : 응답 (서버 -> 클라이언트)
app.get("/", function (req, res) {
  // GET / (http://localhost:PORT)
  res.render("dynamic", {
    title: "동적 폼을 배워보자",
  }); // views/dynamic.ejs 파일을 찾아서 클라이언트에게 "응답"
});

// 1. ajax
// GET /ajax
app.get("/ajax", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// POST /ajax
app.post("/ajax", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// 2. axios
// GET /axios
app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// POST /axios
app.post("/axios", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// 3. fetch
// GET /fetch
app.get("/fetch", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// POST /fetch
app.post("/fetch", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
