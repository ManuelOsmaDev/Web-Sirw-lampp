const button = document.getElementById("btn");
const lamp = document.getElementById("light");

function toggleBtn(){
    button.classList.toggle("active")
    lamp.classList.toggle("on")
}