// 高频事件触发，但在 n 秒内只会执行一次
function throttle(fn, time) {
  let trigger = false;
  return function () {
    if (trigger) return;
    trigger = true;
    fn();
    setTimeout(() => {
      trigger = false;
    }, time);
  };
}
