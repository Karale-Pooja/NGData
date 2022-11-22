import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipeComponent } from './pipe/pipe.component';
import { CustPipe } from './cust.pipe';
import { Cust2Pipe } from './cust2.pipe';
import { CustDirDirective } from './cust-dir.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildComponent } from './lifecycle/child/child.component';
import { ServideDataComponent } from './servide-data/servide-data.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectivesComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    PipeComponent,
    CustPipe,
    Cust2Pipe,
    CustDirDirective,
    LifecycleComponent,
    ChildComponent,
    ServideDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
