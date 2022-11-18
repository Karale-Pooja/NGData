// typeof
var ans = 59;
console.log(typeof(ans));       //number

var ans1= 59.9;
console.log(typeof(ans1));      //number

// valueOf() property
var ans2=80;
console.log(ans2.valueOf());    //we got return value i.e 80
console.log(typeof(ans2));       // type is nothing but number

// toString
var ans3 = ans2.toString();
console.log(ans3);               //80
console.log(typeof(ans3));       //String

// concatation
var x  ="Radha ";
var y  = "Deshmukh";
var  z = x + y;
console.log(z);

var ans4 = 4 + 6 + '5';  
console.log(ans4);                 //105
console.log(typeof(ans4));         //string

var ans5 = 3+3+'2'+2;
console.log(ans5);                 //622

var ans6 = 1+2+'3'+1+1;
console.log(ans6);              //3311

var ans7= '3'+4-10;
console.log(ans7);              //24