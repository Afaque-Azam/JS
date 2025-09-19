// push method:- add to the end

// let arr = [12,23,45,67,-2];
// console.log(arr);

// arr.push(99);
// console.log(arr);

// arr.push("afaque",111,"nishu");
// console.log(arr);

// pop method:-delete from end and return

// let arr1 = [23,34,54,-98,345]
// console.log(arr1);

// arr1.pop();
// console.log(arr1);

// arr1.pop(23);
// console.log(arr1);

// toString method:- convert array to string 
// original array ke andar change nahi karta h ,ek nya array banata hai change karke 

// let arr2 = [12,334,-55,3,98];
// let newArr2 = arr2.toString();
// console.log(newArr2);

// concat method:- join multiple arrays & return result

// let a1 = [1,2,3,4,5,6,7];
// let a2 = ["afaque", "Nishu", "-12"];
// let a3 = a1.concat(a2);
// console.log(a3);

// unshift method:- add to start

// let arr = [1,2,3,4,5,6];
// arr.unshift(0);
// console.log(arr);
// arr.unshift(-1);
// console.log(arr);

// shift method:- delete from start and return

// let arr1 = [23,34,54,-98,345];
// arr1.shift();
// console.log(arr1);

// slice method:- return a piece of the array

// let arr = [1,2,3,4,5,6,7,8,9];
// let newArr1 = arr.slice(2,6);
// console.log(newArr1);


// splice method :- change original array(add,remove,replace)

// let arr = [1,2,3,4,5,6,7,8,9];

// replace element
// arr.splice(2,3,101,102,103)  // idx 2 par jake next 3 element ko replace karna hai jo diya gya hai usse.
// console.log(arr);

// add element
// arr.splice(2,0,501,502);  // idx 2 par jake 0 element delete karna haai aur jo diya gya hai usko add kar dena hai
// console.log(arr);

// delete element
// arr.splice(2,2);  // idx 2 par jake 2 element ko delete kar dena hai bas.
// console.log(arr);

// agar splice ke andar kewal ek index pass karenge to wah slice ke tarah kaam karega aur us index se sare element ko return kar dega 

// let newArr = arr.splice(4);
// console.log(newArr); 
// console.log(arr);

