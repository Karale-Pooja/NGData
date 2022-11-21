var car ={
    Cname: "Renualt Tribber",
    color:'White',
    getDetails:function(){
        return this.Cname + ' '+this.color;
    }
    
}
var car2 = {
    Cnumber:1296,
    length:3990,
    __proto__:car,
}
console.log(car2.Cname);             //
console.log(car2.getDetails());
