/*
Qs1.Get user to input a number using prompt("Enter a number:"). Chake if the number is 
 a multiple of 5 or not
*/

const prompt = require("prompt-sync")();
let num = prompt("Enter a number : ");

if(num % 5 === 0)
{
  console.log(num,"This give number is multiple of 5");
}//close of if

else
{
    console.log(num,"This give number is not a multiple of 5");
}//close of else

console.log(" ");    
console.log("=================================================================================================");
console.log(" ");  

/* 
Qs2: Write a code which can give grades to students according to their 
scores:
.80 - 100 > A
.70 - 89  > B
.60 - 69  > C
.50 - 59  > D
.0  - 49  > F
*/

let score = prompt("Enter The marks : ");
let grade;

if(score >= 90 && score <= 100)
{
  grade = "A";
}//close of if

else if(score >= 70 &&  score <= 89)
{
  grade = "B";
}//close of else-if

else if(score >= 60 && score <= 69)
{
    grade = "C";
}//close of else-if

else if(score >= 50 && score <= 59)
{
  grade = "D";
}//close of else-if

else if(score >= 0 && score <= 49)
{
    grade = "F";
}//close of else-if

console.log("Grade : ",grade);