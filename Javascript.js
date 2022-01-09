function buy() {
let name = prompt("What is your name?");
let email = prompt("What is your email?");
let emoji = prompt("What is your favorite emoji?");
alert("Thank you,  " + name +  "! " + emoji);
}
let buyButton = document.querySelector(".buy-button");
buyButton.addEventListener("click", buy);
