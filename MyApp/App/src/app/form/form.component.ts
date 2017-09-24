import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Joke} from '../joke';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() newJoke = new EventEmitter<Joke>();
  constructor() { }

  ngOnInit() {
  }

  insertJoke(setup: string, punchline: string) {
    this.newJoke.emit(new Joke(setup, punchline, false));
  }

}
