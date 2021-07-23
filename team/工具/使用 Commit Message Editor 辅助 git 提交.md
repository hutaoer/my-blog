# 使用 Commit Message Editor 辅助 git 提交.md

为什么

代码迁移到中台 git 后，会校验 git commit message 的格式（类 angular 规范），文档：http://172.20.1.247/wiki/index.php/Gitlab_commit_specification

示例如下：

```

// 格式

{Jira task id} {commit type} {commit tiltle}

{commit explanation}

// 示例

Base-123 feat 新增Button组件

1、新增黑夜模式

2、制定组件规范

```

如果提交信息不符合规范，会被阻断提交。我们可以使用 Commit Message Editor 这个 VSCode 插件辅助提交 commit 信息。



如何使用

首先安装 Commit Message Editor 插件：