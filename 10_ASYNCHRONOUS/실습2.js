// setTimeout(function () {
//   document.body.style.backgroundColor = "red";
//   setTimeout(function () {
//     document.body.style.backgroundColor = "orange";
//     setTimeout(function () {
//       document.body.style.backgroundColor = "yellow";
//       setTimeout(function () {
//         document.body.style.backgroundColor = "green";
//         setTimeout(function () {
//           document.body.style.backgroundColor = "blue";
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

function randomColor(result) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.body.style.backgroundColor = result;
      resolve();
    }, 1000);
  });
}

let result = "red";
randomColor("red")
  .then(function () {
    return randomColor("orange");
  })
  .then(function () {
    return randomColor("yellow");
  })
  .then(function () {
    return randomColor("green");
  })
  .then(function () {
    return randomColor("blue");
  })
  .catch(function () {
    console.log("실패");
  });
