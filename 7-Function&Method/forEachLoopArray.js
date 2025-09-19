// forEach loop in arrays:- isko higher order function ya method v kahte hain.

// kyonki forEach ek dusre function ko as a parameter leta hai.

// arr.forEach(callBackFunction)

// callBackFunction :- it is a function to execute for each element in the array.

// *A callback is a function passed as an argumrnt to another function.


let array = [3,4,5];

array.forEach(function (val){
    console.log("num = ",val);
    console.log("square = ",val*val);
    console.log("increment =",val+1);
    console.log("double =",val*2);
});


// array.forEach((val)=>{
//     console.log(val);
// });