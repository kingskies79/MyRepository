import { Component, OnInit, Input } from '@angular/core';
import {Veicolo} from '../veicolo';
@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent extends Veicolo implements OnInit {
  porte: string;
  alimentazione: string;
  id: number;
  @Input() auto: Veicolo;
  constructor(porte: string, alimentazione: string, id: number) {
    super('Auto');
    this.porte = porte;
    this.alimentazione = alimentazione;
    this.id = id;
  }

  ngOnInit() {
  }

}
