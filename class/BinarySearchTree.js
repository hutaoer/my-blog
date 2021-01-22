// 搜索二叉树。但是只允许你在左侧节点存储（比父节点）小的值，在右侧节点存储（比父节点）大的值。上一节的图中就展现了一棵二叉搜索树。
export class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

//  insert(key)：向树中插入一个新的键。
//  search(key)：在树中查找一个键。如果节点存在，则返回 true；如果不存在，则返回
// false。
//  inOrderTraverse()：通过中序遍历方式遍历所有节点。
//  preOrderTraverse()：通过先序遍历方式遍历所有节点。
//  postOrderTraverse()：通过后序遍历方式遍历所有节点。
//  min()：返回树中最小的值/键。
//  max()：返回树中最大的值/键。
//  remove(key)：从树中移除某个键。

export default class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.comparseFn = compareFn;
    this.root = null;
  }
}
