//class in typescript
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
        
    }
    
}

let greeter = new Greeter("Isaac");
console.log(greeter);