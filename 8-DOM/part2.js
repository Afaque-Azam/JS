// get and set element

// let div = document.querySelector("div");
// let id = div.getAttribute("id");
// console.log(id);

// let newId = div.setAttribute("id","myId")
// console.log(newId);


// let para = document.querySelector("p");
// let className = para.getAttribute("class");
// console.log(className);

// let cName = para.setAttribute("class","myClass");
// console.log(cName);

// insert element.

let btn = document.createElement("button");  
btn.innerText = "Click Me";

let div = document.querySelector("div");
div.append(btn);
// div.prepend(btn);
// div.before(btn);
// div.after(btn);


let newHeading = document.createElement("h1");

newHeading.innerText = "Hey i am new !";
document.querySelector("body").prepend(newHeading);


// delete element

// div.remove();

// btn.remove();

// newHeading.remove();