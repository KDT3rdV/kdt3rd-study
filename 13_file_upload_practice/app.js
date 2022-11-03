const express = require("express");
const app = express();
const PORT = 8000;

// multer 설정
const multer = require("multer");
const { userInfo } = require("os");
const path = require("path");
const upload = multer({
  dest: "uploads/",
});
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      // req: 요청에 대한 정보
      // file: 파일에 대한 정보
      // done(에러, 저장경로): 함수
      done(null, "uploads/"); // 경로설정
    },
    filename(req, file, done) {
      // req: 요청에 대한 정보
      // file: 파일에 대한 정보
      // done(에러, 저장경로): 함수
      const ext = path.extname(file.originalname); // file.originalname에서 '확장자' 추출

      console.log(file.originalname); // fruits1.jpg
      console.log(ext); // .jpg
      console.log(path.basename(file.originalname, ext)); // path.basename('fruits1.jpg', '.jpg') => 'fruits1'

      done(null, req.body.id + Date.now() + ext);
      // [파일명+현재시간.확장자] 이름으로 바꿔서 파일 업로드
      // 현재시간: 파일명이 겹치는 것을 막기 위함
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.set("view engine", "ejs");

app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //
app.use("/uploads", express.static(__dirname + "/uploads"));

app.get("/", function (req, res) {
  res.render("index", {
    title: "파일 업로드를 배워보자",
  });
});

app.post("/upload", uploadDetail.single("image"), function (req, res) {
  console.log(req.file);
  console.log(req.body);

  res.render("result", { userInfo: req.body, image: req.file });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
