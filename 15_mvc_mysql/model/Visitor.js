const { query } = require("express");
const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost", // ip주소
  user: "user", // mysql접속할때 root로 들어가니까 root 다르게 들어가면 다른것을 하면됨
  password: "!qngml0172", // DB접속 비밀번호
  database: "kdt", // DB이름
});

exports.getVisitors = (callback) => {
  //  begore
  //   return [
  //     { id: 1, name: "홍길동", comment: "내가 왔다" },
  //     { id: 2, name: "이찬혁", comment: "으라차차" },
  //   ];
  //  after - mysql연결
  // query(SQL, callback)
  conn.query("SELECT * FROM visitor", (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("Visitor.js", rows); // [{},{},{},{}]
    callback(rows);
  });
};

exports.postVisitor = (data, callback) => {
  // data: 사용자가 폼에 입력한 정보
  conn.query(
    `INSERT INTO visitor (name, comment) VALUES('${data.name}', '${data.comment}')`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      console.log("Visitor.js", rows);
      callback(rows.insertId);
    }
  );
};

// exports.patchVisitor = () => {};

exports.deleteVisitor = (id, callback) => {
  // id: 사용자가 삭제버튼을 클릭한 그 행의 id 값
  console.log("id: ", id);
  conn.query(`DELETE FROM visitor WHERE id=${id}`, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("Visitor.js: ", rows);
    callback(true); // true : 삭제 성공을 의미
  });
};
