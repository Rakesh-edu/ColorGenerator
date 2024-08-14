
let btn=document.querySelector('button');

const GetColor=()=>{
const randomNumber = Math.floor(Math.random()*16777215);
const randomCode   = "#" +randomNumber.toString(16);
document.body.style.backgroundColor=randomCode;
}

btn.addEventListener("click",GetColor);