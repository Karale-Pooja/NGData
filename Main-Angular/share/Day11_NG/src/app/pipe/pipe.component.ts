import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  sampleText:string="Angular Pipes";
  courses:any =['BE','BCA','BTECH','BSC'];
  date1 = new Date();
  data:any = [
    {name:"sandip", age:19 },
    {name:"sandip", age:19 },
    {name:"sandip", age:19 }
];
salary:any= 100000;  
  constructor() { }

  ngOnInit(): void {
  }

}
