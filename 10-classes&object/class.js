// Class is a program code template for creating objects.
// Those object will have some state(variable) & some behaviour(function) inside it.

// constructor() method is , automatically invoked by new & it initializes object.

class ToyotaCar {
    constructor (brand,milage) {
        this.brand = brand;
        this.milage = milage;
    }
    features() {
        console.log(`Brand = ${this.brand} & milage = ${this.milage}`);
    }
}

let mys = new ToyotaCar("fortuner", 10);
mys.features();


// inheritance is passing down properties & method from parent class to child class.

// if child and parent have same method then child's method will be used.[Method Overriding].

// example 1
class parent {
    hello(){
        console.log("How are you ?");
    }
}
class child extends parent{
    hello2(){
        console.log("I am fine.");
    }
};
let me = new child();
me.hello();
me.hello2();

// example 2
class person {
    eat() {
        console.log("Eat");
    }
    sleep() {
        console.log("Sleep");
    }
    work() {
        console.log("Do nothing")
    }
}
class engineer extends person {
    work() {
        console.log("Solve Problems");
    }
}
let arfak = new engineer();
arfak.eat();
arfak.sleep();
arfak.work();



// super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

// super() ko subclass ke constructor me sirf ek baar call kiya ja sakta hai.

// JavaScript me subclass ke constructor me this use karne se pehle super() call karna mandatory hai. Warna error milega:

// example 1
class car {
    constructor(name){
        this.name = name;
    }
    start(){
        console.log(`${this.name} is starting...`)
    }
}

class sportsCar extends car{
    constructor(name,speed){
        super(name);
        this.speed = speed;
    }
    showSpeed(){
        console.log(`${this.name} runs at ${this.speed} km/h`);
    }
}

let myCar = new sportsCar("Ferrari",200);
myCar.start();
myCar.showSpeed();

// example 2

class person2 {
    constructor(name){
        this.name = name;
    }
    sayHello() {
        console.log(`Hello, My name is ${this.name}`);
    }
}

class students extends person2{
    constructor(name,roll){
        super(name);
        this.roll = roll;
    }
    sayRoll() {
        console.log(`My roll number is ${this.roll}`);
    }
}

let s1 = new students("Afaque Azam", 2202250100020);
s1.sayHello();
s1.sayRoll();


// eror handling
let a = 5;
let b = 3;
console.log("a+b = ",a+b);
try{
    console.log("a+c = ",a+c);  
}
catch (err){
    console.log(err);
}
console.log("a-b = ",a-b)