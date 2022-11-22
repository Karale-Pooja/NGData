import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { FirstComponent } from './datacommunication/first/first.component';
import { ParentComponent } from './datacommunication/parent/parent.component';
import { SecondComponent } from './datacommunication/second/second.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'staff/:id/:name', component: StaffComponent},
  {path:'stud', component: StudentComponent, canActivate: [AuthGuard]},
  {path:'contact', component: ContactusComponent, resolve:[AuthGuard]},
  {path:'parent', component: ParentComponent},
  {path:'first', component:FirstComponent },
  { path:'second', component: SecondComponent},
  {path:'**', component: ErrorComponent}
  // {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
