class TreeNode {
    key: any;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(key: any) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

type TraverseAction = (node: TreeNode) => any;
type CompareFunction = (key: any, node: TreeNode) => 'left' | 'right';

class BinarySearchTree {
    root: null | TreeNode;
    compareFn: CompareFunction;

    constructor(compareFunction?: any) {
        if (!compareFunction) {
            compareFunction = this.defaultCompare
        }

        this.root = null;
        this.compareFn = compareFunction;
    }

    /**
     * Função publica que insere um novo elemento na árvore
     * @param key 
     * @returns 
     */
    public insert(key: any) {
        if (this.root === null) {
            this.root = new TreeNode(key);
            return this.root;
        } else {
            this.insertNode(key, this.root);
        }
    }

    /**
     * Função privada que insere um novo elemento na árvore
     * @param key 
     * @returns 
     */
    private insertNode(key: any, node: TreeNode) {
        const newKey = new TreeNode(key);

        //essa comparação precisa usar a função de comparar, já que o node pode não ser númerico, mas objetos complexos
        const side = this.compareFn(key, node);
        if (node[side] === null) {
            node[side] = newKey;
        } else {
            const nodeSide = node[side];
            if (nodeSide) this.insertNode(key, nodeSide);
        }
    }

    /**
     * Função de comparação default, deve retornar a string do lado (interessante implementar uma tipagem com TS)
     * @param {*} key 
     * @param {*} node 
     * @returns `'left'|'right'`
     */
    defaultCompare(key: any, node: any) {
        if (key < node.key) {
            return 'left';
        } else {
            return 'right';
        }
    }

    traverseInOrder(action: TraverseAction) {
        this.traverseInOrderNode(this.root, action);
    }

    traverseInOrderNode(node: TreeNode | null, action: TraverseAction) {
        if (node) {
            this.traverseInOrderNode(node.left, action);
            action(node.key);
            this.traverseInOrderNode(node.right, action);
        }
    }

    traversePreOrder(action: TraverseAction) {
        this.traversePreOrderNode(this.root, action);
    }

    traversePreOrderNode(node: TreeNode | null, action: TraverseAction) {
        if (node) {
            action(node.key);
            this.traversePreOrderNode(node.left, action);
            this.traversePreOrderNode(node.right, action);
        }
    }

    traversePostOrder(action: TraverseAction) {
        this.traversePostOrderNode(this.root, action);
    }

    traversePostOrderNode(node: TreeNode | null, action: TraverseAction) {
        if (node) {
            this.traversePostOrderNode(node.left, action);
            this.traversePostOrderNode(node.right, action);
            action(node.key);
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
// console.log(tree.root);

function showNode(key: any) {
    console.log(key);
}

tree.traversePreOrder(showNode);