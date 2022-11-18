// setTimeout
let result = "Hellow World";
console.log(result);


setTimeout(function(){
    console.log("Timer 2000 here");
} , 2000);


function result2(){
    console.log("Namaste world");
}
result2();

setTimeout(()=>{
    for( let i=0; i<=5; i++)
    {
console.log(i);
    }
},3000);

setInterval(() => {
    
},);


// setInterval
function  result3(){
    console.log("Hi Developers");
} 
var a = setInterval(result3,2000);
// clearInterval(a);

//setImediate
setTimeout(()=>{
clearInterval(a)
},10000);

result3()
setImediate(result3);