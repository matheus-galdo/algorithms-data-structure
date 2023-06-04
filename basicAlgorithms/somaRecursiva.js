
function somaRecursiva(lista) {
    if (lista.length === 1) {
        console.log('caso base', lista);
        return lista[0];
    }else{
        let listaNova = [...lista];
        listaNova.splice(0,1);
        const result = lista[0] + somaRecursiva(listaNova);
        console.log('o resultado da lista atual é:', result, [...lista]);
        return result;
    }
}

const r = somaRecursiva([2,4,6]);

console.log(r);