import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  age:number =19;
  showData:boolean = false;
  stud:any = ['Suraj', 'Shubham', 'Vikas','Amol','Kiran'];
  num:any = 15;

  testClass1:any;
  testClass2:any;

  myStyle:any;
  myStyle2:any;
  constructor() { }

  ngOnInit(): void {
    this.myStyle= {'background-color':'yellow', 'font-weight':'bold' };
    this.myStyle2= {'background-color':'pink', 'font-weight':'italic' };

    if(this.age > 18){
      this.testClass1= "test1";
      this.testClass2 = "test2";
    }
  }

}
