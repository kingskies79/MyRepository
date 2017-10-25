import { Component, OnInit } from '@angular/core';
import {Veicolo} from '../veicolo';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.css']
})
export class MotoComponent extends Veicolo implements OnInit  {
  tempi: string;
  id: number;
  constructor(tempi: string, id: number) {
    super('Moto');
    this.tempi = tempi;
    this.id = id;
  }

  ngOnInit() {
  }

}
