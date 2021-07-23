# perfTimeToElk
背景
web 秒开项目需要搜集网页相关的性能数据，比如 domReady、load 时间，和客户端开发沟通后确定了方案，客户端提供 perfTimeToElk 协议，前端调用后，搜集数据上报 elk。

实现
前端调用 perfTimeToElk 协议，将搜集到的性能数据通过对象（字典）的方式传给客户端，如果没有传空对象（目前前端没有传，性能数据都是 iOS 客户端获取）。
客户端收到网页发送的协议以后，调用 wkwebview（iOS） 的 js 接口，window.performance.time获取数据。然后经过公式计算，得到客户端收集的性能数据。
合并两部分的性能数据。
合并网页请求响应的http head的数据（原来已有）
上传ELK（原来已有）
查询
表名：opentracing-arsenal-*

可以根据字段在elk中进行过滤

字段如下，性能字段见下方性能指标

module 域名

webviewURL 网址

Device 机型

NetWorkType 网络类型

appVersion app版本

dns dns地址

carrierType 运营商

totalTiming 网页加载总时间（从用户点击到网页完全加载完毕）

其他还有response 的header中所有字段



示例



window.callNativeHandler('perfTimeToElk', {}, function() { console.log('success') })


性能指标和计算方式如下：

协议名称：perfTimeToElk

性能计算方案前端提供

let t = window.performance.timing;
const dnsTime = t.domainLookupEnd - t.domainLookupStart;
const tcpTime = t.connectEnd - t.connectStart;
const sslTime = t.connectEnd - t.secureConnectionStart;
const ttfbTime = t.responseStart - t.requestStart;
const dataTransfer = t.responseEnd - t.responseStart;
const domAnalysis = t.domInteractive - t.responseEnd;
const resourceLoad = t.loadEventStart - t.domContentLoadedEventEnd;
const firstPackage = t.responseStart - t.domainLookupStart;
const whiteScreen = t.responseEnd - t.fetchStart;
const firstCanInteraction = t.domInteractive - t.fetchStart;
const domReady = t.domContentLoadedEventEnd - t.fetchStart;
const pageLoadComplete = t.loadEventStart - t.fetchStart;
const totalLoadComplete = t.loadEventEnd - t.navigationStart;

let str = `
DNS解析耗时：${dnsTime/1000}秒\r\n
TCP连接耗时：${tcpTime/1000}秒\r\n
SSL连接耗时：${getSSLtime(t)}\r\n
网络请求耗时：${ttfbTime/1000}秒\r\n
数据传输耗时：${dataTransfer/1000}秒\r\n
Dom解析耗时：${domAnalysis/1000}秒\r\n
资源加载耗时：${resourceLoad/1000}秒\r\n
首包数据耗时：${firstPackage/1000}秒\r\n
白屏持续耗时：${whiteScreen/1000}秒\r\n
首次可交互耗时：${firstCanInteraction/1000}秒\r\n
Dom加载完毕耗时：${domReady/1000}秒\r\n
页面加载完毕耗时：${pageLoadComplete/1000}秒\r\n
页面加载总耗时：${totalLoadComplete/1000}秒
`;


数据收集：Web端异常、性能数据：https://www.yuque.com/docs/share/5dccc6d3-69d0-4b71-9038-352b4279c030