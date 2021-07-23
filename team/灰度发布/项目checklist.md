# 项目checklist.md

所有环境都需要验证的checkList
1、java服务需要配置小流量插件的白名单

      192.168.209.241:9253  java服务需要访问这个地址，动态获取小流量的配置。



2、反爬容器（目前查看是否存在 反爬js）

目前通过配置文件的js文件，去保证反爬的能力，  chameleon.min.1623216.js 

第二期需要接入海波的反爬容器去解决反爬的问题，

目前反爬需要验证的点：主要是访问某些用户会被误差黑名单，

具体怎么验证需要和大爷确认一下

    

3、小流量是否生效并且命中

可以验证是否走到小流量的点：

第一个看服务的后台日志，是否有hash值和明确走小流量的日志提示

第二个看前端页面的底色，底色是否和普通的不一致。



4、待上线的页面是否正常返回，是否有乱码，比如：

http://iwencai.com/jgy_unifiedwap/home/index
http://iwencai.com/jgy_unifiedwap/result
http://iwencai.com/jgy_unifiedwap/wencaiPro.html
http://iwencai.com/jgy_unifiedwap/wencaiPaySuccess.html



5、访问其他的不存在的请求是否有兜底，是否要做单独的路由分发

举例：

http://iwencai.com/jgy_unifiedw

http://iwencai.com/jgy_unifiedw/home/index

http://iwencai.com/jgy_unifiedw/index.html

全部重定向到 http://iwencai.com/jgy_unifiedw/index.html



6、是否配置60nginx缓存为私有，前端页面的cache-control 是否正确。

response Headers  中的Cache-Control 的值为private



7、各个项目的个性化配置是否正确

network中查看自己的个性化配置文件 是否加载成功，内容是否正确。

8、 产品是否已验收。

第一：四个接口提供的业务功能

http://iwencai.com/jgy_unifiedwap/home/index
http://iwencai.com/jgy_unifiedwap/result
http://iwencai.com/jgy_unifiedwap/wencaiPro.html
http://iwencai.com/jgy_unifiedwap/wencaiPaySuccess.html

9、基准版本测试是否已验证。







检查服务的可用性指标：可用性

1	是否存在单点问题。	 	
线上有多台机器
2	接口性能是否符合业务需要，缓存是否合理。	
	没有缓存，前端的cache-control设置的为private
3	是否支持快速扩容。	 	
容器部署，支持横向扩展
4	使用的外部服务依赖（例如认证接口）是否进行了性能确认。	
	使用了小流量的接口，性能完全满足20w人的访问
5	外部服务依赖不可用是否有报警及异常处理。	 	
第一：普罗米修斯对java有报价，

第二：质检和运维对接口有监控

第三：容器组对服务本身有探活机制

6	计划任务是否存在卡死的风险。	
 	
7	服务器重启后，是否可以保持可用。	 	

8	针对非虚拟域名，禁止设置hosts访问（防止单点请求）。	
 	
9	针对调用外部接口，是否可以有在链路上的优化空间（防止调用链路太长）；	
 	
测试环境checkList：
1、测试环境





线上环境checkList
1、java服务需要配置小流量插件的白名单

2、反爬容器

3、小流量是否生效并且命中

4、四个请求是否正常返回，是否有乱码

5、访问其他的不存在的请求是否有兜底

6、是否配置60nginx缓存为私有