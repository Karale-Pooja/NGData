class Father{
    constructor(Money){
        this.FMoney = Money;
    }

ShowFMoney()
    {
        return this.FMoney + "Father Money <br>";

    }
}
class Son extends Father{
    constructor(Money){
        super(Money);

    }
ShowSMoney()
{
    return "Son Money <br>";
}
}
var S = new Son (12000)      //created object
console.log(S.ShowFMoney());
console.log(S.ShowSMoney());