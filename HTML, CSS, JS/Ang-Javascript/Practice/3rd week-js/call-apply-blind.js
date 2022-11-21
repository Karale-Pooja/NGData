function Student (firstname,lastname,subject)
{
    this.firstname = firstname;
    this.lastname =lastname;
    this.subject=subject;
    this.greet = function(){
        console.log(`${this.firstname} ${this.lastname}`);
    }
}
let Student1 = new Student('pooja', 'karale', 'CS');
Student1.greet();         


// ex2
function Employee(firstname ,lastname, department)
{
    this.firstname = firstname;
    this.lastname =lastname;
    this.department=department;
    this.greet1 = function(){
        console.log(`${this.firstname} ${this.lastname}`);
    }

}
let emp1 = new Employee('Radha','Kale')
emp1.greet1();
// above examples makes large so

function Studentstar (firstname,lastname,subject)
{
    this.firstname = firstname;
    this.lastname =lastname;
    this.subject=subject;
}
 let greet3 = function(pk){
    console.log(` ${pk}  ${this.firstname} ${this.lastname} ${this.subject}`);
}

 let Studentstar1 = new Studentstar('nitin','patil' ,'CS');

 greet3.call(Studentstar1,"hi");
 greet3.apply(Studentstar1,"hi")
