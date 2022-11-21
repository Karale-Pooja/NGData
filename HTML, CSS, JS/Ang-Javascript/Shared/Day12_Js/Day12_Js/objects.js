// Primitive data types 
let test1 = "Suraj";
let test2 = 10;
let test3 = true;
let test4 = null;
let test5 = undefined;


// non primitive data types
let test6 = [1,2,3,4];

let test7 = {};
// console.log(test7);
// console.log(typeof(test7));

var student = {
    name:"Alex Simi",
    age:21
}
// to read the object 
// 1. dot notation
// console.log(student);
// console.log(student.name); 
// 2. square bracket notation
// console.log(student['name']);

let person = {
    name: 'Harry',
    age: 45,
    hobbies: ['reading', 'writing', 'playing'],
    walking: function (){
        console.log("Person can walk");
    },
    eating: ()=>{
        console.log("Person can eat");
    }
}

// console.log(person.name);
// console.log(person.walking());

person.name = "Satish";
// console.log(person);


// creating the object:
// 1. direct object 
var student1 ={};
student1.name = "Abc";

// 2. Using new keyword:
var test8 = new Object();
test8.age = 52;
// console.log(test8);

//3. using Object.assign
var test9 ={fname:'Alex'};
var test10 = {lname:'Simi'};

var test11 = Object.assign(test9, test10);
// console.log(test11);

// 4. Object.create()
var test12 = Object.create({fname:'Rajesh'});
test12.lname = "abc";
// console.log(test12.fname);


student.rollNo = 11;

console.log(student);















