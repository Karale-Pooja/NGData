var a = true;
var b = false;

console.log(a == b);            //false
console.log(a === b);           //false

console.log(typeof(a));        //boolean
console.log(!a);                //false

// methods of boolean
// (1) valueOf()
console.log(b.valueOf());       //false

// (2)toString()
var c = b.toString();
console.log(typeof(c))       //string
