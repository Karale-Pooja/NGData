var first = 15;
var second = 25;

var add = first + second;
var sub = first - second;
var mul = first * second;
var div = first/second;
var mod = second % first;

console.log(add); // 40
console.log(sub); // -10
console.log(mul); // 375
console.log(div); // 0.6
console.log(mod); //10

// var inc = ++first; // inc = first + 1; // pre increment operator.
// console.log(inc); //16

// var inc2 = second++; // inc2 = second + 1; // post increment operator.
// console.log(inc2); //25
// console.log(second); // 26

dec = --first; // dec = first -1; // pre decrement operator.
dec2 = second--; // dec = second -1; // post decrement operator.

console.log(dec); //14
console.log(dec2); // 25
console.log(second); //24