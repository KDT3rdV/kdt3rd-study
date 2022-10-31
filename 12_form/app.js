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

app.get("/getForm", function (req, res) {
  // get 요청은 req.query 객체에 폼 정보가 전달
  console.log(req.query);
  //   res.send("get 요청 응답 성공");
  res.render("result", { title: "GET 요청 성공", userInfo: req.query });
});

app.post("/postForm", function (req, res) {
  // post 요청은 req.body 객체에 폼 정보가 전달
  console.log(req.body);
  //   res.send("post 요청 응답 성공");
  res.render("result", { title: "POST 요청 성공", userInfo: req.body });
});

app.get("/getForm2", function (req, res) {
  //   res.send("get2 요청 응답 성공");
  console.log(req.query);
  res.render("result2", { title: "GET2 요청 성공", userInfo: req.query });
});

app.post("/postForm2", function (req, res) {
  //   res.send("post2 요청 응답 성공");
  console.log(req.body);
  res.render("result2", { title: "POST2 요청 성공", userInfo: req.body });
});

app.post("/postForm3", function (req, res) {
  res.send("post3 요청 응답 성공");
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
    userInfo: req.body,
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
