// 手写bind
// 说的通俗一点，bind与apply/call一样都能改变函数this指向，但bind并不会立即执行函数，而是返回一个绑定了this的新函数，你需要再次调用此函数才能达到最终执行。

const { ArgumentOutOfRangeError } = require("rxjs");

// 1. mine
// 理解的不对
function bindScope(target, fn) {
  return function () {
    fn.apply(target, arguments);
  };
}

var obj = {
  name: "heizi",
  say: function () {
    console.log(this.name);
  },
};

function print(s) {
  console.log(this.name, ...arguments);
}

// 2. official
if (!Function.prototype.bindScope)
  (function () {
    var slice = Array.prototype.slice;
    Function.prototype.bindScope = function () {
      var thatFunc = this,
        thatArg = arguments[0];
      var args = slice.call(arguments, 1);
      if (typeof thatFunc !== "function") {
        // closest thing possible to the ECMAScript 5
        // internal IsCallable function
        throw new TypeError(
          "Function.prototype.bind - " +
            "what is trying to be bound is not callable"
        );
      }
      return function () {
        var funcArgs = args.concat(slice.call(arguments));
        return thatFunc.apply(thatArg, funcArgs);
      };
    };
  })();

// 3. https://www.cnblogs.com/echolun/p/12178655.html
Function.prototype.bind_ = function (obj) {
  // 第一位是 this，从1开始裁剪
  var args = Array.prototype.slice.call(arguments, 1);
  // 缓存当前函数
  var fn = this;
  return function () {
    var secondParams = Array.prototype.slice.call(arguments);
    fn.apply(obj, args.concat(secondParams));
  };
};

var o = { x: 1 };
var fn = function () {
  console.log(this.x);
};
var fn1 = fn.bind_(o);
fn1();
