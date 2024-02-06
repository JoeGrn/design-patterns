interface Builder {
    setName(name: string): this
    setEmail(name: string): this
}

// Class to build - can be generic so long as it fits the builder interface

class User {
    private name: string
    private email: string

    public setName(name: string): void {
        this.name = name;
    }

    public setEmail(email: string): void {
        this.email = email;
    }
}

class UserBuilder implements Builder {
    private user: User;

    public setName(name: string): this {
        this.user.setName(name);
        return this;
      }
    
      public setEmail(email: string): this {
        this.user.setEmail(email);
        return this;
      }
    
      public build(): User {
        return this.user;
      }
}

class UserDirector {
    buildUser(): User {
        return new UserBuilder().setName('Joe').setEmail('joe.green@email.com').build()
    }
}

const userDirector = new UserDirector()
const user = userDirector.buildUser()