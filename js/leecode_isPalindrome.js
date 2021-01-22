/**
 * @description 判断是否回文数
 */

var isPalindrome = function (x) {
  if (x === 0) return true;
  if (x < 0) return false;
  var tmp = +(x + "").split("").reverse().join("");
  return x === tmp;
};
