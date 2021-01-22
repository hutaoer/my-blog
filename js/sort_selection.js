// 选择排序
function selectionSort(arr) {
  if (!arr) {
    throw new Error("请输入数组");
  }
  if (arr.length === 1) {
    return arr;
  }
  let tmp = 0;
  let arrLen = arr.length;
  let minIndex;
  for (let i = 0; i < arrLen; i++) {
    minIndex = i;
    for (let j = i + 1; j < arrLen; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
        console.log("loop 1", i);
        console.log("loop 2", j);
        console.log("minIndex", minIndex);
      }
    }
    tmp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = tmp;
  }
  return arr;
}

var a = [3, 5, 10, 1, 9, 8, 2, 30, 11];
var a1 = [30, 11];
console.log(selectionSort(a1));
