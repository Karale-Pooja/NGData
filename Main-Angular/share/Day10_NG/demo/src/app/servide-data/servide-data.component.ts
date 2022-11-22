import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-servide-data',
  templateUrl: './servide-data.component.html',
  styleUrls: ['./servide-data.component.css']
})
export class ServideDataComponent implements OnInit {

  constructor(private mySer: DataService) {
    // console.log(this.mySer.data1);
    this.dataFromService();
   }

  ngOnInit(): void {

  }

  dataFromService(){
    this.mySer.getData().subscribe(
      (res:any)=>{
        console.log(res);
      },
      (err:any)=>{
        console.log(err);
      }
    )
    
  }

}
