// map :- creates a new array with the result of some operation, to each element of the original array.

// let array = [1,2,3,4,5,6];
// let newArray = array.map(function (num){
//     return num*2;  
// });
// console.log(newArray);



// filter :- creates a new array of elements that give true for a condition / filter.

// eg- all even elements

// let array = [2,3,4,5,6,77,888,6554,2359,13,0];
// let newArray = array.filter(function (num){
//     return num%2 === 0;
// });
// console.log(newArray);


// reduce :- perform some operation and reduce the array to a single value . it returns that single value.

// let arr = [1,2,3,4,56,7];

// const output = arr.reduce(function (result,current){
//     return result+current; // find sum
// });

// console.log(output);

// const output = arr.reduce(function(prev,curr){
//     return prev > curr ? prev : curr;  // find max value
// })

// console.log(output);


// Q. filter out of the marks of the students that scored 70+

// let marks = [ 24,56,78,98,67,48,88,90];

// let res = marks.filter(function (val){
//     return val > 70;
// });
// console.log(res);


// Q. take a number n as an input from user. create an arary of numbers from 1 to n.
// use the reduce method to calculate sum of all number in the array.
// use the reduce method to calculate product of all number in the array. also called factorial of n.

let number = prompt("enter a number : ");
let arr = [];
for(let i=1; i<=number; i++){
    arr[i-1] = i;
}
console.log(arr);

// addition

let sum = arr.reduce(function (res,curr){
    return res + curr;
});
console.log("sum is =",sum);

// mulltiplication
let mul = arr.reduce(function (prev, curr){
    return prev * curr;
});
console.log("multiplication is =",mul);