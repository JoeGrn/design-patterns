export class Singleton {
    private static instance: Singleton;

    private constructor() { }
    
    public static initialize(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance
    }
}

const s1 = Singleton.initialize();
const s2 = Singleton.initialize();

if (s1 === s2) {
    console.log('Singleton works, both variables contain the same instance.');
} else {
    console.log('Singleton failed, variables contain different instances.');
}