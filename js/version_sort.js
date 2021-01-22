var a = [
  "0.1",
  "0.1.1",
  "1.33.2",
  "1.33.3",
  "2.1.6",
  "1.0.7",
  "0.0.8",
  "1.1.1.1.1",
];
// 数据预处理
/**
 *
 * @param {author} heizi
 * @param {date} 2021-01-18
 * @returns
 */
// 将数据补全为 0 ，方便做比较
// function patchLeftZero(v, n) {
//   var vLen = (v + "").length;
//   if (vLen >= n) return v;
//   var zeroNum = n - vLen;
//   return Array(zeroNum).fill(0).join("") + v;
// }

// var aLen = a.length;
// var b = [];
// for (let i = 0; i < aLen; i++) {
//   let x = a[i];
//   let xItemArr = x.split(".");
//   let xItemArrLen = xItemArr.length;
//   let tmpItem;
//   for (let j = 0; j < xItemArrLen; j++) {
//     tmpItem += patchLeftZero(xItemArr[j], 2) + "";
//   }
//   b[i] = tmpItem;
// }

// 方法二，两两比较
// JS使用 '>' 运算符比较两个字符串大小时，会把字符串转换为ASCII码依次比较。
a.sort((a, b) => {
  let i = 0;
  const arr1 = a.split(".");
  const arr2 = b.split(".");

  while (true) {
    const s1 = arr1[i];
    const s2 = arr2[i++];

    if (s1 === undefined || s2 === undefined) {
      return arr2.length - arr1.length;
    }

    if (s1 === s2) continue;

    return s2 - s1;
  }
});
console.log(a.reverse());
