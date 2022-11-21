// using tsc cmd ts convert js

// string
// number
// boolean
// array
// enum
// tuple
// any
// void
// never

// -------------- string-------------
let fname = 'akash';
// fname = 10;
console.log(fname);

// ------------ number ------------
let age: number;
age = 20;
console.log('age', age);

// ------------ boolean -------------
let isValid: boolean = true;
console.log('isValid', isValid)

// ------------ Array ----------------
let nameList: string[];
nameList = ['akash', 'akash2', 'akash3'];

let numList: Array<number>;
numList = [1, 2, 3, 4];

let results = numList.filter(val => val > 2);

let isExist = numList.find(val => val === 2);

let sum = numList.reduce((acc, num) => acc + num);

console.log('filter results', results);
console.log('find isExist', isExist);
console.log('reduce isExist', sum);

// ---------------- enum -----------------
const enum color {
    red,
    green,
    blue
}

let c: color = color.blue
console.log(c)

// ------------ tuple ---------------
let swapNum: [firstName: number, secondeName: number];

function swapNums(num1: number, num2: number): [number, number] {
    return [num2, num1];
};

swapNum = swapNums(10, 20);
swapNum[0]
swapNum[1]


let listOfTuple: [number, number, number];
listOfTuple = [1, 2, 4]
listOfTuple[2]  // help to indexing error


