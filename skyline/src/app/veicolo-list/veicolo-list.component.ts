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
      this.garage.unshift(mezzo);
      console.log(this.garage);
    } else {
      alert( 'Il garage è pieno');
    }
  }
  removeMezzo (id) {
    console.log('removeMezzo' + id);
   // const index: number = this.garage.indexOf(id);
    this.garage.splice(this.garage.indexOf(id), 1);
   // console.log('index' + index);
   /* if (index !== -1) {
        this.garage.splice(index, 1);
    }*/

  }

  disponibilita(): boolean {
    if (this.garage.length < this.newGarage.capienza) {
      return true;

    } else {
      return false;
    }
  }
}
