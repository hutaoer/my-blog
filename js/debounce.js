// 触发高频【事件后 n 秒内】函数只会执行一次
function debounce(fn, time) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, time);
  };
}
