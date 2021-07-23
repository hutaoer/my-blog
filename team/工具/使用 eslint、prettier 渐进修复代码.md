# 使用 eslint、prettier 渐进修复代码.md

为什么要用 prettier
相比 eslint，prettier 更专注于代码风格的统一，通过简单的配置，可以确保项目代码风格的一致性。

因为 eslint 也可以对代码风格进行检查，为了避免和 prettier 规则冲突，eslint-config-sonarjs 中相关的规则和 prettier 保持了一致，测试暂未发现问题，如果使用有问题可以反馈给郑超。

如何使用 eslint 和 prettier
以 vue 项目为例，首先项目需要安装相关的依赖：

npm i eslint eslint-plugin-vue eslint-config-sonarjs prettier -D
.eslintrc.js 示例配置如下：

module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: ['plugin:vue/essential', 'sonarjs'],
  parserOptions: {
    sourceType: 'module',
  }
}
prettier 推荐配置如下：

.prettierrc.js
module.exports = {
  "printWidth": 100, // 每行代码长度
  "tabWidth": 2, // tab 宽度（2个空格）
  "useTabs": false, // 不使用 tab 缩进
  "singleQuote": true, // 使用单引号
  "semi": true, // 使用分号
  "trailingComma": "es5", // 在 es5 中合法的地方加尾逗号
  "bracketSpacing": true, // 对象字面量的大括号间使用空格
  "arrowParens": "avoid" // 只有一个参数的箭头函数参数不带圆括号
};
不同的项目可以根据需要添加或修改相关配置。

另外，为了得到更好的开发体验和及时反馈，需要安装 vscode 的 eslint 和 prettier 插件，如何安装以及配置这里不做介绍，可自行查阅。

使用 eslint 和 prettier 的自动修复功能
对于代码风格问题，eslint 和 prettier 都提供了命令行工具，可以进行自动修复。

eslint 命令如下：

eslint --fix . // 表示对当前目录下的文件进行自动修复
更多说明见：https://eslint.org/docs/user-guide/command-line-interface#fixing-problems

prettier 命令如下：

prettier --write . // 表示对当前目录下的文件进行自动修复
更多说明见：https://prettier.io/docs/en/cli.html#--write

我们可以配置相关的 npm scripts，比如：

scripts: {
  "format": "prettier --write \"src/**/*.js\" \"src/**/*.vue\"",
  "fix": "eslint --fix ."
}
虽然 prettier，eslint 都提供了强大的自动修复功能，但如果一次性修复太多的文件，很难确保不会引入一些不可预料的问题。

我个人比较推荐两种方式对代码进行自动修复，一种是在文件保存时候自动格式化，另一种是在 precommit 阶段对本次提交的内容进行自动格式化。

在 vscode 的配置中可以勾选 Format On Save 来实现保存时自动格式化。precommit 的自动格式化可以使用 husky 和 lint-staged 来实现。参考配置如下：

"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
    "src/**/*.{js,json,css,vue}": [
      "prettier --write",
      "eslint --fix",
      "git add"
    ]
},


建议每次修改少量的文件，并进行充分自测，一步一步循序渐进修复代码库。

以上只是介绍使用 eslint 和 prettier 渐进修复代码库的大体思路，具体操作中有任何问题也可以找郑超沟通。