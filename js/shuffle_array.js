var a = [1, 2, 3, 4, 5, 6, 7];

// 方法1 不完全随机
// var b = a.sort(() => Math.random() - 0.5);

// 方法 2 比较值也随机生成
// var c = [];
// var c = a
//   .map((x, idx) => {
//     return (c[idx] = {
//       origin: x,
//       val: Math.random(),
//     });
//   })
//   .sort((a, b) => a.val - b.val)
//   .map((x) => x.origin);

// 方法三，每次产生一个随机数，将其作为索引，与最后一位数互换。

function shuffle(arr) {
  const len = arr.length;
  for (let i = len; i > 0; i--) {
    console.log("i", i);
    // const pos = Math.floor(Math.random() * (len - 1 - i)) + 1; // 保证最小值为 1
    const pos = Math.floor(Math.random() * i);
    console.log("pos", pos);
    const tmp = arr[i - 1]; // 数组长度为 len, 下标不能超过 len - 1
    arr[i - 1] = arr[pos];
    arr[pos] = tmp;
  }
}

// 方法四，从尾数开始往前
Array.prototype.shuffle = function () {
  var array = this;
  var m = array.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
};

shuffle(a);
console.log(a);
