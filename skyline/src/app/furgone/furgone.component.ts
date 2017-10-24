import { Component, OnInit } from '@angular/core';
import {Veicolo} from '../veicolo';

@Component({
  selector: 'app-furgone',
  templateUrl: './furgone.component.html',
  styleUrls: ['./furgone.component.css']
})
export class FurgoneComponent extends Veicolo implements OnInit {
  capacita: string;
  constructor(capacita: string) {
    super('Furgone');
    this.capacita = capacita;
  }

  ngOnInit() {
  }

}
