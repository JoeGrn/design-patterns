class Target {
    public request(): string {
        return '123';
    }
}

class Adaptee {
    public specificRequest(): number {
        return 123;
    }
}

// Class contains logic to make two different implementations compatable

export class Adapter extends Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.specificRequest().toString();
        return result;
    }
}

function clientCode(target: Target) {
    target.request();
}

const adaptee = new Adaptee();

// Apply adapter

const adapted = new Adapter(adaptee);

// Compatable

clientCode(adapted);
