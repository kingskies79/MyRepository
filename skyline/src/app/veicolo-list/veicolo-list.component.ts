import { Component, OnInit } from '@angular/core';
import { Garage } from '../garage';
import { Veicolo } from '../veicolo';
import { MotoComponent } from '../moto/moto.component';
import { AutoComponent } from '../auto/auto.component';
import { FurgoneComponent } from '../furgone/furgone.component';

@Component({
  selector: 'app-veicolo-list',
  templateUrl: './veicolo-list.component.html',
  styleUrls: ['./veicolo-list.component.css']
})
export class VeicoloListComponent implements OnInit {
  newGarage: Garage= new Garage(15 , ['Auto', 'Moto' , 'Furgone}']);
  garage: Veicolo[] = new Array();
  constructor() { }

  ngOnInit() {
  }

  addMezzo(mezzo) {
    console.log(mezzo);
    if (this.disponibilita()) {
      this.garage.push(mezzo);
      console.log(this.garage);
    } else {
      alert( 'Il garage è pieno');
    }
  }
  removeMezzo (mezzo) {
    const index = this.garage.findIndex(mezzo);
  }

  disponibilita(): boolean {
    if (this.garage.length < this.newGarage.capienza) {
      return true;

    } else {
      return false;
    }
  }
}
