import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Garage } from '../garage';
import { Veicolo } from '../veicolo';
import { MotoComponent } from '../moto/moto.component';
import { AutoComponent } from '../auto/auto.component';
import { FurgoneComponent } from '../furgone/furgone.component';
@Component({
  selector: 'app-form-garage',
  templateUrl: './form-garage.component.html',
  styleUrls: ['./form-garage.component.css']
})
export class FormGarageComponent  implements OnInit {
  @Output() InserisciMezzo = new EventEmitter <Veicolo>();
  selectedValue = null;
  tipoVeicolo: string;
  tipoMotore: string;
  tipoVolume: string;
  tipoPorte: string;
  tipoAlimentazione: string;
  id: number;
  isActiveAuto = false;
  isActiveMoto = false;
  isActiveFurgone = false;


  TipoVeicoloAmmesso = [{ name: 'Auto' }, { name: 'Moto' }, { name: 'Furgone' }];
  constructor() {
    this.id = -1;

  }

  ngOnInit() {
  }

  dropList(tipoVeicolo: string) {
    console.log(tipoVeicolo);
    switch (this.tipoVeicolo) {

      case 'Auto': {
        this.isActiveAuto = true;
        this.isActiveMoto = false;
        this.isActiveFurgone = false;
        break;
      }
      case 'Moto': {
        this.isActiveMoto = true;
        this.isActiveAuto = false;
        this.isActiveFurgone = false;
        break;
      }
      case 'Furgone': {
        this.isActiveFurgone = true;
        this.isActiveAuto = false;
        this.isActiveMoto = false;
        break;
      }
    }
  }
  inserisciMoto() {
    this.id += 1;
     console.log('inserisciMoto');
      this.InserisciMezzo.emit(new MotoComponent(this.tipoMotore, this.id));



  }

  inserisciAuto(porte: string, alimentazione: string) {
    console.log('inserisciAuto');
    this.id += 1;
      this.InserisciMezzo.emit(new AutoComponent(this.tipoPorte, this.tipoAlimentazione, this.id));


  }
  inserisciFurgone() {

    console.log('inserisciFurgone');
    this.id += 1;
      this.InserisciMezzo.emit(new FurgoneComponent(this.tipoVolume, this.id));


  }


  eliminaVeicolo() {

  }
}
