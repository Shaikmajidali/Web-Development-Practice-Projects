/*
Qs1. Prompt the user to enter their full name. Generate a username for them
based on the input Start username with @, followed by their full and ending 
with fullname length.  
*/

const prompt = require("prompt-sync")();
let fullName = prompt("Enter a fullname  : ");

let print = `@${fullName}${fullName.length}`;
console.log("    *****    ");
console.log("  **     **  ");
console.log(" *   علي   * ");
console.log(" *         * ");
console.log("  **     **  ");
console.log("    *****    ");
console.log("\t \t",print);

