// Q. create a toggle button that change the screen to dark mode when clicked & light mode when clicked again.

let toggleBtn = document.querySelector("#button");

let mode = "light";
const changeMode = () =>{
    
    if(mode === "light"){
        document.querySelector("body").style.backgroundColor = "red";
        mode = "dark;"
    }else{
        document.querySelector("body").style.backgroundColor = "blue";
        mode = "light"
    }
}

toggleBtn.addEventListener("click",changeMode);