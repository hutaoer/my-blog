// 如果一个数组循环到头后，需要补0来比较
var compareVersion = function (v1, v2) {
  var arr1 = v1.split(".");
  var arr2 = v2.split(".");
  var arr1Len = arr1.length;
  var arr2Len = arr2.length;
  var maxLen = Math.max(arr1Len, arr2Len);
  let res = 0;
  if (arr1Len === arr2Len) {
    for (let i = 0; i < arr1Len; i++) {
      var tmp1 = parseInt(arr1[i], 10);
      var tmp2 = parseInt(arr2[i], 10);
      if (tmp1 === tmp2) {
        continue;
      } else {
        res = tmp1 < tmp2 ? -1 : 1;
        break;
      }
    }
  } else {
    // 只需比较到最小长度+1
    for (let i = 0; i < maxLen; i++) {
      console.log("arr1", arr1[i]);
      console.log("arr2", arr2[i]);

      if (typeof arr1[i] == "undefined") {
        console.log("left");
        console.log(arr2.slice(i));
        const leftArr2_to_number = parseInt(arr2.slice(i).join(""), 10);
        console.log(leftArr2_to_number);
        if (leftArr2_to_number > 0) {
          res = -1;
        } else {
          res = 0;
        }
        break;
      }
      if (typeof arr2[i] == "undefined") {
        const leftArr2_to_number = parseInt(arr1.slice(i).join(""), 10);
        if (leftArr2_to_number > 0) {
          res = 1;
        } else {
          res = 0;
        }
        break;
      }
      var tmp1 = parseInt(arr1[i], 10);
      var tmp2 = parseInt(arr2[i], 10);
      if (tmp1 === tmp2) {
        continue;
      } else {
        res = tmp1 < tmp2 ? -1 : 1;
        break;
      }
    }
  }
  return res;
};

// var version1 = "1.01",
// version2 = "1.001";

// var version1 = "0.1",
//   version2 = "1.1";

// var version1 = "1.0.1",
//   version2 = "1";

var version1 = "1.0",
  version2 = "1.0.0";
console.log(compareVersion(version1, version2));
