# vue

## Object.defineProperty 有什么缺陷？为什 么在 Vue3.0 采用了 Proxy
* Object.defineProperty 只能劫持对象的属性，从而需要对每个对象，每个 属性进行遍历。如果属性值是对象，还需要深度遍历。
* Object.defineProperty 无法低耗费的监听到数组下标的变化，导致通过 数组下标添加元素，不能实时响应；
* Proxy 不仅可以代理对象，还可以代理数组。还可以代理动态增加的属性。

## 在 Vue 中，子组件为何不可以修改父组 件传递的 Prop，如果修改了，Vue 是如何监 控到属性的修改并给出警告的。
* 因为 Vue 是单向数据流。
* 通过 setter 属性进行检测，修改值将会触发 setter，从而触发警告；

## 双向绑定和 vuex 是否冲突
* 1)给 <Input> 中绑定 value，然后侦听 input 或者 change 事件，在事件回调中 调用一个方法；
* 2).使用带有 setter 的双向绑定计算属性；

##  Vue 组件间如何通信
* 父子间通信: props + emit; provider/inject
* 兄弟间通信：event bus，$parent.$refs

## Vue 双向数据绑定原理
* 通过双向数据绑定，来实现了 View 和 Model 的同步更新。vue 的双向数 据绑定主要是通过数据劫持和发布订阅者模式来实现的。
* 通过 Object.defineProperty() 方法来对 Model 数据各个属性添加访 问器属性，以此来实现数据的劫持。
* 因此当 Model 中的数据发生变化的时候， 我们可以通过配置的 setter 和 getter 方法来实现对 View 层数据更新的通 知。