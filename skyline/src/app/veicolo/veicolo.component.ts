import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Veicolo } from '../veicolo';
@Component({
  selector: 'app-veicolo',
  templateUrl: './veicolo.component.html',
  styleUrls: ['./veicolo.component.css']
})
export class VeicoloComponent  implements OnInit {
  @Output() rimuoviMezzo = new EventEmitter <Veicolo>();
  @Input() mezzi: Veicolo;
  constructor() { }

  ngOnInit() {
  }
  rimuoviVeicolo(id) {
    console.log('rimuoviVeicolo' + id);
    this.rimuoviMezzo.emit(id);
  }

}
