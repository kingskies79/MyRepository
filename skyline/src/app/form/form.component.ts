import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {JokeListComponent} from '../joke-list/joke-list.component';
import {Joke} from '../joke';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() jokeCreated = new EventEmitter <Joke>();
  constructor() { }

  createJoke(setup, punchline, hidden) {

    this.jokeCreated.emit(new Joke(setup.value, punchline.value, true));
  }
  ngOnInit() {
  }

}
