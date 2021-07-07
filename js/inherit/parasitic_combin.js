// 寄生组合继承
// 组合式继承最大的问题就是无论什么情况下，都会调用两次超类型构造函数；一次是在创建子类型原型的时候，另一次是在子类型构造函数内部。
// 从 ECMAScript 6 开始，[[Prototype]] 可以通过 Object.getPrototypeOf() 和 Object.setPrototypeOf() 访问器来访问。这个等同于 JavaScript 的非标准但许多浏览器实现的属性 __proto__。

// function SuperType(name) {
//   this.name = name;
// }

// SuperType.prototype.sayName = function () {
//   console.log(this.name);
// };

// function SubType(name, age) {
//   SuperType.call(this, name);
//   this.age = age;
// }

// SuperType.prototype = new SuperType();
// SubType.prototype.sayAge = function () {
//   console.log(this.age);
// };

function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function inheritPrototype(subType, superType) {
  var prototype = object(superType.prototype); // 创建对象
  prototype.constructor = subType; // 增强对象
  subType.prototype = prototype; // 指定对象
}

function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
  console.log(this.name);
};

function SubType(name, age) {
  SuperType.call(this, name);

  this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function () {
  console.log(this.age);
};

// var sup = new SuperType("haha");
// sup.sayName();
var sub = new SubType("heizi", 33);
sub.sayAge();
sub.sayName();
console.log(sub);
console.log(sub instanceof SubType);
// console.log(sub instanceof SuperType);
