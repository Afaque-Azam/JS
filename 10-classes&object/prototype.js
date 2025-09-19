// A javascript object is an entity having state and behaviour (property and method)

// JS object have a special property called prototype.

// we can set prototype using __ proto__

// let students = {
//     fullName : "Afaque Azam",
//     marks : 87,
//     printMarks : function () {
//         console.log("marks = ", this.marks);
//     },
// };

// console.log(students);
// console.log(students.fullName);
// console.log(students.printMarks());

// prototype

let employee = {
    calcTax() {
        console.log("Tax rate is 10%")
    }
};

// let karan1 = {
//     salary : 50000,
// };

// karan1.__proto__ = employee;

let karan2 = {  // if object & proto have same method,object method will be used.
    salary : 50000,
    calcTax() {
        console.log("Tax rate is 20%")
    }
};

karan2.__proto__ = employee;