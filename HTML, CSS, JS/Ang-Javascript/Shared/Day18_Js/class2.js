class Person{
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }
    getfullName(){
        return this.fname + ' '+ this.lname;
    }
}

class Stud extends Person{
    constructor(id, age){
        super("Rohit", "Patil");
        this.id = id;
        this.age = age;
    }
    getIDandAge(){
        return this.id + 'and age is '+ this.age;
    }
}
var stud1 = new Stud(54, 21);
console.log(stud1);
console.log(stud1.getfullName());


