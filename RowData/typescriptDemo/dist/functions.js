"use strict";
// generic function
// option parameters
// required Parameters
// rest parameter
// -------------------------- generic function --------------------------------
function simple_function(num1, num2) {
    return num1 + num2;
}
;
const arrow_function = (num1, num2) => num1 + num2;
// const functionName = (input_type) : output_Type => code ;
console.log('simple_function', simple_function(10, 20));
console.log('arrow_function', arrow_function(10, 20));
// ----------------- option parameters --------------------------------------------------
function option_parameters(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
;
console.log('option_parameters', option_parameters(1, 2));
console.log('option_parameters', option_parameters(1, 2, 3));
// ---------------------------- required Parameters ------------------------------------
function required_parameters(num1, num2, num3 = 10) {
    return num1 + num2 + num3;
}
;
console.log('required_parameters', required_parameters(1, 2));
console.log('required_parameters', required_parameters(1, 2, 3));
// --------------------------------- rest parameter ------------------------------------------
function rest_parameters(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((acc, num) => acc + num, 0); // if 3rd para not available then 0
}
;
console.log('rest_parameters', rest_parameters(1, 2, 3, 4, 5, 6, 7, 8));
// ------- u can use any type on input ----------
function getitem(items) {
    return new Array().concat(items);
}
getitem([1, 2, 3, 4, 5, 6, 7]);
getitem(['a', 'b', 'c', 'd', 'e', 'f']);
getitem([1, 2, 'c', 'd', 4, 'f']);
