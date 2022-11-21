// class Person{

//     constructor(){
//         console.log("This is an constructor function");
//     }

//     getDetails(){
//         console.log("This is normal method of class");
//     }
// }

// var student = new Person();
// console.log(student);
// console.log(student.getDetails());


class Person2{

    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }

    getFullName(){
        return this.fname + ' '+ this.lname;
    }

}

var stud2 = new Person2("Alex", "Simi");
console.log(stud2);
console.log(stud2.getFullName());

var stud3 = new Person2("Suraj", "D");


