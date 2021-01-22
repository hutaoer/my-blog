var a = new Array("a");
console.log(a);

// 数组前面插入一个元素, unshift
// unshift 可以一次插入多个值， array.unshift(a, b)
Array.prototype.insertFirstPosition = function (val) {
  const len = this.length;
  for (let i = len; i > 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = val;
};

// 数组前面移除一个元素, shift(去除)
// 数组结尾元素，删除一个元素，pop
// 从数组结尾处插入元素，push

// splice
var a = [5, 4, 3, 2, 1];
// a.splice(2, 2); // 删除从索引为2开始的2个元素 [5,3,1]

// 斐波那契数列

// reduce
// 回调函数第一次执行时，accumulator 和currentValue的取值有两种情况：如果调用reduce()时提供了initialValue，accumulator取值为initialValue，currentValue取数组中的第一个值；如果没有提供 initialValue，那么accumulator取数组中的第一个值，currentValue取数组中的第二个值。
// 如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供initialValue，从索引0开始。

// for ... of  forEach 都可以用来循环数组
// 使用@@iterator 对象
// fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
// copyWithin 将会拷贝到该位置，但不包括 end 这个位置的元素。如果是负数， end 将从末尾开始计算。
// 如果 end 被忽略，copyWithin 方法将会一直复制至数组结尾（默认为 arr.length）。
let iterator = a[Symbol.iterator]();
for (const n of iterator) {
  console.log(n);
}
const fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
// console.log(fibonacci);
let sum = 0;
for (let i = 1; i < 19; i++) {
  // console.log(fibonacci[i]);
  sum += fibonacci[i];
}
// console.log(sum);
// console.log(fibonacci.length);

function fibonacci1(n) {
  if (n == 0) return 0;
  else if (n == 1) return 1;
  else return fibonacci1(n - 1) + fibonacci1(n - 2);
}

// console.log(fibonacci1(20));

function fibonacci2(n) {
  var last = 1;
  var last2 = 0;
  var current = last2;
  for (var i = 1; i <= n; i++) {
    last2 = last;
    last = current;
    current = last + last2;
  }
  return current;
}
// console.log(fibonacci2(20));

function getUrlParam(sUrl, sKey) {
  const search = sUrl.split("?")[1];
  const kwStringArr = search.split("&");
  const kwObj = {};
  kwStringArr.map((item) => {
    const kw = item.split("=");
    const tmpKey = kw[0];
    const tmpVal = kw[1];
    if (kwObj[tmpKey]) {
      kwObj[tmpKey].push(tmpVal);
    } else {
      kwObj[tmpKey] = [tmpVal];
    }
  });

  if (!sKey) return kwObj;

  const matchVal = kwObj[sKey];
  if (matchVal.length) {
    if (1 === matchVal.length) {
      return matchVal[0];
    } else {
      return matchVal;
    }
  } else {
    return kwObj;
  }
}

var s = getUrlParam(
  "http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe",
  "key"
);
console.log(s);

// 不使用loop循环，创建一个长度为100的数组，并且每个元素的值等于它的下标。
const arr4 = new Array(100);
return [...arr4.keys()];
const arr5 = Array.from(Array(100).keys());
