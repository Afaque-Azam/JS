// object is a collection of key-values pair.
// where keys are string and values can be any data type.

const student = {
    name : "Afaque azam",
    age : 12,
    marks : 78.5,
    isPass : true
};
console.log(student);

// console.log(typeof student);  // data type object hoga.

// console.log(typeof student["marks"]);  // object ke keys ka data type number hoga
// console.log(typeof student["isPass"]);
// console.log(typeof student["name"]);

  // access using dot notation
  //jab property ka name me koi space ya special char nahi hota h

// console.log(student.name);
// console.log(student.age);
// console.log(student.marks);
// console.log(student.isPass);

// access using bracket notation
//jab property ka name me koi space ya special char hota h


// console.log(student["name"]);
// console.log(student["age"]);
// console.log(student["marks"]);
// console.log(student["isPass"]);


  // update in object 
  // object const hai lekin uske keys me update kiya ja sakta hai

// student["age"] = student["age"] + 12;
// console.log(student.age);

// student["name"] = "Nishu";
// console.log(student.name);

// nested object and acces method.

let student1 = {
    name : "Amit",
    marks : {
        math : 90,
        science : 85
    }
};

console.log(student1.name);
console.log(student1.marks.math);
console.log(student1["marks"]["science"]);
