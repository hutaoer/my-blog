function f(url) {
  // 注意，如果有 hash 的，需要先清除掉
  var l = url.indexOf("?");
  if (l != -1) {
    var obj = {};
    var arr = url.substring(l + 1, url.length).split("&");
    for (var i = 0; i < arr.length; i++) {
      obj[arr[i].split("=")[0]] = arr[i].split("=")[1];
    }
    return obj;
  }
}
// console.log(f("http://s.weibo.com/weibo/Aralic?topnav=1&wvr=6"));

/**
 * --- 题目描述 ---
 *
 * 实现一个函数，可以对 url 中的 query 部分做拆解，返回一个 key: value 形式的 object
 *
 * --- 实例 ---
 *
 * 输入：'http://sample.com/?a=1&e&b=2&c=xx&d#hash'
 * 输出：{a: 1, b: 2, c: 'xx', d: ''}
 */

function getQueryObj(url) {
  // TODO
  let arr = url.split("?")[1].split("#")[0].split("&");
  const res = {};
  arr.forEach((e) => {
    const [key, value] = e.split("=");
    if (!value) {
      res[key] = "";
    } else {
      res[key] = value;
    }
  });
  return res;
}
