
// clouser    (access to parent) 
var i = 10;
function Show(){
    var j= 20;
    console.log(i + "<br>");
    console.log(j +"<br>");
}
Show();                              //10<br>
                                     //20<br>

// with nested function
function show1 (){
var a ="a is outer funtion";
// console.log(a + '<br>');


 function innerfun(){
    var b ="b is inner function";
    console.log(b+ "<br>");
    console.log(a);
 }
 innerfun();
//  console.log( +"<br>");

}
// show1();

