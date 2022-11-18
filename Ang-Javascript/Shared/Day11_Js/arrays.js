// var test1 = [1,2,3];

// Array is a collection of similar data types.

var test2 = ['Suvarna', 'Anil', 'Deepak', 'Sanket', 'Monika', 'Sonali', 'Sumaiyya', 'Priya'];

// console.log(test2);
// console.log(typeof(test2));
// console.log(test2[1]);

// 1.length 
// console.log(test2.length);

// 2. push 
// var test3 = test2.push('Sujar');
// console.log(test3); //9
// console.log(test2);
// Push is used to add the element at last of the array and will return the new lenght of array.

// 3.pop
// var test4 = test2.pop();
// console.log(test4);
// console.log(test2);
// Pop is going to remove the last element of array and will return the removed element.

// 4. unshift
// var test5 = test2.unshift('Ekta');
// console.log(test5);
// console.log(test2);
// Unshift is used to add the element at first of the array and will return the new lenght of array.

// 5. shift
// var test6 = test2.shift();
// console.log(test6);
// console.log(test2);
// shift is going to remove the first element of array and will return the removed element.

// push  === unshift 
// pop === shift 

// 6.Slice
// console.log(test2);
// slice ( start index, end index -1);
// var test7 = test2.slice(0,2);
// console.log(test7);
// console.log(test2);
// So slice is going to return new array from existing array with start index to end index -1.

// 7. Splice
// var test2 = ['Suvarna', 'Anil', 'Deepak', 'Sanket', 'Monika', 'Sonali', 'Sumaiyya', 'Priya'];
// console.log(test2);
// syntax: splice ( start index , how many elements to be removed, added Elements ........)
var test8 = test2.splice(5, 2, 'Sameer');
// var test8 = test2.splice(2, 5);
console.log(test8);
// console.log(test2);
// if we pass only two params to the splice then it will return the new array stating from start index and length.
// sytax: splice(start index, length);

// if we pass more than two params to the array then it will remove the given elements and return new array or return elements.
// also this will modify original array.


// 8. join

// console.log(test2);
// var test9 = test2.join(' ');
// console.log(test9);
// var test10 = test9.split(' ');
// console.log(test10);
// join method is used to convert our array into normal string based on given business logic.

// 9.concat
// var test11 = ['Monika', 'Rupali', 'Yogesh'];
// var test12 = test11.concat(test11);
// console.log(test12);
// var test13 = test2 + ['Monika', 'Rupali', 'Yogesh'];
// console.log(test13);
// concat method is used to combine two arrays into one array.

// 10. reverse
// var test14 = test2.reverse();
// console.log(test14);
// reverse is used to reverse the array.

// 11. reverse string
// var test15 = "CTS LLP, Pune";
// var test16 = test15.split('').reverse().join('');
// var test16 = test15.split(' ').reverse().join(' ');
// console.log(test16);

//12. toString
    // var test17 = test2.toString();
    // console.log(test17);

// 13. filter
    // var test18 = [1,5,4,3,6,8];
    // var test19 = test18.filter(
    //     (item)=>{
        // console.log(item);
    //     return item > 4;
    // })
// console.log(test19);

// var test20 = test2.filter( (x)=>{ return x.length > 6} );
// var test20 = test2.filter( (x)=> x.length > 6 );
// var test20 = test2.filter( x => x.length > 6 );
// console.log(test20);
// filter method is used to filter the array element which are passing the given condition.
// filter always take an anynomous function as an paramaer inside that we can write business logic or condtion.
// if we write anynomous function in one line then return keyword is not required.


// 14. Map
// console.log(test18);
// var test21 = test18.map( y => y *5);
// var test21 = test2.map( y => "Hello "+ y);
// console.log(test21);
// map will perform the operation on each and every element of the array and return a new array.
// map will take anonymous function as param inside that there will be operation(business logic) 
// which will per performed on each element of array and returns that new array.

// 15.reduce
// console.log(test18);
// var test22 = test18.reduce((res, item)=> res * item);
// var test22 = test2.reduce((res, item)=> res + item);
// console.log(test22);
// redunce method is used to reduce the array into single value.
// it will take anynomous function with two params i.e. res (previous operation result)
// and item( array current element) then will perform operation on that 
// will return a single value.

// summary
// Category 1: 
// push 
// pop 
// shift 
// unshift 



// Category 2:
// slice 
// splice 


// Category 3:
// concat 
// join 
// reverse 
// toString 


// Category 4:
// map 
// filter
// reduce  






























