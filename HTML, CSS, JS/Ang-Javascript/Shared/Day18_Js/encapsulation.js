function Person(fname, lname) {
    this.fn = fname;
    let ln = lname;

    let  getfullName = function(){
        return this.fname + ' '+ this.lname;
    }

    this.getDetails = function(){
        return "Hi this is an method with global object "+fname + lname;
    }
}

var stud = new Person("Alex", "Simi");
console.log(stud.fn);
console.log(stud.getDetails());
console.log(stud.getfullName()); 