import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgStyleComponent} from './ng-style/ng-style.component';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
