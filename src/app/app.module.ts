import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgForGroupedComponent } from './ng-for-grouped/ng-for-grouped.component';


@NgModule({
  declarations: [
    AppComponent,
    NgForComponent,
    NgForGroupedComponent,

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
