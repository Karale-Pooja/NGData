let res1 = "Sonali";
var res2 = 12;
const res3 = true;

function res4(){
    let res5 = 15;
    var res7 = "Hello JS";
    const res9 = 65;

    // // this is for let
    for (let res6 = 0; res6 < 2; res6++) {
        console.log(res6);                 // will print 0 and 1
        console.log(res5);                 // 15
        console.log(res1);                 // Sonali  
    }

    // this is for var
    for (var res8 = 0; res8 < 1; res8++) {
            console.log(res2);                       // 12
            console.log(res7);                     // Hello JS
            console.log(res8);                    // will print 0 to 1        
    }

    // this is for const
    for (let res10 = 0; res10 < 2; res10++) {
        const res11 = 90;
        console.log(res3);
        console.log(res9);
        console.log(res11);
        
    }

    // this is for let
    console.log(res6); // error 
    console.log(res5); // 15
    console.log(res1); // Sonali

    // this is for var
    console.log(res2); // 12
    console.log(res7); // Hello JS
    console.log(res8); // Sonali  

    // this is for const
    console.log(res3); 
    console.log(res9); 
    console.log(res11); 
}
// this is for let
console.log(res6); // error
console.log(res5); // error 
console.log(res1); // Sonali

// this is for var
console.log(res2); // 12
console.log(res7); // 
console.log(res8); //  

// this is for const
console.log(res3); // true
console.log(res9); // error
console.log(res11); // error

res4();