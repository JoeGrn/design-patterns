interface Product {
    name: string;
}

class ConcreteProduct implements Product {
    name = 'ConcreteProduct'
}

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

export class Creator {
    static createObject(input: string): Product {
        switch (input) {
            case 'a':
                return new ConcreteProductA()
            case 'b':
                return new ConcreteProductB()
            case 'c':
                return new ConcreteProductC()
            default:
                return new ConcreteProduct()
        }

    }
}

const productA = Creator.createObject('a')
const productB = Creator.createObject('b')
const productC = Creator.createObject('c')

console.log(productA.name)
console.log(productB.name)
console.log(productC.name)
