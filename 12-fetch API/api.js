//  API :- Application Programming Interface

// The fetch API provides an interface for fetching(sending/recieving) resources.

// it uses Request and Response objects.

// fetch() :- used to fetch a resources(data)

// json() :- return a second promise (input is JSON, output is JS object)

const URL = "https://catfact.ninja/facts";


let fact = document.querySelector("#fact");
let btn = document.querySelector("#btn");

const getFacts = async () =>{
    let response = await fetch(URL);
    let catFact = await response.json();
    let rndmidx = Math.floor(Math.random()*catFact.data.length);

    // Pehle outer object ke andar jao (catFact)
    //Phir uske andar jo data naam ka array hai, uski length lo

    fact.innerText = catFact.data[rndmidx].fact;

    // catFact object me jao waha data name ki array hai uske rndmidx par jo fact hai usko fact ke innertext me dal do
  
}

btn.addEventListener("click",getFacts);

