var a = [1, 2, 3];
// var p = a.map((x) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(x);
//     }, 1000);
//   });
// });

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// (function () {
//   a.map(async (x) => {
//     console.log(x);
//     await sleep(1000);
//   });
// })();

// for (let i = 0; i < p.length; i++) {
//   p[i]();
// }

// 链式调用
const oneToThree = () => {
  const arr = [1, 2, 3];
  arr.reduce((prev, next) => {
    return prev.then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(next);
          resolve();
        }, 1000);
      });
    });
  }, Promise.resolve());
};

// oneToThree();

Promise.myAll = function (arr) {
  let count = 0;
  let len = arr.length;
  let cache = [];
  return new Promise((resolve, reject) => {
    for (let i = 0; i < len; i++) {
      Promise.resolve(arr[i])
        .then((d) => {
          cache[i] = d;
          count++;
          if (count === len) {
            resolve(cache);
          }
        })
        .catch((e) => {
          reject(e);
        });
    }
  });
};

var promise1 = Promise.resolve(3);
var promise2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 2000, "foo111");
});
var promise3 = 42;

Promise.all([promise1, promise2, promise3]).then(function (values) {
  console.log(values);
});

Promise.myRace = function (arr) {
  let len = arr.length;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < len; i++) {
      Promise.resolve(arr[i])
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    }
  });
};

Promise.race([promise1, promise2, promise3]).then(function (values) {
  console.log(values);
});

// var a = [2, 3, 4];
// for (let i in a) {
//   console.log(i);
// }
// for (let i of a) {
//   console.log(i);
// }
// var b = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// console.log(Object.keys(b));
