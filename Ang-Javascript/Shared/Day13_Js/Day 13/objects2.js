
var test1 = {};
test1.name ="Shubham";

// console.log(test1);

// ObjectName.ObjectProperty = value 
// Object Creation
// 1. direct object
var test2 = {};
test2.empId = 123;

//2. Using new keyword
var test3 = new Object();
test3.name = "alex";

// 3. assign method
var test4 = {'fname': 'Alex'};
var test5 = {'lname' : 'Simi'};

var test6 = Object.assign(test4, test5);

// 4.Object create
var test7 = Object.create({});
test7.dept = "Software";

var test8 = {
    fname:'Alex ',
    lname:'Simi',
    getFullName: function (){
        return this.fname + this.lname;
    }
}
// 5. using constructor function:

    function test9(empName, empId, empDept){
        this.name = empName;
        this.id = empId;
        this.dept = empDept;
    }

    var test10 = new test9('Ekta', 21, 'Software Engineering');

    var test11 = new test9('Suraj', 22, 'Software Engineering');
    // console.log(test10);


// Real time Object
var res = {
    name:'Suraj', rollNo: 12, age: 23, marks: 512
}
// console.log(res.name); 

var response = [
    {name:'Suraj', rollNo: 12, age: 23, marks: 512},
    {name:'Ekta', rollNo: 13, age: 22, marks: 525},
    {name:'Nasreen', rollNo: 14, age: 24, marks: 530},
    {name:'Shubham', rollNo: 15, age: 21, marks: 540}
]
// will work on only array of objects i.e. iterable items
for (var temp  of response){
    console.log(temp.marks);
}

// console.log(response[0].marks);

// Task: extract new array of object which shows only marks of the student.


// Object Methods:
// 1. Object.Create 
// 2. Object.assing
// 3. Object.entries
// 4. Object.freeze
// 5. Object.seal 
// 6. Object.keys
// 7. Object.values 

var emp = {
    name :'Ekta',
    id: 21,
    dept:'Software Developement',
    salary: 14000
}

// Object.entries
// will return a new array of key and value of given object.
// console.log(Object.entries(emp)[2]);

// to read an multi dimensional array we can use [][]

// console.log(Object.entries(emp)[1][1]);

emp.exp = 5;

// Object.freeze
// will prevent the object from addition/ removal of new property of the object 
// as well as not allowed to internal modification.
// console.log(emp);
// Object.freeze(emp);
// emp.location = "Pune";
// emp.id = 25;

// console.log(emp);

// Object.seal
// Prevent from new addition/ removal of new property but will allowed internal modification.
// console.log(emp);
// Object.seal(emp);
// emp.location = "Pune";
// emp.id = 25;
console.log(emp);

// delete 
//  delete emp.name;
delete emp['name'];
 console.log(emp);

// Object values
// will return a new array of all the values of the object.
 console.log(Object.values(emp));


 // Object Keys
// will return a new array of all the keys of the object.
console.log(Object.keys(emp));


// for in loop will work same as for loop on array.
for(var index in emp){
    console.log(index + ': '+ emp[index]);
}
































