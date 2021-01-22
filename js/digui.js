// 自己实现
function jiecheng(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * jiecheng(n - 1);
  }
}

// 书中
function factorial(n) {
  if (1 === n || 0 === n) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
