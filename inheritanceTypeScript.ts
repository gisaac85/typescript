//inheritance in TypeScript
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

let dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

dog.bark();
dog.move(5);
dog.bark();