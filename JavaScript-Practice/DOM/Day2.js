/*
DOM Manipulation

Attributes:-
.getAttributes(attr)//to get the attribute value
.setAttribute(attr, value)//to set the attribute val th

style:-
.node.style
*/

let div = document.querySelector("div");
console.log(div);

//using the getAttribute
let id = div.getAttribute("id");//using to see the attribute id,class,element select name using 
console.log(id);

//using the setAttribute(attr, value)
let set = div.setAttribute(id, "ok");//usinhg foer the change the element select name

//now using of node.style
let ok = div.style
console.log("using the node",ok);

//now change the color of div
div.style.color="blue";
div.style.fontSize="80px";

//change text
div.innerText="Hello!";
div.innerHTML="ok hello";

/*
------------------------------------------------------
DOM Mainpulation
*/

/*
----Insert Elements---
.node.append(el)//adds at the end of the node(inside)
.
*/