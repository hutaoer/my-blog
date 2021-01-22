class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = defaultCompare;
  }
}
// 先序遍历会先访问节点本身（行{1}），然后再访问它的
// 左侧子节点（行{2}），最后是右侧子节点（行{3}），而中序遍历的执行顺序是：{2}、{1}和{3}。
function inOrderTraverse(callback) {
  this.inOrderTraverseNode(this.root, callback); // {1}
}

function inOrderTraverseNode(node, callback) {
  if (node != null) {
    this.inOrderTraverseNode(node.left, callback);
    callback(node.key);
    this.inOrderTraverseNode(node.right, callback);
  }
}

function preOrderTraverse(callback) {
  this.preOrderTraverseNode(this.root, callback);
}
function preOrderTraverseNode(node, callback) {
  if (node != null) {
    callback(node.key);
    this.preOrderTraverseNode(node.left, callback);
    this.preOrderTraverseNode(node.right, callback);
  }
}

function postOrderTraverse(callback) {
  this.postOrderTraverseNode(this.root, callback);
}

function postOrderTraverseNode(node, callback) {
  if (node != null) {
    this.postOrderTraverseNode(node.left, callback);
    this.postOrderTraverseNode(node.right, callback);
    callback(node.key);
  }
}
