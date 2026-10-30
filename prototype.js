

const animal = {
    name:"sirja",
    speak(){
        console.log("It will make some sound")
    }
}

const dog  =  Object.create(animal);

console.log(dog.name)

class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(this.name + " is eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof");
  }
}

const d = new Dog("Tommy");
d.name = "srija"
d.eat();  // "Tommy is eating"

console.log(typeof Animal); // "function"
console.log(Object.getPrototypeOf(d) === Dog.prototype); // true