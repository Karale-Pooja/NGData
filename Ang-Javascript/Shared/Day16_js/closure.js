
// setTimeout(()=>{}, 1000);

// function login(username, password){
//     console.log(username, password);
//   var res =  generateOTP(15, 50);
//   return res;
// }

// function generateOTP(username, password){
//     console.log(username, password);
//     return username + password;
// }

// login('abc','jhsdjfh');

// generateOTP('abc','jhsdjfh');

function login(username, password){
    console.log("this is outside function "+ username, password);
    var test15 = "Mixing the data";

    return function generateOTP(crypt){
        console.log(test15);
        console.log("this is inside function "+username, password);
        // var test4 = "Anup";
        return username + password;
    }

    
}


login(10, 15)("hash");


