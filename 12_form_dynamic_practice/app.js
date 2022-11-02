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
    title: "동적 폼 실습",
  }); // views/dynamic.ejs 파일을 찾아서 클라이언트에게 "응답"
});

app.get("/practice29", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// db에서 가져왔다고 가정
const realId = "Laird V";
const realPw = "931119";

app.post("/practice30", function (req, res) {
  console.log(req.body);
  // req.body: 유저가 프론트에서 입력된 아이디/비번
  // 진짜 아이디/비번 변수로 저장되어
  // 유저가 입력한 아이디와 비번을 비교하는 로직
  // 진짜 아이디/비번 vs 사용자가 입력한 아이디/비번
  if (req.body.ID == realId && req.body.PW == realPw) {
    let content = {
      txt: `${realId}님! 로그인 성공!`,
      color: "blue",
    };
    res.send(content);
    // res.send ({userInfo: req.body, msg: '로그인 성공'})
  } else {
    let content = {
      txt: "아이디 또는 패스워드 오류",
      color: "red",
    };
    res.send(content);
    // res.send ({msg: '로그인 실패'})
  }
  // res.send({userInfo: req.body, msg: '오옹'})
  //   res.send(req.body);
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
