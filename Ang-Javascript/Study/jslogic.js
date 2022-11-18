// for(let i=0;i<3;i++){
//     setTimeout(()=> console.log(i),i);
// } //0
  //1
 //2

  // for( var i=0;i<3;i++){
  //   setTimeout(()=> console.log(i),i);
  // }
 //3
 //3
 //3
//  var test81 = {
//   fname:'Alex11 ',
//   lname:'Simi111',
//   getFullName: function (){
//       return this.fname + this.lname;
//   }
//  }
// console.log(test81.getFullName());


//object create method
// var stud={
// name:'pooja',
// id:22,
// grade:A,
// age:25


// }

//direct object
var a={}
a.name='pooja',
console.log(a)

//using new keyword
var b=new Object();
b.age=22;
console.log(b)

//object.assign
var c1={name:'yash'}
var c2={id:55}
var c3=Object.assign(c1,c2)
console.log(c3)

//object.create

var e =Object.create({name:'rohan'});
console.log(e.name)

//using constructor

function myfun(eName,eId,eAge){
this.empname= eName;
this.empid=eId;
this.eage=eAge

}
var t= new  myfun('gita',44,55);
console.log(t)

// var y=[
//   {name:'pooja',id:22},
//   {name:'kk',id:44}

  
// ]

// for(var mytemp of y){
//   console.log(y[1].id)
// }
// console.log(Object.entries(y)[1][1]);
// var y={
//   name:'ppp'
// }
// console.log(y)
// Object.seal(y)
// y.name='uu';

// console.log(y)

//arrof object
// const arrayOfObj=[{name:"react-js",id:66},
// {name:"angular-js",id:55}]
// arrayOfObj.push({name:"node-js"})
// console.log(arrayOfObj);

// var stud =[
  
//     {name:'pooja',id:66},
//     {name:'harish', id:99}
  
// ]
// stud.push({name:'uma'});
// // console.log(stud)

// // var stud =[
  
// //   {name:'pooja',id:66},
// //   {name:'harish', id:99},
// //   {name:'yash',id:22}
// // ]
// // console.log(stud)

// // var str="my name is pooja"

// // console.log(str.split(' ').reverse().join(' '))


// //arry
// // var b=[1,2,3,4,5,6,7,8,9];
// // var res=b.filter((item)=>{
// //     item >4;
// //     return item > 4;
// // })
// // console.log(res);


// // var res1=res.reduce((res,item)=>{
// //     return res+item;
// // })
// // console.log(res1);

// var arr=[1,3,4,6,7,]
// // var arr1 =arr.map(x=>x*4);
// // console.log(arr1)

// // var arr1= arr.map((x)=>{
// // x*4;
// // return x*4;
// // })
// // console.log(arr1)


// //filter
// // var arr2=arr.filter((x)=>{
// //   x>6;
// //   return x>6;
// // })
// // console.log(arr2)


// //reduce
// // var arr3=arr.reduce((r,t)=>{
// //   r+t;
// //   return r+t;
// // })

// // console.log(arr3)
// var rr=arr.reverse()
// console.log(rr)

// arr.length=0;
// console.log(arr)

// var arr=[1,3,4,6,7,8]
// var c=arr.splice(2,2,'poo');
// console.log(c)
// console.log(arr)

// //object

// var pep={
//   name:'harish',
//   id:99
// }
// console.log(
//   pep.name)
// console.log(pep['id'])

// var tt={}
// tt.name="golu"
// console.log(tt)

// var ee= new Object()
// ee.age=9999
// console.log(ee)

// var e={name:'lata'}
// var g ={ lname:'patil'}
// var v= Object.assign(e,g);
// console.log(v)

//  var bb =Object.create({name:'hi',id:999})
//  console.log(bb.id)

//  function muff(pNmae,pId){

//   this.Name= pNmae,
//   this.Id= pId
//  }

//  var u= new  muff('jui',55)
//  console.log(u)



// var a= "Akash"
//  a.splice(1,4)
// console.log(a.replace(/a/gi, ""))
// console.log(b)
// console.log(a)



// var a=[1,2,3,2,1,4,4]
// console.log(new Set(a))



// function myFun(arrayitem){
//   arrayitem.map((data,index)=> console.log(`index is ${index} and Value is ${data} \n`));
// }

// const arralist =["pooja","akash","prakash","subhash","dhanashri"];
// const arralist2 =["pooja","akash","prakash","subhash","dhanashri"];

// myFun(arralist)
// myFun(arralist2


var ao=[{
  name:'ruchi',
  id:22,
  age:23
}]

// ao.push({name:'riya'})

ao.shift('reva')
// console.log(ao.pop())
console.log(ao)

var a=[1,2,3,2,1,4,4]
console.log(new Set (a));

var a= "Akash"
console.log(a.replace(/a/gi,""))
console.log(a)
var a1="htoosserwaa"
console.log(a1.replace(/o/gi,""))


var a = [{name:'Ruchita', lName: 'Bhargude'},
         {name:'Girish', lName: 'Bhargude'},
         {name:'Rohit', lName:'Bobade'}];

         a.push({name:'Aditi', lName:'Bobade'});
        //  console.log(a);
         a.pop({});
        //  console.log(a);
         a.unshift({name:'pallavi', lName:'Chavan'});
        //  console.log(a);
         a.shift({});
        //  console.log(a);
         a.reverse({})
        //  console.log(a);
         a.length=0;
         console.log(a);
