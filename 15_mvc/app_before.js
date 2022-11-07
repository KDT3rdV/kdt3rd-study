const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// (임시) DB로 부터 댓글 목록을 받아옴
// 배열: 전체 댓글
// 각 객체: 댓글 하나
const comments = [
  {
    id: 1,
    userid: "helloworld",
    date: "2022-10-31",
    comment: "안녕하세요~^^",
  },
  {
    id: 2,
    userid: "hihi",
    date: "2022-11-01",
    comment: "헬로우",
  },
  {
    id: 3,
    userid: "안녕",
    date: "2022-11-02",
    comment: "반가워요",
  },
  {
    id: 4,
    userid: "sawadicap",
    date: "2022-11-07",
    comment: "처음와요",
  },
];

// 함수 선언
// 1) 명시적 함수 선언
// function func_name() { ... }
// 2) 함수 표현식
// const var_name - function () { ... }

// 2 변형) 화살표 함수
// : 함수 표현식을 더 단순하게 작성해보자!
// const f = () => { ... }

// GET / : [댓글 목록 보기] 이동 링크 걸려있음
app.get("/", (req, res) => {
  res.render("index");
});

// GET /comments : 댓글 전체 목룍 확인할 수 있음
app.get("/comments", (req, res) => {
  console.log(comments); // 댓글 목록 확인용
  // { commentInfos: [{}, {}, {}, {}] }
  res.render("comments", { commentInfos: comments });
});

// GET /comment/:id : 각 댓글을 자세히 볼 수 있음
app.get("/comment/:id", (req, res) => {
  // { id : '/comment/뒤에 사용자가 입력한 값'}이 출력됨
  console.log(req.params); // 라우트 매개변수(:id)에 대한 정보 담겨있음
  console.log(req.params.id); // id값 추출

  const commentId = req.params.id; // 댓글 id: url로 들어온 매개변수
  // comments = [{}, {}, {}, {}]
  console.log(comments[commentId - 1]); // 댓글 목록에서 특정 댓글 정보 추출

  // 1. 존재하지 않는 댓글 id X (0, 음수, 댓글 배열 길이보다 큰 값)
  if (commentId < 1 || commentId > comments.length) {
    // res.send("잘못된 접근입니다!");
    return res.render("404");
  }

  // 2. :id - 숫자가 아닌 것이 들어오면 X
  if (isNaN(commentId)) {
    // (5 > 3) // true
    // res.send("잘못된 접근입니다!");
    return res.render("404");
  }
  res.render("comment", { commentInfo: comments[commentId - 1] });
});

// [404 Error]
// 맨 마지막 라우트로 선언
// 그렇지 않으면 나머지 코드 무시됨
// *: all
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
