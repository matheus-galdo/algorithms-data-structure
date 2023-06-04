class TreeNode{
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(compareFunction = this.compare) {
        this.root = null;
        this.compareFn = compareFunction;
    }

    insert(key){
        if(this.root === null){
            this.root = new TreeNode(key);
            return this.root;
        }else{
            this.insertNode(key, this.root);
        }
    }

    insertNode(key, node){
        const newKey = new TreeNode(key);

        //essa comparação precisa usar a função de comparar, já que o node pode não ser númerico, mas objetos complexos
        const side = this.compareFn(key, node);
        if (node[side] === null) {
            node[side] = newKey;
        }else{
            this.insertNode(key, node[side]);
        }
    }
    
    /**
     * Função de comparação default, deve retornar a string do lado (interessante implementar uma tipagem com TS)
     * @param {*} key 
     * @param {*} node 
     * @returns `'left'|'right'`
     */
    compare(key, node) {
        if(key < node.key){
            return 'left';
        }else{
           return 'right' ;
        }
    }

    traverseInOrder(action){
        this.traverseInOrderNode(this.root, action);
    }

    traversePreOrder(action){
        this.traversePreOrderNode(this.root, action);
    }

    traverseInOrderNode(node, action){
        if (node) {   
            this.traverseInOrderNode(node.left, action);
            action(node.key);
            this.traverseInOrderNode(node.right, action);
        }
    }


    traversePreOrderNode(node, action){
        if (node) {   
            action(node.key);
            this.traversePreOrderNode(node.left, action);
            this.traversePreOrderNode(node.right, action);
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

function showNode(key) {
    console.log(key);
}

tree.traversePreOrder(showNode);