// 1. let and const
// 2. fat arrow function
//3. Multi line strings


// var test1 = "Hello all,
//      This is JS session";

var test1 = `Hello all,
     This is JS session`;

console.log(test1);

//4. Default Parameters

function cal(height, width=10){
    console.log(height * width);
    return height * width;
}

cal(50);

cal(50, 20);

// 5. Template Literals

var fname = "Alex ";
var lname = " Simi";

// var fullname= "Full name is ${fname} "+fname + lname;

var fullname = `Full name is ${fname} ${lname}.`;

console.log(fullname);


// 6. Object / array Destructing;
// It is used to convert array/object 
// properties into single value variable so that we can use that variable in future.
var stud = {
    name:'Alex',
    age:18
}

// console.log(stud.name);
// var name = stud.name;

// let {name}= stud;
// console.log(name);

var {name, age} = stud;
console.log(name, age);

let fruits = ["apple", 'banana'];
let [a,b] =fruits;

console.log(a,b);


