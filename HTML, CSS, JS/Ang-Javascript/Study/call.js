// var student1={
// name:'pooja',
// lname:'karale',
// age:44,
// }


// var getDetails={
// getDe:function(city,country)
// {
// console.log(this.name+' '+this.lname+' '+city+' '+country)
// }
// }

// getDetails.getDe.call(student1,'pune','India');
// getDetails.getDe.apply(student1,['pune','India'])

// var fun=getDetails.getDe.bind(student1);
// fun('pune','India')


//call /apply/ bind

var obj1={
    name:'pooja',
    lname:'karale',
    age:33,
}

var getMe={
    objMyFun:function(city,id,sallary)
    {
console.log(this.name+' '+this.age+' '+city+' '+id+' '+sallary)
    }
}
 
getMe.objMyFun.call(obj1,'pune',33,1230);
getMe.objMyFun.apply(obj1,['pune',33,1230]);

var Fun1=getMe.objMyFun.bind(obj1);
Fun1('pune',33,1230)


abc();


function abc(){
console.log("Hello ABC");
}
var test3 = 10;
test3 = "Hello JS";

console.log(test3);


//default parameter
function myfun(height,width=10){
    console.log(height*width);
}
myfun(10,20)

//template literals
// var fname = "Alex ";
// var lname = " Simi";



// var fullname = `Full name is ${fname} ${lname}.`;

// console.log(fullname);


var a= "My Name is Pooja";
var b= "I Am From Solapur";
var c= `Details :${a}  ${b}`;
console.log(c)


//array/object destructing
var a =['HTML','CSS','Javascript'];
 var [course1,course2,course3]= a;
 console.log(course1,course2,course3);

 let f= ['Teacher','Postman','Principal','Pilot'];
 let[post1,post2,post3,post4,]=f;
 console.log(post3);

 //object destructing
 var MyFavStud ={
    name:'Pihu',
    age:22,
    id:44,
    marks:89,
 }

 var{name,marks}=MyFavStud;
 console.log(name,marks);


 //class in JS

// class Mycalss11 {
//     constructor(fname,lname){
//         this.fname=fname;
//         this.lname=lname;
//     }

//     getMyClass(){
//        return this.fname+' '+this.lname;
//     }
// }

// var Myclass12= new Mycalss11 ('Harshala','kale');
// console.log(Myclass12);
// console.log(Myclass12.getMyClass());

class Pkclass1 {
    constructor(lname,age){
        this.lname=lname;
        this.age=age;
    }
    getPkMtd(){
        return this.lname+' '+this.age;
    }
}

var Pkclass2 = new Pkclass1('Patil',23);
console.log(Pkclass2);
console.log(Pkclass2.getPkMtd());

//class using extend and super keyword
class Akclass{
 constructor(fname,lname){
    this.fname=fname;
    this.lname=lname;

 }
 getMtdPk(){
    return this.fname +" "+this.lname;

 }
}
class  Akclass12 extends Akclass{
constructor(id,age){
super('Vikas','Kiradak');
    this.id=id;
    this.age=age;
}
getMtdPk1(){
    return this.id+' '+this.age;
}
}
var Aabc= new Akclass12(222,23);
console.log(Aabc);
console.log(Aabc.getMtdPk1());


//prototypal Inhiritance

var car ={
    cname:'Reanualt Tribber',
    color:"white",

    getCarD(){
        return this.cname+' '+this.color;
    }
}
var car2={
    cnumber:1296,
    seats:7,
    __proto__:car
}
console.log(car2.cnumber);
console.log(car2.cname);
console.log(car2.getCarD());


//temporal dead zone

// console.log(a11);
// var a11 = 10;


// console.log(b11);
// let b11 = 10;

// console.log(c11);

// const c11 = 10;

// let e= 12;
// let e=12;
// "use strict";


"use strict";


var a22= 10;
console.log(a22);  //10


//ex2
// function abc(){
// "use strict";
// x=30;
// console.log(x);
// }
// abc();            //ReferenceError: x is not defined

function abc(){
    "use strict";
     var x=30;
    console.log(x);
    }
    abc();         //30

//encapsulation
function PersonE(fname, lname) {
    this.fn = fname;
    let ln = lname;

    let  getfullName = function(){
        return this.fname + ' '+ this.lname;
    }

    this.getDetails = function(){
        return "Hi  global object "+fname + lname;
    }
}

var stud = new PersonE("Virat", "Patil");
console.log(stud.fn);
console.log(stud.getDetails());
// console.log(stud.getfullName()); 


//rest and spread operator

//two or more array can spread

let array1=[1,2,3];

let array2=[5,4,8,...array1];
console.log(array2);

var array3=[...array1,5,5,5];
console.log(array3);


let  array4=[3,3,...array1,4,4];
console.log(array4);


let  array5=[...array1,...array3,4,4];
console.log(array5);


function abc(a, b, ...rest){
    console.log(a, b);
    console.log(rest);
}

abc(10,15, 12,13,14,45,85,98,78,65,45);