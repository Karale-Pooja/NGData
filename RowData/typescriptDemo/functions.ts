// generic function
// option parameters
// required Parameters
// rest parameter

function add (num1 : number, num2 : number) : number {
    // simple function
    return num1 + num2;
};

const add1 = (num1 : number, num2 : number) : number => num1 + num2;  // arrow function

const add2 = (num1 : number, num2 : string) : string => num1 * num2;  // arrow function

console.log (add(10,20))
console.log (typeof add1(10,20))
console.log (typeof add2(10,'20'))