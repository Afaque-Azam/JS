let name = "Afaque azam"
let age = 24;
let totalPrice = 239.99;
console.log(name);
console.log(age);
console.log(totalPrice);
  
  // can not be redeclare but updated.
name = "arshe azam"
console.log(name);

age = 23;
console.log(age);

let a;
console.log(a);  // undefined


// scope

{
    let b = 5;
    console.log(b);
}
// console.log(b);   // error

{
    let b = 12;
    console.log(b);
}