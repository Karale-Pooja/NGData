
var student1 = {
    fname:"Alex ",
    lname:"Simi",
    age:15,
    getFullName:function (){
        console.log(this.fname + this.lname )
        return this.fname + this.lname
    }
}

var student2 = {
    fname:"John ",
    lname:"Simi",
    age:15,
    getFullName:function (){
        console.log(this.fname + this.lname )
        return this.fname + this.lname
    }
}

var student3 = {
    fname:"Rimi ",
    lname:"Saxena",
    age:25,
    getFullName:function (){
        console.log(this.fname + this.lname )
        return this.fname + this.lname
    }
}

// console.log(student1);
// var res = student1.getFullName();
// console.log(res);


var globalStudent = {

    getStudentDetails: function(city, country, studId){
        console.log(this.fname + this.lname +' ' + city +' ' + country +' ' + studId )
    }

}

// globalStudent.getStudentDetails.call(student1, 'Pune', 'India', 51 );
// call accepts parameter as comma seperated

// globalStudent.getStudentDetails.apply(student2, ['Pune', 'India', 51]);
// apply accepts parameter as array

var bindFun = globalStudent.getStudentDetails.bind(student3);


bindFun('Mumbai', 'India', 45);






























































































bindFun('Bhopal', 'India', 47);