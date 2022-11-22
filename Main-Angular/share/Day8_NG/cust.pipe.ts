import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cust'
})
export class CustPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    console.log(value);
    console.log(args);
    // let val = value;
    // var result = value / args[1];

    var result = "Mr "+ value
    return result;
  }

}
