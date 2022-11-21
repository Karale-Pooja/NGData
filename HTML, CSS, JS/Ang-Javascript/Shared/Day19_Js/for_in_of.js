var person ={
    fname:"Alex",
    lname: "Simi", 
}


for (let x in person) {
  console.log(x +' '+ person[x] + " ");
}

var students = [
    {name: "Aryan", age: 21},
    {name: "Shubham", age: 20},
    {name: "Sujata", age: 18},
]

for (const y of students) {
    // console.log(y);
    console.log(y.name);
}
var x = [4,5,6,7];
for (const z of x) {
    // console.log(y);
    console.log(z);
}