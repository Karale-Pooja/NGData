import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sampletest',
  templateUrl: './sampletest.component.html',
  styleUrls: ['./sampletest.component.css']
})
export class SampletestComponent implements OnInit {

  constructor( private api: ApiService) { }
  demoString:any= "Hello Angular Testing";

  checkFlag:boolean= false;

  subject:any=['Hindi', 'English', 'Marathi'];
  subjectFlag:boolean= true;

  data:any;
  ngOnInit(): void {
    this.getData();
    this.sendData();
    this.updateData();
  }
  getData(){
   this.api.getApiData().subscribe(
      (res:any)=>{
        console.log(res)
      },
      (err:any)=>{
        console.log(err);
      }
    )
  } 
  

  sendData(){
    this.data={
      name:'Suraj D',
      job:'Asst. Professor',
      collegeName:'ABC'
    }
    this.api.sendApiData(this.data).subscribe(
      (res:any)=>{
        console.log(res);
      }
    )
  }

  updateData(){
    this.data={
      name:'Suraj D',
      job:'Head'
    }
    this.api.updateApiData(this.data).subscribe(
      (res:any)=>{
        console.log(res);
      }
    )


  }

  deleteData(){

  }

}
