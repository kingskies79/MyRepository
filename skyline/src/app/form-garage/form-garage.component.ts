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
  @Output() Mezzo = new EventEmitter <Veicolo>();
  selectedValue = null;
  tipoVeicolo: string;
  tipoMotore: string;
  tipoVolume: string;
  tipoPorte: string;
  tipoAlimentazione: string;
  Garage: Veicolo[] = new Array();
  isActiveAuto = false;
  isActiveMoto = false;
  isActiveFurgone = false;
  newGarage: Garage = new Garage (15, ['Auto', 'Moto', 'Furgone']);

  TipoVeicoloAmmesso = [{ name: 'Auto' }, { name: 'Moto' }, { name: 'Furgone' }];
  constructor() {

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

    if (this.disponibilita()) {
      this.Mezzo.emit(new MotoComponent(this.tipoMotore));
      console.log(this.Garage);
    } else {
      alert('Il garage è pieno');
    }

  }

  inserisciAuto(porte: string, alimentazione: string) {
    if (this.disponibilita()) {
      this.Mezzo.emit(new AutoComponent(this.tipoPorte, this.tipoAlimentazione));
      console.log(this.Garage);
    } else {
      alert('Il garage è pieno');
    }
  }
  inserisciFurgone() {

    if (this.disponibilita()) {
      this.Mezzo.emit(new FurgoneComponent(this.tipoVolume));
      console.log(this.Garage);
    } else {
      alert('Il garage è pieno');
    }
  }

  disponibilita(): boolean {
    if (this.Garage.length < this.newGarage.getCapienzaGarage()) {
      return true;
    } else {
      return false;
    }
  }
  eliminaVeicolo() {

  }
}
