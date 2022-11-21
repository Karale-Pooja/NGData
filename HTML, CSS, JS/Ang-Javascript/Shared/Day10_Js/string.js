var test1 = "CTS LLP, Pune";

// 1.typeof
console.log(typeof(test1));

// 2.valueOf
console.log(test1.valueOf());

// 3. charAt();
var test2 = test1.charAt(7);
// var test2 = test1.charAt(400);
console.log(test2);
// this method will return charcter at given index. And if not found it will return empty.

// 4. length // length is property.
console.log(test1.length); //13
// will return length of the string. Length will always start from 1 but index will start from 0.

// 5. charCodeAt
var test3 = test1.charCodeAt(2);
console.log(test3);
// will return ASCII value of particular charcter at given string.

// 6. string concatination
var test4 = test1 + " An organization";
console.log(test4);
// used to combine two strings and will return new string.


// 7. indexOf
// var test5 = test1.indexOf('P');
// var test5 = test1.indexOf('Z');
var test5 = test1.indexOf('CTS');
console.log(test5);
// indexOf method will return index of given string or charcter and if not found will return -1



// 8. lastIndexOf()
var test6 = test1.lastIndexOf('T');
console.log(test6);
// will return last occurance index of the given char or string.

// 9. replace
var test7 = test1.replace('P','Mumbai');
// var test7 = test1.replace('Puneee','Mumbai');
// var test7 = test1.replace(test1,'Mumbai');
console.log(test7);
// will return new string by replacing the string or charcter.

// 10.search
var test8 = test1.search('CTS');
console.log(test8);
// will return start index of given string or char if found in whole string or else this will return -1.

//11. slice
// test1 = "CTS LLP, Pune"
// var test9 = test1.slice(2,1);
var test9 = test1.slice(40,7);
console.log(test9);
// slice(start index, end index -1)
// will return new string with given start index and end index minus one.
// if particular range of string or char will not found then it will return 0.

// 12. split
    // var test10 = test1.split('');
    // var test10 = test1.split(' ');
    var test10 = test1.split(',');
    console.log(test10);
   // will convert string into array based on given logic.


// 13. touppercase 
var test11 = test1.toUpperCase();
console.log(test11);
// will convert into uppercase.

// 14. tolowercase 
var test12 = test1.toLowerCase();
console.log(test12);
// will convert into lowercase.

// 15. substr
var test13 = test1.substr(2,3);
console.log(test13);
// substr(start index, length)
// will return new string with given start index and length.

// 16. include
var test14 = test1.includes('CTS');
console.log(test14);
// will return true if found the sub string or char else will return false.
