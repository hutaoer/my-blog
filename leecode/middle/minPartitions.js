// https://leetcode-cn.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/submissions/
var minPartitions = function(n) {
  var tmp = Array.from(n + '')
  tmp.map(x => +x)
  return Math.max(...tmp)
};

// 取字符串中最大的值即可