// 深拷贝

function deepClone(obj = {}) {
  let res;
  if (obj instanceof Array) {
    res = [];
  } else {
    res = {};
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      res[key] = deepClone(obj[key]);
    }
  }
  return res;
}

function deepCopy(obj) {
  if (typeof obj === "function") {
    throw new TypeError("请传入正确的数据类型格式");
  }
  try {
    let data = JSON.stringify(obj);
    let newData = JSON.parse(data);
    return newData;
  } catch (e) {
    console.log(e);
  }
}

// 浅拷贝
let source1 = {};
let source2 = {};
Object.assign(target, source1, source2);
