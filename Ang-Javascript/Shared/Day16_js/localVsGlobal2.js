let test1 = "Sonali";
var test2 = 12;
const test3 = true;

function test4(){
    let test5 = 15;
    var test7 = "Hello JS";
    const test9 = 65;

    // // this is for let
    // for (let test6 = 0; test6 < 2; test6++) {
    //     // console.log(test6); // will print 0 and 1
    //     // console.log(test5); // 15
    //     // console.log(test1); // Sonali  
    // }

    // this is for var
    for (var test8 = 0; test8 < 1; test8++) {
            // console.log(test2); // 12
            // console.log(test7); // Hello JS
            // console.log(test8); // will print 0 to 1        
    }

    // this is for const
    for (let test10 = 0; test10 < 2; test10++) {
        const test11 = 90;
        // console.log(test3);
        // console.log(test9);
        // console.log(test11);
        
    }

    // this is for let
    // console.log(test6); // error 
    // console.log(test5); // 15
    // console.log(test1); // Sonali

    // this is for var
    // console.log(test2); // 12
    // console.log(test7); // Hello JS
    // console.log(test8); // Sonali  

    // this is for const
    // console.log(test3); 
    // console.log(test9); 
    // console.log(test11); 
}
// this is for let
// console.log(test6); // error
// console.log(test5); // error 
// console.log(test1); // Sonali

// this is for var
// console.log(test2); // 12
// console.log(test7); // 
// console.log(test8); //  

// this is for const
console.log(test3); // true
// console.log(test9); // error
// console.log(test11); // error

test4();