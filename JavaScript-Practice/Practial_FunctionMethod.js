/*
Qs1. Create a function using the "function" 
     keyword that take a String as argument
     returns the number of vowels in the String.
*/

function countVowels(vowel)
{
    let count = 0; 

    for(let vo of vowel)
    {
        if(vo == "a" || vo == "e" || vo == "i" || vo == "o" || vo == "u")
        {
         count++;
         console.log("The vowel is : ",vo);
        }//close of if
    }//close of for-of-loop
    console.log("The count of Vowel IN noraml function: ", count);

}//close of function 

countVowels("Shaik Majid Ali");

/*
Qs2. Create an arrow function to perform 
     the same task
*/

let countVowelfun = (vowel) =>
{
  let  count = 0; 
 for(let vl of vowel)
 {
   if(vl == "a" || vl == "e" || vl == "i" || vl == "o" || vl == "u")
   {
       count++;
   }//close of if
 }//close of for-of-loop
 console.log("The count of Vowel in Arrow Function: ", count);
};

countVowelfun("Shaik Majid Ali");

//---------------------------------------------------------------------
/*
Qs3. For a give array of numbers, print the square 
     of each value using the forEach-loop 
*/

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

num.forEach(function elm(val)
 {
    console.log("The Squre : ",(val * val));

 });

console.log("---------------------------------------");

//other way to do 
let num1 = [2, 3, 4, 5, 6];

let square = (num1) =>
{
    console.log(num1 * num1);
}//close of function

num1.forEach(square);

console.log("===============================================");
/* 
Qs4. We are given array of marks of students. 
     Filter our of the marks of student that 
     scored 90+
*/

let marks = [90, 89, 97, 99, 34, 89, 78];
let count = 0;

let score = marks.filter((val) =>{
    if(val >= 90)
      {
        count++;
      }//close of if
      return val >= 90;
})//close of filter method
console.log(`${count} stud got score 90 to 90+`);
console.log("the score of student : " , score);

/*
Qs5. Take a number n as input from user. Create an Array of number from 1 to n.
     Use the reduce method to calculate sum of all number in the Array.
     Use the reduce method to calculte product of all number in the Array.
*/

//Take a number n as input from user. Create an Array of number from 1 to n.
const prompt = require("prompt-sync")();
let num2 = Number(prompt("Enter a number for Array"));

let arr5 = [];

for(let i = 1; i <= num2; i++)
{
  arr5.push(i);
}//close of for-loop
console.log(arr5);

//Use the reduce method to calculate sum of all number in the Array.
let sum = arr5.reduce((first , secound) => {

     return first + secound;
})
console.log("The sum of elements",sum);

// Use the reduce method to calculte product of all number in the Array.

let product = arr5.reduce((first , secound) => {
 return first * secound;
})
console.log("calculte product is : ", product);


