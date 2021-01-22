var reverse = function (x) {
  if (x === 0) return 0;
  var tmp;
  if (x < 0) {
    tmp = -x;
  }
  tmp = "" + x;
  tmp = tmp.split("").reverse().join("");
  tmp = parseInt(tmp, 10);
  if (x < 0) {
    tmp = 0 - tmp;
  }
  if (tmp >= -Math.pow(2, 31) && tmp <= Math.pow(2, 31) - 1) {
    return tmp;
  } else {
    return 0;
  }
};

var n = 123;
console.log(reverse(n));
