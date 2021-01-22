// var n = 123412433214.89;
var n = 10000;
// var n = 214.78;

/**
 * @author: heizi
 * @description: 2021-01-18
 */
function num2qianfenwei(n) {
  let left,
    t = [];
  let res;
  const splitArr = (n + "").split(".");
  let leftPart = splitArr[0];
  let rightPart = "";
  if (splitArr.length === 2) {
    rightPart = "." + splitArr[1];
  }
  const len = leftPart.length;
  const loopCount = Math.ceil(len / 3); // 3代表 3位数，即 1000
  if (loopCount) {
    for (let i = 0; i < loopCount; i++) {
      left = leftPart % 1000;
      res = (leftPart - left) / 1000;
      t.push(left);
      leftPart = res;
    }
    return t.reverse().join(",") + rightPart;
  } else {
    return n;
  }
}

var s = num2qianfenwei(n);
console.log(s);

// 使用 substring
function f(num) {
  if (typeof num != "number") return;
  num += "";
  const arr = num.split(".");
  let leftStr, rightStr;
  leftStr = arr[0];
  if (arr.length === 2) {
    rightStr = "." + arr[1];
  } else {
    rightStr = "";
  }
  let l = leftStr.length;
  let str = "";
  while (l > 3) {
    str += "," + leftStr.substring(l - 3, l);
    l -= 3;
  }
  str += leftStr.substring(0, l);
  return str + rightStr;
}

// const s1 = f(n);
// console.log(s1);

/**
 * @author: heizi
 * @description: 2021-01-19
 * @desc 纸币面值有 1、4、16、64 四种硬币，用1024元购买了 价格为 N （0 < N < 1024）的商品，他最少会收到多少个硬币
 */
function countCoins(n) {
  let count = 0;
  [64, 16, 4, 1].reduce((leftMoney, coin) => {
    console.log(leftMoney);
    // if (previous === 0) coutinue;
    count += Math.floor(leftMoney / coin);
    n = leftMoney % coin;
    return n;
  }, n);
  return count;
}

// const c = countCoins(65);
// console.log(c);

function minimumCoins(buy, money = 1024) {
  let coinCount = 0;
  [64, 16, 4, 1].reduce((leftMoney, coin) => {
    const count = Math.floor(leftMoney / coin);
    coinCount += count;

    return leftMoney - coin * count;
  }, money - buy);

  return coinCount;
}
// console.log(minimumCoins(0, 65));
