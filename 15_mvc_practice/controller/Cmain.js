const login = require("../model/login");
const userInfos = login.userInfos;
const personal = login.userInfos.split("\n");
console.log(login);

exports.main = (req, res) => {
  res.render("index", { title: "동적 폼 실습" });
};

exports.practice30 = (req, res) => {
  // console.log(login.userInfo());
  console.log(req.body);
  // console.log(login);
  console.log(personal);
  console.log(login.userInfos);

  // DB로부터 받아온 id, pw vs. 사용자가 폼에 입력한 id, pw
  // if (login.userInfo().realId === req.body.userId && login.userInfo().realPw === req.body.userPw) {
  //   res.send({ userInfo: req.body, isSuccess: true });
  // } else {
  //   res.send({ isSuccess: false });
  // }
  for (let i = 0; i < userInfos.length; i++) {}
};
