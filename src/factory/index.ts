interface Product {
    name: string;
}

class ConcreteProduct implements Product {
    name = 'ConcreteProduct'
}

// Subclasses provide implementation

class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'ConcreteProductA'
    }
}

class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'ConcreteProductB'
    }
}

class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'ConcreteProductC'
    }
}

// Logic to allow client to consume implementation of parent class required

export class Creator {
    static createObject(input: string): Product {
        switch (input) {
            case 'a':
                return new ConcreteProductA()
            case 'b':
                return new ConcreteProductB()
            case 'c':
                return new ConcreteProductC()
            // Base class often includes default implementation
            default:
                return new ConcreteProduct()
        }

    }
}

const productA = Creator.createObject('a')
const productB = Creator.createObject('b')
const productC = Creator.createObject('c')
