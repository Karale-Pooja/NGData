import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  sampleFirstData:any;
  data:any;
  myData:any;
  constructor(private dataSer: DataSharingService, private router: Router) { 
    this.dataSer.getMessage().subscribe((res:any)=>{
      console.log(res);
      this.data= res;
    })
  }

  ngOnInit(): void {
    this.sendDataToBackend();
    console.log("To Delete the data");
    this.deleteData();
    this.getData();
    // this.updateData();
  }

  sendDtFromFirst(){
    this.sampleFirstData="This data is from First Component";
    this.dataSer.setMessage(this.sampleFirstData);
    this.router.navigate(['second']);
  }



  // With local nodeJS server 

  // sendDataToBackend(){
  //   this.myData ={
  //     "user4" : {  
  //       "name" : "Suraj",  
  //       "password" : "suraj123",  
  //       "profession" : "Professor",  
  //       "id": 4  
  //    }
  //   }
  //   this.dataSer.sendData(this.myData).subscribe(
  //     (res:any)=>{
  //       console.log(res);
  //     })
  // }

  // deleteData(){
  //   let id= 2;
  //   this.dataSer.deleteData(id).subscribe(
  //     (res:any)=>{
  //       console.log(res);
  //     })
  // }

  // updateData(){
  //   let id = 1;

  //   let data={
  //     "name" : "mahesh Jadhav",  
  //     "password" : "pass1",  
  //     "profession" : "Master"
  //   }
  //   this.dataSer.updateData(data, id).subscribe(
  //     (res:any)=>{
  //       console.log("This is update API");
  //       console.log(res);
  //       this.getData();
  //     })
  // }

  // getData(){
  //   this.dataSer.getData().subscribe(
  //     (res:any)=>{
  //       console.log(res);
  //     })
  // }

  // with live server

  sendDataToBackend(){
    this.myData ={
        "name": "Suraj D",
        "job": "Team Lead"
    }
    this.dataSer.sendData(this.myData).subscribe(
      (res:any)=>{
        console.log(res);
      })
  }

  deleteData(){
    let id= 1;
    this.dataSer.deleteData(id).subscribe(
      (res:any)=>{
        console.log(res);
      })
  }

  // updateData(){
  //   let id = 1;

  //   let data={
  //     "name" : "mahesh Jadhav",  
  //     "password" : "pass1",  
  //     "profession" : "Master"
  //   }
  //   this.dataSer.updateData(data, id).subscribe(
  //     (res:any)=>{
  //       console.log("This is update API");
  //       console.log(res);
  //       this.getData();
  //     })
  // }

  getData(){
    this.dataSer.getData().subscribe(
      (res:any)=>{
        console.log(res);
      })
  }

}
