// undifined
var res;
console.log(res);                     //undifined
console.log(typeof(res));            //undifined

// null
var res1 = null;
console.log(res1);                   //null
console.log(typeof(res1));          //object
console.log(res1.valueOf());        //not read the value of null

var res2 = null + 10 ;
console.log(res2);                   //10


var res3 = null  + true;
console.log(res3);                  //1


var res4 = null  + "Hello";
console.log(res4);                   // nullHello




