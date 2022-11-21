
// 1. Timer:
// a . Settimeout
// b. setinterval
// c. setimmediate

let test1 = "Hello Javascript";
console.log(test1);

setTimeout(function (){
    console.log("Hello JS become asynchronous now");
}, 0);

function test2(){
    console.log("This is a normal behaviour of JS");  
}

test2();

// setTimeout(() => {
//     for(let i =0; i<=5; i++){
//         console.log(i);
//     }
// }, 3000);

// b setInterval

function test3(){
    console.log("Hello this is setinterval event");
}

// var test4 = setInterval(test3, 2000);

// clearInterval(test4); 


setTimeout(()=>{
    // clearInterval(test4);
}, 10000);

// test3();
setImmediate(test3);








