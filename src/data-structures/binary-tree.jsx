function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

class Tree {
    constructor(initNode = new Node(10)) {
        this.root = initNode;
    }

    addnode(data) {
        const node = new Node(data);
        if (!this.root) {
            this.root(node);
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    remove(data) {
        this.removeNode(this.root, data);
    }

    removeNode(node, data) {
        console.log(node.data, data);

        if (data === node.data) {
            if (!node.right && !node.left) {
                return null;
            }

            if (!node.right) {
                return node.left;
            }

            if (!node.left) {
                return node.right;
            }
        }

        if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        }
        if (data > node.data) {
            node.right = this.removeNode(node.right, data);
            return node;
        }

        if (!node.left && !node.right) {
            node = null;
            return node;
        }

        if (!node.left) {
            node = node.right;
            return node;
        }

        if (!node.right) {
            node = node.left;
            return node;
        }
    }

    inorder(node) {
        function traverse(node) {
            node.left && inOrder(node.left);
            console.log(node.val);
            node.right && traverse(node.right);
        }
        traverse(this.root);
    }
}

const tree = new Tree();
tree.addnode(2);
tree.addnode(20);
tree.addnode(0);
console.log(tree);
tree.remove(20);
console.log(tree);
tree.inorder()
