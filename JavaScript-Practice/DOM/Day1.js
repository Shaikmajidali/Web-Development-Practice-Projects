let heading = document.getElementById("heading");
console.log(heading);

let heading1 = document.getElementsByClassName(".heading1");
console.log(heading1);

let heading2 = document.getElementsByTagName("h2");
console.log(heading2);

//same using querySelector()
let elements1 = document.querySelector("h2");
console.dir(elements1);

let elements2 = document.querySelectorAll("heading1");// now if using the class then use the "."
console.dir(elements2);

//using of Properties

//using Properties "tagName"
console.log( elements1.tagName);

//using Properties "innerText"
let div = document.querySelector("div");
console.log(div.childNodes);
console.log(div.innerText);//use to show what writen in the tag 

//using Properties "innerHtml"
let div1 = document.querySelector("div");
console.log(div.innerHTML);//using for see the "text + tag"

//using Properties "textContent"
let div2 = document.querySelector("div");
console.log(div.textContent);// this also showing the text written in the tag but in the real from

//============================================================
//using this for practial 

/*
Sq1. Create a H2 heading element with text - "Hello JavaScript".
     Append "from Shaik Majid Ali" to this text using js.
*/

let head = document.querySelector("h3");
console.dir(head);
head.innerText = head.innerText + "from Shaik Majid Ali";

/*
Qs2. Create 3 dive with common class name - "box".
     Access them & add some unique of them.
*/

let ook = document.querySelectorAll(".hello");


//using a normal way
/*
ook[0].innerText = "Hi Ali";
ook[1].innerText = "Do home work";
ook[2].innerText = "It's me Majid";
*/

//now using of loop
let index = 1;
for(let div1 of ook)
{
div1.document.innerText = `new unique value ${index}`;
index++;
}//close of for-of-loop