// string is a sequence of characters used to represent text.

// let str = "Afaque Azam";
// console.log(str);
// console.log(typeof(str));


// property :- jo koi value deti hai.

// let length = str.length;
// console.log(length);

// console.log(str[0]);
// console.log(str[4]);
// console.log(str[6]);
// console.log(str[10]);
// console.log(str[11]);


// template literals    `string`

// let special = `this is a template literal ${1+2+4-2}`
// console.log(special);

//let specialString = `This is a template literal`
// console.log(specialString);
// console.log(typeof specialString);  // string

// let obj = {
//     item:"pen",
//     cost: 10
// };
      // string interpolation
// let output = `The cost of ${obj.item} is ${obj.cost} rupees.`
// console.log(output);


// escape chracter

// let  str1 = "Afaque\nAzam";
// let str2 = "Afaque\tAzam";
// console.log(str1);
// console.log(str2);
// console.log(str1.length);
// console.log(str2.length);

// string method:- these are built-in function to manipulate string. 
// method koi kam karta hai jabki property value deti hai .

// let str = "abcdef"
// console.log(str.toUpperCase());

// string are immutable so it can not change in original string.

// let str2 = "Afaque Azam"
// let newStr = str2.toUpperCase();
// console.log(str2);
// console.log(newStr);

// let str1 = "ABCDEF"
// console.log(str1.toLowerCase());

// let str2 = "Afaque Azam"
// let newStr = str2.toLowerCase();
// console.log(str2);
// console.log(newStr);

// trim method :- remove whitespaces from start and end

// let sr = "  Af aq ue   Aza m    ";
// let newSr = sr.trim();
// console.log(newSr);

// slice method :-returns part of string 

// let str = "Afaque Azam";
// let newStr = str.slice(2,8);
// console.log(newStr);

// concat method :-join str2 with str1

// let str1 = "Afaque ";
// let str2 = "Azam";
// let newStr = str1.concat(str2);
// console.log(newStr);

// let res = str1 + str2;
// console.log(res);

// replace method:-

// let str = "Afaque Azam";
// let res = str.replace("A","1")  // first match replaced
// console.log(res);

// let res1 = str.replaceAll("A","1");
// console.log(res1);

// charAt method:- returns specific character at specific index

let str = "Nurshabba parveen";
console.log(str.charAt());
console.log(str.charAt(3));
console.log(str.charAt(12));
console.log(str.charAt(18));