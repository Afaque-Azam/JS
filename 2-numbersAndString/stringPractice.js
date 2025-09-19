// Q.1 :- Prompt the user to enter their full name.Generate a username for them based on the input.Start username with @,followed by their full name and ending with the full name length.

let userName = prompt("Enter your full name : ");
let str1 = "@";
let str2 = userName.length;

let res = str1 + userName + str2;
console.log(res);
