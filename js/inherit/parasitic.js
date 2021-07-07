// 寄生继承
// 使用寄生式继承来为对象添加函数，会由于不能做到函数复用而降低效率；这一点和构造函数模式类似。
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function createAnother(original) {
  var clone = object(original);
  // 增强该对象
  clone.sayHi = function () {
    console.log("hi");
  };
  return clone;
}

var p = {
  name: "heizi",
};

var a = createAnother(p);
a.sayHi();
console.log(a instanceof p); // error
