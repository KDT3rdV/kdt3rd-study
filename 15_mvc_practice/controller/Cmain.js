const login = require("../model/login");
const users = login.users;
const personal = login.users.split("\n");
const user = login.users.split("//");
console.log("0: ", login);

exports.main = (req, res) => {
  res.render("index", { title: "동적 폼 실습" });
};

exports.practice30 = (req, res) => {
  // console.log(login.userInfo());
  console.log("1: ", req.body);
  // console.log(login);
  console.log("2: ", personal);
  console.log("3: ", login.users);
  console.log("4: ", users.length);
  console.log("5: ", personal[0]);
  console.log("5: ", user[0]);

  // DB로부터 받아온 id, pw vs. 사용자가 폼에 입력한 id, pw
  // if (login.userInfo().realId === req.body.userId && login.userInfo().realPw === req.body.userPw) {
  //   res.send({ userInfo: req.body, isSuccess: true });
  // } else {
  //   res.send({ isSuccess: false });
  // }
  for (let i = 0; i < users.length; i++) {
    if (
      user[3 * i + 1] === req.body.userId &&
      user[3 * i + 2] === req.body.userPw
    ) {
      return res.send({ userInfo: users, isSuccess: true });
    } else {
      res.send({ isSuccess: false });
    }
  }
};
