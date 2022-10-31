// function call(name, cb) {
//   setTimeout(function () {
//     console.log(name);
//     cb(name);
//   }, 1000);
// }

// function back(cb) {
//   setTimeout(function () {
//     console.log("back");
//     cb("back");
//   }, 1000);
// }

// function hell(cb) {
//   setTimeout(function () {
//     console.log("hell");
//     cb("callback hell");
//   }, 1000);
// }

// call("kim", function (name) {
//   console.log(name + "반가워");
//   back(function (txt) {
//     console.log(txt + "을 실행했구나!");
//     hell(function (message) {
//       console.log("여기는" + message);
//     });
//   });
// });

function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = name;
      resolve(result);
      console.log(name);
    });
  }, 1000);
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = "back";
      console.log(result);
      resolve(result);
    });
  }, 1000);
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = "callback hell";
      resolve(result);
    });
  }, 1000);
}

call("kim")
  .then(function (result) {
    console.log(result + "반가워");
    return back(result);
  })
  .then(function (result) {
    console.log(result, "을 실행했구나!");
    return hell(result);
  })
  .then(function (result) {
    console.log("여기는", result);
  })
  .catch(function (err) {
    console.log("실패");
    console.log(err);
  });

// function goMart() {
//   console.log("마트에 가서 어떤 음료를 살지 고민한다.");
// }

// function pickDrink(callback) {
//   // pay
//   // *callback: 매개변수가 될 콜백함수
//   // 3초 고민하는 상황
//   setTimeout(function () {
//     console.log("고민끝");
//     product = "제로콜라";
//     price = 2000;
//     callback(product, price);
//   }, 3000);
// }

// // function pay(product, price) {
// //   console.log(`${product} 제품의 가격은 ${price}이다.`);
// // }

// let product;
// let price;
// goMart();
// // pickDrink(pay);
// pickDrink(function (product, price) {
//   console.log(`${product} 제품의 가격은 ${price}이다.`);
// });
