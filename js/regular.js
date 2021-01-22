// 正则表达式
// * 匹配前一个表达式 0 次或多次。等价于 {0,}。
// + 匹配前面一个表达式 1 次或者多次。等价于 {1,}。
// ? 匹配前面一个表达式 0 次或者 1 次。等价于 {0,1}。
// . （小数点）默认匹配除换行符之外的任何单个字符。
// \d 匹配一个数字
// \D 匹配一个非数字
// \s 匹配一个空白字符，包括空格、制表符、换页符和换行符。
// \S 匹配一个非空白字符。
// \w 单字字符（字母、数字或者下划线）
// \W 非单字字符

// 1、var s1 = "get-element-by-id"; 给定这样一个连字符串，写一个function转换为驼峰命名法形式的字符串 getElementById
// 在返回前，替换函数允许匹配片段作为参数，并且将它和连字符进行连接作为新的片段。
function strToCamel(str) {
  return str.replace(/-\w/g, (x) => {
    return x.slice(1).toUpperCase();
  });
}

var s1 = "get-element-by-id";
var res1 = strToCamel(s1);
console.log(res1);

// 2、判断字符串是否包含数字

function isContainsNumber(str) {
  return /\d/.test(str);
}
var s2 = "123adfa";
console.log(isContainsNumber(s2));

// 3. 判断电话号码
function isPhoneNumber(str) {
  const regx = /^1[345789]\d{9}$/;
  return regx.test(str);
}
var s3 = "19941243721";
console.log(isPhoneNumber(s3));

// 4、判断是否符合指定格式
// XXX-XXX-XXXX
// X 为number类型

// mine
function isRightStyle(str) {
  var regx = /^\d{3}-\d{3}-\d{4}$/;
  return regx.test(str);
}
// others
function matchesPattern(str) {
  return /^(\d{3}-){2}\d{4}$/.test(str);
}

var s4 = "123-345-0009";
console.log(matchesPattern(s4));

// 5、判断是否符合USD格式
// 给定字符串 str，检查其是否符合美元书写格式
// 以 $ 开始
// 整数部分，从个位起，满 3 个数字用 , 分隔
// 如果为小数，则小数部分长度为 2
// 正确的格式如：$1,023,032.03 或者 $2.03，错误的格式如：$3,432,12.12 或者 $34,344.3**
function isUSD(str) {
  var regx = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;
  return regx.test(str);
}
var s5 = "$12,123";
console.log(`s5 is ${isUSD(s5)}`);

// 6. js 实现千位分隔符
function format(number) {
  var regx = /\d{1,3}(?=(\d{3})+$)/g; // 匹配 \d{1,3} 仅当后面跟着三位数以上
  return (number + "").replace(regx, "$&,"); // $&表示与regx相匹配的字符串
}

var s6 = 12345;
console.log(format(s6));

// 7. 获取url参数
// 指定参数名称，返回该参数的值 或者 空字符串
// 不指定参数名称，返回全部的参数对象 或者 {}
// 如果存在多个同名参数，则返回数组
function getUrlParam(url, key) {
  var arr = {};
  url.replace(/\??(\w+)=(\w+)&?/g, function (match, matchKey, matchValue) {
    console.log(match);
    console.log(matchKey);
    console.log(matchValue);
    // 如果已经有key的值，则存为数组
    if (!arr[matchKey]) {
      arr[matchKey] = matchValue;
    } else {
      var temp = arr[matchKey];
      arr[matchKey] = [].concat(temp, matchValue);
    }
  });
  if (!key) {
    return arr;
  } else {
    for (ele in arr) {
      if ((ele = key)) {
        return arr[ele];
      }
    }
    return "";
  }
}

var s7 = "http://a.b.com?name=heizi&name";
console.log(getUrlParam(s7));

// 8. 验证邮箱
function isEmail(str) {
  var regx = /^([\w\-])+@([\w\-])+\.([\w\-])+$/;
  return regx.test(str);
}

var s8 = "hutao-0601@1adf27.c-om";
console.log(isEmail(s8));

// 9. 身份证号码
function isPersonId(str) {
  const regx = /^\d{15}$|^\d{18}$|^\d{17}(\d|x|X)$/;
  return regx.test(str);
}
var s9 = "50023519890909001x";
console.log(isPersonId(s9));

// 10. 匹配汉字
function isChineseWord(str) {
  const regx = /^[\u4e00-\u9fa5]{1,}$/;
  // const regx = /^[\u4E00-\u9FA5]{2,4}$/;
  return regx.test(str);
}
var s10 = "啊";
console.log(isChineseWord(s10));

// 11. 去除首尾的 ’/‘ 符号
function deleteItaticMark(str) {
  const regx = /^\/+|\/+$/g;
  return str.replace(regx, "");
}
var s11 = "/adfafsa//";
console.log(deleteItaticMark(s11));

// 12. 判断是否符合日期格式 'xxxx-xx-xx'
function isRightDateFormat(str) {
  const regx = /^\d{4}-\d{2}-\d{2}$/;
  return regx.test(str);
}
const s12 = "1234-56-78";
console.log(isRightDateFormat(s12));

// 13. 严格判断时间格式
var regx13 = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/;

// 14. ipv4地址
var regx14 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

// 15. 十六进制颜色
var regx15 = /^([a-zA-Z0-9]{6}|[a-zA-Z0-9]{3})$/g;
// 这里必须加括号，否则会识别为左右两部分，左边为：/^[a-zA-Z0-9]{6}/，右边为 /[a-zA-Z0-9]{3})$/
var s15 = "a111";
// console.log(s15.match(s15));
console.log(`s15 is ${regx15.exec(s15)}`);

// 16. 车牌号正则
var regx16 = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;

// 17. 过滤 html 标签
var str17 = "<p>dasdsa</p>nice <br> test</br>";
var regx17 = /<[^<>]+>/g; // 除去非尖括号内容
console.log(`str17 is ${str17.replace(regx17, "")}`);

// 18. 密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
var regx18 = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;

// 19. 匹配 url
var regx19 = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

// 20. 匹配浮点数
// 需要考虑几种场景 0 0.0 .0 0.0
var regx20 = /^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$/;

// 21. <OPTION value="待处理">待处理</OPTION>
// 写一个正则表达式,匹配 "<OPTION value="待处理">"
var str21 = '<OPTION value="待处理">待处理</OPTION>';
var regx21 = /^<.*?>/;
var res21 = regx21.exec(str21);
console.log(str21.match(regx21));
