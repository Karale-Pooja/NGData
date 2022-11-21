
function abc(a){
    console.log(a);
    return function pqr(b){
        console.log("This is inside scope "+a , b);
        return (a + b);
    }
}

var res = abc(10)(20);
console.log(res);

// function pqr(){
//     // jkdshfjksd
// }

function login(username, password){
    console.log(username, password);    
    return function passwordEncrypt(){
        return (username * 10 + (password/2)*5);
    }
}

login(100, 555)();


var bmw = {
    model:'AQ',
    color: 'Red',
    engineFunction: function(){
        return this.model + ' ' + this.color;
    }
}

var audi = {
    model:'AQ33',
    color: 'Black',
    engineFunction: function(){
        return this.model + ' ' + this.color;
    }
}


var car ={
    getCarDetails: function (speedLimit, average){
        console.log( this.model + ' ' + this.color + ' '+ speedLimit + ' '+ average);
    }
}

var res = car.getCarDetails.call(audi, 100, 12);
var res2 = car.getCarDetails.apply(bmw, [120, 15]);

var res3 = car.getCarDetails.bind(bmw);

res3(160, 18);

// console.log(audi.speedLimit);








