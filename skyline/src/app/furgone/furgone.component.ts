import { Component, OnInit } from '@angular/core';
import {Veicolo} from '../veicolo';

@Component({
  selector: 'app-furgone',
  templateUrl: './furgone.component.html',
  styleUrls: ['./furgone.component.css']
})
export class FurgoneComponent extends Veicolo implements OnInit {
  capacita: string;
  id: number;
  constructor(capacita: string, id: number) {
    super('Furgone');
    this.capacita = capacita;
    this.id = id;
  }

  ngOnInit() {
  }

}
