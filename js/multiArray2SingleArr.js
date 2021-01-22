/**
 * author: heizi
 * date: 2021-01-18
 */
var a = [1, [2, 3], [5, 6, 7], [8, 9, [10, 11]], ["b", "a"]];
const isArray = Array.isArray;
const res = [];
function m2s_array(arr) {
  arr.map((item) => {
    if (isArray(item)) {
      res.concat(m2s_array(item));
    } else {
      res.push(item);
    }
  });
}

m2s_array(a);
console.log(res);
