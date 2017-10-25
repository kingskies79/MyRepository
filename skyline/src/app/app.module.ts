import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormGarageComponent } from './form-garage/form-garage.component';
import { AutoComponent } from './auto/auto.component';
import { MotoComponent } from './moto/moto.component';
import { FurgoneComponent } from './furgone/furgone.component';
import { VeicoloListComponent } from './veicolo-list/veicolo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FormGarageComponent,
    AutoComponent,
    MotoComponent,
    FurgoneComponent,
    VeicoloListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
