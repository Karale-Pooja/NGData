import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sampletest',
  templateUrl: './sampletest.component.html',
  styleUrls: ['./sampletest.component.css']
})
export class SampletestComponent implements OnInit {

  constructor() { }
  demoString:any= "Hello Angular Testing";
  ngOnInit(): void {
  }

}
