console.log("-----------------if Statements-Q1----------------------");

let age=17;
if(age<23)
{
 console.log("Now you can vote:");
}//close of if
else
{
 console.log("you can give vote:");
}//close of else 

console.log("-----------------if Statements-Q2----------------------");

// let mode = prompt("Enter the color");

let mode = "Dark";

if(mode === "dark" || mode === "Dark")
{
  console.log("Noe the screen color is 'Black'");
}//close of if

else if (mode === "light" || mode === "Light") 
{
   console.log("Noe the screen color is 'White'");
}//close of if

else
{
  console.log("Plz enter correct");
}//close of else
console.log("-----------------if Statements-Q3----------------------");
let num = 45;
if(num % 2 === 0)
{
    console.log(num,"This number is even");
}//close of if
else
{
console.log(num,"This numder is odd");
}//close of else

console.log("-----------------if-else--Statements---Q1--------------------");
let age1 = 65;
if(age1 <= 18)
  {
   console.log("Junior");
  }//close of if
else if (age1 > 60)
  {
   console.log("Senior");
  }//close of if-else
else
  {
   console.log("Middle");   
  }//close of else   
console.log("================================================================");

console.log("-----------------switch Statements--------------------"); 
const user = "Apple";   
switch(user)
{
    case "Apple":
      console.log("Apple is a sweet fruit.");
    break;
    
     case "Orange":
      console.log("Orange is rich in Vitamin C.");

    break;

     case "Papayas":
      console.log("Papaya is good for digestion.");
    break;

     case "Mangoes":
      console.log("Mango is the king of fruits.");
    break;

    default:
        console.log("Fruit not found.");
    
}//close of switch 
