import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements 
OnInit,
OnChanges,
DoCheck {

  constructor() { }

  ngOnChanges() {
    console.log("Hello this is ngOnchnages Method");
  }

  ngOnInit(): void {
    console.log("Hello this is onInit Method");
  }

  ngDoCheck(): void {
    console.log("This is do check method");
  }

}



