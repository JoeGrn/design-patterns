interface Strategy {
    doAlgorithm(data: string[]): string[]
}

class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public manipulateData(): void {
        this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
    }
}

// Two different method implementations

class ConcreteStrategyA implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.sort();
    }
}

class ConcreteStrategyB implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.reverse();
    }
}


const context = new Context(new ConcreteStrategyA());
context.manipulateData();

// Update method logic at runtime

context.setStrategy(new ConcreteStrategyB());
context.manipulateData();