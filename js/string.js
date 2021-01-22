// 大写字母A-Z对应的ASCII码值是65-90
// 小写字母a-z对应的ASCII码值是97-122

// charAt() 方法从一个字符串中返回指定的字符。如果没有提供索引，charAt() 将使用0。
// charCodeAt() 方法返回 0 到 65535 之间的整数，表示给定索引处的 UTF-16 代码单元
// codePointAt() 方法返回 一个 Unicode 编码点值的非负整数。
// includes() 方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。
// padEnd()  方法会用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充。
// padStart() 方法用另一个字符串填充当前字符串(如果需要的话，会重复多次)，以便产生的字符串达到给定的长度。从当前字符串的左侧开始填充。
// slice() 方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。提取的新字符串包括beginIndex但不包括 endIndex。下面有两个例子。
// toLowerCase 转小写
// toUpperCase 转大写

var A = "A";
console.log(A.charCodeAt()); // 65
var a = "a";
console.log(a.charCodeAt()); // 97

var nA = 65;
// 两者都是将数值序列转换为String
// String.fromCharCode()最大支持16位的数字，而且ES中很早就开始支持，兼容性好。而String.fromCodePoint()可以多达21位数字，是ES6新加入的方法，是为了能够处理所有合法的Unicode( in order to deal with ALL legal Unicode values )，因为String.fromCharCode()并不够用。
console.log(String.fromCodePoint(nA));
console.log(String.fromCharCode(nA));

// JS使用 '>' 运算符比较两个字符串大小时，会把字符串转换为ASCII码依次比较。
var s1 = "1.0.0";
var s2 = "1.1";
var s3 = "1.0.0.1";
var arr = [s1, s2, s3];
var arr1 = ["0.5.1", "0.1.1", "2.3.3", "0.302.1", "4.2", "4.3.5", "4.3.4.5"];
// console.log(arr.sort());
console.log(arr1.sort());

var s4 = "fdasfsafas";
console.log(s4.charAt(2));
console.log(s4.charCodeAt(2));
console.log(s4.codePointAt(2));
console.log(s4.italics());
console.log("a canal".lastIndexOf(""));
console.log("a canal".indexOf(""));

var s5 = "302";
var s6 = "600";
console.log(s5.localeCompare(s6));

const strObj = new String("hello");
console.log(strObj);
console.log(strObj.valueOf());

const s7 = "The quick red fox jumped over the lazy dog's back.";
const iterator = s7[Symbol.iterator]();
let theChar = iterator.next();
while (!theChar.done) {
  console.log(theChar.value);
  theChar = iterator.next();
}
