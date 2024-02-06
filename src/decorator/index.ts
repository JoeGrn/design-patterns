interface Component {
    operation(): string;
}

class ConcreteComponent implements Component {
    public operation(): string {
        return 'ConcreteComponent';
    }
}

class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    public operation(): string {
        return this.component.operation();
    }
}

class ConcreteDecoratorA extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorA`;
    }
    public parentOperation(): string {
        return `${super.operation()}`;
    }
}

class ConcreteDecoratorB extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorB`;
    }
    public additionalOperation(): string {
        return `AdditionalOperation`;
    }
}

const component = new ConcreteComponent();
const decoratorA = new ConcreteDecoratorA(new ConcreteComponent());
const decoratorB = new ConcreteDecoratorB(new ConcreteComponent());

console.log(component.operation());

console.log(decoratorA.operation());
console.log(decoratorA.parentOperation());

console.log(decoratorB.operation());
console.log(decoratorB.additionalOperation());

