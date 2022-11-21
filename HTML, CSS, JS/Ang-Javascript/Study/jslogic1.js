
// //1.new set()
// var a=[1,2,3,4,4,3,3]
// console.log(new Set(a))

// //2.spread operator
// var b=[...a,66,77]
// console.log(b)

// //3.rest operator
// function myFun(first,a,...second){
// console.log(first);
//  console.log(second)
// }
// myFun(10,20,30,40,50)


// //4.
// var a1={}
// var a2={}
// console.log(a1==a2) //false
// console.log(a1===a2) //false

// //5.
// var a3={}
// var a4=a3;
// console.log(a3==a4) //true
// console.log(a3===a4)//true

// //6.
// console.log(0.1 + 0.2)  //0.30000000000000004
// console.log(0.1 + 0.2 == 0.3) //false

//  //7.
// console.log(typeof NaN)//number


//  //8
// let a = [1, 2, 3, 4, 5];

// console.log(a.reduce((a,b)=>a+=b))
// console.log(a.reduce((x,y)=>x+y))

// // or to add all no by 1 by 1

// var b = 0;
// a.map((e) => {
//   b = b + e;
//   console.log('value',b)
// });
// console.log(b);

// //10
// function abc(para){
//     let mob_no= Array.from(para);
//   let store=''
//   mob_no.map((item,index)=>{
//     store+= mob_no.length-4<=index ? item: item==9? 1:Number(item)+1
//   })
//   console.log(store)
//   }
//   abc("8626094355")
//   abc("9876543210")



// let adhar= Array.from("8626074355");
// let new1=''
// adhar.map((item,index)=>{
//   if(adhar.length-4<=index){
//     new1+=item
//   }else{
//     new1+=Number(item)+1
//   }
// })
// console.log(new1);


// let adhar11= Array.from("12356777770456");
// let last=adhar1.slice(-4);
// console.log("Hello, World!",last.join('').padStart(adhar11.length,"0"));


// let adhar1= Array.from("1234567893456")
// let new11=''
// adhar.map((item,index)=>{
//   if(adhar1.length-4<=index){
//     new1+=item
//   }else{
//     new1+='x'
//   }
// })
// console.log(new1)

// var d= 10- - 10;
// console.log(d)  //20


var set = new Set([1, 1, 2, 3, 5, 3, 4]) //remove the duplicate data
console.log(set)                //Set(5) { 1, 2, 3, 5, 4 }

var data1 = { name: 'pooja' };
console.warn(delete data1.name);  //true
console.log(data1)          //{}

var data11 = { name: 'punam' };
console.log(delete data11); //false

var data2 = ["peter", 'Yash', 'Akash'];
var [y, z] = data2;
console.log(y, z); //peter ,yash

var data22 = ["peter", 'Yash', 'Akash']; //to get second value
var [, y] = data22;
console.log(y);    //yash

const data3 = { name: 'Neha', age: 23, skill: 'js' };//to get name property without . operator
const { age } = data3;
console.log(age);   //23

let data4 = { name: 'anil', age: 29, skill: 'js' };
let data41 = { city: 'pune', id: 33 } //merge 2 object
data4 = { ...data4, ...data41 }
console.log(data4)      //{ name: 'anil', age: 29, skill: 'js', city: 'pune', id: 33 }

let data44 = { name: 'anil', age: 29, skill: 'js' };
let data414 = { city: 'pune', id: 33 }
data44 = { data44, ...data414 }
console.log(data44)       //{
// data44: { name: 'anil', age: 29, skill: 'js' },
// city: 'pune',
//id: 33
//}

const res =false || {} || null;
console.log(res)               //{} becoz its positive value

const res1 =null || false || '';
console.log(res1)         //   empty(there is empty string)

const res11 =[] || 0 || true;
console.log(res11)         //[]

// let dt='pooja';
// function myFun1(){
//     console.log(dt);
//     let  dt= 'Sunita'
// }
// myFun1();   // Cannot access 'dt' before initialization (hoisting rule )

console.log(`${(x=>x)('I Love ')}to program`)  //I Love to program

var r ="like"
var r1 =`like`
console.log(r===r1); //true

var r =1
var r1 =2
console.log(--r1===r); //true

var ar=[[[[]]]];
console.log(ar)

function fruit(){
    console.log(name);
    console.log(price);
    var name="apple";
    let price=20;
}
fruit()
