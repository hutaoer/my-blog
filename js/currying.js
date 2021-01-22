// 把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数
function trueCurrying(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args);
  }

  return function (...args2) {
    return trueCurrying(fn, ...args, ...args2);
  };
}
