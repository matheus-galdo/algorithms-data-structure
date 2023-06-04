class Stack {
    constructor() {
        this._items = {};
        this.count = 0;
    }

    push(element) {
        this._items[this.count] = element;
        this.count++;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }

        this.count--;
        const lastElement = this._items[this.count];
        delete this._items[this.count];
        return lastElement;
    }

    peek() {
        return this.isEmpty() ? undefined : this._items[this.count - 1];
    }

    clear(){
        this._items = {};
        this.count = 0;
    }

    isEmpty() {
        return this.count === 0;
    }

    size(){
        return this.count;
    }

    get items() {
        return this._items;
    }

    set items(item) {
        this._items = item;
    }
}

const pilha = new Stack();

pilha.push('batata');
pilha.push('banana');
pilha.push(5851);
console.log(pilha.items);