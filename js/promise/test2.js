// var p = new Promise((resolve, reject) => {
//   resolve("good");
// });
// p.then((x) => console.log("x:1", x));
// p.then((x) => console.log("x:2", x));

var p1 = new Promise(function (resolve, reject) {
  // resolve(3);
  reject(4);
});
var p2 = new Promise(function (resolve, reject) {
  resolve(p1);
  // reject(4);
});
p2.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});
