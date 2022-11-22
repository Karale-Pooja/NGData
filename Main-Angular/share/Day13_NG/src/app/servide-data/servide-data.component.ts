import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Data2Service } from '../service/data2.service';

@Component({
  selector: 'app-servide-data',
  templateUrl: './servide-data.component.html',
  styleUrls: ['./servide-data.component.css']
})
export class ServideDataComponent implements OnInit {
  postData:any;
  productData:any;
  constructor(private mySer: DataService, private mySer2: Data2Service) {
    // console.log(this.mySer.data1);
    this.dataFromService();
    this.getDataFromBackend();
    this.getDataFromService2();
   }

  ngOnInit(): void {
    this.getDtofProducts();

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

  getDataFromBackend(){
    console.log("Hello this is from angular component");
    this.mySer.getRealTimeData().subscribe(
      (res)=>{
        console.log(res);
        this.postData = res;
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  getDataFromService2(){
    this.mySer2.getData().subscribe(
      (res)=>{console.log(res);},
      (err)=>{console.log(err);}
    )
    // console.log(this.mySer2.getData());
  }


  getDtofProducts(){
    this.mySer2.getProductData().subscribe(
      (res)=>{ console.log(res);
      this.productData= res;
      this.productData = this.productData.products;
      console.log(this.productData);
      this.productData.map((x:any)=>{
        console.log(x);
        x.yor = 2006;
      })
      console.log(this.productData);  
    },
      (err)=>{ console.log(err)}
    )
  }

}


