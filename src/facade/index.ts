class Facade {
    protected subsystem1: Subsystem1;
    protected subsystem2: Subsystem2;

    constructor(subsystem1?: Subsystem1, subsystem2?: Subsystem2) {
        this.subsystem1 = subsystem1 || new Subsystem1();
        this.subsystem2 = subsystem2 || new Subsystem2();
    }

    // Facade manages subsystems
    // Initialisation in the correct order, order methods should run

    public manageSubsystems(): void {
        console.log(this.subsystem1.initialise());
        console.log(this.subsystem2.initialise());
        console.log(this.subsystem1.run());
        console.log(this.subsystem2.run());
    }
}

class Subsystem1 {
    public initialise(): string {
        return 'Subsystem1 Initialising';
    }

    public run(): string {
        return 'Subsystem1 Running';
    }
}

class Subsystem2 {
    public initialise(): string {
        return 'Subsystem2 Initialising';
    }

    public run(): string {
        return 'Subsystem2 Runnning';
    }
}

const subsystem1 = new Subsystem1();
const subsystem2 = new Subsystem2();
const facade = new Facade(subsystem1, subsystem2);
facade.manageSubsystems()