/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs) return "";
  const strsLen = strs.length;
  let cmn = "";
  let isOver = false;
  let cache = [];
  let cmnPos = 0;
  while (!isOver) {
    for (let i = 0; i < strsLen; i++) {
      const tmp = strs[i];
      const tmpStr = tmp[cmnPos]; // 取第 cmnPos 位置的 字符

      if (i === 0) {
        cache[cmnPos] = tmpStr; // 设置缓存字符
        continue;
      }

      if (tmpStr != cache[cmnPos]) {
        isOver = true;
      }
      if (tmpStr === undefined) {
        isOver = true;
      }
    }
    if (isOver) break;
  }
  console.log(cache);
};

var testVal = ["a", "b"];
longestCommonPrefix(testVal);
