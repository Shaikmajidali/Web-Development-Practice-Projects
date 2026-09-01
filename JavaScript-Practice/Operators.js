let a = 2;
let b = 3;
console.log("----------Arithmetic Operators---------------");
console.log("a = ",a, "b = ",b);
console.log("a + b = ",a+b);
console.log("a - b = ",a-b);
console.log("a * b = ",a*b);
console.log("a / b = ",a/b);
console.log("a % b = ",a%b);
console.log("a ** b = ",a**b);//using for the power number count like 2^3
console.log("============================================");

console.log("----------Unary Operators---------------");
console.log("a = ",a, "b = ",b);

console.log("--increment--");
a++; b++;
console.log("a = ",a);
console.log("b = ",b);
console.log("-----------");
console.log("a = ",++a);
console.log("b = ",++b);


console.log("--Decrement--");
a--; b--;
console.log("a = ",a);
console.log("b = ",b);
console.log("------------");
console.log("a = ",--a);
console.log("b = ",--b);

console.log("----------Assignments Operators---------------");
let c = 2; 
let d = 2;

let a1 = c += d;// c = c + b
console.log("c += d : ",a1);

let a2 = c -= d;// c = c - b
console.log("c -= d : ",a2);

let a3 = c *= d;// c = c * b
console.log("c *= d : ",a3);

let a4 = c %= d;// c = c % b
console.log("c %= d : ",a4);

let a5 = c **= d;// c = c ** b
console.log("c **= d : ",a5);

let a6 = c /= d;// c = c / b
console.log("c /= d : ",a6);

console.log("----------Comparison Operators---------------");
let aa = 5;
let bb = 2;
let cc = "5"
console.log("aa = 5","bb = 5","cc = '5'");
console.log("aa == cc : ",aa == cc);
console.log("aa != bb : ",aa != bb);
console.log("aa > bb : ",aa > bb);
console.log("aa < bb : ",aa < bb);
console.log("aa >= bb : ",aa >= bb);
console.log("aa <= cc : ",aa <= cc);

console.log("----------------------------------");
let aa1 = 5;
let bb1 = "5";
console.log("aa1 = 5","bb1 = '5'");
console.log("aa1 === bb1 : ",aa1 === bb1);
console.log("aa1 !== bb1 : ",aa1 !== bb1);

console.log("----------Logical Operators---------------");
let gg = 4;
let oo = 6;
console.log("gg = 4","00 = 6");
console.log("----------AND---------------");
console.log("using of AND '&' operators: ",gg < oo && gg != oo);
console.log("using of AND '&' operators: ",gg < oo && gg === oo);
console.log("----------OR---------------");
console.log("using of OR '||' operators: ",gg < oo || gg != oo);
console.log("using of OR '||' operators: ",gg < oo || gg == oo);
console.log("----------NOT---------------");
console.log("using of NOT '!' operators: ",gg < !oo);
console.log("using of NOT '!' operators: ",!gg < oo);

console.log("----------Ternary Operators---------------");
let age = 17;
let result = age >= 18 ? "adult" : "not adult";
console.log(result);

let age1 = 25;
let result1 = age1 >= 18 ? console.log("adult") : console.log("not adult");