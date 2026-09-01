console.log("-------------Using of for-loop--Q1---------");

for(let i = 1; i <= 100; i++)
{
  console.log(i);
}//close of for-loop
console.log("End of the Loop");

console.log("-------------Using of for-loop--Q2---------");

let sum = 0;
let num = 5;
for(let j = 1; j <= num; j++)
{
    sum+=j;
}//close of for-loop
console.log("the sum : ",sum);

// console.log("-------------Using Infinite for-loop--Q3---------");
// for(let k = 1; k >= 0; k++)
// {
//   console.log(k);
// }//close of for-loop

console.log("-------------Using While-loop--Q1---------");
let a = 1;
while (a <= 5)
{
   console.log("Hello Ali");
   a++;
}//close of while-loop

console.log("-------------Using do-While-loop--Q1---------");
let yn = 1;
do
{
    console.log("Hello Shaik");
    yn++;
}

while(yn <= 4);

console.log("-------------Using for-of-loop--Q1---------");
let str = "majid";
let size =0;

for(let ch of str)
{
   console.log(ch);
   size++;
}//close of for-of-loop
 console.log("The length of String : ", size);

console.log("-------------Using for-in-loop--Q1---------");
let student=
   {
     name    : "Ali",
     age     : 23,
     Roll_no : 47,
     cgpa    : 7.68
   };
console.log("key  value");
for(let key1 in student)
{
  console.log(key1, student[key1]);//this using to print the key and value of the object
}//close of for-in-loop  
