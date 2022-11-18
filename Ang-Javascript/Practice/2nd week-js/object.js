let res1 = {};
console.log(res1);                        //{}
console.log(typeof(res1));                 // objecj

var employee = {
    name:"Rakesh Rane",
    age:29,
    department :'Quality' 
}
// to read the object 
// 1. dot notation
console.log(employee);            //{ name: 'Rakesh Rane', age: 29, department: 'Quality' }
console.log(employee.name);       //Rakesh Rane

// 2. square bracket notation
console.log(employee['name']);        ////Rakesh Rane


let person = {
    name: 'Ram',
    age: 25,
    hobbies: ['reading', 'writing', 'playing'],
    walking: function (){
        console.log("Person can walk");
    },
    eating: ()=>{
        console.log("Person can eat");
    }
}
console.log(person.walking());                  //Person can walk
console.log(person.eating());                   //Person can eat

// creating the object:
// 1. direct object 
var employee1 ={};
employee1.name = "Ramesh";
console.log(employee1)                    //{ name: 'Ramesh' }

// 2. Using new keyword:
var res2 = new Object();
res2.age = 32;
console.log(res2);                         //{ age: 32 }

//3. using Object.assign
var res3={fname:'Rakesh'};
var res4 = {lname:'Patil'};

var res5 = Object.assign(res3, res4);
console.log(res5);                        //{ fname: 'Rakesh', lname: 'Patil' }

// 4. Object.create()
var res6 = Object.create({fname:'Pihu'});
res6.lname = "Raut";
console.log(res6.fname);                                   //Pihu
console.log(res6.lname);                                    //Raut
console.log(res6.fname,res6.lname);                         //Pihu Raut


