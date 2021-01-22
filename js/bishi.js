//评测题目: 无
// 1、实现一个 normalize 函数，能将输入的特定的字符串转化为特定的结构化数据。

// 字符串仅由小写字母和[,]组成，且字符串不会包含多余的空格。
// 示例一: 'abc' --> {value: 'abc'}
// 示例二：'[abc[bcd[def]]]' -> {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}

// 第1题
function normalize(str) {
  if (!str || typeof str != "string") {
    throw new Error("请输入字符串");
  }
  let res = {};

  const firstPos = str.indexOf("[");
  const lastPos = str.lastIndexOf("]");
  if (firstPos >= 0 && lastPos) {
    // 如果是正常的嵌套，先找最外层
    if (firstPos === 0 && lastPos === str.length) {
      // 去掉首尾方括号
      str = str.substring(1, lastPos - 1);

      // 第一个方括号位置
      const innerPos = str.indexOf("[");
      // 获取key
      let tmpKey = str.substring(0, innerPos);
      res.value = tmpKey;
      res.children = normalize(str.substring(innerPos));
    }
    // 比如 abc[abc]
    else {
      res.value = str.substring(0, firstPos);
      res.children = normalize(str.substring(firstPos));
    }
  }
  // 不包含中括号的场景
  else {
    res.value = str;
  }
  return res;
}

// 2、实现一个金额展示格式化的函数 formatAmount，金额展示规则为整数部分每三位用逗号分割，
// 小数部分展示两位。输入数据不是数字时返回 "-"。

// 举例：
// formatAmount(2688) => "2,688.00"
// formatAmount("2e6") => "2,000,000.00"
// formatAmount(-2.33333333) => "-2.33"
// formatAmount("Alibaba") => "-"

// 第2题
function formatAmount(n) {
  // if (typeof n != "number") return "_";
  // // n 有值且包含了 e
  // if (n && ("" + n).indexOf("e")) {
  //   let tmpArr = ("" + n).split("e");
  //   if (tmpArr.length == 2) {
  //     n = +tmpArr[0] * Math.pow(10, +tmpArr[1]);
  //   } else {
  //     return "_";
  //   }
  // }
  // if (n === 0) return "0";
  // if (n == "") return "_";
  let isFushu = false;
  if (n < 0) {
    isFushu = true;
    n = -n;
  }

  // 数字转字符串
  n = "" + n;

  let result;
  let cache = [];
  // 判断是否为小数
  if (n.indexOf(".") > -1) {
    let tmp = n.split(".");
    let left = tmp[0];
    let right = tmp[1];
    // 处理整数部分
    handleInt(left);
    right = right.substring(0, 2); // 保留两位小数
    result = cache.reverse().join(",") + "." + right;
  }
  // 处理整数
  else {
    handleInt(n);
    result = cache.reverse().join(",") + "." + "00";
  }

  function handleInt(m) {
    m = "" + m;
    if (m.length <= 3) cache.push(m);
    // 大于 1000 的数
    while (m.length > 3) {
      console.log(m);
      // 取模
      m = +m; // 转整数
      let tmp1 = m % 1000;
      let tmp2 = Math.floor(m / 1000);
      cache.push(tmp1);
      handleInt(tmp2);
    }
  }
  console.log(cache);
  return isFushu ? "-" + result : result;
}

console.log(formatAmount(101231));

// console.log(normalize("ads[23]"));
