var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  if (s.length === 1) return 1;
  let max = 1;
  let findId = false;
  for (let i = 0; i < s.length; i++) {
    let tmpStr = s.substring(i);
    if (findId) break;
    let cache = [];
    for (let j = 0; j < tmpStr.length; j++) {
      if (cache.includes(tmpStr[j])) {
        max = Math.max(j, max);
        findId = true;
        break;
      } else {
        cache.push(tmpStr[j]);
      }
    }
    if (!findId) {
      max = s.length;
    }
  }
  return max;
};

var s = "abcdabc";
var s1 = "bbbbb";
var s2 = "pwwkew";
var s3 = "abcabcbb";
var s4 = "au";
var count = lengthOfLongestSubstring(s2);
console.log("count", count);
