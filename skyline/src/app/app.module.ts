import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormGroup, FormControl, ReactiveFormsModule, FormsModule, Validator, FormBuilder} from '@angular/forms';
import { SimpleComponent } from './simple/simple.component';
import { OtherService } from './other-service';
import { SimpleService } from './simple-service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SimpleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
