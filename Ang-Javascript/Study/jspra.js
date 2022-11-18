var test1;
// console.log(test1);no

// console.log(typeOf(test1));

var a= null;
console.log(a) //null

var b= null+5;
// console.log(b); //5
var b= null+true;
console.log(b); //1

var c= 45;
var d= '45';
// console.log(c=d); //45
// console.log(c===d); //true
console.log(c===d); //false


var z= 2+2+'2';
console.log(z); //42
var w= 2+3+'6'+6+2;
console.log(w);  //5662
var t= "2"+5-10;
console.log(t);//15

var t1= "2"-5+10;
console.log(t1);//7

var t11= "2"-5-10;
console.log(t11);//

//tostring()
var r=6 ;
var r1= r.toString();
console.log(typeof(r1));

// var str="Pooja Karale";

// console.log(str.substr(0,7));

var arr=['pooja','suraj','poonam','yash','kiran'];
var arr1=['neha','komal']
console.log(arr.concat(arr1));

// [ 'pooja', 'niluu', 'yash', 'kiran' ]

var m=['mango','apple']
var m1= m.sort();
console.log(m1)

var st= "pooja , Karale";
var st1= st.split().reverse().join();
console.log(st1);

var test15 = "CTS LLP, Pune";
var test16 = test15.split('').reverse().join('');
// var test16 = test15.split(' ').reverse().join(' ');
console.log(test16);

let d1 = true;
console.log(d1);
let test7 = {};
// console.log(test7);
console.log(typeof(test7));


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
console.log(person.eating());

var student1 ={};
student1.name = "Abc";
console.log(student1);

var test8 = new Object();
test8.age = 52;
console.log(test8);


var test9 ={fname:'Alex'};
var test10 = {lname:'Simi'};

var test11 = Object.assign(test9, test10);
console.log(test11);

var test12 = Object.create({fname:'Rajesh'});
test12.lname = "abc";
console.log(test12.lname);

var test81 = {
    fname:'Alex11 ',
    lname:'Simi111',
    getFullName: function (){
        return this.fname + this.lname;
    }
 
}

var res = {
    name:'Suraj', rollNo: 12, age: 23, marks: 512
}
console.log(res.name); 

var response = [
    {name:'Suraj', rollNo: 12, age: 23, marks: 512},
    {name:'Ekta', rollNo: 13, age: 22, marks: 525},
    {name:'Nasreen', rollNo: 14, age: 24, marks: 530},
    {name:'Shubham', rollNo: 15, age: 21, marks: 540}
]
// will work on only array of objects i.e. iterable items
for (var temp  of response){
    // console.log(temp.age);
  
}
console.log(response[1].marks);

var emp = {
    name :'Ekta',
    id: 21,
    dept:'Software Developement',
    salary: 14000
}
// console.log(Object.entries(emp)[2]);
// console.log(Object.entries(emp)[3][1]);

// console.log(emp);
// console.log(Object.seal(emp));
// emp.location = "Pune";
//  emp.id = 25;
// console.log(emp);

//   delete emp.name;
delete emp['name'];
 console.log(emp);

