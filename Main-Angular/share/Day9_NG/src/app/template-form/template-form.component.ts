import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  courses:any =['BE','BCA','BTECH','BSC'];
  fn:any="Suraj";
  constructor() { }


  ngOnInit(): void {
  }

  onSubmitForm(frm:any){
    console.log(frm.value);
    // console.log(frm.value.fname);
    // console.log("Hello form is submitted");
  }

}
