import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule, FormControl} from '@angular/forms';
import { NgModule, OpaqueToken, Inject } from '@angular/core';
import {Http, Response, RequestOptions, Headers, HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {SearchService} from './search-service';


@NgModule({
  declarations: [
    AppComponent

  ],

  imports: [BrowserModule, HttpModule, ReactiveFormsModule, FormsModule],

  providers: [SearchService],

  bootstrap: [AppComponent]
})
export class AppModule { }
