var person ={
    fname:"Alex",
    lname: "Simi",
    getFullName:function (){
        return this.fname + ' '+ this.lname;
    }
}

var stud1 ={
    age: 21,
    id:154,
    __proto__:person
}

console.log(stud1.age);
console.log(stud1.fname);
console.log(stud1.getFullName());