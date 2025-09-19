// Q. create a H2 heading element with text "Hello JavaScript", Append "Apna college students" to this text using js.

let h2 = document.querySelector("h2");

h2.innerText = h2.innerText + " from Apna College Students.";


// Q. create 3 divs with common class name "box". access them & add some unique text to each of them.

// document.getElementsByClassName("box")[0].innerText = "Afaque Azam";

// document.getElementsByClassName("box")[1].innerText = "Nurshabba Parveen";

// document.getElementsByClassName("box")[2].innerText = "Rojina Parveen";

let divs = document.querySelectorAll(".box");

let idx = 1;
for(let div of divs){
    div.innerText = `new value ${idx}`;
    idx++;
}

// divs[0].innerText = "Afaque Azam";
// divs[1].innerText = "Nishu";
// divs[2].innerText = "Riju";


// Q. create a new button element .give it a text "Click Me" bg color of red & text color of white & insert the buutton as the first element inside the body tag.

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

document.querySelector("body").prepend(newBtn);


// Q. create a <p> tag in html give it a class and some styling . Now create new class in css and try to append this class to the <p> element.

let myPara = document.querySelector("p");

// let myClass = myPara.setAttribute("class","newClass");

myPara.classList.add("newClass");