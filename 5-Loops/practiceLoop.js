// print all even numbers from 0 to 100.

// for(let i=0; i<=100; i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }


// Create a game where you start with any random game number.Ask the user to keep guessing the number until the user enters correct value.

let gameNum = 7;

let userNum = prompt("Guess the game number : ");
while(gameNum != userNum){

    userNum = prompt("You entered wrong number.Try again !");
}
console.log("Congratulation, you entered the right number.");