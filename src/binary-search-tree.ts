import { Queue } from "./queue";

class NodeTree {
  value: number;
  left: NodeTree;
  right: NodeTree;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: NodeTree;
  constructor() {
    this.root = null;
  }

  insert(value: number) {
    const newItem = new NodeTree(value);
    if (this.isEmpty()) {
      this.root = newItem;
    } else {
      this.insertingNode(this.root, newItem);
    }
  }

  private insertingNode(root: NodeTree, newItem: NodeTree) {
    if (root.value > newItem.value) {
      if (root.left === null) {
        root.left = newItem;
      } else {
        this.insertingNode(root.left, newItem);
      }
    } else {
      if (root.right === null) {
        root.right = newItem;
      } else {
        this.insertingNode(root.right, newItem);
      }
    }
  }

  search(value: number) {
    if (this.isEmpty()) {
      return console.log("tree is empty");
    }
    return this.searchWithRoot(this.root, value);
  }

  searchWithRoot(root: NodeTree, value: number) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (root.value > value) {
        return this.searchWithRoot(root.left, value);
      } else if (root.value < value) {
        return this.searchWithRoot(root.right, value);
      }
    }
  }

  preOrder(root: NodeTree) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root: NodeTree) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root: NodeTree) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder() {
    const q = new Queue<NodeTree>();
    q.enQueue(this.root);
    while (q.size()) {
      let current = q.deQueue();
      console.log(current.value);
      if (current.left) {
        q.enQueue(current.left);
      }
      if (current.right) {
        q.enQueue(current.right);
      }
    }
  }

  min(root: NodeTree) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root: NodeTree) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        //no child
        return null;
      }
      if (!root.left) {
        //one child
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      //two child
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }

  isEmpty() {
    return this.root === null;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

bst.preOrder(bst.root);
console.log("--------");
bst.inOrder(bst.root);
console.log("--------");
bst.postOrder(bst.root);
console.log("--------");

bst.levelOrder();
console.log("--------");

console.log(bst.min(bst.root));
console.log(bst.max(bst.root));
