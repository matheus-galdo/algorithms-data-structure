class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.elements = {};
    }

    /**
     * Adiciona um elemento na fila
     */
    enqueue(element) {
        this.elements[this.count] = element;
        this.count++;
    }

    /**
     * Remove o primeiro elemento da fila
     */
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        const firstElement = this.elements[this.lowestCount];
        delete this.elements[this.lowestCount];
        this.lowestCount++
        return firstElement;
    }

    /**
     * Mostra o primeiro elemento da fila
     */
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.elements[this.lowestCount];
    }

    /**
     * Retorna um boolean informado se a fila está vazia
     */
    isEmpty() {
        return this.count - this.lowestCount === 0;
    }

    /**
     * Informa o tamanho da fila
     */
    size() {
        return this.count - this.lowestCount;
    }

    /**
     * Limpa a fila
     */
    clear() {
        this.elements = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    /**
     * Stringify da fila
     */
    toString() {
        if (this.isEmpty()) {
            return '';
        }

        let str = `${this.elements[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            str += `,${this.elements[i]}`;
        }

        return str;
    }
}

const filaDoPao = new Queue();
filaDoPao.enqueue('Francês');
filaDoPao.enqueue('Banha');
filaDoPao.enqueue('Brioche');
filaDoPao.dequeue()
console.log(filaDoPao.size(), filaDoPao.toString());