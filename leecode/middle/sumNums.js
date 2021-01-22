// https://leetcode-cn.com/problems/qiu-12n-lcof/
/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
  var arr = new Array(n + 1);
  arr.fill(0);
  return Object.keys(arr).reduce((p, c) => +p + +c);
};
