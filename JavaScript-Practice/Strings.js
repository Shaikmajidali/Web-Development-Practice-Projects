let str = "Shaik Majid Ali";

//now using the pre-defind method
console.log("The Legth of string is : ",str.length);

("===================================================================");
//now using of string in js 
console.log("Seeing the the index value : ",str[1]);

("===================================================================");
//now using of Template Literals
let tem = `This is a template literal`;
console.log("Using of special string : ",tem); 

console.log("===================================================================");
//now using a practial for template literals
let obj = {
 
            item : "personalbar",
            price : 30,   
          };
//without using of the template literals          
console.log("the coset of", obj.item, "is", obj.price, "rupees");

//using of the template literals
console.log(`the coset of ${obj.item} is ${obj.price} rupees`);
console.log(`This is a template literal ${1+2+3}`);

//Escape character
console.log("Shaik \n Majid Ali");//using to give text in "new line"
console.log("Shaik \t Majid Ali");//using for giving the "space"
console.log("Shaik \\ Majid Ali");//using for print "backslash"
console.log("Shaik \" Majid Ali");//using to print the "Double Quote"
console.log("Shaik \' Majid Ali");//using for the "Single Quote"
console.log("Shaik \b Majid Ali");//using for the "backespace"
console.log("Shaik \r Majid Ali");//"Carriage return"
console.log("Shaik \f Majid Ali");//using for  "form feed" new line + space
console.log("===================================================================");

//using of method in js

let name = "shaik majid ali";
console.log("Using of toUpperCase() method : ",name.toUpperCase());

let newString = name.toLowerCase();
console.log("Using of toLowerCase() method : ",newString);

let name1 = "     shaik majid ali       ";
name1 = name1.trim();
console.log("Using of trim() method : ",name1);

let num = "0123456789";
console.log("Using of slice(start, end) method : ",num.slice(1,6));

console.log("Using of concat(str2) method : ",num.concat(name));

console.log("Using of str.replace(searchVal, newVal) method : ",name.replace("ali",123));

console.log("Using of charAt() method : ",name.charAt(6));