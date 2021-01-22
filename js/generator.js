var a = [1, [[2], [333, 55], 567], 8, [10, 11]];

function* fn(arr) {
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    const tmp = arr[i];
    if (typeof tmp != "number") {
      yield* fn(tmp);
    } else {
      yield tmp;
    }
  }
}

const s = fn(a);
let res = s.next();
while (!res.done) {
  console.log(res.value);
  res = s.next();
}
