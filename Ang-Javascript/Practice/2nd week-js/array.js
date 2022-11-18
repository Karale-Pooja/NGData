// var a = [10,20,30,50]; 
var a1 = ['pooja', 'Rohit', 'Jaydeep', 'Sanket', 'Monali', 'Sonali', 'Sujata', 'Kajal'];
console.log(a1);
console.log(typeof(a1));                   //object
console.log(a1[3]);                        //Sanket

// // 1.length 
console.log(a1.length);                     //8
 
// 2. push 
var res1 = a1.push('Nilam');
console.log(res1);                        //9
console.log(a1);                          //'pooja',   'Rohit',
                                         //'Jaydeep', 'Sanket',
                                        //'Monali',  'Sonali',
                                       //'Sujata',  'Kajal',
                                       //'Nilam'

// 3.pop
var res2 = a1.pop();
console.log(res2);
console.log(a1);                       // 'pooja',   'Rohit',
                                       //'Jaydeep', 'Sanket',
                                      //'Monali',  'Sonali',
                                      //'Sujata',  'Kajal'

// 4. unshift
var res3 = a1.unshift('Neha');
console.log(res3);                   //9
console.log(a1);                      //'Neha',   'pooja',
                                      //'Rohit',  'Jaydeep',
                                     //'Sanket', 'Monali',
                                    //'Sonali', 'Sujata',
                                     //'Kajal'

// 5. shift
var res4 = a1.shift();
console.log(res4);                   
console.log(a1);                             
                                       //'pooja',   'Rohit',
                                      //'Jaydeep', 'Sanket',
                                      //'Monali',  'Sonali',
                                     //'Sujata',  'Kajal'
  
//6.slice                                 
var res5 = a1.slice(0,2);
console.log(res5);                   //'pooja',  'Rohit',
console.log(a1);                    //'pooja',   'Rohit',
                                   //'Jaydeep', 'Sanket',
                                   //'Monali',  'Sonali',
                                   //'Sujata',  'Kajal'


var res6 = a1.slice(1,4);
console.log(res6);                 //'Rohit', 'Jaydeep', 'Sanket' 

// 7. Splice
var res7= a1.splice(2, 5,);
console.log(res7);                    // 'Jaydeep', 'Sanket', 'Monali', 'Sonali', 'Sujata' 
console.log(a1);                     //'pooja', 'Rohit', 'Kajal' 

var res8= a1.splice(2, 2, 'pihu');
console.log(res8);                            //'Jaydeep', 'Sanket'         
console.log(a1);                             // 'pooja',  'Rohit',
                                             // 'pihu',   'Monali',
                                             // 'Sonali', 'Sujata',
                                              //'Kajal'               

// 8. join

console.log(a1);
var res9 = a1.join(' ');
console.log(res9);                            //pooja Rohit Jaydeep Sanket Monali Sonali Sujata Kajal
var res10 = res9.split(' ');
console.log(res10);                           //'pooja',   'Rohit',
                                               //'Jaydeep', 'Sanket',
                                                //'Monali',  'Sonali',
                                                //'Sujata',  'Kajal'


// 9.concat
var res11 = ['Poonam', 'Rupali', 'Yogita'];
var res12 = res11.concat(res11);
console.log(res12);                                 // 'Poonam', 'Rupali', 'Yogita', 'Poonam', 'Rupali', 'Yogita' ]
var res13 = a1 + [',Poonam', 'Rupali', 'Yogita'];
console.log(res13);                                 // pooja,Rohit,Jaydeep,Sanket,Monali,Sonali,Sujata,Kajal,Poonam,Rupali,Yogita

// 10. reverse
var res14 = a1.reverse();
console.log(res14);                                  //'Kajal',  'Sujata',
                                                     //'Sonali', 'Monali',
                                                     //'Sanket', 'Jaydeep',
                                                     //'Rohit',  'pooja'

// 11. reverse string
var res15 = "PSK MIN, Pune";
var res16 = res15.split('').reverse().join(''); 
console.log(res16);                                                //enuP ,NIM KSP

var res16 = res15.split(' ').reverse().join(' ');
console.log(res16);                                                  //Pune MIN, PSK 

// 12. toString
    var res17 = a1.toString();
    console.log(res17);                                //pooja,Rohit,Jaydeep,Sanket,Monali,Sonali,Sujata,Kajal

// 13. filter
    var res18 = [1,5,4,3,6,8];
    var res19 = res18.filter(
        (item)=>{
        console.log(item);
        return item > 4;
    })
console.log(res19);                                     //[ 5, 6, 8 ]


// also we can write the below logic
var res20= res18.filter((x)=>x>6);
console.log(res20);                                     //8


var res21 = a1.filter( (x)=>{ return x.length > 6} );
console.log(res21);                                                             //[ 'Jaydeep' ]

var a2 = [' Meherdip','Somnath','Mira']
var res22 = a2.filter( (x)=> x.length > 4 );
console.log(res22);                                                   //[ ' Meherdip', 'Somnath' ]                                                         

var res23 = a2.filter( x => x.length > 3 );
console.log(res23)                                                   //[ ' Meherdip', 'Somnath', 'Mira' ]


// 14. Map
var res24 = res18.map( y => y *5);
console.log(res24);                                             //[ 5, 25, 20, 15, 30, 40 ]
var res25 = a2.map( y => "Hello "+ y);
console.log(res25);                                          //[ 'Hello  Meherdip', 'Hello Somnath', 'Hello Mira' ]

// 15.reduce
console.log(res18);
var res26 = res18.reduce((res, item)=> res * item);          2880
// var res27 = a1.reduce((res, item)=> res + item);
console.log(res26);                                         //poojaRohitJaydeepSanketMonaliSonaliSujataKajal


