# Promise
* 以下两种写法，效果相同。
```js
promise.catch(function(err) {
	console.error(err)
	})

promise.then(null, function(err) {
	console.error(err)
	})
```