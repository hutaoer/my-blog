# js

## 垃圾回收
* JavaScript垃圾收集方法采用的是标记清除（mark-and-sweep），垃圾执行器会根据固定时间周期性执行一次清除工作。
* 标记清除算法是现代垃圾回收算法的基础。顾名思义，分两个阶段，标记--清除。
* 标记阶段：通过根值（根节点），标记出从根值开始的所有可达值；
* 清除阶段：未被标记的则为垃圾对象，在清除阶段会被清除。

## 语句和表达式的区别
* 表达式是语句的一种，一个表达式会生产一个值，可以赋值给变量，可以放到任何一个需要有值的地方
  - a
  - a + b
  - 1
  - fn()
  - 三目运算
* 语句: 流程控制
  - if() {}
  - for()
  - 

## React / Vue 项目时为什么要在列表组 件中写 key

- 在 vue 的 diff 函数交叉对比中，当新节点跟旧节点头尾交叉对比没有结果时，会根据新节点 的 key 去对比旧节点数组中的 key，从而找到相应旧节点（这里对应的是一个 key => index 的 map 映射）。如果没有找到就认为是一个新增节点。而如果没有 key，那么就会采用遍历查找的方式去找到对应的旧节点。一种一个 map 映射， 另一种是遍历查找。相比而言，map 映射的速度更快。

## diff 算法

## ['1', '2', '3'].map(parseInt) what & why ?

- parseInt(string, radix) 将一个字符串 string 转换为 radix 进制的整 数， radix 为介于 2-36 之间的数。
- parseInt 有两个参数，刚好对应了 map 中的 item，index

## 防抖、节流

- 防抖靠定时器控制，节流靠 变量控制

### 防抖

- 触发高频【事件后 n 秒内】函数只会执行一次

```javascript
// 防抖
function debounce(fn, time) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, time);
  };
}
document.addEventListener(
  "scroll",
  debounce(() => {
    console.log(333);
  }, 1000),
  false
);
```

### 节流

- 高频事件触发，但在 n 秒内只会执行一次

```javascript
function throttle(fn, time) {
  let trigger = false;
  return function () {
    if (trigger) return;
    trigger = true;
    fn();
    setTimeout(() => {
      trigger = false;
    }, time);
  };
}
document.addEventListener(
  "scroll",
  throttle(() => {
    console.log(333);
  }, 1000),
  false
);
```

## Set、Map、WeakSet 和 WeakMap 的区别？

### Set

- Set 成员不能重复(值类型，null, undefined，NaN)，没有键名，可以遍历。API: add,delete,has,size。可以用来去除重复元素。两个对象总是不相等的。add 方法返回 Set 结构本身。
  - 四种遍历方法：
    Set.prototype.keys()：返回键名的遍历器
    Set.prototype.values()：返回键值的遍历器
    Set.prototype.entries()：返回键值对的遍历器
    Set.prototype.forEach()：使用回调函数遍历每个成员
- 求并集、交集、差集

```js
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter((x) => b.has(x)));
// set {2, 3}

// （a 相对于 b 的）差集
let difference = new Set([...a].filter((x) => !b.has(x)));
```

### WeakSet

- WeakSet 成员都是对象,不容易造成内存泄露；不能遍历，API: add,delete,has

### Map

- Map，值键对组合，支持遍历。
- WeakSet 里面的引用，都不计入垃圾回收机制，所以就不存在这个问题。
- 任何具有 Iterable 接口的对象，都可以作为 WeakSet 的参数。

### WeakMap

- WeakMap，只接收对象为键名，不接受其他类型的值作为键名。键名指向的对象，不计入垃圾回收机制。不支持遍历。
- WeakMap 只接受对象作为键名（null 除外），不接受其他类型的值作为键名。
- 一个典型应用场景是，在网页的 DOM 元素上添加数据，就可以使用 WeakMap 结构。当该 DOM 元素被清除，其所对应的 WeakMap 记录就会自动被移除。
- WeakMap 只有四个方法可用：get()、set()、has()、delete()。
- 只要外部的引用消失，WeakMap 内部的引用，就会自动被垃圾回收清除。由此可见，有了 WeakMap 的帮助，解决内存泄漏就会简单很多。

## .setTimeout、Promise、Async/Await 的 区别

## Generator 函数

- 是协程在 ES6 的实现，最大特点就是可以交出函数的执行权（即 暂停执行）。

## 述浏览器缓存读取规则

- 浏览器第一次向服务器发起该请求后拿到请求结果后，将请求结果 和缓存表示存入浏览器缓存，浏览器对于缓存的处理是根据第一次请求资源返回 的响应头来确定的。浏览器每次发起请求，都会先在浏览器缓存中查找该请求的结果以及缓存 标识；  浏览器每次拿到返回的请求结果都会将该结果和缓存表示存入浏览器缓 存中；

### Service Worker

- Service Worker 是运行在浏览器背后的独立线程。必须是 https 协议。，它可以让我们自由缓存哪些文件、如何匹配缓存、 如何读取缓存，而缓存是可持续性的。Service Worker 也是 PWA 的核心技术。

### Memory Cache

- Memory Cache 也就是内存中的缓存，主要包含的是当前页面中已经抓取到的静态资源。关闭 Tab 页就失效了。

### Disk Cache

- 它会根据 HTTP Header 中的字段判断哪些资源需要缓存，哪些资源可以不请求直接使用，哪些资 源已经过期需要重新请求。
- 跨站也是支持的。

## Vuex 的 mutation 和 Redux 的 reducer 中不能做异步操作

- 纯函数。要求 reducer 是纯函数也是自然而然的事情，使用纯函数才能保证相同的输入得到相同的输入，保证状态的可预测。
- reducer 是用来计算 state 的，所以它的返回值必须是 state。
- 异步动作，放到 actions 中处理

## call 和 apply 、bind 的区别是什么，哪个性能更 好一些

- 答案是改变函数执行时的上下文
- 功能一样，参数有区别。call，参数通过逗号分隔；apply，传入的是数组。
- call 比 apply 的性能要好，call 传入参数的格式正式内部所需要的格式。
- apply 可以将类数组，转成数组。比如函数调用时候的参数，arguments
- bind 有兼容性问题。bind 方法是事先把 fn 的 this 改变为我们要想要的结果，并且把对应的参数值准备好，以后要用到了，直接的执行即可，返回的是一个函数。

## 为什么通常在发送数据埋点请求的时候使 用的是 1x1 像素的透明 gif 图片

- 请求发出后，不需要做处理
- 支持跨域
- gif 图体积小
- 相比 XMLHttpRequest 对象发送 GET 请求，性能上更好
- 执行不会阻塞

## slice

- 不会改变原有数组

## 箭头函数与普通函数（function）的区别 是什么？构造函数（function）可以使用 new 生成实例，那么箭头函数可以吗？

- 函数体内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象；
- 不可以使用 arguments 对象，该对象在函数体内不存在
- 不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数
- 不可以使用 new 命令，没有 prototype 属性，没有自己的 this

## arguments 和 rest 区别

- 剩余参数只包含那些没有对应形参的实参，而 arguments 对象包含了传给函数的所有实参。
- arguments 是类数组，不是真正的数组，一些数组的方法不能使用。但是 rest 是真正的数组。
- arguments 对象还有一些附加的属性 （如 callee 属性）
- 剩余参数可以被解构

## ES6 代码转成 ES5 代码的实现思路是什么？

- 1).将代码字符串解析成抽象语法树，即所谓的 AST；
- 2).对 AST 进行处理，在这个阶段可以对 ES6 AST 进行相应转换，即转换成 ES5 AST；
- 根据处理后的 AST 再生成代码字符串

## 谈谈对 MVC、MVP、MVVM 模式的理解

-

## 跨域问题如何解决

- jsonp
- cors，跨域资源共享
- 代理

## 简述执行上下文和执行栈

### 上下文

- 全局上下文：默认的上下文，任何不在函数内部的代码都在全局上下 文里面。它会执行两件事情：创建一个全局的的 window 对象，并且设 置 this 为这个全局对象。
- 函数上下文：每当一个函数被调用时，就会为该函数创建一个新的上 下文，每个函数都有自己的上下文，不过是在被函数调用的时候创建的。
- eval：

### 执行栈

- 执行栈就是一个调用栈，是一个后进先出数据结构的栈

### this 绑定

- 全局执行上下文中，this 指向全局对象。
- 函数执行上下文中，this 取决于函数是如何被调用的。如果他被一个引用对象调 用，那么 this 会设置成那个对象，否则是全局对象。

## CSP

- CSP（Content-Security-Policy）指的是内容安全策略。用于检测并削弱某些特定类型的攻击，包括跨站脚本 (XSS) 和数据注入攻击等。它的本质是建立一个白名单，告诉浏览器哪些外部资源可以加载和执行。我们只需要配置规则，如何拦 截由浏览器自己来实现。
- 通常有两种方式来开启 CSP，一种是设置 HTTP 首部中的 Content-Security-Policy，一种是设置 meta 标签的方式 <meta http-equiv="Content-Security-Policy">，能有效的防止 XSS

## 什么是 CSRF 攻击？如何防范 CSRF 攻 击？

- 是跨站请求伪造攻击，攻击者诱导用户进入一个第三方网站，然后该网站向被攻击网站发送跨站请求
- CSRF 攻击的本质是利用了 cookie 会在同源请求中携带发送给服务器的特点， 以此来实现用户的冒充。
- 防护方法： 1. 同源检测，服务器检测请求来源； 2. 使用 token 来进行验证； 3. 设置 cookie 时设置 Samesite，限制 cookie 不能作为被第三方使用；

## 函数式编程

- 闭包和高阶函数、惰性运算、递归、函数是“第一等公民”、只用“表达式”。

## 尾调用

- 尾调用指的是函数的最后一步调用另一个函数.使用尾调用的话，因为已经是函数的最 后一步，所以这个时候我们可以不必再保留当前的执行上下文，从而节省了内存.

## PWA

- 可以离线使用，背后用的是技术是 Service Worker。Service Worker 实际上是一段脚本，在后台运行。
- 拦截网络请求，并根据网络是 否可用判断是否使用缓存数据或者更新缓存数据。
- 消息推送

## WebAssembly

- WebAssembly 提供了一条途径，以使得以各种语言编写的代码都可以以接近原 生的速度在 Web 中运行。

## 移动端点击

## Git-Rebase

-

## 什么是函数柯里化？

- 把接收多个参数的函数变换为接收一个单一参数（最初函数的第一个参数）的函 数，并返回接收剩余参数而且返回结果的新函数的技术。

## for in

- 作用于数组的 for-in 循环除了遍历数组元素以外,还会遍历自定义属性。
- 推荐在循环对象属性的时候，使用 for...in,在遍历数组的时候的时候使用 for...of。

## for of

- for...in 循环出的是 key，for...of 循环出的是 value
