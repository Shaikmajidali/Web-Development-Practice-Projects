console.log("hello majid ali");
console.log("====================================");

/* Using of Variables and value*/

age=22;//integer
price=15.7//Decimal
x=null;//showing null
y=undefined;// showing undefined
isFollow=false;//boolean
isFollow=true;//boolean
name="shaik majid ali";//String
name=12345667;


console.log(age);
console.log(name);
console.log(price);
console.log(x);
console.log(y);
console.log(isFollow);
console.log("After name update: "+name);
console.log("After the adding of the 1 in the Variables: ",age+1);
console.log("====================================");

/* using of key 'var, const, let.' */

var name="ali";
var name="majid";
var name="shaik";
console.log(name);

let Age=20;
    Age=21;
    Age=23;
let a;    
console.log(Age); 
console.log(a);   

const salary=22.90;
console.log(salary);
console.log("====================================");

/* using of key 'var, const, let.' using block*/

{
    let a=5;
    console.log(a);
}
{
    let a=10;
    console.log(a);
}
console.log("====================================");

/*Data Types in JS*/
let age1=23;
let salary1=200.24;
let name1="shaik"
let isfollow1=true;
let isfollow2=false;
let x1;
let a2=null;
let c1=BigInt("12345"); //in this Bigint value print then showing like '12345n'
let y1=Symbol("Hello!");
//----using the functon 'typeof' to see the 'DataType'-----------
console.log("Date Type this value(23): ",typeof age1);
console.log("Date Type this value(200.24): ",typeof salary1);
console.log("Date Type this value(Shaik):",typeof name1);
console.log("Date Type this value(true):",typeof isfollow1);
console.log("Date Type this value(false):",typeof isfollow2);
console.log("Date Type this value(no-value):",typeof x1);
console.log("Date Type this value(null):",typeof a2);
console.log("Date Type this value(1234):",typeof c1);
console.log("Date Type this value(Hello!):",typeof y1);
console.log("====================================");

/*using of 'object' */
const student={
    name3  :   "ali",
    age3   :    23,
    marks:      9.8,
    isPass:     true
}

console.log(student);

//now update the stud age and name
student.age3 = student.age3 + 1;
student.name3="shaik";

console.log("NAME:",student.name3);
console.log("AGE:",student.age3);
console.log("MARKS:",student.marks);
console.log("IS PASS:",student.isPass);

console.log("using the typeData: ",typeof student);

