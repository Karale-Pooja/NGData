// (1)typeof
var res = "SMSMPITR , Akluj";
console.log(typeof(res));                   //string

// // (2)valueof()
console.log(res.valueOf());               //SMSMPITR , Akluj

// // (3)CharAt()
var a1 = res.charAt(9);
console.log(a1);                         //,

var a2 = res.charAt(20);
console.log(a2);                         //empty

// // (4)Length property
console.log(res.length);                //16

// // (5)charCodeAt()
var a3 =res.charCodeAt(2);
console.log(a3);                          // 83

// (6)String concatination
var a4 = res +" is the Best Collage";
console.log(a4);                               //SMSMPITR , Akluj is the Best Collage

// // (7)indexof
var a5 = res.indexOf('S');              //0
console.log(a5);

var a6 = res.indexOf('M');
console.log(a6);                       //1

var a7 = res.indexOf('Akluj');
console.log(a7);                      //11

// // (8)lastindexof
var a8 = res.lastIndexOf('S');
console.log(a8);                   //2

var a9 = res.lastIndexOf('M');
console.log(a9);                   //3

// // (9)replace
var b1 = res.replace('R',' Research');
console.log(b1);                        //SMSMPIT Research , Akluj

var b2 = res.replace('Akluj','Pune');
console.log(b2);                         //SMSMPITR , Pune  

// // (10)Search
var b3 = res.search('SMSMPITR');
console.log(b3);                        //0

var b4 = res.search(', Akluj');
console.log(b4);                        //9

// (11)Slice
var b5 = res.slice(1,3);
console.log(b5);                        //ms

// (12)split
var b6 = res.split('');
console.log(b6);              // 'S', 'M', 'S', 'M',
                               //'P', 'I', 'T', 'R',
                               //' ', ',', ' ', 'A',
                               //'k', 'l', 'u', 'j'  
                               
var b7= res.split(',');
console.log(b7);              // 'SMSMPITR ', ' Akluj' 

// (13)toUpperCase
var b8 = res.toUpperCase();
console.log(b8);                //SMSMPITR , AKLUJ      

//(14)toLowerCase
var b9 = res.toLowerCase();
console.log(b9);                //smsmpitr , akluj

// (15)Substr
var b10 =  res.substr(2,3);
console.log(b10);               //SMP

// (16)include()
var b11 =  res.includes('Akluj');
console.log(b11);                  //true

var b12 =  res.includes('Pune');
console.log(b12);                  //false








