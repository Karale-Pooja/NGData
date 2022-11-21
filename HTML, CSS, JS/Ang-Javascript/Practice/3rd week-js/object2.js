
var a = {};
a.name ="pooja";              
console.log(a);                  //{ name: 'pooja' }


// Object Creation
// 1. direct object
var b = {};
b.empId = 13;
console.log(b);                 //{ empId: 13 }

//2. Using new keyword
var c = new Object();
c.name = "Sumit";
console.log(c);                    //{ name: 'Sumit' }

// 3. assign method
var d = {'fname': 'Mohan'};
var e = {'lname' : 'Patil'};
var f = Object.assign(d,e);
console.log(f);                     //{ fname: 'Mohan', lname: 'Patil' }

// 4.Object create
var g = Object.create({});
g.dept = "Testing";
console.log(g);                              //{ dept: 'Testing' }
// var h = {
//     fname:'Radha ',
//     lname:'Mane',
//     getFullName: function (){
//         return this.fname + this.lname;
        
//     }
// }


// 5. using constructor function:

    function res1(stuName, stuId, stuDept){
        this.name = stuName;
        this.id = stuId;
        this.dept = stuDept;
    }

    var res2 = new res1('Pooja', 1, 'ENTC Engineering');        //res1 { name: 'Pooja', id: 1, dept: 'ENTC Engineering' }

    var res3 = new res1('Suraj', 22, 'Software Engineering');
    console.log(res2);                                                //res1 { name: 'Suraj', id: 22, dept: 'Software Engineering' }


// Real time Object
var res = {
    name:'Neha', rollNo: 12, age: 23, marks: 512
}
console.log(res.name); 

var response = [
    {name:'Pooja', rollNo: 12, age: 23, marks: 512},
    {name:'Shambala', rollNo: 13, age: 22, marks: 525},
    {name:'Nilam', rollNo: 14, age: 24, marks: 530},
    {name:'Dipali', rollNo: 15, age: 21, marks: 540}
]
for (var ppk  of response){
    console.log(ppk.marks);                    //512
   }                                           // 525
                                              //530
                                              // 540
// }
console.log(response[0].marks);                      //512

// Object Methods:
// 3. Object.entries
// 4. Object.freeze
// 5. Object.seal 
// 6. Object.keys
// 7. Object.values 

var car= {
    name :' Renault Triber',
    color: 'white',
    seat:'seven-seater',
}

// Object.entries
console.log(Object.entries(car)[2]);                //[ 'seat', 'seven-seater' 

console.log(Object.entries(car)[1][0]);              //color



// Object.freeze
Object.freeze(car);
car.length =3,990 ;
console.log(car);                                 //{ name: ' Renault Triber', color: 'White', seat: 'seven-seater' }

// Object.seal

Object.seal(car);
car.length =3,990 ;
console.log(car);                                  //will modify the value of any property

// delete 
 delete car.name;
delete emp['name'];
 console.log(car);                                  //{ color: 'white', seat: 'seven-seater' }

// Object values
 console.log(Object.values(car));                      //[ ' Renault Triber', 'white', 'seven-seater' ]


 // Object Keys

console.log(Object.keys(car));                         //[ 'name', 'color', 'seat' ]

// For in

for(var  ppk1 in car){
        console.log( ppk1+ ': '+ car[ppk1]);             //name:  Renault Triber
                                                          //color: white
                                                         //seat: seven-seater
        
    }
    































