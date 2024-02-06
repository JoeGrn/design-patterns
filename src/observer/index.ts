interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}

interface Observer {
    update(subject: Subject): void;
}

class ConcreteSubject implements Subject {
    public state: number;
    private observers: Observer[] = [];

    public attach(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Observer already attached');
        }

        console.log('Attached observer');
        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            console.log('Nonexistent observer');
            return;
        }

        this.observers.splice(observerIndex, 1);
        console.log('Detached observer');
    }

    public notify(): void {
        console.log('Notifying observers');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }


    public randomNumber(): void {
        this.state = Math.floor(Math.random() * (10 + 1));

        console.log(`New state: ${this.state}`);
        this.notify();
    }
}

class ConcreteObserverA implements Observer {
    public update(subject: Subject): void {
        if (subject instanceof ConcreteSubject) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }
}

class ConcreteObserverB implements Observer {
    public update(subject: Subject): void {
        if (subject instanceof ConcreteSubject) {
            console.log('ConcreteObserverB: Reacted to the event.');
        }
    }
}

const subject = new ConcreteSubject();

const observer1 = new ConcreteObserverA();
subject.attach(observer1);

subject.randomNumber();

const observer2 = new ConcreteObserverB();
subject.attach(observer2);

subject.randomNumber();

subject.detach(observer2);

subject.randomNumber();