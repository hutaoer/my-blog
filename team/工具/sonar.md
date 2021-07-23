# sonar.md

https://www.npmjs.com/package/eslint-config-sonarjs

为什么
我们在 CI 阶段会通过 sonar 对代码进行扫描，同时本地也可以使用 vscode 的 sonarlint 插件在开发阶段对代码规范进行检查。

但相比使用更广泛的 eslint，sonarlint 配置更繁琐，并且会导致编辑器卡顿，非常影响开发效率，所以有必要开发 sonar 检查规则对应的 eslint 规则集，也即 eslint-config-sonarjs。

包含哪些规则
sonar 平台中目前使用的 js 代码检查规则集包含 175 条规则，eslint-config-sonarjs 实现了其中的 119 条规则，且每条规则都进行了测试。剩余的 56 条规则多数触发频率低，其中部分规则会陆续通过 eslint 自定义规则实现。

175 条规则见：http://testm.10jqka.com.cn/jpage/zhengchao/code-guide/javascript-sonar.html

暂时未支持的规则如下：

- 6. sonar: Assignments should not be redundant
- 15. sonar: "future reserved words" should not be used as identifiers
- 23. sonar: Properties of variables with "null" or "undefined" values should not be accessed
- 25. sonar: Shorthand object properties should be grouped at the beginning or end of an object declaration
- 33. sonar: Array indexes should be numeric
- 35. sonar: Array-mutating methods should not be used misleadingly
- 38. sonar: "indexOf" checks should not be for positive numbers
- 41. sonar: Empty collections should not be accessed or iterated
- 46. sonar: Return values from functions without side effects should not be ignored
- 51. sonar: Arguments to built-in functions should match documented types
- 55. sonar: Unused function parameters should be removed
- 61. sonar: Function returns should not be invariant
- 63. sonar: Functions should not be called both with and without "new"
- 68. sonar: Template literals should not be nested
- 70. sonar: Strings and non-strings should not be added
- 71. sonar: Class methods should be used instead of "prototype" assignments
- 73. sonar: "new" operators should be used with functions
- 76. sonar: "import" should be used to include external code
- 77. sonar: Unnecessary imports should be removed
- 79. sonar: Wildcard imports should not be used
- 81. sonar: Track uses of "FIXME" tags
- 82. sonar: Track uses of "TODO" tags
- 88. sonar: Loop counters should not be assigned to from within the loop body
- 91. sonar: Loops should not contain more than a single "break" or "continue" statement
- 94. sonar: Equality operators should not be used in "for" loop termination conditions
- 98. sonar: Non-empty statements should change control flow or have at least one side-effect
- 100. sonar: "if ... else if" constructs should end with "else" clauses
- 101. sonar: Boolean expressions should not be gratuitous
- 108. sonar: "switch" statements should not be nested
- 109. sonar: "switch" statements should not contain non-case labels
- 111. sonar: Arithmetic operators should only have numbers as operands
- 113. sonar: Values not convertible to numbers should not be used in numeric comparisons
- 114. sonar: Increment (++) and decrement (--) operators should not be used in a method call or mixed with other operators in an expression
- 115. sonar: Values should not be uselessly incremented
- 116. sonar: Strict equality operators should not be used with dissimilar types
- 117. sonar: Comma and logical OR operators should not be used in switch cases
- 119. sonar: Non-existent operators '=+', '=-' and '=!' should not be used
- 124. sonar: Comparison operators should not be used with strings
- 126. sonar: "in" should not be used with primitive types
- 127. sonar: Statements should be on separate lines
- 132. sonar: Errors should not be created without being thrown
- 139. sonar: Encrypting data is security-sensitive
- 140. sonar: Hard-coded credentials are security-sensitive
- 141. sonar: Hashing data is security-sensitive
- 142. sonar: Permissive Cross-Origin Resource Sharing policy is security-sensitive
- 143. sonar: Reading the Standard Input is security-sensitive
- 144. sonar: Using command line arguments is security-sensitive
- 145. sonar: Using pseudorandom number generators (PRNGs) is security-sensitive
- 146. sonar: Using regular expressions is security-sensitive
- 147. sonar: Using Sockets is security-sensitive
- 148. sonar: Writing cookies is security-sensitive
- 153. sonar: Sections of code should not be commented out
- 158. sonar: Source files should have a sufficient density of comment lines
- 159. sonar: Source files should not have any duplicated blocks
- 166. sonar: Expressions should not be too complex
- 169. sonar：Parameters should be passed in the correct order
如何使用
npm i eslint-config-sonarjs -D
在 eslint 配置文件，比如 .eslintrc 中，添加如下代码：

{
   "extends": ["sonarjs"]
}
eslint 如何在 vue 项目中使用这里不做介绍，网上有大量的文章，推荐和 prettier 配合使用。

另外，对于如何使用 eslint、prettier 等工具渐进修复老项目的代码，可以参考：使用 eslint、prettier 渐进修复代码。



反馈和帮助



如果遇到上面的问题，请升级 eslint 到最新版本。以上两个规则都是7.0以后引入的，之前的版本不支持。