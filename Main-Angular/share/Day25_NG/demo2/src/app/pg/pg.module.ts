import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgstaffComponent } from './pgstaff/pgstaff.component';
import { PgstudentComponent } from './pgstudent/pgstudent.component';
import { PgadmissionComponent } from './pgadmission/pgadmission.component';
import {RouterModule, Routes } from '@angular/router';
import { PghomeComponent } from './pghome/pghome.component';

const route: Routes=[
  {path:'', component: PghomeComponent },
  {path:'pgstaff', component: PgstaffComponent},
  {path: 'pgstud', component: PgstudentComponent},
  {path: 'pgcourses', component: PgadmissionComponent}
]

@NgModule({
  declarations: [
    PgstaffComponent,
    PgstudentComponent,
    PgadmissionComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class PGModule { }
