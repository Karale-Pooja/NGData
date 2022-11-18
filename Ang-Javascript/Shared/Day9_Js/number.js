var test1 = 45;
console.log(typeof(test1));

var test2 = 25.2;
console.log(typeof(test2));

// properties 
// 1. valueOf >> will return the value of the variable.
let test3 = 32;
console.log(test3.valueOf());

// console.log(typeof(test3));

//2. toString();
var test4 = test3.toString();
console.log(test4);
console.log(typeof(test4));

// var test5 = "45";

// // console.log(test1 == test5); // will compare only values.
// // console.log(test1 === test5); // will compare  values as well data types.
var ts5 ="Vikas ";
var ts6 = "Patil";
var test6 = ts5 + ts6;
console.log(test6);
// var test7 = 2 + 2 + '5';  //45
// console.log(test7);
// console.log(typeof(test7));

// var test8 = 2 + 2 + "2" + 2; //422
// console.log(test8);
// var test9 = 2 + '2'+ 5 + 2; // if any string value is there in the expression then all next 
//                             // values will be considered as string only.

// console.log(test9);

// var test10 = '2'+ 5 - 10; //15
// console.log(test10);



