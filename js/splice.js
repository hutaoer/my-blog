// splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// deleteCount 如果省略，或者它的值大于等于array.length - start(也就是说，如果它大于或者等于start之后的所有元素的数量)，那么start之后数组的所有元素都会被删除。

var a = [1, 2, 3, 4, 5];
// a.splice(1, 2, 3, 4, 5); // 从 index 为1开始，删除2个元素，并插入 3，4，5
a.splice(1);
console.log(a);
