如果是直接下载的flutter.zip 包，解压后，是没有关联git仓库的。在执行flutter doctor的时候，会提示`fatal: ambiguous argument 'HEAD': unknown revision or path not in the working tree.` 可以直接执行`git init`，并且手动提交一次`commit`，`git commit --allow-empty -n -m "Initial commit"`这样就不会有这个提示信息了。否则，每次编译的时候，都会提醒，比较烦，而且浪费时间。

