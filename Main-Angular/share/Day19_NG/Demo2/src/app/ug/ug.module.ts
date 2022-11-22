import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UgstaffComponent } from './ugstaff/ugstaff.component';
import { UgstudentComponent } from './ugstudent/ugstudent.component';
import { UgcourseComponent } from './ugcourse/ugcourse.component';
import {  RouterModule, Routes } from '@angular/router';
import { UghomeComponent } from './ughome/ughome.component';
import {ButtonModule} from 'primeng/button';

const route: Routes=[
  {path:'', component: UghomeComponent },
  {path:'ugstaff', component: UgstaffComponent},
  {path: 'ugstud', component: UgstudentComponent},
  {path: 'ugcourses', component: UgcourseComponent}
]

@NgModule({
  declarations: [
    UgstaffComponent,
    UgstudentComponent,
    UgcourseComponent,
    UghomeComponent,    
  ],
  imports: [
    CommonModule,
    ButtonModule,
    [RouterModule.forChild(route)]
  ],
  providers:[]
})
export class UgModule { }
