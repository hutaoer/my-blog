# git_commit_rules.md

## git commit 规范

Gitlab commit 规范
模板


{任务ID task id} {类型 commit type} {标题 commit title}                 // 第一行，以空格分隔
{提交说明 commit explaination}                                          // 第二行及以下

说明
任务ID(task id)，填写jira任务id，一次commit最多只能填一个任务id。当类型为feat、fix、perf、refactor、revert时，必填任务ID；剩余的类型可以不填写任务ID。

类型(type)，必填，指的是提交类型，一次commit有且只能填一个类型。分别有以下几类：

feat：增加新功能
fix：修复bug
perf：提高性能的改动
refactor：代码重构
revert：代码回滚
style：不影响代码含义的改动，例如去掉空格、改变缩进、增加换行
docs：改动了文档相关的内容
test：测试用例修改，包括单元测试、集成测试
ci：与CI有关的改动
build：外部依赖的改动，例如webpack，npm
chore：构建过程或辅助工具的变动


标题(title)，必填，建议填写本次commit提交的简述说明，对改动内容做概括性总结。

提交说明(commit explaination)，选填，主要说明清楚本次提交的主要目的，影响范围等。

案例
案例一

commit 330a72f057da0ef5bcbd2f7ddc4d8d4b9afc65b4
Author: jiangjianan <jiangjianan@myhexin.com>
Date:   Mon Feb 22 23:03:16 2021 +0800
​
    DEVOPS-123 feat 新增版本管理功能               // 第一行限制
    1、支持单一发布单元的发布版本查询              // 第二行及以下可以自行定义，视各自项目情况或本次提交内容选择填写
    2、支持展示指定程序的在线发布版本

案例二

commit 330a72f057da0ef5bcbd2f7ddc4d8d4b9afc65b4
Author: jiangjianan <jiangjianan@myhexin.com>
Date:   Mon Feb 22 23:13:01 2021 +0800
​
    style 调整错乱的缩进格式                      // 第一行限制，特定提交类型无需提供任务id
​
commit 307d0513c28ef3faadb1cb8013187e6b5a34b7d6
Author: jiangjianan <jiangjianan@myhexin.com>
Date:   Mon Feb 22 23:13:49 2019 +0800
​
    docs 在Readme中增加部署说明                   // 第一行限制，特定提交类型无需提供任务id

commit不规范处理方式
在push到远程分支的时候，因之前填写的commit信息不符合规范而被拒绝，可以通过以下三种方式进行处理：

改上一次提交的commit，在git bash窗口输入命令修改commit信息：git commit --amend；

临近几次的commit记录并重新提交，在git bash窗口命令输入：git reset --soft HEAD~1（若最近两次的commit都需要撤销，可以使用git reset --soft HEAD~2）；撤销后重新进行commit；

TortoiseGit工具，对已提交commit撤销：右键TortoiseGit -> Show log -> 在需要撤销的上一条提交日志上点击右键 -> Reset "xxx" to this -> Reset Type中选择Mixed，点击OK；撤销后重新进行commit；

分支已push到远端gitlab，发起Merge Request时，提示commit不符合规范时，可以通过以下步骤来进行处理(以下操作皆需要用到git bash工具，已接入研发平台的项目无法采用以下方式解决)：

认Merge Request的source分支是否在本地存在，若不存在，请先使用命令将分支重新拉取到本地：git checkout -b source_branch origin source_branch；

行命令：git log，查看从上一次的合并节点在哪里，然后复制其commit SHA值，执行以下命令：git rebase -i ${commit SHA}，如下举例：git rebase -i b80a655267bd3d7c8f8f756bea574dc1991092e1；



上述命令后，展示如下内容(vim的操作界面)，这时我们可以对之前提交的commit记录，重新编辑即可。若commit提交可以压缩合并，则除第一行的pick改为edit之外，其他行的pick改为s；若不压缩合并，则逐条改为edit即可。按esc退出后，输入:wq保存内容；



上一步操作成功后，若展示如下所示内容，再执行git commit --amend对commit内容进行修改，使其符合规范即可，按照vim的操作方式:wq保存退出。若上一步骤不想压缩其他commit内容，这时需要多次执行git commit --amend命令逐个对commit内容进行调整(注意：可以通过查看REBASE之后的数量变化，查看自己需要修改多少个commit记录，比如显示(jiangjianan|REBASE 3/3)，表示总共三个commit，已修改到第三个)；



执行完以上内容，最后执行git rebase --continue退出rebase编辑状态；

进入gitlab，将远端同名分支删除，再在本地执行git push origin source bash推送至远端即可。最后发起Merge Request将不再报错。

JetBrains 系列 IDE 插件
内网Jetbrains私有插件仓库: http://website-tool.myhexin.com/tools/plugins/idea.xml

配置私有插件库:

打开IDEA , 进入设置(Ctrl+Alt+S) - Plugins , 点击右上角齿轮图标 , 选择 Manage PluginRepositories ...





 保存后，点击Marketplace ， 搜索插件名称，安装开发必备插件
          

必备插件
Hexin Git Commit Template




Hexin B2C Group Coding Guidelines

Code Analyze：Tools->核心B2C JAVA编码规范-> 编码规范情况检查


          Inspections
