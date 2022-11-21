var test1 = [1,2,3,4,5,6];
var test2 = [9,8,7];

var test3= test1.concat(test2);
console.log(test3);

// var test4 = [...test1, ...test2];
var test4 = [...test1,10,11,12, ...test2];
console.log(test4);

var test5 = {fname:"Alex"};
var test6 = { lname: "Simi"};

// var test7 = {...test5, ...test6};
// var test7 = {...test5, ...test6};
var test7 = {...test5, ...test6, ...test4};
// console.log(test7);
var test777 = [
    {fname:"Suraj", lname:"D"},
    {fname:"Shubham", lname:"L"}
]

var test77 = [...test777, ...test4];
// console.log(test77);

var test8 = [1,2,3,4,2,3,5,1];
var test9 = [...new Set(test8)];
// console.log(test9);

function abc(a, b, ...args){
    console.log(a, b);
    console.log(args);
}

abc(10,15, 12,13,14,45,85,98,78,65,45);






