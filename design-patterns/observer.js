class ObservableSubject{
    #titulo;

    #observers = []; //array de observers cadastrados

    constructor() {
        setTimeout(() => {
            this.#titulo = 'teste do pattern observer';
            this.notifyAllObservers();
        }, 3000);
    }

    notifyAllObservers(){
        this.#observers.forEach(observerFunction => observerFunction(this.#titulo));
    }


    subscribe(observer){
        this.#observers.push(observer);
    }
}


class Consumer{
    constructor(observable) {
        observable.subscribe((result) => {
            console.log('opa, chegou uma mudança!', result);
        });
    }
}

const observableObj = new ObservableSubject();
const consumerObj = new Consumer(observableObj);