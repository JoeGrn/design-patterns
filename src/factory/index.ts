interface Product {
    name: string;
}

class ConcreteProduct implements Product {
    name = ''
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

class Creator {
    static createObject(input: string): Product {
        switch (input) {
            case 'a':
                return new ConcreteProductA()
            case 'b':
                return new ConcreteProductB()
            case 'c':
                return new ConcreteProductC()
            default:
                return new ConcreteProductA()
        }

    }
}

function clientCode() {
    const productA = Creator.createObject('a')
}

clientCode();