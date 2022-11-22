import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cust2'
})
export class Cust2Pipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value);
    console.log(args);
    // var res= 
    return value;
  }

}
