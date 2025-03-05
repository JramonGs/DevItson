/*
console.log('Hello, world!');
const name = 'Aaron';
let apellido = 'Villalobos';
*/

const body = document.querySelector("body");
const button = document.querySelector("button");

button.addEventListener("click",()=> {
    body.classList.toggle("dark-theme");
})