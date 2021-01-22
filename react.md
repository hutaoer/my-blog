# react
* 解决CPU瓶颈的关键是实现时间切片，而时间切片的关键是：将同步的更新变为可中断的异步更新。
* 源码阅读：https://react.iamkasong.com/me.html

## hooks
* useContext()，共享钩子。该钩子的作用是，在组件之间共享状态。 可以解决react逐层通过Porps传递数据，它接受React.createContext()的返回结果作为参数，使用useContext将不再需要Provider 和 Consumer。
useEffect()，副作用钩子。它接收两个参数， 第一个是进行的异步操作， 第二个是数组，用来给出Effect的依赖项
useRef()，获取组件的实例；渲染周期之间共享数据的存储(state不能存储跨渲染周期的数据，因为state的保存会触发组件重渲染）
useRef传入一个参数initValue，并创建一个对象{ current: initValue }给函数组件使用，在整个生命周期中该对象保持不变。
useMemo和useCallback：可缓存函数的引用或值，useMemo用在计算值的缓存，注意不用滥用。经常用在下面两种场景（要保持引用相等；对于组件内部用到的 object、array、函数等，如果用在了其他 Hook 的依赖数组中，或者作为 props 传递给了下游组件，应该使用 useMemo/useCallback）
useLayoutEffect：会在所有的 DOM 变更之后同步调用 effect，可以使用它来读取 DOM 布局并同步触发重渲染

## props render 组件
* 将组件的state 通过render 方法，传递给需要使用的组件。

## HOC
* 高阶组件（HOC，Higher-Order Components）不是组件，而是一个函数，它会接收一个组件作为参数并返回一个经过改造的新组件：
* 抽取重复代码，实现组件复用，常见场景：页面复用。
* 条件渲染，控制组件的渲染逻辑（渲染劫持），常见场景：权限控制。
* 通过属性代理方式实现的高阶组件包装后的组件可以拦截到父组件传递过来的 props，提前对 props 进行一些操作，比如增加一个 type 属性。

## react 15
* Reconciler（协调器）—— 负责找出变化的组件
* Renderer（渲染器）—— 负责将变化的组件渲染到页面上

### Reconciler
每当有更新发生时，Reconciler会做如下工作：
调用函数组件、或class组件的render方法，将返回的JSX转化为虚拟DOM
将虚拟DOM和上次更新时的虚拟DOM对比
通过对比找出本次更新中变化的虚拟DOM
通知`Renderer`将变化的虚拟DOM渲染到页面上

### Renderer
* 不同平台会有不同的 renderer
* ReactNative
* ReactDom

### React15架构的缺点
* Reconciler 里面，mount的组件会调用mountComponent，update的组件会调用updateComponent 。这两个方法都会递归更新子组件。
* 由于递归执行，所以更新一旦开始，中途就无法中断。当层级很深时，递归更新时间超过了16ms，用户交互就会卡顿。

## 生命周期

### 初始化阶段
* constructor(): 用于绑定事件，初始化 state
* componentWillMount(), 组件挂载，render之前调用，可以在服务端调用
* render，渲染
* componentDidMount()：在 render 之后，而且是所有子组件都 render 之后才调用。

## 更新阶段
* getDerivedStateFromProps ： getDerivedStateFromProps 会 在 调 用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应 返回一个对象来更新 state，如果返回 null 则不更新任何内容； 
* 2. componentWillReceiveProps(nextProps): 在这里可以拿到即将改变的状 态，可以在这里通过 setState 方法设置 state 
* 3. shouldComponentUpdate(nextProps, nextState): 他的返回值决定了接 下来的声明周期是否会被调用，默认返回 true 
* 4. componentWillUpdate(): 不能在这里改变 state，否则会陷入死循环 
* 5. componentDidUpdate(): 和 componentDidMount()类似，在这里执行 Dom 操作以及发起网络请求

## 析构阶段
* componentWillUnmount()：主要执行清除工作，比如取消网络请求，清除事件监听。

## Flux 思想
* 数据单向流动
* View，action，dispatch，更新store（同步，异步），store 更新 => View 更新

## 聊聊 redux-thunk 是如何实现异步 action 的？
* 在 redux-thunk 中会判断 action 的类型，如果 action 的类型为函数，则执行 该 action 函数，并且将 dispatch 作为参数，将自身的 dispatch 操作延迟 到 action 函数中执行，由 action 函数决定何时（可能是异步操作后）执 行 dispatch.

## React 的源码实现

## React 16
* Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入Reconciler
  - React实现了功能更完备的requestIdleCallbackpolyfill，这就是Scheduler。除了在空闲时触发回调的功能外，Scheduler还提供了多种调度优先级供任务设置。
* Reconciler（协调器）—— 负责找出变化的组件
  - 在React15中Reconciler是递归处理虚拟DOM的
  - 更新工作从递归变成了可以中断的循环过程。每次循环都会调用shouldYield判断当前是否有剩余时间。
* Renderer（渲染器）—— 负责将变化的组件渲染到页面上
* 整个Scheduler与Reconciler的工作都在内存中进行。只有当所有组件都完成Reconciler的工作，才会统一交给Renderer。都是在内存中进行的，即使被中断也不会砍价更新不完全的dom。不同于15.
* Reconciler内部采用了Fiber的架构。

### Fiber
* React Fiber可以理解为：React内部实现的一套状态更新机制。支持任务不同优先级，可中断与恢复，并且`恢复后可以复用之前的中间状态`。
* 由于Generator执行的中间状态是上下文关联的，不好处理，要么需要全局变量来存储，引入了复杂度。
* 其中每个任务更新单元为React Element对应的Fiber节点。
* 虚拟DOM在React中有个正式的称呼——Fiber。

#### Fiber 三层含义
* 作为架构来说，之前React15的Reconciler采用递归的方式执行，数据保存在递归调用栈中，所以被称为stack Reconciler。React16的Reconciler基于Fiber节点实现，被称为Fiber Reconciler。
  - 子Fiber节点及其兄弟节点完成工作后会返回其父级节点，所以用return指代父级节点。
  -  
* 作为静态的数据结构来说，每个Fiber节点对应一个React element，保存了该组件的类型（函数组件/类组件/原生组件...）、对应的DOM节点等信息。
* 作为动态的工作单元来说，每个Fiber节点保存了本次更新中该组件改变的状态、要执行的工作（需要被删除/被插入页面中/被更新...）
  -  调度优先级相关
  - this.lanes = NoLanes;
  - this.childLanes = NoLanes;

#### Fiber 工作原理
* 双缓存 Fiber 树
  - 在React中最多会同时存在两棵Fiber树。当前屏幕上显示内容对应的Fiber树称为current Fiber树，正在内存中构建的Fiber树称为workInProgress Fiber树。
  - current Fiber树中的Fiber节点被称为current fiber，workInProgress Fiber树中的Fiber节点被称为workInProgress fiber，他们通过alternate属性连接。
  - currentFiber.alternate === workInProgressFiber;
  - workInProgressFiber.alternate === currentFiber;
* 每次状态更新都会产生新的workInProgress Fiber树，通过current与workInProgress的替换，完成DOM更新。
* 对于update的组件，他会将当前组件与该组件在上次更新时对应的Fiber节点比较（也就是俗称的Diff算法），将比较的结果生成新Fiber节点
* effectTag
  - // DOM需要插入到页面中
	export const Placement = /*                */ 0b00000000000010;
	// DOM需要更新
	export const Update = /*                   */ 0b00000000000100;
	// DOM需要插入到页面中并更新
	export const PlacementAndUpdate = /*       */ 0b00000000000110;
	// DOM需要删除
	export const Deletion = /*    

#### diff算法
* 对于update的组件，他会将当前组件与该组件在上次更新时对应的Fiber节点比较（也就是俗称的Diff算法），将比较的结果生成新Fiber节点。
* 一个DOM节点在某一时刻最多会有4个节点和他相关。
  - current Fiber。如果该DOM节点已在页面中，current Fiber代表该DOM节点对应的Fiber节点。
  - workInProgress Fiber。如果该DOM节点将在本次更新中渲染到页面中，workInProgress Fiber代表该DOM节点对应的Fiber节点。
  - DOM节点本身。
  - JSX对象。即ClassComponent的render方法的返回结果，或FunctionComponent的调用结果。JSX对象中包含描述DOM节点的信息。
* Diff算法的本质是对比1和4，生成2。
* 一般来讲，最优的算法，两个树的比较，算法复杂度为 O(n3)
* 为了降低算法复杂度，React的diff会预设三个限制：
  - 只对【同级元素进行Diff】。如果一个DOM节点在前后两次更新中跨越了层级，那么React不会尝试复用他。
  - 两个不同类型的元素会产生出不同的树。如果元素由div变为p，React会销毁div及其子孙节点，并新建p及其子孙节点。
  - 开发者可以通过 key prop来暗示哪些子元素在不同的渲染下能保持稳定。考虑如下例子：
* 我们可以从同级的节点数量将Diff分为两类：
  - 当newChild类型为object、number、string，代表同级只有一个节点
  - 当newChild类型为Array，同级有多个节点
* 单点diff
  - 通过先判断key是否相同，如果key相同则判断type是否相同，只有【key、type都相同】时一个DOM节点才能复用。
  - 当key相同且type不同时，代表我们已经找到本次更新的p对应的上次的fiber，但是p与li type不同，不能复用。既然唯一的可能性已经不能复用，则剩下的fiber都没有机会了，所以都需要标记删除。
  - 当key不同时只代表遍历到的该fiber不能被p复用，后面还有兄弟fiber还没有遍历到。所以仅仅标记该fiber删除。
* 多点diff
  - 同级多个节点的Diff，一定属于以上三种情况中的一种或多种。1.节点有更新（属性变化、类型变化）；2.节点删除、新增；3.节点位置变化
  - 更新组件发生的频率更高。所以Diff会优先判断当前节点是否属于更新。
  - 处理移动节点
  - 标记节点是否移动



























