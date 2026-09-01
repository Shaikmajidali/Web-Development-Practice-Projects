//using of normal-Function

function myFunction()
{
     console.log("Hi.................");
     console.log("Hello every one :)");

}//close of function

//now using of parameter-function 
function msgfunction(msg)
{
   console.log(msg);
}//closee of function

//making a function called as sum using return;
function sum(num1, num2)
{
    s = num1 + num2;
    return s;
}//close of function sum

//Arrow Function 

const ArrowFun = (a , b) => 
     { 
          console.log(a / b)
     };

let Arrowmult = (a , b) => 
     {
       console.log(a * b);
     };

const printHello = () => 
     {
       console.log("Hello");
     };    



myFunction();
msgfunction("its me majid ali");//in this value is called as argument
let vl = sum(12,12);
console.log(vl);
ArrowFun(12,3);
Arrowmult(1 , 8);
printHello();

//-----------------------------------------------------------------
//-----no using of Methods-----

//---now using of forEach-loop-Function---
console.log("=========Normal forEach-loop-function=======================");


let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr1.forEach(function elementvalue(val) 
  {
     console.log("the value of array : ",val);
  })//close of foreach-loop-Function

console.log("==========Arrow forEach-loop-function======================");
//---now using of Arrow forEach-loop-function

let arr2 = ["ali", "majid", "shaik", "moiz"]

arr2.forEach((val , index , arr2) =>
       {
       console.log( index , val , arr2);             
       }
       );
 

console.log("==========Method Map======================"); 
//map method

let arr3 = [12, 23, 4, 5, 9, 10];

let newArray = arr3.map((val) =>{
     return val * 2;
})
console.log(newArray);


console.log("==========Method filter======================");
//filter method

let arr4 = [1,2,3,4,5,6,7,8,9,10];

let even = arr4.filter((val) =>{
     return val % 2 == 0;
})
console.log(even);

console.log("==========Method reduce======================");
//reduce method

let arr5 = [1,2,3,4,5];
/* 
this "res" parameter act as first element and this "curr" parameter 
act as secound elements.  
*/
const output = arr5.reduce((res, curr)=>{
     return res > curr ? res : curr;
})
console.log("large element",output);

