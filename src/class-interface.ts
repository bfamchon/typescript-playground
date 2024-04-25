export interface Human {
  getName(): string;
}

class Person implements Human {
  constructor(private name: string) {}
  getName() {
    return 'Hello, ' + this.name;
  }
}

const me = new Person('Baptiste');
