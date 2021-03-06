# 使用Vue进行SSR

## 服务端
* 每个请求应该都是全新的、独立的应用程序实例，以便不会有交叉请求造成的状态污染 (cross-request state pollution)。
* 禁用响应式数据，还可以避免将「数据」转换为「响应式对象」的性能开销。
* 由于没有动态更新，所有的生命周期钩子函数中，只有 `beforeCreate` 和 `created` 会在服务器端渲染 (SSR) 过程中被调用。
* 避免在 beforeCreate 和 created 生命周期时产生全局副作用的代码，比如订阅、setInterval
* 浏览器端的 window, document 对象不能在服务端使用。或者需要mock变量的方式来hack
* 大多数自定义指令直接操作 DOM，因此会在服务器端渲染 (SSR) 过程中导致错误。

## 源码
* 不应该直接创建一个应用程序实例，而是应该暴露一个可以重复执行的工厂函数，为每个请求创建新的应用程序实例。
* 同样的规则也适用于 router、store 和 event bus 实例。你不应该直接从模块导出并将其导入到应用程序中，而是需要在 createApp 中创建一个新的实例，并从根 Vue 实例注入。
* 对于客户端应用程序和服务器应用程序，我们都要使用 webpack 打包 - 服务器需要「服务器 bundle」然后用于服务器端渲染(SSR)，而「客户端 bundle」会发送给浏览器，用于混合静态标记。

## 数据预取

### 服务器端数据预取
* 在路由组件上暴露出一个自定义静态函数 asyncData。注意，由于此函数会在组件实例化之前调用，所以它无法访问 this。需要将 store 和路由信息作为参数传递进去：
* 在 entry-server.js 中，我们可以通过路由获得与 router.getMatchedComponents() 相匹配的组件，如果组件暴露出 asyncData，我们就调用这个方法。然后我们需要将解析完成的状态，附加到渲染上下文(render context)中。


## bundle
* 每次编辑过应用程序源代码之后，都必须停止并重启服务。