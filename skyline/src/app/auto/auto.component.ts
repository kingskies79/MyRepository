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
  @Input() auto: Veicolo;
  constructor(porte: string, alimentazione: string) {
    super('Auto');
    this.porte = porte;
    this.alimentazione = alimentazione;
  }

  ngOnInit() {
  }

}
