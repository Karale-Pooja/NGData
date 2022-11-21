// && operator
var age = 20;
if(age>=18 && age<=21)
{
    console.log("you are eligible")
}                                  //"you are eligible"

var age = 20;
if(age>=25 && age<=21)
{
    console.log("you are eligible")
}                                  //output will not get

// || operator
var a = 20;
var b = 30;
if(a>=20||b<=50);
{
    console.log("this is ok")
}                            //"this is ok"                     

var a = 20;
var b = 30;
if(a>=20||b>=50);
{
    console.log("this is ok")
}                           //"this is ok"    

var first = true;
var second = false;
console.log(second || second); // false

// ! NOT operator
var a = 30;
var b = 15;
console.log(!a>b); //false

var a = 30;
var b = 15;
console.log(!a<b); //true
