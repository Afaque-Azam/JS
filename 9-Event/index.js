// event :- the change in the state of an object is known as an event. ex- click, keypress,keyup,keydown,submit,print & many more.

// these are arise from user interaction.

let btn2 = document.querySelector("#btn2");
// btn2.ondblclick = () => {
//     console.log("btn2 was clicked 2x")
// }

btn2.addEventListener("dblclick", () =>{ // multiple handler method
    console.log("clicked 2x HANDLER1")
});

btn2.addEventListener("dblclick", () =>{
    console.log("clicked 2x HANDLER2");
});

const handler3 = () =>{
    console.log("clicked 2x HANDLER3");
};
btn2.addEventListener("dblclick", handler3);

// remove handler
btn2.removeEventListener("dblclick" , handler3);




// let mydiv = document.querySelector("#div1");
// mydiv.onmouseover = () => {
//     console.log("Yes");
// }