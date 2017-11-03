import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OpaqueToken, Inject } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { FormComponent } from './form/form.component';
import {JokeService} from './joke-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JokeComponent,
    JokeListComponent,
    FormComponent
  ],

  imports: [BrowserModule],

  providers: [JokeService],

  bootstrap: [AppComponent]
})
export class AppModule { }
