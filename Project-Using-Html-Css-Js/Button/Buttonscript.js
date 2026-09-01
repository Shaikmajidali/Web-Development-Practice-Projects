function seeTime() {
  const now = new Date();
  document.getElementById("display").innerHTML = now.toLocaleTimeString();
}

function changecolor()
{
    document.body.style.backgroundColor="pink";
}

function changeText() {
  document.getElementById("texts").innerText = "I LOVE U";
}

function giveelart()
{
    alert("👋 Hello! Welcome to my page 😊");
}

function toggleEvent() {
  const text = document.getElementById("text");
  
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function changeImage() {
  document.getElementById("pic").src = "https://static.vecteezy.com/system/resources/previews/055/651/903/non_2x/the-wolf-head-logo-is-shown-on-a-black-background-free-vector.jpg";
}

function calculator() {
  document.getElementById("sum").innerHTML =
    '<input id="num1" type="number"> + ' +
    '<input id="num2" type="number"> ' +
    '<button onclick="cal()">Sum</button>'
    '<p id="result"></p>';

}

  function cal() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  let result = num1 + num2;

  document.getElementById("sum").innerHTML = "Result: " + result;
}

let pass="ali123";
function password(){

document.getElementById("word").innerHTML='<input type="password" id="userPass">'+
                                          '<button onclick="correct()">Check</button>';

}

function correct()
{
  let word = document.getElementById("userPass").value;
  if (word === pass) {
  alert("✅ Correct password");
} else {
  alert("❌ Incorrect password. Please try again.");
}
}

function bulb() {
  let img = document.getElementById("onoff");
  img.classList.toggle("glow");
}

function creativity()
{
  let go=document.getElementById("move");
  go.classList.toggle("moving");
}

