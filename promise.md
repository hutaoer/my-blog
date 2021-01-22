# Promise

## Promise/A+规范
* 三个状态：pending, fulfilled, rejected
* promise 对象初始化状态为 pending 2.当调用resolve(成功)，会由pending => fulfilled 3.当调用reject(失败)，会由pending => rejected
* 只能由 pending => fulfilled/rejected,
* then方法是异步执行的，promise.then方法每次调用 都返回一个新的promise对象 所以可以链式写法。

## 规范
1.1 ‘promise’ 是一个有符合此标准的 then 方法的 object 或 function
1.2 ‘thenable’ 是 then 方法定义的 object 或 function
1.3 ‘value’ 是一个 JavaScript 合法值（包括 undefined，thenable，promise）
1.4 ‘exception’ 是一个 throw 语句抛出错误的值
1.5 ‘reason’ 是一个表明 promise 失败的原因的值

## then 方法
* 一个 promise 的 then 方法接受两个参数：promise.then(onFulfilled, onRejected)
* onFulfilled 和 onRejected 都是可选参数，如果不是函数，则忽略。
* then 方法一定返回一个 promise
* Promise方法链通过return传值，没有return就只是相互独立的任务而已

## 写法
* 以下两种写法，效果相同。
```js
promise.catch(function(err) {
	console.error(err)
	})

promise.then(null, function(err) {
	console.error(err)
	})
```