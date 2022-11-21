// generic function
// option parameters
// required Parameters
// rest parameter


// -------------------------- generic function --------------------------------
function simple_function(num1: number, num2: number): number {

    return num1 + num2;
};

const arrow_function = (num1: number, num2: number): number => num1 + num2;
// const functionName = (input_type) : output_Type => code ;

console.log('simple_function', simple_function(10, 20))
console.log('arrow_function', arrow_function(10, 20))


// ----------------- option parameters --------------------------------------------------
function option_parameters(num1: number, num2: number, num3?: number): number {

    return num3 ? num1 + num2 + num3 : num1 + num2;
};
console.log('option_parameters', option_parameters(1, 2))
console.log('option_parameters', option_parameters(1, 2, 3))

// ---------------------------- required Parameters ------------------------------------
function required_parameters(num1: number, num2: number, num3: number = 10): number {

    return num1 + num2 + num3;
};
console.log('required_parameters', required_parameters(1, 2))
console.log('required_parameters', required_parameters(1, 2, 3))

// --------------------------------- rest parameter ------------------------------------------
function rest_parameters(num1: number, num2: number, ...num3: number[]): number {

    return num1 + num2 + num3.reduce((acc, num) => acc + num, 0); // if 3rd para not available then 0
};
console.log('rest_parameters', rest_parameters(1, 2, 3, 4, 5, 6, 7, 8));

// ------- u can use any type on input ----------
function getitem<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}
getitem<number>([1, 2, 3, 4, 5, 6, 7])
getitem<string>(['a', 'b', 'c', 'd', 'e', 'f'])
getitem<any>([1, 2, 'c', 'd', 4, 'f'])