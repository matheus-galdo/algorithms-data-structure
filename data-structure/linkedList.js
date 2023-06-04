class LinkedList {

    head = undefined;
    tail = undefined;
    count = 0;


    /**
     * Adiciona um elemento no final da lista
     * @param {*} value 
     */
    push(value) {
        const newNode = { value, next: undefined };
        if (this.count === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            const lastNode = this.tail;
            lastNode.next = newNode;
            this.tail = newNode;
        }

        this.count++;
    }

    /**
     * Adiciona um elemento num índice específico
     */
    insert(value, index) {
        let currentNode = this.head;
        let i = 0;
        while (currentNode !== undefined) {

            if (i === index - 1) {
                const nextNode = currentNode.next;
                const newNode = { value, next: nextNode };
                currentNode.next = newNode;
                this.count++;

                return;
            }

            currentNode = currentNode.next;
            i++;
        }
    }

    /**
     * Encontra um elemento em uma posição específica
     * @param {*} index 
     * @returns 
     */
    getElementAtIndex(index) {
        if (index < 0 || index > this.count - 1) {
            console.log('elemento não existe');
            return undefined;
        }

        let currentNode = this.head;

        for (let i = 0; i <= index; i++) {
            if (i === index) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }
    }

    /**
     * Remove um elemento em uma posição específica
     * @param {*} index 
     */
    removeAt(index) {
        let currentNode = this.head;

        if (index > this.count - 1) {
            console.log('elemento não existe');
            return undefined;
        }

        if (index === 0) {
            this.head = currentNode.next;
            this.count--;
            return currentNode;
        }

        
        let previousNode = this.getElementAtIndex(index - 1);
        currentNode = previousNode.next;
        previousNode.next = currentNode.next;
        this.count--;
        return currentNode;
    }

    // ver como vão ser no livro
    toString() {
        if (this.count === 0) {
            return '';
        }

        const list = [];

        let currentNode = this.head;
        do {
            list.push({ value: currentNode.value, nextItem: currentNode.next ? currentNode.next.value : null });
            // console.log(currentNode.value);
            currentNode = currentNode.next;
        } while (currentNode !== undefined);

        return JSON.stringify(list)
            .replaceAll('[{', '[\n{')
            .replaceAll('}]', '}\n]')
            .replaceAll('},{', '},\n{')
            .replaceAll('{', '  {');
    }
}


const listaLigada = new LinkedList();
listaLigada.push('galdo');
listaLigada.push('roro');
listaLigada.push('daisy');
console.log(listaLigada.toString());

console.log('\n');
listaLigada.insert('samuca', 1);
console.log(listaLigada.toString());


console.log('\n');
console.log(listaLigada.getElementAtIndex(3));

console.log('\n');
listaLigada.removeAt(1);
console.log(listaLigada.toString());
