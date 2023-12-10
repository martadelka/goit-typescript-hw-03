class Key {
  private signature: Number = Math.floor(Math.random() * 1000);

  getSignature(): Number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  private tenants: Array<Person> = [];
  constructor(protected key: Key) {}
  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Hello, I'm home");
    } else {
      console.log("Door is closed");
    }
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
      console.log("Key is valid. Door is opened");
    } else {
      console.log("Sorry. Key is invalid");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};