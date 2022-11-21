let test1 = "Suraj";
var test2 = 12;
const test3 = true;
test4 = [1,2,3];

// test3 = false; // not possible as this is an constant variable.

function test5(){
    let test6 = "Hello JS";
    console.log(test6);
    for(let i = 0; i<= 5; i++){
        console.log("Hello this is block");
        console.log(i);
        console.log(test6);
        console.log(test1);
    }
    console.log(test6);
    console.log(test1);
    console.log(i);
   

    return; 
}

test5();
// console.log(test6);