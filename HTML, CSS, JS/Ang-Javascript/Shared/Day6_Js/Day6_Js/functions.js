


console.log("Hello this is not a part of function");

sum1();


function test1(a, b){
    var res = a + b;
    var sub = a-b;
    firstName ="Ganesh";
    lastName = "Hegade";
    var fullName = firstName + lastName;
    console.log(res);
}

test1(25, 15);

test1(50, 60);

test1('Suraj', 'Sameer');

function sub(x, y){
    var res1 = x - y;
    console.log(res1);
    return res1;
    console.log("Hello this is function exectun after return keyword");
    var res2 = 10 + 10;
}

var result = sub(15,5);
console.log(result);

function sum1(){
    console.log("Hello this is function");
}

sub(20, 5);



