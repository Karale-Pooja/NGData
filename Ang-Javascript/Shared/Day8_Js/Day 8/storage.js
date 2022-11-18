let data = "Enpassant IT Solution, CTS";

localStorage.setItem('compname', data);

// localStorage.setItem(key, value);

var result = localStorage.getItem('compname');

console.log(result);

var data1 = "Hello Javascript";

localStorage.setItem('mydata', 'Claritech Solution');

var result1 = localStorage.getItem('mydata');

console.log(result1);

// localStorage.removeItem('mydata');

result1 = localStorage.getItem('mydata');

console.log(result1);




