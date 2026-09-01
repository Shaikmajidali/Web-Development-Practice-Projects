let marks = [95, 96, 90, 78, 60, 50, 40, 46, 55];
console.log(marks);
console.log("The marks of ali is : ",marks[1]);
console.log("=======================================================");

let names = ["ali", "shaik", "majid"];
console.log(names);
console.log("the name of stud is : ",names[2]);
console.log(typeof marks);
console.log("=======================================================");

//now change the value of arrays using index 
names[0] = "moiz";
console.log(names);

console.log("=======================================================");

//now using of looping 
for(let i = 0 ; i <= names.length-1 ;  i++)
{
  console.log(names[i]);
}//close of forloop

console.log("----------------------------------------------");

//now using of for-of loop
for(let el of names)
{
 console.log(el);
}//close for-of-loop

console.log("----------------------------------------------");
//now using of for-in-loop
for(let el in names)
{
console.log(el);
}//close for-of-loop

console.log("=======================================================");

let foodItems = ["Potato", "Apple", "Litchi", "Tomato"];
console.log(foodItems);

//using method Push() for adding elements 
foodItems.push("Banana");//using to add method form last
foodItems.push("Chips", "Orange", "Icecream");
console.log("Using the method Push() : ",foodItems);

//using method Pop() for removing elements
foodItems.pop();//this method remove elements form last
console.log("Using the method Pop() : ",foodItems);

//now using of tostring() method
let str = foodItems.toString();
console.log("Using of tostring() method : " ,str);
console.log("Using of tostring() method : " ,marks.toString());

//now using method Concat()
console.log("Using of concat() method : ", foodItems.concat(marks, names));

//now using method unshift()
foodItems.unshift("pizza");//using this method can add the elements in the first 
console.log("Using of unshift() method : ",foodItems);

//now using method removeing the first elements
console.log("Using of shift() method : ",foodItems.shift());

//now using of method slice()
console.log(foodItems);
let sli = foodItems.slice(1 , 6)
console.log("Using of slice() method : ",sli);

//now using method splice()
let num = [1,2,3,4,5,6,7,8,9,10];
console.log(num);
//using this method we can add remove and index
num.splice(2, 4, 101, 102)
console.log("Using of splice() method : ",num);