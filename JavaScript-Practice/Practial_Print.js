/*
Qs1. Create a const object called "product" to store information shown in the picture

example:-
this a pen on Amazon
Parker Jotter Standard CT Ball Pen(Black)
rating 4.3
price 270 MRP (5% off)

*/

const product =
       {
         name   : "Parker Jotter Standard CT Ball Pen(Black)",
         rating : 4.3,
         price  : 270
       };
console.log("___________________________________");
console.log("      ^     ");
console.log("     ***    ");
console.log("     ***    ");
console.log("     | |    ");
console.log("     | |    ");
console.log("     | |    ");
console.log("     | |    ");
console.log("     | |    ");
console.log("     | |    ");
console.log("     ***   ");
console.log("     '''  ");
console.log("      |     ");
console.log("___________________________________");

console.log(product.name);
console.log("****",product.rating);
console.log(product.price, "MRP (5% off)");

let  discount = product.price * 5 / 100;
product.price = product.price-discount;

console.log("Discount price "+discount);
console.log("==================================");

/*
Qs2. Create a const object called "profile" to store show in the picture
*/

let instagram =
     {
        profileName : "Shaik.Majid_Ali✅",
        follower    : 4.5,
        following   : 4,
        bio         : `💻 Coding my future, 🔥 Learning every day,
🎯 One commit closer to success.`
     };

console.log("    *****    ");
console.log("  **     **  ");
console.log(" *   علي   * ");
console.log(" *         * ");
console.log("  **     **  ");
console.log("    *****    ");

console.log("");

console.log(instagram.profileName + "     " +"|"+instagram.follower+" M|"+ "     "+"|"+instagram.following+"following|"); 
console.log(instagram.bio);

console.log("");
