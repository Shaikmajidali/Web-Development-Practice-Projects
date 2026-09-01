/*
Qs1.for a give array with marks of student 
-> [85, 97, 44, 37, 76, 60];
Find the average marks of entire class
*/
let marks =  [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let i = 0 ; i <= marks.length-1 ; i++)
{
  sum += marks[i];
}//close of for-loop
console.log(sum);
console.log("The Average using for-loop : ",sum/marks.length);

console.log("---------------------------------------------------");

//using for-fo-loop
let sum1 = 0; 
for(let el of marks)
{
 sum1+=el;
}//close of for-of-loop
console.log(sum1);
let avg = sum1/marks.length;
console.log(`The Average using for-fo-loop : ${avg}`);

console.log("======================================================================================");

/*
Qs2.For a given array with prices of 5 items
->[250, 645, 300, 900, 50]
All items have an offer of 10% off on them.
Change the array to store final price after
appling offer.
*/

 let prices = [250, 645, 300, 900, 50];
 let Discount = 10;

 for(let price of prices)
 {
    let offer = price / Discount - price;
    console.log(offer);
                                       
 }//close of for-of-loop

 console.log("=============================================================");

 /* 
Qs3. create an array to store companies
->"Bloomerg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

a.Remove the first company from the array
b.Remove Uber & Add Ola in its palce
c.Add Amazon at the end
*/

let companies = ["Bloomerg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);

console.log("---------------------------------------------------------");
//a.Remove the first company from the array
console.log("Remove the first company : ",companies.shift());
console.log(companies);

console.log("---------------------------------------------------------");
//b.Remove Uber & Add Ola in its palce
companies.splice(1,2,"Ola")
console.log("Add Ola in its palce: ",companies);

console.log("---------------------------------------------------------");
//c.Add Amazon at the end
companies.push("Amazon")
console.log(companies);
