const login = require("../model/login");
const Id = login.userInfo().realId;
const Pw = login.userInfo().realPw;
console.log(login);

exports.main = (req, res) => {
  res.render("index", { title: "동적 폼 실습" });
};

exports.practice30 = (req, res) => {
  console.log(login.userInfo());
  console.log(req.body);
  console.log(login);

  if (Id === req.body.userId && Pw === req.body.userPw) {
    res.send({ userInfo: login.userInfo(), isSuccess: true });
  } else {
    res.send({ isSuccess: false });
  }
};
