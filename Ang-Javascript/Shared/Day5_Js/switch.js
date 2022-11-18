
var day = new Date().getDay();

console.log(day);

switch(day){
    
    default:
    day = 'Sat';
    break;

    case 0:
    day = 'Sunday';
    break;

    case 1:
    day = 'Monday';
    break;

    case 2:
    day = 'Tue';
    break;

    case 3:
    day = 'Wed';
    break;

    case 4:
    day = 'Thr';
    break;

    case 5:
    day = 'Fri';
    break;

   

}

console.log(day);