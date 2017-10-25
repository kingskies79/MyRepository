import { Component, OnInit, Input } from '@angular/core';
import { Veicolo } from '../veicolo';
@Component({
  selector: 'app-veicolo',
  templateUrl: './veicolo.component.html',
  styleUrls: ['./veicolo.component.css']
})
export class VeicoloComponent  implements OnInit {
  @Input() mezzi: Veicolo;
  constructor() { }

  ngOnInit() {
  }

}
