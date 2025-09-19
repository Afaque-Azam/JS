let URL = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("#btn");
let image = document.querySelector("#image");

const getImg = async () =>{
    const res = await fetch(URL);
    const img = await res.json();

    console.log(img);
    image.src = img.message;
}
getImg();

btn.addEventListener("click",getImg);