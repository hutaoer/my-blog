# CSS 知识点

## CSS 盒模型
* IE 盒模型（border-box）、W3C 标准盒模型（content-box）
* 盒模型：分为内容（content）、填充（padding）、边界（margin）、边框（border）四个 部分
* 标准盒模型的 width，height，仅包括内容，不包括padding，border
* IE 盒模型的 width，height 包含：content，pandding，border
* box-sizing 设为 border-box 则用的是 IE 盒模型。如果在 ie6，7，8 中 DOCTYPE 缺失会 将盒子模型解释为 IE 盒子模型。若在页面中声明了 DOCTYPE 类型，所有的浏览器都会把盒模型解释为 W3C 盒模型。

## 伪类、伪元素
* 单冒号（:）用于 CSS3 伪类，双冒号（::）用于 CSS3 伪元素。
* 伪类一般匹配的是元素的一些特殊状态，如 hover、link 等，而伪元素一般匹配的特殊的位 置，比如 after、before 等。
* css 引入伪类和伪元素概念是为了格式化文档树以外的信息。

## CSS3 新增伪类
* elem:nth-child(n)选中父元素下的第 n 个子元素
* elem:nth-last-child(n)选中父元素下的第 n 个子元素，顺序相反
* elem:last-child
* elem:nth-of-type(n)

## 水平垂直居中
* 知道容器宽高
  - 绝对定位，确切的margin, left值
* 未知容器宽高
  - 使用绝对定位，transform
  - top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: pink; 
  - translate 是相对该元素的位置进行移动的
* 使用flex
  - 容器高度需要指定才能垂直居中。

## display
* none，从文档流中移除
* block, inline, inline-block, inhreit, list-item, table，flex, grid
* flex, inline-flex区别：flex 是独立的一行占满，inline-flex 根据子元素的宽度和。
* 设为 Flex 布 局以后，子元素的 float、clear 和 vertical-align 属性将失效。
* align-content 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

## absolute
* relative 定位的元素，是相对于元素本身的正常位置来进行定位的。 
* absolute 定位的元素，是相对于它的第一个 position 值不为 static 的祖先元素的 paddingbox 来进行定位的。这句话

## .li 与 li 之间有看不见的空白间隔
* 浏览器会把 inline 元素间的空白字符（空格、换行、Tab 等）渲染成一个空格。
* 解决：1. float，2.写到1行里面；3.ul font-size: 0，其他需要重新设定；4.设置 letter-spacing:-8px，其他恢复默认设置：隔 letter-spacing:normal

## visibility
* CSS属性 visibility 显示或隐藏元素而不更改文档的布局。该属性还可以隐藏<table>
中的行或列，并且不占用任何空间。此值允许从表中快速删除行或列，而不强制重新计算整个表的宽度和高度。
* `visibility: collapse;`

## base64优缺点
* 减少一次请求
* 增加文件大小和浏览器的渲染时间
* 不能直接缓存
* IE8 及以前的浏览器不支持

## BFC
* 具备BFC特性的元素, 就像被一个容器所包裹, 容器内的元素在布局上不会影响外面的元素。一个 BFC 就像是一个隔离区域，和其他区域互不影响。
* 常见用途：
  - 清除浮动
* 触发条件：
  - 浮动元素（元素的 float 不是 none）；
  - 绝对定位元素（元素的 position 为 absolute 或 fixed）
  - 行内块元素（元素的 display 为 inline-block）
  - 表格单元格（元素的 display为 table-cell，HTML表格单元格默认为该值）
  - overflow 值不为 visible 的块元素
  - 弹性元素（display为 flex 或 inline-flex元素的直接子元素）

## float 导致的高度塌陷
* 因为浮动元素移出了文档流，所以#container容器在计算自身高度的时候便忽略了它。

## 媒体查询
* 当媒体查询为真时，相关的样式表或样式规则会按照正常的级联规被应用。当媒体查询返回 假，标签上带有媒体查询的样式表仍将被 下载（只不过不会被应用）。

## CSS优化
* 打包
* 减少选择器的层级和嵌套
* 减少通配符
* 不适用@import，而使用link，@import 会阻塞页面加载
* 减少后代选择器是哟好难过
* 尽量使用class
* 有id的，直接使用id
* 雪碧图

## 浏览器是怎样解析 CSS 选择器的
* 采取从右向左的方式，那么只要发现最右边选择器不匹配， 就可以直接舍弃了，避免了许多无效匹配。

## 在网页中应该使用奇数还是偶数的字体？为什么呢？
* 偶数更容易计算成比例关系，整数概率

## 抽离样式模块
* 抽离样式模块怎么写。
* 基础base样式，比如iconfont, flex 简写
* 独立样式模块，比如1px，safe-area，或者独立组件的样式

## css all
* all 属性实际上是所有 CSS 属性的缩写，表示，所有的 CSS 属性都怎样怎样，但是，不包括 unicode-bidi 和 direction
* 支持三个属性：initial, inherit，unset
* unset 是取消设置的意思，也就是当前元素浏览器或用户设置的 CSS 忽略，然后如果是具有 继承特性的 CSS，如 color，则 使用继承值；如果是没有继承特性的 CSS 属性，则使用初始值。
* direction 属性和 unicode-bidi 属性不受 all 属性影响。

## 不建议使用统配符初始化 css 样式
* 解析性能问题，通配符，需要把所有的标 签都遍历一遍。
* 并不是所有标签都会有 padding 和 margin，

## hasLayout 
* IE 浏览器的特有属性。在 IE 中，一个元 素要么自己对自身的内容进 行计算大小和组织，要么依赖于父元素来计算尺寸和组织内容。
* 当值为true时候，元素它负责对自己和可能的子孙元素进行尺寸计算和定位

## 元素竖向的百分比设定是相对于容器的高度吗？
* height是相对包含块的高度
* padding 和 margin 垂直方向上的值，相对于包含块宽度

## 页面里的字体变清晰，字体平滑效果
* font-smooth，该特性是非标准的，请尽量不要在生产环境中使用它！
* Webkit 实现了名为-webkit-font-smoothing的相似属性。这个属性仅在 Mac OS X/macOS 下生效。none - 关闭字体平滑；展示有锯齿边缘的文字。
antialiased - 平滑像素级别的字体，而不是子像素。从亚像素渲染切换到黑暗背景上的浅色文本的抗锯齿使其看起来更轻。

## 设备像素、css像素、独立设备像素、dpr、ppi
* 设备像素指的是物理像素，一般手机的分辨率指的就是设备像素.
* css 像素是一个相对单位，它是相 对于设备像素的，一个 css 像素的大小取决于页面缩放程度和 dpr 的大小。css 像素和设备独立像素是等价。
* dpr 指的是设备像素和设备独立像素的比值

## layoutviewport、visualviewport 和 idealviewport 的区别
* 把移动设备上浏览器的可视区域，默认情况下把 viewport 设为一个较宽的值，比如 980px。
* 浏览器可视区域的大小，visualviewport
* idealviewport 是最适合移动设备的 viewport

## inline-block 元素间间距
* 移除空格、使用 margin 负值、使用 font-size:0、letter-spacing、word-spacing

## overflow:scroll 平滑滚动
* -webkit-overflow-scrolling: touch，移动设备上是否使用滚动回弹效果

## 图片格式：bmp, png-8，png-24, gif, jpeg, svg, webp
* 第七种格式是 webp 格式，它是支持有损和无损两种压缩方式的使用直接色的点阵图。 使用 webp 格式的最大的优点是，在相 同质量的文件下，它拥有更小的文件体积。

## cookie 隔离
* 静态资源请求时候，不需要携带cookie。

## CSS 预处理器/后处理器
* CSS 预处理器用一种专门 的编程语言，进行 Web 页面样式设计，然 后再编译成正常的 CSS 文件。
* SASS, LESS，Stylus,
* 复用、循环、mixin、函数，提升编写css的效率
* 压缩工具，自动添加浏览器前缀

## 画一条 0.5px 的线
* 采用 metaviewport 的方式 
* 采用 border-image 的方式 
* 采用 transform:scale()的方式

## 高度 100% 无效
* 原因是如果包含块的高度没有显式指定（即高度由内容决定），并且该元素不是绝对定位， 则计算值为 auto，因为解释成了 auto，

## margin: auto
* 如果一侧定值，一侧 auto，则 auto 为剩余空间大小。 
* 如果两侧均是 auto，则平分剩余空间。

## margin 失效场景
* 定高容器的子元素的 margin-bottom 或者宽度定死的子元素的 margin-right 的定位“失 效”。

## 基线，x-height
* 字母 x 的下边缘（线）就是我们的基线。
* x-height 指的就是小写字母 x 的高度

## vertical-aligin
* 默认值是 baseline
* vertical-align 起作用是有前提条件的，这个前提条件就是：只能应用于内联元素以及 display 值为 table-cell 的元 素。

## overflow特殊性
* 默认产生滚动条的元素：html，textarea
* 如果有设置padding和border，是以border的内边距作为截断
* 滚动条会占用容器的可用宽度或高度。

## relative 的特殊性
* 相对定位元素的 left/top/right/bottom 的百分比值是相对于包含块计算的，而不是自身。 注意，虽然定位位移是相对自身，但是百分比值的计算值不是。
* top 和 bottom 这两个垂直方向的百分比值计算跟 height 的百分比值是一样的，都是相 对高度计算的。同时，如果包含块的高度是 auto，那么计算值是 0，偏移无效，也就是说， 如果父元素没有设定高度或者不是“格式化高度”，那么 relative 类似 top:20%的代码等同于 top:0。
* 当相对定位元素同时应用对立方向定位值的时候，也就是top/bottom和left/right同时使用的时候，只有一个方向的定位属性会起作用。而谁起作用则是与文档流的顺序有关的，默认自上而下，从左到右。

## clip, clip-path
* clip 该特性已经从 Web 标准中删除，未来可能会废弃
* clip-path CSS 属性使用裁剪方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏。

## font-weight 的特殊性
* 属性值，必须是 100～900 的整百数

## text-indent
* text-indent 的百分比值是相对于当前元素的“包含块”计算的，而不是当前元素。
* <input>标签按钮 text-indent 值无效 ??? 测试下来是有效的。

## letter-spacing 与字符间距
* 控制字符之间的间距
* 默认值是normal，不是 0
* 支持负值，

## word-spacing 与单词间距
* word-spacing 仅作用于空格字符。增加词语之间的空隙宽度。

## img
* 是<img>元素，则设置 display:none 在所有浏览器下依旧都会 请求图片资源。img 标签图片任何情况下都会请求图片
* background-img的元素，display:none的时候，不会加载图片

## 常见CSS隐藏元素
-（1）使用 display:none;隐藏元素，渲染树不会包含该渲染对象，因此该元素不会在页面中 占据位置，也不会响应绑定的监听事件。 -（2）使用 visibility:hidden;隐藏元素。元素在页面中仍占据空间，但是不会响应绑定的监听 事件。 -（3）使用 opacity:0;将元素的透明度设置为 0，以此来实现元素的隐藏。元素在页面中仍 然占据空间，并且能够响应元素绑定的监听事件。 -（4）通过使用绝对定位将元素移除可视区域内，以此来实现元素的隐藏。 -（5）通过 z-index 负值，来使其他元素遮盖住该元素，以此来实现隐藏。 -（6）通过 clip/clip-path 元素裁剪的方法来实现元素的隐藏，这种方法下，元素仍在页面 中占据位置，但是不会响应绑定的监听事件。 -（7）通过 transform:scale(0,0)来将元素缩放为 0，以此来实现元素的隐藏。这种方法下， 元素仍在页面中占据位置，但是不会响应绑定的监听事件。

## css 实现上下固定中间自适应布局？
* 绝对定位布局，中间部分，top 值等于 header 的高度，bottom 值等于 footer 的高度
* flex 布局，中间部分 flex-grow: 1

## 手写布局
* 自适应正方形
* 圣杯布局
* 双飞翼

















