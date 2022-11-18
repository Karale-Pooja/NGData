// Timer for  make js aynchronous 
// (1)Timer

// (i)setTimeout

let test1 = "Hello Group Members";
console.log(test1);

setTimeout( function(){
    console.log("Hii CTS Team");
}, 5000);

function  asyjs(){
    console.log("My Name is Radha");
}
    asyjs();


setTimeout(() => {
    for( let i=0 ;i<=7; i++){
        console.log(i);
    }
    
}, 5000);    
for(let j =0; j<=10; j++){
setTimeout(() => {
        for(let i =0; i<=10; i++){
            console.log("auto increase setTimeOut" ,i);
        }
    }, 3000*j);
}
//    (ii) setInterval
// function asy1(){
//     console.log("Hello this is setinterval event");
// }

// var test4 = setInterval(asy1, 3000);
// clearInterval(test4); 
