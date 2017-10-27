import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { FormComponent } from './form/form.component';
import { CleanPipe } from './clean.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JokeComponent,
    JokeListComponent,
    FormComponent,
    CleanPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
