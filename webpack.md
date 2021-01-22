# webpack
* Webpack主要使用Compiler和Compilation两个类来控制Webpack的整个生命周期。他们都继承了Tapabel并且通过Tapabel来注册了生命周期中的每一个流程需要触发的事件。
* Tapabel是一个类似于 Node.js 的 EventEmitter 的库，主要是控制钩子函数的发布与订阅，是Webpack插件系统的大管家。
* webpack 源码：https://juejin.cn/post/6844904046294204429

## webpack 中 loader 和 plugin 的区别是什么？
* 还可以通过 loader 引入任何其他类型的文件。
* loader：loader 是一个转换器，将 A 文件进行编译成 B 文件，属于单纯的文 件转换过程；
* plugin：plugin 是一个扩展器，它丰富了 webpack 本身，针对是 loader 结束 后，webpack 打包的整个过程，它并不直接操作文件，而是基于事件机制工作， 会监听 webpack 打包过程中的某些节点，执行广泛的任务。

## webpack 热更新原理，是如何做到 在不刷新浏览器的前提下更新页面的
* 当修改了一个或多个文件，文件系统接收更改并通知 webpack；
* webpack 重 新 编译 构 建 一个 或 多 个模 块 ， 并通 知 HMR （ Hot Module Replacement） 服务器进行更新；
* .HMR Server 使用 Websocket 通知 HMR runtime 需要更新，HMR runtime 通过 HTTP 请求更新 jsonp；
* .HMR runtime 替换更新中的模块，如果确定这些模块无法更新，则触发整 个页面刷新；

## filename，chunkFileName
* filename 是一个很常见的配置，就是对应于 entry 里面的输入文件，经过webpack 打包后输出文件的文件名。
* chunkFilename 指未被列在 entry 中，却又需要被打包出来的 chunk 文件的名称。一般来说，这个 chunk 文件指的就是要懒加载的代码。
* output.chunkFilename 默认使用 [id].js 或从 output.filename 中推断出的值（[name] 会被预先替换为 [id] 或 [id].）如果我们显式配置 chunkFilename，就会按配置的名字生成文件。

## hash，chunkhash、contenthash区别
* hash 跟整个项目构建有关
* chunkhash 它根据不同的入口文件(Entry)进行依赖文件解析、构建对应的 chunk，生成对应的哈希值 
* contenthash，举例：index.js 和 index.css 同为一个 chunk，如果 index.js 内容发生变化，但是 index.css 没有变化，打包后他们的 hash 都发生变化，这对 css 文件来说是一种浪费。contenthash 将根据资源内容创建出唯一 hash，也就是说文件内容不变，hash 就不变。
* 总结：hash 计算与整个项目的构建相关；chunkhash 计算与同一 chunk 内容相关；contenthash 计算与文件内容本身相关。

## webpackChunkName
* webpackChunkName 就可以派上用场了。我们可以在 import 文件时，在 import 里以注释的形式为 chunk 文件取别名。webpack 懒加载是用内置的一个插件 SplitChunksPlugin 实现的，这个插件里面有些默认配置项，比如说 automaticNameDelimiter，默认的分割符就是 `~`，所以最后的文件名才会出现整个符号。

## webpackPrefetch
* 如果我们 import 的时候添加 webpackPrefetch：
```js
const { default: _ } = await import(/* webpackChunkName: "lodash" */ /* webpackPrefetch: true */ 'lodash');
```
* 预拉取。以 <link rel="prefetch" as="script"> 的形式预拉取 lodash 代码：代码不需要手动点击 button 触发，webpack 会在父 chunk 完成加载后，闲时加载 lodash 文件。

## webpackPreload
* webpackChunkName 是为预加载的文件取别名，webpackPrefetch 会在浏览器闲置下载文件，webpackPreload 会在父 chunk 加载时并行下载文件。

## module，chunk，bundle
* 我们直接写出来的是 module，webpack 处理时是 chunk，最后生成浏览器可以直接运行的 bundle。

## 常用loader
* raw-loader: 加载文件原始内容
* file-loader: 把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件 (处理图片和字体文件)
* url-loader 功能类似于 file-loader，但是在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL。
* babel-loader：把 ES6 转换成 ES5
* ts-loader: 将 TypeScript 转换成 JavaScript
* sass-loader：将SCSS/SASS代码转换成CSS
* css-loader：加载 CSS，支持模块化、压缩、文件导入等特性
* style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS
* eslint-loader：通过 ESLint 检查 JavaScript 代码
* xml-loader, cvs-loader; json 自带支持

## 常见plugin
* define-plugin：定义环境变量 (Webpack4 之后指定 mode 会自动配置)
* html-webpack-plugin：简化 HTML 文件创建 (依赖于 html-loader)
* uglifyjs-webpack-plugin：不支持 ES6 压缩 (Webpack4 以前)
* terser-webpack-plugin: 支持压缩 ES6 (Webpack4)
* mini-css-extract-plugin: 分离样式文件，CSS 提取为独立文件，支持按需加载 (替代extract-text-webpack-plugin)
* webpack-bundle-analyzer: 可视化 Webpack 输出文件的体积 (业务组件、依赖第三方模块)
* clean-webpack-plugin: 在每次构建前清理 /dist 文件夹，是比较推荐的做法。最新版，不需要再穿目录参数了。
* webpack-visualizer: 可视化并分析你的 bundle，检查哪些模块占用空间，哪些可能是重复使用的。
* terser-webpack-plugin: 压缩js代码

## tree-shaking
* 通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。它依赖于 ES2015 模块系统中的静态结构特性，这个术语和概念实际上是兴起于 ES2015 模块打包工具 rollup。
* 为了学会使用 tree shaking，你必须……
* 使用 ES2015 模块语法（即 import 和 export）。
* 在项目 package.json 文件中，添加一个 "sideEffects" 入口。
* 引入一个能够删除未引用代码(dead code)的压缩工具(minifier)（例如 UglifyJSPlugin）。

## loader，plugin区别
### loader
* Loader 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。 因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作。
* Loader用于对模块的源代码进行转换。loader 可以使你在加载模块时预处理文件 。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，或将内联图像转换为 data URL。
* 因为 webpack只能处理 JavaScript，如果要处理其他类型的文件，就需要使用 loader 进行转换，loader 本身就是一个函数，接受源文件为参数，返回转换的结果。
* Loader 在 module.rules 中配置，作为模块的解析规则，类型为数组。每一项都是一个 Object，内部包含了 test(类型文件)、loader、options (参数)等属性。
* loader主要是用来加载一个个文件的，比如它可以加载js文件并把js文件转译成低版本浏览器可以支持的js文件；也可以用来加载css文件，可以把css文件变成页面上的style标签；还可以加载图片文件，可以对文件进行优化。

### plugin
* * Plugin 就是插件，基于事件流框架 Tapable，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。
* plugin是用来加强webpack功能的，比如HTML webpack plugin是用来生成一个html文件的；再比如mini css extract plugin是用来抽取css代码并把它变成一个css文件的。
* 针对是loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，执行任务。
* plugin一般是在打包前或打包后对结果进行再次操作。

## 打包原理
识别入口文件
通过逐层识别模块依赖(Commonjs、amd或者es6的import，webpack都会对其进行分析，来获取代码的依赖)
webpack做的就是分析代码，转换代码，编译代码，输出代码
最终形成打包后的代码

## source map 配置
```js
{
mode: "production",
  devtool: "source-map",
  plugins: [
    new UglifyjsPlugin({
      sourceMap: true,
    }),
  ],
}
```

## 常用代码分离方法
有三种常用的代码分离方法：
入口起点：使用 entry 配置手动地分离代码。
防止重复：使用 CommonsChunkPlugin 去重和分离 chunk。Since webpack v4, the CommonsChunkPlugin was removed in favor of optimization.splitChunks.
动态导入：通过模块的内联函数调用来分离代码。
如果入口 chunks 之间包含重复的模块，那些重复模块都会被引入到各个 bundle 中。这种方法不够灵活，并且不能将核心应用程序逻辑进行动态拆分代码。

## 懒加载
* react 
```json
{
  "presets": ["@babel/preset-react"],
  "plugins": ["@babel/plugin-syntax-dynamic-import"]
}
```

### 缓存
* 这是因为每个 module.id 会基于默认的解析顺序(resolve order)进行增量。也就是说，当解析顺序发生变化，ID 也会随之改变。
* 第一个插件是NamedModulesPlugin，将使用模块的路径，而不是数字标识符。虽然此插件有助于在开发过程中输出结果的可读性，然而执行时间会长一些。第二个选择是使用 HashedModuleIdsPlugin，推荐用于生产环境构建：

## 打包为 library
* 外部化第三方库。在这种场景中，我们更倾向于把 lodash 当作 peerDependency。也就是说，用户应该已经将 lodash 安装好。
* 配置 `externals`
* 暴露 library.对于用途广泛的 library，我们希望它能够兼容不同的环境，例如 CommonJS，AMD，Node.js 或者作为一个全局变量。为了让你的 library 能够在各种用户环境(consumption)中可用，需要在 output 中添加 library 属性：
```js
library: 'webpackNumbers',
libraryTarget: 'umd'
```
* 如果设置了 library 但没设置 libraryTarget，则 libraryTarget 默认为 var，详细说明请查看


## 热更新原理
* Webpack 的热更新又称热替换（Hot Module Replacement），缩写为 HMR。 这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。
HMR的核心就是客户端从服务端拉去更新后的文件，准确的说是 chunk diff (chunk 需要更新的部分)，实际上 WDS 与浏览器之间维护了一个 Websocket，当本地资源发生变化时，WDS 会向浏览器推送更新，并带上构建时的 hash，让客户端与上一次资源进行对比。客户端对比出差异后会向 WDS 发起 Ajax 请求来获取更改内容(文件列表、hash)，这样客户端就可以再借助这些信息继续向 WDS 发起 jsonp 请求获取该chunk的增量更新。
后续的部分(拿到增量更新之后如何处理？哪些状态该保留？哪些又需要更新？)由 HotModulePlugin 来完成，提供了相关 API 以供开发者针对自身场景进行处理，像react-hot-loader 和 vue-loader 都是借助这些 API 实现 HMR。























