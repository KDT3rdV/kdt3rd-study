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
  res.render("index", {
    title: "폼 전송을 배워보자",
    desc: "여기는 설명",
    fin: "여기까지",
  }); // views/index.ejs 파일을 찾아서 클라이언트에게 "응답"
});

app.get("/practice", function (req, res) {
  res.render("practice", { title: "실습" });
});

app.get("/practice1", function (req, res) {
  res.render("practice1", {
    title: "실습26. get으로 정보받기",
    userInfo: req.query,
  });
});

app.get("/getPrac", function (req, res) {
  console.log(req.query);
  res.render("practiceresult1", {
    title: "실습26 폼 전송 완료!",
    userInfo: req.query,
  });
});

app.get("/practice2", function (req, res) {
  res.render("practice2", {
    title: "실습27. post으로 정보받기",
    userInfo: req.query,
  });
});

app.post("/postPrac", function (req, res) {
  console.log(req.body);
  res.render("practiceresult2", {
    title: "실습27 폼 전송 완료!",
    userInfo: req.body,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
