//Practical Qustion for loop

/*
Qs1.Print all even numbers form 0 to 100.
*/

for(let i = 0; i <= 100; i++)
{
    if(i % 2 === 0)
    {
      console.log(i);
    }//close of if
    else
    {
      console.log(" ");
    }//close of else
}//close of forloop

 console.log("============================================================");

 /*
 Qs2.Create a game where you startwith any random game number. 
    Ask the use to keep guessing the game number until the user,
    enters correct value.
  */

const prompt = require("prompt-sync")();
let usernum = prompt("Guss the game number : ");

let gamenum = 99;

while(usernum != gamenum)
{
 usernum = prompt("yoy entered wrong num Guess again : ");
}//close of while
console.log("congratulation, you entered the right right number");
console.log("===============================================================");

