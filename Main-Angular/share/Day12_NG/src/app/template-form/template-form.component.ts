import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  courses:any =['BE','BCA','BTECH','BSC'];
  fn:any="Suraj";

  data:any =[];
  showData:boolean= false;
  constructor() { }


  ngOnInit(): void {
  }

  onSubmitForm(frm:any){

    console.log(frm.value);
    // console.log(frm.value.fname);
    // console.log("Hello form is submitted");
    this.data.push(frm.value);
    if(this.data.length > 0){
      this.showData = true;
    }

    console.log(this.data);
  }

  onDelItem(dt:any){
    console.log(dt);
    this.data.forEach((element:any) => {
      // console.log(element);
      if(dt.fname == element.fname){
        console.log(dt);
        // this.data.splice(1, 1);
      }
    });    
  }

}

// data= [
//   {fname:'Suraj', lname:'D', email:'s@gmail.com'},
//   {fname:'Rupali', lname:'G', email:'r@gmail.com'},
//   {fname:'Satish', lname:'G', email:'s@gmail.com'},
//   {fname:'aparna', lname:'D', email:'s@gmail.com'},
//   {fname:'sameer', lname:'G', email:'r@gmail.com'},
//   {fname:'deeplai', lname:'G', email:'s@gmail.com'},
//   {fname:'komal', lname:'D', email:'s@gmail.com'},
//   {fname:'Suraj', lname:'G', email:'r@gmail.com'},
//   {fname:'mandar', lname:'G', email:'s@gmail.com'}
// ]