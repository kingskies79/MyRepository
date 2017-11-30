import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Joke} from '../joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {
 @Output() JokeCreated = new EventEmitter<Joke>();
  constructor() { }
createJoke(setup: string, punchline: string) {
this.JokeCreated.emit(new Joke(setup, punchline, true));
}
  ngOnInit() {
  }

}
