// synchronous means the code runs in a particular sequence of instruction . Each instruction waits for the previous instruction to complete its execution.

// console.log("one");
// console.log("two");
// console.log("three");


// due to synchronous programming, sometimes imp inst get blocked due to some previous inst, which cause a delay in the UI.
// Asynchronous code execution allow to execute next inst immediately doesn't block the flow.

// console.log("hello1");

// setTimeout(() =>{
//     console.log("hello2")
// },2000);

// console.log("hello3");



// Callback Hell :- nested callback stacked below on another forming a pyramid structure. it is difficult to understand & manage.

// har getData() ke baad hum manually agla getData() call kar rahe hain — via getNextdata().

// Pehla call: getData(1, ...), Data 1 print hota hai. Uske baad getNextdata() call hota hai → jo hai () => { getData(2, ...) }

// function getData(id, getNextdata){
//     setTimeout(() =>{
//         console.log("Data",id);
//         if(getNextdata){
//             getNextdata();
//         }
//     },2000);
// }

// getData(1, () =>{
//     getData(2, () =>{
//         getData(3, () =>{
//             getData(4)
//         });
//     });
// });


// Promises :- Promise is for "eventual" completion of task.it is an object in js.It is a solution to callback hell.

// function getData1 (id){
//     return new Promise ((resolve) =>{
//         setTimeout(() =>{
//             console.log("data",id);
//             resolve();
//         },2000);
//     });
// }

// getData1(1)
//     .then(() => getData1(2))
//     .then(() => getData1(3))
//     .then(() => getData1(4));   



// ex 2

// function orderPizza(){
//     return new Promise((resolve,reject) =>{
//         console.log("pizza order kiya gya...");
//         setTimeout(() =>{
//             let pizzaready =true;
//             if(pizzaready){
//                 resolve("yay, pizza aagya..")
//             }else{
//                 reject("oops!, pizza nahi aaya..")
//             }
//         },2000);
//     });
// }

// orderPizza()
//     .then((msg) =>{
//         console.log("Succes!!", msg);
//     })
//     .catch((err) =>{
//         console.log("Error!!",err);
//     });


// Promise chain

// function async1() {
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             console.log("data 1");
//             resolve();
//         },4000);
//     });
// }

// function async2() {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             console.log("data 2");
//             resolve();
//         },4000);
//     });
// }
// console.log("fetching data 1.....")
// async1().then(() =>{
//     console.log("fetching data 2.....")
//     async2().then(() =>{});
// })


// async await :- async function always return a promise
// await pause the execution of its surrounding async function untill the promise is resolve/rejected

function getData(id){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            console.log("data", id);
            resolve();
        },2000);
    });
}

// async function getAllData(){
//     console.log("fetching data 1 ...");
//     await getData(1)
//     console.log("fetching data 2 ...");
//     await getData(2)
//     console.log("fetching data 3 ...");
//     await getData(3)
//     console.log("fetching data 4 ...");
//     await getData(4)
// }
// getAllData();

// IIFE :- immediately invoked function expression
// it is a function that is called immediately as soon as it is defined.

(async function(){
    console.log("fetching data 1 ...");
    await getData(1)
    console.log("fetching data 2 ...");
    await getData(2)
    console.log("fetching data 3 ...");
    await getData(3)
    console.log("fetching data 4 ...");
    await getData(4)
})();



