import BinarySearchTree, { TreeNode } from "./binarySearchTree";

class AVLTRee extends BinarySearchTree {
    constructor(compareFunction?: any) {
        super(compareFunction);
    }

    protected insertNode(key: any, node: TreeNode): TreeNode | undefined {
        const newKey = new TreeNode(key);

        //essa comparação precisa usar a função de comparar, já que o node pode não ser númerico, mas objetos complexos
        const side = this.compareFn(key, node);
        if (node[side] === null) {
            node[side] = newKey;
            return newKey;
        } else {
            const nodeSide = node[side];
            if (nodeSide) {
                return this.insertNode(key, nodeSide);
            }
        }
    }

    getBalanceFactor(node: TreeNode) {
        const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);

        console.log(heightDifference);


        switch (heightDifference) {
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT;
                break;
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
                break;

            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
                break;

            case 2:
                return BalanceFactor.UNBALANCED_LEFT;
                break;

            default:
                return BalanceFactor.BALANCED;
                break;
        }

    }

    getNodeHeight(node: TreeNode | null): number {
        if (node === null) {
            return -1;
        } else {
            return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
        }
    }

    rotateRR(node: TreeNode) {
        const aux = node.right;
        if (aux) {
            node.right = aux.left;
            aux.left = node;
        }
        return aux;
    }

    rotateLL(node: TreeNode) {
        const aux = node.left;
        if (aux) {
            node.left = aux.right;
            aux.right = node;
        }
        return aux;
    }

    rotateLR(node: TreeNode){
        if (node.left) {
            node.left = this.rotateRR(node.left);
            return this.rotateLL(node);
        }
        return node;
    }

    rotateRL(node: TreeNode){
        if (node.right) {
            node.right = this.rotateLL(node.right);
            return this.rotateRR(node);
        }
        return node;
    }
}



enum BalanceFactor {
    UNBALANCED_RIGHT = 1,
    SLIGHTLY_UNBALANCED_RIGHT = 2,
    BALANCED = 3,
    SLIGHTLY_UNBALANCED_LEFT = 4,
    UNBALANCED_LEFT = 5,
}




const avl = new AVLTRee();
avl.insert(50);
avl.insert(30);
avl.insert(70);
avl.insert(80);
avl.insert(60);
avl.insert(90);

const certo = avl.root;
if (certo) {
    // console.log(certo);
    
    console.log(avl.rotateRR(certo)?.left);
}

// avl.traverseInOrder((item) => console.log(item.key));