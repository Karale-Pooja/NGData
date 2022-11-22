import { Component, OnInit } from '@angular/core';
import { InfoService } from '../common-service/info.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private info:InfoService) { 
    this.info.getData().subscribe((res:any)=>{
      console.log(res);
    })
  }

  ngOnInit(): void {
  }

}
