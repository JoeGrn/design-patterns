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
const adapted = new Adapter(adaptee);

clientCode(adapted);
