# hxm-compress-img帮助文档.md

https://www.npmjs.com/package/hxm-compress-img

为什么要用hxm-compress-img
在平时的项目开发中，我们压缩图片一般都是将图片拖拽到tinypng官网，压缩完成下载下来再拷贝到项目的文件夹中去，整个过程在图片数量比较多的时候会显得有些繁琐。为了节省压缩图片流程上的时间，我们想要做一个通过一行指令帮你搞定所有步骤的命令行工具。

主要工作
node-cli指令化调用
上传、下载调用tinypng接口
使用随机xff头跳过tinypng官网上的次数限制
使用方法
全局安装
全局安装
npm install -g hxm-compress-img
      2.  压缩单张图片

压缩单张图片
// `hxm-compress-img`后面跟的是图片路径
hxm-compress-img ./assets/flower.png
      3. 压缩整个图片文件夹

压缩整个图片文件夹
// `hxm-compress-img`后面跟的是图片文件夹路径`
hxm-compress-img ./assets


说明:

由于tinypng只支持上传png和jpg的图片，压缩时其他文件后缀都会被过滤。因此图片后缀请提前处理。
执行上述压缩命令后会直接覆盖掉原图片。